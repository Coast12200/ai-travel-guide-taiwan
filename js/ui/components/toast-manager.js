/**
 * Toast Manager
 * 負責管理所有 Toast 通知的顯示、隱藏和隊列管理
 * 
 * 📍 從 ui.js 遷移的函數：
 * - showToast()
 * - showError()
 * - showApiStatus()
 */

import { escapeHtml } from '../utils/security.js';

/**
 * Toast 類型定義
 */
const ToastType = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
};

/**
 * Toast Manager 類
 */
class ToastManager {
    constructor(options = {}) {
        this.container = options.container || this.createContainer();
        this.queue = [];
        this.activeToasts = new Set();
        this.maxToasts = options.maxToasts || 3;
        this.defaultDuration = options.defaultDuration || 3000;
    }

    /**
     * 創建 Toast 容器
     */
    createContainer() {
        let container = document.getElementById('toastContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toastContainer';
            container.setAttribute('aria-live', 'polite');
            container.style.cssText = 'position: fixed; right: 20px; bottom: 20px; z-index: 2000;';
            document.body.appendChild(container);
        }
        return container;
    }

    /**
     * 顯示 Toast 通知
     * @param {string} message - 訊息內容
     * @param {string} type - Toast 類型 (success, error, warning, info)
     * @param {number} duration - 顯示時長（毫秒）
     */
    show(message, type = ToastType.INFO, duration = null) {
        const toast = this.createToast(message, type, duration || this.defaultDuration);

        if (this.activeToasts.size >= this.maxToasts) {
            this.queue.push(toast);
        } else {
            this.displayToast(toast);
        }
    }

    /**
     * 顯示成功訊息
     */
    success(message, duration = null) {
        this.show(message, ToastType.SUCCESS, duration);
    }

    /**
     * 顯示錯誤訊息
     */
    error(message, duration = null) {
        this.show(message, ToastType.ERROR, duration);
    }

    /**
     * 顯示警告訊息
     */
    warning(message, duration = null) {
        this.show(message, ToastType.WARNING, duration);
    }

    /**
     * 顯示資訊訊息
     */
    info(message, duration = null) {
        this.show(message, ToastType.INFO, duration);
    }

    /**
     * 創建 Toast 元素
     */
    createToast(message, type, duration) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', 'alert');

        const icon = this.getIcon(type);
        const safeMessage = escapeHtml(message);

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${safeMessage}</span>
            <button class="toast-close" aria-label="關閉">×</button>
        `;

        // 關閉按鈕事件
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.removeToast(toast));

        return { element: toast, duration, type };
    }

    /**
     * 顯示 Toast
     */
    displayToast(toast) {
        this.container.appendChild(toast.element);
        this.activeToasts.add(toast);

        // 觸發動畫
        requestAnimationFrame(() => {
            toast.element.classList.add('toast-show');
        });

        // 自動移除
        if (toast.duration > 0) {
            setTimeout(() => {
                this.removeToast(toast.element);
            }, toast.duration);
        }
    }

    /**
     * 移除 Toast
     */
    removeToast(toastElement) {
        toastElement.classList.remove('toast-show');
        toastElement.classList.add('toast-hide');

        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.parentNode.removeChild(toastElement);
            }

            // 從活動集合中移除
            for (const toast of this.activeToasts) {
                if (toast.element === toastElement) {
                    this.activeToasts.delete(toast);
                    break;
                }
            }

            // 顯示隊列中的下一個
            if (this.queue.length > 0) {
                const nextToast = this.queue.shift();
                this.displayToast(nextToast);
            }
        }, 300);
    }

    /**
     * 獲取圖標
     */
    getIcon(type) {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    }

    /**
     * 清除所有 Toast
     */
    clearAll() {
        this.activeToasts.forEach(toast => {
            this.removeToast(toast.element);
        });
        this.queue = [];
    }
}

// 創建單例實例
const toastManager = new ToastManager();

// 導出便捷函數（向後兼容）
export function showToast(message, typeOrDuration = 3000, customDuration = null) {
    // 兼容舊 API：showToast(message, duration) 或 showToast(message, type, duration)
    if (typeof typeOrDuration === 'number') {
        toastManager.show(message, ToastType.INFO, typeOrDuration);
    } else {
        toastManager.show(message, typeOrDuration, customDuration);
    }
}
export function showApiStatus(message, type) {

// 導出類和實例
export { ToastManager, toastManager, ToastType };
export default toastManager;
