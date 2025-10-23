/**
 * itinerary.js
 * * 處理所有與 AI 內容生成相關的邏輯，例如行程規劃、景點描述、
 * 旅費估算等。
 */
import { appState, destinationsByCountry } from './state.js';
import { callGeminiAPI, callGeminiAPIWithSchema, callTtsAPI, fetchTdxData, fetchTdxNearbyPOIs } from './api.js';
import { renderAIMap } from './map.js';
import { showError, formatAsTimeline } from './ui.js';

// --- AI 內容生成函式 ---

export async function generateDescription(destination) {
    const container = document.getElementById('descriptionContent');
    container.innerHTML = '<div class="loading"><div class="spinner"></div>正在撰寫景點故事...</div>';
    try {
        const prompt = `請用繁體中文，以一位充滿熱情且博學的說書人、旅行家的口吻，生動地介紹「${destination.name}」。內容需包含景點的歷史背景、核心魅力、以及最不容錯過的體驗。請讓文字充滿故事感。篇幅約 200-300 字。`;
        container.innerHTML = await callGeminiAPI(prompt);
    } catch (error) { 
        showError(`生成景點介紹失敗: ${error.message}`, container); 
    }
}

export async function generateItinerary(type, options = {}) {
    const container = document.getElementById('suggestionContent');
    const transportContainer = document.getElementById('transportSuggestionContainer');
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const prefs = document.getElementById('itineraryPrefs').value;
    const chosenStyle = options && options.style ? options.style : '';
    const groupInfo = options && options.group ? options.group : null;
    const departureDate = options && options.date ? options.date : null;
    const startTime = options && options.startTime ? options.startTime : null;
    const endTime = options && options.endTime ? options.endTime : null;
    const durationHours = options && options.durationHours ? options.durationHours : null;

    if (!appState.isGeminiApiVerified) return showError('AI 行程規劃需要驗證 Gemini API', container);
    // 單日行程（非 multi-day）建議使用天氣資料來優化建議
    if (type !== 'multi-day' && !appState.isCwaApiVerified) return showError('單日行程規劃需先載入天氣資料', container);
    
    transportContainer.classList.add('hidden');
    pdfBtn.classList.add('hidden');
    document.getElementById('transportContent').classList.add('hidden');
    appState.currentItineraryLocations = [];

    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在為您規劃行程與地圖...</div>`;
    document.querySelectorAll('.suggestion-btn').forEach(b => b.disabled = true);

    try {
        const schema = { type: "OBJECT", properties: { itinerary_text: { type: "STRING" }, locations: { type: "ARRAY", items: { type: "STRING" } } }, required: ["itinerary_text", "locations"] };
        const allAttractions = destinationsByCountry.taiwan.destinations.map(d => d.name);
        // 準備天氣摘要（如可用）
        let weatherSummary = '';
        let weatherRules = '';
        if (departureDate && appState.isCwaApiVerified && appState.weatherData) {
            // Gather a concise forecast summary across the itinerary cities (or for Taiwan overall)
            const summary = getForecastSummaryForDate(departureDate);
            if (summary) weatherSummary = ` 天氣摘要：${summary}`;
            // Produce actionable rules/advice based on the forecast (e.g. prefer indoor when rainy)
            try {
                const analysis = analyzeWeatherForDate(departureDate);
                if (analysis && analysis.advice) weatherRules = ` 建議：${analysis.advice}`;
            } catch (err) { console.warn('weather analysis failed', err); }
        }
        // Time constraint summary for single-day plans
        let timeConstraint = '';
        if (type !== 'multi-day') {
            if (startTime && endTime) timeConstraint = `可用時間：從 ${startTime} 到 ${endTime}（共 ${durationHours || '?'} 小時）。`;
            else if (durationHours) timeConstraint = `可用總時長：約 ${durationHours} 小時。`;
            else timeConstraint = '';
        }
    // Build group summary for prompt
    let groupSummary = '';
    if (groupInfo) {
        const parts = [];
        if (groupInfo.size) parts.push(`人數: ${groupInfo.size}`);
        if (groupInfo.hasChildren) parts.push('包含小孩');
        if (groupInfo.hasSeniors) parts.push('包含長者');
        if (groupInfo.vegetarian) parts.push('包含素食者');
        if (groupInfo.wheelchair) parts.push('需要無障礙友善設施');
        groupSummary = parts.join('、');
    }
    const prompt = createItineraryPrompt(type, allAttractions, prefs, weatherSummary, weatherRules, timeConstraint, chosenStyle, groupSummary);
        const result = await callGeminiAPIWithSchema(prompt, schema);

    // Render with day tabs when possible (dynamic import to reduce circular import risk)
    try {
        const ui = await import('./ui.js');
        ui.renderItineraryWithDayTabs(result.itinerary_text, result.locations || []);
    } catch (err) {
        container.innerHTML = formatAsTimeline(result.itinerary_text);
    }
    // keep latest generated itinerary text for exports
    try { appState.lastGeneratedItinerary = { text: result.itinerary_text, locations: result.locations || [] }; } catch(e) {}
        
        if (result.locations && result.locations.length > 0) {
            appState.currentItineraryLocations = result.locations;
            pdfBtn.classList.remove('hidden'); // 顯示 PDF 按鈕
            if (result.locations.length > 1) {
                try { await renderAIMap(result.locations); transportContainer.classList.remove('hidden'); } catch(e) { /* ignore map errors */ }
            }
        }

    } catch (error) { 
        // --- 優化：傳遞重試函式給 showError ---
    showError(`行程規劃失敗: ${error.message}`, container, () => generateItinerary(type, options));
    } finally { 
        document.querySelectorAll('.suggestion-btn').forEach(b => b.disabled = false); 
    }
}

// Export current itinerary to iCalendar (.ics)
export function exportItineraryToICS() {
    const container = document.getElementById('suggestionContent');
    if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) return showError('尚未有可匯出的行程', container);

    // Try to derive events from itinerary text and date/time inputs
    const dateStr = document.getElementById('itineraryDate') ? document.getElementById('itineraryDate').value : null;
    const startTime = document.getElementById('itineraryStartTime') ? document.getElementById('itineraryStartTime').value : null;
    const endTime = document.getElementById('itineraryEndTime') ? document.getElementById('itineraryEndTime').value : null;

    // Split itinerary text into paragraphs (heuristic)
    const paragraphs = (appState.lastGeneratedItinerary.text || '').split(/\n\n+/).filter(p => p.trim());
    const icsLines = [];
    icsLines.push('BEGIN:VCALENDAR');
    icsLines.push('VERSION:2.0');
    icsLines.push('PRODID:-//AI Travel Guide//EN');

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Taipei';

    // helper to format Date to basic YYYYMMDDTHHMMSSZ (UTC)
    const toUTCString = (d) => {
        const pad = (n) => String(n).padStart(2, '0');
        return d.getUTCFullYear() + pad(d.getUTCMonth()+1) + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
    };

    let baseDate = null;
    if (dateStr) {
        const parts = dateStr.split('-').map(Number);
        if (parts.length === 3) baseDate = new Date(parts[0], parts[1]-1, parts[2]);
    }

    // If no explicit times, create all-day events per paragraph; otherwise try to allocate sequential time windows
    let currentStart = null;
    if (baseDate && startTime) {
        const [sh, sm] = startTime.split(':').map(Number);
        currentStart = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), sh || 9, sm || 0, 0);
    }

    const durationPerParagraphMs = (baseDate && startTime && endTime) ? ( ( ( () => {
        const [sh, sm] = startTime.split(':').map(Number); const [eh, em] = endTime.split(':').map(Number);
        let s = (sh||0)*60 + (sm||0); let e = (eh||0)*60 + (em||0); if (e <= s) e += 24*60; return ((e - s) * 60 * 1000);
    })() ) / Math.max(1, paragraphs.length) ) : (60*60*1000); // default 1 hour

    paragraphs.forEach((p, idx) => {
        const uid = `ai-itin-${Date.now()}-${idx}`;
        icsLines.push('BEGIN:VEVENT');
        icsLines.push(`UID:${uid}`);
        icsLines.push(`SUMMARY:${escapeICalText(p.split('\n')[0].slice(0,80))}`);
        icsLines.push(`DESCRIPTION:${escapeICalText(p.slice(0,200))}`);

        if (currentStart) {
            const eventStart = new Date(currentStart.getTime() + idx * durationPerParagraphMs);
            const eventEnd = new Date(eventStart.getTime() + durationPerParagraphMs);
            icsLines.push(`DTSTART:${toUTCString(eventStart)}`);
            icsLines.push(`DTEND:${toUTCString(eventEnd)}`);
        } else if (baseDate) {
            // all-day event
            const d = baseDate;
            const dayStr = d.getFullYear() + String(d.getMonth()+1).padStart(2,'0') + String(d.getDate()).padStart(2,'0');
            icsLines.push(`DTSTART;VALUE=DATE:${dayStr}`);
            icsLines.push(`DTEND;VALUE=DATE:${dayStr}`);
        }

        icsLines.push('END:VEVENT');
    });

    icsLines.push('END:VCALENDAR');

    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'itinerary.ics'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function escapeICalText(txt) {
    return String(txt || '').replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\,').replace(/;/g,'\;');
}

// --- 新功能：旅費估算 (使用 Gemini schema 輸出結構化資料) ---
export async function generateBudgetEstimate(days = 1, budgetLevel = 'medium', prefs = '') {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified) return showError('AI 行程規劃需要驗證 Gemini API', container);

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在估算旅費...</div>`;

    const schema = {
        type: 'OBJECT',
        properties: {
            total_estimate_twd: { type: 'NUMBER' },
            per_day: { type: 'NUMBER' },
            breakdown: { type: 'ARRAY', items: { type: 'OBJECT', properties: { category: { type: 'STRING' }, estimate_twd: { type: 'NUMBER' }, notes: { type: 'STRING' } }, required: ['category','estimate_twd'] } },
            confidence: { type: 'STRING' }
        },
        required: ['total_estimate_twd','per_day','breakdown']
    };

    // Compose prompt with contextual info
    const attractions = appState.currentItineraryLocations && appState.currentItineraryLocations.length ? appState.currentItineraryLocations.join(', ') : destinationsByCountry.taiwan.destinations.slice(0,5).map(d=>d.name).join(', ');
    const prompt = `請以繁體中文，根據下列資訊估算一趟 ${days} 天的台灣旅遊費用參考。輸出必須符合 JSON Schema（以物件形式）：總費用 total_estimate_twd、每日平均 per_day、以及 breakdown（各類別估算，包括交通、住宿、餐飲、門票、雜支等），以及短語形式的 confidence。使用者偏好: ${prefs || '無'}; 預算等級: ${budgetLevel}; 參考景點: ${attractions}。請給出保守估算（近似到整數）。`;

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);
        // Render result
        let html = `<h4>旅費估算（參考）</h4>`;
        html += `<p><strong>總估算：</strong>${Math.round(result.total_estimate_twd)} TWD</p>`;
        html += `<p><strong>每日平均：</strong>${Math.round(result.per_day)} TWD</p>`;
        html += `<h5>項目明細</h5><ul>`;
        result.breakdown.forEach(b => { html += `<li><strong>${b.category}：</strong>${Math.round(b.estimate_twd)} TWD ${b.notes ? `<small>(${b.notes})</small>` : ''}</li>`; });
        html += `</ul>`;
        if (result.confidence) html += `<p><em>可信度：${result.confidence}</em></p>`;
        container.innerHTML = html;
    } catch (err) {
        showError(`旅費估算失敗: ${err.message}`, container, () => generateBudgetEstimate(days, budgetLevel, prefs));
    }
}

const enhancedContentPrompts = {
    cuisine: (destName) => `你是一位在地美食家。請用繁體中文，推薦 3 種在「${destName}」必吃的在地美食或特色小吃。請用 Markdown 列表呈現，並簡要說明每種美食的特色。`,
    poem: (destName) => `你是一位詩人。請以「${destName}」為靈感，用繁體中文創作一首約 50-80 字的短詩或一小段優美的散文，捕捉其神韻與氛圍。`
};

export async function generateEnhancedContent(type) {
    const container = document.getElementById('aiEnhancedContent');
    if (!appState.isGeminiApiVerified || !appState.currentDestination) return showError('請先選擇景點並驗證 API', container);
    
    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在查詢...</div>`;
    document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = true);
    
    try {
        const promptGenerator = enhancedContentPrompts[type];
        if (!promptGenerator) throw new Error(`未知的查詢類型: ${type}`);
        
        const prompt = promptGenerator(appState.currentDestination.name);
        container.innerHTML = await callGeminiAPI(prompt);
    } catch (error) {
        showError(`AI 查詢失敗: ${error.message}`, container);
    } finally {
        document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = false);
    }
}

export async function generateTransportSuggestions() {
    const container = document.getElementById('transportContent');
    if (!appState.isGeminiApiVerified || appState.currentItineraryLocations.length < 2) {
        return showError('需要先生成包含至少兩個地點的行程。', container);
    }

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在規劃交通路線...</div>`;
    document.getElementById('transportBtn').disabled = true;

    try {
        // Attempt to enrich the prompt with nearby POIs / stops for each segment using TDX
        let enrichment = '';
        try {
            const enrichToggle = document.getElementById('transportEnrichToggle') ? document.getElementById('transportEnrichToggle').checked : true;
            const enrichRadius = document.getElementById('transportEnrichRadius') ? Number(document.getElementById('transportEnrichRadius').value) : 800;
            const enrichTop = document.getElementById('transportEnrichTop') ? Number(document.getElementById('transportEnrichTop').value) : 3;

            const allDests = appState.currentItineraryLocations.map(name => destinationsByCountry.taiwan.destinations.find(d => d.name === name)).filter(Boolean);
            const segments = Math.max(0, allDests.length - 1);

            // Heuristic: if enrichment disabled or too many segments, skip enrichment
            if (appState.isTdxApiVerified && enrichToggle && segments > 0 && segments <= 5) {
                for (let i = 0; i < segments; i++) {
                    const a = allDests[i];
                    const b = allDests[i+1];
                    if (!a || !b || !a.coordinates || !b.coordinates) continue;
                    const [alat, alon] = a.coordinates;
                    const [blat, blon] = b.coordinates;
                    const nearA = await fetchTdxNearbyPOIs('ScenicSpot', alat, alon, enrichRadius, enrichTop);
                    const nearB = await fetchTdxNearbyPOIs('ScenicSpot', blat, blon, enrichRadius, enrichTop);
                    enrichment += `
Segment ${i+1}: From ${a.name} to ${b.name}.
Nearby at origin: ${nearA.map(n => n.ScenicSpotName || n.Name).filter(Boolean).slice(0,enrichTop).join(', ') || '無'}.
Nearby at destination: ${nearB.map(n => n.ScenicSpotName || n.Name).filter(Boolean).slice(0,enrichTop).join(', ') || '無'}.
`;
                }
            } else {
                if (segments > 5) console.log('Skipping enrichment due to large number of segments');
            }
        } catch (err) { console.warn('TDX enrichment failed', err); }

        const prompt = `你是一位台灣交通專家。這是一份旅遊行程的地點順序：${appState.currentItineraryLocations.join(' -> ')}。${enrichment}
請用繁體中文，為這些地點之間的移動提供最推薦的交通方式建議（例如：捷運、公車、計程車、步行）。請用 Markdown 列表格式呈現，並簡要說明理由。`;
        const result = await callGeminiAPI(prompt);
        container.innerHTML = formatAsTimeline(result.replace(/###/g, ''));
    } catch (error) {
        showError(`交通建議生成失敗: ${error.message}`, container, generateTransportSuggestions);
    } finally {
        document.getElementById('transportBtn').disabled = false;
    }
}

// --- 新功能：優化已生成的行程 ---
export async function optimizeItinerary() {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified) return showError('AI 行程優化需要驗證 Gemini API', container);
    if (!appState.currentItineraryLocations || appState.currentItineraryLocations.length < 1) return showError('尚未有可優化的行程。請先生成行程。', container);

    const currentList = appState.currentItineraryLocations;
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在優化您的行程...</div>`;
    document.getElementById('optimizeItineraryBtn').disabled = true;

    const schema = {
        type: 'OBJECT',
        properties: {
            optimized_itinerary_text: { type: 'STRING' },
            optimized_locations: { type: 'ARRAY', items: { type: 'STRING' } },
            suggestions: { type: 'ARRAY', items: { type: 'STRING' } },
            strengths: { type: 'ARRAY', items: { type: 'STRING' } }
        },
        required: ['optimized_itinerary_text','optimized_locations']
    };

    // include weather advice if available
    let weatherAdvice = '';
    try {
        const date = document.getElementById('itineraryDate') ? document.getElementById('itineraryDate').value : null;
        if (date && appState.isCwaApiVerified && appState.weatherData) {
            const analysis = analyzeWeatherForDate(date);
            if (analysis && analysis.advice) weatherAdvice = analysis.advice;
        }
    } catch (err) { console.warn('weather advice for optimize failed', err); }

    const prompt = `你是一位資深的台灣行程規劃師。下面是一份已生成的行程地點清單（由使用者選擇或 AI 產生），請幫我：
1) 最小化整體移動時間與不必要的折返（若能透過調整順序減少交通時間，請直接給出調整後的順序）。
2) 增加合理的休息/用餐時段，並指出可能的時間段。
3) 提供 3 條可立即採納的優化建議（每條 1-2 句）。
4) 列出此行程的「三大優勢」，例如文化/交通/攝影等，並用簡短句子說明每個優勢。
請針對以下地點（保持地名原文）：${currentList.join(' | ')}。
另外，若有下列天氣建議，請酌情調整：${weatherAdvice || '無'}。
輸出必須符合 JSON 格式，包含：optimized_itinerary_text（Markdown 格式的行程說明）、optimized_locations（按照建議順序的地點陣列）、suggestions（優化建議陣列）、strengths（三大優勢陣列）。`;

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);
        // Render optimized itinerary (with day tabs when applicable)
        try {
            const ui = await import('./ui.js');
            ui.renderItineraryWithDayTabs(result.optimized_itinerary_text || '無法產生優化內容。', result.optimized_locations || []);
        } catch (err) {
            container.innerHTML = formatAsTimeline(result.optimized_itinerary_text || '無法產生優化內容。');
        }
        if (result.optimized_locations && result.optimized_locations.length) {
            appState.currentItineraryLocations = result.optimized_locations;
            // Re-render map if available
            if (result.optimized_locations.length > 1) {
                try { await renderAIMap(result.optimized_locations); } catch(e) { /* ignore */ }
            }
        }
        // Show suggestions and strengths below
        let metaHtml = '<div style="margin-top:12px;">';
        if (result.suggestions && result.suggestions.length) {
            metaHtml += '<h4>優化建議</h4><ul>' + result.suggestions.map(s => `<li>${s}</li>`).join('') + '</ul>';
        }
        if (result.strengths && result.strengths.length) {
            metaHtml += '<h4>此行程三大優勢</h4><ol>' + result.strengths.map(s => `<li>${s}</li>`).join('') + '</ol>';
        }
        metaHtml += '</div>';
        container.innerHTML += metaHtml;
    } catch (err) {
        showError(`行程優化失敗: ${err.message}`, container, optimizeItinerary);
    } finally {
        document.getElementById('optimizeItineraryBtn').disabled = false;
    }
}

export async function generateChecklist() {
    const container = document.getElementById('aiEnhancedContent');
    if (!appState.isGeminiApiVerified || !appState.currentDestination) return showError('請先選擇景點並驗證 API', container);
    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在產生清單...</div>`;
    document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = true);
    
    try {
        const schema = { type: "OBJECT", properties: { categories: { type: "ARRAY", items: { type: "OBJECT", properties: { category_name: { type: "STRING" }, items: { type: "ARRAY", items: { type: "STRING" } } } } } } };
        const prompt = `為一趟前往「${destinationsByCountry[appState.currentCountry].name}」的旅行，生成一份實用旅行打包清單。`;
        const result = await callGeminiAPIWithSchema(prompt, schema);
        renderChecklist(result, container);
    } catch (error) { 
        showError(`AI 清單產生失敗: ${error.message}`, container, generateChecklist);
    } finally { 
        document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = false); 
    }
}

export async function generatePhotoSpots() {
    const container = document.getElementById('aiPhotoSpotContent');
    if (!appState.isGeminiApiVerified || !appState.currentDestination) return showError('請先選擇景點並驗證 API', container);
    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 攝影師思考中...</div>`;
    document.getElementById('photoSpotBtn').disabled = true;

    try {
        const prompt = `你是一位專業旅遊攝影師。請針對「${appState.currentDestination.name}」，用繁體中文推薦 3 個絕佳的拍照地點，並用 Markdown 列表說明地點、推薦理由與最佳時機。`;
        container.innerHTML = await callGeminiAPI(prompt);
    } catch (error) { 
        showError(`AI 推薦失敗: ${error.message}`, container, generatePhotoSpots);
    } finally { 
        document.getElementById('photoSpotBtn').disabled = false; 
    }
}

export async function generateReviewSummary() {
    const container = document.getElementById('reviewSummaryContent');
    if (!appState.currentDestination) return showError('請先選擇景點', document.getElementById('aiEnhancedContent'));
    if (!appState.isGeminiApiVerified) return showError('此功能需要驗證 Gemini API', document.getElementById('aiEnhancedContent'));

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在彙整網路評論...</div>`;

    const schema = {
        type: 'OBJECT',
        properties: {
            pros: { type: 'ARRAY', items: { type: 'STRING' } },
            cons: { type: 'ARRAY', items: { type: 'STRING' } },
            excerpts: { type: 'ARRAY', items: { type: 'STRING' } },
            sources: { type: 'ARRAY', items: { type: 'STRING' } },
            confidence: { type: 'STRING' }
        },
        required: ['pros','cons']
    };

    const dest = appState.currentDestination;
    const prompt = `你是一位資訊整合者。請模擬抓取並彙整來自常見旅遊評論網站（如 TripAdvisor、Google Reviews、KKday 社群等）的評論，針對景點「${dest.name}」生成：
1) 三個最常被提及的優點（pros），每條不超過 20 個字。
2) 三個最常被提及的缺點（cons），每條不超過 20 個字。
3) 提供 2-3 則原文摘錄作為 representative excerpts（每則 1-2 句），可模擬來源，但請標註為 "示例來源 (示意)"。
4) 若無法取得真實來源，可回傳建議的來源列表。
請以 JSON 格式回傳，符合下列 schema：pros, cons, excerpts, sources, confidence。`;

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);
        let html = '<h4>網路評論摘要（示意）</h4>';
        if (result.pros && result.pros.length) html += '<h5>三大優點</h5><ul>' + result.pros.map(p => `<li>${p}</li>`).join('') + '</ul>';
        if (result.cons && result.cons.length) html += '<h5>三大缺點</h5><ul>' + result.cons.map(c => `<li>${c}</li>`).join('') + '</ul>';
        if (result.excerpts && result.excerpts.length) html += '<h5>示例摘錄</h5><ul>' + result.excerpts.map(e => `<li>${e}</li>`).join('') + '</ul>';
        if (result.sources && result.sources.length) html += '<h5>建議來源</h5><ul>' + result.sources.map(s => `<li>${s}</li>`).join('') + '</ul>';
        if (result.confidence) html += `<p><em>可信度：${result.confidence}</em></p>`;
        container.innerHTML = html;
    } catch (err) {
        showError(`評論摘要失敗: ${err.message}`, container, generateReviewSummary);
    }
}

// 新功能：根據行程地點產生在地伴手禮推薦
export async function generateSouvenirList() {
    const container = document.getElementById('souvenirContent');
    if (!appState.isGeminiApiVerified) return showError('此功能需要驗證 Gemini API', document.getElementById('aiEnhancedContent'));

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在產生伴手禮推薦...</div>`;

    try {
        // Use the current itinerary locations as context; fall back to selected destination
        const locations = (appState.currentItineraryLocations && appState.currentItineraryLocations.length) ? appState.currentItineraryLocations : (appState.currentDestination ? [appState.currentDestination.name] : []);
        const sampleLocations = locations.slice(0,6).join(', ') || destinationsByCountry.taiwan.destinations.slice(0,5).map(d=>d.name).join(', ');

        const schema = {
            type: 'OBJECT',
            properties: {
                souvenirs: { type: 'ARRAY', items: { type: 'OBJECT', properties: {
                    name: { type: 'STRING' },
                    description: { type: 'STRING' },
                    city: { type: 'STRING' },
                    where_to_buy: { type: 'STRING' },
                    estimated_price_twd: { type: 'NUMBER' }
                }, required: ['name','description','where_to_buy'] } },
                confidence: { type: 'STRING' }
            },
            required: ['souvenirs']
        };

        const prompt = `你是一位熟悉台灣各地特產與伴手禮的在地導覽專家。根據使用者行程會拜訪的位置（例如：${sampleLocations}），請推薦 6 項或更少、最具代表性的在地伴手禮（souvenirs）。每項需包含：名稱、1-2 句描述、推薦購買城市/地點（city）、在哪裡可以買到（where_to_buy，例如：特定市場/老店/伴手禮店/車站附近/百貨公司等）、以及大致價格範圍（estimated_price_twd，若不確定可省略）。請用繁體中文輸出 JSON，並符合我提供的 schema。`;

        const result = await callGeminiAPIWithSchema(prompt, schema);

        // Render result
        let html = '<h4>在地伴手禮推薦</h4>';
        if (result.souvenirs && result.souvenirs.length) {
            html += '<ul>' + result.souvenirs.map(s => {
                const price = s.estimated_price_twd ? ` <small>（約 ${Math.round(s.estimated_price_twd)} TWD）</small>` : '';
                const city = s.city ? `<strong>${s.city}</strong> — ` : '';
                return `<li><strong>${s.name}</strong>${price}<br><em>${city}${s.description}</em><br><small>在哪裡買：${s.where_to_buy}</small></li>`;
            }).join('') + '</ul>';
        } else {
            html += '<p>未能產生推薦項目。</p>';
        }
        if (result.confidence) html += `<p><em>可信度：${result.confidence}</em></p>`;
        container.innerHTML = html;
    } catch (err) {
        showError(`伴手禮推薦失敗: ${err.message}`, container, generateSouvenirList);
    }
}

export async function findNearbyTDXData(type) {
    const container = document.getElementById('aiEnhancedContent');
    if (!appState.isTdxApiVerified || !appState.currentDestination) {
        return showError('請先選擇景點並驗證 TDX API', container);
    }

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>正在從 TDX 搜尋資料...</div>`;
    document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = true);

    const [lat, lon] = appState.currentDestination.coordinates;
    const radius = 2000;
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${type}?$top=5&$spatialFilter=nearby(${lat},${lon},${radius})&$format=JSON`;
    
    try {
        const results = await fetchTdxData(apiUrl);
        renderTdxResults(results, type, container);
    } catch (error) {
        showError(`TDX 資料搜尋失敗: ${error.message}`, container, () => findNearbyTDXData(type));
    } finally {
        document.querySelectorAll('.enhanced-btn').forEach(b => b.disabled = false);
    }
}

export async function generateCurrencyConversion() {
    const container = document.getElementById('aiEnhancedContent');
    const amount = document.getElementById('amountToConvert').value;
    const currency = document.getElementById('targetCurrency').value;

    if (!appState.isGeminiApiVerified) return showError('此功能需要驗證 Gemini API', container);
    if (!amount || !currency) {
        showError('請輸入金額與目標貨幣', container);
        container.classList.remove('hidden');
        return;
    }
    
    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在為您計算...</div>`;

    try {
        const countryName = destinationsByCountry[appState.currentCountry]?.name || '目的地國家';
        const prompt = `你是一位精通金融的旅遊助理。請將 ${amount} 新台幣 (TWD) 轉換為 ${currency}。
        回應規則：
        1. 直接告訴我轉換後的金額。
        2. 簡要說明當前的匯率（參考值即可）。
        3. 友善地舉例說明這筆錢在「${countryName}」大概可以買到什麼（例如：幾杯咖啡、一頓簡餐等）。
        4. 全部用繁體中文回答。`;
        
        container.innerHTML = await callGeminiAPI(prompt);
    } catch (error) {
        showError(`金額估算失敗: ${error.message}`, container, generateCurrencyConversion);
    }
}

export async function generateTTS() {
    const ttsBtn = document.getElementById('ttsBtn');
    const descriptionText = document.getElementById('descriptionContent').innerText;

    if (!appState.isGeminiApiVerified) return showError('語音導覽需要驗證 Gemini API', document.getElementById('aiEnhancedContent'));
    if (!descriptionText || descriptionText.includes('正在撰寫')) return showError('請先生成景點故事', document.getElementById('aiEnhancedContent'));
    
    // Use HTML5 audio element for playback + native controls + accessibility
    ttsBtn.innerHTML = '<div class="spinner" style="width:18px; height:18px; border-top-color:white; margin: auto;"></div>';
    ttsBtn.disabled = true;

    try {
        const prompt = `請用沉穩且富有磁性的聲音朗讀以下內容：${descriptionText}`;
        const { audioData, mimeType } = await callTtsAPI(prompt);

        // cleanup previous audio element source
        const audioEl = document.getElementById('ttsAudio');
        const transcriptEl = document.getElementById('ttsTranscript');
        const container = document.getElementById('ttsPlayerContainer');

        // Revoke old object URL if present
        if (audioEl.dataset.srcUrl) {
            URL.revokeObjectURL(audioEl.dataset.srcUrl);
            delete audioEl.dataset.srcUrl;
        }

        // Convert base64 audioData to Blob
        const binary = atob(audioData);
        const len = binary.length;
        const buf = new Uint8Array(len);
        for (let i = 0; i < len; i++) buf[i] = binary.charCodeAt(i);
        const blob = new Blob([buf], { type: mimeType || 'audio/wav' });
        const url = URL.createObjectURL(blob);
        audioEl.src = url;
        audioEl.dataset.srcUrl = url;
        audioEl.style.display = 'block';
        audioEl.controls = true;

        // Show transcript for accessibility (use description text)
        if (transcriptEl) {
            transcriptEl.style.display = 'block';
            transcriptEl.textContent = descriptionText;
        }

        if (container) container.classList.remove('hidden');

        // Play automatically (optional) — here we do not autoplay to respect browsers' autoplay policies
        // audioEl.play();

        // Wire analytics or timeupdate if desired
        audioEl.addEventListener('ended', () => {
            ttsBtn.innerHTML = '🔊 語音導覽';
        });

        ttsBtn.innerHTML = '⏹️ 停止播放';
        // Toggle behavior: if clicked again, pause/stop
        ttsBtn.onclick = () => {
            if (!audioEl) return;
            if (audioEl.paused) { audioEl.play(); ttsBtn.innerHTML = '⏹️ 停止播放'; }
            else { audioEl.pause(); audioEl.currentTime = 0; ttsBtn.innerHTML = '🔊 語音導覽'; }
        };

    } catch (error) {
        showError(`語音生成失敗: ${error.message}`, document.getElementById('aiEnhancedContent'));
        ttsBtn.innerHTML = '🔊 語音導覽';
    } finally {
        ttsBtn.disabled = false;
    }
}

export async function downloadItineraryAsPDF() {
    const { jsPDF } = window.jspdf;
    const itineraryContent = document.getElementById('suggestionContent');
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const originalText = pdfBtn.innerText;
    pdfBtn.innerText = 'PDF 產生中...';
    pdfBtn.disabled = true;

    try {
        const canvas = await html2canvas(itineraryContent, {
            scale: 2, 
            useCORS: true,
            backgroundColor: '#ffffff'
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('AI-Travel-Itinerary.pdf');
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("抱歉，PDF 檔案產生失敗。");
    } finally {
        pdfBtn.innerText = originalText;
        pdfBtn.disabled = false;
    }
}


// --- 輔助函式 ---

function createItineraryPrompt(type, allAttractions, prefs, weatherSummary = '', weatherRules = '', timeConstraint = '', travelStyle = '', groupInstructions = '') {
    let dayType, weatherConstraint;
    const userPrefs = prefs ? `並請務必考慮以下使用者偏好： **${prefs}**。` : '';
    switch (type) {
        case 'sunny': dayType = '晴朗'; weatherConstraint = `天氣晴朗，請多安排戶外活動。`; break;
        case 'rainy': dayType = '下雨'; weatherConstraint = `下雨了，請多安排室內活動。`; break;
        case 'lucky': dayType = '驚喜'; weatherConstraint = `請為我規劃一個充滿驚喜、獨一無二的「手氣不錯」行程！`; break;
        case 'multi-day': dayType = '多日'; weatherConstraint = `請為我規劃一個精彩的「台灣三日遊」行程。`; break;
    }
    const basePrompt = (type === 'multi-day')
        ? `你是一位專業的台灣旅遊規劃師。請為我規劃一個精彩的台灣三日遊行程。`
        : `你是一位專業的台灣旅遊規劃師。今天天氣是「${dayType}」。請為我規劃一個精彩的台灣一日遊行程。`;
      return `${basePrompt} 規則：
          1. ${weatherConstraint} ${userPrefs}
          1.5. ${weatherSummary}
          1.55. ${timeConstraint}
          1.6. 注意天氣建議：${weatherRules}
          1.65. 旅行風格指示：${travelStyle || '無特定風格'}。
          1.7. 旅遊團體資訊：${groupInstructions || '無特別需求'}。
          2. 請從以下景點列表中挑選合適的地點：${allAttractions.join('、')}。你也可以加入列表中沒有，但非常合適的地點。
        3. 回應必須是包含 'itinerary_text' 和 'locations' 兩個 key 的 JSON 物件。
        4. 'itinerary_text' 的內容是 Markdown 格式的行程，時段用三級標題 (###)，活動用項目符號(-)。口吻要像一位親切的朋友。
        5. 'locations' 是一個陣列，包含行程中所有提到的「具體地點」的字串名稱。`;
}

// Analyze CWA weather data for a specific date and return simple advice rules
function analyzeWeatherForDate(dateStr) {
    if (!appState.weatherData) return null;
    try {
        // Aggregate conditions and temps across available locations
        const conds = [];
        const temps = [];
        appState.weatherData.forEach(loc => {
            const wxElem = loc.weatherElement.find(e => e.elementName === 'Wx');
            const tempElem = loc.weatherElement.find(e => e.elementName === 'T');
            if (wxElem) {
                const t = wxElem.time && wxElem.time.find(tt => tt.startTime && tt.startTime.startsWith(dateStr));
                if (t && t.parameter && t.parameter.parameterName) conds.push(t.parameter.parameterName.toLowerCase());
            }
            if (tempElem) {
                const tt = tempElem.time && tempElem.time.find(te => te.startTime && te.startTime.startsWith(dateStr));
                if (tt && tt.elementValue && tt.elementValue[0] && tt.elementValue[0].value) temps.push(Number(tt.elementValue[0].value));
            }
        });

        // Heuristics
        const condText = conds.join(' ');
        const avgTemp = temps.length ? (temps.reduce((a,b)=>a+b,0)/temps.length) : null;

        // Determine advice
        let adviceParts = [];
        if (/rain|showers|thunder|雷雨|下雨|陣雨/.test(condText)) {
            adviceParts.push('當日有降雨，建議以室內景點為主或將室外行程安排於有遮蔽的時間');
        }
        if (/cloudy|overcast|陰天|多雲/.test(condText) && !/rain/.test(condText)) {
            adviceParts.push('天氣偏多雲，戶外活動仍可進行，但請備用室內方案');
        }
        if (avgTemp !== null) {
            if (avgTemp >= 30) adviceParts.push('氣溫較高，建議安排消暑或水上活動，並避免中午時段長時間曝曬');
            else if (avgTemp <= 15) adviceParts.push('氣溫偏低，請多安排室內或保暖的選項，並提醒攜帶外套');
        }

        if (adviceParts.length === 0) adviceParts.push('天氣適中，請平衡室內與戶外活動');

        return { conds: conds, avgTemp: avgTemp, advice: adviceParts.join('；') };
    } catch (err) { console.warn('analyzeWeatherForDate error', err); return null; }
}

// Given a departure date (YYYY-MM-DD), derive a short, human-friendly forecast summary
function getForecastSummaryForDate(dateStr) {
    if (!appState.weatherData) return '';
    try {
        // CWA structure: appState.weatherData is an array of location objects; each has weatherElement with Wx, etc.
        // We'll compute a simple summary: most common Wx description and an approximate min/max temperature if available.
        const wxList = [];
        const temps = [];
        appState.weatherData.forEach(loc => {
            const wxElem = loc.weatherElement.find(e => e.elementName === 'Wx');
            const tempElem = loc.weatherElement.find(e => e.elementName === 'T');
            if (wxElem) {
                const timeEntry = wxElem.time && wxElem.time.find(t => t.startTime && t.startTime.startsWith(dateStr));
                if (timeEntry && timeEntry.parameter && timeEntry.parameter.parameterName) wxList.push(timeEntry.parameter.parameterName);
            }
            if (tempElem) {
                const tEntry = tempElem.time && tempElem.time.find(t => t.startTime && t.startTime.startsWith(dateStr));
                if (tEntry && tEntry.elementValue) {
                    const val = tEntry.elementValue[0].value || tEntry.elementValue[0].measures || null;
                    if (val) temps.push(Number(val));
                }
            }
        });

        const mostCommonWx = wxList.sort((a,b) => wxList.filter(v=>v===a).length - wxList.filter(v=>v===b).length).pop();
        const minT = temps.length ? Math.min(...temps) : null;
        const maxT = temps.length ? Math.max(...temps) : null;
        let parts = [];
        if (mostCommonWx) parts.push(mostCommonWx);
        if (minT !== null && maxT !== null) parts.push(`${minT}~${maxT}°C`);
        return parts.join('，');
    } catch (err) { console.warn('forecast summary error', err); return ''; }
}

function renderChecklist(data, container) {
    if (!data.categories) return container.innerHTML = "無法解析清單資料。";
    let html = data.categories.map(cat => `<h4>${cat.category_name}</h4><ul>${cat.items.map(item => `<li>${item}</li>`).join('')}</ul>`).join('');
    container.innerHTML = formatAsTimeline(html.replace(/<h4>/g, '### ').replace(/<\/h4>/g, '\n').replace(/<ul>/g, '').replace(/<\/ul>/g, '').replace(/<li>/g, '- ').replace(/<\/li>/g, '\n'));
}

function renderTdxResults(results, type, container) {
    let title = (type === 'Restaurant') ? '🍽️ 附近美食' : '🏨 附近住宿';
    if (results.length === 0) {
        container.innerHTML = `<h4>${title}</h4><p>在附近找不到相關資訊。</p>`;
        return;
    }
    let contentHtml = results.map(item => {
        const name = item.RestaurantName || item.HotelName;
        const address = item.Address || '無地址資訊';
        const phone = item.Phone || '無電話資訊';
        const openTime = item.OpenTime || '';
        return `<li><strong>${name}</strong><br><small>地址: ${address}<br>電話: ${phone}${openTime ? `<br>營業時間: ${openTime}` : ''}</small></li>`;
    }).join('');
    container.innerHTML = `<h3>${title}</h3><ul>${contentHtml}</ul>`;
    container.innerHTML = formatAsTimeline(container.innerHTML.replace(/<h3>/g, '### ').replace(/<\/h3>/g, '\n').replace(/<ul>/g, '').replace(/<\/ul>/g, '').replace(/<li>/g, '- ').replace(/<\/li>/g, '\n'));
}

function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) { bytes[i] = binaryString.charCodeAt(i); }
    return bytes.buffer;
}

function pcmToWav(pcmData, sampleRate) {
    const dataSize = pcmData.length * pcmData.BYTES_PER_ELEMENT;
    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);
    view.setUint32(0, 0x52494646, false); // "RIFF"
    view.setUint32(4, 36 + dataSize, true);
    view.setUint32(8, 0x57415645, false); // "WAVE"
    view.setUint32(12, 0x666d7420, false); // "fmt "
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true); // numChannels
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // byteRate
    view.setUint16(32, 2, true); // blockAlign
    view.setUint16(34, 16, true); // bitsPerSample
    view.setUint32(36, 0x64617461, false); // "data"
    view.setUint32(40, dataSize, true);
    new Int16Array(buffer, 44).set(pcmData);
    return new Blob([view], { type: 'audio/wav' });
}

