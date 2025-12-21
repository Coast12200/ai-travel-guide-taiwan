/**
 * security.js
 * 安全工具模組 - 防止 XSS 攻擊和不安全的 DOM 操作
 */

/**
 * 轉義 HTML 特殊字符以防止 XSS 攻擊
 * @param {string} unsafe - 不安全的字符串
 * @returns {string} 轉義後的安全字符串
 */
export function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';

    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * 安全地設置元素的 HTML 內容
 * @param {HTMLElement} element - 目標元素
 * @param {string} html - HTML 內容
 * @param {boolean} trusted - 是否為可信內容（如 Markdown 渲染結果）
 */
export function safeSetHTML(element, html, trusted = false) {
    if (!element) {
        console.warn('safeSetHTML: element is null or undefined');
        return;
    }

    if (trusted) {
        // 可信內容（如 AI 生成的 Markdown 已轉換為 HTML）
        element.innerHTML = html;
    } else {
        // 不可信內容，使用 textContent
        element.textContent = html;
    }
}

/**
 * 創建安全的 DOM 元素
 * @param {string} tag - 標籤名
 * @param {Object} attributes - 屬性對象
 * @param {string} textContent - 文本內容
 * @returns {HTMLElement}
 */
export function createSafeElement(tag, attributes = {}, textContent = '') {
    const element = document.createElement(tag);

    // 安全地設置屬性
    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'style' && typeof value === 'object') {
            // 支持樣式對象
            Object.assign(element.style, value);
        } else if (key.startsWith('data-')) {
            // data 屬性
            element.setAttribute(key, value);
        } else if (key.startsWith('aria-')) {
            // ARIA 屬性
            element.setAttribute(key, value);
        } else if (key === 'id' || key === 'title' || key === 'alt') {
            // 常用安全屬性
            element[key] = value;
        } else {
            // 其他屬性使用 setAttribute
            element.setAttribute(key, value);
        }
    }

    // 設置文本內容（自動轉義）
    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

/**
 * 清理 URL 以防止 javascript: 協議攻擊
 * @param {string} url - URL 字符串
 * @returns {string} 清理後的 URL
 */
export function sanitizeUrl(url) {
    if (!url || typeof url !== 'string') return '';

    const trimmed = url.trim().toLowerCase();

    // 阻止危險協議
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
    for (const protocol of dangerousProtocols) {
        if (trimmed.startsWith(protocol)) {
            console.warn(`Blocked dangerous URL protocol: ${protocol}`);
            return '';
        }
    }

    return url;
}

/**
 * 創建安全的鏈接元素
 * @param {string} href - 鏈接地址
 * @param {string} text - 鏈接文本
 * @param {Object} attributes - 額外屬性
 * @returns {HTMLAnchorElement}
 */
export function createSafeLink(href, text, attributes = {}) {
    const sanitizedHref = sanitizeUrl(href);
    if (!sanitizedHref) {
        // 如果 URL 不安全，返回純文本
        return createSafeElement('span', attributes, text);
    }

    const link = createSafeElement('a', {
        ...attributes,
        href: sanitizedHref,
        rel: 'noopener noreferrer' // 安全性最佳實踐
    }, text);

    return link;
}

/**
 * 驗證和清理 JSON 字符串（用於 Gemini API 響應）
 * @param {string} text - 可能包含 Markdown 代碼塊的 JSON 文本
 * @returns {string} 清理後的 JSON 字符串
 */
export function cleanGeminiJSON(text) {
    if (!text || typeof text !== 'string') {
        throw new Error('Invalid input: text must be a non-empty string');
    }

    // 移除 Markdown 代碼塊標記
    let cleaned = text.trim();
    cleaned = cleaned.replace(/^```json\s*/i, '');
    cleaned = cleaned.replace(/^```\s*/i, '');
    cleaned = cleaned.replace(/\s*```$/i, '');

    // 移除可能的前後空白
    cleaned = cleaned.trim();

    return cleaned;
}

/**
 * 安全地解析 JSON
 * @param {string} text - JSON 文本
 * @param {*} defaultValue - 解析失敗時的默認值
 * @returns {*} 解析結果或默認值
 */
export function safeJSONParse(text, defaultValue = null) {
    try {
        const cleaned = cleanGeminiJSON(text);
        return JSON.parse(cleaned);
    } catch (error) {
        console.error('JSON parse error:', error);
        console.error('Failed text:', text);
        return defaultValue;
    }
}

/**
 * 創建安全的列表項
 * @param {Array<string>} items - 項目數組
 * @param {boolean} ordered - 是否為有序列表
 * @returns {HTMLElement}
 */
export function createSafeList(items, ordered = false) {
    const list = document.createElement(ordered ? 'ol' : 'ul');

    items.forEach(item => {
        const li = createSafeElement('li', {}, item);
        list.appendChild(li);
    });

    return list;
}

/**
 * 安全地渲染用戶輸入的文本（保留換行）
 * @param {string} text - 用戶輸入的文本
 * @returns {string} 安全的 HTML
 */
export function renderSafeText(text) {
    if (!text) return '';

    // 轉義 HTML 並保留換行
    const escaped = escapeHtml(text);
    return escaped.replace(/\n/g, '<br>');
}

/**
 * 驗證輸入長度
 * @param {string} input - 輸入字符串
 * @param {number} maxLength - 最大長度
 * @returns {boolean}
 */
export function validateInputLength(input, maxLength = 1000) {
    if (typeof input !== 'string') return false;
    return input.length <= maxLength;
}

/**
 * 清理和驗證文件名
 * @param {string} filename - 文件名
 * @returns {string} 清理後的文件名
 */
export function sanitizeFilename(filename) {
    if (!filename || typeof filename !== 'string') return 'download';

    // 移除危險字符
    return filename
        .replace(/[^a-zA-Z0-9\u4e00-\u9fa5_\-\.]/g, '_')
        .substring(0, 255); // 限制長度
}

// 導出所有函數作為默認對象（方便使用）
export default {
    escapeHtml,
    safeSetHTML,
    createSafeElement,
    sanitizeUrl,
    createSafeLink,
    cleanGeminiJSON,
    safeJSONParse,
    createSafeList,
    renderSafeText,
    validateInputLength,
    sanitizeFilename
};
