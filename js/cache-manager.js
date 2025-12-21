/**
 * cache-manager.js
 * 分層快取管理系統
 * 
 * 提供記憶體快取和 localStorage 持久化的雙層快取機制
 * 支援 TTL (Time To Live) 過期管理和自動清理
 */

/**
 * 快取管理器
 * 實現記憶體 + localStorage 的雙層快取策略
 */
export class CacheManager {
    constructor() {
        this.memoryCache = new Map();
        this.storagePrefix = 'travel_cache_';

        // 啟動時清理過期項目
        this.cleanExpired();

        // 每 5 分鐘自動清理一次過期快取
        this.cleanupInterval = setInterval(() => {
            this.cleanExpired();
        }, 5 * 60 * 1000);
    }

    /**
     * 設置快取項目
     * @param {string} key - 快取鍵
     * @param {any} value - 快取值
     * @param {number} ttl - 存活時間（毫秒），預設 1 小時
     */
    set(key, value, ttl = 3600000) {
        const item = {
            value,
            expiry: Date.now() + ttl,
            timestamp: Date.now(),
            size: this._estimateSize(value)
        };

        // 存入記憶體快取
        this.memoryCache.set(key, item);

        // 存入 localStorage（帶錯誤處理）
        try {
            localStorage.setItem(
                this.storagePrefix + key,
                JSON.stringify(item)
            );
        } catch (e) {
            // localStorage 可能已滿，嘗試清理
            console.warn('localStorage full, attempting cleanup:', e);
            this._cleanOldestItems();

            // 再次嘗試
            try {
                localStorage.setItem(
                    this.storagePrefix + key,
                    JSON.stringify(item)
                );
            } catch (e2) {
                console.error('Failed to cache item:', e2);
            }
        }
    }

    /**
     * 獲取快取項目
     * @param {string} key - 快取鍵
     * @returns {any|null} 快取值，如果不存在或已過期則返回 null
     */
    get(key) {
        // 優先從記憶體讀取
        let item = this.memoryCache.get(key);

        // 如果記憶體中沒有，嘗試從 localStorage 讀取
        if (!item) {
            try {
                const stored = localStorage.getItem(this.storagePrefix + key);
                if (stored) {
                    item = JSON.parse(stored);
                    // 重新載入到記憶體快取
                    this.memoryCache.set(key, item);
                }
            } catch (e) {
                console.error('Failed to read from cache:', e);
                return null;
            }
        }

        // 檢查是否過期
        if (item) {
            if (item.expiry > Date.now()) {
                return item.value;
            } else {
                // 已過期，刪除
                this.delete(key);
                return null;
            }
        }

        return null;
    }

    /**
     * 刪除快取項目
     * @param {string} key - 快取鍵
     */
    delete(key) {
        this.memoryCache.delete(key);
        try {
            localStorage.removeItem(this.storagePrefix + key);
        } catch (e) {
            console.error('Failed to delete from cache:', e);
        }
    }

    /**
     * 清除所有快取
     */
    clear() {
        this.memoryCache.clear();

        try {
            // 只清除帶有前綴的項目
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.storagePrefix)) {
                    keysToRemove.push(key);
                }
            }

            keysToRemove.forEach(key => localStorage.removeItem(key));
        } catch (e) {
            console.error('Failed to clear cache:', e);
        }
    }

    /**
     * 清理過期的快取項目
     */
    cleanExpired() {
        const now = Date.now();
        let cleanedCount = 0;

        // 清理記憶體快取
        for (const [key, item] of this.memoryCache.entries()) {
            if (item.expiry <= now) {
                this.memoryCache.delete(key);
                cleanedCount++;
            }
        }

        // 清理 localStorage
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.storagePrefix)) {
                    try {
                        const item = JSON.parse(localStorage.getItem(key));
                        if (item && item.expiry <= now) {
                            keysToRemove.push(key);
                        }
                    } catch (e) {
                        // 無效的快取項目，也刪除
                        keysToRemove.push(key);
                    }
                }
            }

            keysToRemove.forEach(key => {
                localStorage.removeItem(key);
                cleanedCount++;
            });
        } catch (e) {
            console.error('Failed to clean expired cache:', e);
        }

        if (cleanedCount > 0) {
            console.log(`🧹 Cleaned ${cleanedCount} expired cache items`);
        }

        return cleanedCount;
    }

    /**
     * 獲取快取統計資訊
     * @returns {object} 統計資訊
     */
    getStats() {
        let totalSize = 0;
        let itemCount = 0;
        let expiredCount = 0;
        const now = Date.now();

        for (const [key, item] of this.memoryCache.entries()) {
            itemCount++;
            totalSize += item.size || 0;
            if (item.expiry <= now) {
                expiredCount++;
            }
        }

        return {
            itemCount,
            expiredCount,
            totalSize,
            totalSizeKB: (totalSize / 1024).toFixed(2),
            memoryItems: this.memoryCache.size
        };
    }

    /**
     * 檢查快取是否存在且未過期
     * @param {string} key - 快取鍵
     * @returns {boolean}
     */
    has(key) {
        const value = this.get(key);
        return value !== null;
    }

    /**
     * 估算數據大小（字節）
     * @private
     */
    _estimateSize(value) {
        try {
            return JSON.stringify(value).length * 2; // UTF-16 編碼，每字符 2 字節
        } catch (e) {
            return 0;
        }
    }

    /**
     * 清理最舊的項目（當 localStorage 滿時）
     * @private
     */
    _cleanOldestItems() {
        try {
            const items = [];

            // 收集所有快取項目
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.storagePrefix)) {
                    try {
                        const item = JSON.parse(localStorage.getItem(key));
                        items.push({ key, timestamp: item.timestamp || 0 });
                    } catch (e) {
                        // 無效項目，直接刪除
                        localStorage.removeItem(key);
                    }
                }
            }

            // 按時間戳排序，刪除最舊的 20%
            items.sort((a, b) => a.timestamp - b.timestamp);
            const removeCount = Math.ceil(items.length * 0.2);

            for (let i = 0; i < removeCount; i++) {
                localStorage.removeItem(items[i].key);
                // 同時從記憶體快取中移除
                const cacheKey = items[i].key.replace(this.storagePrefix, '');
                this.memoryCache.delete(cacheKey);
            }

            console.log(`🧹 Removed ${removeCount} oldest cache items`);
        } catch (e) {
            console.error('Failed to clean oldest items:', e);
        }
    }

    /**
     * 銷毀快取管理器
     */
    destroy() {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
        }
        this.memoryCache.clear();
    }
}

// 創建全域快取實例
export const globalCache = new CacheManager();

// 預定義的快取 TTL 常數
export const CACHE_TTL = {
    WEATHER: 60 * 60 * 1000,           // 1 小時
    DESTINATIONS: 24 * 60 * 60 * 1000, // 24 小時
    TDX_DATA: 30 * 60 * 1000,          // 30 分鐘
    AI_CONTENT: 0,                      // 會話期間（不持久化）
    USER_PREFS: 365 * 24 * 60 * 60 * 1000 // 1 年
};
