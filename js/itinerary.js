/**
 * itinerary.js
 * * 處理所有與 AI 內容生成相關的邏輯，例如行程規劃、景點描述、
 * 旅費估算等。
 */
import { appState, destinationsByCountry } from './state.js';
import { callGeminiAPI, callGeminiAPIWithSchema, callTtsAPI, fetchTdxData } from './api.js';
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

export async function generateItinerary(type) {
    const container = document.getElementById('suggestionContent');
    const transportContainer = document.getElementById('transportSuggestionContainer');
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const prefs = document.getElementById('itineraryPrefs').value;

    if (!appState.isGeminiApiVerified) return showError('AI 行程規劃需要驗證 Gemini API', container);
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
        const prompt = createItineraryPrompt(type, allAttractions, prefs);
        const result = await callGeminiAPIWithSchema(prompt, schema);

        container.innerHTML = formatAsTimeline(result.itinerary_text);
        
        if (result.locations && result.locations.length > 0) {
            appState.currentItineraryLocations = result.locations;
            pdfBtn.classList.remove('hidden'); // 顯示 PDF 按鈕
            if (result.locations.length > 1) {
                await renderAIMap(result.locations);
                transportContainer.classList.remove('hidden');
            }
        }

    } catch (error) { 
        // --- 優化：傳遞重試函式給 showError ---
        showError(`行程規劃失敗: ${error.message}`, container, () => generateItinerary(type));
    } finally { 
        document.querySelectorAll('.suggestion-btn').forEach(b => b.disabled = false); 
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
        const prompt = `你是一位台灣交通專家。這是一份旅遊行程的地點順序：${appState.currentItineraryLocations.join(' -> ')}。請用繁體中文，為這些地點之間的移動提供最推薦的交通方式建議（例如：捷運、公車、計程車、步行）。請用 Markdown 列表格式呈現，並簡要說明理由。`;
        const result = await callGeminiAPI(prompt);
        container.innerHTML = formatAsTimeline(result.replace(/###/g, ''));
    } catch (error) {
        showError(`交通建議生成失敗: ${error.message}`, container, generateTransportSuggestions);
    } finally {
        document.getElementById('transportBtn').disabled = false;
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
    
    if (appState.currentAudioSource) {
        appState.currentAudioSource.stop();
        appState.currentAudioSource = null;
        ttsBtn.innerHTML = '🔊 語音導覽';
        return;
    }

    ttsBtn.innerHTML = '<div class="spinner" style="width:18px; height:18px; border-top-color:white; margin: auto;"></div>';
    ttsBtn.disabled = true;

    try {
        const prompt = `請用沉穩且富有磁性的聲音朗讀以下內容：${descriptionText}`;
        const { audioData, mimeType } = await callTtsAPI(prompt);

        if (!appState.audioContext) appState.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const sampleRate = parseInt(mimeType.match(/rate=(\d+)/)[1], 10);
        const pcmData = base64ToArrayBuffer(audioData);
        const pcm16 = new Int16Array(pcmData);
        const wavBlob = pcmToWav(pcm16, sampleRate);
        const arrayBuffer = await wavBlob.arrayBuffer();

        appState.audioContext.decodeAudioData(arrayBuffer, (buffer) => {
            if (appState.currentAudioSource) appState.currentAudioSource.stop();
            const source = appState.audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(appState.audioContext.destination);
            source.start(0);
            appState.currentAudioSource = source;
            ttsBtn.innerHTML = '⏹️ 停止播放';
            source.onended = () => { ttsBtn.innerHTML = '🔊 語音導覽'; appState.currentAudioSource = null; };
        });

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

function createItineraryPrompt(type, allAttractions, prefs) {
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
        2. 請從以下景點列表中挑選合適的地點：${allAttractions.join('、')}。你也可以加入列表中沒有，但非常合適的地點。
        3. 回應必須是包含 'itinerary_text' 和 'locations' 兩個 key 的 JSON 物件。
        4. 'itinerary_text' 的內容是 Markdown 格式的行程，時段用三級標題 (###)，活動用項目符號(-)。口吻要像一位親切的朋友。
        5. 'locations' 是一個陣列，包含行程中所有提到的「具體地點」的字串名稱。`;
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

