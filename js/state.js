/**
 * state.js
 * * 集中管理應用程式的共享狀態和靜態資料。
 * 這樣可以避免全域變數污染，並使狀態的傳遞和修改更加清晰。
 */

// --- 靜態資料 ---

// 手繪風格 SVG 圖標
export const icons = {
    building: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 95V15 l40 -10 v90 z M30 35 h40 M15 95 h70"></path></svg>`,
    museum: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 10 A 35 20 0 0 1 50 10 Z M15 95 h70 v-55 l-35 -15 l-35 15 z M30 95 v-40 M50 95 v-40 M70 95 v-40"></path></svg>`,
    lake: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 40 Q 30 20 50 40 T 90 40 M10 60 Q 30 40 50 60 T 90 60 M10 80 Q 30 60 50 80 T 90 80"></path></svg>`,
    mountain: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 95 L 40 30 L 55 60 L 70 40 L 90 95 z"></path></svg>`,
    forest: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 95 v-30 l-15 15 M30 65 l15 15 M45 95 v-40 l-15 20 M45 55 l15 20 M60 95 v-30 l-15 15 M60 65 l15 15"></path></svg>`,
    lantern: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M40 10 h20 M50 10 v15 M30 25 h40 a10 80 0 0 1 0 50 h-40 a10 80 0 0 1 0 -50 z M50 75 v15 M45 90 h10"></path></svg>`,
    beach: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M70 15 a 15 15 0 1 1 0 30 a 15 15 0 1 1 0 -30 M10 95 Q 30 75 50 95 T 90 95 M20 85 Q 40 65 60 85 T 100 85 M40 60 A 20 20 0 0 1 20 40 l30 -30 l10 10"></path></svg>`,
    art: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 10 a 20 20 0 1 0 0.1 0 Z M50 30 v50 M30 80 h40 M30 20 C 10 40, 10 60, 30 80 M70 20 C 90 40, 90 60, 70 80"></path></svg>`,
    fuji: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 30 h40 v-5 h-40 z M10 95 L 50 25 L 90 95 z M25 75 h50 M40 55 h20"></path></svg>`
};

// 景點資料庫
export const destinationsByCountry = {
    taiwan: {
        name: '台灣', emoji: '🇹🇼',
        regionMapping: {
            '北部地區': ['臺北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣'],
            '中部地區': ['臺中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣'],
            '南部地區': ['嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣'],
            '東部地區': ['花蓮縣', '臺東縣'],
            '離島地區': ['澎湖縣', '金門縣', '連江縣']
        },
            // 默認載入為離線備援靜態景點資料；若 TDX 驗證成功則會以即時資料覆蓋
            destinations: []
    }
};

    // --- 離線備援靜態景點資料 (會在無法或未驗證 TDX API 時使用) ---
    export const offlineFallbackDestinations = [
        {
            id: 'offline-1',
            name: '臺北故宮博物院',
            description: '收藏豐富的中華文物，包含歷史名品與特展。',
            city: '臺北市',
            picture: null,
            coordinates: [25.102398, 121.548507],
            region: '北部地區'
        },
        {
            id: 'offline-2',
            name: '九份老街',
            description: '山城老街、茶館與山海景色的經典組合。',
            city: '新北市',
            picture: null,
            coordinates: [25.1093, 121.8445],
            region: '北部地區'
        },
        {
            id: 'offline-3',
            name: '日月潭',
            description: '台灣著名湖泊，適合騎行與船遊。',
            city: '南投縣',
            picture: null,
            coordinates: [23.8650, 120.9270],
            region: '中部地區'
        },
        {
            id: 'offline-4',
            name: '高雄駁二藝術特區',
            description: '創意展演與戶外公共藝術的聚落。',
            city: '高雄市',
            picture: null,
            coordinates: [22.6273, 120.2795],
            region: '南部地區'
        },
        {
            id: 'offline-5',
            name: '太魯閣國家公園',
            description: '壯觀的峽谷與山徑，適合喜愛自然的旅人。',
            city: '花蓮縣',
            picture: null,
            coordinates: [24.1516, 121.6112],
            region: '東部地區'
        }
    ];

    // 將離線備援資料預先放入 destinations，以便未驗證 TDX 時可直接使用
    destinationsByCountry.taiwan.destinations = offlineFallbackDestinations;

// --- 動態應用程式狀態 ---
export const appState = {
    map: null,
    currentDestination: null,
    currentCountry: 'taiwan',
    isGeminiApiVerified: false,
    isCwaApiVerified: false,
    isTdxApiVerified: false,
    weatherData: null,
    tdxAccessToken: null,
    aiRouteLayer: null,
    audioContext: null,
    currentAudioSource: null,
    currentItineraryLocations: [],
    favorites: [], // 新增收藏夾狀態
    // 用於儲存各 API 最近的錯誤訊息，方便診斷面板顯示
    lastApiErrors: {},
    // 使用者介面語言：'zh' 或 'en'，預設從 localStorage 讀取
    currentLanguage: (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'zh',
    // 若使用者勾選「始終離線」，強制使用離線備援資料（persisted in localStorage 'alwaysOffline')
    alwaysOffline: (typeof localStorage !== 'undefined' && localStorage.getItem('alwaysOffline')) === 'true'
};

// --- State accessors to centralize mutations ---
export function setAppState(key, value) {
    try {
        appState[key] = value;
        // Emit a simple event so other parts may react if they subscribe
        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
            try { window.dispatchEvent(new CustomEvent('appStateChanged', { detail: { key, value } })); } catch(e) {}
        }
    } catch (e) { console.warn('setAppState error', e); }
}

export function getAppState(key) {
    try { return appState[key]; } catch(e) { return undefined; }
}

export function updateAppState(key, updater) {
    try {
        const prev = appState[key];
        const next = updater(prev);
        setAppState(key, next);
        return next;
    } catch (e) { console.warn('updateAppState error', e); return null; }
}

// --- 簡單的翻譯表 (中文 / English) ---
export const translations = {
    title: { zh: '旅人探索札記', en: 'Traveler Explorer Notes' },
    subtitle: { zh: 'AI 智慧導覽，為您的旅程增添靈感與故事', en: 'AI guided tours to inspire your trip' },
    favorites: { zh: '❤️ 我的收藏', en: '❤️ My Favorites' },
    theme_day: { zh: '☀️ 日間模式', en: '☀️ Day mode' },
    theme_night: { zh: '🌙 夜間模式', en: '🌙 Night mode' },
    step1: { zh: '① 輸入 API 金鑰', en: '① Enter API keys' },
    step2: { zh: '② 選擇探索國度', en: '② Choose a country' },
    step3: { zh: '③ 點選喜愛景點', en: '③ Pick favorite spots' },
    step4: { zh: '④ 開始 AI 互動', en: '④ Start AI interactions' },
    api_keys_title: { zh: '🔑 API 金鑰設定', en: '🔑 API Keys' },
    verify_gemini: { zh: '驗證 Gemini', en: 'Verify Gemini' },
    verify_cwa: { zh: '載入天氣', en: 'Load Weather' },
    verify_tdx: { zh: '驗證 TDX', en: 'Verify TDX' },
    search_placeholder: { zh: '🔍 搜尋景點名稱或城市...', en: '🔍 Search spot name or city...' },
    country_selector_title: { zh: '🌏 選擇探索國度', en: '🌏 Choose country' },
    ai_planner_title: { zh: '💡 AI 行程規劃師', en: '💡 AI Itinerary Planner' },
    sunnyBtn: { zh: '☀️ 晴天漫遊', en: '☀️ Sunny trip' },
    rainyBtn: { zh: '🌧️ 雨天備案', en: '🌧️ Rainy plan' },
    luckyBtn: { zh: '🔮 驚喜旅程', en: '🔮 Surprise trip' },
    multiDayBtn: { zh: '📅 多日行程', en: '📅 Multi-day' },
    downloadPdfBtn: { zh: '📄 下載 PDF', en: '📄 Download PDF' },
    description_heading: { zh: '📖 景點故事集', en: '📖 Spot Stories' },
    map_heading: { zh: '🗺️ 地圖與攝影點', en: '🗺️ Map & Photo Spots' },
    favorites_modal_title: { zh: '❤️ 我的收藏', en: '❤️ My Favorites' },
    data_source_offline: { zh: '離線備援資料', en: 'Offline fallback data' },
    data_source_cache: { zh: '快取資料', en: 'Cached data' },
    data_source_live: { zh: 'TDX 即時資料', en: 'TDX Live data' },
    data_source_offline_api_error: { zh: '離線備援資料（API 錯誤）', en: 'Offline fallback (API error)' },
    favorite: { zh: '⭐ 收藏', en: '⭐ Favorite' },
    favorited: { zh: '★ 已收藏', en: '★ Favorited' },
    try_verify_and_load: { zh: '驗證並載入即時資料', en: 'Verify and load live data' },
    language_label: { zh: '中文', en: 'EN' },
    always_offline_label: { zh: '始終離線模式', en: 'Always offline' },
    offline_notice_prefix: { zh: '目前使用', en: 'Currently using' }
};

