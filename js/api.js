/**
 * api.js
 * 處理所有與外部 API 的互動，包括驗證和資料獲取。
 * 將 API 邏輯集中在此處，使其他模組可以專注於其核心功能。
 */
import { appState, setAppState } from './state.js';
import { showApiStatus, updateApiStatus } from './ui.js';
import { globalCache, CACHE_TTL } from './cache-manager.js';
import { globalRetryHandler } from './api-retry-handler.js';
import CONFIG from './config.js';
import { cleanGeminiJSON, safeJSONParse } from './utils/security.js';

// --- Gemini API with Schema Support ---

export async function callGeminiAPIWithSchema(prompt, schema) {
    const apiKey = document.getElementById('geminiApiKey').value;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json", responseSchema: schema }
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 呼叫失敗`);
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;

    // 使用安全的 JSON 解析（自動清理 Markdown 代碼塊）
    const parsed = safeJSONParse(rawText);
    if (parsed === null) {
        throw new Error('Failed to parse Gemini API response as JSON');
    }

    return parsed;
}

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
        updateApiStatus('gemini', 'verified');
        // Save API key to localStorage after successful verification
        try { localStorage.setItem('geminiApiKey', apiKey); } catch (e) { console.warn('Failed to save Gemini API key:', e); }
        // clear last error for Gemini
        try { delete appState.lastApiErrors.gemini; } catch (e) { }
        // Show AI Itinerary Planner panel after successful verification
        const panel = document.getElementById('weatherSuggestionPanel');
        if (panel) panel.classList.remove('hidden');
    } catch (error) {
        showApiStatus(`❌ Gemini API 驗證失敗: ${error.message}`, 'error');
        setAppState('isGeminiApiVerified', false);
        updateApiStatus('gemini', 'error');
        try { appState.lastApiErrors.gemini = error.message; } catch (e) { }
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
        updateApiStatus('cwa', 'verified');
        // Save API key to localStorage after successful verification
        try { localStorage.setItem('cwaApiKey', apiKey); } catch (e) { console.warn('Failed to save CWA API key:', e); }
        try { delete appState.lastApiErrors.cwa; } catch (e) { }
        showApiStatus('✅ 台灣天氣資料載入成功！', 'success');
        return true; // Return success for UI update
    } catch (error) {
        showApiStatus(`❌ 天氣資料獲取失敗: ${error.message}`, 'error');
        setAppState('isCwaApiVerified', false);
        setAppState('weatherData', null);
        updateApiStatus('cwa', 'error');
        try { appState.lastApiErrors.cwa = error.message; } catch (e) { }
        return false;
    } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
}

// Fetch CWA alert-like information and return an array of alert objects
export async function fetchCwaAlerts() {
    const apiKey = document.getElementById('cwaApiKey') ? document.getElementById('cwaApiKey').value : null;
    if (!apiKey) return [];
    try {
        const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&format=JSON`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        const raw = JSON.stringify(data).toLowerCase();

        const alerts = [];
        const tests = [
            { key: 'typhoon', words: ['颱風', '陸上颱風', '海上颱風', '颱風警報'], severity: 'severe', icon: '🌀' },
            { key: 'heavy_rain', words: ['豪雨', '豪大雨', '豪雨特報', '豪大雨特報', '大雨特報'], severity: 'high', icon: '🌧️' },
            { key: 'low_temp', words: ['低溫', '低溫特報'], severity: 'high', icon: '🥶' },
            { key: 'flood', words: ['淹水', '土石流', '土石流警戒'], severity: 'high', icon: '💧' }
        ];

        tests.forEach(t => {
            for (const w of t.words) {
                const idx = raw.indexOf(w);
                if (idx !== -1) {
                    // extract a short context snippet
                    const start = Math.max(0, idx - 80);
                    const snippet = raw.substring(start, Math.min(raw.length, idx + 160)).replace(/\\s+/g, ' ').slice(0, 240);
                    alerts.push({ type: t.key, severity: t.severity, icon: t.icon, message: snippet });
                    break;
                }
            }
        });

        // dedupe by type
        const unique = [];
        const seen = new Set();
        alerts.forEach(a => { if (!seen.has(a.type)) { seen.add(a.type); unique.push(a); } });

        setAppState('weatherAlerts', unique);
        return unique;
    } catch (err) {
        console.warn('fetchCwaAlerts failed', err);
        setAppState('weatherAlerts', []);
        return [];
    }
}

/**
 * 獲取中央氣象署 (CWA) 的天氣預報資料
 * @param {string} location - 縣市名稱 (例如: '臺北市')
 * @returns {Promise<object>} - CWA 資料 { forecast, warnings }
 */
export async function fetchCwaData(location = '臺北市') {
    const apiKey = document.getElementById('cwaApiKey') ? document.getElementById('cwaApiKey').value : null;
    if (!apiKey) throw new Error('CWA API Key is not set.');
    if (!appState.isCwaApiVerified) throw new Error('CWA API not verified.');

    // 檢查快取
    const cacheKey = `cwa_weather_${location}`;
    const cached = globalCache.get(cacheKey);
    if (cached) {
        console.log(`✅ Using cached CWA data for ${location}`);
        return cached;
    }

    try {
        // 使用重試機制獲取數據
        const result = await globalRetryHandler.fetchWithRetry(
            async ({ signal }) => {
                // 獲取縣市一週預報 (F-C0032-001)
                const forecastUrl = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&locationName=${encodeURIComponent(location)}&format=JSON`;

                // 同時獲取即時警報 (W-C0058-001)
                const warningUrl = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/W-C0058-001?Authorization=${apiKey}&format=JSON`;

                const [forecastResponse, warningResponse] = await Promise.all([
                    fetch(forecastUrl, { signal }),
                    fetch(warningUrl, { signal })
                ]);

                const forecastData = forecastResponse.ok ? await forecastResponse.json() : null;
                const warningData = warningResponse.ok ? await warningResponse.json() : null;

                if (!forecastResponse.ok && !warningResponse.ok) {
                    throw new Error('CWA API 請求失敗');
                }

                return {
                    forecast: forecastData?.records?.location?.[0],
                    warnings: warningData?.records?.alert || []
                };
            },
            {
                onRetry: (attempt, delay, error) => {
                    console.log(`⚠️ CWA API retry ${attempt}, delay ${delay}ms:`, error.message);
                }
            }
        );

        // 快取結果（1 小時）
        globalCache.set(cacheKey, result, CACHE_TTL.WEATHER);
        setAppState('cwaData', result);
        return result;
    } catch (error) {
        console.error('fetchCwaData failed', error);
        throw error;
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
        updateApiStatus('tdx', 'verified');
        // Save TDX credentials to localStorage after successful verification
        try {
            const clientId = document.getElementById('tdxClientId').value;
            const clientSecret = document.getElementById('tdxClientSecret').value;
            localStorage.setItem('tdxClientId', clientId);
            localStorage.setItem('tdxClientSecret', clientSecret);
        } catch (e) { console.warn('Failed to save TDX credentials:', e); }
        try { delete appState.lastApiErrors.tdx; } catch (e) { }
    } catch (error) {
        showApiStatus(`❌ TDX API 驗證失敗: ${error.message}`, 'error');
        setAppState('isTdxApiVerified', false);
        setAppState('tdxAccessToken', null);
        updateApiStatus('tdx', 'error');
        try { appState.lastApiErrors.tdx = error.message; } catch (e) { }
    } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    }
}

// --- API 呼叫核心函式 ---

/**
 * 通用重試函數 - 使用指數退避策略
 * @deprecated 使用 globalRetryHandler.fetchWithRetry() 替代
 * @param {Function} fn - 要執行的非同步函數
 * @param {Object} options - 選項
 * @returns {Promise} - 函數執行結果
 */
async function retryWithBackoff(fn, options = {}) {
    // 為了向後兼容，保留此函數但使用新的 APIRetryHandler
    return globalRetryHandler.fetchWithRetry(
        async ({ signal }) => fn(),
        {
            onRetry: options.onRetry ? (attempt, delay, error) => {
                options.onRetry(attempt, options.maxRetries || CONFIG.API.RETRY_MAX, delay, error);
            } : undefined
        }
    );
}

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
        try { appState.lastApiErrors.tdx = msg; } catch (e) { }
        throw new Error(msg);
    }
    const data = await response.json();
    setAppState('tdxAccessToken', data.access_token);
    // 記錄 token 到期時間（後端通常回傳 expires_in）
    if (data.expires_in) {
        try { setAppState('tdxTokenExpiresAt', Date.now() + (Number(data.expires_in) - 30) * 1000); } catch (e) { setAppState('tdxTokenExpiresAt', null); }
    }
}

export async function fetchTdxData(apiUrl, options = {}) {
    const { timeout = 15000, retry = true } = options;

    const fetchFn = async () => {
        // Token 檢查和刷新邏輯
        if (appState.tdxTokenExpiresAt && Date.now() > appState.tdxTokenExpiresAt) {
            console.log('TDX access token expired or near expiry, refreshing...');
            appState.tdxAccessToken = null;
        }
        if (!appState.tdxAccessToken) await getTdxAccessToken();

        // 創建帶超時的 fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const call = async () => fetch(apiUrl, {
                headers: { 'Authorization': `Bearer ${appState.tdxAccessToken}` },
                signal: controller.signal
            });

            let response = await call();

            if (response.status === 401) {
                console.log('TDX token expired, refreshing...');
                await getTdxAccessToken();
                response = await call();
            }

            if (!response.ok) {
                const msg = `TDX API 請求失敗，狀態碼: ${response.status}`;
                try { appState.lastApiErrors.tdx = msg; } catch (e) { }
                throw new Error(msg);
            }

            try { delete appState.lastApiErrors.tdx; } catch (e) { }
            return await response.json();
        } catch (error) {
            // 處理 AbortError
            if (error.name === 'AbortError') {
                throw new Error(`請求超時 (${timeout}ms)`);
            }
            throw error;
        } finally {
            clearTimeout(timeoutId);
        }
    };

    if (retry) {
        return await retryWithBackoff(fetchFn, {
            maxRetries: 1,  // 減少到 1 次重試以避免速率限制
            initialDelay: 2000,  // 增加初始延遲到 2 秒
            onRetry: (attempt, max, delay, error) => {
                console.log(`TDX API 請求重試 ${attempt}/${max}，延遲 ${delay}ms，錯誤: ${error.message}`);
            }
        });
    } else {
        return await fetchFn();
    }
}

// 新增：從 TDX 獲取指定城市的觀光景點資料
export async function fetchTdxScenicSpots(city) {
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?$filter=City eq '${encodeURIComponent(city)}'&$top=30&$format=JSON`;
    const cacheKey = `tdx_city_${city}`;
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 小時
    const staleGracePeriod = 1000 * 60 * 60 * 24 * 7; // 7 天（過期但仍可用）

    // 嘗試從快取中讀取
    let cachedData = null;
    let cacheAge = Infinity;

    try {
        const raw = localStorage.getItem(cacheKey);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed.timestamp && parsed.data) {
                cacheAge = Date.now() - parsed.timestamp;
                cachedData = parsed;

                // 如果快取仍然新鮮，直接返回
                if (cacheAge < cacheDuration) {
                    console.log(`使用新鮮快取: ${city} (${Math.round(cacheAge / 1000 / 60)}分鐘前)`);
                    return { source: 'cache', data: parsed.data, city };
                }
            }
        }
    } catch (err) {
        console.warn(`讀取快取失敗 (${city}):`, err);
    }

    // 嘗試從 API 獲取
    try {
        console.log(`從 TDX API 獲取: ${city}`);
        const spots = await fetchTdxData(apiUrl, { timeout: 15000, retry: true });

        // 寫入快取
        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: Date.now(),
                data: spots
            }));
            console.log(`快取已更新: ${city}`);
        } catch (err) {
            console.warn(`快取寫入失敗 (${city}):`, err);
        }

        return { source: 'live', data: spots, city };
    } catch (error) {
        console.error(`從 API 獲取 ${city} 失敗:`, error);

        // 如果有過期但仍在寬限期內的快取，使用它
        if (cachedData && cacheAge < staleGracePeriod) {
            console.warn(`使用過期快取作為備援: ${city} (${Math.round(cacheAge / 1000 / 60 / 60)}小時前)`);
            return { source: 'cache-stale', data: cachedData.data, city };
        }

        // 完全失敗，拋出錯誤
        throw new Error(`無法獲取 ${city} 的景點資料: ${error.message}`);
    }
}

// Clear TDX per-city cache keys
export function clearTdxCache() {
    try {
        // Clear from CacheManager (new system)
        const stats = globalCache.getStats();
        console.log(`🧹 Clearing TDX cache (${stats.itemCount} items)`);

        // Clear TDX-specific keys from CacheManager
        // Note: CacheManager doesn't expose key iteration, so we clear all
        // In production, you might want to add a clearByPrefix method to CacheManager

        // Clear legacy localStorage keys
        Object.keys(localStorage).forEach(k => {
            if (k.startsWith('tdx_city_') || k === 'tdx-scenic-spots-taiwan' || k.startsWith('travel_cache_tdx')) {
                localStorage.removeItem(k);
            }
        });

        console.log('✅ TDX cache cleared');
    } catch (err) {
        console.warn('clearTdxCache error', err);
    }
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

// 取得指定 ScenicSpot 的詳細資訊（包含營業時間、電話、網站等），回傳 null 表示無資料或錯誤
export async function fetchTdxScenicSpotDetails(scenicSpotId) {
    if (!scenicSpotId) throw new Error('需要 ScenicSpot ID');
    const apiUrl = `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${encodeURIComponent(scenicSpotId)}?$format=JSON`;
    try {
        const data = await fetchTdxData(apiUrl);
        // API 回傳通常是一個陣列（或單一物件陣列）
        const item = Array.isArray(data) ? data[0] : data;
        if (!item) return null;
        return {
            id: scenicSpotId,
            name: item.ScenicSpotName || item.Name || null,
            openTime: item.OpenTime || item.OpenHour || item.ChangableOpenTime || null,
            phone: item.Phone || item.Tel || null,
            website: item.WebsiteUrl || item.WebSiteUrl || item.TicketInfo || null,
            raw: item
        };
    } catch (err) {
        console.warn('fetchTdxScenicSpotDetails failed', err);
        return null;
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




// --- 新功能：AI 圖像生成 (使用 Gemini 2.0 Flash 的圖像生成能力) ---
export async function callGeminiImageGenerationAPI(prompt) {
    const apiKey = document.getElementById('geminiApiKey').value;
    if (!apiKey) throw new Error('Gemini API Key 未設定');

    // 使用 Gemini 2.0 Flash 的圖像生成能力
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            responseModalities: ["IMAGE"],
            imageGenerationConfig: {
                numberOfImages: 1,
                size: "1024x1024"
            }
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || `圖像生成 API 呼叫失敗`);
        }

        const data = await response.json();
        const imagePart = data?.candidates?.[0]?.content?.parts?.[0];

        if (imagePart?.inlineData) {
            return {
                imageData: imagePart.inlineData.data,
                mimeType: imagePart.inlineData.mimeType || 'image/jpeg'
            };
        } else if (imagePart?.text) {
            // 某些情況下可能返回文字描述而不是圖像
            throw new Error(`圖像生成失敗: ${imagePart.text}`);
        } else {
            throw new Error('無效的圖像生成 API 回應');
        }
    } catch (error) {
        console.error('Gemini Image Generation API 錯誤:', error);
        throw error;
    }
}
