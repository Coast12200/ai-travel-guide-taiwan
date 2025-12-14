/**
 * date-time.js
 * 日期時間處理工具模組
 * 
 * 提供日期格式化、時間計算等功能
 * 純函數，無外部依賴
 */

/**
 * 格式化相對時間（多久之前）
 * @param {string|Date} timestamp - 時間戳或 Date 對象
 * @returns {string} 格式化的相對時間
 */
export function formatRelativeTime(timestamp) {
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
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
    return formatDateTime(date);
}

/**
 * 格式化日期時間
 * @param {string|Date} date - 日期
 * @param {Object} options - 格式選項
 * @returns {string} 格式化的日期時間
 */
export function formatDateTime(date, options = {}) {
    const d = date instanceof Date ? date : new Date(date);

    const defaultOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        ...options
    };

    return d.toLocaleDateString('zh-TW', defaultOptions);
}

/**
 * 格式化日期（不含時間）
 * @param {string|Date} date - 日期
 * @returns {string} 格式化的日期
 */
export function formatDate(date) {
    const d = date instanceof Date ? date : new Date(date);

    return d.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

/**
 * 格式化時間（不含日期）
 * @param {string|Date} date - 日期
 * @returns {string} 格式化的時間
 */
export function formatTime(date) {
    const d = date instanceof Date ? date : new Date(date);

    return d.toLocaleTimeString('zh-TW', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

/**
 * 將時間字符串轉換為分鐘數
 * @param {string} timeStr - 時間字符串 (例如: "09:30")
 * @returns {number} 分鐘數
 */
export function timeToMinutes(timeStr) {
    if (!timeStr) return 0;

    const [hours, minutes] = timeStr.split(':').map(Number);
    return (hours || 0) * 60 + (minutes || 0);
}

/**
 * 將分鐘數轉換為時間字符串
 * @param {number} minutes - 分鐘數
 * @returns {string} 時間字符串 (例如: "09:30")
 */
export function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

/**
 * 計算兩個時間之間的持續時間
 * @param {string} startTime - 開始時間 (例如: "09:00")
 * @param {string} endTime - 結束時間 (例如: "17:00")
 * @returns {number} 持續時間（分鐘）
 */
export function calculateDuration(startTime, endTime) {
    const start = timeToMinutes(startTime);
    const end = timeToMinutes(endTime);

    if (end < start) {
        // 跨越午夜
        return (24 * 60 - start) + end;
    }

    return end - start;
}

/**
 * 格式化持續時間
 * @param {number} minutes - 分鐘數
 * @param {boolean} short - 是否使用簡短格式
 * @returns {string} 格式化的持續時間
 */
export function formatDuration(minutes, short = false) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (short) {
        if (hours > 0 && mins > 0) {
            return `${hours}h ${mins}m`;
        } else if (hours > 0) {
            return `${hours}h`;
        } else {
            return `${mins}m`;
        }
    }

    if (hours > 0 && mins > 0) {
        return `${hours} 小時 ${mins} 分鐘`;
    } else if (hours > 0) {
        return `${hours} 小時`;
    } else {
        return `${mins} 分鐘`;
    }
}

/**
 * 獲取日期範圍
 * @param {Date} startDate - 開始日期
 * @param {number} days - 天數
 * @returns {Array<Date>} 日期數組
 */
export function getDateRange(startDate, days) {
    const dates = [];
    const current = new Date(startDate);

    for (let i = 0; i < days; i++) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
}

/**
 * 檢查日期是否為今天
 * @param {string|Date} date - 日期
 * @returns {boolean} 是否為今天
 */
export function isToday(date) {
    const d = date instanceof Date ? date : new Date(date);
    const today = new Date();

    return d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();
}

/**
 * 檢查日期是否為週末
 * @param {string|Date} date - 日期
 * @returns {boolean} 是否為週末
 */
export function isWeekend(date) {
    const d = date instanceof Date ? date : new Date(date);
    const day = d.getDay();
    return day === 0 || day === 6;
}

/**
 * 獲取星期幾
 * @param {string|Date} date - 日期
 * @param {boolean} short - 是否使用簡短格式
 * @returns {string} 星期幾
 */
export function getDayOfWeek(date, short = false) {
    const d = date instanceof Date ? date : new Date(date);
    const days = short
        ? ['日', '一', '二', '三', '四', '五', '六']
        : ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

    return days[d.getDay()];
}

/**
 * 將 ISO 日期字符串轉換為 UTC 字符串（用於 ICS）
 * @param {Date} date - 日期對象
 * @returns {string} UTC 字符串 (YYYYMMDDTHHMMSSZ)
 */
export function toUTCString(date) {
    const pad = (n) => String(n).padStart(2, '0');

    return date.getUTCFullYear() +
        pad(date.getUTCMonth() + 1) +
        pad(date.getUTCDate()) +
        'T' +
        pad(date.getUTCHours()) +
        pad(date.getUTCMinutes()) +
        pad(date.getUTCSeconds()) +
        'Z';
}

/**
 * 解析時間範圍字符串
 * @param {string} rangeStr - 時間範圍字符串 (例如: "09:00-17:00")
 * @returns {{start: string, end: string}} 開始和結束時間
 */
export function parseTimeRange(rangeStr) {
    if (!rangeStr) return { start: '', end: '' };

    const parts = rangeStr.split('-').map(s => s.trim());
    return {
        start: parts[0] || '',
        end: parts[1] || ''
    };
}

/**
 * 添加天數到日期
 * @param {string|Date} date - 日期
 * @param {number} days - 要添加的天數
 * @returns {Date} 新日期
 */
export function addDays(date, days) {
    const d = date instanceof Date ? new Date(date) : new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

/**
 * 添加小時到日期
 * @param {string|Date} date - 日期
 * @param {number} hours - 要添加的小時數
 * @returns {Date} 新日期
 */
export function addHours(date, hours) {
    const d = date instanceof Date ? new Date(date) : new Date(date);
    d.setHours(d.getHours() + hours);
    return d;
}
