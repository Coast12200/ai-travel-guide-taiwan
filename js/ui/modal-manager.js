/**
 * modal-manager.js
 * Modal 對話框管理器
 * 
 * 提供 Modal 的開啟、關閉和狀態管理功能
 */

import { eventBus } from '../core/event-bus.js';

/**
 * Modal 管理器類別
 */
export class ModalManager {
    constructor() {
        this.activeModals = new Set();
        this.setupGlobalListeners();
    }

    /**
     * 設置全域監聽器
     */
    setupGlobalListeners() {
        // ESC 鍵關閉 Modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModals.size > 0) {
                const modals = Array.from(this.activeModals);
                const lastModal = modals[modals.length - 1];
                this.close(lastModal);
            }
        });

        // 點擊背景關閉 Modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                const modalId = e.target.id;
                if (modalId) {
                    this.close(modalId);
                }
            }
        });
    }

    /**
     * 開啟 Modal
     * @param {string} modalId - Modal ID
     * @param {Object} options - 選項
     */
    open(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.warn(`Modal not found: ${modalId}`);
            return false;
        }

        // 移除 hidden 類別
        modal.classList.remove('hidden');

        // 添加 show 類別以觸發動畫
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);

        // 設置 ARIA 屬性
        modal.setAttribute('aria-hidden', 'false');

        // 記錄活動 Modal
        this.activeModals.add(modalId);

        // 禁用背景滾動
        if (options.disableScroll !== false) {
            document.body.style.overflow = 'hidden';
        }

        // 觸發事件
        eventBus.emit('modal:opened', { modalId, options });

        // 聚焦到第一個可聚焦元素
        this.focusFirstElement(modal);

        return true;
    }

    /**
     * 關閉 Modal
     * @param {string} modalId - Modal ID
     * @param {Object} options - 選項
     */
    close(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.warn(`Modal not found: ${modalId}`);
            return false;
        }

        // 移除 show 類別以觸發關閉動畫
        modal.classList.remove('show');

        // 等待動畫完成後添加 hidden 類別
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
        }, 300);

        // 從活動 Modal 中移除
        this.activeModals.delete(modalId);

        // 如果沒有其他活動 Modal，恢復背景滾動
        if (this.activeModals.size === 0) {
            document.body.style.overflow = '';
        }

        // 觸發事件
        eventBus.emit('modal:closed', { modalId, options });

        return true;
    }

    /**
     * 切換 Modal 狀態
     * @param {string} modalId - Modal ID
     * @param {Object} options - 選項
     */
    toggle(modalId, options = {}) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.warn(`Modal not found: ${modalId}`);
            return false;
        }

        const isOpen = this.isOpen(modalId);
        return isOpen ? this.close(modalId, options) : this.open(modalId, options);
    }

    /**
     * 檢查 Modal 是否開啟
     * @param {string} modalId - Modal ID
     * @returns {boolean} 是否開啟
     */
    isOpen(modalId) {
        return this.activeModals.has(modalId);
    }

    /**
     * 關閉所有 Modal
     */
    closeAll() {
        const modals = Array.from(this.activeModals);
        modals.forEach(modalId => this.close(modalId));
    }

    /**
     * 聚焦到 Modal 中的第一個可聚焦元素
     * @param {HTMLElement} modal - Modal 元素
     */
    focusFirstElement(modal) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    /**
     * 創建動態 Modal
     * @param {Object} config - Modal 配置
     * @returns {string} Modal ID
     */
    create(config) {
        const {
            id = `modal-${Date.now()}`,
            title = '',
            content = '',
            buttons = [],
            className = ''
        } = config;

        // 檢查是否已存在
        if (document.getElementById(id)) {
            console.warn(`Modal already exists: ${id}`);
            return id;
        }

        // 創建 Modal 元素
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = `modal-overlay hidden ${className}`;
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');

        // 創建內容容器
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // 添加關閉按鈕
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', '關閉');
        closeBtn.addEventListener('click', () => this.close(id));
        modalContent.appendChild(closeBtn);

        // 添加標題
        if (title) {
            const titleEl = document.createElement('h3');
            titleEl.textContent = title;
            modalContent.appendChild(titleEl);
        }

        // 添加內容
        if (content) {
            const contentEl = document.createElement('div');
            contentEl.className = 'modal-body';
            if (typeof content === 'string') {
                contentEl.innerHTML = content;
            } else {
                contentEl.appendChild(content);
            }
            modalContent.appendChild(contentEl);
        }

        // 添加按鈕
        if (buttons.length > 0) {
            const footer = document.createElement('div');
            footer.className = 'modal-footer';
            footer.style.display = 'flex';
            footer.style.gap = '8px';
            footer.style.justifyContent = 'flex-end';
            footer.style.marginTop = '16px';

            buttons.forEach(btn => {
                const button = document.createElement('button');
                button.className = btn.className || 'btn';
                button.textContent = btn.text || '';
                if (btn.onClick) {
                    button.addEventListener('click', () => {
                        btn.onClick();
                        if (btn.closeOnClick !== false) {
                            this.close(id);
                        }
                    });
                }
                footer.appendChild(button);
            });

            modalContent.appendChild(footer);
        }

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // 觸發事件
        eventBus.emit('modal:created', { modalId: id, config });

        return id;
    }

    /**
     * 銷毀 Modal
     * @param {string} modalId - Modal ID
     */
    destroy(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.warn(`Modal not found: ${modalId}`);
            return false;
        }

        // 先關閉
        this.close(modalId);

        // 等待動畫完成後移除
        setTimeout(() => {
            modal.remove();
            eventBus.emit('modal:destroyed', { modalId });
        }, 300);

        return true;
    }
}

// 創建全域實例
export const modalManager = new ModalManager();

// 向後兼容的函數
export function openModal(modalId, options) {
    return modalManager.open(modalId, options);
}

export function closeModal(modalId, options) {
    return modalManager.close(modalId, options);
}

export function toggleModal(modalId, options) {
    return modalManager.toggle(modalId, options);
}

// 在開發環境中暴露到 window
if (typeof window !== 'undefined') {
    window.__modalManager = modalManager;
}

export default modalManager;
