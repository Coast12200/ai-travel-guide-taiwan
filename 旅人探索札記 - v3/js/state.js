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
        destinations: [] // 將從 TDX API 動態載入
    }
};

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
    favorites: [],
    
    // [新增] 儲存選定的出發日期
    travelDate: '', 

    // [新增] 儲存從 CWA 獲取的天氣預報資料
    weatherForecasts: {}, 
    
    // [新增] 儲存 CWA 原始資料 (供 ui.js 處理)
    cwaRawData: null, 
};

