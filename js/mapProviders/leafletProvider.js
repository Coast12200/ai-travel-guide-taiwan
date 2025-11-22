/**
 * leafletProvider.js
 * Adapter implementing a small map provider interface using Leaflet + OSRM (LRM).
 * Exports: initializeMap(destination), renderAIMap(locationNames), geocodeLocation(name), removeMap()
 */
import { appState } from '../state.js';

// helper: build heat points from a list of destinations (expects coordinates array)
function buildHeatPointsFromDestinations(destinations) {
    const points = [];
    if (!destinations || !Array.isArray(destinations)) return points;
    destinations.forEach(d => {
        const coords = d.coordinates || d.Position && d.Position.PositionLat && d.Position.PositionLon ? [d.Position.PositionLat, d.Position.PositionLon] : null;
        if (coords && coords[0] && coords[1]) points.push([coords[0], coords[1], 0.7]);
    });
    return points;
}

export async function initializeMap(destination) {
    if (appState.map) {
        try { appState.map.remove(); } catch (e) { console.warn('remove map error', e); }
    }
    appState.map = L.map('map').setView(destination.coordinates, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(appState.map);
    const m = L.marker(destination.coordinates).addTo(appState.map).bindPopup(`<b>${destination.name}</b>`).openPopup();
    // ensure marker map exists and register this marker by name for hover interactions
    try { appState.mapMarkers = appState.mapMarkers || {}; if (destination.name) appState.mapMarkers[destination.name] = m; } catch(e) { console.warn('mapMarkers error', e); }

    if (appState.aiRouteLayer) {
        try { appState.map.removeLayer(appState.aiRouteLayer); } catch (e) {}
        appState.aiRouteLayer = null;
    }
}

export async function renderAIMap(locationNames) {
    if (!appState.map) {
        document.getElementById('contentArea').classList.remove('hidden');
        await initializeMap({ name: '台灣', coordinates: [23.97, 120.97] });
        appState.map.setView([23.97, 120.97], 7);
    }

    if (appState.aiRouteLayer) {
        try { appState.map.removeLayer(appState.aiRouteLayer); } catch(e){}
        appState.aiRouteLayer = null;
    }

    const geocodePromises = locationNames.map(geocodeLocation);
    const locationsWithCoords = (await Promise.all(geocodePromises))
        .map((coords, index) => ({ name: locationNames[index], ...coords }))
        .filter(loc => loc && loc.lat && loc.lon);

    if (locationsWithCoords.length === 0) return;
    // clear previous mapMarkers map and create new markers mapping by name
    appState.mapMarkers = appState.mapMarkers || {};
    const markers = locationsWithCoords.map(loc => {
        const mk = L.marker([loc.lat, loc.lon]).bindPopup(`<b>${loc.name}</b>`);
        try { if (loc.name) appState.mapMarkers[loc.name] = mk; } catch(e) {}
        return mk;
    });
    const latLngs = locationsWithCoords.map(loc => [loc.lat, loc.lon]);

    appState.aiRouteLayer = L.layerGroup(markers).addTo(appState.map);

    // helper: ensure each marker has a reference to its element after added
    setTimeout(() => {
        Object.values(appState.mapMarkers || {}).forEach(marker => {
            try { marker._icon && (marker._icon.dataset && (marker._icon.dataset.markerName = marker.getPopup ? (marker.getPopup().getContent() || '') : '')); } catch(e) {}
        });
    }, 200);

    if (latLngs.length > 1 && typeof L.Routing !== 'undefined') {
        const modeEl = document.getElementById('routeModeSelect');
        let profile = 'driving';
        if (modeEl) {
            const val = modeEl.value;
            if (val === 'walking') profile = 'foot';
            else if (val === 'cycling') profile = 'bike';
            else profile = 'driving';
        }

        try {
            const router = L.Routing.osrmv1({ serviceUrl: `https://router.project-osrm.org/route/v1`, profile: profile });
            const waypoints = locationsWithCoords.map(loc => L.latLng(loc.lat, loc.lon));
            const control = L.Routing.control({
                waypoints: waypoints,
                router: router,
                fitSelectedRoutes: true,
                show: false,
                addWaypoints: false,
                createMarker: function(i, wp) { return L.marker(wp.latLng).bindPopup(`<b>${locationsWithCoords[i].name}</b>`); }
            }).addTo(appState.map);

            // Some LRM controls don't expose a layer; keep reference to control
            appState.aiRouteControl = control;
            // Try to attach control's container to the layer group for cleanup
            if (control.getContainer && appState.aiRouteLayer && appState.aiRouteLayer.addLayer) {
                try { appState.aiRouteLayer.addLayer(control.getContainer ? control.getContainer() : L.layerGroup()); } catch (e) {}
            }
        } catch (err) {
            console.warn('Routing failed, falling back to polyline', err);
            appState.aiRouteLayer.addLayer(L.polyline(latLngs, { color: 'var(--sun-orange)', weight: 5 }));
        }
        appState.map.fitBounds(L.latLngBounds(latLngs), { padding: [50, 50] });
    } else {
        if (latLngs.length > 1) appState.aiRouteLayer.addLayer(L.polyline(latLngs, { color: 'var(--sun-orange)', weight: 5 }));
        appState.map.fitBounds(L.latLngBounds(latLngs), { padding: [50, 50] });
    }
}

// Heatmap control: toggle heat layer showing density of scenic spots
export async function toggleHeatmap(show) {
    // ensure map exists
    if (!appState.map) {
        await initializeMap({ name: '台灣', coordinates: [23.97, 120.97] });
        appState.map.setView([23.97, 120.97], 7);
    }

    // remove existing heat layer if present
    if (appState.heatLayer) {
        try { appState.map.removeLayer(appState.heatLayer); } catch (e) {}
        appState.heatLayer = null;
    }

    if (!show) return;

    // try to obtain scenic spots from cache first, else build from current destinations
    let spots = null;
    try {
        const raw = localStorage.getItem('tdx-scenic-spots-taiwan');
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.data)) spots = parsed.data;
        }
    } catch (e) { /* ignore parse errors */ }

    let heatPoints = [];
    if (spots && spots.length) {
        heatPoints = spots
            .filter(s => s.Position && s.Position.PositionLat && s.Position.PositionLon)
            .map(s => [s.Position.PositionLat, s.Position.PositionLon, 0.6]);
    } else if (appState.map && appState.mapMarkers) {
        // build from currently loaded destinations stored in mapMarkers
        const markers = Object.values(appState.mapMarkers || {});
        heatPoints = markers.map(m => {
            try {
                const latlng = m.getLatLng && m.getLatLng();
                if (latlng) return [latlng.lat, latlng.lng, 0.6];
            } catch (e) {}
            return null;
        }).filter(Boolean);
    }

    if (heatPoints.length === 0) return;

    try {
        // create heat layer using leaflet.heat (expects array of [lat, lng, intensity])
        appState.heatLayer = L.heatLayer(heatPoints, { radius: 25, blur: 15, maxZoom: 12 }).addTo(appState.map);
    } catch (e) {
        console.warn('Failed to create heat layer', e);
    }
}

// Highlight a marker by its linked name: increase z-index and scale via its DOM element
export function highlightMarker(name) {
    if (!appState.mapMarkers || !name) return;
    const marker = appState.mapMarkers[name];
    if (!marker) return;
    try {
        const el = marker.getElement && marker.getElement();
        if (el) {
            el.style.transition = 'transform 0.12s ease, box-shadow 0.12s ease';
            el.style.transform = 'scale(1.35)';
            el.style.zIndex = 9999;
            el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
        }
        marker.setZIndexOffset && marker.setZIndexOffset(1000);
        // open popup gently
        try { marker.openPopup(); } catch(e) {}
    } catch (e) { console.warn('highlightMarker error', e); }
}

export function resetMarker(name) {
    if (!appState.mapMarkers || !name) return;
    const marker = appState.mapMarkers[name];
    if (!marker) return;
    try {
        const el = marker.getElement && marker.getElement();
        if (el) {
            el.style.transform = '';
            el.style.zIndex = '';
            el.style.boxShadow = '';
        }
        marker.setZIndexOffset && marker.setZIndexOffset(0);
        try { marker.closePopup(); } catch(e) {}
    } catch (e) { console.warn('resetMarker error', e); }
}

export async function geocodeLocation(locationName) {
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

export function removeMap() {
    if (appState.map) {
        try { appState.map.remove(); } catch (e) { console.warn('remove map error', e); }
        appState.map = null;
    }
}

export default {
    initializeMap,
    renderAIMap,
    geocodeLocation,
    removeMap
};
