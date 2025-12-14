/**
 * lazy-loader.js
 * 懶加載工具 - 按需載入模組以提升性能
 */

/**
 * 懶加載管理器
 */
export class LazyLoader {
    constructor() {
        this.loadedModules = new Map();
        this.loadingPromises = new Map();
    }

    /**
     * 載入服務模組
     * @param {string} serviceName - 服務名稱 (ai-generator, exporter, optimizer, budget-calculator)
     * @returns {Promise<Object>} 模組對象
     */
    async loadService(serviceName) {
        // 如果已載入，直接返回
        if (this.loadedModules.has(serviceName)) {
            return this.loadedModules.get(serviceName);
        }

        // 如果正在載入，等待載入完成
        if (this.loadingPromises.has(serviceName)) {
            return this.loadingPromises.get(serviceName);
        }

        // 開始載入
        const loadingPromise = this._loadServiceModule(serviceName);
        this.loadingPromises.set(serviceName, loadingPromise);

        try {
            const module = await loadingPromise;
            this.loadedModules.set(serviceName, module);
            this.loadingPromises.delete(serviceName);
            return module;
        } catch (error) {
            this.loadingPromises.delete(serviceName);
            throw error;
        }
    }

    /**
     * 內部方法：載入服務模組
     * @private
     */
    async _loadServiceModule(serviceName) {
        console.log(`⏳ 懶加載: ${serviceName}`);
        const startTime = performance.now();

        try {
            const module = await import(`./services/${serviceName}.js`);
            const loadTime = (performance.now() - startTime).toFixed(2);
            console.log(`✅ ${serviceName} 載入完成 (${loadTime}ms)`);
            return module;
        } catch (error) {
            console.error(`❌ ${serviceName} 載入失敗:`, error);
            throw new Error(`Failed to load service: ${serviceName}`);
        }
    }

    /**
     * 載入工具模組
     * @param {string} utilName - 工具名稱 (markdown, date-time, validators)
     * @returns {Promise<Object>} 模組對象
     */
    async loadUtil(utilName) {
        const key = `util:${utilName}`;

        if (this.loadedModules.has(key)) {
            return this.loadedModules.get(key);
        }

        if (this.loadingPromises.has(key)) {
            return this.loadingPromises.get(key);
        }

        const loadingPromise = this._loadUtilModule(utilName);
        this.loadingPromises.set(key, loadingPromise);

        try {
            const module = await loadingPromise;
            this.loadedModules.set(key, module);
            this.loadingPromises.delete(key);
            return module;
        } catch (error) {
            this.loadingPromises.delete(key);
            throw error;
        }
    }

    /**
     * 內部方法：載入工具模組
     * @private
     */
    async _loadUtilModule(utilName) {
        console.log(`⏳ 懶加載工具: ${utilName}`);
        const startTime = performance.now();

        try {
            const module = await import(`./utils/${utilName}.js`);
            const loadTime = (performance.now() - startTime).toFixed(2);
            console.log(`✅ ${utilName} 載入完成 (${loadTime}ms)`);
            return module;
        } catch (error) {
            console.error(`❌ ${utilName} 載入失敗:`, error);
            throw new Error(`Failed to load util: ${utilName}`);
        }
    }

    /**
     * 預載入模組（在空閒時間）
     * @param {string[]} moduleNames - 模組名稱列表
     */
    preloadModules(moduleNames) {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => {
                moduleNames.forEach(name => {
                    if (name.startsWith('util:')) {
                        this.loadUtil(name.replace('util:', ''));
                    } else {
                        this.loadService(name);
                    }
                });
            });
        } else {
            // 降級方案：使用 setTimeout
            setTimeout(() => {
                moduleNames.forEach(name => {
                    if (name.startsWith('util:')) {
                        this.loadUtil(name.replace('util:', ''));
                    } else {
                        this.loadService(name);
                    }
                });
            }, 1000);
        }
    }

    /**
     * 清除已載入的模組（用於測試或重置）
     */
    clear() {
        this.loadedModules.clear();
        this.loadingPromises.clear();
        console.log('🗑️ 懶加載緩存已清除');
    }

    /**
     * 獲取載入統計
     */
    getStats() {
        return {
            loadedCount: this.loadedModules.size,
            loadingCount: this.loadingPromises.size,
            loadedModules: Array.from(this.loadedModules.keys())
        };
    }
}

// 創建單例
export const lazyLoader = new LazyLoader();

// 便捷函數
export async function loadAIGenerator() {
    const module = await lazyLoader.loadService('ai-generator');
    return module.aiGenerator;
}

export async function loadExporter() {
    const module = await lazyLoader.loadService('exporter');
    return module.exporter;
}

export async function loadOptimizer() {
    const module = await lazyLoader.loadService('optimizer');
    return module.optimizer;
}

export async function loadBudgetCalculator() {
    const module = await lazyLoader.loadService('budget-calculator');
    return module.budgetCalculator;
}

export async function loadMarkdownUtils() {
    return await lazyLoader.loadUtil('markdown');
}

export async function loadDateTimeUtils() {
    return await lazyLoader.loadUtil('date-time');
}

export async function loadValidators() {
    return await lazyLoader.loadUtil('validators');
}

// 導出默認實例
export default lazyLoader;
