/**
 * itinerary-coordinator.js
 * 行程協調器 - 協調多個服務模組的高級工作流程
 */

import { lazyLoader } from '../lazy-loader.js';
import { eventBus } from '../core/event-bus.js';
import { getAppState, updateAppState } from '../state.js';

/**
 * 行程協調器類別
 * 提供高級 API 來協調多個服務模組
 */
export class ItineraryCoordinator {
    constructor() {
        this.services = {};
    }

    /**
     * 確保服務已載入
     * @private
     */
    async _ensureService(serviceName) {
        if (!this.services[serviceName]) {
            const module = await lazyLoader.loadService(serviceName);
            // 獲取單例實例
            this.services[serviceName] = module[serviceName] || module.default;
        }
        return this.services[serviceName];
    }

    /**
     * 創建完整行程（生成 + 優化 + 預算）
     * @param {Object} options - 行程選項
     * @returns {Promise<Object>} 完整行程數據
     */
    async createCompleteItinerary(options = {}) {
        try {
            console.log('🎯 開始創建完整行程...');
            eventBus.emit('coordinator:start', { type: 'complete-itinerary' });

            const {
                days = 3,
                style = 'cultural',
                budgetLevel = 'comfort',
                transportPref = 'public',
                diningPreference = 'local-street'
            } = options;

            // 步驟 1: 生成基礎行程
            console.log('📝 步驟 1/3: 生成基礎行程');
            const aiGenerator = await this._ensureService('ai-generator');
            const itinerary = await aiGenerator.generateItinerary('multi-day', {
                days,
                style,
                budgetLevel,
                transportPref
            });

            // 步驟 2: 優化行程
            console.log('⚡ 步驟 2/3: 優化行程');
            const optimizer = await this._ensureService('optimizer');
            const optimized = await optimizer.optimizeItinerary({
                travelStyle: style
            });

            // 步驟 3: 計算預算
            console.log('💰 步驟 3/3: 計算預算');
            const budgetCalculator = await this._ensureService('budget-calculator');
            const budget = await budgetCalculator.calculateBudget(days, {
                budgetLevel,
                diningPreference
            });

            const result = {
                itinerary,
                optimized,
                budget,
                metadata: {
                    days,
                    style,
                    budgetLevel,
                    transportPref,
                    createdAt: new Date().toISOString()
                }
            };

            console.log('✅ 完整行程創建成功');
            eventBus.emit('coordinator:complete', { type: 'complete-itinerary', result });

            return result;

        } catch (error) {
            console.error('❌ 創建完整行程失敗:', error);
            eventBus.emit('coordinator:error', { type: 'complete-itinerary', error });
            throw error;
        }
    }

    /**
     * 快速生成單日遊
     * @param {string} destination - 目的地
     * @param {Object} options - 選項
     * @returns {Promise<Object>}
     */
    async createQuickDayTrip(destination, options = {}) {
        try {
            console.log(`🎯 快速生成 ${destination} 一日遊...`);

            const aiGenerator = await this._ensureService('ai-generator');
            const result = await aiGenerator.generateItinerary('single-day', {
                destinations: [destination],
                days: 1,
                style: options.style || 'relaxed',
                startTime: options.startTime || '09:00',
                endTime: options.endTime || '18:00'
            });

            console.log('✅ 一日遊生成完成');
            return result;

        } catch (error) {
            console.error('❌ 一日遊生成失敗:', error);
            throw error;
        }
    }

    /**
     * 智能預算規劃
     * @param {number} targetBudget - 目標預算（台幣）
     * @param {number} days - 天數
     * @returns {Promise<Object>}
     */
    async smartBudgetPlanning(targetBudget, days) {
        try {
            console.log(`🧠 智能預算規劃: NT$${targetBudget}, ${days}天`);

            // 根據預算決定等級
            const dailyBudget = targetBudget / days;
            let budgetLevel = 'comfort';

            if (dailyBudget < 1500) {
                budgetLevel = 'budget';
            } else if (dailyBudget > 3000) {
                budgetLevel = 'luxury';
            }

            console.log(`💡 建議預算等級: ${budgetLevel}`);

            // 生成行程
            const aiGenerator = await this._ensureService('ai-generator');
            const itinerary = await aiGenerator.generateItinerary('multi-day', {
                days,
                budgetLevel,
                style: budgetLevel === 'luxury' ? 'premium' : 'cultural'
            });

            // 計算實際預算
            const budgetCalculator = await this._ensureService('budget-calculator');
            const budgetEstimate = await budgetCalculator.calculateBudget(days, {
                budgetLevel
            });

            // 檢查是否超預算
            const isOverBudget = budgetEstimate.totalCost > targetBudget;
            const difference = targetBudget - budgetEstimate.totalCost;
            const percentage = (difference / targetBudget * 100).toFixed(1);

            const recommendation = {
                status: isOverBudget ? 'warning' : 'ok',
                message: isOverBudget
                    ? `預算可能不足 NT$${Math.abs(difference)} (超出 ${Math.abs(percentage)}%)`
                    : `預算充足，還有 NT$${Math.abs(difference)} 的餘裕 (${percentage}%)`
            };

            return {
                itinerary,
                budgetEstimate,
                isOverBudget,
                recommendation,
                suggestedBudgetLevel: budgetLevel
            };

        } catch (error) {
            console.error('❌ 智能預算規劃失敗:', error);
            throw error;
        }
    }

    /**
     * 匯出完整行程包
     * @param {Object} itineraryData - 行程數據
     * @param {string} format - 匯出格式 ('ics' | 'google')
     * @returns {Promise<void>}
     */
    async exportCompletePackage(itineraryData, format = 'ics') {
        try {
            console.log(`📦 匯出完整行程包 (${format})...`);

            const exporter = await this._ensureService('exporter');

            if (format === 'ics') {
                exporter.exportToICS();
            } else if (format === 'google') {
                exporter.exportToGoogleCalendar();
            }

            console.log('✅ 匯出完成');

        } catch (error) {
            console.error('❌ 匯出失敗:', error);
            throw error;
        }
    }

    /**
     * 優化現有行程
     * @param {Object} options - 優化選項
     * @returns {Promise<Object>}
     */
    async optimizeExistingItinerary(options = {}) {
        try {
            console.log('⚡ 優化現有行程...');

            const optimizer = await this._ensureService('optimizer');
            const result = await optimizer.optimizeItinerary(options);

            console.log('✅ 優化完成');
            return result;

        } catch (error) {
            console.error('❌ 優化失敗:', error);
            throw error;
        }
    }

    /**
     * 根據反饋改進行程
     * @param {string} feedback - 用戶反饋
     * @param {string} category - 反饋類別
     * @returns {Promise<Object>}
     */
    async improveWithFeedback(feedback, category) {
        try {
            console.log(`💬 根據反饋改進: ${category}`);

            const optimizer = await this._ensureService('optimizer');
            const result = await optimizer.optimizeWithFeedback(feedback, category);

            console.log('✅ 改進完成');
            return result;

        } catch (error) {
            console.error('❌ 改進失敗:', error);
            throw error;
        }
    }

    /**
     * 獲取協調器統計
     */
    getStats() {
        return {
            loadedServices: Object.keys(this.services),
            serviceCount: Object.keys(this.services).length
        };
    }
}

// 創建單例
export const itineraryCoordinator = new ItineraryCoordinator();

// 便捷函數
export async function createCompleteItinerary(options) {
    return itineraryCoordinator.createCompleteItinerary(options);
}

export async function createQuickDayTrip(destination, options) {
    return itineraryCoordinator.createQuickDayTrip(destination, options);
}

export async function smartBudgetPlanning(targetBudget, days) {
    return itineraryCoordinator.smartBudgetPlanning(targetBudget, days);
}

export default ItineraryCoordinator;
