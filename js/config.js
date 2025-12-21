/**
 * config.js
 * 應用程式配置常數集中管理
 * 
 * 集中管理所有魔術數字和配置參數，提升代碼可維護性
 */

export const CONFIG = {
    // 快取配置
    CACHE: {
        TTL_WEATHER: 60 * 60 * 1000,           // 1 小時
        TTL_DESTINATIONS: 24 * 60 * 60 * 1000, // 24 小時
        TTL_TDX_DATA: 30 * 60 * 1000,          // 30 分鐘
        TTL_AI_CONTENT: 0,                      // 會話期間（不持久化到 localStorage）
        TTL_USER_PREFS: 365 * 24 * 60 * 60 * 1000, // 1 年
        CLEANUP_INTERVAL: 5 * 60 * 1000,       // 5 分鐘清理一次
    },

    // API 重試配置
    API: {
        RETRY_MAX: 3,                          // 最大重試次數
        RETRY_INITIAL_DELAY: 1000,             // 初始延遲 1 秒
        RETRY_BACKOFF_MULTIPLIER: 2,           // 指數退避倍數
        TIMEOUT: 30000,                        // 30 秒超時

        // 不可重試的 HTTP 狀態碼
        NON_RETRYABLE_STATUS: [400, 401, 403, 404, 422],
    },

    // 地圖配置
    MAP: {
        DEFAULT_ZOOM: 13,
        DEFAULT_CENTER: [25.0330, 121.5654],   // 台北市
        MAX_MARKERS: 50,
        HEATMAP_RADIUS: 25,
        HEATMAP_BLUR: 15,
        HEATMAP_MAX_ZOOM: 17,

        // 路線顏色
        ROUTE_COLOR: '#22c55e',                // 草綠色
        ROUTE_WEIGHT: 4,
        ROUTE_OPACITY: 0.7,
    },

    // 行程配置
    ITINERARY: {
        MAX_DAYS: 7,                           // 最多 7 天
        MAX_SPOTS_PER_DAY: 8,                  // 每天最多 8 個景點
        DEFAULT_START_TIME: '09:00',
        DEFAULT_END_TIME: '18:00',
        MIN_STAY_MINUTES: 30,                  // 每個景點最少停留 30 分鐘
        MAX_STAY_MINUTES: 180,                 // 每個景點最多停留 3 小時

        // 版本歷史
        MAX_HISTORY_LENGTH: 5,                 // 最多保存 5 個歷史版本
    },

    // 預算配置
    BUDGET: {
        LEVELS: {
            BUDGET: {
                min: 800,
                max: 1500,
                label: { zh: '💵 節儉', en: '💵 Budget' }
            },
            COMFORT: {
                min: 1500,
                max: 3000,
                label: { zh: '💴 舒適', en: '💴 Comfort' }
            },
            LUXURY: {
                min: 3000,
                max: 5000,
                label: { zh: '💎 豪華', en: '💎 Luxury' }
            }
        },

        DEFAULT_DAILY_PER_PERSON: 2000,        // 預設每日每人預算 (TWD)
    },

    // UI 配置
    UI: {
        SKELETON_DISPLAY_TIME: 100,            // 骨架屏顯示時間（毫秒）
        TOAST_DURATION: 3000,                  // Toast 顯示時間（毫秒）
        ANIMATION_DURATION: 300,               // 動畫持續時間（毫秒）
        DEBOUNCE_DELAY: 300,                   // 防抖延遲（毫秒）

        // 搜尋配置
        SEARCH_MIN_LENGTH: 2,                  // 最少搜尋字數
        SEARCH_MAX_RESULTS: 20,                // 最多顯示結果數
    },

    // 效能配置
    PERFORMANCE: {
        ENABLE_MONITORING: true,               // 啟用效能監控
        LOG_SLOW_OPERATIONS: true,             // 記錄慢操作
        SLOW_THRESHOLD_MS: 1000,               // 慢操作閾值（毫秒）
    },

    // 離線模式配置
    OFFLINE: {
        FALLBACK_DESTINATIONS_COUNT: 5,        // 離線備援景點數量
        ENABLE_SERVICE_WORKER: true,           // 啟用 Service Worker
    },

    // API 端點
    ENDPOINTS: {
        GEMINI_API: 'https://generativelanguage.googleapis.com/v1beta/models',
        CWA_API: 'https://opendata.cwa.gov.tw/api',
        TDX_API: 'https://tdx.transportdata.tw/api/basic',
        NOMINATIM_API: 'https://nominatim.openstreetmap.org',
    },

    // 功能開關
    FEATURES: {
        ENABLE_VOICE_INPUT: true,
        ENABLE_TTS: true,
        ENABLE_DARK_MODE: true,
        ENABLE_PWA: true,
        ENABLE_VERSION_HISTORY: true,
        ENABLE_BUDGET_ESTIMATOR: true,
        ENABLE_AR_NAVIGATION: false,           // 實驗性功能
    },

    // 開發模式配置
    DEV: {
        ENABLE_DEBUG_LOGS: false,
        ENABLE_PERFORMANCE_LOGS: false,
        MOCK_API_RESPONSES: false,
    }
};

// 凍結配置物件，防止意外修改
Object.freeze(CONFIG);
Object.freeze(CONFIG.CACHE);
Object.freeze(CONFIG.API);
Object.freeze(CONFIG.MAP);
Object.freeze(CONFIG.ITINERARY);
Object.freeze(CONFIG.BUDGET);
Object.freeze(CONFIG.UI);
Object.freeze(CONFIG.PERFORMANCE);
Object.freeze(CONFIG.OFFLINE);
Object.freeze(CONFIG.ENDPOINTS);
Object.freeze(CONFIG.FEATURES);
Object.freeze(CONFIG.DEV);

export default CONFIG;
