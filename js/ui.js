/**
 * ui.js
 * * 負責所有與使用者介面 (UI) 相關的 DOM 操作、事件處理和畫面更新。
 * 這是應用程式的視覺和互動核心。
 */
import { appState, destinationsByCountry, icons, offlineFallbackDestinations, translations, setAppState, getAppState, updateAppState } from './state.js';
import { verifyGeminiApi, verifyCwaApi, verifyTdxApi, fetchTdxScenicSpots, clearTdxCache } from './api.js';
import { initializeMap } from './map.js';
import { toggleHeatmap } from './map.js';
import { 
    generateDescription, generateItinerary, generateEnhancedContent, 
    generateTransportSuggestions, generateChecklist, generatePhotoSpots, 
    findNearbyTDXData, generateCurrencyConversion, generateTTS, downloadItineraryAsPDF
} from './itinerary.js';
import { optimizeItinerary } from './itinerary.js';
import { renderAIMap } from './map.js';

// --- 初始化函式 ---

export function initializeApp() {
    loadFavorites();
    applyTranslations();
    initializeCountryTabs();
    selectCountry('taiwan', document.querySelector('.country-tab'));
    setupAccordion();
    initializeTheme(); // 改為呼叫新的主題初始化函式
    // 初始化始終離線切換
    const alwaysOfflineEl = document.getElementById('alwaysOfflineToggle');
    if (alwaysOfflineEl) {
        alwaysOfflineEl.checked = getAppState('alwaysOffline');
        alwaysOfflineEl.addEventListener('change', (e) => {
            setAppState('alwaysOffline', e.target.checked);
            try { localStorage.setItem('alwaysOffline', e.target.checked ? 'true' : 'false'); } catch (err) {}
            // 重新渲染當前國家視圖以反映設定
            const activeTab = document.querySelector('.country-tab.active') || document.querySelector('.country-tab');
            if (activeTab) selectCountry(getAppState('currentCountry'), activeTab);
            // 顯示 toast
            showToast(e.target.checked ? (translations.always_offline_label[getAppState('currentLanguage')] || '始終離線模式') + ' ON' : (translations.always_offline_label[getAppState('currentLanguage')] || '始終離線模式') + ' OFF');
        });
    }
    // Launch onboarding if user hasn't completed it yet
    try {
        const onboarded = localStorage.getItem('onboarded');
        if (!onboarded) {
            // small delay so UI fully renders
            setTimeout(() => startOnboarding(), 450);
        }
    } catch (e) {}
}

// Onboarding flow
let _onboard = { stepIndex: 0, steps: [] };
export function startOnboarding() {
    const modal = document.getElementById('onboardingModal');
    const stepsContainer = document.getElementById('onboardSteps');
    const prevBtn = document.getElementById('onboardPrevBtn');
    const nextBtn = document.getElementById('onboardNextBtn');
    const closeBtn = document.getElementById('closeOnboardingBtn');
    if (!modal || !stepsContainer || !prevBtn || !nextBtn) return;

    _onboard.steps = [
        { title: 'Step 1: 輸入 API 金鑰', text: '請在上方填入您的 Gemini / CWA / TDX 等 API 金鑰，並點選驗證。', target: '#geminiApiKey' },
        { title: 'Step 2: 選擇國家', text: '選擇您要探索的國家（例如：台灣）。', target: '.country-tab[data-country-key="taiwan"]' },
        { title: 'Step 3: 設定偏好與團體資訊', text: '設定旅行風格與團體組成（人數、小孩或長者等），以利 AI 產出更貼近需求的行程。', target: '#itineraryPrefs' },
        { title: 'Step 4: 生成行程', text: '點選「晴天漫遊 / 雨天備案」等按鈕，讓 AI 為您規劃行程。', target: '#sunnyBtn' }
    ];

    function renderStep(index) {
        _onboard.stepIndex = index;
        const s = _onboard.steps[index];
        stepsContainer.innerHTML = `<div class="onboard-step"><h4>${s.title}</h4><p>${s.text}</p></div>`;
        // highlight target
        document.querySelectorAll('.onboard-highlight').forEach(el => el.classList.remove('onboard-highlight'));
        if (s.target) {
            const el = document.querySelector(s.target);
            if (el) el.classList.add('onboard-highlight');
        }
        prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
        nextBtn.textContent = index === _onboard.steps.length - 1 ? '完成' : '下一步';
    }

    prevBtn.onclick = () => renderStep(Math.max(0, _onboard.stepIndex - 1));
    nextBtn.onclick = () => {
        if (_onboard.stepIndex < _onboard.steps.length - 1) renderStep(_onboard.stepIndex + 1);
        else {
            // finish
            try { localStorage.setItem('onboarded', 'true'); } catch(e){}
            document.getElementById('onboardingModal').classList.add('hidden');
            document.querySelectorAll('.onboard-highlight').forEach(el => el.classList.remove('onboard-highlight'));
        }
    };
    closeBtn && (closeBtn.onclick = () => { modal.classList.add('hidden'); document.querySelectorAll('.onboard-highlight').forEach(el => el.classList.remove('onboard-highlight')); });

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    renderStep(0);
}

export function setupEventListeners() {
    // API 驗證
    document.getElementById('verifyGeminiBtn').addEventListener('click', verifyGeminiApi);
    document.getElementById('verifyCwaBtn').addEventListener('click', async () => {
        if (await verifyCwaApi()) {
            document.getElementById('weatherSuggestionPanel').classList.remove('hidden');
            updateWeatherDisplays();
        }
    });
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
                let start = sh + (sm/60);
                let end = eh + (em/60);
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
        return opts;
    };
    document.getElementById('sunnyBtn').addEventListener('click', () => generateItinerary('sunny', collectItineraryTimeOptions()));
    document.getElementById('rainyBtn').addEventListener('click', () => generateItinerary('rainy', collectItineraryTimeOptions()));
    document.getElementById('luckyBtn').addEventListener('click', () => generateItinerary('lucky', collectItineraryTimeOptions()));
    document.getElementById('multiDayBtn').addEventListener('click', () => generateItinerary('multi-day', collectItineraryTimeOptions()));
    document.getElementById('transportBtn').addEventListener('click', generateTransportSuggestions);
    document.getElementById('downloadPdfBtn').addEventListener('click', downloadItineraryAsPDF);
    const exportIcsBtn = document.getElementById('exportIcsBtn');
    if (exportIcsBtn) exportIcsBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.exportItineraryToICS()));
    const optimizeBtn = document.getElementById('optimizeItineraryBtn');
    if (optimizeBtn) optimizeBtn.addEventListener('click', optimizeItinerary);

    // 增強功能
    document.getElementById('checklistBtn').addEventListener('click', generateChecklist);
    document.getElementById('ttsBtn').addEventListener('click', generateTTS);
    document.getElementById('cuisineBtn').addEventListener('click', () => generateEnhancedContent('cuisine'));
    document.getElementById('findHotelBtn').addEventListener('click', () => findNearbyTDXData('Hotel'));
    const reviewBtn = document.getElementById('reviewSummaryBtn');
    if (reviewBtn) reviewBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.generateReviewSummary()));
    const souvenirBtn = document.getElementById('souvenirBtn');
    if (souvenirBtn) souvenirBtn.addEventListener('click', () => import('./itinerary.js').then(mod => mod.generateSouvenirList()));
    document.getElementById('currencyConverterToggleBtn').addEventListener('click', toggleCurrencyConverter);
    document.getElementById('convertCurrencyBtn').addEventListener('click', generateCurrencyConversion);
    document.getElementById('photoSpotBtn').addEventListener('click', generatePhotoSpots);
    // Budget estimator
    const estimateBtn = document.getElementById('estimateBudgetBtn');
    if (estimateBtn) {
        estimateBtn.addEventListener('click', () => {
            const days = Number(document.getElementById('tripDaysInput').value) || 1;
            const budget = document.getElementById('budgetLevelSelect').value || 'medium';
            // use prefs and current itinerary type (we'll pass 'multi-day' if that button was used)
            const prefs = document.getElementById('itineraryPrefs').value;
            // call generateBudgetEstimate from itinerary module
            import('./itinerary.js').then(mod => mod.generateBudgetEstimate(days, budget, prefs));
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
            try { localStorage.setItem('lang', newLang); } catch(e){}
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
            renderAIMap(window.appState.currentItineraryLocations).catch(()=>{});
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
                setTimeout(() => { target.classList.remove('quick-nav-highlight'); try { target.removeAttribute('tabindex'); } catch(e){} }, 1600);
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
    container.innerHTML = Object.keys(destinationsByCountry).map(key => {
        const country = destinationsByCountry[key];
        return `<div class="country-tab" data-country-key="${key}">${country.emoji} ${country.name}</div>`;
    }).join('');
}

// 重寫 selectCountry 以處理動態載入邏輯
function selectCountry(countryKey, element) {
    setAppState('currentCountry', countryKey);
    document.querySelectorAll('.country-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('weatherSuggestionPanel').classList.toggle('hidden', !(countryKey === 'taiwan' && getAppState('isCwaApiVerified')));
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
        const fetchPromises = allCities.map(city => fetchTdxScenicSpots(city));
        const results = await Promise.allSettled(fetchPromises);

        let allSpots = [];
        let usedLive = false;
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value && Array.isArray(result.value.data)) {
                allSpots.push(...result.value.data);
                if (result.value.source === 'live') usedLive = true;
                // if cache-stale, we'll still include
            } else {
                console.warn(`無法獲取城市資料: ${allCities[index]}`);
            }
        });

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
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            data: uniqueDestinations
        }));

    renderDestinationsAccordion(uniqueDestinations);
    showDataSourceBadge(usedLive ? (translations.data_source_live[appState.currentLanguage] || 'TDX 即時資料') : (translations.data_source_cache[appState.currentLanguage] || '快取資料'));

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
        errorBox.innerHTML = `<p>目前無法載入即時景點：${error.message}</p><button id="retry-fetch-btn" class="btn">重試</button>`;
        container.prepend(errorBox);
        document.getElementById('retry-fetch-btn').addEventListener('click', () => loadAndRenderDestinations(true));
    }
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

// 新增：根據地區渲染摺疊選單
function renderDestinationsAccordion(destinations) {
    const container = document.getElementById('destinations');

    if (!destinations || destinations.length === 0) {
        container.innerHTML = `<div class="status-error" style="text-align:center; padding: 20px;">目前無法載入該地區景點。</div>`;
        return;
    }

    const { regionMapping } = destinationsByCountry.taiwan;
    const groupedByRegion = Object.fromEntries(Object.keys(regionMapping).map(key => [key, []]));

    destinations.forEach(dest => {
        if (groupedByRegion[dest.region]) {
            groupedByRegion[dest.region].push(dest);
        }
    });

    // Build DOM using DocumentFragment to minimize reflows
    const frag = document.createDocumentFragment();
    let anyRegion = false;
    Object.entries(groupedByRegion).forEach(([region, spots]) => {
        if (!spots || spots.length === 0) return;
        anyRegion = true;

        const regionItem = document.createElement('div');
        regionItem.className = 'region-accordion-item';

        const headerBtn = document.createElement('button');
        headerBtn.className = 'region-accordion-header';
        headerBtn.type = 'button';
        headerBtn.textContent = `${region} (${spots.length})`;
        const iconSpan = document.createElement('span');
        iconSpan.className = 'accordion-icon';
        iconSpan.textContent = '+';
        headerBtn.appendChild(iconSpan);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'region-accordion-content';

        const grid = document.createElement('div');
        grid.className = 'destinations-grid';

        // Append cards to grid
        spots.forEach(spot => {
            grid.appendChild(createCardElement(spot));
        });

        contentDiv.appendChild(grid);
        regionItem.appendChild(headerBtn);
        regionItem.appendChild(contentDiv);
        frag.appendChild(regionItem);
    });

    // Clear and append once
    container.innerHTML = '';
    if (!anyRegion) {
        container.innerHTML = `<div style="text-align:center; padding: 20px; color: var(--light-text);">此地區暫無景點資料。</div>`;
        return;
    }
    container.appendChild(frag);

    // Attach header click handlers after DOM insertion
    container.querySelectorAll('.region-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.region-accordion-content');
            const icon = header.querySelector('.accordion-icon');

            if (item.classList.toggle('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            } else {
                content.style.maxHeight = null;
                icon.textContent = '+';
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
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const city = card.dataset.city.toLowerCase();
        const isVisible = name.includes(searchTerm) || city.includes(searchTerm);
        card.classList.toggle('hidden', !isVisible);
    });
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

// Toast notifications (small helper)
export function showToast(message, duration = 3000) {
    try {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);
        // force reflow to enable transition
        void toast.offsetWidth;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => { try { container.removeChild(toast); } catch(e){} }, 260);
        }, duration);
    } catch (err) { console.warn('Toast error', err); }
}

// Apply translations to DOM elements with data-i18n or data-i18n-placeholder
function applyTranslations() {
    const lang = appState.currentLanguage || 'zh';
    // elements with data-i18n attribute (text content)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) el.textContent = translations[key][lang];
    });

    // placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key] && translations[key][lang]) el.placeholder = translations[key][lang];
    });

    // update dynamic labels
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) langBtn.textContent = lang === 'zh' ? translations.language_label.en : translations.language_label.zh;

    // update theme button label
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggleBtn').textContent = isDark ? (translations.theme_day[lang] || '☀️ 日間模式') : (translations.theme_night[lang] || '🌙 夜間模式');

    // update favorites button
    const favBtn = document.getElementById('favoritesToggleBtn');
    if (favBtn) favBtn.textContent = translations.favorites[lang] || favBtn.textContent;

    // If destinations are rendered, re-render to apply translated favorite labels
    const currentDests = destinationsByCountry.taiwan.destinations || [];
    if (currentDests.length > 0) renderDestinationsAccordion(currentDests);
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

export function formatAsTimeline(markdownText) {
    let html = '';
    const lines = markdownText.split('\n');
    let inList = false;
    for(const line of lines) {
        if (line.startsWith('###') || line.startsWith('##') || line.startsWith('**')) {
            if (inList) html += '</ul>';
            inList = false;
            html += `<h3>${line.replace(/#|\*/g, '').trim()}</h3>`;
        } else if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += `<li>${line.replace(/[-*]/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').trim()}</li>`;
        } else if (line.trim()) {
             if (inList) html += '</ul>'; inList = false; html += `<p>${line.trim()}</p>`;
        }
    }
    if (inList) html += '</ul>';
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
            dayBoundaries.sort((a,b) => a-b);
        }
    }

    if (dayBoundaries.length === 0) {
        return [{ title: 'Day 1', content: markdownText }];
    }

    const days = [];
    for (let i = 0; i < dayBoundaries.length; i++) {
        const start = dayBoundaries[i];
        const end = i + 1 < dayBoundaries.length ? dayBoundaries[i+1] : lines.length;
        const titleLine = lines[start].trim();
        const content = lines.slice(start, end).join('\n');
        days.push({ title: titleLine || `Day ${i+1}`, content });
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
        // try to render map for entire itinerary
        if (overallLocations && overallLocations.length > 1) {
            try { renderAIMap(overallLocations); } catch (e) { /* ignore */ }
        }
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
        btn.textContent = d.title || `Day ${idx+1}`;
        btn.dataset.dayIndex = String(idx);
        btn.addEventListener('click', () => {
            // deactivate siblings
            tabBar.querySelectorAll('.day-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // render content
            contentEl.innerHTML = formatAsTimeline(d.content);
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
            }
        });
        tabBar.appendChild(btn);
    });

    // insert tabs above the content
    if (wrapper) wrapper.insertBefore(tabBar, contentEl);

    // Activate first tab
    const first = tabBar.querySelector('.day-tab');
    if (first) first.click();
}

