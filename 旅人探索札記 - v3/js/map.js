/**
 * map.js
 * * 專門處理 Leaflet 地圖的初始化、標記和路線繪製。
 */
import { appState } from './state.js';

/**
 * 初始化地圖或更新視圖到選定的景點。
 * @param {object} destination - 包含景點名稱和座標的物件。
 */
export function initializeMap(destination) {
    if (appState.map) {
        appState.map.remove();
    }
    appState.map = L.map('map').setView(destination.coordinates, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(appState.map);
    L.marker(destination.coordinates).addTo(appState.map).bindPopup(`<b>${destination.name}</b>`).openPopup();
    
    // 清除舊的 AI 路線
    if (appState.aiRouteLayer) {
        appState.map.removeLayer(appState.aiRouteLayer);
        appState.aiRouteLayer = null;
    }
}

/**
 * 根據 AI 生成的地點列表，在地圖上繪製標記和路線。
 * @param {string[]} locationNames - 地點名稱的陣列。
 */
export async function renderAIMap(locationNames) {
    if (!appState.map) {
        document.getElementById('contentArea').classList.remove('hidden');
        initializeMap({ name: "台灣", coordinates: [23.97, 120.97] });
        appState.map.setView([23.97, 120.97], 7);
    }

    if (appState.aiRouteLayer) appState.map.removeLayer(appState.aiRouteLayer);
    
    const geocodePromises = locationNames.map(geocodeLocation);
    const locationsWithCoords = (await Promise.all(geocodePromises))
        .map((coords, index) => ({ name: locationNames[index], ...coords }))
        .filter(loc => loc.lat && loc.lon);

    if (locationsWithCoords.length === 0) return;

    const markers = locationsWithCoords.map(loc => L.marker([loc.lat, loc.lon]).bindPopup(`<b>${loc.name}</b>`));
    const latLngs = locationsWithCoords.map(loc => [loc.lat, loc.lon]);
    
    appState.aiRouteLayer = L.layerGroup(markers);
    if (latLngs.length > 1) {
        appState.aiRouteLayer.addLayer(L.polyline(latLngs, { color: 'var(--sun-orange)', weight: 5 }));
    }
    appState.aiRouteLayer.addTo(appState.map);
    appState.map.fitBounds(L.latLngBounds(latLngs), { padding: [50, 50] });
}

/**
 * 使用 Nominatim API 將地點名稱轉換為經緯度。
 * @param {string} locationName - 要地理編碼的地點名稱。
 * @returns {Promise<object|null>} - 包含 lat 和 lon 的物件，或在失敗時返回 null。
 */
async function geocodeLocation(locationName) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1&countrycodes=tw`);
        if (!response.ok) return null;
        const data = await response.json();
        return (data && data.length > 0) ? { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) } : null;
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
}
