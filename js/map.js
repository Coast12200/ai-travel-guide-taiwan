/**
 * map.js
 * Compatibility layer that delegates map operations to a pluggable provider.
 * The default provider is the Leaflet adapter in ./mapProviders/leafletProvider.js
 */
import provider from './mapProviders/leafletProvider.js';

export const initializeMap = provider.initializeMap;
export const renderAIMap = provider.renderAIMap;
export const geocodeLocation = provider.geocodeLocation;
export const removeMap = provider.removeMap;
export const highlightMarker = provider.highlightMarker;
export const resetMarker = provider.resetMarker;
export const toggleHeatmap = provider.toggleHeatmap || (async () => {});
