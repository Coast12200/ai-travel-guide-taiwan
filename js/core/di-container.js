/**
 * di-container.js
 * 依賴注入容器 - 用於管理模組依賴關係
 * 
 * 提供服務註冊和獲取功能，支持單例和工廠模式
 */

/**
 * 依賴注入容器類別
 * 管理應用程式中的服務和依賴關係
 */
class DIContainer {
    constructor() {
        // 存儲服務工廠函數
        this.factories = new Map();

        // 存儲單例實例
        this.singletons = new Map();

        // 開發模式下啟用日誌
        this.debug = false;
    }

    /**
     * 註冊服務
     * @param {string} name - 服務名稱
     * @param {Function} factory - 工廠函數，接收容器作為參數
     * @param {Object} options - 選項 { singleton: boolean }
     */
    register(name, factory, options = {}) {
        if (typeof factory !== 'function') {
            console.error('DIContainer.register: factory must be a function');
            return;
        }

        this.factories.set(name, {
            factory,
            singleton: options.singleton !== false // 默認為單例
        });

        if (this.debug) {
            console.log(`[DIContainer] Registered "${name}" (${options.singleton !== false ? 'singleton' : 'transient'})`);
        }
    }

    /**
     * 註冊單例服務
     * @param {string} name - 服務名稱
     * @param {Function} factory - 工廠函數
     */
    registerSingleton(name, factory) {
        this.register(name, factory, { singleton: true });
    }

    /**
     * 註冊臨時服務（每次獲取都創建新實例）
     * @param {string} name - 服務名稱
     * @param {Function} factory - 工廠函數
     */
    registerTransient(name, factory) {
        this.register(name, factory, { singleton: false });
    }

    /**
     * 註冊實例（直接註冊已創建的實例）
     * @param {string} name - 服務名稱
     * @param {*} instance - 實例對象
     */
    registerInstance(name, instance) {
        this.singletons.set(name, instance);

        if (this.debug) {
            console.log(`[DIContainer] Registered instance "${name}"`);
        }
    }

    /**
     * 獲取服務
     * @param {string} name - 服務名稱
     * @returns {*} 服務實例
     */
    get(name) {
        // 檢查是否已有單例實例
        if (this.singletons.has(name)) {
            if (this.debug) {
                console.log(`[DIContainer] Retrieved singleton "${name}"`);
            }
            return this.singletons.get(name);
        }

        // 檢查是否已註冊工廠
        if (!this.factories.has(name)) {
            console.warn(`[DIContainer] Service "${name}" not found`);
            return null;
        }

        const { factory, singleton } = this.factories.get(name);

        try {
            // 調用工廠函數創建實例
            const instance = factory(this);

            // 如果是單例，保存實例
            if (singleton) {
                this.singletons.set(name, instance);
            }

            if (this.debug) {
                console.log(`[DIContainer] Created ${singleton ? 'singleton' : 'transient'} "${name}"`);
            }

            return instance;
        } catch (error) {
            console.error(`[DIContainer] Error creating service "${name}":`, error);
            return null;
        }
    }

    /**
     * 檢查服務是否已註冊
     * @param {string} name - 服務名稱
     * @returns {boolean} 是否已註冊
     */
    has(name) {
        return this.factories.has(name) || this.singletons.has(name);
    }

    /**
     * 移除服務
     * @param {string} name - 服務名稱
     */
    remove(name) {
        this.factories.delete(name);
        this.singletons.delete(name);

        if (this.debug) {
            console.log(`[DIContainer] Removed "${name}"`);
        }
    }

    /**
     * 清除所有服務
     */
    clear() {
        this.factories.clear();
        this.singletons.clear();

        if (this.debug) {
            console.log('[DIContainer] Cleared all services');
        }
    }

    /**
     * 獲取所有已註冊的服務名稱
     * @returns {string[]} 服務名稱數組
     */
    getServiceNames() {
        const factoryNames = Array.from(this.factories.keys());
        const singletonNames = Array.from(this.singletons.keys());
        return [...new Set([...factoryNames, ...singletonNames])];
    }

    /**
     * 啟用/禁用調試模式
     * @param {boolean} enabled - 是否啟用
     */
    setDebug(enabled) {
        this.debug = enabled;
        console.log(`[DIContainer] Debug mode ${enabled ? 'enabled' : 'disabled'}`);
    }

    /**
     * 批量註冊服務
     * @param {Object} services - 服務對象 { name: factory }
     * @param {Object} options - 選項
     */
    registerBatch(services, options = {}) {
        for (const [name, factory] of Object.entries(services)) {
            this.register(name, factory, options);
        }
    }
}

// 創建全域容器實例
export const container = new DIContainer();

// 在開發環境中暴露到 window 以便調試
if (typeof window !== 'undefined') {
    window.__diContainer = container;
}

// 導出類別以便創建獨立實例
export default DIContainer;
