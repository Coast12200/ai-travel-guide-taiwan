/**
 * accordion-manager.js
 * 摺疊選單管理器
 * 
 * 提供摺疊選單的初始化和狀態管理功能
 */

import { eventBus } from '../core/event-bus.js';

/**
 * 摺疊選單管理器類別
 */
export class AccordionManager {
    constructor(options = {}) {
        this.mobileBreakpoint = options.mobileBreakpoint || 992;
        this.accordions = new Map();
        this.setupResizeListener();
    }

    /**
     * 設置視窗大小變化監聽器
     */
    setupResizeListener() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.handleResize();
            }, 250);
        });
    }

    /**
     * 處理視窗大小變化
     */
    handleResize() {
        this.accordions.forEach((config, selector) => {
            this.refresh(selector);
        });
    }

    /**
     * 初始化摺疊選單
     * @param {string} selector - 選擇器
     * @param {Object} options - 選項
     */
    setup(selector, options = {}) {
        const {
            headerSelector = 'h3',
            activeClass = 'active',
            mobileOnly = true,
            allowMultiple = false,
            defaultOpen = 0
        } = options;

        const panels = document.querySelectorAll(selector);
        if (panels.length === 0) {
            console.warn(`No panels found for selector: ${selector}`);
            return;
        }

        // 保存配置
        this.accordions.set(selector, {
            headerSelector,
            activeClass,
            mobileOnly,
            allowMultiple,
            defaultOpen,
            panels: Array.from(panels)
        });

        // 初始化每個面板
        panels.forEach((panel, index) => {
            const header = panel.querySelector(headerSelector);
            if (!header) return;

            // 移除舊的事件監聽器
            if (header._accordionClickHandler) {
                header.removeEventListener('click', header._accordionClickHandler);
            }

            // 創建新的點擊處理器
            const clickHandler = () => {
                this.handlePanelClick(panel, selector, options);
            };

            header._accordionClickHandler = clickHandler;

            // 根據設備類型決定是否添加監聽器
            if (this.shouldEnableAccordion(mobileOnly)) {
                header.addEventListener('click', clickHandler);
                header.style.cursor = 'pointer';
            } else {
                header.style.cursor = '';
            }

            // 設置初始狀態
            if (index === defaultOpen && this.shouldEnableAccordion(mobileOnly)) {
                panel.classList.add(activeClass);
            } else if (!this.shouldEnableAccordion(mobileOnly)) {
                panel.classList.remove(activeClass);
            }
        });

        // 觸發事件
        eventBus.emit('accordion:setup', { selector, options, count: panels.length });
    }

    /**
     * 處理面板點擊
     * @param {HTMLElement} panel - 面板元素
     * @param {string} selector - 選擇器
     * @param {Object} options - 選項
     */
    handlePanelClick(panel, selector, options) {
        const { activeClass, allowMultiple, mobileOnly } = options;

        // 檢查是否應該啟用摺疊功能
        if (!this.shouldEnableAccordion(mobileOnly)) {
            return;
        }

        const isActive = panel.classList.contains(activeClass);
        const config = this.accordions.get(selector);

        if (!allowMultiple) {
            // 關閉其他面板
            config.panels.forEach(p => {
                if (p !== panel) {
                    p.classList.remove(activeClass);
                }
            });
        }

        // 切換當前面板
        if (isActive) {
            panel.classList.remove(activeClass);
        } else {
            panel.classList.add(activeClass);
        }

        // 觸發事件
        eventBus.emit('accordion:toggled', {
            panel,
            isActive: !isActive,
            selector
        });
    }

    /**
     * 檢查是否應該啟用摺疊功能
     * @param {boolean} mobileOnly - 是否僅在行動裝置啟用
     * @returns {boolean} 是否應該啟用
     */
    shouldEnableAccordion(mobileOnly) {
        if (!mobileOnly) return true;
        return window.innerWidth <= this.mobileBreakpoint;
    }

    /**
     * 刷新摺疊選單
     * @param {string} selector - 選擇器
     */
    refresh(selector) {
        const config = this.accordions.get(selector);
        if (!config) {
            console.warn(`Accordion not found: ${selector}`);
            return;
        }

        const { headerSelector, activeClass, mobileOnly, defaultOpen } = config;
        const isMobile = this.shouldEnableAccordion(mobileOnly);

        config.panels.forEach((panel, index) => {
            const header = panel.querySelector(headerSelector);
            if (!header) return;

            if (isMobile) {
                header.style.cursor = 'pointer';
                // 保持當前狀態或設置默認狀態
                if (!panel.classList.contains(activeClass) && index === defaultOpen) {
                    panel.classList.add(activeClass);
                }
            } else {
                header.style.cursor = '';
                panel.classList.remove(activeClass);
            }
        });

        // 觸發事件
        eventBus.emit('accordion:refreshed', { selector, isMobile });
    }

    /**
     * 開啟指定面板
     * @param {string} selector - 選擇器
     * @param {number} index - 面板索引
     */
    open(selector, index) {
        const config = this.accordions.get(selector);
        if (!config) return;

        const panel = config.panels[index];
        if (!panel) return;

        panel.classList.add(config.activeClass);

        eventBus.emit('accordion:opened', { selector, index, panel });
    }

    /**
     * 關閉指定面板
     * @param {string} selector - 選擇器
     * @param {number} index - 面板索引
     */
    close(selector, index) {
        const config = this.accordions.get(selector);
        if (!config) return;

        const panel = config.panels[index];
        if (!panel) return;

        panel.classList.remove(config.activeClass);

        eventBus.emit('accordion:closed', { selector, index, panel });
    }

    /**
     * 關閉所有面板
     * @param {string} selector - 選擇器
     */
    closeAll(selector) {
        const config = this.accordions.get(selector);
        if (!config) return;

        config.panels.forEach(panel => {
            panel.classList.remove(config.activeClass);
        });

        eventBus.emit('accordion:all-closed', { selector });
    }

    /**
     * 銷毀摺疊選單
     * @param {string} selector - 選擇器
     */
    destroy(selector) {
        const config = this.accordions.get(selector);
        if (!config) return;

        // 移除事件監聽器
        config.panels.forEach(panel => {
            const header = panel.querySelector(config.headerSelector);
            if (header && header._accordionClickHandler) {
                header.removeEventListener('click', header._accordionClickHandler);
                delete header._accordionClickHandler;
                header.style.cursor = '';
            }
            panel.classList.remove(config.activeClass);
        });

        this.accordions.delete(selector);

        eventBus.emit('accordion:destroyed', { selector });
    }
}

// 創建全域實例
export const accordionManager = new AccordionManager();

// 向後兼容的函數
export function setupAccordion(selector, options) {
    return accordionManager.setup(selector, options);
}

// 在開發環境中暴露到 window
if (typeof window !== 'undefined') {
    window.__accordionManager = accordionManager;
}

export default accordionManager;
