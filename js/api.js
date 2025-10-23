/**
 * api.js
 * * 處理所有與外部 API 的互動，包括驗證和資料獲取。
 * 將 API 邏輯集中在此處，使其他模組可以專注於其核心功能。
 */
import { appState, setAppState } from './state.js';
import { showApiStatus } from './ui.js';

// --- API 驗證 ---

export async function verifyGeminiApi() {
    const btn = document.getElementById('verifyGeminiBtn');
    const apiKey = document.getElementById('geminiApiKey').value;
    if (!apiKey) return showApiStatus('請輸入 Gemini API Key', 'error');
    // disable button and set aria-busy
    if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
    showApiStatus('正在驗證 Gemini API...', 'loading');
    try {
        await callGeminiAPI('test');
    showApiStatus('✅ Gemini API 驗證成功！', 'success');
    setAppState('isGeminiApiVerified', true);
        // clear last error for Gemini
        try { delete appState.lastApiErrors.gemini; } catch(e){}
    } catch (error) {
        showApiStatus(`❌ Gemini API 驗證失敗: ${error.message}`, 'error');
    setAppState('isGeminiApiVerified', false);
        try { appState.lastApiErrors.gemini = error.message; } catch(e){}
    } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
}

export async function verifyCwaApi() {
    const btn = document.getElementById('verifyCwaBtn');
    const apiKey = document.getElementById('cwaApiKey').value;
    if (appState.currentCountry !== 'taiwan') return showApiStatus('天氣功能目前僅支援台灣地區', 'error');
    if (!apiKey) return showApiStatus('請輸入 CWA API Key', 'error');
    if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
    showApiStatus('正在從中央氣象署獲取天氣資料...', 'loading');
    try {
        const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&format=JSON`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP 錯誤! 狀態: ${response.status}`);
        const data = await response.json();
        if (!data.success) throw new Error('CWA API 回應失敗');
        
        appState.weatherData = data.records.location;
    setAppState('isCwaApiVerified', true);
        try { delete appState.lastApiErrors.cwa; } catch(e){}
        showApiStatus('✅ 台灣天氣資料載入成功！', 'success');
        return true; // Return success for UI update
    } catch (error) {
        showApiStatus(`❌ 天氣資料獲取失敗: ${error.message}`, 'error');
    setAppState('isCwaApiVerified', false);
    setAppState('weatherData', null);
        try { appState.lastApiErrors.cwa = error.message; } catch(e){}
        return false;
    } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
}

export async function verifyTdxApi() {
    const btn = document.getElementById('verifyTdxBtn');
    if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
    showApiStatus('正在驗證 TDX API...', 'loading');
    try {
        await getTdxAccessToken();
        showApiStatus('✅ TDX API 驗證成功！', 'success');
    setAppState('isTdxApiVerified', true);
        try { delete appState.lastApiErrors.tdx; } catch(e){}
    } catch (error) {
        showApiStatus(`❌ TDX API 驗證失敗: ${error.message}`, 'error');
    setAppState('isTdxApiVerified', false);
    setAppState('tdxAccessToken', null);
        try { appState.lastApiErrors.tdx = error.message; } catch(e){}
    } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
}

// --- API 呼叫核心函式 ---

async function getTdxAccessToken() {
    const clientId = document.getElementById('tdxClientId').value;
    const clientSecret = document.getElementById('tdxClientSecret').value;
    if (!clientId || !clientSecret) throw new Error('請輸入 TDX Client ID 和 Secret');

    const response = await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'grant_type': 'client_credentials', 'client_id': clientId, 'client_secret': clientSecret
        })
    });
    if (!response.ok) {
        const error = await response.json();
        const msg = `TDX 認證失敗: ${error.error_description || response.statusText}`;
        try { appState.lastApiErrors.tdx = msg; } catch(e){}
        throw new Error(msg);
    }
    const data = await response.json();
    setAppState('tdxAccessToken', data.access_token);
    // 記錄 token 到期時間（後端通常回傳 expires_in）
    if (data.expires_in) {
    try { setAppState('tdxTokenExpiresAt', Date.now() + (Number(data.expires_in) - 30) * 1000); } catch(e) { setAppState('tdxTokenExpiresAt', null); }
    }
}

export async function fetchTdxData(apiUrl) {
    // 如果有 expiresAt，且即將到期，先刷新
    if (appState.tdxTokenExpiresAt && Date.now() > appState.tdxTokenExpiresAt) {
        console.log('TDX access token expired or near expiry, refreshing...');
        appState.tdxAccessToken = null;
    }
    if (!appState.tdxAccessToken) await getTdxAccessToken();
    
    const call = async () => fetch(apiUrl, { headers: { 'Authorization': `Bearer ${appState.tdxAccessToken}` }});
    
    let response = await call();

    if (response.status === 401) {
        console.log('TDX token expired, refreshing...');
        await getTdxAccessToken();
        response = await call();
    }
    
    if (!response.ok) {
        const msg = `TDX API 請求失敗，狀態碼: ${response.status}`;
        try { appState.lastApiErrors.tdx = msg; } catch(e){}
        throw new Error(msg);
    }
    try { delete appState.lastApiErrors.tdx; } catch(e){}
    return await response.json();
}

// 新增：從 TDX 獲取指定城市的觀光景點資料
export async function fetchTdxScenicSpots(city) {
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?$filter=City eq '${encodeURIComponent(city)}'&$top=30&$format=JSON`;
    const cacheKey = `tdx_city_${city}`;
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 小時

    // 嘗試從快取中讀取
    try {
        const raw = localStorage.getItem(cacheKey);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.timestamp && (Date.now() - parsed.timestamp) < cacheDuration) {
                return { source: 'cache', data: parsed.data };
            }
        }
    } catch (err) { /* ignore malformed cache */ }

    try {
        const spots = await fetchTdxData(apiUrl);
        // 寫入快取
        try {
            localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data: spots }));
        } catch (err) { console.warn('Failed to cache TDX city data', err); }
        return { source: 'live', data: spots };
    } catch (error) {
        console.error(`Fetching scenic spots for ${city} failed:`, error);
        // 若快取存在但過期，也可考慮回退到快取（此處回傳上層處理）
        const raw = localStorage.getItem(cacheKey);
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                return { source: 'cache-stale', data: parsed.data };
            } catch (err) { /* ignore */ }
        }
        // 向上拋出錯誤，讓呼叫者知道此城市的請求失敗了
        throw new Error(`Failed to fetch data for ${city}`);
    }
}

// Clear TDX per-city cache keys
export function clearTdxCache() {
    try {
        Object.keys(localStorage).forEach(k => { if (k.startsWith('tdx_city_') || k === 'tdx-scenic-spots-taiwan') localStorage.removeItem(k); });
    } catch (err) { console.warn('clearTdxCache error', err); }
}

// Generic helper: fetch nearby POIs from TDX Tourism endpoints (e.g., ScenicSpot, Restaurant, Hotel)
export async function fetchTdxNearbyPOIs(type, lat, lon, radius = 800, top = 5) {
    if (!type) throw new Error('請指定 POI 類型');
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/${type}?$top=${top}&$spatialFilter=nearby(${lat},${lon},${radius})&$format=JSON`;
    try {
        const data = await fetchTdxData(apiUrl);
        return Array.isArray(data) ? data : [];
    } catch (err) {
        console.warn('fetchTdxNearbyPOIs failed', err);
        return []; // graceful fallback to empty array
    }
}

export async function callGeminiAPI(prompt) {
    const apiKey = document.getElementById('geminiApiKey').value;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 呼叫失敗`);
    }
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

export async function callGeminiAPIWithSchema(prompt, schema) {
    const apiKey = document.getElementById('geminiApiKey').value;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", responseSchema: schema }
    };
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 呼叫失敗`);
    }
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
}

export async function callTtsAPI(prompt) {
    const apiKey = document.getElementById('geminiApiKey').value;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
    const payload = { 
        contents: [{ parts: [{ text: prompt }] }], 
        generationConfig: { 
            responseModalities: ["AUDIO"], 
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Charon" } } } 
        }, 
        model: "gemini-2.5-flash-preview-tts" 
    };
    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) throw new Error((await response.json()).error?.message || 'TTS API 呼叫失敗');
    const result = await response.json();
    const part = result?.candidates?.[0]?.content?.parts?.[0];
    const audioData = part?.inlineData?.data;
    const mimeType = part?.inlineData?.mimeType;
    if (!audioData || !mimeType) throw new Error('無效的 TTS API 回應');
    return { audioData, mimeType };
}
