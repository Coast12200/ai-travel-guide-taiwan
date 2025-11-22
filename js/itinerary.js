/**
 * itinerary.js
 * * 處理所有與 AI 內容生成相關的邏輯，例如行程規劃、景點描述、
 * 旅費估算等。
 */
import { appState, destinationsByCountry } from './state.js';
import { callGeminiAPI, callGeminiAPIWithSchema, fetchTdxData, fetchTdxNearbyPOIs } from './api.js';
import { renderAIMap } from './map.js';
import { showError, formatAsTimeline, showToast } from './ui.js';
import { getAppState, setAppState, updateAppState } from './state.js';

// --- TTS Audio Playback ---

/**
 * Toggle audio playback for an attraction using browser's built-in TTS
 * Handles playback state and one-at-a-time audio management
 */
export function toggleAttractionAudio(attractionId, textToRead) {
    const btn = document.querySelector(`.tts-play-btn[data-attraction-id="${attractionId}"]`);
    if (!btn) return;

    // If same audio is currently playing, stop it
    if (appState.currentPlayingAttractionId === attractionId && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        btn.classList.remove('playing');
        btn.innerHTML = '🔊';
        setAppState('currentPlayingAttractionId', null);
        return;
    }

    // Stop any currently playing speech
    window.speechSynthesis.cancel();

    console.log(`[TTS] Playing audio for ${attractionId}`);

    // Clean text for TTS (remove markdown, special chars)
    const cleanText = textToRead
        .replace(/#+\s/g, '')
        .replace(/[\*_\[\]()]/g, '')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleanText) {
        showError('無可播放的文字內容', document.getElementById('descriptionContent'));
        return;
    }

    // Create speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-TW';  // Traditional Chinese
    utterance.rate = 1.0;      // Normal speed
    utterance.pitch = 1.0;     // Normal pitch
    utterance.volume = 1.0;    // Full volume

    // Event handlers
    utterance.onstart = () => {
        btn.classList.remove('loading');
        btn.classList.add('playing');
        btn.innerHTML = '⏸️';
        setAppState('currentPlayingAttractionId', attractionId);
    };

    utterance.onend = () => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊';
        setAppState('currentPlayingAttractionId', null);
    };

    utterance.onerror = (e) => {
        console.error('TTS error:', e);
        btn.classList.remove('playing', 'loading');
        btn.innerHTML = '❌';
        setAppState('currentPlayingAttractionId', null);
        showError('語音播放失敗，請確認瀏覽器支援語音功能', document.getElementById('descriptionContent'));
    };

    // Start playing
    try {
        window.speechSynthesis.speak(utterance);
    } catch (err) {
        console.error('speechSynthesis.speak failed', err);
        btn.innerHTML = '❌';
        showError('語音播放失敗，瀏覽器不支援此功能', document.getElementById('descriptionContent'));
    }
}

// --- AI 內容生成函式 ---

// Simple Markdown -> HTML converter used for several AI outputs (headings, lists, bold/italic, paragraphs, blockquotes)
function mdToHtml(raw) {
    if (!raw || typeof raw !== 'string') return raw || '';
    // Escape HTML to avoid injection, we'll convert markdown markers back to HTML tags
    let s = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // helper: convert a markdown fragment (no blockquote wrapper) to HTML (headings, lists, emphasis)
    function transformFragment(t) {
        if (!t) return '';
        let out = t;
        // Headings: #### -> h4, ### -> h3, ## -> h2, # -> h1
        out = out.replace(/^####\s+(.*)$/gim, '<h4>$1</h4>');
        out = out.replace(/^###\s+(.*)$/gim, '<h3>$1</h3>');
        out = out.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
        out = out.replace(/^#\s+(.*)$/gim, '<h1>$1</h1>');
        // list items -> li
        out = out.replace(/^(?:[-*+]\s+)(.*)$/gim, '<li>$1</li>');
        // group li into ul
        out = out.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/gim, function (group) {
            return '<ul>' + group + '</ul>';
        });
        // bold / italic
        out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');
        return out;
    }

    // Process lines and specially handle blockquotes so inner markdown inside blockquotes is converted too
    const lines = s.split('\n');
    let inBQ = false;
    let bqLines = [];
    const outLines = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isBQ = line.trim().startsWith('&gt;');
        if (isBQ) {
            inBQ = true;
            const content = line.trim().replace(/^&gt;\s?/, '');
            bqLines.push(content);
        } else {
            if (inBQ) {
                // end blockquote — transform inner markdown then wrap with class
                const inner = bqLines.join('\n');
                const processedInner = transformFragment(inner);
                outLines.push('<div class="review-summary-block"><blockquote>' + processedInner + '</blockquote></div>');
                bqLines = [];
                inBQ = false;
            }
            outLines.push(line);
        }
    }
    // trailing blockquote
    if (inBQ && bqLines.length) {
        const inner = bqLines.join('\n');
        const processedInner = transformFragment(inner);
        outLines.push('<div class="review-summary-block"><blockquote>' + processedInner + '</blockquote></div>');
    }

    s = outLines.join('\n');

    // Now transform the remaining non-blockquote fragments
    // Split by two or more newlines to form paragraphs/blocks
    const parts = s.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
    const htmlParts = parts.map(p => {
        if (p.startsWith('<blockquote') || p.startsWith('<div class="review-summary-block"')) return p; // already processed
        // transform this fragment
        const frag = transformFragment(p);
        // if fragment already starts with block-level tag, return as-is
        if (/^<h[1-4]|^<ul|^<p|^<blockquote/i.test(frag.trim())) return frag;
        // if contains <li>, wrap with ul (transformFragment already groups li->ul, but keep safe)
        if (frag.indexOf('<li>') !== -1 && frag.indexOf('<ul>') === -1) return '<ul>' + frag + '</ul>';
        // otherwise wrap in paragraph and keep line breaks
        return '<p>' + frag.replace(/\n/g, '<br/>') + '</p>';
    });
    return htmlParts.join('\n');
}


// --- Image analysis for client-side multimodal support ---
export async function analyzeImageData(dataUrl) {
    return new Promise((resolve) => {
        try {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const maxSize = 256; // downscale for analysis
                let w = img.width;
                let h = img.height;
                if (w > maxSize || h > maxSize) {
                    const ratio = Math.min(maxSize / w, maxSize / h);
                    w = Math.round(w * ratio);
                    h = Math.round(h * ratio);
                }
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, w, h);
                try {
                    const imgData = ctx.getImageData(0, 0, w, h).data;
                    const counts = {};
                    let rSum = 0, gSum = 0, bSum = 0, total = 0;
                    for (let i = 0; i < imgData.length; i += 4) {
                        const r = imgData[i];
                        const g = imgData[i + 1];
                        const b = imgData[i + 2];
                        rSum += r; gSum += g; bSum += b; total++;
                        // quantize to 8-bit -> 6-bit for grouping
                        const key = ((r >> 2) & 0x3F) + ',' + ((g >> 2) & 0x3F) + ',' + ((b >> 2) & 0x3F);
                        counts[key] = (counts[key] || 0) + 1;
                    }
                    // find dominant
                    let dominant = null; let maxCount = 0;
                    Object.keys(counts).forEach(k => { if (counts[k] > maxCount) { maxCount = counts[k]; dominant = k; } });
                    const [dr, dg, db] = dominant ? dominant.split(',').map(n => (Number(n) << 2)) : [Math.round(rSum / total), Math.round(gSum / total), Math.round(bSum / total)];
                    const avgR = Math.round(rSum / total);
                    const avgG = Math.round(gSum / total);
                    const avgB = Math.round(bSum / total);
                    const toHex = (v) => ('0' + v.toString(16)).slice(-2);
                    const dominantHex = `#${toHex(dr)}${toHex(dg)}${toHex(db)}`;
                    const summary = `尺寸 ${img.width}x${img.height}，主色調 ${dominantHex}`;
                    resolve({ width: img.width, height: img.height, avgRgb: [avgR, avgG, avgB], dominantHex, summary });
                } catch (err) {
                    resolve({ width: img.width, height: img.height, summary: '無法分析像素資料' });
                }
            };
            img.onerror = function () { resolve({ summary: '圖片載入失敗' }); };
            img.src = dataUrl;
            // If cached, it may be complete already
            if (img.complete && img.naturalWidth) img.onload();
        } catch (e) {
            resolve({ summary: '圖片分析失敗' });
        }
    });
}


export async function generateDescription(destination) {
    const container = document.getElementById('descriptionContent');
    container.innerHTML = '<div class="loading"><div class="spinner"></div>正在撰寫景點故事...</div>';
    try {
        const isEnglish = getAppState('currentLanguage') === 'en';
        let prompt = '';
        if (isEnglish) {
            prompt = `Please write all outputs in fluent, professional, and engaging native English (US/UK style).`
                + `\n\nWrite a concise, engaging Markdown description of "${destination.name}" for an international (non-local) visitor.`
                + ` Use active, inviting verbs (e.g., Discover, Explore, Indulge).`
                + ` Separate the output into three sections using level-2 headings (##):`
                + `\n\n1. ## 🏛️ History & Background (brief, relevant context for non-local visitors)`
                + `\n2. ## ✨ Highlights & Experiences (what to do, what makes it special)`
                + `\n3. ## 📸 Best Photo Angles (one practical tip for framing or timing)`
                + `\n\nKeep the total length around 150-250 words. Use evocative adjectives for food (e.g., savory, aromatic, delectable) where applicable. When mentioning Taiwan-specific concepts, explain them briefly (for example: "Night Market — a vibrant street-food and local-crafts scene").`;
        } else {
            prompt = `
請用繁體中文，以一位充滿熱情且博學的說書人、旅行家的口吻，生動地介紹「${destination.name}」。
請將輸出以 Markdown 格式回傳，且使用次標題 (##) 分隔下列三個部分：

1. ## 🏛️ 歷史與背景 (簡述景點的起源或歷史意義)
2. ## ✨ 核心魅力與體驗 (最值得看、最特別的活動)
3. ## 📸 最佳攝影角度 (提供一個建議的拍照點或時間)

請把整體篇幅控制在 200-300 字，並維持語氣生動、故事化。請僅回傳 Markdown 內容，勿額外包裹描述性文字。
`;
        }

        // 如果使用者有上傳並附加圖片，將簡短的視覺分析結果加入 prompt，以便 AI 考量視覺風格與構圖
        try {
            const uploaded = appState.uploadedImage;
            if (uploaded && uploaded.attached && uploaded.analysis) {
                const a = uploaded.analysis;
                const imgNote = `
視覺參考：使用者上傳並附加一張圖片（${uploaded.name || '上傳圖片'}）。分析摘要：${a.summary || ''}。請在描述中考量此圖片的主要色調與構圖，並提供與之相符的攝影角度或風格建議。`;
                // Append to prompt
                prompt += '\n' + imgNote;
            }
        } catch (e) { /* ignore */ }

        const md = await callGeminiAPI(prompt);
        // Use shared mdToHtml helper to convert Markdown -> HTML
        container.innerHTML = mdToHtml(md);
        // Attach feedback controls for this generated description
        try { if (window.attachAiFeedback) window.attachAiFeedback('descriptionContent', { type: 'description', destinationId: destination.id }); } catch (e) { }
    } catch (error) {
        showError(`生成景點介紹失敗: ${error.message}`, container);
    }
}

export async function generateItinerary(type, options = {}) {
    const container = document.getElementById('suggestionContent');
    const transportContainer = document.getElementById('transportSuggestionContainer');
    const prefs = document.getElementById('itineraryPrefs').value;
    const chosenStyle = options && options.style ? options.style : '';
    const budgetLevel = options && options.budgetLevel ? options.budgetLevel : (document.getElementById('budgetLevelSelect') ? document.getElementById('budgetLevelSelect').value : 'medium');
    const transportPref = options && options.transportPref ? options.transportPref : (document.getElementById('routeModeSelect') ? document.getElementById('routeModeSelect').value : 'driving');
    const groupInfo = options && options.group ? options.group : null;
    const departureDate = options && options.date ? options.date : null;
    const startTime = options && options.startTime ? options.startTime : null;
    const endTime = options && options.endTime ? options.endTime : null;
    const durationHours = options && options.durationHours ? options.durationHours : null;

    if (!appState.isGeminiApiVerified) return showError('AI 行程規劃需要驗證 Gemini API', container);
    // Weather data is optional - when available, it enhances the itinerary suggestions

    transportContainer.classList.add('hidden');
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
        // Get number of days for multi-day trips
        const days = type === 'multi-day'
            ? (Number(document.getElementById('tripDaysInput')?.value) || 3)
            : 1;
        const prompt = createItineraryPrompt(type, allAttractions, prefs, weatherSummary, weatherRules, timeConstraint, chosenStyle, groupSummary, budgetLevel, transportPref, days);
        const result = await callGeminiAPIWithSchema(prompt, schema);

        // Render with day tabs when possible (dynamic import to reduce circular import risk)
        try {
            const ui = await import('./ui.js');
            // If we have weather data and a departure date, render per-day forecast panel
            try {
                const days = Number(document.getElementById('tripDaysInput') ? document.getElementById('tripDaysInput').value : 1) || (type === 'multi-day' ? 3 : 1);
                if (departureDate && appState.isCwaApiVerified) {
                    try { await ui.renderDailyWeatherForecast(departureDate, days); } catch (e) { console.warn('renderDailyWeatherForecast failed', e); }
                }
            } catch (e) { /* ignore UI forecast errors */ }

            ui.renderItineraryWithDayTabs(result.itinerary_text, result.locations || []);
            // attach feedback controls to the suggestions area
            try { if (window.attachAiFeedback) window.attachAiFeedback('suggestionContent', { type: 'itinerary', generatedAt: new Date().toISOString() }); } catch (e) { console.warn('attach feedback failed', e); }
        } catch (err) {
            container.innerHTML = formatAsTimeline(result.itinerary_text);
            try { if (window.attachAiFeedback) window.attachAiFeedback('suggestionContent', { type: 'itinerary', generatedAt: new Date().toISOString() }); } catch (e) { console.warn('attach feedback failed', e); }
        }
        // keep latest generated itinerary text for exports
        try { appState.lastGeneratedItinerary = { text: result.itinerary_text, locations: result.locations || [] }; } catch (e) { }

        if (result.locations && result.locations.length > 0) {
            appState.currentItineraryLocations = result.locations;
            if (result.locations.length > 1) {
                try { await renderAIMap(result.locations); transportContainer.classList.remove('hidden'); } catch (e) { /* ignore map errors */ }
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
    icsLines.push('PRODID:-//AI Travel Guide Taiwan//EN');
    icsLines.push('CALSCALE:GREGORIAN');
    icsLines.push('METHOD:PUBLISH');

    // Add timezone for Asia/Taipei
    icsLines.push('BEGIN:VTIMEZONE');
    icsLines.push('TZID:Asia/Taipei');
    icsLines.push('BEGIN:STANDARD');
    icsLines.push('TZOFFSETFROM:+0800');
    icsLines.push('TZOFFSETTO:+0800');
    icsLines.push('TZNAME:CST');
    icsLines.push('DTSTART:19700101T000000');
    icsLines.push('END:STANDARD');
    icsLines.push('END:VTIMEZONE');

    // helper to format Date to basic YYYYMMDDTHHMMSSZ (UTC)
    const toUTCString = (d) => {
        const pad = (n) => String(n).padStart(2, '0');
        return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
    };

    let baseDate = null;
    if (dateStr) {
        const parts = dateStr.split('-').map(Number);
        if (parts.length === 3) baseDate = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    // If no explicit times, create all-day events per paragraph; otherwise try to allocate sequential time windows
    let currentStart = null;
    if (baseDate && startTime) {
        const [sh, sm] = startTime.split(':').map(Number);
        currentStart = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), sh || 9, sm || 0, 0);
    }

    const durationPerParagraphMs = (baseDate && startTime && endTime) ? (((() => {
        const [sh, sm] = startTime.split(':').map(Number); const [eh, em] = endTime.split(':').map(Number);
        let s = (sh || 0) * 60 + (sm || 0); let e = (eh || 0) * 60 + (em || 0); if (e <= s) e += 24 * 60; return ((e - s) * 60 * 1000);
    })()) / Math.max(1, paragraphs.length)) : (60 * 60 * 1000); // default 1 hour

    paragraphs.forEach((p, idx) => {
        const uid = `ai-itin-${Date.now()}-${idx}@ai-travel-guide`;
        const lines = p.split('\n').filter(l => l.trim());
        const title = lines[0] || '行程';
        const description = lines.slice(0, 3).join('。') || p.slice(0, 200);

        icsLines.push('BEGIN:VEVENT');
        icsLines.push(`UID:${uid}`);
        icsLines.push(`DTSTAMP:${toUTCString(new Date())}`);
        icsLines.push(`SUMMARY:${escapeICalText(title.slice(0, 80))}`);

        // Rich description with attraction details
        icsLines.push(`DESCRIPTION:${escapeICalText(description.slice(0, 300))}`);

        // Add location if we can extract it from the text (simplified)
        const locationMatch = title.match(/[^\s]+/);
        if (locationMatch) {
            icsLines.push(`LOCATION:${escapeICalText(locationMatch[0])}`);
        }

        // Try to add GEO coordinates if available
        if (appState.currentItineraryLocations && idx < appState.currentItineraryLocations.length) {
            const spotName = appState.currentItineraryLocations[idx];
            // Try to find coordinates from destination data
            const dest = destinationsByCountry.taiwan?.destinations?.find(d => d.name === spotName);
            if (dest && dest.coordinates) {
                icsLines.push(`GEO:${dest.coordinates[0]};${dest.coordinates[1]}`);
            }
        }

        if (currentStart) {
            const eventStart = new Date(currentStart.getTime() + idx * durationPerParagraphMs);
            const eventEnd = new Date(eventStart.getTime() + durationPerParagraphMs);
            icsLines.push(`DTSTART:${toUTCString(eventStart)}`);
            icsLines.push(`DTEND:${toUTCString(eventEnd)}`);
        } else if (baseDate) {
            // all-day event
            const d = baseDate;
            const dayStr = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
            icsLines.push(`DTSTART;VALUE=DATE:${dayStr}`);
            icsLines.push(`DTEND;VALUE=DATE:${dayStr}`);
        }

        // Add creation and modification timestamps
        icsLines.push(`CREATED:${toUTCString(new Date())}`);
        icsLines.push(`LAST-MODIFIED:${toUTCString(new Date())}`);

        // Priority for itinerary items
        icsLines.push('PRIORITY:5');
        icsLines.push('TRANSP:OPAQUE');

        icsLines.push('END:VEVENT');
    });

    icsLines.push('END:VCALENDAR');

    const destination = appState.currentDestination?.name || '台灣';
    const dateForFilename = dateStr || new Date().toISOString().split('T')[0];
    const filename = `${destination}-${dateForFilename}-行程日曆.ics`;

    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    showToast('✅ ICS 行程日曆已匯出！');
}

function escapeICalText(txt) {
    return String(txt || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\,').replace(/;/g, '\;');
}

// Export / open events for Google Calendar
export function exportItineraryToGoogleCalendar() {
    const container = document.getElementById('suggestionContent');
    if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) return showError('尚未有可匯出的行程', container);

    const dateStr = document.getElementById('itineraryDate') ? document.getElementById('itineraryDate').value : null;
    const startTime = document.getElementById('itineraryStartTime') ? document.getElementById('itineraryStartTime').value : null;
    const endTime = document.getElementById('itineraryEndTime') ? document.getElementById('itineraryEndTime').value : null;

    const paragraphs = (appState.lastGeneratedItinerary.text || '').split(/\n\n+/).filter(p => p.trim());

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Taipei';

    // helper to format Date to basic YYYYMMDDTHHMMSSZ (UTC)
    const toUTCString = (d) => {
        const pad = (n) => String(n).padStart(2, '0');
        return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
    };

    let baseDate = null;
    if (dateStr) {
        const parts = dateStr.split('-').map(Number);
        if (parts.length === 3) baseDate = new Date(parts[0], parts[1] - 1, parts[2]);
    }

    let currentStart = null;
    if (baseDate && startTime) {
        const [sh, sm] = startTime.split(':').map(Number);
        currentStart = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), sh || 9, sm || 0, 0);
    }

    const durationPerParagraphMs = (baseDate && startTime && endTime) ? (((() => {
        const [sh, sm] = startTime.split(':').map(Number); const [eh, em] = endTime.split(':').map(Number);
        let s = (sh || 0) * 60 + (sm || 0); let e = (eh || 0) * 60 + (em || 0); if (e <= s) e += 24 * 60; return ((e - s) * 60 * 1000);
    })()) / Math.max(1, paragraphs.length)) : (60 * 60 * 1000);

    // If it's a small number of events, open Google event templates for each (user confirms each in UI). For long itineraries, fall back to .ics export.
    if (paragraphs.length <= 3) {
        paragraphs.forEach((p, idx) => {
            const title = encodeURIComponent((p.split('\n')[0] || '').slice(0, 100));
            const details = encodeURIComponent((p || '').slice(0, 500));
            // location heuristic: try to find an item in brackets or after '地點' or last comma
            let location = '';
            const locMatch = p.match(/\(([^)]+)\)|地點[:：]\s*([^\n,]+)/i);
            if (locMatch) location = encodeURIComponent((locMatch[1] || locMatch[2] || '').trim());

            let dates = '';
            if (currentStart) {
                const eventStart = new Date(currentStart.getTime() + idx * durationPerParagraphMs);
                const eventEnd = new Date(eventStart.getTime() + durationPerParagraphMs);
                dates = toUTCString(eventStart) + '/' + toUTCString(eventEnd);
            } else if (baseDate) {
                // all-day date (YYYYMMDD/YYYYMMDD)
                const d = baseDate;
                const dayStr = d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0');
                dates = dayStr + '/' + dayStr;
            }

            // Build Google Calendar template URL
            let url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}`;
            if (dates) url += `&dates=${dates}`;
            if (details) url += `&details=${details}`;
            if (location) url += `&location=${location}`;
            url += `&ctz=${encodeURIComponent(tz)}`;

            try { window.open(url, '_blank'); } catch (e) { console.warn('open google calendar failed', e); }
        });
        showToast('已為每個活動打開 Google 行事曆建立頁面；請在新分頁中確認並儲存事件。', 'success');
    } else {
        // Fallback: generate .ics and instruct user to import into Google Calendar (best for many events)
        try {
            exportItineraryToICS();
            showToast('行程已匯出為 .ics 檔。開啟 Google 日曆 → 設定 → 匯入，即可將整個行程加入您的日曆。', 'info');
        } catch (e) {
            console.error('fallback ics export failed', e);
            showError('無法建立 Google 日曆事件，請先下載 .ics 檔再手動匯入。', container);
        }
    }
}

// --- 新功能：旅費估算 (使用 Gemini schema 輸出結構化資料) ---
export async function generateBudgetEstimate(days = 1, options = {}) {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified) return showError('AI 行程規劃需要驗證 Gemini API', container);

    container.classList.remove('hidden');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 正在精準估算旅費...</div>`;

    // Get parameters from options or UI
    const budgetLevel = options.budgetLevel || getAppState('budgetLevel') || 'comfort';
    const diningPreference = options.diningPreference || getAppState('diningPreference') || 'local-street';
    const dailyBudgetCustom = options.dailyBudget || null;
    const prefs = options.prefs || '';

    // Structured response schema
    const schema = {
        type: 'OBJECT',
        properties: {
            totalCost: { type: 'NUMBER' },
            dailyAverage: { type: 'NUMBER' },
            breakdown: {
                type: 'ARRAY',
                items: {
                    type: 'OBJECT',
                    properties: {
                        category: { type: 'STRING' }, // 'Accommodation', 'Food', 'Transportation', 'Tickets', 'Contingency'
                        estimatedCost: { type: 'NUMBER' },
                        suggestion: { type: 'STRING' }
                    },
                    required: ['category', 'estimatedCost']
                }
            },
            confidence: { type: 'STRING' },
            assumptions: { type: 'STRING' } // Explain key assumptions
        },
        required: ['totalCost', 'dailyAverage', 'breakdown']
    };

    // Build contextual prompt
    const attractions = appState.currentItineraryLocations && appState.currentItineraryLocations.length
        ? appState.currentItineraryLocations.join(', ')
        : destinationsByCountry.taiwan.destinations.slice(0, 5).map(d => d.name).join(', ');

    const budgetLevelMap = {
        'budget': '節儉 (每日NT$800-1,500)',
        'comfort': '舒適 (每日NT$1,500-3,000)',
        'luxury': '豪華 (每日NT$3,000-5,000)'
    };

    const diningMap = {
        'local-street': '當地小吃 (平價)',
        'casual-restaurant': '普通餐廳 (中等)',
        'fine-dining': '高檔餐廳 (奢華)',
        'self-catering': '自煮 (最省)',
        'mixed': '混合搭配'
    };

    const prompt = `你是一位台灣旅遊成本估算專家。請基於以下資訊，為使用者提供精準的台灣旅遊費用估算。

**行程參數：**
- 天數：${days} 天
- 預算等級：${budgetLevelMap[budgetLevel] || budgetLevel}
${dailyBudgetCustom ? `- 每日每人預算上限：NT$${dailyBudgetCustom}` : ''}
- 餐飲偏好：${diningMap[diningPreference] || diningPreference}
- 參考景點：${attractions}
- 使用者備註：${prefs || '無'}

**估算要求：**
1. 輸出必須是符合 JSON 格式的物件，包含以下欄位：
   - totalCost: 總預估費用 (新台幣)
   - dailyAverage: 每日平均費用 (新台幣)
   - breakdown: 詳細費用分類陣列，每筆包含:
     * category: 類別名稱 (Accommodation/住宿, Food/餐飲, Transportation/交通, Tickets/門票, Contingency/預備金)
     * estimatedCost: 該類別的預估費用
     * suggestion: 該類別的建議或節省秘訣 (可選)
   - confidence: 估算信心度描述 (例如：高/中/低 - 理由)
   - assumptions: 估算的主要假設條件

2. 考慮以下因素：
   - 住宿：根據預算等級選擇旅館或民宿等級
   - 餐飲：根據選定的餐飲偏好調整費用
   - 交通：包括景點間移動、公共運輸或租車成本
   - 門票：主要景點的入場費用
   - 預備金：突發狀況或額外消費 (建議總費用的 10-15%)

3. 請給出保守但現實的估算，所有費用近似到整數。`;

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);

        // Store result
        updateAppState('lastCostEstimate', {
            totalCost: result.totalCost,
            dailyAverage: result.dailyAverage,
            breakdown: result.breakdown,
            confidence: result.confidence,
            assumptions: result.assumptions,
            parameters: {
                days,
                budgetLevel,
                diningPreference,
                customDailyBudget: dailyBudgetCustom,
                timestamp: new Date().toISOString()
            }
        });

        // Render structured visualization
        renderCostBreakdown(result, days);
    } catch (err) {
        console.error('generateBudgetEstimate failed', err);
        showError(`旅費估算失敗: ${err.message}`, container, () => generateBudgetEstimate(days, options));
    }
}

/**
 * Render cost breakdown with visualization and interactive adjustments
 */
function renderCostBreakdown(result, days) {
    const container = document.getElementById('suggestionContent');

    let html = `<div class="cost-estimate-container">`;

    // Header with totals
    html += `<div class="cost-summary">
        <h4>🧮 旅費估算報告 (${days}天)</h4>
        <div class="cost-totals">
            <div class="cost-total-item">
                <span class="cost-label">總預估費用</span>
                <span class="cost-value">NT$${Math.round(result.totalCost).toLocaleString('zh-TW')}</span>
            </div>
            <div class="cost-total-item">
                <span class="cost-label">每日平均</span>
                <span class="cost-value">NT$${Math.round(result.dailyAverage).toLocaleString('zh-TW')}</span>
            </div>
        </div>
        ${result.confidence ? `<p class="cost-confidence"><strong>估算信心度：</strong>${result.confidence}</p>` : ''}
    </div>`;

    // Breakdown visualization and table
    html += `<div class="cost-breakdown">
        <h5>費用分類明細</h5>
        <div class="cost-chart-container">
            <div class="cost-breakdown-bars">`;

    if (result.breakdown && Array.isArray(result.breakdown)) {
        // Calculate total for percentage
        const total = result.breakdown.reduce((sum, b) => sum + (b.estimatedCost || 0), 0);

        result.breakdown.forEach((item, idx) => {
            const percentage = total > 0 ? ((item.estimatedCost / total) * 100).toFixed(1) : 0;
            const categoryLabel = {
                'Accommodation': '住宿',
                'Food': '餐飲',
                'Transportation': '交通',
                'Tickets': '門票',
                'Contingency': '預備金'
            }[item.category] || item.category;

            html += `<div class="cost-bar-row">
                <div class="cost-bar-label">${categoryLabel}</div>
                <div class="cost-bar-visual">
                    <div class="cost-bar-fill" style="width:${percentage}%; background-color:${getColorForCategory(item.category)};" title="${percentage}%">
                        <span class="cost-bar-percent">${percentage}%</span>
                    </div>
                </div>
                <div class="cost-bar-value">NT$${Math.round(item.estimatedCost).toLocaleString('zh-TW')}</div>
            </div>`;
        });
    }

    html += `</div></div>`;

    // Detailed breakdown table
    html += `<table class="cost-breakdown-table">
        <thead>
            <tr>
                <th>項目</th>
                <th>金額</th>
                <th>建議</th>
            </tr>
        </thead>
        <tbody>`;

    if (result.breakdown && Array.isArray(result.breakdown)) {
        result.breakdown.forEach(item => {
            const categoryLabel = {
                'Accommodation': '🏨 住宿',
                'Food': '🍽️ 餐飲',
                'Transportation': '🚌 交通',
                'Tickets': '🎫 門票',
                'Contingency': '⚠️ 預備金'
            }[item.category] || item.category;

            html += `<tr>
                <td>${categoryLabel}</td>
                <td><strong>NT$${Math.round(item.estimatedCost).toLocaleString('zh-TW')}</strong></td>
                <td><small>${item.suggestion || '－'}</small></td>
            </tr>`;
        });
    }

    html += `</tbody></table>`;

    // Assumptions
    if (result.assumptions) {
        html += `<div class="cost-assumptions">
            <h5>估算假設</h5>
            <p style="font-size: 0.95rem; line-height: 1.6;">${result.assumptions}</p>
        </div>`;
    }

    // Interactive adjustment section
    html += `<div class="cost-adjustment">
        <h5>快速調整</h5>
        <div class="adjustment-controls">
            <button class="btn btn-small" id="adjustBudgetBtn">重新估算 (不同預算)</button>
            <button class="btn btn-small" id="adjustDaysBtn">重新估算 (不同天數)</button>
            <button class="btn btn-small" id="showCurrencyBtn">其他貨幣</button>
        </div>
    </div>`;

    // Multi-currency display (cached)
    html += `<div id="currencyDisplayContainer"></div>`;

    html += `</div>`;
    container.innerHTML = html;

    // Wire up adjustment buttons
    const adjustBudgetBtn = document.getElementById('adjustBudgetBtn');
    const adjustDaysBtn = document.getElementById('adjustDaysBtn');
    const showCurrencyBtn = document.getElementById('showCurrencyBtn');

    if (adjustBudgetBtn) {
        adjustBudgetBtn.addEventListener('click', () => {
            const newBudgetLevel = prompt('輸入預算等級 (budget/comfort/luxury):', appState.budgetLevel);
            if (newBudgetLevel) {
                generateBudgetEstimate(days, { ...appState.lastCostEstimate.parameters, budgetLevel: newBudgetLevel });
            }
        });
    }

    if (adjustDaysBtn) {
        adjustDaysBtn.addEventListener('click', () => {
            const newDays = prompt('輸入旅行天數:', days);
            if (newDays && parseInt(newDays) > 0) {
                generateBudgetEstimate(parseInt(newDays), appState.lastCostEstimate.parameters);
            }
        });
    }

    if (showCurrencyBtn) {
        showCurrencyBtn.addEventListener('click', () => {
            const currencyDiv = document.getElementById('currencyDisplayContainer');
            if (currencyDiv.innerHTML === '') {
                showMultiCurrencyDisplay(result.totalCost, result.dailyAverage);
            } else {
                currencyDiv.innerHTML = '';
            }
        });
    }
}

/**
 * Helper: Get color for category in chart
 */
function getColorForCategory(category) {
    const colorMap = {
        'Accommodation': '#3498db',  // Blue
        'Food': '#e74c3c',           // Red
        'Transportation': '#2ecc71', // Green
        'Tickets': '#f39c12',        // Orange
        'Contingency': '#95a5a6'     // Gray
    };
    return colorMap[category] || '#9b59b6';
}

/**
 * Display cost in multiple currencies
 */
function showMultiCurrencyDisplay(totalCostTwd, dailyAverageTwd) {
    const currencyDiv = document.getElementById('currencyDisplayContainer');

    // Exchange rates (approximate, consider fetching from API)
    const rates = {
        'USD': 0.032,   // 1 TWD = ~0.032 USD
        'JPY': 4.8,     // 1 TWD = ~4.8 JPY
        'CNY': 0.23,    // 1 TWD = ~0.23 CNY
        'HKD': 0.25,    // 1 TWD = ~0.25 HKD
        'EUR': 0.030    // 1 TWD = ~0.030 EUR
    };

    let html = `<div class="currency-display">
        <h5>其他幣別參考</h5>
        <div class="currency-table">
            <div class="currency-row header">
                <div>幣別</div>
                <div>總費用</div>
                <div>每日平均</div>
            </div>`;

    for (const [currency, rate] of Object.entries(rates)) {
        const totalConverted = (totalCostTwd * rate).toFixed(2);
        const dailyConverted = (dailyAverageTwd * rate).toFixed(2);

        html += `<div class="currency-row">
            <div class="currency-code">${currency}</div>
            <div>${currency === 'JPY' ? Math.round(totalConverted) : totalConverted}</div>
            <div>${currency === 'JPY' ? Math.round(dailyConverted) : dailyConverted}</div>
        </div>`;
    }

    html += `</div></div>`;
    currencyDiv.innerHTML = html;
}

const enhancedContentPrompts = {
    cuisine: (destName) => `你是一位在地美食家。請用繁體中文，針對「${destName}」生成 5 到 8 個在地美食推薦，並嚴格使用 Markdown 格式，以下為輸出結構要求：\n\n每一個美食地點請包含：\n\n1) 主標題：使用 H3 格式，例如：\n   ### 🍢 店家名稱\n\n2) 特色簡述（一小段文字）：說明招牌、風味與推薦理由。\n\n3) 資訊清單（無序列表），至少包含下列欄位（使用粗體標籤）：\n   - **地址/區域：** [填寫地址或附近地標]\n   - **必點：** [用逗號分隔列出 1-3 項招牌菜]\n   - **營業時間：** [例如 11:00 – 21:00 或 夜間 18:00 – 02:00]\n\n請不要輸出額外的說明文字或標題，僅以重複的 H3 + 段落 + 無序清單區塊列出每一個店家，並以繁體中文回傳。`,
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
        // Always render enhanced content into the main AI reply panel (`#aiEnhancedContent`)
        // but wrap cuisine Markdown in the `.food-spots-list` wrapper for styling.
        const md = await callGeminiAPI(prompt);
        if (type === 'cuisine') {
            try {
                const html = mdToHtml(md);
                container.innerHTML = `<div class="markdown-content food-spots-list">${html}</div>`;
                try { if (window.attachAiFeedback) window.attachAiFeedback('aiEnhancedContent', { type: 'enhanced', subtype: 'cuisine' }); } catch (e) { }
            } catch (err) {
                container.innerHTML = md; // fallback: raw markdown
            }
        } else {
            container.innerHTML = md;
            // Attach feedback controls for enhanced content
            try { if (window.attachAiFeedback) window.attachAiFeedback('aiEnhancedContent', { type: 'enhanced', subtype: type }); } catch (e) { }
        }
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
                    const b = allDests[i + 1];
                    if (!a || !b || !a.coordinates || !b.coordinates) continue;
                    const [alat, alon] = a.coordinates;
                    const [blat, blon] = b.coordinates;
                    const nearA = await fetchTdxNearbyPOIs('ScenicSpot', alat, alon, enrichRadius, enrichTop);
                    const nearB = await fetchTdxNearbyPOIs('ScenicSpot', blat, blon, enrichRadius, enrichTop);
                    enrichment += `
Segment ${i + 1}: From ${a.name} to ${b.name}.
Nearby at origin: ${nearA.map(n => n.ScenicSpotName || n.Name).filter(Boolean).slice(0, enrichTop).join(', ') || '無'}.
Nearby at destination: ${nearB.map(n => n.ScenicSpotName || n.Name).filter(Boolean).slice(0, enrichTop).join(', ') || '無'}.
`;
                }
            } else {
                if (segments > 5) console.log('Skipping enrichment due to large number of segments');
            }
        } catch (err) { console.warn('TDX enrichment failed', err); }

        const prompt = `你是一位台灣交通專家。這是一份旅遊行程的地點順序：${appState.currentItineraryLocations.join(' -> ')}。${enrichment}

請用繁體中文，為這些地點之間的移動提供最推薦的交通方式建議。輸出必須嚴格遵循以下 Markdown 結構：

## 🚗 交通規劃建議

### 📌 景點A名稱 到 景點B名稱

* **方式：** [交通方式，如捷運/公車/計程車]
* **路線：** [具體路線或轉乘訊息]
* **預計時間：** [時間]
* **預估費用：** [費用或費用範圍]
* **貼心提醒：** [實用建議]

重複上述結構供每個地點間的移動。`;
        const result = await callGeminiAPI(prompt);
        // 使用新的 renderTransportSuggestions 函式來渲染結構化內容
        if (window.renderTransportSuggestions) {
            window.renderTransportSuggestions(result, container);
        } else {
            container.innerHTML = formatAsTimeline(result.replace(/###/g, ''));
        }
    } catch (error) {
        showError(`交通建議生成失敗: ${error.message}`, container, generateTransportSuggestions);
    } finally {
        document.getElementById('transportBtn').disabled = false;
    }
}

// --- 新功能：優化已生成的行程 ---
export async function optimizeItinerary(options = {}) {
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
            strengths: { type: 'ARRAY', items: { type: 'STRING' } },
            route_order: { type: 'ARRAY', items: { type: 'INTEGER' } },
            time_estimates: { type: 'ARRAY', items: { type: 'STRING' } }
        },
        required: ['optimized_itinerary_text', 'optimized_locations']
    };

    // Gather context: weather, traffic, budget, style
    let weatherAdvice = '';
    let trafficContext = '';
    let budgetContext = '';
    let styleContext = '';

    try {
        const date = document.getElementById('itineraryDate') ? document.getElementById('itineraryDate').value : null;
        if (date && appState.isCwaApiVerified && appState.weatherData) {
            const analysis = analyzeWeatherForDate(date);
            if (analysis && analysis.advice) weatherAdvice = analysis.advice;
        }
    } catch (err) { console.warn('weather advice for optimize failed', err); }

    // Include TDX traffic data context
    try {
        if (appState.tdxDataCache && appState.tdxDataCache.congestion) {
            trafficContext = `當前主要路段擁堵情況：${Object.entries(appState.tdxDataCache.congestion)
                .map(([k, v]) => `${k}: ${v}`)
                .join('；')}。`;
        }
    } catch (err) { console.warn('traffic context failed', err); }

    // Budget context
    if (appState.budgetLevel) {
        budgetContext = `使用者預算等級：${appState.budgetLevel}。請優先安排符合此預算的景點與餐飲。`;
    }

    // Travel style context
    if (options.travelStyle || appState.travelStyle) {
        const style = options.travelStyle || appState.travelStyle;
        styleContext = `旅遊風格偏好：${style}。請優先推薦此類景點。`;
    }

    const prompt = `你是一位資深的台灣行程規劃師，擅長利用 Traveling Salesman Problem (TSP) 演算法最小化移動時間。下面是一份已生成的行程地點清單，請幫我優化並以清晰易讀的格式輸出。

**地點清單**（保持原名）：${currentList.join(' | ')}

**額外上下文**：
${weatherAdvice ? `天氣建議：${weatherAdvice}` : ''}
${trafficContext}
${budgetContext}
${styleContext}

**優化目標**：
1) **路線最優化（TSP）**：分析各景點地理位置與交通距離，重新排序以最小化總移動時間與折返次數
2) **時間窗口規劃**：為每個景點指定合理的到達時間與停留時間
3) **合理休息與用餐**：在適當位置插入用餐時段，推薦當地美食
4) **優化建議**：提供 3-5 條可立即採納的優化建議
5) **行程三大優勢**：列出此優化行程的三大亮點

**輸出格式要求**：
- optimized_itinerary_text 必須使用以下 Markdown 格式：

## 🌞 優化後行程（標題：舒適平衡型 / 文青慢活型 等）

### 上午 (08:30 - 12:00)

#### 08:30 - 09:30 | 陽明山國家公園
- **活動**：欣賞小油坑地熱景觀
- **停留時間**：60分鐘
- **交通**：搭乘小油坑專車，車程約15分鐘
- **建議**：早晨天氣涼爽，適合登山健行

#### 09:30 - 10:45 | 冷水坑
- **活動**：泡溫泉、散步
- **停留時間**：75分鐘
- **交通**：步行15分鐘
- **建議**：攜帶毛巾和換洗衣物

### 中午 (12:00 - 13:30)

#### 12:00 - 13:30 | 新北投溫泉商圈（午餐與休息）
- **推薦餐廳**：在地溫泉料理店、台式小吃
- **預算**：每人約 NT$200-400
- **建議**：選擇北投市場附近的餐廳，體驗在地美食

### 下午 (13:30 - 19:30)

#### 13:30 - 16:00 | 士林官邸
- **活動**：參觀花園、歷史建築
- **停留時間**：150分鐘
- **交通**：搭乘捷運30分鐘
- **建議**：攜帶相機，花園適合拍照

（以此類推）

### 💡 優化建議
1. 建議事項一
2. 建議事項二
3. 建議事項三

### ✨ 行程三大優勢
1. 優勢一
2. 優勢二
3. 優勢三

**重要格式規則**：
- 使用 ## 作為主標題（優化後行程）
- 使用 ### 作為時段標題（上午、中午、下午、晚上）
- 使用 #### 作為景點標題，格式為「時間範圍 | 景點名稱」
- 每個景點下方使用項目符號列表（- **標籤**：內容）
- 不要使用過多的分隔線（---）或星號（**）
- 保持格式簡潔清晰，易於閱讀

**輸出要求**：
- optimized_itinerary_text: 按照上述格式的 Markdown 文本
- optimized_locations: 按優化順序排列的地點名稱陣列
- route_order: 景點的優化順序（原始陣列索引）
- time_estimates: 每段的預估移動時間及停留時間陣列
- suggestions: 3-5 條優化建議陣列（純文字，不含符號）
- strengths: 三大優勢陣列（純文字，不含符號）`;

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);
        // Render optimized itinerary (with day tabs when applicable)
        try {
            const ui = await import('./ui.js');
            ui.renderItineraryWithDayTabs(result.optimized_itinerary_text || '無法產生優化內容。', result.optimized_locations || []);
            // Note: Feedback/retry button will be added later after metadata
        } catch (err) {
            container.innerHTML = formatAsTimeline(result.optimized_itinerary_text || '無法產生優化內容。');
        }
        if (result.optimized_locations && result.optimized_locations.length) {
            appState.currentItineraryLocations = result.optimized_locations;
            // Store route optimization metadata for potential reordering
            appState.lastOptimizedRoute = {
                order: result.route_order || [],
                timeEstimates: result.time_estimates || [],
                timestamp: Date.now()
            };
            // Re-render map if available
            if (result.optimized_locations.length > 1) {
                try { await renderAIMap(result.optimized_locations); } catch (e) { /* ignore */ }
            }
        }
        // Show time estimates metadata (suggestions and strengths are already in the Markdown output)
        let metaHtml = '';
        if (result.time_estimates && result.time_estimates.length) {
            metaHtml += '<div style="margin-top:16px; padding:12px; background:var(--panel-bg); border-radius:8px;">';
            metaHtml += '<h4 style="margin-top:0;">⏱️ 時間估計</h4><ul style="margin-bottom:0;">' + result.time_estimates.map(t => `<li>${t}</li>`).join('') + '</ul>';
            metaHtml += '</div>';
        }
        if (metaHtml) container.innerHTML += metaHtml;

        // 新增改進行程按鈕（統一使用 improve-itinerary-ui 的按鈕）
        try {
            const improveUI = await import('./improve-itinerary-ui.js');
            improveUI.renderImproveItineraryButton(container);
        } catch (err) {
            console.warn('Failed to render improve button:', err);
        }


    } catch (err) {
        showError(`行程優化失敗: ${err.message}`, container, optimizeItinerary);
    } finally {
        document.getElementById('optimizeItineraryBtn').disabled = false;
    }
}

export async function generateContingencyPlan(affectedSpots = [], alertType = '', affectedReason = '') {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified || !appState.currentItineraryLocations) {
        return showError('無法生成應急計劃。請先生成行程。', container);
    }

    // Show modal for contingency planning
    const modalId = `contingency-modal-${Date.now()}`;
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal contingency-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>🚨 行程調整建議</h3>
                <button class="modal-close" data-dismiss="${modalId}">&times;</button>
            </div>
            <div class="modal-body">
                <p><strong>偵測到：</strong> ${alertType || '行程風險因素'}</p>
                <p><strong>影響景點：</strong> ${affectedSpots.length > 0 ? affectedSpots.join('、') : '多個景點'}</p>
                <div class="loading" style="margin-top:12px;">
                    <div class="spinner"></div>AI 正在規劃替代方案...
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.classList.add('show');

    const schema = {
        type: 'OBJECT',
        properties: {
            contingency_explanation: { type: 'STRING' },
            replacement_spots: { type: 'ARRAY', items: { type: 'STRING' } },
            adjusted_itinerary: { type: 'STRING' },
            time_impact: { type: 'STRING' },
            acceptance_needed: { type: 'BOOLEAN' }
        },
        required: ['contingency_explanation', 'adjusted_itinerary']
    };

    const affectedList = affectedSpots.length > 0 ? affectedSpots.join('、') : '部分景點';
    const currentLocations = appState.currentItineraryLocations.join(' > ');

    const isEnglish = getAppState('currentLanguage') === 'en';
    let prompt = '';
    if (isEnglish) {
        prompt = `You are an expert in Taiwan travel contingency planning. The current itinerary is: ${currentLocations}`
            + `\n\nAn event has occurred: ${alertType}`
            + `${affectedReason ? `\nSpecific reason: ${affectedReason}` : ''}`
            + `\nAffected spots: ${affectedList}`
            + `\n\nPlease provide a concise, practical, and encouraging contingency plan:`
            + `\n1. Brief explanation why adjustment is needed.`
            + `\n2. Suggest replacement spots (if affected spots are inaccessible) or timing/route adjustments (if weather/traffic causes temporary disruption).`
            + `\n3. Provide the adjusted itinerary in Markdown format.`
            + `\n4. Explain time impact (will it exceed the original plan? by how much?).`
            + `\n5. Indicate whether adoption of the adjustment is strongly recommended (true/false).`
            + `\n\nTone: helpful, supportive, and clear. If mentioning local terms (e.g., Night Market, CWA, THSR), briefly explain them for international readers.`
            + `\n\nReturn a JSON object containing: contingency_explanation (string), replacement_spots (array), adjusted_itinerary (string, Markdown), time_impact (string), acceptance_needed (boolean).`;
    } else {
        prompt = `你是台灣行程緊急應變專家。目前的行程為：${currentLocations}\n\n發生了以下狀況：${alertType}\n${affectedReason ? `具體原因：${affectedReason}` : ''}\n受影響景點：${affectedList}\n\n請提供應急調整方案：\n1. 說明為什麼需要調整（簡潔說明）\n2. 建議替代景點（如果受影響景點無法訪問）或調整時間（如果天氣/交通暫時受阻）\n3. 提供調整後的新行程（Markdown 格式）\n4. 說明時間上的影響（是否會超過原計劃？延長多久？）\n5. 是否強烈建議採納此調整（true/false）\n\n輸出必須包含：\n- contingency_explanation: 為什麼需要調整\n- replacement_spots: 替代景點陣列（如無則為空陣列）\n- adjusted_itinerary: 新的行程說明\n- time_impact: 時間影響描述\n- acceptance_needed: 是否必須採納此調整`;
    }

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);

        // Update modal with results
        const modalBody = modal.querySelector('.modal-body');
        let resultHtml = `<div class="contingency-result">
            <h4>應急方案</h4>
            <p>${result.contingency_explanation || ''}</p>
            <h5>時間影響</h5>
            <p>${result.time_impact || '無重大時間影響'}</p>`;

        if (result.replacement_spots && result.replacement_spots.length) {
            resultHtml += `<h5>替代景點</h5><ul>` + result.replacement_spots.map(s => `<li>${s}</li>`).join('') + `</ul>`;
        }

        resultHtml += `<h5>調整後行程</h5><div class="contingency-itinerary">${mdToHtml(result.adjusted_itinerary)}</div>`;
        resultHtml += `<div class="contingency-actions" style="margin-top:12px;">
            <button class="btn btn-primary" data-accept-contingency="${modalId}">接受調整</button>
            <button class="btn btn-secondary" data-dismiss="${modalId}">保留原行程</button>
        </div></div>`;

        modalBody.innerHTML = resultHtml;

        // Event handlers for acceptance
        modal.querySelector(`[data-accept-contingency]`).addEventListener('click', async () => {
            if (result.replacement_spots && result.replacement_spots.length) {
                // Update current locations with replacements
                appState.currentItineraryLocations = result.replacement_spots;
            }
            // Show success message
            closeModal(modalId);
            showSuccess('行程已調整。請查看新的行程規劃。', container);
            // Re-optimize with new locations
            if (result.replacement_spots && result.replacement_spots.length) {
                try { await renderAIMap(result.replacement_spots); } catch (e) { /* ignore */ }
            }
        });

        modal.querySelector(`[data-dismiss="${modalId}"]`).addEventListener('click', () => closeModal(modalId));
        const dismissBtn = modal.querySelector(`[data-dismiss]`);
        if (dismissBtn) dismissBtn.addEventListener('click', () => closeModal(modalId));

    } catch (err) {
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `<p style="color:red;">應急方案生成失敗：${err.message}</p>
            <button class="btn" data-dismiss="${modalId}">關閉</button>`;
        modal.querySelector(`[data-dismiss="${modalId}"]`).addEventListener('click', () => closeModal(modalId));
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

export async function generateFeedbackItinerary(feedback = '', feedbackType = '') {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified || !appState.currentItineraryLocations) {
        return showError('無法重新生成行程。', container);
    }

    container.innerHTML = `<div class="loading"><div class="spinner"></div>AI 根據您的反饋重新規劃行程...</div>`;

    const schema = {
        type: 'OBJECT',
        properties: {
            feedback_itinerary_text: { type: 'STRING' },
            feedback_locations: { type: 'ARRAY', items: { type: 'STRING' } },
            changes_made: { type: 'ARRAY', items: { type: 'STRING' } }
        },
        required: ['feedback_itinerary_text', 'feedback_locations']
    };

    const currentLocations = appState.currentItineraryLocations.join(' > ');
    const feedbackMapping = {
        'crowded': '避免人潮擁擠的景點，優先推薦冷門景點或建議避峰時間',
        'boring': '增加更有趣的互動體驗、美食探索、冒險活動、文化沉浸',
        'budget_exceeded': '減少高消費景點，優先選擇免費或低價景點，減少餐飲預算',
        'too_long': '縮短行程距離，減少景點數量，集中在一個區域',
        'not_enough': '增加更多景點和活動，提供更豐富的體驗'
    };

    const isEnglish = getAppState('currentLanguage') === 'en';
    let prompt = '';
    if (isEnglish) {
        prompt = `You are a Taiwan itinerary optimization specialist. The user provided feedback on the following itinerary:\nOriginal itinerary: ${currentLocations}`
            + `\n\nUser feedback:`
            + `\n- Feedback type: ${feedbackMapping[feedbackType] || feedbackType}`
            + `\n- Details: ${feedback || 'unspecified'}\n\n`;
        prompt += `Based on the feedback, regenerate an improved itinerary. Focus:`
            + `\n1. If feedback concerns attraction selection, replace with spots that better match the user's needs.`
            + `\n2. If feedback concerns timing, adjust density and pacing (increase or decrease number of visits).`
            + `\n3. Preserve core highlights while optimizing for the feedback.`
            + `\n4. List the main changes made.`
            + `\n\nTone: professional, concise, and visitor-focused. Use fluent native English and active verbs. Briefly explain Taiwan-specific terms if they appear.`
            + `\n\nReturn a JSON object with keys: feedback_itinerary_text (Markdown), feedback_locations (array), changes_made (array of strings).`;
    } else {
        prompt = `你是台灣行程優化專家。使用者對以下行程提出反饋：\n原行程：${currentLocations}\n\n**使用者反饋**：\n- 反饋類型：${feedbackMapping[feedbackType] || feedbackType}\n- 具體意見：${feedback || '不滿意'}\n\n請基於此反饋，重新生成改進的行程。改進方向：\n1. 如反饋涉及景點選擇，替換為更符合需求的景點\n2. 如反饋涉及時間安排，調整行程密度（增加或減少）\n3. 保持核心吸引力，但針對反饋進行優化\n4. 列出主要改進內容\n\n輸出必須包含：\n- feedback_itinerary_text: Markdown 格式的改進行程\n- feedback_locations: 改進後的景點陣列\n- changes_made: 主要改進內容的清單`;
    }

    try {
        const result = await callGeminiAPIWithSchema(prompt, schema);

        if (result.feedback_locations && result.feedback_locations.length) {
            appState.currentItineraryLocations = result.feedback_locations;
            appState.itineraryFeedbackCount = (appState.itineraryFeedbackCount || 0) + 1;

            // Prevent infinite loops
            if (appState.itineraryFeedbackCount > 5) {
                return showError('反饋迭代次數已達上限，請考慮從頭規劃新行程。', container);
            }
        }

        try {
            const ui = await import('./ui.js');
            ui.renderItineraryWithDayTabs(result.feedback_itinerary_text || '無法產生改進內容。', result.feedback_locations || []);
        } catch (err) {
            container.innerHTML = formatAsTimeline(result.feedback_itinerary_text || '無法產生改進內容。');
        }

        // Show changes in a prominent container after the itinerary
        const wrapper = container.parentElement;
        const existingChanges = document.getElementById('itineraryChanges');
        if (existingChanges) existingChanges.remove();

        if (result.changes_made && result.changes_made.length) {
            const changesDiv = document.createElement('div');
            changesDiv.id = 'itineraryChanges';
            changesDiv.style.cssText = `
                margin-top: 20px;
                padding: 16px 20px;
                background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
                border-left: 4px solid #ff9800;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            `;
            changesDiv.innerHTML = `
                <h4 style="margin: 0 0 12px 0; color: #e65100; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 20px;">📝</span>
                    本次改進
                </h4>
                <ul style="margin: 0; padding-left: 24px; color: #5d4037;">
                    ${result.changes_made.map(c => `<li style="margin-bottom: 8px;">${c}</li>`).join('')}
                </ul>
            `;

            // Insert after container (before any other siblings)
            if (container.nextSibling) {
                wrapper.insertBefore(changesDiv, container.nextSibling);
            } else {
                wrapper.appendChild(changesDiv);
            }
        }

        // Re-render map
        if (result.feedback_locations.length > 1) {
            try { await renderAIMap(result.feedback_locations); } catch (e) { /* ignore */ }
        }

        showToast('行程已根據您的反饋重新規劃。', 'success');
    } catch (err) {
        showError(`重新規劃失敗: ${err.message}`, container);
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
        const prompt = `
請針對「${appState.currentDestination.name}」這個景點，推薦 3 個最具代表性的攝影點。
請用繁體中文，並嚴格遵循以下的 Markdown 結構輸出，不要包含任何額外解釋文字。
每個攝影點必須是二級標題 (##)，並在其下方以無序列表列出細節。

## 📸 攝影點一：[具體攝影點名稱]
* **最佳時間：** [例如：日落前一小時]
* **建議角度：** [例如：低角度仰拍，捕捉建築宏偉]
* **攝影技巧：** [例如：使用廣角鏡頭避免變形]

## 📸 攝影點二：[具體攝影點名稱]
* **最佳時間：** [例如：清晨 6 點，光線柔和]
* **建議角度：** [例如：從側面捕捉建築倒影]
* **攝影技巧：** [例如：帶上三腳架，進行長時間曝光]

## 📸 攝影點三：[具體攝影點名稱]
* **最佳時間：** [例如：夜晚，捕捉燈光]
* **建議角度：** [例如：高處俯視，將景點納入城市背景]
* **攝影技巧：** [例如：開啟人像模式，虛化背景]
`;
        const md = await callGeminiAPI(prompt);
        // Simple Markdown -> HTML conversion
        function mdToHtml(raw) {
            if (!raw || typeof raw !== 'string') return raw || '';
            let s = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            s = s.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
            s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            s = s.replace(/^(?:[-*+]\s+).*$/gim, function (m) { return '<li>' + m.replace(/^[-*+]\s+/, '') + '</li>'; });
            s = s.replace(/(?:<li[\s\S]*?<\/li>\s*)+/gim, function (g) { return g.indexOf('<li>') === -1 ? g : '<ul>' + g + '</ul>'; });
            const parts = s.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
            return parts.map(p => {
                if (p.startsWith('<h2') || p.startsWith('<ul')) return p;
                if (p.match(/^<li>/)) return '<ul>' + p + '</ul>';
                return '<p>' + p.replace(/\n/g, '<br/>') + '</p>';
            }).join('\n');
        }
        container.innerHTML = mdToHtml(md);
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

    const dest = appState.currentDestination;
    const prompt = `請針對「${dest.name}」這個景點，模擬分析網路上的使用者評論，並以繁體中文，嚴格使用 Markdown 格式輸出一個簡潔的摘要報告。\n\n請將整個報告內容包在 Markdown 引言區塊 (>) 內，並包含下列三個部分：\n\n1. 整體評分與總結：使用 H3 標題呈現，並用粗體強調評分。\n   範例：### 🌟 總體評價：**4.5 / 5.0** (基於 850 則評論)\n2. 正面評論主題 (無序列表)：使用 - 列表呈現 3 個最常被提及的正面優點。\n3. 負面評論主題 (無序列表)：使用 - 列表呈現 2-3 個最常被抱怨的缺點或建議。\n\n請保持內容的客觀和數據感，只回傳 Markdown 區塊。`;

    try {
        const md = await callGeminiAPI(prompt);
        // Markdown to HTML, styled as review-summary-block
        try {
            const html = mdToHtml(md);
            container.innerHTML = `<div class="markdown-content review-summary-block">${html}</div>`;
        } catch (err) {
            container.innerHTML = `<pre>${md}</pre>`;
        }
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
        const sampleLocations = locations.slice(0, 6).join(', ') || destinationsByCountry.taiwan.destinations.slice(0, 5).map(d => d.name).join(', ');

        // Request strict Markdown output (H3 + paragraph + nested unordered list) for souvenir items
        const prompt = `請用繁體中文，針對使用者行程會拜訪的位置（例如：${sampleLocations}）推薦 5 到 8 個在地必買的伴手禮。輸出必須嚴格遵循以下 Markdown 結構，並且不要輸出其他說明文字：\n\n每一個伴手禮請包含：\n1) 主標題（H3），例如：\n   ### 🍍 鳳梨酥 (傳統口味)\n2) 產品特色（段落）：一至兩句話說明產品特色與吸引力。\n3) 購買資訊（無序列表），至少包含：\n   - **特色：** 簡短描述\n   - **推薦購買地點：** 列出 1-3 個購買地點（店名或市場）\n   - **價格區間：** 使用 $ 表示（例如：$, $$, $$$）或文字描述。\n\n請只輸出 Markdown，並以繁體中文回傳。`;

        const md = await callGeminiAPI(prompt);
        // convert Markdown -> HTML and render into souvenirContent with styling wrapper
        try {
            const html = mdToHtml(md);
            container.innerHTML = `<div class="markdown-content souvenir-list">${html}</div>`;

            // Post-process rendered souvenir HTML: if price section uses only $ symbols or lacks numeric NT$ values,
            // insert conservative numeric TWD ranges so the UI shows amounts.
            (function fillMissingPriceRanges(root) {
                if (!root) return;
                const items = root.querySelectorAll('h3');
                // mapping for $ levels to numeric ranges (conservative defaults)
                const priceMap = {
                    '$': 'NT$100-300',
                    '$$': 'NT$300-800',
                    '$$$': 'NT$800+'
                };

                items.forEach(h3 => {
                    // look for the following sibling ul and find list item that starts with "價格" or contains "價格區間"
                    const ul = h3.nextElementSibling && h3.nextElementSibling.tagName === 'P' ? h3.nextElementSibling.nextElementSibling : h3.nextElementSibling;
                    if (!ul || ul.tagName !== 'UL') return;
                    const liNodes = Array.from(ul.querySelectorAll('li'));
                    liNodes.forEach(li => {
                        const text = li.textContent || '';
                        if (/價格|價格區間/.test(text)) {
                            // if already contains NT$ or digits, leave it
                            if (/NT\$|\d{2,}/.test(text)) return;
                            // detect $ symbols
                            const match = text.match(/\${1,3}/);
                            if (match) {
                                const level = match[0];
                                const numeric = priceMap[level] || '';
                                if (numeric) {
                                    // append numeric range after the original text
                                    li.innerHTML = li.innerHTML.trim() + ` — <span class="price-estimate">${numeric}</span>`;
                                }
                            }
                        }
                    });
                });
            })(container.querySelector('.souvenir-list'));

        } catch (err) {
            // fallback: place raw markdown
            container.innerHTML = `<pre>${md}</pre>`;
        }
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

export function generateTTS() {
    const ttsBtn = document.getElementById('ttsBtn');
    const descriptionText = document.getElementById('descriptionContent').innerText;

    if (!descriptionText || descriptionText.includes('正在撰寫')) {
        showError('請先生成景點故事', document.getElementById('aiEnhancedContent'));
        return;
    }

    // Clean text for TTS
    const cleanText = descriptionText
        .replace(/#+\s/g, '')
        .replace(/[\*_\[\]()]/g, '')
        .replace(/https?:\/\/\S+/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    if (!cleanText) {
        showError('無可播放的文字內容', document.getElementById('aiEnhancedContent'));
        return;
    }

    // Check if already playing - toggle behavior
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        ttsBtn.innerHTML = '🔊 語音導覽';
        return;
    }

    // Create speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'zh-TW';  // Traditional Chinese
    utterance.rate = 1.0;      // Normal speed
    utterance.pitch = 1.0;     // Normal pitch
    utterance.volume = 1.0;    // Full volume

    // Event handlers
    utterance.onstart = () => {
        ttsBtn.innerHTML = '⏹️ 停止播放';
    };

    utterance.onend = () => {
        ttsBtn.innerHTML = '🔊 語音導覽';
    };

    utterance.onerror = (e) => {
        console.error('TTS error:', e);
        ttsBtn.innerHTML = '🔊 語音導覽';
        showError('語音播放失敗，請確認瀏覽器支援語音功能', document.getElementById('aiEnhancedContent'));
    };

    // Start playing
    try {
        window.speechSynthesis.speak(utterance);
    } catch (err) {
        console.error('speechSynthesis.speak failed', err);
        showError('語音播放失敗，瀏覽器不支援此功能', document.getElementById('aiEnhancedContent'));
    }
}

export async function downloadItineraryAsPDF() {
    const { jsPDF } = window.jspdf;
    const itineraryContent = document.getElementById('suggestionContent');

    // Show toast with loading state
    const { showToast } = await import('./ui.js').catch(() => ({ showToast: () => { } }));
    showToast('正在生成 PDF 文件...');

    try {
        // Create a wrapper for PDF content
        const pdfWrapper = document.createElement('div');
        pdfWrapper.style.backgroundColor = '#ffffff';
        pdfWrapper.style.padding = '20px';
        pdfWrapper.style.width = '100%';
        pdfWrapper.style.position = 'fixed';
        pdfWrapper.style.left = '-9999px';
        pdfWrapper.style.top = '0';

        // Add PDF header with title, date, and branding
        const header = document.createElement('div');
        header.className = 'pdf-header';
        header.style.cssText = `
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 20px;
        `;

        const destination = appState.currentDestination?.name || appState.currentCountry || '台灣';
        const dateStr = document.getElementById('itineraryDate')?.value || new Date().toISOString().split('T')[0];

        header.innerHTML = `
            <div style="text-align: center; margin-bottom: 10px;">
                <h1 style="margin: 0; font-size: 24px; color: #283618;">旅人探索札記</h1>
                <p style="margin: 4px 0; color: #666; font-size: 12px;">AI 智慧行程規劃</p>
            </div>
            <div style="text-align: center;">
                <h2 style="margin: 8px 0; font-size: 18px;">${destination} 行程安排</h2>
                <p style="margin: 4px 0; color: #555; font-size: 12px;">日期：${dateStr}</p>
            </div>
        `;

        pdfWrapper.appendChild(header);

        // Clone the itinerary content
        const contentClone = itineraryContent.cloneNode(true);

        // Hide feedback buttons, maps, and other non-essential elements in clone
        contentClone.querySelectorAll('.ai-feedback, [data-show-feedback-modal], #map, .map-container, .tts-play-btn').forEach(el => {
            el.style.display = 'none';
        });

        pdfWrapper.appendChild(contentClone);
        document.body.appendChild(pdfWrapper);

        // Wait for images to load
        const images = pdfWrapper.querySelectorAll('img');
        await Promise.all(Array.from(images).map(img => {
            return new Promise((resolve) => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = resolve;
                    img.onerror = resolve;
                }
            });
        }));

        // Capture with html2canvas
        const canvas = await html2canvas(pdfWrapper, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            allowTaint: true
        });

        // Create PDF with proper dimensions
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        // Add images to PDF pages
        let pageCount = 1;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            pageCount++;
        }

        // Generate filename with destination and date
        const filename = `${destination}-${dateStr}-AI行程規劃.pdf`;
        pdf.save(filename);

        // Clean up
        document.body.removeChild(pdfWrapper);

        showToast('✅ PDF 已成功匯出！');
    } catch (error) {
        console.error("PDF generation failed:", error);
        showToast('❌ PDF 生成失敗，請重試', 'error');
    }
}

export async function downloadTransportAsPDF() {
    const { jsPDF } = window.jspdf;
    const transportContent = document.getElementById('transportContent');
    const pdfBtn = document.getElementById('downloadTransportPdfBtn');
    const originalText = pdfBtn.innerText;
    pdfBtn.innerText = 'PDF 產生中...';
    pdfBtn.disabled = true;

    try {
        // Hide all feedback controls before capturing
        const feedbacks = transportContent.querySelectorAll('.ai-feedback');
        const hiddenFeedbacks = [];
        feedbacks.forEach(fb => {
            if (!fb.classList.contains('hidden')) {
                fb.classList.add('hidden');
                hiddenFeedbacks.push(fb);
            }
        });

        const canvas = await html2canvas(transportContent, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        });

        // Restore feedback controls
        hiddenFeedbacks.forEach(fb => fb.classList.remove('hidden'));

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('AI-Transport-Suggestions.pdf');
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("抱歉，PDF 檔案產生失敗。");
    } finally {
        pdfBtn.innerText = originalText;
        pdfBtn.disabled = false;
    }
}


// --- CSV 和文字匯出功能 ---

export async function downloadItineraryAsCSV() {
    const container = document.getElementById('suggestionContent');
    if (!appState.currentItineraryLocations || appState.currentItineraryLocations.length === 0) {
        return showError('尚未有可匯出的行程', container);
    }

    const { showToast } = await import('./ui.js').catch(() => ({ showToast: () => { } }));
    showToast('正在匯出 CSV 文件...');

    try {
        const csvRows = [];

        // CSV Header
        csvRows.push(['順序', '景點名稱', '緯度', '經度', '預估停留時間', '預估花費 (NTD)', '景點描述'].map(h => `"${h}"`).join(','));

        // Get destination data for coordinates and descriptions
        const destinations = destinationsByCountry.taiwan?.destinations || [];

        // Add rows for each location
        appState.currentItineraryLocations.forEach((spotName, idx) => {
            const dest = destinations.find(d => d.name === spotName);
            const row = [
                idx + 1,
                spotName,
                dest?.coordinates?.[0] || '',
                dest?.coordinates?.[1] || '',
                '60分鐘', // Default duration
                '200-500', // Default cost range
                (dest?.description || '').slice(0, 100)
            ];
            csvRows.push(row.map(cell => {
                // Escape quotes and wrap in quotes if contains comma or newline
                const escaped = String(cell).replace(/"/g, '""');
                return escaped.includes(',') || escaped.includes('\n') ? `"${escaped}"` : escaped;
            }).join(','));
        });

        // Add summary row
        csvRows.push(['', '', '', '', '', '', '']);
        const totalEstimatedCost = appState.currentItineraryLocations.length * 350; // Average
        csvRows.push(['', '', '', '', '總計', totalEstimatedCost.toString(), `${appState.currentItineraryLocations.length} 個景點`]);

        const csv = csvRows.join('\r\n');
        const destination = appState.currentDestination?.name || '台灣';
        const dateStr = document.getElementById('itineraryDate')?.value || new Date().toISOString().split('T')[0];
        const filename = `${destination}-${dateStr}-行程數據.csv`;

        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }); // UTF-8 BOM for Excel
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        showToast('✅ CSV 行程數據已匯出！');
    } catch (error) {
        console.error('CSV export failed:', error);
        showToast('❌ CSV 匯出失敗，請重試', 'error');
    }
}

export async function downloadItineraryAsText() {
    const container = document.getElementById('suggestionContent');
    if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) {
        return showError('尚未有可匯出的行程', container);
    }

    const { showToast } = await import('./ui.js').catch(() => ({ showToast: () => { } }));
    showToast('正在匯出純文字檔案...');

    try {
        const lines = [];

        // Add header
        const destination = appState.currentDestination?.name || '台灣';
        const dateStr = document.getElementById('itineraryDate')?.value || new Date().toISOString().split('T')[0];

        lines.push('='.repeat(60));
        lines.push('旅人探索札記 - AI 智慧行程規劃');
        lines.push('='.repeat(60));
        lines.push('');
        lines.push(`目的地: ${destination}`);
        lines.push(`日期: ${dateStr}`);
        lines.push(`生成時間: ${new Date().toLocaleString('zh-TW')}`);
        lines.push('');
        lines.push('-'.repeat(60));
        lines.push('');

        // Add itinerary content (remove HTML/Markdown)
        const plainText = appState.lastGeneratedItinerary.text
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/\*\*/g, '') // Remove markdown bold
            .replace(/\*/g, '') // Remove markdown italic
            .replace(/#{1,6}\s/g, '') // Remove markdown headings
            .replace(/\n\n\n+/g, '\n\n') // Normalize line breaks
            .trim();

        lines.push(plainText);
        lines.push('');
        lines.push('-'.repeat(60));
        lines.push('');

        // Add summary
        lines.push('行程摘要:');
        lines.push(`總景點數: ${appState.currentItineraryLocations?.length || 0}`);
        if (appState.lastCostEstimate) {
            lines.push(`預估總費用: NT$ ${appState.lastCostEstimate.totalCost?.toLocaleString() || '未計算'}`);
            lines.push(`每日平均: NT$ ${appState.lastCostEstimate.dailyAverage?.toLocaleString() || '未計算'}`);
        }
        lines.push('');

        // Add metadata footer
        lines.push('='.repeat(60));
        lines.push('此檔案由 AI Travel Guide Taiwan 生成');
        lines.push('官網: https://ai-travel-guide-taiwan.web.app');
        lines.push('='.repeat(60));

        const textContent = lines.join('\n');
        const filename = `${destination}-${dateStr}-AI行程規劃.txt`;

        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);

        showToast('✅ 純文字檔案已匯出！');
    } catch (error) {
        console.error('Text export failed:', error);
        showToast('❌ 文字檔案匯出失敗，請重試', 'error');
    }
}

// --- 輔助函式 ---

function createItineraryPrompt(type, allAttractions, prefs, weatherSummary = '', weatherRules = '', timeConstraint = '', travelStyle = '', groupInstructions = '', budgetLevel = 'medium', transportPref = 'driving', days = 3) {
    let dayType, weatherConstraint;
    const userPrefs = prefs ? `並請務必考慮以下使用者偏好： **${prefs}**。` : '';
    switch (type) {
        case 'sunny': dayType = '晴朗'; weatherConstraint = `天氣晴朗，請多安排戶外活動。`; break;
        case 'rainy': dayType = '下雨'; weatherConstraint = `下雨了，請多安排室內活動。`; break;
        case 'lucky': dayType = '驚喜'; weatherConstraint = `請為我規劃一個充滿驚喜、獨一無二的「手氣不錯」行程！`; break;
        case 'multi-day': dayType = '多日'; weatherConstraint = `請為我規劃一個精彩的「台灣${days}日遊」行程。`; break;
    }
    const isEnglish = getAppState('currentLanguage') === 'en';
    const basePrompt = (type === 'multi-day')
        ? (isEnglish ? `You are an expert Taiwan travel planner. Please create an engaging ${days}-day Taiwan itinerary.` : `你是一位專業的台灣旅遊規劃師。請為我規劃一個精彩的台灣${days}日遊行程。`)
        : (isEnglish ? `You are an expert Taiwan travel planner. Today is ${dayType} weather. Please create an engaging 1-day Taiwan itinerary.` : `你是一位專業的台灣旅遊規劃師。今天天氣是「${dayType}」。請為我規劃一個精彩的台灣一日遊行程。`);

    let promptText = '';
    if (isEnglish) {
        // English-mode instructions: professional tone, active verbs, local term explanations
        promptText = `${basePrompt} Rules:`
            + `\n1. ${weatherConstraint} ${userPrefs}`
            + `\n1.1. Budget preference: ${budgetLevel} (e.g., low/medium/high). Adjust dining and accommodation suggestions accordingly.`
            + `\n1.2. Transportation preference: ${transportPref} (e.g., driving/cycling/walking). Prioritize suitable route and transport suggestions.`
            + `\n1.3. ${weatherSummary}`
            + `\n1.4. ${timeConstraint}`
            + `\n1.5. Weather-based advice: ${weatherRules}`
            + `\n1.6. Travel style: ${travelStyle || 'no specific style'}.`
            + `\n1.7. Group info: ${groupInstructions || 'no special requirements'}.`
            + `\n2. Choose from the following attractions: ${allAttractions.join(', ')}. You may add other highly suitable places not in the list.`
            + `\n3. Use professional, fluent native English (US/UK). Use compelling active verbs (e.g., Discover, Explore, Indulge, Unwind).`
            + `\n4. Explain Taiwan-specific terms briefly for international readers (examples):`
            + `\n   - "Night Market": a vibrant street-food and local-crafts scene central to Taiwanese food culture.`
            + `\n   - "CWA": refer to it as the Central Weather Administration when relevant.`
            + `\n   - "THSR": refer to it as the Taiwan High-Speed Rail (THSR) or "High-Speed Rail".`
            + `\n   - Ensure place names use standard romanization (e.g., Kaohsiung, Tainan).`
            + `\n5. Return a JSON object containing two keys: 'itinerary_text' (the itinerary in Markdown; use level-3 headings ### for time slots and bullet points for activities) and 'locations' (an array of exact place-name strings used in the itinerary).`;
    } else {
        promptText = `${basePrompt} 規則：\n                    1. ${weatherConstraint} ${userPrefs}\n                    1.1. 預算偏好：${budgetLevel}（例如：low/medium/high，請根據預算調整餐飲與住宿等建議）。\n                    1.2. 交通工具偏好：${transportPref}（例如：driving/cycling/walking，請優先選擇適合的路線與交通建議）。\n                    1.5. ${weatherSummary}\n                    1.55. ${timeConstraint}\n                    1.6. 注意天氣建議：${weatherRules}\n                    1.65. 旅行風格指示：${travelStyle || '無特定風格'}。\n                    1.7. 旅遊團體資訊：${groupInstructions || '無特別需求'}。\n                    2. 請從以下景點列表中挑選合適的地點：${allAttractions.join('、')}。你也可以加入列表中沒有，但非常合適的地點。\n                3. 回應必須是包含 'itinerary_text' 和 'locations' 兩個 key 的 JSON 物件。\n                4. 'itinerary_text' 的內容是 Markdown 格式的行程，時段用三級標題 (###)，活動用項目符號(-)。口吻要像一位親切的朋友。\n                5. 'locations' 是一個陣列，包含行程中所有提到的「具體地點」的字串名稱.`;
    }

    try {
        const uploaded = appState.uploadedImage;
        if (uploaded && uploaded.attached && uploaded.analysis) {
            const a = uploaded.analysis;
            promptText += `\n\n使用者提供了一張視覺參考圖片（${uploaded.name || '上傳圖片'}），分析摘要：${a.summary || ''}。請在規劃時考慮該圖片的色調、氛圍與構圖，並在行程建議中加入與圖片風格一致的攝影或觀賞建議。`;
        }
    } catch (e) { /* ignore */ }

    return promptText;
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
        const avgTemp = temps.length ? (temps.reduce((a, b) => a + b, 0) / temps.length) : null;

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

        const mostCommonWx = wxList.sort((a, b) => wxList.filter(v => v === a).length - wxList.filter(v => v === b).length).pop();
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

// --- 新功能：AI 圖像生成 (多模態) ---

/**
 * 根據行程描述和景點生成行程封面圖
 * @param {string} itineraryText - 行程描述文本
 * @param {array} locations - 行程景點陣列
 * @returns {object} { imageUrl, imageData, mimeType }
 */
export async function generateItineraryCoverImage(itineraryText, locations) {
    const container = document.getElementById('suggestionContent');
    if (!appState.isGeminiApiVerified) {
        throw new Error('需要驗證 Gemini API 以使用圖像生成功能');
    }

    try {
        // 構建圖像提示詞，融合行程信息和景點
        const locationNames = locations && locations.length > 0 ? locations.slice(0, 5).join('、') : '台灣景點';
        const firstLine = itineraryText ? itineraryText.split('\n')[0].slice(0, 100) : '台灣旅遊行程';

        const imagePrompt = `生成一張高質量的旅遊行程封面圖，主題為：台灣旅遊行程，景點包括：${locationNames}。
風格要求：
- 色彩鮮豔，充滿台灣特色
- 融合台灣文化元素（例如：廟宇、山水、傳統建築等）
- 現代美觀的設計風格，適合作為旅遊指南的封面
- 畫面應該傳達出旅遊冒險的氛圍
- 構圖要有層次感，突出主題
行程簡述：${firstLine}`;

        const { imageData, mimeType } = await callGeminiImageGenerationAPI(imagePrompt);

        // 將 base64 編碼的圖像轉換為 blob URL
        const imageUrl = `data:${mimeType};base64,${imageData}`;

        return {
            imageUrl,
            imageData,
            mimeType,
            generatedAt: new Date().toISOString()
        };
    } catch (error) {
        console.error('行程封面生成失敗:', error);
        throw error;
    }
}

/**
 * 為景點生成代表性插畫
 * @param {string} destinationName - 景點名稱
 * @param {string} description - 景點描述（可選）
 * @returns {object} { imageUrl, imageData, mimeType }
 */
export async function generateAttractionIllustration(destinationName, description = '') {
    const container = document.getElementById('descriptionContent');
    if (!appState.isGeminiApiVerified) {
        throw new Error('需要驗證 Gemini API 以使用圖像生成功能');
    }

    try {
        // 構建高質量的圖像提示詞
        const imagePrompt = `生成一張高質量的插畫，描繪台灣景點：${destinationName}。
風格要求：
- 藝術風格：現代水彩或數字繪畫風格
- 色彩搭配：溫暖、吸引人的配色
- 細節豐富：展現景點的獨特特徵和氛圍
- 構圖精美：專業旅遊指南級別的質量
- 包含當地文化元素和特色建築
${description ? `景點特色：${description}` : ''}
生成一張能夠代表此景點的精美插畫，適合用作旅遊指南或宣傳資料。`;

        const { imageData, mimeType } = await callGeminiImageGenerationAPI(imagePrompt);

        // 將 base64 編碼的圖像轉換為 blob URL
        const imageUrl = `data:${mimeType};base64,${imageData}`;

        return {
            imageUrl,
            imageData,
            mimeType,
            destinationName,
            generatedAt: new Date().toISOString()
        };
    } catch (error) {
        console.error(`景點插畫生成失敗 (${destinationName}):`, error);
        throw error;
    }
}

/**
 * 在圖像生成時顯示加載狀態
 */
export function showImageGeneratingStatus(container, type = 'cover') {
    const statusText = type === 'cover' ? '正在生成行程封面...' : '正在生成景點插畫...';
    container.innerHTML = `<div class="loading"><div class="spinner"></div>${statusText}</div>`;
}

/**
 * Auto-check for weather or traffic contingencies and suggest adjustments
 * Called after itinerary generation if alerts are present
 */
export async function autoCheckContingencies() {
    try {
        // Check if we have weather alerts or traffic issues
        const hasWeatherAlert = appState.cwaData && appState.weatherAlerts && appState.weatherAlerts.length > 0;
        const hasTrafficIssue = appState.tdxDataCache && appState.tdxDataCache.congestion &&
            Object.values(appState.tdxDataCache.congestion).some(c => c.toLowerCase().includes('擁堵') || c.toLowerCase().includes('嚴重'));

        if (!hasWeatherAlert && !hasTrafficIssue) return; // No issues

        // Determine which locations are affected
        let affectedSpots = [];
        let alertType = '';
        let alertReason = '';

        if (hasWeatherAlert) {
            // Extract severity and affected areas from alerts
            const criticalAlerts = appState.weatherAlerts.filter(a => a.severity && (a.severity.includes('警告') || a.severity.includes('警報')));
            if (criticalAlerts.length > 0) {
                alertType = criticalAlerts[0].severity || '天氣警報';
                alertReason = criticalAlerts[0].description || '天氣狀況可能影響行程';
                // Map alert to possibly affected spots (simplified)
                affectedSpots = appState.currentItineraryLocations.slice(0, Math.ceil(appState.currentItineraryLocations.length / 2));
            }
        }

        if (hasTrafficIssue && !alertType) {
            // Traffic-based contingency
            alertType = '交通擁堵警報';
            alertReason = '偵測到主要路線擁堵，可能延誤行程';
            // Suggest replacing first half of itinerary if traffic is bad
            affectedSpots = appState.currentItineraryLocations.slice(0, 2);
        }

        // Show contingency modal
        if (alertType && affectedSpots.length > 0) {
            generateContingencyPlan(affectedSpots, alertType, alertReason);
        }
    } catch (err) {
        console.warn('autoCheckContingencies failed', err);
    }
}

// ============================================
// 下載進度管理
// ============================================

/**
 * 顯示下載進度 modal
 */
function showDownloadProgress(title = '正在下載...') {
    // 移除舊的 modal（如果存在）
    const existing = document.getElementById('downloadProgressModal');
    if (existing) existing.remove();

    // 創建進度 modal
    const modal = document.createElement('div');
    modal.id = 'downloadProgressModal';
    modal.className = 'download-progress-modal';
    modal.innerHTML = `
        <div class="progress-content">
            <div class="progress-icon">📥</div>
            <h3 id="progressTitle">${title}</h3>
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">準備中...</div>
        </div>
    `;
    document.body.appendChild(modal);
}

/**
 * 更新進度
 */
function updateDownloadProgress(percent, text) {
    const fill = document.getElementById('progressFill');
    const textEl = document.getElementById('progressText');
    if (fill) fill.style.width = `${percent}%`;
    if (textEl) textEl.textContent = text;
}

/**
 * 隱藏進度 modal
 */
function hideDownloadProgress() {
    const modal = document.getElementById('downloadProgressModal');
    if (modal) {
        setTimeout(() => modal.remove(), 300);
    }
}

/**
 * 增強版 PDF 下載（帶進度和壓縮）
 */
export async function downloadPDFWithProgress() {
    try {
        showDownloadProgress('正在生成 PDF...');
        updateDownloadProgress(10, '準備內容...');

        const content = document.getElementById('suggestionContent');
        if (!content || !content.textContent.trim()) {
            hideDownloadProgress();
            showError('沒有可下載的行程內容');
            return;
        }

        updateDownloadProgress(30, '擷取畫面...');

        // 使用較低的 scale 以減小檔案大小
        const canvas = await html2canvas(content, {
            scale: 1.5,  // 從 2 降到 1.5
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        });

        updateDownloadProgress(60, '壓縮圖片...');

        // 使用 JPEG 格式和 80% 品質
        const imgData = canvas.toDataURL('image/jpeg', 0.8);

        updateDownloadProgress(80, '生成 PDF 文件...');

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        updateDownloadProgress(95, '儲存檔案...');

        const filename = `行程規劃_${new Date().toLocaleDateString('zh-TW')}.pdf`;
        pdf.save(filename);

        updateDownloadProgress(100, '完成！');

        setTimeout(() => {
            hideDownloadProgress();
            showToast('PDF 下載成功！', 'success');
        }, 500);

    } catch (error) {
        console.error('PDF download error:', error);
        hideDownloadProgress();
        showError('PDF 下載失敗: ' + error.message);
    }
}

/**
 * 增強版 CSV 匯出（包含更多資訊）
 */
export function downloadEnhancedCSV() {
    try {
        if (!appState.currentItineraryLocations || appState.currentItineraryLocations.length === 0) {
            showError('沒有可匯出的景點資料');
            return;
        }

        showDownloadProgress('正在生成 CSV...');
        updateDownloadProgress(30, '處理資料...');

        // CSV 標頭（增強版）
        const headers = [
            '序號',
            '景點名稱',
            '類別',
            '城市',
            '建議時段',
            '預估停留時間',
            '交通方式',
            '預估距離(km)',
            '緯度',
            '經度',
            '備註'
        ];

        const rows = [headers];

        // 處理每個景點
        appState.currentItineraryLocations.forEach((loc, index) => {
            const dest = destinationsByCountry['taiwan']?.find(d => d.name === loc);
            if (!dest) return;

            rows.push([
                index + 1,
                dest.name || '',
                dest.category || '景點',
                dest.city || '',
                index === 0 ? '上午' : index === appState.currentItineraryLocations.length - 1 ? '傍晚' : '下午',
                '1-2小時',
                index === 0 ? '起點' : '自駕/大眾運輸',
                index === 0 ? '0' : calculateDistance(
                    appState.currentItineraryLocations[index - 1],
                    loc
                ).toFixed(1),
                dest.lat || '',
                dest.lng || '',
                dest.description?.substring(0, 50) || ''
            ]);
        });

        updateDownloadProgress(70, '生成 CSV 文件...');

        // 轉換為 CSV 字串
        const csvContent = rows.map(row =>
            row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
        ).join('\n');

        // 添加 BOM 以支援中文
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });

        updateDownloadProgress(90, '儲存檔案...');

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `行程資料_${new Date().toLocaleDateString('zh-TW')}.csv`;
        link.click();

        updateDownloadProgress(100, '完成！');

        setTimeout(() => {
            hideDownloadProgress();
            showToast('CSV 匯出成功！', 'success');
        }, 500);

    } catch (error) {
        console.error('CSV export error:', error);
        hideDownloadProgress();
        showError('CSV 匯出失敗: ' + error.message);
    }
}

/**
 * 計算兩個景點之間的距離（km）
 */
function calculateDistance(loc1Name, loc2Name) {
    const dest1 = destinationsByCountry['taiwan']?.find(d => d.name === loc1Name);
    const dest2 = destinationsByCountry['taiwan']?.find(d => d.name === loc2Name);

    if (!dest1 || !dest2 || !dest1.lat || !dest2.lat) return 0;

    const R = 6371; // 地球半徑（km）
    const dLat = (dest2.lat - dest1.lat) * Math.PI / 180;
    const dLon = (dest2.lng - dest1.lng) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(dest1.lat * Math.PI / 180) * Math.cos(dest2.lat * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
