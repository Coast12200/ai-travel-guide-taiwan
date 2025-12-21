/**
 * ui.js
 * * 負責所有與使用者介面 (UI) 相關的 DOM 操作、事件處理和畫面更新。
 * 這是應用程式的視覺和互動核心。
 */
import { appState, destinationsByCountry, icons, offlineFallbackDestinations, translations, setAppState, getAppState, updateAppState } from './state.js';
import { verifyGeminiApi, verifyCwaApi, verifyTdxApi, fetchTdxScenicSpots, clearTdxCache, fetchTdxScenicSpotDetails } from './api.js';
import { initializeMap } from './map.js';
import { toggleHeatmap } from './map.js';
import {
    generateDescription, generateItinerary, generateEnhancedContent,
    generateTransportSuggestions, generateChecklist, generatePhotoSpots,
    findNearbyTDXData, generateCurrencyConversion, downloadItineraryAsPDF,
    generateContingencyPlan, generateFeedbackItinerary
} from './itinerary.js';
import { optimizeItinerary } from './itinerary.js';
import { renderAIMap } from './map.js';
import { escapeHtml, createSafeElement } from './utils/security.js';

// --- 初始化函式 ---

// 密碼顯示/隱藏切換功能
function setupPasswordToggles() {
    const toggleButtons = [
        { btnId: 'toggleGeminiKey', inputId: 'geminiApiKey' },
        { btnId: 'toggleCwaKey', inputId: 'cwaApiKey' },
        { btnId: 'toggleTdxClientId', inputId: 'tdxClientId' },
        { btnId: 'toggleTdxSecret', inputId: 'tdxClientSecret' }
    ];
    toggleButtons.forEach(({ btnId, inputId }) => {
        const btn = document.getElementById(btnId);
        const input = document.getElementById(inputId);
        if (btn && input) {
            btn.addEventListener('click', () => {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                const showIcon = btn.querySelector('.show-icon');
                const hideIcon = btn.querySelector('.hide-icon');
                if (showIcon && hideIcon) {
                    showIcon.style.display = isPassword ? 'none' : 'inline';
                    hideIcon.style.display = isPassword ? 'inline' : 'none';
                }
            });
        }
    });
}

// 更新 API 驗證狀態徽章
export function updateApiStatus(apiName, status) {
    const statusElement = document.getElementById(`${apiName}Status`);
    if (!statusElement) return;
    const badge = statusElement.querySelector('.status-badge');
    if (!badge) return;
    // 移除所有狀態類別
    badge.className = 'status-badge';
    // 根據狀態添加對應的類別和文字
    switch (status) {
        case 'verified':
            badge.classList.add('status-verified');
            badge.textContent = '✓ 已驗證';
            break;
        case 'error':
            badge.classList.add('status-error');
            badge.textContent = '✗ 驗證失敗';
            break;
        case 'pending':
        default:
            badge.classList.add('status-pending');
            badge.textContent = '未驗證';
            break;
    }
}
// Header 下拉選單功能
function setupHeaderDropdown() {
    const advancedBtn = document.getElementById('advancedSettingsBtn');
    const advancedMenu = document.getElementById('advancedSettingsMenu');

    if (!advancedBtn || !advancedMenu) return;

    // 切換下拉選單
    advancedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = advancedBtn.closest('.dropdown');
        const isActive = dropdown.classList.contains('active');

        // 關閉所有其他下拉選單
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            m.classList.remove('show');
            m.classList.add('hidden');
        });

        // 切換當前下拉選單
        if (!isActive) {
            dropdown.classList.add('active');
            advancedMenu.classList.remove('hidden');
            setTimeout(() => advancedMenu.classList.add('show'), 10);
        }
    });

    // 點擊外部關閉下拉選單
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.classList.remove('show');
                setTimeout(() => m.classList.add('hidden'), 200);
            });
        }
    });

    // 防止點擊選單內部時關閉
    advancedMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}
export function initializeApp() {
    // Load language preference from localStorage
    try {
        const savedLang = localStorage.getItem('lang');
        if (savedLang === 'en' || savedLang === 'zh') {
            appState.currentLanguage = savedLang;
        }
    } catch (e) { }

    // Load saved API keys from localStorage and auto-fill input fields
    let hasGeminiKey = false;
    let hasCwaKey = false;
    let hasTdxKeys = false;

    try {
        const savedGeminiKey = localStorage.getItem('geminiApiKey');
        const savedCwaKey = localStorage.getItem('cwaApiKey');
        const savedTdxClientId = localStorage.getItem('tdxClientId');
        const savedTdxClientSecret = localStorage.getItem('tdxClientSecret');

        if (savedGeminiKey) {
            const geminiInput = document.getElementById('geminiApiKey');
            if (geminiInput) {
                geminiInput.value = savedGeminiKey;
                hasGeminiKey = true;
            }
        }
        if (savedCwaKey) {
            const cwaInput = document.getElementById('cwaApiKey');
            if (cwaInput) {
                cwaInput.value = savedCwaKey;
                hasCwaKey = true;
            }
        }
        if (savedTdxClientId && savedTdxClientSecret) {
            const tdxIdInput = document.getElementById('tdxClientId');
            const tdxSecretInput = document.getElementById('tdxClientSecret');
            if (tdxIdInput && tdxSecretInput) {
                tdxIdInput.value = savedTdxClientId;
                tdxSecretInput.value = savedTdxClientSecret;
                hasTdxKeys = true;
            }
        }
    } catch (e) {
        console.warn('Failed to load saved API keys:', e);
    }

    loadFavorites();
    applyTranslations();
    initializeCountryTabs();
    // Load any saved custom destinations, then select Taiwan
    loadCustomDestinations();
    selectCountry('taiwan', document.querySelector('.country-tab'));
    setupAccordion();
    initializeTheme(); // 改為呼叫新的主題初始化函式
    // 初始化始終離線切換
    const alwaysOfflineEl = document.getElementById('alwaysOfflineToggle');
    if (alwaysOfflineEl) {
        alwaysOfflineEl.checked = getAppState('alwaysOffline');
        alwaysOfflineEl.addEventListener('change', (e) => {
            setAppState('alwaysOffline', e.target.checked);
            try { localStorage.setItem('alwaysOffline', e.target.checked ? 'true' : 'false'); } catch (err) { }
            // 重新渲染當前國家視圖以反映設定
            const activeTab = document.querySelector('.country-tab.active') || document.querySelector('.country-tab');
            if (activeTab) selectCountry(getAppState('currentCountry'), activeTab);
            // 顯示 toast
            showToast(e.target.checked ? (translations.always_offline_label[getAppState('currentLanguage')] || '始終離線模式') + ' ON' : (translations.always_offline_label[getAppState('currentLanguage')] || '始終離線模式') + ' OFF');
        });
    }

    // Optional: Auto-verify saved API keys (can be enabled/disabled via localStorage)
    // Set localStorage.setItem('autoVerifyApiKeys', 'true') to enable auto-verify
    try {
        const autoVerify = localStorage.getItem('autoVerifyApiKeys') === 'true';
        if (autoVerify && (hasGeminiKey || hasCwaKey || hasTdxKeys)) {
            // Delay auto-verify to allow UI to fully render first
            setTimeout(async () => {
                if (hasGeminiKey) {
                    try {
                        await verifyGeminiApi();
                    } catch (e) {
                        console.warn('Auto-verify Gemini failed:', e);
                    }
                }
                if (hasCwaKey) {
                    try {
                        await verifyCwaApi();
                    } catch (e) {
                        console.warn('Auto-verify CWA failed:', e);
                    }
                }
                if (hasTdxKeys) {
                    try {
                        await verifyTdxApi();
                    } catch (e) {
                        console.warn('Auto-verify TDX failed:', e);
                    }
                }
            }, 1000); // 1 second delay to ensure UI is ready
        }

    } catch (e) {
        console.warn('Auto-verify check failed:', e);
    }

    // Launch onboarding if user hasn't completed it yet
    // TODO: Implement startOnboarding function or remove this feature
    // try {
    //     const onboarded = localStorage.getItem('onboarded');
    //     if (!onboarded) {
    //         setTimeout(() => startOnboarding(), 450);
    //     }
    // } catch (e) { }

    // 初始化密碼切換功能
    setupPasswordToggles();

    // 初始化 Header 下拉選單
    setupHeaderDropdown();
}

/**
 * Render CWA weather data to UI
 */
export function renderCwaData(data, locationName) {
    const warningContainer = document.getElementById('cwaWarningContainer');
    const warningList = document.getElementById('cwaWarningList');
    const forecastContainer = document.getElementById('cwaForecastContainer');
    const forecastList = document.getElementById('cwaForecastList');
    const locationEl = document.getElementById('cwaLocationName');

    // 1. 處理警報
    warningList.innerHTML = '';
    if (data.warnings && data.warnings.length > 0) {
        warningContainer.classList.remove('hidden');
        data.warnings.forEach(alert => {
            const li = document.createElement('li');
            // Parse alert info structure
            const info = alert.info || {};
            const headline = info.Headline || 'Unknown Alert';
            const description = info.Description || 'No description';

            // Safe DOM creation
            const strong = createSafeElement('strong', {}, headline);
            li.appendChild(strong);
            li.appendChild(document.createTextNode(': ' + description));

            warningList.appendChild(li);
        });
    } else {
        warningContainer.classList.add('hidden');
    }

    // 2. 處理預報
    forecastList.innerHTML = '';
    if (data.forecast && data.forecast.weatherElement) {
        forecastContainer.classList.remove('hidden');
        locationEl.textContent = locationName;

        const weatherElements = data.forecast.weatherElement;

        // Find time elements (usually first element contains time series)
        let timeData = [];
        if (weatherElements[0] && weatherElements[0].time) {
            timeData = weatherElements[0].time.slice(0, 7); // Next 7 days
        }

        timeData.forEach((timeElement, idx) => {
            const startTime = timeElement.startTime;
            const date = new Date(startTime);
            const dateStr = date.toLocaleDateString(appState.currentLanguage === 'zh' ? 'zh-TW' : 'en-US', {
                weekday: 'short',
                month: 'numeric',
                day: 'numeric'
            });

            // Extract weather info from elements (Wx, MinT, MaxT, PoP, CI)
            let weatherDesc = '－';
            let minTemp = '－';
            let maxTemp = '－';
            let rainProb = '－';
            let comfort = '－';

            // Find corresponding values in other elements
            weatherElements.forEach(el => {
                const elName = el.elementName;
                const timeIndex = el.time.findIndex(t => t.startTime === startTime);
                if (timeIndex !== -1) {
                    const value = el.time[timeIndex].elementValue?.[0]?.value;
                    if (elName === '天氣現象' || elName === 'Wx') weatherDesc = value || '－';
                    if (elName === '最低溫度' || elName === 'MinT') minTemp = value ? `${value}°C` : '－';
                    if (elName === '最高溫度' || elName === 'MaxT') maxTemp = value ? `${value}°C` : '－';
                    if (elName === '降雨機率' || elName === 'PoP') rainProb = value ? `${value}%` : '－';
                    if (elName === '舒適度' || elName === 'CI') comfort = value || '－';
                }
            });

            const card = createSafeElement('div', { className: 'itinerary-day-card cwa-forecast-card' });

            // Header
            const headerDiv = createSafeElement('div', { style: 'display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;' });
            headerDiv.appendChild(createSafeElement('h4', { style: 'margin:0;' }, dateStr));

            if (date.getDate() === new Date().getDate()) {
                headerDiv.appendChild(createSafeElement('span', { style: 'font-size:0.85rem; color:var(--muted);' }, '今天'));
            }
            card.appendChild(headerDiv);

            // Grid
            const gridDiv = createSafeElement('div', { style: 'display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.95rem;' });

            const items = [
                { label: '天氣：', value: weatherDesc },
                { label: '溫度：', value: `${minTemp} ~ ${maxTemp}` },
                { label: '降雨機率：', value: rainProb },
                { label: '舒適度：', value: comfort }
            ];

            items.forEach(item => {
                const div = document.createElement('div');
                div.appendChild(createSafeElement('strong', {}, item.label));
                div.appendChild(document.createTextNode(item.value));
                gridDiv.appendChild(div);
            });

            card.appendChild(gridDiv);
            forecastList.appendChild(card);
        });
    } else {
        forecastContainer.classList.add('hidden');
    }
}

/**
 * Handle TDX tab switching
 */
function handleTdxTabSwitch(targetTab) {
    // 移除所有內容區塊的 active 狀態
    document.querySelectorAll('.tdx-tab-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });

    // 設置目標內容區塊為 active
    const targetContent = document.getElementById(`tdx${targetTab.charAt(0).toUpperCase() + targetTab.slice(1)}Content`);
    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('active');
    }

    // 更新 Tab 按鈕的 active 狀態
    document.querySelectorAll('#tdxTabs .tab-btn').forEach(btn => {
        if (btn.getAttribute('data-tab') === targetTab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Render TDX scenic spots list
 */
export function renderTdxScenicSpots(scenicSpots) {
    const listEl = document.getElementById('tdxScenicList');
    listEl.innerHTML = '';

    if (scenicSpots && scenicSpots.length > 0) {
        const placeholder = document.getElementById('tdxScenicPlaceholder');
        if (placeholder) placeholder.classList.add('hidden');

        scenicSpots.slice(0, 10).forEach(spot => {
            const card = createSafeElement('div', { className: 'itinerary-day-card' });

            const contentDiv = createSafeElement('div', { style: 'padding: 12px;' });

            // Title
            contentDiv.appendChild(createSafeElement('h4', {
                style: 'margin: 0 0 8px 0; color: var(--dark-text);'
            }, spot.ScenicSpotName || 'N/A'));

            // Address
            contentDiv.appendChild(createSafeElement('small', {
                style: 'color: var(--muted); display: block; margin-bottom: 8px;'
            }, spot.Address || '無地址資訊'));

            // Description
            const descText = (spot.Description || '').substring(0, 100) + (spot.Description && spot.Description.length > 100 ? '...' : '');
            contentDiv.appendChild(createSafeElement('p', {
                style: 'font-size: 0.9rem; line-height: 1.5; margin: 8px 0;'
            }, descText));

            // Footer (Grade & Phone)
            const footerDiv = createSafeElement('div', { style: 'margin-top: 10px; display: flex; gap: 15px; font-size: 0.9rem;' });

            const gradeSpan = createSafeElement('span', { style: 'color: var(--sun-orange);' });
            gradeSpan.textContent = '🌟 ' + (spot.Grade || 'N/A');
            footerDiv.appendChild(gradeSpan);

            const phoneSpan = createSafeElement('span', {});
            phoneSpan.textContent = '📞 ' + (spot.Phone || '無電話');
            footerDiv.appendChild(phoneSpan);

            contentDiv.appendChild(footerDiv);
            card.appendChild(contentDiv);
            listEl.appendChild(card);
        });
    } else {
        const placeholder = document.getElementById('tdxScenicPlaceholder');
        if (placeholder) {
            placeholder.textContent = '附近區域未找到相關景點資訊。';
            placeholder.classList.remove('hidden');
        }
    }
}

export function setupEventListeners() {
    // TTS play button events (delegate to dynamically added buttons)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.tts-play-btn');
        if (btn) {
            const attractionId = btn.getAttribute('data-attraction-id');
            const textToRead = btn.getAttribute('data-text-to-read');
            if (attractionId && textToRead) {
                import('./itinerary.js').then(mod => mod.toggleAttractionAudio(attractionId, textToRead)).catch(err => console.warn('TTS toggle failed', err));
            }
        }
    });

    // API 驗證
    document.getElementById('verifyGeminiBtn').addEventListener('click', verifyGeminiApi);
    document.getElementById('verifyCwaBtn').addEventListener('click', async () => {
        if (await verifyCwaApi()) {
            // Only update weather displays, don't control panel visibility
            updateWeatherDisplays();
            // Start immediate alert fetch and polling
            try {
                const api = await import('./api.js');
                await api.fetchCwaAlerts();
                renderWeatherAlertBanner();
                // clear existing interval if present
                try { if (appState.cwaAlertInterval) clearInterval(appState.cwaAlertInterval); } catch (e) { }
                const id = setInterval(async () => {
                    try { await api.fetchCwaAlerts(); renderWeatherAlertBanner(); } catch (e) { console.warn('periodic fetchCwaAlerts failed', e); }
                }, 1000 * 60 * 5); // every 5 minutes
                try { setAppState('cwaAlertInterval', id); } catch (e) { }
            } catch (err) { console.warn('startCwaAlertPolling failed', err); }
        }
    });

    // CWA 天氣資料載入按鈕
    const fetchCwaBtn = document.getElementById('fetchCwaBtn');
    if (fetchCwaBtn) {
        fetchCwaBtn.addEventListener('click', async () => {
            if (!appState.isCwaApiVerified) {
                showError('請先驗證 CWA API Key', document.getElementById('cwaApiAlert'));
                return;
            }

            const btn = fetchCwaBtn;
            btn.setAttribute('aria-busy', 'true');
            btn.disabled = true;

            try {
                // 使用當前選定的目的地或預設為臺北市
                const locationName = appState.currentDestination?.name || appState.currentCountry === 'taiwan' ? '臺北市' : 'Taipei';

                const api = await import('./api.js');
                const cwaData = await api.fetchCwaData(locationName);
                renderCwaData(cwaData, locationName);
                showToast('✅ 天氣資料已更新');
            } catch (error) {
                console.error('CWA Data Fetch Failed:', error);
                showError(`天氣資料載入失敗: ${error.message}`, document.getElementById('cwaContent'));
            } finally {
                btn.setAttribute('aria-busy', 'false');
                btn.disabled = false;
            }
        });
    }

    // TDX Tab 切換事件
    const tdxTabs = document.getElementById('tdxTabs');
    if (tdxTabs) {
        tdxTabs.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (btn) {
                handleTdxTabSwitch(btn.getAttribute('data-tab'));
            }
        });
    }

    // TDX 載入數據按鈕事件
    const fetchTdxBtn = document.getElementById('fetchTdxBtn');
    if (fetchTdxBtn) {
        fetchTdxBtn.addEventListener('click', async () => {
            if (!appState.isTdxApiVerified) {
                showError('請先驗證 TDX API Key/Secret', document.getElementById('tdxApiAlert'));
                return;
            }

            const btn = fetchTdxBtn;
            btn.setAttribute('aria-busy', 'true');
            btn.disabled = true;

            try {
                // 使用當前選定的目的地或行程位置
                let locationCoords = appState.currentDestination?.coordinates;
                if (!locationCoords && appState.currentItineraryLocations && appState.currentItineraryLocations.length > 0) {
                    // Try to get first location from itinerary
                    showError('請先選擇一個目的地或生成行程', document.getElementById('tdxApiAlert'));
                    return;
                }

                if (!locationCoords) {
                    showError('請先選擇一個目的地', document.getElementById('tdxApiAlert'));
                    return;
                }

                // 呼叫 TDX 景點查詢 API
                const api = await import('./api.js');
                const spots = await api.fetchTdxNearbyPOIs(locationCoords[1], locationCoords[0], 'ScenicSpot');

                // 渲染景點列表
                renderTdxScenicSpots(spots);

                showToast('✅ TDX 景點資料載入完成');

            } catch (error) {
                console.error('TDX Data Fetch Failed:', error);
                showError(`TDX 資料載入失敗: ${error.message}`, document.getElementById('tdxApiAlert'));
            } finally {
                btn.setAttribute('aria-busy', 'false');
                btn.disabled = false;
            }
        });
    }

    // TDX 驗證按鈕現在會觸發景點載入
    document.getElementById('verifyTdxBtn').addEventListener('click', async () => {
        // 嘗試驗證 TDX；成功後用 API 資料覆蓋離線備援資料並重新渲染
        await verifyTdxApi();
        if (appState.isTdxApiVerified && appState.currentCountry === 'taiwan') {
            loadAndRenderDestinations();
        }
    });

    // Force refresh: clear cache and force API reload
    const forceBtn = document.getElementById('forceRefreshBtn');
    if (forceBtn) {
        forceBtn.addEventListener('click', async () => {
            if (forceBtn.disabled) return;
            forceBtn.disabled = true; forceBtn.setAttribute('aria-busy', 'true');
            showToast('正在清除快取並重新載入即時資料...');
            try {
                clearTdxCache();
                // 如果尚未驗證 TDX，先嘗試驗證
                if (!appState.isTdxApiVerified) await verifyTdxApi();
                await loadAndRenderDestinations(true);
                showToast('已完成強制重新載入');
            } catch (err) {
                showToast('強制重新載入失敗');
                console.warn('force refresh error', err);
            } finally {
                forceBtn.disabled = false; forceBtn.removeAttribute('aria-busy');
            }
        });
    }

    // 搜尋與國家選擇
    // Debounced search to reduce reflows
    const searchEl = document.getElementById('destinationSearch');
    const SEARCH_DEBOUNCE_MS = 300;
    let searchDebounceTimer = null;
    if (searchEl) {
        // Debounced input handler
        searchEl.addEventListener('input', (e) => {
            const target = e.target;
            clearTimeout(searchDebounceTimer);
            // capture value snapshot to avoid using stale event objects
            const value = target.value;
            searchDebounceTimer = setTimeout(() => {
                handleSearch({ target: { value: value } });
            }, SEARCH_DEBOUNCE_MS);
        });

        // Immediate search on Enter key
        searchEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                clearTimeout(searchDebounceTimer);
                handleSearch({ target: searchEl });
            }
        });

        // When leaving the field, flush any pending debounce and run final filter
        searchEl.addEventListener('blur', () => {
            if (searchDebounceTimer) {
                clearTimeout(searchDebounceTimer);
                handleSearch({ target: searchEl });
            }
        });
    }

    // 清除搜尋按鈕事件
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }

    document.getElementById('countryTabs').addEventListener('click', (e) => {
        if (e.target.classList.contains('country-tab')) {
            const countryKey = e.target.dataset.countryKey;
            selectCountry(countryKey, e.target);
        }
    });

    // Web Speech API: voice input for itinerary preferences
    const voiceBtn = document.getElementById('voiceInputBtn');
    const voiceStatus = document.getElementById('voiceStatus');
    let recognition = null;
    let recognizing = false;
    if (voiceBtn) {
        // feature detect
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
        if (!SpeechRecognition) {
            voiceBtn.title = 'Voice input not supported';
            voiceBtn.disabled = true;
        } else {
            recognition = new SpeechRecognition();
            recognition.interimResults = true;
            recognition.maxAlternatives = 1;
            recognition.continuous = false; // single phrase
            // set language based on appState
            recognition.lang = appState.currentLanguage === 'zh' ? 'zh-TW' : 'en-US';

            recognition.onstart = () => {
                recognizing = true;
                if (voiceStatus) { voiceStatus.style.display = 'inline'; voiceStatus.textContent = appState.currentLanguage === 'zh' ? '正在聆聽...' : 'Listening...'; }
                voiceBtn.classList.add('active');
            };

            let finalTranscript = '';
            recognition.onresult = (evt) => {
                let interim = '';
                for (let i = evt.resultIndex; i < evt.results.length; ++i) {
                    if (evt.results[i].isFinal) finalTranscript += evt.results[i][0].transcript;
                    else interim += evt.results[i][0].transcript;
                }
                const prefsEl = document.getElementById('itineraryPrefs');
                if (prefsEl) prefsEl.value = (finalTranscript + interim).trim();
            };

            recognition.onerror = (e) => {
                console.warn('Speech recognition error', e);
                showToast(appState.currentLanguage === 'zh' ? '語音辨識錯誤' : 'Voice recognition error');
            };

            recognition.onend = () => {
                recognizing = false;
                if (voiceStatus) { voiceStatus.style.display = 'none'; }
                voiceBtn.classList.remove('active');
            };

            voiceBtn.addEventListener('click', () => {
                if (!recognition) return;
                try {
                    if (recognizing) {
                        recognition.stop();
                    } else {
                        recognition.lang = appState.currentLanguage === 'zh' ? 'zh-TW' : 'en-US';
                        finalTranscript = '';
                        recognition.start();
                    }
                } catch (err) { console.warn('voice control error', err); }
            });
        }
    }

    // 景點卡片互動 (事件委派)
    const destinationsContainer = document.getElementById('destinations');
    destinationsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.destination-card');
        if (card) {
            // 點擊收藏按鈕
            if (e.target.classList.contains('favorite-btn')) {
                e.stopPropagation();
                handleFavoriteClick(card.dataset.id, e.target);
                // 編輯自訂景點
            } else if (e.target.classList.contains('edit-custom-btn')) {
                e.stopPropagation();
                openEditCustomSpot(card.dataset.id);
                // 刪除自訂景點
            } else if (e.target.classList.contains('delete-custom-btn')) {
                e.stopPropagation();
                const confirmed = confirm(t('delete_confirm_title') + '\n' + t('delete_confirm_msg'));
                if (!confirmed) return;
                try {
                    // remove from localStorage
                    removeCustomDestination(card.dataset.id);
                    // remove from in-memory list
                    const taiwan = destinationsByCountry.taiwan;
                    if (taiwan) {
                        taiwan.destinations = taiwan.destinations.filter(d => d.id !== card.dataset.id);
                    }
                    // re-render current view
                    const activeTab = document.querySelector('.country-tab.active') || document.querySelector('.country-tab');
                    if (activeTab) selectCountry(getAppState('currentCountry'), activeTab);
                    showToast(t('spot_deleted_success'));
                } catch (err) { console.warn('delete custom spot failed', err); showToast(t('error_generic')); }
                // 點擊標題區域切換展開/收合
            } else if (e.target.closest('h4')) {
                e.stopPropagation();
                toggleCard(card);
                // 點擊卡片其他地方則選擇景點
            } else {
                selectDestination(card.dataset.id);
            }
        }
    });

    // Hover -> highlight corresponding marker on map (desktop)
    destinationsContainer.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.destination-card');
        if (!card) return;
        const name = card.dataset.name;
        if (name && typeof renderAIMap !== 'undefined') {
            try { highlightMarker(name); } catch (err) { /* ignore if not available */ }
        }
    });
    destinationsContainer.addEventListener('mouseout', (e) => {
        const card = e.target.closest('.destination-card');
        if (!card) return;
        const name = card.dataset.name;
        if (name && typeof renderAIMap !== 'undefined') {
            try { resetMarker(name); } catch (err) { /* ignore if not available */ }
        }
    });

    // 行程規劃
    const collectItineraryTimeOptions = () => {
        const dateEl = document.getElementById('itineraryDate');
        const startEl = document.getElementById('itineraryStartTime');
        const endEl = document.getElementById('itineraryEndTime');
        const styleEl = document.getElementById('itineraryStyleSelect');
        const groupSizeEl = document.getElementById('groupSizeInput');
        const hasChildrenEl = document.getElementById('groupHasChildren');
        const hasSeniorsEl = document.getElementById('groupHasSeniors');
        const vegetarianEl = document.getElementById('groupVegetarian');
        const wheelchairEl = document.getElementById('groupWheelchair');
        const opts = { date: null, startTime: null, endTime: null, durationHours: null };
        if (dateEl && dateEl.value) opts.date = dateEl.value;
        if (startEl && startEl.value) opts.startTime = startEl.value;
        if (endEl && endEl.value) opts.endTime = endEl.value;
        if (styleEl && styleEl.value) opts.style = styleEl.value;
        // compute duration if both provided
        if (opts.startTime && opts.endTime) {
            try {
                const [sh, sm] = opts.startTime.split(':').map(Number);
                const [eh, em] = opts.endTime.split(':').map(Number);
                let start = sh + (sm / 60);
                let end = eh + (em / 60);
                if (end < start) end += 24; // cross-midnight assume next day
                opts.durationHours = Math.round((end - start) * 10) / 10; // one decimal
            } catch (e) { /* ignore parse errors */ }
        }
        // group composition
        opts.group = {
            size: groupSizeEl && !isNaN(Number(groupSizeEl.value)) ? Number(groupSizeEl.value) : 1,
            hasChildren: hasChildrenEl ? !!hasChildrenEl.checked : false,
            hasSeniors: hasSeniorsEl ? !!hasSeniorsEl.checked : false,
            vegetarian: vegetarianEl ? !!vegetarianEl.checked : false,
            wheelchair: wheelchairEl ? !!wheelchairEl.checked : false
        };
        // budget and transport preferences
        const budgetEl = document.getElementById('budgetLevelSelect');
        const transportEl = document.getElementById('routeModeSelect');
        opts.budgetLevel = budgetEl ? budgetEl.value : 'medium';
        opts.transportPref = transportEl ? transportEl.value : 'driving';
        return opts;
    };
    document.getElementById('sunnyBtn').addEventListener('click', () => generateItinerary('sunny', collectItineraryTimeOptions()));
    document.getElementById('rainyBtn').addEventListener('click', () => generateItinerary('rainy', collectItineraryTimeOptions()));
    document.getElementById('luckyBtn').addEventListener('click', () => generateItinerary('lucky', collectItineraryTimeOptions()));
    document.getElementById('multiDayBtn').addEventListener('click', () => generateItinerary('multi-day', collectItineraryTimeOptions()));

    // Transport button - add null check as it may not exist in all HTML versions
    const transportBtn = document.getElementById('transportBtn');
    if (transportBtn) {
        transportBtn.addEventListener('click', generateTransportSuggestions);
    }

    const downloadTransportPdfBtn = document.getElementById('downloadTransportPdfBtn');
    if (downloadTransportPdfBtn) {
        downloadTransportPdfBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.downloadTransportAsPDF()));
    }

    // --- 下載底部彈窗功能 ---
    const exportPdfBtn = document.getElementById('exportPdfBtn') || document.getElementById('openDownloadSheet');
    const downloadBottomSheet = document.getElementById('downloadBottomSheet');
    const downloadBackdrop = document.getElementById('downloadBackdrop');
    const closeBottomSheetBtn = document.getElementById('closeBottomSheetBtn');

    // Function to open bottom sheet
    const openDownloadSheet = () => {
        if (downloadBottomSheet && downloadBackdrop) {
            downloadBackdrop.style.display = 'block';
            // Force reflow to ensure transition works
            downloadBackdrop.offsetHeight;
            downloadBackdrop.classList.add('active');
            downloadBottomSheet.classList.add('active');
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    };

    // Function to close bottom sheet
    const closeDownloadSheet = () => {
        if (downloadBottomSheet && downloadBackdrop) {
            downloadBackdrop.classList.remove('active');
            downloadBottomSheet.classList.remove('active');
            // Restore body scroll
            document.body.style.overflow = '';
            // Hide backdrop after animation
            setTimeout(() => {
                downloadBackdrop.style.display = 'none';
            }, 300);
        }
    };

    if (exportPdfBtn && downloadBottomSheet) {
        // Open bottom sheet when button clicked
        exportPdfBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDownloadSheet();
        });

        // Close button handler
        if (closeBottomSheetBtn) {
            closeBottomSheetBtn.addEventListener('click', closeDownloadSheet);
        }

        // Close when clicking backdrop
        if (downloadBackdrop) {
            downloadBackdrop.addEventListener('click', closeDownloadSheet);
        }

        // Handle download option clicks
        downloadBottomSheet.querySelectorAll('.download-option').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const format = btn.getAttribute('data-format');
                closeDownloadSheet(); // Close sheet

                try {
                    const itineraryModule = await import('./itinerary.js');

                    switch (format) {
                        case 'pdf':
                            await itineraryModule.downloadPDFWithProgress();
                            break;
                        case 'ics':
                            itineraryModule.exportItineraryToICS();
                            break;
                        case 'csv':
                            await itineraryModule.downloadEnhancedCSV();
                            break;
                        case 'text':
                            await itineraryModule.downloadItineraryAsText();
                            break;
                    }
                } catch (err) {
                    console.error('Download failed:', err);
                    showToast('❌ 匯出失敗，請重試', 'error');
                }
            });
        });

        // Close sheet on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && downloadBottomSheet.classList.contains('active')) {
                closeDownloadSheet();
            }
        });
    }

    // --- 行程反饋與重新規劃 ---
    // Delegate feedback modal buttons (added dynamically after itinerary rendering)
    document.addEventListener('click', (e) => {
        // 反饋按鈕 - 顯示反饋模態框
        const feedbackBtn = e.target.closest('[data-show-feedback-modal]');
        if (feedbackBtn) {
            showFeedbackModal();
        }

        // 接受反饋並重新規劃
        const acceptFeedbackBtn = e.target.closest('[data-accept-feedback]');
        if (acceptFeedbackBtn) {
            const feedbackType = document.querySelector('[data-feedback-type]:checked')?.value || 'other';
            const feedbackText = document.getElementById('feedbackCommentText')?.value || '';
            closeFeedbackModal();
            generateFeedbackItinerary(feedbackText, feedbackType);
        }

        // 關閉反饋模態框
        const closeFeedbackBtn = e.target.closest('[data-close-feedback-modal]');
        if (closeFeedbackBtn) {
            closeFeedbackModal();
        }

        // 改進行程按鈕 - 顯示改進模態框
        const improveBtn = e.target.closest('[data-show-improve-modal]');
        if (improveBtn) {
            showImproveItineraryModal();
        }
    });

    // --- 新功能：行程編輯與儲存 ---
    const editItineraryBtn = document.getElementById('editItineraryBtn');
    if (editItineraryBtn) {
        editItineraryBtn.addEventListener('click', toggleItineraryEditMode);
    }

    const editorSaveBtn = document.getElementById('editorSaveBtn');
    if (editorSaveBtn) {
        editorSaveBtn.addEventListener('click', saveEditedItinerary);
    }

    const editorCancelBtn = document.getElementById('editorCancelBtn');
    const closeEditorBtn = document.getElementById('closeEditorBtn');
    const cancelEditHandler = () => {
        const modal = document.getElementById('itineraryEditorModal');
        if (modal) modal.classList.add('hidden');
    };
    if (editorCancelBtn) editorCancelBtn.addEventListener('click', cancelEditHandler);
    if (closeEditorBtn) closeEditorBtn.addEventListener('click', cancelEditHandler);

    const revertItineraryBtn = document.getElementById('revertItineraryBtn');
    if (revertItineraryBtn) {
        revertItineraryBtn.addEventListener('click', revertItinerary);
    }

    const saveItineraryBtn = document.getElementById('saveItineraryBtn');
    if (saveItineraryBtn) {
        saveItineraryBtn.addEventListener('click', commitEditedItinerary);
    }

    const downloadEditedBtn = document.getElementById('downloadEditedItineraryBtn');
    if (downloadEditedBtn) {
        downloadEditedBtn.addEventListener('click', downloadEditedItinerary);
    }

    // 增強功能
    document.getElementById('checklistBtn').addEventListener('click', generateChecklist);
    document.getElementById('cuisineBtn').addEventListener('click', () => generateEnhancedContent('cuisine'));
    document.getElementById('findHotelBtn').addEventListener('click', () => findNearbyTDXData('Hotel'));
    const reviewBtn = document.getElementById('reviewSummaryBtn');
    if (reviewBtn) reviewBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.generateReviewSummary()));
    const souvenirBtn = document.getElementById('souvenirBtn');
    if (souvenirBtn) souvenirBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.generateSouvenirList()));
    // AI Enhanced Content Controls: Currency Converter Toggle and Button
    const currencyConverterToggleBtn = document.getElementById('currencyConverterToggleBtn');
    const convertCurrencyBtn = document.getElementById('convertCurrencyBtn');

    if (currencyConverterToggleBtn) {
        currencyConverterToggleBtn.addEventListener('click', () => {
            const converter = document.getElementById('aiCurrencyConverter');
            const output = document.getElementById('costEstimateContent');
            if (converter) converter.classList.toggle('hidden');
            // 在隱藏時清空輸出
            if (converter && converter.classList.contains('hidden')) {
                if (output) {
                    output.classList.add('hidden');
                    output.innerHTML = '';
                }
            }
        });
    }

    if (convertCurrencyBtn) {
        convertCurrencyBtn.addEventListener('click', () => {
            const amount = document.getElementById('amountToConvert').value;
            const targetCurrencyEl = document.getElementById('targetCurrency');
            const targetCurrency = targetCurrencyEl ? targetCurrencyEl.value.trim().toUpperCase() : '';

            // 檢查輸入
            if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
                showToast('請輸入有效的金額', 'error');
                return;
            }
            if (!targetCurrency || targetCurrency.length !== 3) {
                showToast('請輸入有效的 3 碼目標貨幣代碼 (例如：JPY)', 'error');
                return;
            }

            // 呼叫新的 AI 估算函式（使用動態 import 避免模組循環依賴）
            import('./itinerary.js').then(mod => {
                if (mod && typeof mod.generateCurrencyConversion === 'function') {
                    mod.generateCurrencyConversion(Number(amount), targetCurrency);
                } else {
                    console.error('generateCurrencyConversion not available', mod);
                    showToast('無法執行估算，請稍後再試', 'error');
                }
            }).catch(err => {
                console.error('Failed to load itinerary module', err);
                showToast('載入估算模組失敗', 'error');
            });
        });
    }
    // Image upload for multimodal AI input
    const aiImageUploadEl = document.getElementById('aiImageUpload');
    const aiImagePreview = document.getElementById('aiImagePreview');
    const aiImagePreviewWrapper = document.getElementById('aiImagePreviewWrapper');
    const aiImagePreviewInfo = document.getElementById('aiImagePreviewInfo');
    const attachImageBtn = document.getElementById('attachImageBtn');
    const clearImageBtn = document.getElementById('clearImageBtn');

    if (aiImageUploadEl) {
        aiImageUploadEl.addEventListener('change', (e) => {
            const f = e.target.files && e.target.files[0];
            if (!f) return;
            const reader = new FileReader();
            reader.onload = async function (ev) {
                const dataUrl = ev.target.result;
                if (aiImagePreview) aiImagePreview.src = dataUrl;
                if (aiImagePreviewWrapper) aiImagePreviewWrapper.style.display = 'block';
                if (aiImagePreviewInfo) aiImagePreviewInfo.textContent = `檔名：${f.name} • 大小：${Math.round(f.size / 1024)} KB`;
                // store basic file info immediately
                try { setAppState('uploadedImage', { name: f.name, size: f.size, dataUrl, attached: false }); } catch (e) { }
                // run client-side analysis (from itinerary module)
                try {
                    const mod = await import('./itinerary.js');
                    if (mod && typeof mod.analyzeImageData === 'function') {
                        const analysis = await mod.analyzeImageData(dataUrl);
                        const cur = getAppState('uploadedImage') || {};
                        setAppState('uploadedImage', Object.assign({}, cur, { analysis }));
                        if (aiImagePreviewInfo) aiImagePreviewInfo.textContent += ` • ${analysis.summary || ''}`;
                    }
                } catch (err) {
                    console.warn('Image analysis failed', err);
                }
            };
            reader.readAsDataURL(f);
        });
    }

    if (attachImageBtn) {
        attachImageBtn.addEventListener('click', () => {
            const uploaded = getAppState('uploadedImage');
            if (!uploaded || !uploaded.dataUrl) return showToast('請先選擇一張圖片', 'error');
            setAppState('uploadedImage', Object.assign({}, uploaded, { attached: true }));
            showToast('已將圖片附加到 AI 上下文', 'success');
        });
    }

    if (clearImageBtn) {
        clearImageBtn.addEventListener('click', () => {
            try {
                if (aiImagePreview) aiImagePreview.src = '';
                if (aiImagePreviewWrapper) aiImagePreviewWrapper.style.display = 'none';
                if (aiImagePreviewInfo) aiImagePreviewInfo.textContent = '';
                if (aiImageUploadEl) aiImageUploadEl.value = '';
                setAppState('uploadedImage', null);
                showToast('已清除上傳圖片', 'success');
            } catch (e) { console.warn(e); }
        });
    }
    document.getElementById('photoSpotBtn').addEventListener('click', generatePhotoSpots);
    // Budget estimator
    const estimateBtn = document.getElementById('estimateBudgetBtn');
    if (estimateBtn) {
        estimateBtn.addEventListener('click', () => {
            // Dynamically read days based on duration type
            const durationTypeSelect = document.getElementById('durationTypeSelect');
            let days = 1;

            if (durationTypeSelect && durationTypeSelect.value === 'multi') {
                // Multi-day: read from tripDaysInput
                days = Number(document.getElementById('tripDaysInput').value) || 3;
            } else {
                // Single-day: fixed to 1 day
                days = 1;
            }

            const budgetLevel = document.getElementById('budgetLevelSelect').value || 'comfort';
            const diningPreference = document.getElementById('diningPreferenceSelect').value || 'local-street';
            const budgetDailyCustom = document.getElementById('budgetDailyCustom')?.value ? Number(document.getElementById('budgetDailyCustom').value) : null;

            // Update appState with selected preferences
            setAppState('budgetLevel', budgetLevel);
            setAppState('diningPreference', diningPreference);
            if (budgetDailyCustom) setAppState('budgetDailyPerPerson', budgetDailyCustom);

            // call enhanced generateBudgetEstimate
            import('./itinerary.js').then(mod => mod.generateBudgetEstimate(days, {
                budgetLevel,
                diningPreference,
                dailyBudget: budgetDailyCustom,
                prefs: document.getElementById('itineraryPrefs').value
            }));
        });
    }
    // 收藏夾 Modal
    document.getElementById('favoritesToggleBtn').addEventListener('click', toggleFavoritesModal);
    document.getElementById('closeFavoritesModalBtn').addEventListener('click', toggleFavoritesModal);
    document.getElementById('favoritesModal').addEventListener('click', (e) => {
        if (e.target.id === 'favoritesModal') toggleFavoritesModal();
    });

    // 其他 UI
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = appState.currentLanguage === 'zh' ? 'en' : 'zh';
            appState.currentLanguage = newLang;
            try { localStorage.setItem('lang', newLang); } catch (e) { }
            applyTranslations();
        });
        // set initial label
        langBtn.textContent = appState.currentLanguage === 'zh' ? translations.language_label.en : translations.language_label.zh;
    }
    window.addEventListener('resize', setupAccordion);

    // Sticky action bar buttons (mobile quick actions)
    const stickyGenerate = document.getElementById('stickyGenerateBtn');
    if (stickyGenerate) stickyGenerate.addEventListener('click', () => {
        const panel = document.getElementById('weatherSuggestionPanel');
        if (panel) { panel.scrollIntoView({ behavior: 'smooth', block: 'center' }); panel.classList.remove('hidden'); }
        const firstBtn = document.getElementById('sunnyBtn');
        if (firstBtn) firstBtn.focus();
    });

    const stickyMap = document.getElementById('stickyMapBtn');
    if (stickyMap) stickyMap.addEventListener('click', () => {
        const mapEl = document.getElementById('map');
        if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // if there is an existing itinerary, ensure map renders current route
        if (window.appState && window.appState.currentItineraryLocations && window.appState.currentItineraryLocations.length > 0) {
            renderAIMap(window.appState.currentItineraryLocations).catch(() => { });
        }
    });

    const stickyOptimize = document.getElementById('stickyOptimizeBtn');
    if (stickyOptimize) stickyOptimize.addEventListener('click', () => {
        // Scroll to suggestion content and trigger optimization
        const suggestion = document.getElementById('suggestionContent');
        if (suggestion) suggestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
        optimizeItinerary();
    });

    // Diagnostics modal wiring
    const diagBtn = document.getElementById('showDiagnosticsBtn');

    // --- 新功能：AI 圖像生成 ---
    // 行程封面生成按鈕
    const generateCoverBtn = document.getElementById('generateCoverImageBtn');
    if (generateCoverBtn) {
        generateCoverBtn.addEventListener('click', async () => {
            try {
                generateCoverBtn.disabled = true;
                generateCoverBtn.setAttribute('aria-busy', 'true');

                const container = document.getElementById('suggestionContent');
                const coverContainer = document.getElementById('itineraryCoverContainer');

                if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) {
                    showError('請先生成行程', container);
                    return;
                }

                if (container) {
                    container.innerHTML = `<div class="loading"><div class="spinner"></div>🎨 AI 正在生成行程封面圖...</div>`;
                }

                const { generateItineraryCoverImage } = await import('./itinerary.js');
                const result = await generateItineraryCoverImage(
                    appState.lastGeneratedItinerary.text,
                    appState.lastGeneratedItinerary.locations || appState.currentItineraryLocations || []
                );

                if (coverContainer) {
                    const img = document.getElementById('itineraryCoverImage');
                    if (img) {
                        img.src = result.imageUrl;
                        img.alt = '行程封面圖';
                    }
                    coverContainer.classList.remove('hidden');
                }

                showToast('✅ 行程封面生成成功！');
            } catch (error) {
                showError(`行程封面生成失敗: ${error.message}`, document.getElementById('suggestionContent'));
                console.error('Cover generation error:', error);
            } finally {
                generateCoverBtn.disabled = false;
                generateCoverBtn.removeAttribute('aria-busy');
            }
        });
    }

    // 景點插畫生成按鈕
    const generateIllustrationBtn = document.getElementById('generateIllustrationBtn');
    if (generateIllustrationBtn) {
        generateIllustrationBtn.addEventListener('click', async () => {
            try {
                generateIllustrationBtn.disabled = true;
                generateIllustrationBtn.setAttribute('aria-busy', 'true');

                const container = document.getElementById('descriptionContent');
                const illustrationContainer = document.getElementById('attractionIllustrationContainer');

                if (!appState.currentDestination) {
                    showError('請先選擇景點', container);
                    return;
                }

                if (container) {
                    const originalContent = container.innerHTML;
                    container.innerHTML = `<div class="loading"><div class="spinner"></div>🎨 AI 正在生成景點插畫...</div>`;

                    try {
                        const { generateAttractionIllustration } = await import('./itinerary.js');
                        const result = await generateAttractionIllustration(
                            appState.currentDestination.name,
                            container.innerText.slice(0, 200) // 使用景點描述的前 200 字
                        );

                        if (illustrationContainer) {
                            const img = document.getElementById('attractionIllustration');
                            if (img) {
                                img.src = result.imageUrl;
                                img.alt = `${appState.currentDestination.name}的景點插畫`;
                            }
                            illustrationContainer.classList.remove('hidden');
                        }

                        // 恢復原始內容
                        container.innerHTML = originalContent;
                        showToast('✅ 景點插畫生成成功！');
                    } catch (error) {
                        container.innerHTML = originalContent;
                        throw error;
                    }
                }
            } catch (error) {
                showError(`景點插畫生成失敗: ${error.message}`, document.getElementById('descriptionContent'));
                console.error('Illustration generation error:', error);
            } finally {
                generateIllustrationBtn.disabled = false;
                generateIllustrationBtn.removeAttribute('aria-busy');
            }
        });
    }

    // Heatmap toggle button
    const heatBtn = document.getElementById('toggleHeatmapBtn');
    if (heatBtn) {
        // initialize state
        heatBtn.classList.toggle('active', getAppState('heatmapVisible'));
        heatBtn.addEventListener('click', async () => {
            const newState = !getAppState('heatmapVisible');
            try {
                await toggleHeatmap(newState);
                setAppState('heatmapVisible', newState);
                heatBtn.classList.toggle('active', newState);
            } catch (e) {
                console.warn('Heatmap toggle failed', e);
            }
        });
    }

    // Mobile quick nav: smooth scroll to main regions
    const quickDestBtn = document.getElementById('quickNavDestinations');
    const quickItinBtn = document.getElementById('quickNavItinerary');
    if (quickDestBtn) {
        quickDestBtn.addEventListener('click', (e) => {
            const dest = document.getElementById('destinations');
            if (dest) {
                dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // briefly focus for screen readers
                dest.setAttribute('tabindex', '-1');
                dest.focus({ preventScroll: true });
                setTimeout(() => dest.removeAttribute('tabindex'), 1500);
            }
        });
    }
    if (quickItinBtn) {
        quickItinBtn.addEventListener('click', (e) => {
            // prefer suggestion wrapper, else map
            const target = document.getElementById('suggestionContentWrapper') || document.getElementById('suggestionContent') || document.getElementById('map');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                // add a subtle highlight class if available
                target.classList.add('quick-nav-highlight');
                setTimeout(() => { target.classList.remove('quick-nav-highlight'); try { target.removeAttribute('tabindex'); } catch (e) { } }, 1600);
            }
        });
    }
    if (diagBtn) diagBtn.addEventListener('click', showDiagnostics);
    const closeDiag = document.getElementById('closeDiagnosticsBtn');
    if (closeDiag) closeDiag.addEventListener('click', () => { document.getElementById('diagnosticsModal').classList.add('hidden'); });
    const copyDiag = document.getElementById('copyDiagnosticsBtn');
    if (copyDiag) copyDiag.addEventListener('click', () => {
        try {
            const content = document.getElementById('diagnosticsContent').textContent;
            navigator.clipboard.writeText(content);
            showToast('Diagnostics copied to clipboard');
        } catch (e) { showToast('Copy failed'); }
    });
    const exportDiag = document.getElementById('exportDiagnosticsBtn');
    if (exportDiag) exportDiag.addEventListener('click', () => {
        try {
            const content = document.getElementById('diagnosticsContent').textContent;
            const blob = new Blob([content], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = 'diagnostics.json'; document.body.appendChild(a); a.click(); a.remove();
            URL.revokeObjectURL(url);
            showToast('Exported diagnostics.json');
        } catch (e) { showToast('Export failed'); }
    });
}

// Render the weather alert banner based on appState.weatherAlerts
export function renderWeatherAlertBanner() {
    const banner = document.getElementById('weatherAlertBanner');
    const iconEl = document.getElementById('weatherAlertIcon');
    const textEl = document.getElementById('weatherAlertText');
    const dismissBtn = document.getElementById('dismissWeatherAlertBtn');
    if (!banner || !iconEl || !textEl) return;

    const alerts = (getAppState('weatherAlerts') || []);
    const dismissed = getAppState('weatherAlertsDismissed');
    if (!alerts.length || dismissed) {
        banner.classList.add('hidden');
        return;
    }

    // choose highest severity alert
    const order = { 'severe': 3, 'high': 2, 'medium': 1, 'low': 0 };
    alerts.sort((a, b) => (order[b.severity] || 0) - (order[a.severity] || 0));
    const top = alerts[0];

    // style based on severity
    if (top.severity === 'severe') {
        banner.style.background = '#ffb3b3'; banner.style.border = '1px solid #d9534f';
    } else if (top.severity === 'high') {
        banner.style.background = '#ffe0b3'; banner.style.border = '1px solid #f0ad4e';
    } else {
        banner.style.background = '#f0f3e6'; banner.style.border = '1px solid #999';
    }

    iconEl.textContent = top.icon || '⚠️';
    textEl.textContent = (top.message || '發現天氣警示，請注意最新報導。').replace(/\\s+/g, ' ').slice(0, 240);
    banner.classList.remove('hidden');

    if (dismissBtn) {
        dismissBtn.onclick = () => { setAppState('weatherAlertsDismissed', true); banner.classList.add('hidden'); };
    }
}

// ensure banner is updated when appState changes
try { window.addEventListener('appStateChanged', (e) => { if (e && e.detail && e.detail.key === 'weatherAlerts') renderWeatherAlertBanner(); }); } catch (e) { }

// Collect and show diagnostics information
export async function showDiagnostics() {
    const modal = document.getElementById('diagnosticsModal');
    const contentEl = document.getElementById('diagnosticsContent');
    if (!modal || !contentEl) return;

    const gemKey = document.getElementById('geminiApiKey') ? document.getElementById('geminiApiKey').value : null;
    const cwaKey = document.getElementById('cwaApiKey') ? document.getElementById('cwaApiKey').value : null;
    const tdxId = document.getElementById('tdxClientId') ? document.getElementById('tdxClientId').value : null;

    const diagnostics = {
        timestamp: new Date().toISOString(),
        gemini: {
            verified: !!appState.isGeminiApiVerified,
            keyPresent: !!gemKey,
            lastError: appState.lastApiErrors?.gemini || null
        },
        cwa: {
            verified: !!appState.isCwaApiVerified,
            keyPresent: !!cwaKey,
            lastError: appState.lastApiErrors?.cwa || null
        },
        tdx: {
            verified: !!appState.isTdxApiVerified,
            clientIdPresent: !!tdxId,
            accessTokenPresent: !!appState.tdxAccessToken,
            tokenExpiresAt: appState.tdxTokenExpiresAt ? new Date(appState.tdxTokenExpiresAt).toISOString() : null,
            lastError: appState.lastApiErrors?.tdx || null
        },
        caches: {
            tdxCityKeys: Object.keys(localStorage).filter(k => k.startsWith('tdx_city_')),
            scenicSpotsCache: !!localStorage.getItem('tdx-scenic-spots-taiwan')
        },
        environment: {
            language: appState.currentLanguage,
            alwaysOffline: !!appState.alwaysOffline
        }
    };

    contentEl.textContent = JSON.stringify(diagnostics, null, 2);
    modal.classList.remove('hidden');
}


// --- UI 渲染與互動 ---

function initializeCountryTabs() {
    const container = document.getElementById('countryTabs');
    if (!container) return;
    container.innerHTML = Object.keys(destinationsByCountry).map(key => {
        const country = destinationsByCountry[key];
        return `<div class="country-tab-enhanced" data-country-key="${key}">${country.emoji} ${country.name}</div>`;
    }).join('');
}

// 重寫 selectCountry 以處理動態載入邏輯
function selectCountry(countryKey, element) {
    setAppState('currentCountry', countryKey);
    document.querySelectorAll('.country-tab-enhanced').forEach(tab => tab.classList.remove('active'));
    if (element) element.classList.add('active');
    // Show AI planner panel when Gemini API is verified (regardless of country or CWA status)
    document.getElementById('weatherSuggestionPanel').classList.toggle('hidden', !getAppState('isGeminiApiVerified'));
    document.getElementById('contentArea').classList.add('hidden');
    document.getElementById('destinationSearch').value = '';

    if (countryKey === 'taiwan') {
        // 若已驗證 TDX，從 API 與快取載入；否則顯示離線備援資料
        if (getAppState('isTdxApiVerified')) {
            loadAndRenderDestinations();
        } else {
            // 使用離線備援資料初始化視圖
            destinationsByCountry.taiwan.destinations = offlineFallbackDestinations;
            renderDestinationsAccordion(offlineFallbackDestinations);
            const container = document.getElementById('destinations');
            // 顯示提示且保留一個按鈕讓使用者可選擇嘗試驗證 TDX
            const notice = document.createElement('div');
            notice.className = 'status-info';
            notice.style.textAlign = 'center';
            notice.style.padding = '10px';
            notice.innerHTML = `${translations.offline_notice_prefix[getAppState('currentLanguage')] || '目前使用'} ${translations.data_source_offline[getAppState('currentLanguage')] || '離線備援資料'}。若要載入即時資料，請於上方驗證 TDX API。 <button id="try-verify-tdx" class="btn">${translations.try_verify_and_load[getAppState('currentLanguage')] || '驗證並載入即時資料'}</button>`;
            container.prepend(notice);
            document.getElementById('try-verify-tdx').addEventListener('click', async () => {
                await verifyTdxApi();
                if (getAppState('isTdxApiVerified')) loadAndRenderDestinations();
            });
        }
    } else {
        // 為其他國家（若未來有）清空景點區
        document.getElementById('destinations').innerHTML = `<div style="text-align:center; padding: 20px; color: var(--light-text);">此地區暫無景點資料。</div>`;
    }
    // (no-op here)
}

// 新增：主函式，用於載入、快取和渲染景點
async function loadAndRenderDestinations(forceUseApi = false) {
    const container = document.getElementById('destinations');
    const countryData = destinationsByCountry.taiwan;
    const cacheKey = 'tdx-scenic-spots-taiwan';
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 小時

    container.innerHTML = `<div class="loading"><div class="spinner"></div>正在載入台灣景點資料...</div>`;

    // 如果使用者設定了始終離線，則強制使用離線備援資料
    if (appState.alwaysOffline) {
        console.log('始終離線模式，使用離線備援景點資料');
        countryData.destinations = offlineFallbackDestinations;
        renderDestinationsAccordion(offlineFallbackDestinations);
        showDataSourceBadge(translations.data_source_offline[appState.currentLanguage] || '離線備援資料');
        return;
    }

    // 如果 TDX 尚未驗證，或使用者未強制要求使用 API，則使用離線備援資料
    if (!appState.isTdxApiVerified && !forceUseApi) {
        console.log('使用離線備援景點資料');
        countryData.destinations = offlineFallbackDestinations;
        renderDestinationsAccordion(offlineFallbackDestinations);
        showDataSourceBadge(translations.data_source_offline[appState.currentLanguage] || '離線備援資料');
        return;
    }

    // 1. 檢查快取
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheDuration) {
            console.log("從快取載入景點資料。");
            countryData.destinations = data;
            renderDestinationsAccordion(data);
            showDataSourceBadge(translations.data_source_cache[appState.currentLanguage] || '快取資料');
            return;
        }
    }


    // 2. 從 API 獲取資料
    console.log("從 TDX API 獲取景點資料。");
    try {
        const allCities = Object.values(countryData.regionMapping).flat();

        // 批次處理請求以避免速率限制
        // 每批處理 3 個城市，批次之間延遲 2 秒
        const batchSize = 3;
        const batchDelay = 2000; // 2 秒
        const results = [];

        console.log(`總共 ${allCities.length} 個城市，將分 ${Math.ceil(allCities.length / batchSize)} 批次處理`);

        for (let i = 0; i < allCities.length; i += batchSize) {
            const batch = allCities.slice(i, i + batchSize);
            const batchNumber = Math.floor(i / batchSize) + 1;
            const totalBatches = Math.ceil(allCities.length / batchSize);

            console.log(`處理第 ${batchNumber}/${totalBatches} 批次: ${batch.join(', ')}`);

            const batchPromises = batch.map(city => fetchTdxScenicSpots(city));
            const batchResults = await Promise.allSettled(batchPromises);
            results.push(...batchResults);

            // 在批次之間延遲（最後一批不需要延遲）
            if (i + batchSize < allCities.length) {
                console.log(`等待 ${batchDelay / 1000} 秒後處理下一批次...`);
                await new Promise(resolve => setTimeout(resolve, batchDelay));
            }
        }

        let allSpots = [];
        let usedLive = false;
        let failedCities = [];
        let staleCities = [];

        results.forEach((result, index) => {
            const city = allCities[index];

            if (result.status === 'fulfilled' && result.value && Array.isArray(result.value.data)) {
                allSpots.push(...result.value.data);

                if (result.value.source === 'live') {
                    usedLive = true;
                } else if (result.value.source === 'cache-stale') {
                    staleCities.push(city);
                }
            } else {
                failedCities.push(city);
                console.warn(`無法獲取城市資料: ${city}`, result.reason);
            }
        });

        // 顯示警告訊息（如果有失敗或過期的城市）
        if (failedCities.length > 0 || staleCities.length > 0) {
            let warningMsg = '';
            if (failedCities.length > 0) {
                warningMsg += `⚠️ 部分城市資料載入失敗: ${failedCities.join(', ')}。`;
            }
            if (staleCities.length > 0) {
                if (warningMsg) warningMsg += ' ';
                warningMsg += `部分城市使用過期快取: ${staleCities.join(', ')}。`;
            }
            showToast(warningMsg, 'warning', 5000);
        }

        if (allSpots.length === 0) throw new Error("API 未返回任何景點資料。");

        // 3. 處理並映射資料
        const cityToRegionMap = new Map();
        for (const region in countryData.regionMapping) {
            countryData.regionMapping[region].forEach(city => cityToRegionMap.set(city, region));
        }

        const mappedDestinations = allSpots
            .filter(spot => spot.ScenicSpotName && spot.Position?.PositionLat && spot.Position?.PositionLon)
            .map(spot => ({
                id: spot.ScenicSpotID,
                name: spot.ScenicSpotName,
                description: spot.DescriptionDetail || '暫無詳細說明',
                city: spot.City || '未知城市',
                picture: spot.Picture?.PictureUrl1,
                coordinates: [spot.Position.PositionLat, spot.Position.PositionLon],
                region: cityToRegionMap.get(spot.City) || '其他地區'
            }));

        // Debug logging
        console.log(`📊 TDX 資料統計:`);
        console.log(`  - 總景點數: ${mappedDestinations.length}`);
        const regionCount = {};
        mappedDestinations.forEach(d => {
            regionCount[d.region] = (regionCount[d.region] || 0) + 1;
        });
        console.log(`  - 地區分布:`, regionCount);

        const uniqueDestinationsMap = new Map(mappedDestinations.map(item => [item.id, item]));

        // Start with offline fallback to preserve items not present in live data
        offlineFallbackDestinations.forEach(off => {
            if (!uniqueDestinationsMap.has(off.id)) uniqueDestinationsMap.set(off.id, off);
        });

        // Preserve favorites that may reference ids not in live/offline lists
        appState.favorites.forEach(fid => {
            if (!uniqueDestinationsMap.has(fid)) {
                // try to find in previous countryData.destinations
                const prev = countryData.destinations.find(d => d.id === fid);
                if (prev) uniqueDestinationsMap.set(prev.id, prev);
            }
        });

        const uniqueDestinations = Array.from(uniqueDestinationsMap.values());
        // 用合併後結果覆蓋現有 destinations
        countryData.destinations = uniqueDestinations;

        // 4. 寫入快取
        try {
            localStorage.setItem(cacheKey, JSON.stringify({
                timestamp: Date.now(),
                data: uniqueDestinations
            }));
            console.log('景點資料已快取');
        } catch (err) {
            console.warn('快取寫入失敗:', err);
        }

        renderDestinationsAccordion(uniqueDestinations);

        let badgeText = usedLive
            ? (translations.data_source_live[appState.currentLanguage] || 'TDX 即時資料')
            : (translations.data_source_cache[appState.currentLanguage] || '快取資料');

        if (staleCities.length > 0) {
            badgeText += ' (部分過期)';
        }

        showDataSourceBadge(badgeText);

    } catch (error) {
        console.error("載入與渲染景點失敗:", error);
        // 若 API 發生錯誤，回退到離線備援資料並顯示錯誤訊息，但保留列表
        countryData.destinations = offlineFallbackDestinations;
        renderDestinationsAccordion(offlineFallbackDestinations);
        showDataSourceBadge(translations.data_source_offline_api_error[appState.currentLanguage] || '離線備援資料（API 錯誤）');

        const errorBox = document.createElement('div');
        errorBox.className = 'status-error';
        errorBox.style.textAlign = 'center';
        errorBox.style.padding = '10px';
        errorBox.innerHTML = `<p>⚠️ 無法載入即時景點資料: ${error.message}</p><button id="retry-fetch-btn" class="btn">🔄 重試</button>`;
        container.prepend(errorBox);
        document.getElementById('retry-fetch-btn').addEventListener('click', () => loadAndRenderDestinations(true));
    }
    // Wire Add Custom Spot button and modal

    const addBtn = document.getElementById('addCustomSpotBtn');
    const addModal = document.getElementById('addCustomSpotModal');
    const closeModalBtn = document.getElementById('closeAddSpotModal');
    const cancelBtn = document.getElementById('cancelAddSpot');
    const form = document.getElementById('addCustomSpotForm');


    // Open modal
    if (addBtn && addModal) {
        addBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            addModal.classList.remove('hidden');
            addModal.setAttribute('aria-hidden', 'false');
            window.currentEditingCustomId = null;
            if (form) form.reset();
        });
    }

    // Close modal - X button
    if (closeModalBtn && addModal) {
        closeModalBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            addModal.classList.add('hidden');
            addModal.setAttribute('aria-hidden', 'true');
        });
    }

    // Close modal - Cancel button
    if (cancelBtn && addModal) {
        cancelBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            addModal.classList.add('hidden');
            addModal.setAttribute('aria-hidden', 'true');
        });
    }

    // Close modal when clicking on overlay background
    if (addModal) {
        addModal.addEventListener('click', function (e) {
            if (e.target === addModal) {
                addModal.classList.add('hidden');
                addModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            handleAddCustomSpot();
        });
    }
}


// Load custom destinations from localStorage and merge into in-memory destinations
function loadCustomDestinations() {
    try {
        const raw = localStorage.getItem('customDestinations');
        if (!raw) return;
        const list = JSON.parse(raw);
        if (!Array.isArray(list)) return;
        const taiwan = destinationsByCountry.taiwan;
        if (!taiwan) return;
        list.forEach(item => {
            // avoid duplicates by id
            if (!taiwan.destinations.find(d => d.id === item.id)) taiwan.destinations.push(item);
        });
    } catch (err) { console.warn('loadCustomDestinations failed', err); }
}

function saveCustomDestination(dest) {
    try {
        const raw = localStorage.getItem('customDestinations');
        const list = raw ? JSON.parse(raw) : [];
        const idx = list.findIndex(d => d.id === dest.id);
        if (idx > -1) list[idx] = dest;
        else list.push(dest);
        localStorage.setItem('customDestinations', JSON.stringify(list));
    } catch (err) { console.warn('save custom dest failed', err); }
}

function removeCustomDestination(id) {
    try {
        const raw = localStorage.getItem('customDestinations');
        const list = raw ? JSON.parse(raw) : [];
        const filtered = list.filter(d => d.id !== id);
        localStorage.setItem('customDestinations', JSON.stringify(filtered));
    } catch (err) { console.warn('remove custom dest failed', err); }
}

// Handle form submission to add a new custom spot
function handleAddCustomSpot() {
    const name = (document.getElementById('customSpotName') || {}).value || '';
    if (!name.trim()) { showToast(t('spot_name_required')); return; }
    const city = (document.getElementById('customSpotCity') || {}).value || '';
    const image = (document.getElementById('customSpotImage') || {}).value || '';
    const desc = (document.getElementById('customSpotDesc') || {}).value || '';
    const id = `custom-${Date.now()}`;
    const newDest = {
        id,
        name: name.trim(),
        city: city.trim() || '自行定義',
        description: desc.trim() || '',
        picture: image.trim() || null,
        region: '自訂'
    };
    // If editing an existing custom spot, update instead of appending
    const editingId = window.currentEditingCustomId || null;
    if (editingId) newDest.id = editingId;

    // Add to in-memory list and persist
    try {
        if (!destinationsByCountry.taiwan) destinationsByCountry.taiwan = { name: 'Taiwan', destinations: [] };
        const taiwan = destinationsByCountry.taiwan;
        const existingIdx = taiwan.destinations.findIndex(d => d.id === newDest.id);
        if (existingIdx > -1) taiwan.destinations[existingIdx] = newDest;
        else taiwan.destinations.push(newDest);
        saveCustomDestination(newDest);
        // re-render current view
        const activeTab = document.querySelector('.country-tab.active') || document.querySelector('.country-tab');
        if (activeTab) selectCountry(getAppState('currentCountry'), activeTab);
        // close modal and reset
        document.getElementById('addCustomSpotModal').classList.add('hidden');
        document.getElementById('addCustomSpotForm').reset();
        window.currentEditingCustomId = null;
        showToast(editingId ? t('spot_updated_success') : t('spot_added_success'));
    } catch (err) { console.warn('add custom spot failed', err); showToast(t('spot_add_error')); }
}

function openEditCustomSpot(id) {
    try {
        const taiwan = destinationsByCountry.taiwan;
        if (!taiwan) return showToast('找不到自訂景點');
        const dest = taiwan.destinations.find(d => d.id === id);
        if (!dest) return showToast('找不到該景點');
        // populate form
        document.getElementById('customSpotName').value = dest.name || '';
        document.getElementById('customSpotCity').value = dest.city || '';
        document.getElementById('customSpotImage').value = dest.picture || '';
        document.getElementById('customSpotDesc').value = dest.description || '';
        window.currentEditingCustomId = dest.id;
        document.getElementById('addCustomSpotModal').classList.remove('hidden');
    } catch (err) { console.warn('openEditCustomSpot failed', err); }
}

// 顯示目前資料來源的小標籤
function showDataSourceBadge(text) {
    const existing = document.getElementById('data-source-badge');
    if (existing) existing.remove();
    const badge = document.createElement('div');
    badge.id = 'data-source-badge';
    badge.className = 'data-source-badge';
    badge.textContent = text;
    badge.style.position = 'absolute';
    badge.style.right = '18px';
    badge.style.top = '12px';
    badge.style.background = 'var(--accent)';
    badge.style.color = '#fff';
    badge.style.padding = '6px 10px';
    badge.style.borderRadius = '12px';
    badge.style.fontSize = '12px';
    document.getElementById('destinations').appendChild(badge);
}

// 新增：根據地區渲染摺疊選單 (Card Style)
function renderDestinationsAccordion(destinations) {
    const container = document.getElementById('destinations');

    if (!destinations || destinations.length === 0) {
        container.innerHTML = `<div class="status-error" style="text-align:center; padding: 20px;">目前無法載入該地區景點。</div>`;
        return;
    }

    const { regionMapping } = destinationsByCountry.taiwan;
    const groupedByRegion = Object.fromEntries(Object.keys(regionMapping).map(key => [key, []]));
    // Add 'other' category
    groupedByRegion['other'] = [];

    destinations.forEach(dest => {
        // Use pre-assigned region if available, otherwise try to determine it
        let region = dest.region || 'other';

        // If region is in Chinese, map it to the English key
        const regionKeyMap = {
            '北部地區': 'north',
            '中部地區': 'central',
            '南部地區': 'south',
            '東部地區': 'east',
            '離島地區': 'islands',
            '其他地區': 'other',
            '自訂': 'other'
        };

        const regionKey = regionKeyMap[region] || region;

        // Fallback: if region key doesn't exist in groupedByRegion, try to determine from city
        if (!groupedByRegion[regionKey]) {
            let found = false;
            for (const [rKey, cities] of Object.entries(regionMapping)) {
                if (cities.some(city => dest.city && dest.city.includes(city))) {
                    if (groupedByRegion[rKey]) {
                        groupedByRegion[rKey].push(dest);
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                groupedByRegion['other'].push(dest);
            }
        } else {
            groupedByRegion[regionKey].push(dest);
        }
    });

    container.innerHTML = '';
    const regionNames = {
        north: '北部地區',
        central: '中部地區',
        south: '南部地區',
        east: '東部地區',
        islands: '離島地區',
        other: '其他地區'
    };

    Object.keys(groupedByRegion).forEach(regionKey => {
        const regionDests = groupedByRegion[regionKey];
        if (regionDests.length === 0) return;

        const regionName = regionNames[regionKey] || regionKey;
        const count = regionDests.length;

        // 使用新的 Card 結構
        const regionItem = document.createElement('div');
        regionItem.className = 'region-card';

        const regionHeader = document.createElement('button');
        regionHeader.className = 'region-card-header';
        regionHeader.innerHTML = `
            <div class="region-info">
                <span class="region-icon">📍</span>
                <span class="region-name">${regionName}</span>
                <span class="region-count">(${count})</span>
            </div>
            <div class="region-actions">
                <span class="expand-icon">▼</span>
            </div>
        `;

        const regionContent = document.createElement('div');
        regionContent.className = 'region-card-content';

        // 內容容器，用於 padding
        const contentInner = document.createElement('div');

        // Grid layout for cards
        const grid = document.createElement('div');
        grid.className = 'destination-grid';

        regionDests.forEach(dest => {
            const card = createCardElement(dest);
            grid.appendChild(card);
        });

        contentInner.appendChild(grid);
        regionContent.appendChild(contentInner);

        regionItem.appendChild(regionHeader);
        regionItem.appendChild(regionContent);
        container.appendChild(regionItem);

        // Toggle logic
        regionHeader.addEventListener('click', () => {
            const isActive = regionItem.classList.contains('active');

            if (regionItem.classList.toggle('active')) {
                regionContent.style.maxHeight = regionContent.scrollHeight + 'px';
            } else {
                regionContent.style.maxHeight = null;
            }
        });
    });
}

// 新增：建立帶有圖片的景點卡片 HTML
function createCardElement(dest) {
    const isFavorited = appState.favorites.includes(dest.id);
    const favText = isFavorited ? (translations.favorited[appState.currentLanguage] || '★ 已收藏') : (translations.favorite[appState.currentLanguage] || '⭐ 收藏');
    const favClass = isFavorited ? 'favorited' : '';

    const sourceClass = dest.id && String(dest.id).startsWith('offline') ? 'offline' : 'live';
    const sourceLabel = sourceClass === 'offline' ? (translations.data_source_offline[appState.currentLanguage] || 'Offline') : (translations.data_source_live[appState.currentLanguage] || 'Live');

    const card = document.createElement('div');
    card.className = 'destination-card';
    if (dest.id !== undefined) card.dataset.id = dest.id;
    if (dest.name !== undefined) card.dataset.name = dest.name;
    if (dest.city !== undefined) card.dataset.city = dest.city;
    // 新增：擴展搜尋用的資料屬性
    if (dest.description !== undefined) card.dataset.description = dest.description;
    if (dest.region !== undefined) card.dataset.region = dest.region;

    const badge = document.createElement('div');
    badge.className = `source-badge ${sourceClass}`;
    badge.textContent = sourceLabel;
    card.appendChild(badge);

    if (dest.picture) {
        const pic = document.createElement('div');
        pic.className = 'card-picture';
        pic.style.backgroundImage = `url('${dest.picture}')`;
        card.appendChild(pic);
    } else {
        const fallback = document.createElement('div');
        fallback.className = 'card-icon-fallback';
        fallback.innerHTML = icons.mountain || '📍';
        card.appendChild(fallback);
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'card-content-wrapper';

    const favBtn = document.createElement('button');
    favBtn.className = `favorite-btn ${favClass}`;
    favBtn.setAttribute('aria-pressed', isFavorited);
    favBtn.textContent = favText;
    wrapper.appendChild(favBtn);

    const h4 = document.createElement('h4');
    h4.textContent = dest.name || '';
    wrapper.appendChild(h4);

    // If this is a custom destination, add edit/delete controls
    if (dest.id && String(dest.id).startsWith('custom-')) {
        const actions = document.createElement('div');
        actions.className = 'card-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-custom-btn';
        editBtn.type = 'button';
        editBtn.textContent = '編輯';
        editBtn.setAttribute('aria-label', '編輯自訂景點');
        actions.appendChild(editBtn);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-custom-btn';
        delBtn.type = 'button';
        delBtn.textContent = '刪除';
        delBtn.setAttribute('aria-label', '刪除自訂景點');
        actions.appendChild(delBtn);

        wrapper.appendChild(actions);
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'destination-card-content';

    const p = document.createElement('p');
    p.textContent = dest.description || '';
    contentDiv.appendChild(p);

    const weatherDiv = document.createElement('div');
    weatherDiv.className = 'weather-info';
    weatherDiv.id = `weather-${dest.id}`;
    weatherDiv.textContent = '--';
    contentDiv.appendChild(weatherDiv);

    // Realtime status area (open hours / phone / crowd level)
    const statusDiv = document.createElement('div');
    statusDiv.className = 'realtime-status';
    statusDiv.id = `status-${dest.id}`;
    statusDiv.textContent = appState.isTdxApiVerified ? '載入中…' : '無即時資料';
    statusDiv.style.marginTop = '8px';
    statusDiv.style.fontSize = '0.9rem';
    statusDiv.style.color = 'var(--muted)';
    contentDiv.appendChild(statusDiv);


    // Set a default status message instead
    statusDiv.textContent = '點擊查看詳情';

    wrapper.appendChild(contentDiv);
    card.appendChild(wrapper);

    return card;
}

function selectDestination(destinationId) {
    const dest = destinationsByCountry[getAppState('currentCountry')].destinations.find(d => d.id === destinationId);
    setAppState('currentDestination', dest || null);
    if (!dest) return;

    // 更新卡片選中狀態
    document.querySelectorAll('.destination-card').forEach(c => c.classList.remove('selected'));
    const cardEl = document.querySelector(`.destination-card[data-id="${destinationId}"]`);
    if (cardEl) {
        cardEl.classList.add('selected');
        // 確保選中卡片在視窗內可見
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // 加入 focus 樣式以便鍵盤使用者看到
        cardEl.setAttribute('tabindex', '-1');
        cardEl.focus();
    }

    const contentArea = document.getElementById('contentArea');
    contentArea.classList.remove('hidden');
    contentArea.querySelectorAll('.panel').forEach(p => { p.classList.remove('fade-in'); void p.offsetWidth; p.classList.add('fade-in'); });

    document.getElementById('selectedDestinationName').textContent = appState.currentDestination.name;
    window.scrollTo({ top: contentArea.offsetTop - 20, behavior: 'smooth' });

    initializeMap(appState.currentDestination);

    document.getElementById('imageGallery').innerHTML = '';
    document.getElementById('aiEnhancedContent').classList.add('hidden');
    document.getElementById('aiPhotoSpotContent').classList.add('hidden');

    if (getAppState('isGeminiApiVerified')) {
        generateDescription(appState.currentDestination);
    } else {
        showError('請先驗證 Gemini API 才能生成景點介紹');
    }
}

function updateWeatherDisplays() {
    if (!appState.weatherData || appState.currentCountry !== 'taiwan') return;
    destinationsByCountry.taiwan.destinations.forEach(dest => {
        const weatherInfo = getWeatherForCity(dest.city);
        const weatherDiv = document.getElementById(`weather-${dest.id}`);
        if (weatherInfo && weatherDiv) {
            weatherDiv.innerHTML = `${getWeatherIcon(weatherInfo.wx)} ${weatherInfo.temp}°C`;
        } else if (weatherDiv) {
            weatherDiv.innerHTML = `無資料`;
        }
    });
}

function getWeatherForCity(cityName) {
    if (!appState.weatherData) return null;
    const cityData = appState.weatherData.find(loc => loc.locationName === cityName);
    if (!cityData) return null;
    const temp = cityData.weatherElement.find(e => e.elementName === 'CI').time[0].parameter.parameterName;
    const wx = cityData.weatherElement.find(e => e.elementName === 'Wx').time[0].parameter.parameterName;
    return { temp, wx };
}

function getWeatherIcon(desc) {
    if (desc.includes('晴')) return '☀️';
    if (desc.includes('雲') || desc.includes('陰')) return '☁️';
    if (desc.includes('雨')) return '🌧️';
    if (desc.includes('雷')) return '⛈️';
    return '❓';
}

function toggleCard(cardElement) {
    cardElement.classList.toggle('expanded');
}

function setupAccordion() {
    const isMobile = window.innerWidth <= 992;
    const panels = document.querySelectorAll('.content-area .panel');

    panels.forEach(panel => {
        const header = panel.querySelector('h3');
        if (!header) return;

        const clickHandler = () => {
            if (window.innerWidth > 992) return;
            const isActive = panel.classList.contains('active');
            panels.forEach(p => p.classList.remove('active'));
            if (!isActive) panel.classList.add('active');
        };

        header.removeEventListener('click', header._clickHandler);
        if (isMobile) {
            header._clickHandler = clickHandler;
            header.addEventListener('click', header._clickHandler);
        }
        panel.classList.remove('active');
    });

    if (!isMobile) {
        panels.forEach(p => p.classList.remove('active'));
    } else if (panels.length > 0) {
        panels[0].classList.add('active');
    }
}

export function toggleCurrencyConverter() {
    document.getElementById('aiCurrencyConverter').classList.toggle('hidden');
}

// --- 交通建議結構化渲染 ---
export function renderTransportSuggestions(markdownContent, container) {
    // 解析 Markdown 結構，提取各個交通段落（每個 ### 開頭的段落）
    const segments = markdownContent.split(/### 📌\s+/).filter(s => s.trim());

    if (segments.length === 0) {
        container.innerHTML = markdownContent; // fallback to raw content
        return;
    }

    // 建立段落清單容器
    const list = document.createElement('ul');
    list.className = 'transport-step-list';

    segments.forEach(segmentText => {
        if (!segmentText.trim()) return;

        const segment = document.createElement('li');
        segment.className = 'transport-segment';

        // 第一行是標題（景點A到景點B）
        const lines = segmentText.trim().split('\n').filter(l => l.trim());
        if (lines.length === 0) return;

        const title = lines[0].replace(/^[\*\-\#]+\s*/, '').trim();
        const h4 = document.createElement('h4');
        h4.textContent = '📌 ' + title;
        segment.appendChild(h4);

        // 建立詳細資訊列表
        const detailsList = document.createElement('ul');
        detailsList.className = 'transport-details-list';

        // 匹配各類型資訊
        const iconMap = {
            '方式': '🚇',
            '路線': '🗺️',
            '預計時間': '⏱️',
            '預估費用': '💰',
            '時間': '⏱️',
            '費用': '💰'
        };

        let tipText = '';

        lines.forEach((line, idx) => {
            if (idx === 0) return; // skip title
            const trimmed = line.replace(/^[\*\-\#]+\s*/, '').trim();
            if (!trimmed) return;

            // 檢查是否為貼心提醒行
            if (trimmed.includes('貼心提醒') || trimmed.includes('提醒')) {
                tipText = trimmed.replace(/\*\*/g, '').replace(/貼心提醒：？/, '').trim();
                return;
            }

            // 嘗試解析 **標籤：內容** 格式
            const match = trimmed.match(/\*?\*?([^:：]+)[：:]\s*\*?\*?(.+)/);
            if (match) {
                const label = match[1].trim();
                const value = match[2].replace(/\*?\*?/g, '').trim();

                let icon = '•';
                for (const [key, ico] of Object.entries(iconMap)) {
                    if (label.includes(key)) {
                        icon = ico;
                        break;
                    }
                }

                const li = document.createElement('li');
                li.setAttribute('data-icon', icon);
                li.textContent = `${label}：${value}`;
                detailsList.appendChild(li);
            }
        });

        segment.appendChild(detailsList);

        // 如果有貼心提醒，添加到段落
        if (tipText) {
            const tipDiv = document.createElement('div');
            tipDiv.className = 'transport-tip';
            tipDiv.innerHTML = '💡 ' + tipText.replace(/\*\*/g, '<strong>').replace(/\*\*/g, '</strong>');
            segment.appendChild(tipDiv);
        }

        list.appendChild(segment);
    });

    container.innerHTML = '';
    container.appendChild(list);
}

// 將函式暴露至全域以供 itinerary.js 呼叫
window.renderTransportSuggestions = renderTransportSuggestions;

// --- 優化：主題處理邏輯 ---
function initializeTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    // 優先使用使用者儲存的設定
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        // 否則跟隨系統設定
        applyTheme(prefersDark.matches);
    }

    // 監聽系統主題變化
    prefersDark.addEventListener('change', (e) => {
        // 只有當使用者沒有手動設定過主題時，才跟隨系統
        if (!localStorage.getItem('themeOverride')) {
            applyTheme(e.matches);
        }
    });
}

function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    document.getElementById('themeToggleBtn').innerHTML = isDark ? (translations.theme_day[appState.currentLanguage] || '☀️ 日間模式') : (translations.theme_night[appState.currentLanguage] || '🌙 夜間模式');
}

function toggleTheme() {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    // 儲存使用者的手動選擇，並設定覆蓋旗標
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    localStorage.setItem('themeOverride', 'true');
}

// --- 搜尋與收藏功能 ---

function handleSearch(event) {
    const searchTerm = (event && event.target && event.target.value || '').toLowerCase().trim();
    const cards = Array.from(document.querySelectorAll('.destination-card'));
    const clearBtn = document.getElementById('searchClearBtn');
    const noResultsEl = document.getElementById('searchNoResults');

    // 顯示/隱藏清除按鈕
    if (clearBtn) {
        clearBtn.style.display = searchTerm ? 'flex' : 'none';
    }

    let visibleCount = 0;

    // 擴展搜尋：name, city, description, region
    cards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const city = (card.dataset.city || '').toLowerCase();
        const description = (card.dataset.description || '').toLowerCase();
        const region = (card.dataset.region || '').toLowerCase();

        const isVisible = searchTerm === '' ||
            name.includes(searchTerm) ||
            city.includes(searchTerm) ||
            description.includes(searchTerm) ||
            region.includes(searchTerm);

        card.classList.toggle('hidden', !isVisible);
        if (isVisible) visibleCount++;
    });

    // 顯示/隱藏「無結果」提示
    if (noResultsEl) {
        noResultsEl.style.display = (searchTerm && visibleCount === 0) ? 'block' : 'none';
    }

    // 處理地區手風琴：隱藏無結果的地區 + 展開有結果的地區
    const regions = Array.from(document.querySelectorAll('.region-card, .region-accordion-item'));
    regions.forEach(regionItem => {
        const content = regionItem.querySelector('.region-card-content, .region-accordion-content');
        const regionCards = regionItem.querySelectorAll('.destination-card');
        const anyVisible = Array.from(regionCards).some(c => !c.classList.contains('hidden'));

        // 隱藏無結果的地區
        regionItem.style.display = anyVisible ? '' : 'none';

        if (searchTerm && anyVisible) {
            regionItem.classList.add('active');
            if (content) content.style.maxHeight = content.scrollHeight + 'px';
            const icon = regionItem.querySelector('.accordion-icon, .expand-icon');
            if (icon) icon.textContent = '−';
        } else if (!searchTerm) {
            // 清除搜尋時收合所有地區
            regionItem.classList.remove('active');
            if (content) content.style.maxHeight = null;
            const icon = regionItem.querySelector('.accordion-icon, .expand-icon');
            if (icon) icon.textContent = '+';
        }
    });
}

// 清除搜尋
function clearSearch() {
    const searchInput = document.getElementById('destinationSearch');
    if (searchInput) {
        searchInput.value = '';
        handleSearch({ target: searchInput });
        searchInput.focus();
    }
}


function handleFavoriteClick(destinationId, buttonElement) {
    const index = appState.favorites.indexOf(destinationId);
    if (index > -1) {
        appState.favorites.splice(index, 1); // 移除收藏
        buttonElement.textContent = translations.favorite[appState.currentLanguage] || '⭐ 收藏';
        buttonElement.classList.remove('favorited');
    } else {
        appState.favorites.push(destinationId); // 加入收藏
        buttonElement.textContent = translations.favorited[appState.currentLanguage] || '★ 已收藏';
        buttonElement.classList.add('favorited');
    }
    localStorage.setItem('favoriteDestinations', JSON.stringify(appState.favorites));
    // 微動畫與 toast
    buttonElement.classList.add('animate');
    setTimeout(() => buttonElement.classList.remove('animate'), 400);
    showToast(buttonElement.classList.contains('favorited') ? (translations.favorited[appState.currentLanguage] || '已收藏') : (translations.favorite[appState.currentLanguage] || '已移除收藏'));
}

function loadFavorites() {
    const storedFavorites = localStorage.getItem('favoriteDestinations');
    if (storedFavorites) {
        appState.favorites = JSON.parse(storedFavorites);
    }
}

function toggleFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    if (modal.classList.contains('hidden')) {
        renderFavoritesList();
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function renderFavoritesList() {
    const container = document.getElementById('favoritesList');
    if (appState.favorites.length === 0) {
        container.innerHTML = '<p>尚未收藏任何景點。</p>';
        return;
    }

    const allDestinations = Object.values(destinationsByCountry).flatMap(c => c.destinations);
    const favoriteDests = appState.favorites
        .map(id => allDestinations.find(d => d.id === id))
        .filter(d => d); // 過濾掉可能找不到的景點

    container.innerHTML = `<ul>${favoriteDests.map(d =>
        `<li data-id="${d.id}">${d.name} <small>(${d.city || ''})</small></li>`
    ).join('')}</ul>`;

    // 為列表項目添加點擊事件
    container.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            selectDestination(li.dataset.id);
            toggleFavoritesModal();
        });
    });
}

// --- 通用 UI 輔助函式 ---

export function showApiStatus(message, type) {
    const statusDiv = document.getElementById('apiStatus');
    statusDiv.classList.remove('hidden', 'status-success', 'status-error', 'status-loading');
    statusDiv.classList.add(`status-${type}`);
    statusDiv.textContent = message;
}

// Attach an AI feedback widget to an AI-generated content container.
// containerId: id of the element containing AI content (string)
// meta: object with optional { type: 'description'|'itinerary'|'enhanced', subtype, contextId }
window.attachAiFeedback = function (containerId, meta = {}) {
    try {
        const container = document.getElementById(containerId);
        if (!container) return false;

        // avoid double-inserting
        if (container.querySelector('.ai-feedback')) return true;

        const fb = document.createElement('div'); fb.className = 'ai-feedback';

        const btns = document.createElement('div'); btns.className = 'fb-buttons';
        const up = document.createElement('button'); up.className = 'fb-btn fb-up'; up.textContent = '👍'; up.title = '有幫助';
        const down = document.createElement('button'); down.className = 'fb-btn fb-down'; down.textContent = '👎'; down.title = '沒有幫助';
        btns.appendChild(up); btns.appendChild(down);

        const ta = document.createElement('textarea'); ta.className = 'fb-comment'; ta.placeholder = '可選：告訴我們如何改進（例如：內容太長、資訊不準確、需要更多歷史背景）';

        const submitWrap = document.createElement('div'); submitWrap.className = 'fb-submit';
        const submitBtn = document.createElement('button'); submitBtn.className = 'btn'; submitBtn.textContent = '送出回饋';
        const reportBtn = document.createElement('button'); reportBtn.className = 'btn'; reportBtn.textContent = '回報問題';
        submitWrap.appendChild(submitBtn); submitWrap.appendChild(reportBtn);

        fb.appendChild(btns);
        fb.appendChild(ta);
        fb.appendChild(submitWrap);

        container.appendChild(fb);

        const saveFeedback = (positive) => {
            const payload = {
                id: containerId,
                meta: meta || {},
                positive: !!positive,
                comment: ta.value || '',
                timestamp: new Date().toISOString()
            };
            try {
                const stored = JSON.parse(localStorage.getItem('aiFeedback') || '[]');
                stored.push(payload);
                localStorage.setItem('aiFeedback', JSON.stringify(stored));
            } catch (e) { console.warn('save feedback failed', e); }
            try { showToast('感謝您的回饋！'); } catch (e) { }
            // visual acknowledgement
            up.disabled = true; down.disabled = true; submitBtn.disabled = true;
        };

        up.addEventListener('click', () => saveFeedback(true));
        down.addEventListener('click', () => saveFeedback(false));
        submitBtn.addEventListener('click', () => saveFeedback(true));
        reportBtn.addEventListener('click', () => saveFeedback(false));

        return true;
    } catch (err) { console.warn('attachAiFeedback error', err); return false; }
};

// Toast notifications (small helper)
export function showToast(message, typeOrDuration = 3000, customDuration = null) {
    try {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');

        // Determine type and duration
        let type = 'info';
        let duration = 3000;

        if (typeof typeOrDuration === 'string') {
            type = typeOrDuration;
            duration = customDuration || (type === 'loading' ? 5000 : 3000);
        } else if (typeof typeOrDuration === 'number') {
            duration = typeOrDuration;
        }

        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');

        container.appendChild(toast);
        // force reflow to enable transition
        void toast.offsetWidth;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => { try { container.removeChild(toast); } catch (e) { } }, 260);
        }, duration);
    } catch (err) { console.warn('Toast error', err); }
}

// Apply translations to DOM elements with data-i18n or data-i18n-placeholder
export function applyTranslations() {
    const lang = appState.currentLanguage || 'zh';

    // elements with data-i18n attribute (text content)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    // elements with data-i18n-placeholder (placeholder attribute)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key] && translations[key][lang]) {
            el.placeholder = translations[key][lang];
        }
    });

    // elements with data-i18n-title (title/aria-label attribute)
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[key] && translations[key][lang]) {
            el.title = translations[key][lang];
            el.setAttribute('aria-label', translations[key][lang]);
        }
    });

    // update language toggle button
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? translations.language_label.en : translations.language_label.zh;
        langBtn.setAttribute('data-i18n-title', 'language_label');
    }

    // update theme button label
    const isDark = document.body.classList.contains('dark-mode');
    const themeKey = isDark ? 'theme_day' : 'theme_night';
    document.getElementById('themeToggleBtn').textContent = translations[themeKey][lang] || document.getElementById('themeToggleBtn').textContent;

    // update favorites button
    const favBtn = document.getElementById('favoritesToggleBtn');
    if (favBtn) favBtn.textContent = translations.favorites[lang] || favBtn.textContent;

    // Update modal titles and labels
    const modals = ['addCustomSpotTitle', 'favoritesModal', 'onboardingModal', 'diagnosticsModal'];
    modals.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.hasAttribute('data-i18n')) {
            const key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        }
    });

    // Update form labels and buttons
    const formElements = ['customSpotName', 'customSpotCity', 'customSpotImage', 'customSpotDesc', 'cancelAddSpot', 'submitAddSpot'];
    formElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Check for data-i18n-placeholder
            if (el.hasAttribute('data-i18n-placeholder')) {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[key] && translations[key][lang]) {
                    el.placeholder = translations[key][lang];
                }
            }
            // Check for data-i18n (for buttons)
            if (el.hasAttribute('data-i18n')) {
                const key = el.getAttribute('data-i18n');
                if (translations[key] && translations[key][lang]) {
                    el.textContent = translations[key][lang];
                }
            }
        }
    });

    // If destinations are rendered, re-render to apply translated favorite labels
    const currentDests = destinationsByCountry.taiwan.destinations || [];
    if (currentDests.length > 0) renderDestinationsAccordion(currentDests);

    // Save language preference
    try { localStorage.setItem('lang', lang); } catch (e) { }
}

export function showError(message, container = document.getElementById('descriptionContent'), retryCallback = null) {
    let retryButtonHTML = '';
    if (retryCallback) {
        // 為了讓事件監聽能正確綁定，我們給按鈕一個唯一的 ID
        const retryBtnId = `retry-btn-${Date.now()}`;
        retryButtonHTML = `<button id="${retryBtnId}" class="btn">再試一次</button>`;

        // 使用 setTimeout 來確保元素已渲染到 DOM 中再綁定事件
        setTimeout(() => {
            const retryBtn = document.getElementById(retryBtnId);
            if (retryBtn) {
                retryBtn.addEventListener('click', retryCallback);
            }
        }, 0);
    }

    container.innerHTML = `
        <div class="status-error" style="text-align: center;">
            <p style="margin: 0 0 10px 0;">⚠️ ${message}</p>
            ${retryButtonHTML}
        </div>`;
}

/**
 * Render a per-day weather forecast panel for an itinerary period.
 * startDate: YYYY-MM-DD, days: integer
 */
export async function renderDailyWeatherForecast(startDate, days = 1) {
    try {
        if (!startDate || !window.appState || !appState.weatherData) return;
        const wrapper = document.getElementById('suggestionContentWrapper') || document.getElementById('suggestionContent').parentElement;
        if (!wrapper) return;

        // remove existing forecast panel
        const existing = document.getElementById('itinerary-weather-forecast');
        if (existing) existing.remove();

        const panel = document.createElement('div');
        panel.id = 'itinerary-weather-forecast';
        panel.style.display = 'flex';
        panel.style.flexWrap = 'wrap';
        panel.style.gap = '8px';
        panel.style.margin = '8px 0 12px 0';

        const start = new Date(startDate + 'T00:00:00');

        // local helper: compute forecast summary similar to itinerary.js's function
        const getForecastSummaryForDateLocal = (dateStr) => {
            try {
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
            } catch (err) { return ''; }
        };

        const analyzeWeatherForDateLocal = (dateStr) => {
            try {
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
                const condText = conds.join(' ');
                const avgTemp = temps.length ? (temps.reduce((a, b) => a + b, 0) / temps.length) : null;
                const adviceParts = [];
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
            } catch (err) { return null; }
        };

        for (let i = 0; i < Math.max(1, Number(days || 1)); i++) {
            const d = new Date(start.getTime() + i * 24 * 60 * 60 * 1000);
            const yyyy = d.getFullYear();
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const dateStr = `${yyyy}-${mm}-${dd}`;

            const summary = getForecastSummaryForDateLocal(dateStr) || '';
            const analysis = analyzeWeatherForDateLocal(dateStr) || null;
            const advice = analysis && analysis.advice ? analysis.advice : '';

            const card = document.createElement('div');
            card.className = 'weather-day-card';
            card.style.minWidth = '160px';
            card.style.flex = '0 0 160px';
            card.style.padding = '10px';
            card.style.border = '1px solid var(--muted)';
            card.style.borderRadius = '8px';
            card.style.background = 'var(--card-bg)';

            const title = document.createElement('div');
            title.style.fontWeight = '600';
            title.style.marginBottom = '6px';
            title.textContent = `${yyyy}/${mm}/${dd}`;
            card.appendChild(title);

            const summ = document.createElement('div');
            summ.style.fontSize = '0.95rem';
            summ.style.marginBottom = '6px';
            summ.textContent = summary || '無天氣摘要資料';
            card.appendChild(summ);

            if (advice) {
                const adv = document.createElement('div');
                adv.style.fontSize = '0.85rem';
                adv.style.color = 'var(--muted)';
                adv.textContent = `建議：${advice}`;
                card.appendChild(adv);
            }

            panel.appendChild(card);
        }

        // insert above suggestionContent
        const contentEl = document.getElementById('suggestionContent');
        if (contentEl && contentEl.parentElement) contentEl.parentElement.insertBefore(panel, contentEl);
    } catch (err) {
        console.warn('renderDailyWeatherForecast error', err);
    }
}

export function formatAsTimeline(markdownText) {
    let html = '';
    const lines = markdownText.split('\n');
    let inList = false;
    let inOrderedList = false;
    let attractionCounter = 0; // Counter for unique TTS button IDs

    for (const line of lines) {
        const trimmedLine = line.trim();

        // Handle headings (###, ##, **)
        if (line.startsWith('###') || line.startsWith('##') || line.startsWith('**')) {
            if (inList) html += '</ul>';
            if (inOrderedList) html += '</ol>';
            inList = false;
            inOrderedList = false;
            const title = line.replace(/#|\*/g, '').trim();
            const attractionId = `attraction-${attractionCounter++}`;
            // Store the text as a data attribute (escaped for HTML)
            const escapedTitle = title.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const ttsBtn = `<button class="tts-play-btn" data-attraction-id="${attractionId}" data-text-to-read="${escapedTitle}" title="語音導覽">🔊</button>`;
            html += `<div style="display: flex; align-items: center; gap: 8px;"><h3 style="margin: 0; flex: 1;">${title}</h3>${ttsBtn}</div>`;
        }
        // Handle numbered lists (1. 2. 3. etc.)
        else if (/^\d+\.\s/.test(trimmedLine)) {
            if (inList) { html += '</ul>'; inList = false; }
            if (!inOrderedList) { html += '<ol style="margin: 12px 0; padding-left: 24px;">'; inOrderedList = true; }

            const itemText = trimmedLine.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            const plainText = itemText.replace(/<[^>]*>/g, ''); // Remove HTML tags for TTS
            const attractionId = `attraction-${attractionCounter++}`;
            // Store the plain text as a data attribute (escaped for HTML)
            const escapedText = plainText.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const ttsBtn = `<button class="tts-play-btn" data-attraction-id="${attractionId}" data-text-to-read="${escapedText}" title="語音導覽">🔊</button>`;
            html += `<li style="margin-bottom: 12px; line-height: 1.6;"><div style="display: flex; align-items: flex-start; gap: 8px;"><span style="flex: 1;">${itemText}</span>${ttsBtn}</div></li>`;
        }
        // Handle bullet lists (-, *)
        else if (trimmedLine.startsWith('-') || trimmedLine.startsWith('*')) {
            if (inOrderedList) { html += '</ol>'; inOrderedList = false; }
            if (!inList) { html += '<ul style="margin: 12px 0; padding-left: 24px;">'; inList = true; }

            const itemText = line.replace(/[-*]/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').trim();
            const plainText = itemText.replace(/<[^>]*>/g, ''); // Remove HTML tags for TTS
            const attractionId = `attraction-${attractionCounter++}`;
            // Store the plain text as a data attribute (escaped for HTML)
            const escapedText = plainText.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const ttsBtn = `<button class="tts-play-btn" data-attraction-id="${attractionId}" data-text-to-read="${escapedText}" title="語音導覽">🔊</button>`;
            html += `<li style="margin-bottom: 8px; line-height: 1.6;"><div style="display: flex; align-items: flex-start; gap: 8px;"><span style="flex: 1;">${itemText}</span>${ttsBtn}</div></li>`;
        }
        // Handle regular paragraphs
        else if (trimmedLine) {
            if (inList) { html += '</ul>'; inList = false; }
            if (inOrderedList) { html += '</ol>'; inOrderedList = false; }
            html += `<p style="margin: 8px 0; line-height: 1.6;">${trimmedLine}</p>`;
        }
        // Handle empty lines (preserve spacing)
        else {
            if (inList) { html += '</ul>'; inList = false; }
            if (inOrderedList) { html += '</ol>'; inOrderedList = false; }
        }
    }

    // Close any open lists
    if (inList) html += '</ul>';
    if (inOrderedList) html += '</ol>';

    return html;
}

// Split an itinerary markdown into day sections. Returns array of { title, content }
export function splitItineraryIntoDays(markdownText) {
    if (!markdownText || typeof markdownText !== 'string') return [{ title: 'Day 1', content: '' }];
    const lines = markdownText.split('\n');
    const dayBoundaries = [];
    const dayPattern = /^\s*(?:Day\s*\d+|第\s*\d+\s*天|第\d+天)[:\-\s]*?/i;
    for (let i = 0; i < lines.length; i++) {
        if (dayPattern.test(lines[i])) {
            dayBoundaries.push(i);
        }
    }
    // If no explicit day markers, try to split by 'Day' keywords inside the text body
    if (dayBoundaries.length <= 0) {
        // Heuristic: split by occurrences of 'Day X' anywhere in the text
        const regex = /(Day\s*\d+|第\s*\d+\s*天)/ig;
        const matches = [...markdownText.matchAll(regex)];
        if (matches.length > 0) {
            // Convert match indices to line numbers
            for (const m of matches) {
                const idx = markdownText.slice(0, m.index).split('\n').length - 1;
                if (!dayBoundaries.includes(idx)) dayBoundaries.push(idx);
            }
            dayBoundaries.sort((a, b) => a - b);
        }
    }

    if (dayBoundaries.length === 0) {
        return [{ title: 'Day 1', content: markdownText }];
    }

    const days = [];
    for (let i = 0; i < dayBoundaries.length; i++) {
        const start = dayBoundaries[i];
        const end = i + 1 < dayBoundaries.length ? dayBoundaries[i + 1] : lines.length;
        let titleLine = lines[start].trim();
        // Clean Markdown markers from title (###, **, etc.)
        titleLine = titleLine.replace(/^#+\s*/, '');  // Remove leading ### markers
        titleLine = titleLine.replace(/\*\*/g, '');   // Remove bold markers
        titleLine = titleLine.replace(/\*/g, '');     // Remove italic markers
        titleLine = titleLine.replace(/^[-_]+\s*/, ''); // Remove leading dashes/underscores
        const content = lines.slice(start, end).join('\n');
        days.push({ title: titleLine || `Day ${i + 1}`, content });
    }
    return days;
}

// Try to extract known destination names from a block of text by checking against the loaded destinations
function extractLocationsFromText(text) {
    if (!text) return [];
    const normalized = text.toLowerCase();
    const allNames = (destinationsByCountry.taiwan && destinationsByCountry.taiwan.destinations) ? destinationsByCountry.taiwan.destinations.map(d => d.name) : [];
    const found = [];
    for (const name of allNames) {
        if (!name) continue;
        try {
            if (normalized.indexOf(name.toLowerCase()) !== -1) found.push(name);
        } catch (e) { /* ignore */ }
    }
    // dedupe while preserving order
    return [...new Set(found)];
}

// Render itinerary with Day tabs. If only one day detected, render normally.
export function renderItineraryWithDayTabs(markdownText, overallLocations = []) {
    const wrapper = document.getElementById('suggestionContentWrapper') || document.getElementById('suggestionContent').parentElement;
    const contentEl = document.getElementById('suggestionContent');

    // remove any existing tabs
    const existing = document.getElementById('dayTabs');
    if (existing) existing.remove();

    const days = splitItineraryIntoDays(markdownText);

    // If only one day, render directly and try to render map with overallLocations
    if (!days || days.length <= 1) {
        contentEl.innerHTML = formatAsTimeline(markdownText);
        // Add feedback button
        renderItineraryFeedbackButton(contentEl);
        // try to render map for entire itinerary
        if (overallLocations && overallLocations.length > 1) {
            try { renderAIMap(overallLocations); } catch (e) { /* ignore */ }
            // Removed: Manual drag-and-drop reordering (use "優化行程" button instead)
        }
        // Check for contingencies (weather/traffic)
        try {
            import('./itinerary.js').then(mod => {
                if (mod && typeof mod.autoCheckContingencies === 'function') {
                    mod.autoCheckContingencies();
                }
            }).catch(err => console.warn('autoCheckContingencies failed', err));
        } catch (e) { }
        return;
    }

    // Build tab bar
    const tabBar = document.createElement('div');
    tabBar.id = 'dayTabs';
    tabBar.className = 'day-tabs';
    tabBar.style.display = 'flex';
    tabBar.style.gap = '8px';
    tabBar.style.marginBottom = '8px';

    days.forEach((d, idx) => {
        const btn = document.createElement('button');
        btn.className = 'btn day-tab';
        btn.textContent = d.title || `Day ${idx + 1}`;
        btn.dataset.dayIndex = String(idx);
        btn.addEventListener('click', () => {
            // deactivate siblings
            tabBar.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // render content
            contentEl.innerHTML = formatAsTimeline(d.content);
            // Add feedback button
            renderItineraryFeedbackButton(contentEl);
            // determine locations for this day
            const locs = extractLocationsFromText(d.content);
            // fallback: if none found, try to use overallLocations chunk based on index
            let toRender = locs && locs.length ? locs : [];
            if (toRender.length === 0 && overallLocations && overallLocations.length) {
                // try to split overallLocations evenly across days
                const per = Math.ceil(overallLocations.length / days.length);
                const start = idx * per;
                toRender = overallLocations.slice(start, start + per);
            }
            if (toRender && toRender.length > 0) {
                try { renderAIMap(toRender); } catch (e) { /* ignore */ }
                // Removed: Manual drag-and-drop reordering (use "優化行程" button instead)
            }
        });
        tabBar.appendChild(btn);
    });

    // insert tabs above the content
    if (wrapper) wrapper.insertBefore(tabBar, contentEl);

    // Activate first tab
    const first = tabBar.querySelector('.day-tab');
    if (first) first.click();

    // Check for contingencies (weather/traffic) after rendering
    try {
        import('./itinerary.js').then(mod => {
            if (mod && typeof mod.autoCheckContingencies === 'function') {
                mod.autoCheckContingencies();
            }
        }).catch(err => console.warn('autoCheckContingencies failed', err));
    } catch (e) { }
}

// --- 新功能：行程編輯與儲存 ---

/**
 * 進入行程編輯模式
 */
export function toggleItineraryEditMode() {
    const container = document.getElementById('suggestionContent');
    const modal = document.getElementById('itineraryEditorModal');
    const editControls = document.getElementById('itineraryEditControls');

    if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) {
        showError('請先生成行程', container);
        return;
    }

    // 初始化編輯狀態
    if (!appState.isEditingItinerary) {
        // 保存原始版本
        appState.editableItinerary.originalText = appState.lastGeneratedItinerary.text;
        appState.editableItinerary.originalLocations = [...(appState.lastGeneratedItinerary.locations || [])];
        appState.editableItinerary.text = appState.lastGeneratedItinerary.text;
        appState.editableItinerary.locations = [...(appState.lastGeneratedItinerary.locations || [])];
        appState.editableItinerary.isDirty = false;

        // 填充編輯器
        const textEditor = document.getElementById('itineraryTextEditor');
        const locationsEditor = document.getElementById('itineraryLocationsEditor');
        if (textEditor) textEditor.value = appState.editableItinerary.text;
        if (locationsEditor) locationsEditor.value = appState.editableItinerary.locations.join(', ');

        // 顯示模態框
        if (modal) modal.classList.remove('hidden');
        setAppState('isEditingItinerary', true);
        updateEditModeUI();
    }
}

/**
 * 確認編輯並保存到編輯狀態
 */
export function saveEditedItinerary() {
    const textEditor = document.getElementById('itineraryTextEditor');
    const locationsEditor = document.getElementById('itineraryLocationsEditor');
    const modal = document.getElementById('itineraryEditorModal');

    if (!textEditor || !locationsEditor) return;

    const newText = textEditor.value.trim();
    const newLocations = locationsEditor.value
        .split(',')
        .map(l => l.trim())
        .filter(l => l.length > 0);

    if (!newText) {
        showToast('行程描述不能為空');
        return;
    }

    // 保存到編輯狀態
    appState.editableItinerary.text = newText;
    appState.editableItinerary.locations = newLocations;
    appState.editableItinerary.isDirty = true;
    appState.editableItinerary.lastSavedAt = new Date().toISOString();

    // 記錄到歷史
    addToItineraryHistory({
        timestamp: new Date().toISOString(),
        action: '編輯',
        previousText: appState.lastGeneratedItinerary.text,
        newText: newText,
        previousLocations: appState.lastGeneratedItinerary.locations || [],
        newLocations: newLocations
    });

    // 隱藏模態框
    if (modal) modal.classList.add('hidden');
    setAppState('isEditingItinerary', false);

    // 更新 UI
    updateEditModeUI();
    updateEditedItineraryDisplay();
    showToast('✅ 行程已更新！');
}

/**
 * 放棄編輯，恢復原始行程
 */
export function revertItinerary() {
    const container = document.getElementById('suggestionContent');

    // 恢復到原始版本
    appState.editableItinerary.text = appState.editableItinerary.originalText;
    appState.editableItinerary.locations = [...appState.editableItinerary.originalLocations];
    appState.editableItinerary.isDirty = false;

    // 恢復 lastGeneratedItinerary
    appState.lastGeneratedItinerary.text = appState.editableItinerary.originalText;
    appState.lastGeneratedItinerary.locations = [...appState.editableItinerary.originalLocations];

    // 重新渲染行程
    try {
        renderItineraryWithDayTabs(appState.editableItinerary.originalText, appState.editableItinerary.originalLocations);
    } catch (err) {
        container.innerHTML = formatAsTimeline(appState.editableItinerary.originalText);
    }

    setAppState('isEditingItinerary', false);
    updateEditModeUI();
    showToast('✅ 已恢復原始行程');
}

/**
 * 將編輯後的行程應用並保存到 lastGeneratedItinerary
 */
export function commitEditedItinerary() {
    const container = document.getElementById('suggestionContent');

    if (!appState.editableItinerary.isDirty) {
        showToast('無未保存的變更');
        return;
    }

    // 應用編輯到 lastGeneratedItinerary
    appState.lastGeneratedItinerary.text = appState.editableItinerary.text;
    appState.lastGeneratedItinerary.locations = [...appState.editableItinerary.locations];
    appState.currentItineraryLocations = [...appState.editableItinerary.locations];

    // 重新渲染行程
    try {
        renderItineraryWithDayTabs(appState.editableItinerary.text, appState.editableItinerary.locations);
    } catch (err) {
        container.innerHTML = formatAsTimeline(appState.editableItinerary.text);
    }

    appState.editableItinerary.isDirty = false;
    appState.editableItinerary.lastSavedAt = new Date().toISOString();
    updateEditModeUI();
    showToast('💾 編輯已保存到行程！');
}

/**
 * 下載編輯後的行程
 */
export function downloadEditedItinerary() {
    const text = appState.editableItinerary.isDirty
        ? appState.editableItinerary.text
        : appState.lastGeneratedItinerary.text;

    if (!text) {
        showToast('無行程內容可下載');
        return;
    }

    const filename = `行程_${new Date().toISOString().slice(0, 10)}.txt`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`✅ 已下載：${filename}`);
}

/**
 * 取得行程修改歷史
 */
export function getItineraryHistory() {
    return appState.itineraryHistory || [];
}

/**
 * 添加到行程歷史
 */
function addToItineraryHistory(entry) {
    if (!appState.itineraryHistory) appState.itineraryHistory = [];
    appState.itineraryHistory.push(entry);
    // 限制歷史記錄到最近 20 條
    if (appState.itineraryHistory.length > 20) {
        appState.itineraryHistory.shift();
    }
}

/**
 * 更新編輯模式 UI
 */
function updateEditModeUI() {
    const editControls = document.getElementById('itineraryEditControls');
    const editBtn = document.getElementById('editItineraryBtn');
    const revertBtn = document.getElementById('revertItineraryBtn');
    const saveBtn = document.getElementById('saveItineraryBtn');
    const downloadBtn = document.getElementById('downloadEditedItineraryBtn');
    const statusIndicator = document.getElementById('editStatusIndicator');

    if (!editControls) return;

    // 如果有行程，顯示編輯控制面板
    if (appState.lastGeneratedItinerary && appState.lastGeneratedItinerary.text) {
        editControls.classList.remove('hidden');
    } else {
        editControls.classList.add('hidden');
        return;
    }

    if (appState.editableItinerary.isDirty) {
        // 編輯模式：顯示保存和取消按鈕
        if (editBtn) editBtn.classList.add('hidden');
        if (revertBtn) revertBtn.classList.remove('hidden');
        if (saveBtn) saveBtn.classList.remove('hidden');
        if (downloadBtn) downloadBtn.classList.remove('hidden');
        if (statusIndicator) {
            statusIndicator.classList.remove('hidden');
            statusIndicator.textContent = '✏️ 有未保存的變更';
        }
    } else {
        // 正常模式：顯示編輯按鈕
        if (editBtn) editBtn.classList.remove('hidden');
        if (revertBtn) revertBtn.classList.add('hidden');
        if (saveBtn) saveBtn.classList.add('hidden');
        if (downloadBtn) downloadBtn.classList.add('hidden');
        if (statusIndicator) statusIndicator.classList.add('hidden');
    }
}

/**
 * 更新編輯後行程的顯示
 */
function updateEditedItineraryDisplay() {
    const container = document.getElementById('suggestionContent');
    if (appState.editableItinerary.isDirty && container) {
        // 顯示編輯版本
        try {
            renderItineraryWithDayTabs(appState.editableItinerary.text, appState.editableItinerary.locations);
        } catch (err) {
            container.innerHTML = formatAsTimeline(appState.editableItinerary.text);
        }
    }
}

// 在這個文件中需要導出的函式也要加到 setupEventListeners 中

// Removed: Drag-and-drop itinerary reordering feature
// Users can use the "✨ 優化行程" (Optimize Itinerary) button for AI-powered route optimization

/**
 * Show feedback modal for itinerary satisfaction
 */
function showFeedbackModal() {
    let modal = document.getElementById('itineraryFeedbackModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'itineraryFeedbackModal';
        modal.className = 'modal feedback-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${t('feedback_title')}</h3>
                    <button class="modal-close" data-close-feedback-modal>&times;</button>
                </div>
                <div class="modal-body">
                    <p>${t('feedback_title')}</p>
                    <div class="feedback-options">
                        <label><input type="radio" name="feedbackType" data-feedback-type value="crowded"> ${t('feedback_type_crowded')}</label>
                        <label><input type="radio" name="feedbackType" data-feedback-type value="boring"> ${t('feedback_type_boring')}</label>
                        <label><input type="radio" name="feedbackType" data-feedback-type value="budget_exceeded"> ${t('feedback_type_budget')}</label>
                        <label><input type="radio" name="feedbackType" data-feedback-type value="too_long"> ${t('feedback_type_long')}</label>
                        <label><input type="radio" name="feedbackType" data-feedback-type value="not_enough"> ${t('feedback_type_short')}</label>
                    </div>
                    <textarea id="feedbackCommentText" class="feedback-text" placeholder="${t('feedback_comment_placeholder')}"></textarea>
                    <div class="modal-actions">
                        <button class="btn btn-primary" data-accept-feedback>${t('replan_itinerary_btn')}</button>
                        <button class="btn btn-secondary" data-close-feedback-modal>${t('close')}</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.classList.add('show');
}

/**
 * Close feedback modal
 */
function closeFeedbackModal() {
    const modal = document.getElementById('itineraryFeedbackModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

/**
 * Show improve itinerary modal with three options
 */
function showImproveItineraryModal() {
    let modal = document.getElementById('improveItineraryModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'improveItineraryModal';
        modal.className = 'modal improve-modal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h3>🔄 改進行程</h3>
                    <button class="modal-close" data-close-improve-modal>&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 20px; color: var(--text-secondary);">選擇您想要的改進方式：</p>
                    
                    <div class="improve-options" style="display: flex; flex-direction: column; gap: 12px;">
                        <button class="improve-option-btn" data-improve-mode="optimize" style="
                            padding: 16px; border: 2px solid var(--border-color); border-radius: 8px;
                            background: var(--card-bg); cursor: pointer; text-align: left;
                            transition: all 0.2s; display: flex; align-items: flex-start; gap: 12px;">
                            <span style="font-size: 24px;">⚡</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0;">只優化順序</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    保持景點不變，使用 TSP 演算法優化路線以減少移動時間
                                </p>
                            </div>
                        </button>

                        <button class="improve-option-btn" data-improve-mode="adjust" style="
                            padding: 16px; border: 2px solid var(--border-color); border-radius: 8px;
                            background: var(--card-bg); cursor: pointer; text-align: left;
                            transition: all 0.2s; display: flex; align-items: flex-start; gap: 12px;">
                            <span style="font-size: 24px;">🎯</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0;">調整景點內容</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    根據您的反饋替換或調整景點（太擁擠、太無聊、預算等）
                                </p>
                            </div>
                        </button>

                        <button class="improve-option-btn" data-improve-mode="regenerate" style="
                            padding: 16px; border: 2px solid var(--border-color); border-radius: 8px;
                            background: var(--card-bg); cursor: pointer; text-align: left;
                            transition: all 0.2s; display: flex; align-items: flex-start; gap: 12px;
                            opacity: 0.6;">
                            <span style="font-size: 24px;">🔄</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0;">完全重新規劃</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    重新生成全新的行程方案（即將推出）
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('[data-close-improve-modal]').addEventListener('click', closeImproveModal);

        modal.querySelectorAll('[data-improve-mode]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const mode = e.currentTarget.getAttribute('data-improve-mode');
                closeImproveModal();

                if (mode === 'optimize') {
                    await optimizeItinerary();
                } else if (mode === 'adjust') {
                    showFeedbackModal();
                } else if (mode === 'regenerate') {
                    showToast('完全重新規劃功能即將推出！');
                }
            });
        });

        // Hover effects
        modal.querySelectorAll('.improve-option-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.borderColor = 'var(--primary-color)';
                btn.style.transform = 'translateY(-2px)';
                btn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.borderColor = 'var(--border-color)';
                btn.style.transform = 'translateY(0)';
                btn.style.boxShadow = 'none';
            });
        });
    }
    modal.classList.add('show');
}

/**
 * Close improve itinerary modal
 */
function closeImproveModal() {
    const modal = document.getElementById('improveItineraryModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Import the improve itinerary button renderer from the dedicated module
import { renderImproveItineraryButton } from './improve-itinerary-ui.js';

// Keep old function for backward compatibility
export function renderItineraryFeedbackButton(container) {
    renderImproveItineraryButton(container);
}


// --- 翻譯輔助函式 ---

/**
 * 取得翻譯文本的簡便方法
 * @param {string} key - 翻譯鍵值
 * @param {string} lang - 語言代碼 (預設為 appState.currentLanguage)
 * @returns {string} 翻譯後的文本或原始鍵值
 */
export function t(key, lang = null) {
    const targetLang = lang || appState.currentLanguage || 'zh';
    if (translations[key] && translations[key][targetLang]) {
        return translations[key][targetLang];
    }
    // Fallback to Chinese if translation not found
    if (translations[key] && translations[key]['zh']) {
        return translations[key]['zh'];
    }
    return key; // Return key if no translation found
}

/**
 * 應用翻譯至特定元素
 * @param {HTMLElement} element - 目標元素
 * @param {string} key - 翻譯鍵值
 * @param {string} type - 'text' | 'placeholder' | 'title' 
 */
export function applyTranslationToElement(element, key, type = 'text') {
    const lang = appState.currentLanguage || 'zh';
    const text = t(key, lang);

    if (type === 'text') {
        element.textContent = text;
    } else if (type === 'placeholder') {
        element.placeholder = text;
    } else if (type === 'title') {
        element.title = text;
        element.setAttribute('aria-label', text);
    }
}

/**
 * 批量應用翻譯至多個元素
 * @param {Array} elements - [{id, key, type}] 
 */
export function applyTranslationsToElements(elements) {
    elements.forEach(({ id, key, type = 'text' }) => {
        const el = document.getElementById(id);
        if (el) applyTranslationToElement(el, key, type);
    });
}


// ============================================
// Enhanced UI - Collapsible Settings
// ============================================

// More Settings Toggle
const moreSettingsToggle = document.getElementById('moreSettingsToggle');
const moreSettingsContent = document.getElementById('moreSettingsContent');

if (moreSettingsToggle && moreSettingsContent) {
    // Load saved state from localStorage
    const savedState = localStorage.getItem('moreSettingsExpanded');
    if (savedState === 'true') {
        moreSettingsToggle.setAttribute('aria-expanded', 'true');
        moreSettingsContent.classList.add('expanded');
    }

    moreSettingsToggle.addEventListener('click', () => {
        const isExpanded = moreSettingsToggle.getAttribute('aria-expanded') === 'true';
        const newState = !isExpanded;

        moreSettingsToggle.setAttribute('aria-expanded', String(newState));

        if (newState) {
            moreSettingsContent.classList.add('expanded');
            // Smooth scroll to expanded content
            setTimeout(() => {
                moreSettingsContent.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 100);
        } else {
            moreSettingsContent.classList.remove('expanded');
        }

        // Save state
        localStorage.setItem('moreSettingsExpanded', String(newState));
    });
}

// Duration Type Toggle (Single Day vs Multi Day)
const durationTypeSelect = document.getElementById('durationTypeSelect');
const timeSettingsGroup = document.getElementById('timeSettingsGroup');
const multiDaySettingsGroup = document.getElementById('multiDaySettingsGroup');

if (durationTypeSelect && timeSettingsGroup && multiDaySettingsGroup) {
    durationTypeSelect.addEventListener('change', (e) => {
        if (e.target.value === 'single') {
            timeSettingsGroup.style.display = 'block';
            multiDaySettingsGroup.style.display = 'none';
        } else {
            timeSettingsGroup.style.display = 'none';
            multiDaySettingsGroup.style.display = 'block';
        }
    });

    // Initialize display state
    if (durationTypeSelect.value !== 'single') {
        timeSettingsGroup.style.display = 'none';
        multiDaySettingsGroup.style.display = 'block';
    }
}

// Smart Default Time
function setSmartDefaultTime() {
    const startTimeInput = document.getElementById('itineraryStartTime');
    const endTimeInput = document.getElementById('itineraryEndTime');

    if (!startTimeInput || !endTimeInput) return;

    // If already has value, don't override
    if (startTimeInput.value && endTimeInput.value) return;

    const hour = new Date().getHours();

    if (hour < 12) {
        // Morning: suggest 09:00 - 18:00
        startTimeInput.value = '09:00';
        endTimeInput.value = '18:00';
    } else if (hour < 18) {
        // Afternoon: suggest 14:00 - 21:00
        startTimeInput.value = '14:00';
        endTimeInput.value = '21:00';
    } else {
        // Evening: suggest tomorrow 09:00 - 18:00
        startTimeInput.value = '09:00';
        endTimeInput.value = '18:00';
    }
}

// Call smart default time on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setSmartDefaultTime);
} else {
    setSmartDefaultTime();
}

// 暴露函數給版本歷史模組使用
if (typeof window !== 'undefined') {
    window.renderItinerary = renderItineraryWithDayTabs;
    window.renderAIMap = renderAIMap;
    console.log('✅ UI functions exposed to window');
}
