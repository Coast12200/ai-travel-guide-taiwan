/**
 * validators.js
 * 輸入驗證工具模組
 * 
 * 提供各種輸入驗證功能
 * 純函數，無外部依賴
 */

/**
 * 驗證 API Key 格式
 * @param {string} apiKey - API Key
 * @param {Object} options - 驗證選項
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateApiKey(apiKey, options = {}) {
    const {
        minLength = 10,
        maxLength = 200,
        allowEmpty = false
    } = options;

    if (!apiKey || apiKey.trim() === '') {
        return {
            valid: allowEmpty,
            error: allowEmpty ? '' : 'API Key 不能為空'
        };
    }

    const trimmed = apiKey.trim();

    if (trimmed.length < minLength) {
        return {
            valid: false,
            error: `API Key 長度不能少於 ${minLength} 個字符`
        };
    }

    if (trimmed.length > maxLength) {
        return {
            valid: false,
            error: `API Key 長度不能超過 ${maxLength} 個字符`
        };
    }

    // 檢查是否包含非法字符（基本檢查）
    if (!/^[a-zA-Z0-9_\-]+$/.test(trimmed)) {
        return {
            valid: false,
            error: 'API Key 包含非法字符'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證電子郵件格式
 * @param {string} email - 電子郵件地址
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateEmail(email) {
    if (!email || email.trim() === '') {
        return {
            valid: false,
            error: '電子郵件不能為空'
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
        return {
            valid: false,
            error: '電子郵件格式不正確'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證 URL 格式
 * @param {string} url - URL
 * @param {Object} options - 驗證選項
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateUrl(url, options = {}) {
    const { allowEmpty = false, requireHttps = false } = options;

    if (!url || url.trim() === '') {
        return {
            valid: allowEmpty,
            error: allowEmpty ? '' : 'URL 不能為空'
        };
    }

    try {
        const urlObj = new URL(url);

        if (requireHttps && urlObj.protocol !== 'https:') {
            return {
                valid: false,
                error: 'URL 必須使用 HTTPS 協議'
            };
        }

        return { valid: true, error: '' };
    } catch (e) {
        return {
            valid: false,
            error: 'URL 格式不正確'
        };
    }
}

/**
 * 驗證數字範圍
 * @param {number} value - 數值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateNumberRange(value, min, max) {
    if (typeof value !== 'number' || isNaN(value)) {
        return {
            valid: false,
            error: '必須是有效的數字'
        };
    }

    if (value < min) {
        return {
            valid: false,
            error: `數值不能小於 ${min}`
        };
    }

    if (value > max) {
        return {
            valid: false,
            error: `數值不能大於 ${max}`
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證字符串長度
 * @param {string} str - 字符串
 * @param {number} min - 最小長度
 * @param {number} max - 最大長度
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateStringLength(str, min, max) {
    if (typeof str !== 'string') {
        return {
            valid: false,
            error: '必須是字符串'
        };
    }

    const length = str.trim().length;

    if (length < min) {
        return {
            valid: false,
            error: `長度不能少於 ${min} 個字符`
        };
    }

    if (length > max) {
        return {
            valid: false,
            error: `長度不能超過 ${max} 個字符`
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證日期格式
 * @param {string} dateStr - 日期字符串
 * @param {string} format - 期望的格式 ('YYYY-MM-DD', 'MM/DD/YYYY' 等)
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateDate(dateStr, format = 'YYYY-MM-DD') {
    if (!dateStr || dateStr.trim() === '') {
        return {
            valid: false,
            error: '日期不能為空'
        };
    }

    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
        return {
            valid: false,
            error: '日期格式不正確'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證時間格式 (HH:MM)
 * @param {string} timeStr - 時間字符串
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateTime(timeStr) {
    if (!timeStr || timeStr.trim() === '') {
        return {
            valid: false,
            error: '時間不能為空'
        };
    }

    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (!timeRegex.test(timeStr.trim())) {
        return {
            valid: false,
            error: '時間格式不正確 (應為 HH:MM)'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證時間範圍
 * @param {string} startTime - 開始時間
 * @param {string} endTime - 結束時間
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateTimeRange(startTime, endTime) {
    const startValidation = validateTime(startTime);
    if (!startValidation.valid) {
        return {
            valid: false,
            error: `開始時間: ${startValidation.error}`
        };
    }

    const endValidation = validateTime(endTime);
    if (!endValidation.valid) {
        return {
            valid: false,
            error: `結束時間: ${endValidation.error}`
        };
    }

    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;

    if (endMinutes <= startMinutes) {
        return {
            valid: false,
            error: '結束時間必須晚於開始時間'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證必填字段
 * @param {*} value - 值
 * @param {string} fieldName - 字段名稱
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateRequired(value, fieldName = '此字段') {
    if (value === null || value === undefined) {
        return {
            valid: false,
            error: `${fieldName}不能為空`
        };
    }

    if (typeof value === 'string' && value.trim() === '') {
        return {
            valid: false,
            error: `${fieldName}不能為空`
        };
    }

    if (Array.isArray(value) && value.length === 0) {
        return {
            valid: false,
            error: `${fieldName}不能為空`
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證數組最小長度
 * @param {Array} arr - 數組
 * @param {number} minLength - 最小長度
 * @param {string} itemName - 項目名稱
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateArrayMinLength(arr, minLength, itemName = '項目') {
    if (!Array.isArray(arr)) {
        return {
            valid: false,
            error: '必須是數組'
        };
    }

    if (arr.length < minLength) {
        return {
            valid: false,
            error: `至少需要 ${minLength} 個${itemName}`
        };
    }

    return { valid: true, error: '' };
}

/**
 * 驗證座標
 * @param {number} lat - 緯度
 * @param {number} lng - 經度
 * @returns {{valid: boolean, error: string}} 驗證結果
 */
export function validateCoordinates(lat, lng) {
    if (typeof lat !== 'number' || typeof lng !== 'number') {
        return {
            valid: false,
            error: '座標必須是數字'
        };
    }

    if (lat < -90 || lat > 90) {
        return {
            valid: false,
            error: '緯度必須在 -90 到 90 之間'
        };
    }

    if (lng < -180 || lng > 180) {
        return {
            valid: false,
            error: '經度必須在 -180 到 180 之間'
        };
    }

    return { valid: true, error: '' };
}

/**
 * 批量驗證
 * @param {Array<{validator: Function, args: Array}>} validations - 驗證配置數組
 * @returns {{valid: boolean, errors: Array<string>}} 驗證結果
 */
export function validateBatch(validations) {
    const errors = [];

    for (const { validator, args } of validations) {
        const result = validator(...args);
        if (!result.valid) {
            errors.push(result.error);
        }
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

/**
 * 清理和驗證 HTML 輸入（防止 XSS）
 * @param {string} input - 輸入字符串
 * @returns {string} 清理後的字符串
 */
export function sanitizeHtml(input) {
    if (!input || typeof input !== 'string') return '';

    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}
