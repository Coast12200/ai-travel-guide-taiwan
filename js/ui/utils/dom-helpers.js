/**
 * DOM Helpers
 * 提供常用的 DOM 操作輔助函數
 */

/**
 * 安全地獲取元素
 * @param {string} selector - CSS 選擇器或元素 ID
 * @param {Element} context - 搜尋上下文（預設為 document）
 * @returns {Element|null}
 */
export function getElement(selector, context = document) {
    if (selector.startsWith('#') && !selector.includes(' ')) {
        return context.getElementById(selector.slice(1));
    }
    return context.querySelector(selector);
}

/**
 * 安全地獲取多個元素
 */
export function getElements(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

/**
 * 切換類名
 */
export function toggleClass(element, className, force = null) {
    if (!element) return false;
    if (force === null) {
        element.classList.toggle(className);
    } else {
        element.classList.toggle(className, force);
    }
    return element.classList.contains(className);
}

/**
 * 添加多個類名
 */
export function addClasses(element, ...classNames) {
    if (!element) return;
    element.classList.add(...classNames);
}

/**
 * 移除多個類名
 */
export function removeClasses(element, ...classNames) {
    if (!element) return;
    element.classList.remove(...classNames);
}

/**
 * 顯示元素
 */
export function show(element, displayType = 'block') {
    if (!element) return;
    element.style.display = displayType;
    element.classList.remove('hidden');
}

/**
 * 隱藏元素
 */
export function hide(element) {
    if (!element) return;
    element.style.display = 'none';
    element.classList.add('hidden');
}

/**
 * 切換顯示/隱藏
 */
export function toggleVisibility(element, displayType = 'block') {
    if (!element) return;
    if (element.style.display === 'none' || element.classList.contains('hidden')) {
        show(element, displayType);
    } else {
        hide(element);
    }
}

/**
 * 清空元素內容
 */
export function empty(element) {
    if (!element) return;
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/**
 * 設置屬性
 */
export function setAttributes(element, attributes) {
    if (!element) return;
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}

/**
 * 移除屬性
 */
export function removeAttributes(element, ...attributes) {
    if (!element) return;
    attributes.forEach(attr => element.removeAttribute(attr));
}

/**
 * 滾動到元素
 */
export function scrollToElement(element, options = {}) {
    if (!element) return;
    const defaultOptions = {
        behavior: 'smooth',
        block: 'center',
        ...options
    };
    element.scrollIntoView(defaultOptions);
}

/**
 * 檢查元素是否在視窗內
 */
export function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * 委派事件監聽
 */
export function delegate(parent, eventType, selector, handler) {
    parent.addEventListener(eventType, (e) => {
        const target = e.target.closest(selector);
        if (target) {
            handler.call(target, e);
        }
    });
}

/**
 * 一次性事件監聽
 */
export function once(element, eventType, handler) {
    element.addEventListener(eventType, handler, { once: true });
}
