/**
 * version-history.js
 * 行程歷史版本管理模組
 */

import { appState } from './state.js';

/**
 * 保存當前行程為新版本
 * @param {string} type - 版本類型：'generate' | 'optimize' | 'feedback'
 */
export function saveItineraryVersion(type = 'generate') {
    // 使用 lastGeneratedItinerary 而不是 currentItinerary
    const itineraryText = appState.lastGeneratedItinerary?.text || appState.currentItinerary;

    if (!itineraryText) {
        console.warn('No current itinerary to save');
        return;
    }

    const version = {
        id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString(),
        type: type,
        title: extractItineraryTitle(itineraryText),
        summary: generateSummary(),
        data: {
            itinerary: itineraryText,
            locations: appState.currentItineraryLocations ? [...appState.currentItineraryLocations] : [],
            preferences: appState.userPreferences ? { ...appState.userPreferences } : {}
        },
        thumbnail: generateThumbnail()
    };

    // 添加到歷史記錄開頭
    if (!appState.itineraryHistory) {
        appState.itineraryHistory = [];
    }
    appState.itineraryHistory.unshift(version);

    // 限制最大數量
    const maxLength = appState.maxHistoryLength || 5;
    if (appState.itineraryHistory.length > maxLength) {
        appState.itineraryHistory = appState.itineraryHistory.slice(0, maxLength);
    }

    // 保存到 LocalStorage
    try {
        localStorage.setItem('travelGuideState', JSON.stringify({
            itineraryHistory: appState.itineraryHistory
        }));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }

    updateHistoryBadge();

    console.log(`Saved itinerary version: ${version.id} (${type})`);
}

/**
 * 載入指定版本
 * @param {string} versionId - 版本 ID
 * @returns {boolean} 是否成功載入
 */
export function loadItineraryVersion(versionId) {
    const version = appState.itineraryHistory?.find(v => v.id === versionId);
    if (!version) {
        console.error('Version not found:', versionId);
        return false;
    }

    try {
        // 恢復數據
        const itineraryText = version.data.itinerary;
        appState.lastGeneratedItinerary = {
            text: itineraryText,
            locations: [...version.data.locations]
        };
        appState.currentItinerary = itineraryText;
        appState.currentItineraryLocations = [...version.data.locations];
        if (version.data.preferences) {
            appState.userPreferences = { ...version.data.preferences };
        }

        // 重新渲染 UI（需要從 ui.js 導入）
        if (window.renderItinerary) {
            window.renderItinerary(itineraryText, version.data.locations);
        }
        if (window.renderAIMap && appState.currentItineraryLocations.length > 0) {
            window.renderAIMap(appState.currentItineraryLocations);
        }

        console.log(`Loaded itinerary version: ${versionId}`);
        return true;
    } catch (error) {
        console.error('Error loading version:', error);
        return false;
    }
}

/**
 * 刪除指定版本
 * @param {string} versionId - 版本 ID
 * @returns {boolean} 是否成功刪除
 */
export function deleteItineraryVersion(versionId) {
    if (!appState.itineraryHistory) return false;

    const index = appState.itineraryHistory.findIndex(v => v.id === versionId);
    if (index === -1) return false;

    appState.itineraryHistory.splice(index, 1);

    // 保存到 LocalStorage
    try {
        localStorage.setItem('travelGuideState', JSON.stringify({
            itineraryHistory: appState.itineraryHistory
        }));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }

    updateHistoryBadge();

    console.log(`Deleted itinerary version: ${versionId}`);
    return true;
}

/**
 * 獲取所有歷史版本
 * @returns {Array} 版本列表
 */
export function getItineraryHistory() {
    return appState.itineraryHistory || [];
}

/**
 * 清空所有歷史版本
 */
export function clearItineraryHistory() {
    appState.itineraryHistory = [];

    // 保存到 LocalStorage
    try {
        localStorage.setItem('travelGuideState', JSON.stringify({
            itineraryHistory: appState.itineraryHistory
        }));
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
    }

    updateHistoryBadge();
}

/**
 * 提取行程標題
 * @param {string} itinerary - 行程文本
 * @returns {string} 標題
 */
function extractItineraryTitle(itinerary) {
    if (!itinerary) return '未命名行程';

    // 嘗試從 Markdown 中提取第一個標題
    const lines = itinerary.split('\n');
    for (const line of lines) {
        const match = line.match(/^#\s+(.+)/);
        if (match) {
            return match[1].trim();
        }
    }

    // 如果沒有標題，使用前 30 個字符
    const firstLine = lines.find(l => l.trim().length > 0);
    if (firstLine) {
        return firstLine.substring(0, 30) + (firstLine.length > 30 ? '...' : '');
    }

    return '未命名行程';
}

/**
 * 生成行程摘要
 * @returns {string} 摘要
 */
function generateSummary() {
    const parts = [];

    if (appState.userPreferences?.style) {
        parts.push(appState.userPreferences.style);
    }
    if (appState.userPreferences?.group) {
        parts.push(appState.userPreferences.group);
    }
    if (appState.userPreferences?.budget) {
        parts.push(`預算 ${appState.userPreferences.budget} 元`);
    }

    return parts.length > 0 ? parts.join('，') : '自訂行程';
}

/**
 * 生成版本縮圖數據
 * @returns {Object} 縮圖數據
 */
function generateThumbnail() {
    const locations = appState.currentItineraryLocations || [];
    const days = appState.userPreferences?.days || extractDaysFromItinerary();

    return {
        destinations: locations.slice(0, 3),
        totalDestinations: locations.length,
        days: days,
        budget: appState.userPreferences?.budget || 0
    };
}

/**
 * 從行程文本中提取天數
 * @returns {number} 天數
 */
function extractDaysFromItinerary() {
    if (!appState.currentItinerary) return 0;

    const dayMatches = appState.currentItinerary.match(/Day \d+|第\s*\d+\s*天/gi);
    return dayMatches ? dayMatches.length : 0;
}

/**
 * 更新歷史版本徽章數字
 */
function updateHistoryBadge() {
    const badge = document.querySelector('.btn-history .badge');
    if (badge && appState.itineraryHistory) {
        badge.textContent = appState.itineraryHistory.length;
        badge.style.display = appState.itineraryHistory.length > 0 ? 'inline-block' : 'none';
    }
}

/**
 * 格式化時間顯示
 * @param {string} timestamp - ISO 時間戳
 * @returns {string} 格式化的時間
 */
export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    // 小於 1 分鐘
    if (diff < 60000) {
        return '剛剛';
    }
    // 小於 1 小時
    if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000);
        return `${minutes} 分鐘前`;
    }
    // 小於 24 小時
    if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000);
        return `${hours} 小時前`;
    }
    // 小於 7 天
    if (diff < 604800000) {
        const days = Math.floor(diff / 86400000);
        return `${days} 天前`;
    }

    // 超過 7 天，顯示完整日期
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * 獲取版本類型標籤
 * @param {string} type - 版本類型
 * @returns {string} 標籤文字
 */
export function getTypeLabel(type) {
    const labels = {
        'generate': '🎯 生成',
        'optimize': '⚡ 優化',
        'feedback': '💬 調整'
    };
    return labels[type] || '📝 其他';
}
