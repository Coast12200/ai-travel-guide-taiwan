/**
 * i18n-injector.js
 * 自動為 HTML 元素注入 data-i18n 屬性，實現動態翻譯
 * 這個腳本會在 DOM 載入後執行，為缺少 data-i18n 的元素添加翻譯標記
 */

// 等待 DOM 完全載入
document.addEventListener('DOMContentLoaded', function () {
    console.log('🌐 Injecting i18n attributes...');

    // 定義需要注入翻譯的元素映射
    const i18nMappings = [
        // API 設定區域
        { selector: '.required-section .section-header h4', attr: 'required_section_title' },
        { selector: '.required-section .section-desc', attr: 'required_section_desc' },
        { selector: '.optional-section .section-header h4', attr: 'optional_section_title' },
        { selector: '.optional-section .section-desc', attr: 'optional_section_desc' },

        // API 卡片
        { selector: '.api-card:nth-of-type(1) .api-info h5', attr: 'gemini_api_title' },
        { selector: '.api-card:nth-of-type(1) .api-info p', attr: 'gemini_api_desc' },

        // 診斷按鈕
        { selector: '#showDiagnosticsBtn span:last-child', attr: 'show_diagnostics' },

        // 景點詳細頁面
        { selector: '#generateIllustrationBtn', attr: 'generate_illustration_btn' },
        { selector: '#checklistBtn', attr: 'checklist_btn' },
        { selector: '#cuisineBtn', attr: 'cuisine_btn' },
        { selector: '#findHotelBtn', attr: 'find_hotel_btn' },
        { selector: '#reviewSummaryBtn', attr: 'review_summary_btn' },
        { selector: '#souvenirBtn', attr: 'souvenir_btn' },

        // 地圖與攝影點頁面
        { selector: '.map-panel h3', attr: 'map_photo_spots_title' },
        { selector: '#heatmapBtn', attr: 'heatmap_btn' },

        // 基本資訊行
        { selector: '.basic-info-row .info-item:nth-child(1) label', attr: 'destination_label' },
        { selector: '.basic-info-row .info-item:nth-child(2) label', attr: 'group_size_label' },
        { selector: '.basic-info-row .info-item:nth-child(3) label', attr: 'date_label' },
        { selector: '.basic-info-row .info-item:nth-child(4) label', attr: 'duration_label' },

        // 更多設定區塊
        { selector: '.more-settings-toggle .toggle-text', attr: 'more_settings_title' },

        // 時間安排
        { selector: '#timeSettingsGroup .settings-group-title', attr: 'time_arrangement_title' },
        { selector: '#timeSettingsGroup label:nth-of-type(1)', attr: 'start_time_label' },
        { selector: '#timeSettingsGroup label:nth-of-type(2)', attr: 'end_time_label' },
        { selector: '#timeSettingsGroup .hint-text', attr: 'time_hint' },

        // 多日遊天數
        { selector: '#multiDaySettingsGroup .settings-group-title', attr: 'trip_days_title' },
        { selector: '#multiDaySettingsGroup label', attr: 'days_label' },

        // 團體成員
        { selector: '.settings-group:has(#groupHasChildren) .settings-group-title', attr: 'group_members_title' },
        { selector: 'label:has(#groupHasChildren) span', attr: 'has_children' },
        { selector: 'label:has(#groupHasSeniors) span', attr: 'has_seniors' },
        { selector: 'label:has(#groupVegetarian) span', attr: 'vegetarian' },
        { selector: 'label:has(#groupWheelchair) span', attr: 'wheelchair_access' },

        // 預算 & 餐飲
        { selector: '.settings-group:has(#budgetLevelSelect) .settings-group-title', attr: 'budget_dining_title' },
        { selector: 'label:has(+ #budgetLevelSelect)', attr: 'budget_level' },
        { selector: 'label:has(+ #diningPreferenceSelect)', attr: 'dining_preference' },
        { selector: '#estimateBudgetBtn', attr: 'estimate_budget_btn' },
        { selector: '#estimateBudgetBtn + .hint-text', attr: 'estimate_budget_hint' },

        // 交通 & 風格
        { selector: '.settings-group:has(#transportModeSelect) .settings-group-title', attr: 'transport_style_title' },
        { selector: 'label:has(+ #transportModeSelect)', attr: 'transport_mode' },
        { selector: 'label:has(+ #itineraryStyleSelect)', attr: 'travel_style' },

        // 視覺參考
        { selector: '.settings-group:has(#aiImageUpload) .settings-group-title', attr: 'visual_reference_title' },

        // 旅行日記生成器
        { selector: '.journal-header h2', attr: 'journal_generator_title' },
        { selector: '.journal-header p', attr: 'journal_generator_subtitle' },
        { selector: 'label[for="journalTheme"]', attr: 'journal_theme_label' },
        { selector: '#journalTheme', attr: 'journal_theme_placeholder', type: 'placeholder' },
        { selector: 'label[for="journalFeelings"]', attr: 'journal_feelings_label' },
        { selector: '#journalFeelings', attr: 'journal_feelings_placeholder', type: 'placeholder' },
        { selector: 'label[for="journalPhotos"]', attr: 'journal_photos_label' },
        { selector: '#generateJournalBtn', attr: 'journal_generate_btn' },
        { selector: '#clearJournalBtn', attr: 'journal_clear_btn' },

        // 智能旅行規劃器
        { selector: '.smart-planner-header h2', attr: 'smart_planner_title' },
        { selector: '.smart-planner-header p', attr: 'smart_planner_desc' },
        { selector: '.smart-planner-form .form-group:nth-of-type(1) label', attr: 'smart_days_label' },
        { selector: '.smart-planner-form .form-group:nth-of-type(2) label', attr: 'smart_style_label' },
        { selector: '.smart-planner-form .form-group:nth-of-type(3) label', attr: 'smart_budget_label' },
        { selector: '.smart-planner-form .form-group:nth-of-type(4) label', attr: 'smart_transport_label' },
        { selector: '#smartPlanBtn', attr: 'smart_plan_btn' },
        { selector: '#smartOptimizeBtn', attr: 'smart_optimize_btn' },
        { selector: '#smartExportBtn', attr: 'smart_export_btn' }
    ];

    // 為選擇器對應的元素添加 data-i18n 屬性
    i18nMappings.forEach(mapping => {
        try {
            const element = document.querySelector(mapping.selector);
            const attrName = mapping.type === 'placeholder' ? 'data-i18n-placeholder' : 'data-i18n';

            if (element && !element.hasAttribute(attrName)) {
                element.setAttribute(attrName, mapping.attr);
                console.log(`✓ Added ${attrName}="${mapping.attr}" to`, mapping.selector);
            }
        } catch (error) {
            console.warn(`⚠️ Could not find element for selector: ${mapping.selector}`);
        }
    });

    // 為 select options 添加翻譯
    injectSelectOptionsTranslations();

    // 為主要按鈕添加翻譯
    injectButtonTranslations();

    // 為地區標題添加翻譯（延遲執行，因為這些是動態生成的）
    setTimeout(injectRegionTranslations, 500);

    console.log('✅ i18n attributes injection completed');
});

/**
 * 為台灣地區標題添加翻譯
 */
function injectRegionTranslations() {
    // 地區映射
    const regionMap = {
        '北部地區': 'region_north',
        '中部地區': 'region_central',
        '南部地區': 'region_south',
        '東部地區': 'region_east',
        '離島地區': 'region_islands'
    };

    // 查找所有地區標題
    const regionHeaders = document.querySelectorAll('.region-item .region-header .region-title');
    regionHeaders.forEach(header => {
        const text = header.textContent.trim();
        // 移除 emoji 和數字，只保留地區名稱
        const regionName = text.replace(/[📍🏔️🌊🏝️🎯]\s*/g, '').replace(/\s*\(\d+\)/, '').trim();

        if (regionMap[regionName]) {
            header.setAttribute('data-i18n', regionMap[regionName]);
            console.log(`✓ Added data-i18n="${regionMap[regionName]}" to region: ${regionName}`);
        }
    });
}

/**
 * 為主要行程按鈕添加翻譯
 */
function injectButtonTranslations() {
    // 晴天漫遊按鈕
    const sunnyBtn = document.getElementById('sunnyBtn');
    if (sunnyBtn) {
        const title = sunnyBtn.querySelector('strong');
        const desc = sunnyBtn.querySelector('small');
        if (title) title.setAttribute('data-i18n', 'sunny_trip_title');
        if (desc) desc.setAttribute('data-i18n', 'sunny_trip_desc');
    }

    // 雨天備案按鈕
    const rainyBtn = document.getElementById('rainyBtn');
    if (rainyBtn) {
        const title = rainyBtn.querySelector('strong');
        const desc = rainyBtn.querySelector('small');
        if (title) title.setAttribute('data-i18n', 'rainy_trip_title');
        if (desc) desc.setAttribute('data-i18n', 'rainy_trip_desc');
    }

    // 隨機探索按鈕
    const luckyBtn = document.getElementById('luckyBtn');
    if (luckyBtn) {
        const title = luckyBtn.querySelector('strong');
        const desc = luckyBtn.querySelector('small');
        if (title) title.setAttribute('data-i18n', 'random_trip_title');
        if (desc) desc.setAttribute('data-i18n', 'random_trip_desc');
    }

    // 多日行程按鈕
    const multiDayBtn = document.getElementById('multiDayBtn');
    if (multiDayBtn) {
        const title = multiDayBtn.querySelector('strong');
        const desc = multiDayBtn.querySelector('small');
        if (title) title.setAttribute('data-i18n', 'multi_day_trip_title');
        if (desc) desc.setAttribute('data-i18n', 'multi_day_trip_desc');
    }
}

/**
 * 為 select 元素的 options 添加翻譯
 */
function injectSelectOptionsTranslations() {
    // 時長選擇
    const durationSelect = document.getElementById('durationTypeSelect');
    if (durationSelect) {
        const options = durationSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'duration_single_day');
        if (options[1]) options[1].setAttribute('data-i18n', 'duration_multi_day');
    }

    // 預算等級選項
    const budgetSelect = document.getElementById('budgetLevelSelect');
    if (budgetSelect) {
        const options = budgetSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'budget_frugal');
        if (options[1]) options[1].setAttribute('data-i18n', 'budget_comfort');
        if (options[2]) options[2].setAttribute('data-i18n', 'budget_luxury');
    }

    // 餐飲偏好選項
    const diningSelect = document.getElementById('diningPreferenceSelect');
    if (diningSelect) {
        const options = diningSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'dining_street_food');
        if (options[1]) options[1].setAttribute('data-i18n', 'dining_casual');
        if (options[2]) options[2].setAttribute('data-i18n', 'dining_fine');
        if (options[3]) options[3].setAttribute('data-i18n', 'dining_mixed');
    }

    // 交通方式選項
    const transportSelect = document.getElementById('transportModeSelect');
    if (transportSelect) {
        const options = transportSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'transport_car');
        if (options[1]) options[1].setAttribute('data-i18n', 'transport_public');
        if (options[2]) options[2].setAttribute('data-i18n', 'transport_walk');
    }

    // 旅行風格選項
    const styleSelect = document.getElementById('itineraryStyleSelect');
    if (styleSelect) {
        const options = styleSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'style_select');
        if (options[1]) options[1].setAttribute('data-i18n', 'style_slow_cultural');
        if (options[2]) options[2].setAttribute('data-i18n', 'style_extreme');
        if (options[3]) options[3].setAttribute('data-i18n', 'style_foodie');
        if (options[4]) options[4].setAttribute('data-i18n', 'style_family');
        if (options[5]) options[5].setAttribute('data-i18n', 'style_nature');
    }

    // 智能規劃器 - 旅行風格
    const smartStyleSelect = document.getElementById('smartStyle');
    if (smartStyleSelect) {
        const options = smartStyleSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'style_cultural');
        if (options[1]) options[1].setAttribute('data-i18n', 'style_relaxed');
        if (options[2]) options[2].setAttribute('data-i18n', 'style_adventure');
        if (options[3]) options[3].setAttribute('data-i18n', 'style_foodie');
    }

    // 智能規劃器 - 預算等級
    const smartBudgetSelect = document.getElementById('smartBudget');
    if (smartBudgetSelect) {
        const options = smartBudgetSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'budget_frugal');
        if (options[1]) options[1].setAttribute('data-i18n', 'budget_comfort');
        if (options[2]) options[2].setAttribute('data-i18n', 'budget_luxury');
    }

    // 智能規劃器 - 交通方式
    const smartTransportSelect = document.getElementById('smartTransport');
    if (smartTransportSelect) {
        const options = smartTransportSelect.querySelectorAll('option');
        if (options[0]) options[0].setAttribute('data-i18n', 'transport_public');
        if (options[1]) options[1].setAttribute('data-i18n', 'transport_self_driving');
        if (options[2]) options[2].setAttribute('data-i18n', 'transport_mixed_mode');
    }
}
