/**
 * api-retry-handler.js
 * API 請求重試處理器
 * 
 * 實現智慧重試策略，包括指數退避、超時控制和離線降級
 */

import CONFIG from './config.js';

/**
 * API 重試處理器
 * 提供自動重試、超時控制和錯誤處理功能
 */
export class APIRetryHandler {
    constructor(options = {}) {
        this.maxRetries = options.maxRetries || CONFIG.API.RETRY_MAX;
        this.initialDelay = options.initialDelay || CONFIG.API.RETRY_INITIAL_DELAY;
        this.backoffMultiplier = options.backoffMultiplier || CONFIG.API.RETRY_BACKOFF_MULTIPLIER;
        this.timeout = options.timeout || CONFIG.API.TIMEOUT;
    }

    /**
     * 執行帶重試的 API 調用
     * @param {Function} apiCall - API 調用函數，接收 { signal } 參數
     * @param {Object} options - 選項
     * @returns {Promise} API 回應
     */
    async fetchWithRetry(apiCall, options = {}) {
        const {
            onRetry,           // 重試回調函數
            fallbackValue,     // 降級值
            enableOffline = true // 啟用離線降級
        } = options;

        let lastError = null;

        for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
            try {
                // 創建 AbortController 用於超時控制
                const controller = new AbortController();
                const timeoutId = setTimeout(() => {
                    controller.abort();
                }, this.timeout);

                // 執行 API 調用
                const result = await apiCall({ signal: controller.signal });

                // 成功，清除超時
                clearTimeout(timeoutId);

                // 記錄成功（如果之前有重試）
                if (attempt > 0) {
                    console.log(`✅ API call succeeded after ${attempt} retries`);
                }

                return result;

            } catch (error) {
                lastError = error;
                const isLastAttempt = attempt === this.maxRetries;

                // 檢查是否為不可重試的錯誤
                if (this._isNonRetryableError(error)) {
                    console.error('❌ Non-retryable error:', error);
                    throw error;
                }

                // 如果是最後一次嘗試
                if (isLastAttempt) {
                    console.error(`❌ All ${this.maxRetries + 1} attempts failed`);

                    // 嘗試離線降級
                    if (enableOffline && fallbackValue !== undefined) {
                        console.warn('🔄 Switching to offline mode');
                        return fallbackValue;
                    }

                    throw error;
                }

                // 計算延遲時間（指數退避）
                const delay = this._calculateDelay(attempt);

                console.warn(
                    `⚠️ Attempt ${attempt + 1}/${this.maxRetries + 1} failed, ` +
                    `retrying in ${delay}ms...`,
                    error.message || error
                );

                // 調用重試回調
                if (onRetry) {
                    try {
                        onRetry(attempt + 1, delay, error);
                    } catch (e) {
                        console.error('Error in onRetry callback:', e);
                    }
                }

                // 等待後重試
                await this._sleep(delay);
            }
        }

        // 理論上不會到達這裡，但為了類型安全
        throw lastError || new Error('Unknown error in fetchWithRetry');
    }

    /**
     * 檢查是否為不可重試的錯誤
     * @private
     */
    _isNonRetryableError(error) {
        // HTTP 狀態碼錯誤
        if (error.status) {
            return CONFIG.API.NON_RETRYABLE_STATUS.includes(error.status);
        }

        // 特定錯誤訊息
        const nonRetryableMessages = [
            'Invalid API key',
            'Unauthorized',
            'Forbidden',
            'Not Found'
        ];

        const errorMessage = error.message || String(error);
        return nonRetryableMessages.some(msg =>
            errorMessage.includes(msg)
        );
    }

    /**
     * 計算重試延遲（指數退避）
     * @private
     */
    _calculateDelay(attempt) {
        // 基礎延遲 * (倍數 ^ 嘗試次數)
        const exponentialDelay = this.initialDelay * Math.pow(
            this.backoffMultiplier,
            attempt
        );

        // 添加隨機抖動（±20%）避免雷鳴群效應
        const jitter = exponentialDelay * 0.2 * (Math.random() - 0.5);

        return Math.floor(exponentialDelay + jitter);
    }

    /**
     * 延遲執行
     * @private
     */
    _sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 批量執行帶重試的 API 調用
     * @param {Array} apiCalls - API 調用函數陣列
     * @param {Object} options - 選項
     * @returns {Promise<Array>} 結果陣列
     */
    async fetchAllWithRetry(apiCalls, options = {}) {
        const {
            parallel = true,    // 是否並行執行
            stopOnError = false // 遇到錯誤是否停止
        } = options;

        if (parallel) {
            // 並行執行
            const promises = apiCalls.map(apiCall =>
                this.fetchWithRetry(apiCall, options)
                    .catch(error => {
                        if (stopOnError) throw error;
                        return { error };
                    })
            );

            return Promise.all(promises);
        } else {
            // 串行執行
            const results = [];

            for (const apiCall of apiCalls) {
                try {
                    const result = await this.fetchWithRetry(apiCall, options);
                    results.push(result);
                } catch (error) {
                    if (stopOnError) throw error;
                    results.push({ error });
                }
            }

            return results;
        }
    }
}

// 創建全域重試處理器實例
export const globalRetryHandler = new APIRetryHandler();

/**
 * 便捷函數：執行帶重試的 fetch 請求
 * @param {string} url - 請求 URL
 * @param {Object} options - fetch 選項
 * @returns {Promise} 回應
 */
export async function fetchWithRetry(url, options = {}) {
    const handler = new APIRetryHandler();

    return handler.fetchWithRetry(
        async ({ signal }) => {
            const response = await fetch(url, {
                ...options,
                signal
            });

            if (!response.ok) {
                const error = new Error(`HTTP ${response.status}: ${response.statusText}`);
                error.status = response.status;
                throw error;
            }

            return response.json();
        },
        options.retryOptions || {}
    );
}
