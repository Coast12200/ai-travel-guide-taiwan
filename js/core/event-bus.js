/**
 * event-bus.js
 * 事件總線 - 用於解耦模組間的依賴關係
 * 
 * 實現發布-訂閱模式，允許模組間通過事件進行通信
 * 而不需要直接依賴彼此
 */

/**
 * 事件總線類別
 * 提供事件的註冊、觸發和取消註冊功能
 */
class EventBus {
    constructor() {
        // 存儲所有事件及其回調函數
        this.events = new Map();

        // 開發模式下啟用日誌
        this.debug = false;
    }

    /**
     * 註冊事件監聽器
     * @param {string} event - 事件名稱
     * @param {Function} callback - 回調函數
     * @param {Object} options - 選項 { once: boolean }
     * @returns {Function} 取消訂閱函數
     */
    on(event, callback, options = {}) {
        if (typeof callback !== 'function') {
            console.error('EventBus.on: callback must be a function');
            return () => { };
        }

        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        const listener = {
            callback,
            once: options.once || false
        };

        this.events.get(event).push(listener);

        if (this.debug) {
            console.log(`[EventBus] Registered listener for "${event}"`);
        }

        // 返回取消訂閱函數
        return () => this.off(event, callback);
    }

    /**
     * 註冊一次性事件監聽器
     * @param {string} event - 事件名稱
     * @param {Function} callback - 回調函數
     * @returns {Function} 取消訂閱函數
     */
    once(event, callback) {
        return this.on(event, callback, { once: true });
    }

    /**
     * 取消事件監聽器
     * @param {string} event - 事件名稱
     * @param {Function} callback - 要移除的回調函數（可選）
     */
    off(event, callback) {
        if (!this.events.has(event)) {
            return;
        }

        if (callback) {
            // 移除特定回調
            const listeners = this.events.get(event);
            const filtered = listeners.filter(listener => listener.callback !== callback);

            if (filtered.length === 0) {
                this.events.delete(event);
            } else {
                this.events.set(event, filtered);
            }

            if (this.debug) {
                console.log(`[EventBus] Removed listener for "${event}"`);
            }
        } else {
            // 移除所有回調
            this.events.delete(event);

            if (this.debug) {
                console.log(`[EventBus] Removed all listeners for "${event}"`);
            }
        }
    }

    /**
     * 觸發事件
     * @param {string} event - 事件名稱
     * @param {*} data - 傳遞給回調的數據
     * @returns {number} 被調用的監聽器數量
     */
    emit(event, data) {
        if (!this.events.has(event)) {
            if (this.debug) {
                console.log(`[EventBus] No listeners for "${event}"`);
            }
            return 0;
        }

        const listeners = this.events.get(event);
        const onceListeners = [];
        let count = 0;

        // 執行所有監聽器
        for (const listener of listeners) {
            try {
                listener.callback(data);
                count++;

                // 記錄一次性監聽器以便稍後移除
                if (listener.once) {
                    onceListeners.push(listener);
                }
            } catch (error) {
                console.error(`[EventBus] Error in listener for "${event}":`, error);
            }
        }

        // 移除一次性監聽器
        if (onceListeners.length > 0) {
            const remaining = listeners.filter(l => !onceListeners.includes(l));
            if (remaining.length === 0) {
                this.events.delete(event);
            } else {
                this.events.set(event, remaining);
            }
        }

        if (this.debug) {
            console.log(`[EventBus] Emitted "${event}" to ${count} listener(s)`, data);
        }

        return count;
    }

    /**
     * 清除所有事件監聽器
     */
    clear() {
        this.events.clear();

        if (this.debug) {
            console.log('[EventBus] Cleared all listeners');
        }
    }

    /**
     * 獲取事件的監聽器數量
     * @param {string} event - 事件名稱
     * @returns {number} 監聽器數量
     */
    listenerCount(event) {
        return this.events.has(event) ? this.events.get(event).length : 0;
    }

    /**
     * 獲取所有已註冊的事件名稱
     * @returns {string[]} 事件名稱數組
     */
    eventNames() {
        return Array.from(this.events.keys());
    }

    /**
     * 啟用/禁用調試模式
     * @param {boolean} enabled - 是否啟用
     */
    setDebug(enabled) {
        this.debug = enabled;
        console.log(`[EventBus] Debug mode ${enabled ? 'enabled' : 'disabled'}`);
    }
}

// 創建全域事件總線實例
export const eventBus = new EventBus();

// 在開發環境中暴露到 window 以便調試
if (typeof window !== 'undefined') {
    window.__eventBus = eventBus;
}

// 導出類別以便創建獨立實例
export default EventBus;
