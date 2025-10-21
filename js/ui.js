/**
 * ui.js
 * * 負責所有與使用者介面 (UI) 相關的 DOM 操作、事件處理和畫面更新。
 * 這是應用程式的視覺和互動核心。
 */
import { appState, destinationsByCountry, icons } from './state.js';
import { verifyGeminiApi, verifyCwaApi, verifyTdxApi, fetchTdxScenicSpots } from './api.js';
import { initializeMap } from './map.js';
import { 
    generateDescription, generateItinerary, generateEnhancedContent, 
    generateTransportSuggestions, generateChecklist, generatePhotoSpots, 
    findNearbyTDXData, generateCurrencyConversion, generateTTS, downloadItineraryAsPDF
} from './itinerary.js';

// --- 初始化函式 ---

export function initializeApp() {
    loadFavorites();
    initializeCountryTabs();
    selectCountry('taiwan', document.querySelector('.country-tab'));
    setupAccordion();
    initializeTheme(); // 改為呼叫新的主題初始化函式
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
        await verifyTdxApi();
        if (appState.isTdxApiVerified && appState.currentCountry === 'taiwan') {
            loadAndRenderDestinations();
        }
    });

    // 搜尋與國家選擇
    document.getElementById('destinationSearch').addEventListener('input', handleSearch);
    document.getElementById('countryTabs').addEventListener('click', (e) => {
        if (e.target.classList.contains('country-tab')) {
            const countryKey = e.target.dataset.countryKey;
            selectCountry(countryKey, e.target);
        }
    });

    // 景點卡片互動 (事件委派)
    document.getElementById('destinations').addEventListener('click', (e) => {
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

    // 行程規劃
    document.getElementById('sunnyBtn').addEventListener('click', () => generateItinerary('sunny'));
    document.getElementById('rainyBtn').addEventListener('click', () => generateItinerary('rainy'));
    document.getElementById('luckyBtn').addEventListener('click', () => generateItinerary('lucky'));
    document.getElementById('multiDayBtn').addEventListener('click', () => generateItinerary('multi-day'));
    document.getElementById('transportBtn').addEventListener('click', generateTransportSuggestions);
    document.getElementById('downloadPdfBtn').addEventListener('click', downloadItineraryAsPDF);

    // 增強功能
    document.getElementById('checklistBtn').addEventListener('click', generateChecklist);
    document.getElementById('ttsBtn').addEventListener('click', generateTTS);
    document.getElementById('cuisineBtn').addEventListener('click', () => generateEnhancedContent('cuisine'));
    document.getElementById('findHotelBtn').addEventListener('click', () => findNearbyTDXData('Hotel'));
    document.getElementById('currencyConverterToggleBtn').addEventListener('click', toggleCurrencyConverter);
    document.getElementById('convertCurrencyBtn').addEventListener('click', generateCurrencyConversion);
    document.getElementById('photoSpotBtn').addEventListener('click', generatePhotoSpots);
    
    // 收藏夾 Modal
    document.getElementById('favoritesToggleBtn').addEventListener('click', toggleFavoritesModal);
    document.getElementById('closeFavoritesModalBtn').addEventListener('click', toggleFavoritesModal);
    document.getElementById('favoritesModal').addEventListener('click', (e) => {
        if (e.target.id === 'favoritesModal') toggleFavoritesModal();
    });

    // 其他 UI
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);
    window.addEventListener('resize', setupAccordion);
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
    appState.currentCountry = countryKey;
    document.querySelectorAll('.country-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('weatherSuggestionPanel').classList.toggle('hidden', !(countryKey === 'taiwan' && appState.isCwaApiVerified));
    document.getElementById('contentArea').classList.add('hidden');
    document.getElementById('destinationSearch').value = '';

    if (countryKey === 'taiwan') {
        if (appState.isTdxApiVerified) {
            loadAndRenderDestinations();
        } else {
            const container = document.getElementById('destinations');
            container.innerHTML = `<div class="status-error" style="text-align:center; padding: 20px;">請先在上方「API 金鑰設定」區塊驗證 TDX API，才能載入台灣景點。</div>`;
        }
    } else {
        // 為其他國家（若未來有）清空景點區
        document.getElementById('destinations').innerHTML = `<div style="text-align:center; padding: 20px; color: var(--light-text);">此地區暫無景點資料。</div>`;
    }
}

// 新增：主函式，用於載入、快取和渲染景點
async function loadAndRenderDestinations() {
    const container = document.getElementById('destinations');
    const countryData = destinationsByCountry.taiwan;
    const cacheKey = 'tdx-scenic-spots-taiwan';
    const cacheDuration = 1000 * 60 * 60 * 24; // 24 小時

    container.innerHTML = `<div class="loading"><div class="spinner"></div>正在從 TDX 載入台灣景點資料...</div>`;

    // 1. 檢查快取
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheDuration) {
            console.log("從快取載入景點資料。");
            countryData.destinations = data;
            renderDestinationsAccordion(data);
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
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && Array.isArray(result.value)) {
                allSpots.push(...result.value);
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

        const uniqueDestinations = Array.from(new Map(mappedDestinations.map(item => [item.id, item])).values());
        
        countryData.destinations = uniqueDestinations;
        
        // 4. 寫入快取
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            data: uniqueDestinations
        }));

        renderDestinationsAccordion(uniqueDestinations);

    } catch (error) {
        console.error("載入與渲染景點失敗:", error);
        container.innerHTML = `<div class="status-error" style="text-align:center; padding: 20px;">
            <p>目前無法載入景點：${error.message}</p>
            <button id="retry-fetch-btn" class="btn">重試</button>
        </div>`;
        document.getElementById('retry-fetch-btn').addEventListener('click', loadAndRenderDestinations);
    }
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

    const accordionHTML = Object.entries(groupedByRegion)
        .filter(([, spots]) => spots.length > 0)
        .map(([region, spots]) => `
            <div class="region-accordion-item">
                <button class="region-accordion-header">
                    ${region} (${spots.length})
                    <span class="accordion-icon">+</span>
                </button>
                <div class="region-accordion-content">
                    <div class="destinations-grid">${spots.map(createCardHTML).join('')}</div>
                </div>
            </div>
        `).join('');
    
    container.innerHTML = accordionHTML || `<div style="text-align:center; padding: 20px; color: var(--light-text);">此地區暫無景點資料。</div>`;
    
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
function createCardHTML(dest) {
    const isFavorited = appState.favorites.includes(dest.id);
    const favText = isFavorited ? '★ 已收藏' : '⭐ 收藏';
    const favClass = isFavorited ? 'favorited' : '';

    const pictureHTML = dest.picture
        ? `<div class="card-picture" style="background-image: url('${dest.picture}')"></div>`
        : `<div class="card-icon-fallback">${icons.mountain || '📍'}</div>`;

    return `
        <div class="destination-card" data-id="${dest.id}" data-name="${dest.name}" data-city="${dest.city}">
            ${pictureHTML}
            <div class="card-content-wrapper">
                <button class="favorite-btn ${favClass}">${favText}</button>
                <h4>${dest.name}</h4>
                <div class="destination-card-content">
                   <p>${dest.description}</p>
                   <div class="weather-info" id="weather-${dest.id}">--</div>
                </div>
            </div>
        </div>`;
}

function selectDestination(destinationId) {
    appState.currentDestination = destinationsByCountry[appState.currentCountry].destinations.find(d => d.id === destinationId);
    if (!appState.currentDestination) return;

    // 更新卡片選中狀態
    document.querySelectorAll('.destination-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`.destination-card[data-id="${destinationId}"]`).classList.add('selected');

    const contentArea = document.getElementById('contentArea');
    contentArea.classList.remove('hidden');
    contentArea.querySelectorAll('.panel').forEach(p => { p.classList.remove('fade-in'); void p.offsetWidth; p.classList.add('fade-in'); });
    
    document.getElementById('selectedDestinationName').textContent = appState.currentDestination.name;
    window.scrollTo({ top: contentArea.offsetTop - 20, behavior: 'smooth' });
    
    initializeMap(appState.currentDestination);
    
    document.getElementById('imageGallery').innerHTML = '';
    document.getElementById('aiEnhancedContent').classList.add('hidden');
    document.getElementById('aiPhotoSpotContent').classList.add('hidden');
    
    if (appState.isGeminiApiVerified) {
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
    document.getElementById('themeToggleBtn').innerHTML = isDark ? '☀️ 日間模式' : '🌙 夜間模式';
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
        buttonElement.textContent = '⭐ 收藏';
        buttonElement.classList.remove('favorited');
    } else {
        appState.favorites.push(destinationId); // 加入收藏
        buttonElement.textContent = '★ 已收藏';
        buttonElement.classList.add('favorited');
    }
    localStorage.setItem('favoriteDestinations', JSON.stringify(appState.favorites));
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

