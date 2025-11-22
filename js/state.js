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
    cwaData: null, // 儲存 CWA 獲取的資料 (警報、預報等)
    isTdxApiVerified: false,
    tdxDataCache: {}, // 儲存 TDX 查詢結果的快取 (如景點列表、交通資訊)
    weatherData: null,
    tdxAccessToken: null,
    aiRouteLayer: null,
    audioContext: null,
    currentAudioSource: null,
    currentItineraryLocations: [],
    favorites: [], // 新增收藏夾狀態
    // 用於儲存各 API 最近的錯誤訊息，方便診斷面板顯示
    lastApiErrors: {},
    // TTS audio cache: { attractionId: { audioUrl, mimeType, text } }
    audioCache: {},
    // Current playing audio element and its associated attraction ID
    currentPlayingAudio: null,
    currentPlayingAttractionId: null,
    // 旅費估算相關狀態
    budgetDailyPerPerson: 2000, // 預設每日每人預算 (TWD)
    budgetLevel: 'comfort', // 預算等級: 'budget', 'comfort', 'luxury'
    diningPreference: 'local-street', // 餐飲偏好: 'local-street', 'casual-restaurant', 'fine-dining', 'self-catering', 'mixed'
    travelStyle: 'balanced', // 旅遊風格: 'history', 'foodie', 'nature', 'adventure', 'cultural', 'balanced'
    lastCostEstimate: null, // 儲存最後一次的費用估算結果 { totalCost, dailyAverage, breakdown, currencies, parameters }
    // 使用者介面語言：'zh' 或 'en'，預設從 localStorage 讀取
    currentLanguage: (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'zh',
    // 若使用者勾選「始終離線」，強制使用離線備援資料（persisted in localStorage 'alwaysOffline')
    alwaysOffline: (typeof localStorage !== 'undefined' && localStorage.getItem('alwaysOffline')) === 'true',

    // --- 行程最優化相關狀態 ---
    lastOptimizedRoute: null, // { order: [], timeEstimates: [], timestamp }
    itineraryFeedbackCount: 0, // 追蹤反饋迭代次數以避免無限循環
    lastOptimizationParams: null, // 儲存最後一次優化的參數

    // --- 新功能：行程編輯與儲存 ---
    isEditingItinerary: false, // 編輯模式開關
    editableItinerary: { // 可編輯的行程副本
        text: '',
        locations: [],
        originalText: '',
        originalLocations: [],
        lastSavedAt: null,
        isDirty: false // 是否有未保存的變更
    },
    itineraryHistory: [] // 行程修改歷史記錄（用於撤銷/重做）
};

// --- State accessors to centralize mutations ---
export function setAppState(key, value) {
    try {
        appState[key] = value;
        // Emit a simple event so other parts may react if they subscribe
        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
            try { window.dispatchEvent(new CustomEvent('appStateChanged', { detail: { key, value } })); } catch (e) { }
        }
    } catch (e) { console.warn('setAppState error', e); }
}

export function getAppState(key) {
    try { return appState[key]; } catch (e) { return undefined; }
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
    // Header & Navigation
    title: { zh: '旅人探索札記', en: 'Traveler Explorer Notes' },
    subtitle: { zh: 'AI 智慧導覽，為您的旅程增添靈感與故事', en: 'AI guided tours to inspire your trip' },
    favorites: { zh: '❤️ 我的收藏', en: '❤️ My Favorites' },
    theme_day: { zh: '☀️ 日間模式', en: '☀️ Day mode' },
    theme_night: { zh: '🌙 夜間模式', en: '🌙 Night mode' },

    // Onboarding Steps
    step1: { zh: '① 輸入 API 金鑰', en: '① Enter API keys' },
    step2: { zh: '② 選擇探索國度', en: '② Choose a country' },
    step3: { zh: '③ 點選喜愛景點', en: '③ Pick favorite spots' },
    step4: { zh: '④ 開始 AI 互動', en: '④ Start AI interactions' },

    // API Settings
    api_keys_title: { zh: '🔑 API 金鑰設定', en: '🔑 API Keys' },
    gemini_key_label: { zh: 'Gemini API 金鑰', en: 'Gemini API Key' },
    cwa_key_label: { zh: 'CWA API 金鑰', en: 'CWA API Key' },
    tdx_key_label: { zh: 'TDX API 金鑰', en: 'TDX API Key' },
    verify_gemini: { zh: '驗證 Gemini', en: 'Verify Gemini' },
    verify_cwa: { zh: '載入天氣', en: 'Load Weather' },
    verify_tdx: { zh: '驗證 TDX', en: 'Verify TDX' },
    api_key_placeholder: { zh: '貼上您的 API 金鑰...', en: 'Paste your API key...' },

    // Search & Country Selection
    search_placeholder: { zh: '🔍 搜尋景點名稱或城市...', en: '🔍 Search spot name or city...' },
    country_selector_title: { zh: '🌏 選擇探索國度', en: '🌏 Choose country' },

    // AI Planner
    ai_planner_title: { zh: '💡 AI 行程規劃師', en: '💡 AI Itinerary Planner' },
    itinerary_prefs_label: { zh: '旅行偏好 (選填)', en: 'Travel Preferences (optional)' },
    trip_days_label: { zh: '旅行天數', en: 'Trip days' },
    itinerary_date_label: { zh: '出發日期', en: 'Departure date' },
    itinerary_start_time_label: { zh: '起始時間', en: 'Start time' },
    itinerary_end_time_label: { zh: '結束時間', en: 'End time' },
    itinerary_style_label: { zh: '旅行風格', en: 'Travel style' },

    // Itinerary Buttons
    sunnyBtn: { zh: '☀️ 晴天漫遊', en: '☀️ Sunny trip' },
    rainyBtn: { zh: '🌧️ 雨天備案', en: '🌧️ Rainy plan' },
    luckyBtn: { zh: '🔮 驚喜旅程', en: '🔮 Surprise trip' },
    multiDayBtn: { zh: '📅 多日行程', en: '📅 Multi-day' },
    transportBtn: { zh: '🚗 交通規劃', en: '🚗 Transport' },

    exportIcsBtn: { zh: '📅 匯出行程', en: '📅 Export ICS' },
    optimizeBtn: { zh: '⚡ 最佳化行程', en: '⚡ Optimize' },

    // Content Headings
    description_heading: { zh: '📖 景點故事集', en: '📖 Spot Stories' },
    map_heading: { zh: '🗺️ 地圖與攝影點', en: '🗺️ Map & Photo Spots' },
    favorites_modal_title: { zh: '❤️ 我的收藏', en: '❤️ My Favorites' },

    // Data Source Labels
    data_source_offline: { zh: '離線備援資料', en: 'Offline fallback data' },
    data_source_cache: { zh: '快取資料', en: 'Cached data' },
    data_source_live: { zh: 'TDX 即時資料', en: 'TDX Live data' },
    data_source_offline_api_error: { zh: '離線備援資料（API 錯誤）', en: 'Offline fallback (API error)' },

    // Favorite Actions
    favorite: { zh: '⭐ 收藏', en: '⭐ Favorite' },
    favorited: { zh: '★ 已收藏', en: '★ Favorited' },

    // UI Labels
    language_label: { zh: '中文', en: 'EN' },
    always_offline_label: { zh: '始終離線模式', en: 'Always offline' },
    offline_notice_prefix: { zh: '目前使用', en: 'Currently using' },
    try_verify_and_load: { zh: '驗證並載入即時資料', en: 'Verify and load live data' },

    // Custom Spot Modal
    add_custom_spot_title: { zh: '＋ 新增自訂景點', en: '＋ Add Custom Spot' },
    custom_spot_name_placeholder: { zh: '景點名稱', en: 'Spot name' },
    custom_spot_city_placeholder: { zh: '城市 (選填)', en: 'City (optional)' },
    custom_spot_image_placeholder: { zh: '圖片 URL (選填)', en: 'Image URL (optional)' },
    custom_spot_desc_placeholder: { zh: '簡短描述 (選填)', en: 'Short description (optional)' },
    add_spot_button: { zh: '新增景點', en: 'Add Spot' },
    cancel_button: { zh: '取消', en: 'Cancel' },
    edit_custom_spot_title: { zh: '編輯自訂景點', en: 'Edit Custom Spot' },
    edit_button: { zh: '編輯', en: 'Edit' },
    delete_button: { zh: '刪除', en: 'Delete' },
    delete_confirm_title: { zh: '確定要刪除此自訂景點嗎？', en: 'Delete this custom spot?' },
    delete_confirm_msg: { zh: '此操作無法復原。', en: 'This action cannot be undone.' },

    // Toast Messages
    spot_added_success: { zh: '已新增自訂景點', en: 'Custom spot added' },
    spot_updated_success: { zh: '已更新自訂景點', en: 'Custom spot updated' },
    spot_deleted_success: { zh: '已刪除自訂景點', en: 'Custom spot deleted' },
    spot_add_error: { zh: '新增失敗', en: 'Failed to add' },
    spot_name_required: { zh: '請輸入景點名稱', en: 'Please enter spot name' },

    // Group Settings
    group_size_label: { zh: '人數', en: 'Group size' },
    group_has_children_label: { zh: '有小孩', en: 'Has children' },
    group_has_seniors_label: { zh: '有長者', en: 'Has seniors' },
    group_vegetarian_label: { zh: '素食', en: 'Vegetarian' },
    group_wheelchair_label: { zh: '輪椅需求', en: 'Wheelchair needed' },

    // Advanced Settings
    advanced_settings_title: { zh: '✨ 進階設定 (可選)', en: '✨ Advanced Settings (optional)' },
    transport_mode_label: { zh: '交通方式', en: 'Transport mode' },
    companion_type_label: { zh: '同伴類型', en: 'Companion type' },
    budget_level_label: { zh: '預算等級', en: 'Budget level' },
    budget_slider_label: { zh: '預算滑桿', en: 'Budget slider' },

    // Transport Modes
    transport_driving: { zh: '開車', en: 'Driving' },
    transport_transit: { zh: '大眾運輸', en: 'Transit' },
    transport_walking: { zh: '步行', en: 'Walking' },
    transport_taxi: { zh: '計程車', en: 'Taxi' },

    // Companion Types
    companion_alone: { zh: '獨自旅行', en: 'Solo' },
    companion_couple: { zh: '情侶', en: 'Couple' },
    companion_family: { zh: '家庭', en: 'Family' },
    companion_friends: { zh: '朋友', en: 'Friends' },

    // Budget Levels
    budget_low: { zh: '經濟', en: 'Budget' },
    budget_medium: { zh: '中等', en: 'Standard' },
    budget_high: { zh: '高級', en: 'Premium' },

    // Error Messages
    error_api_not_verified: { zh: '需要先驗證 API', en: 'API verification required' },
    error_no_itinerary: { zh: '需要先生成行程', en: 'Please generate itinerary first' },
    error_no_destinations: { zh: '找不到景點', en: 'No destinations found' },
    error_weather_not_loaded: { zh: '天氣資料未載入', en: 'Weather data not loaded' },
    error_transport_planning_failed: { zh: '交通規劃失敗', en: 'Transport planning failed' },
    error_pdf_generation_failed: { zh: '抱歉，PDF 檔案產生失敗', en: 'Sorry, PDF generation failed' },
    error_generic: { zh: '發生錯誤', en: 'An error occurred' },

    // AI Feedback
    feedback_title: { zh: '🎯 您對此內容的反饋', en: '🎯 Your Feedback' },
    feedback_helpful: { zh: '👍 有幫助', en: '👍 Helpful' },
    feedback_not_helpful: { zh: '👎 沒有幫助', en: '👎 Not helpful' },
    feedback_comment_placeholder: { zh: '輸入您的建議...', en: 'Enter your suggestion...' },
    feedback_submit: { zh: '提交', en: 'Submit' },
    feedback_submitted: { zh: '感謝您的反饋', en: 'Thank you for your feedback' },

    // CWA Weather Information Center
    cwa_title: { zh: '氣象署資訊中心', en: 'CWA Information Center' },
    fetch_cwa_data: { zh: '載入最新天氣', en: 'Load Latest Weather' },
    cwa_api_prompt: { zh: '請先驗證您的 CWA API Key 以獲取數據。', en: 'Please verify your CWA API Key to fetch data.' },
    cwa_warnings: { zh: '🚨 即時氣象警報', en: '🚨 Real-time Weather Warnings' },
    cwa_data_loading: { zh: '正在載入 CWA 天氣資料...', en: 'Loading CWA weather data...' },
    cwa_data_success: { zh: '✅ CWA 天氣資料已更新', en: '✅ CWA weather data updated' },
    forecast_title: { zh: '未來一週天氣預報', en: 'Weekly Weather Forecast' },

    // TDX 相關翻譯
    tdx_title: { zh: '即時交通與觀光數據', en: 'Real-time Transport & Tourism Data' },
    tdx_api_prompt: { zh: '請先驗證您的 TDX API Key/Secret 以獲取交通數據。', en: 'Please verify your TDX API Key/Secret to fetch transport data.' },
    tdx_category_scenic: { zh: '熱門景點', en: 'Scenic Spots' },
    tdx_category_traffic: { zh: '即時路況', en: 'Real-time Traffic' },
    tdx_category_parking: { zh: '停車場資訊', en: 'Parking Info' },
    tdx_category_thsr: { zh: '高鐵資訊', en: 'THSR Info' },
    tdx_fetch_data: { zh: '根據行程地點查詢', en: 'Query by Itinerary Location' },

    // 行程最優化功能
    itinerary_optimization_title: { zh: '智慧行程規劃', en: 'Smart Itinerary Planning' },
    optimize_route_btn: { zh: '⚡ 優化路線', en: '⚡ Optimize Route' },
    optimization_suggestions: { zh: '優化建議', en: 'Optimization Suggestions' },
    route_time_estimates: { zh: '時間估計', en: 'Time Estimates' },
    itinerary_strengths: { zh: '此行程三大優勢', en: 'Top 3 Strengths' },
    feedback_not_satisfied: { zh: '❌ 不滿意？請試試其他方案', en: '❌ Not satisfied? Try another option' },
    feedback_type_crowded: { zh: '人潮擁擠', en: 'Too crowded' },
    feedback_type_boring: { zh: '內容平凡', en: 'Boring content' },
    feedback_type_budget: { zh: '預算超支', en: 'Budget exceeded' },
    feedback_type_long: { zh: '行程太長', en: 'Too long' },
    feedback_type_short: { zh: '內容不足', en: 'Not enough content' },
    replan_itinerary_btn: { zh: '🔄 根據反饋重新規劃', en: '🔄 Replan based on feedback' },
    contingency_alert_title: { zh: '🚨 行程調整建議', en: '🚨 Itinerary Adjustment Recommendation' },
    contingency_explanation: { zh: '應急方案說明', en: 'Contingency Explanation' },
    contingency_replacement_spots: { zh: '替代景點', en: 'Replacement Spots' },
    contingency_time_impact: { zh: '時間影響', en: 'Time Impact' },
    accept_contingency: { zh: '接受調整', en: 'Accept Adjustment' },
    keep_original: { zh: '保留原行程', en: 'Keep Original' },
    travel_style_history: { zh: '歷史文化', en: 'History & Culture' },
    travel_style_foodie: { zh: '美食探險', en: 'Foodie Adventure' },
    travel_style_nature: { zh: '自然風光', en: 'Nature & Scenery' },
    travel_style_adventure: { zh: '冒險活動', en: 'Adventure Activities' },
    travel_style_cultural: { zh: '文化體驗', en: 'Cultural Experience' },
    travel_style_balanced: { zh: '平衡體驗', en: 'Balanced Experience' },

    // General UI
    loading: { zh: '載入中...', en: 'Loading...' },
    no_data: { zh: '無資料', en: 'No data' },
    retry: { zh: '重試', en: 'Retry' },
    close: { zh: '關閉', en: 'Close' },
    save: { zh: '保存', en: 'Save' },
    delete: { zh: '刪除', en: 'Delete' },
    edit: { zh: '編輯', en: 'Edit' },
    search: { zh: '搜尋', en: 'Search' },
    clear: { zh: '清除', en: 'Clear' },
    confirm: { zh: '確認', en: 'Confirm' },
    back: { zh: '返回', en: 'Back' }
};

