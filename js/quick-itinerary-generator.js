/**
 * quick-itinerary-generator.js
 * 快速行程生成器 - 使用新服務模組的示範功能
 * 
 * 這個新功能展示如何使用 Phase 2 服務模組創建實用功能
 */

import { aiGenerator } from './services/ai-generator.js';
import { optimizer } from './services/optimizer.js';
import { budgetCalculator } from './services/budget-calculator.js';
import { exporter } from './services/exporter.js';
import { eventBus } from './core/event-bus.js';
import { getAppState, updateAppState } from './state.js';

/**
 * 快速行程生成器類別
 */
export class QuickItineraryGenerator {
    constructor() {
        this.setupEventListeners();
    }

    /**
     * 設置事件監聽器
     */
    setupEventListeners() {
        // 監聽生成開始
        eventBus.on('ai:generation:start', (data) => {
            this.showLoading('正在生成行程...');
        });

        // 監聽生成完成
        eventBus.on('ai:generation:complete', (data) => {
            this.hideLoading();
            this.displayItinerary(data.result);
        });

        // 監聽生成錯誤
        eventBus.on('ai:generation:error', (data) => {
            this.hideLoading();
            this.showError(data.error);
        });
    }

    /**
     * 一鍵生成完整行程（含優化和預算）
     * @param {Object} options - 行程選項
     */
    async generateCompleteItinerary(options = {}) {
        try {
            console.log('🚀 開始一鍵生成完整行程...');

            // 步驟 1: 生成基礎行程
            console.log('📝 步驟 1/4: 生成基礎行程');
            const itinerary = await aiGenerator.generateItinerary('multi-day', {
                days: options.days || 3,
                style: options.style || 'cultural',
                budgetLevel: options.budgetLevel || 'comfort',
                transportPref: options.transportPref || 'public'
            });

            // 步驟 2: 優化行程路線
            console.log('⚡ 步驟 2/4: 優化行程路線');
            const optimized = await optimizer.optimizeItinerary({
                travelStyle: options.style || 'cultural'
            });

            // 步驟 3: 計算預算
            console.log('💰 步驟 3/4: 計算預算');
            const budget = await budgetCalculator.calculateBudget(options.days || 3, {
                budgetLevel: options.budgetLevel || 'comfort',
                diningPreference: options.diningPreference || 'local-street'
            });

            // 步驟 4: 準備匯出
            console.log('📦 步驟 4/4: 準備匯出');

            const result = {
                itinerary,
                optimized,
                budget,
                summary: this.createSummary(itinerary, optimized, budget)
            };

            console.log('✅ 完整行程生成成功！');
            return result;

        } catch (error) {
            console.error('❌ 生成失敗:', error);
            throw error;
        }
    }

    /**
     * 快速生成單日行程
     * @param {string} destination - 目的地
     * @param {Object} options - 選項
     */
    async generateQuickDayTrip(destination, options = {}) {
        try {
            console.log(`🎯 生成 ${destination} 一日遊行程...`);

            const result = await aiGenerator.generateItinerary('single-day', {
                destinations: [destination],
                days: 1,
                style: options.style || 'relaxed',
                startTime: options.startTime || '09:00',
                endTime: options.endTime || '18:00'
            });

            console.log('✅ 一日遊行程生成完成！');
            return result;

        } catch (error) {
            console.error('❌ 生成失敗:', error);
            throw error;
        }
    }

    /**
     * 智能行程推薦（根據預算和時間）
     * @param {number} budget - 預算（台幣）
     * @param {number} days - 天數
     */
    async smartRecommendation(budget, days) {
        try {
            console.log(`🧠 智能推薦: 預算 NT$${budget}, ${days}天`);

            // 根據預算決定等級
            let budgetLevel = 'comfort';
            const dailyBudget = budget / days;

            if (dailyBudget < 1500) {
                budgetLevel = 'budget';
            } else if (dailyBudget > 3000) {
                budgetLevel = 'luxury';
            }

            console.log(`💡 建議預算等級: ${budgetLevel}`);

            // 生成行程
            const itinerary = await aiGenerator.generateItinerary('multi-day', {
                days,
                budgetLevel,
                style: budgetLevel === 'luxury' ? 'premium' : 'cultural'
            });

            // 計算實際預算
            const budgetEstimate = await budgetCalculator.calculateBudget(days, {
                budgetLevel
            });

            // 檢查是否超預算
            const isOverBudget = budgetEstimate.totalCost > budget;

            if (isOverBudget) {
                console.warn('⚠️ 預算可能不足，建議調整');
            }

            return {
                itinerary,
                budgetEstimate,
                isOverBudget,
                recommendation: this.createBudgetRecommendation(budget, budgetEstimate)
            };

        } catch (error) {
            console.error('❌ 智能推薦失敗:', error);
            throw error;
        }
    }

    /**
     * 匯出完整行程包
     * @param {Object} itineraryData - 行程數據
     */
    async exportCompletePackage(itineraryData) {
        try {
            console.log('📦 匯出完整行程包...');

            // 匯出 ICS 日曆
            exporter.exportToICS();

            // 生成預算報告 HTML
            const budgetHtml = budgetCalculator.renderCostBreakdown(
                itineraryData.budget,
                itineraryData.itinerary.days || 3
            );

            // 創建完整報告
            const report = this.createFullReport(itineraryData, budgetHtml);

            console.log('✅ 匯出完成！');
            return report;

        } catch (error) {
            console.error('❌ 匯出失敗:', error);
            throw error;
        }
    }

    // ==================== 輔助方法 ====================

    /**
     * 創建摘要
     */
    createSummary(itinerary, optimized, budget) {
        return {
            totalDays: itinerary.days || 3,
            totalLocations: itinerary.locations?.length || 0,
            totalCost: budget.totalCost,
            dailyAverage: budget.dailyAverage,
            optimizationSuggestions: optimized.suggestions?.length || 0
        };
    }

    /**
     * 創建預算建議
     */
    createBudgetRecommendation(targetBudget, estimate) {
        const difference = targetBudget - estimate.totalCost;
        const percentage = (difference / targetBudget * 100).toFixed(1);

        if (difference >= 0) {
            return {
                status: 'ok',
                message: `預算充足，還有 NT$${Math.abs(difference)} 的餘裕 (${percentage}%)`
            };
        } else {
            return {
                status: 'warning',
                message: `預算可能不足 NT$${Math.abs(difference)} (超出 ${Math.abs(percentage)}%)`
            };
        }
    }

    /**
     * 創建完整報告
     */
    createFullReport(data, budgetHtml) {
        return {
            itinerary: data.itinerary,
            optimized: data.optimized,
            budget: budgetHtml,
            summary: data.summary,
            exportDate: new Date().toISOString()
        };
    }

    /**
     * 顯示載入動畫
     */
    showLoading(message) {
        console.log(`⏳ ${message}`);
        // 實際實現：顯示 UI 載入動畫
    }

    /**
     * 隱藏載入動畫
     */
    hideLoading() {
        console.log('✅ 載入完成');
        // 實際實現：隱藏 UI 載入動畫
    }

    /**
     * 顯示行程
     */
    displayItinerary(result) {
        console.log('📊 顯示行程:', result);
        // 實際實現：渲染到 UI
    }

    /**
     * 顯示錯誤
     */
    showError(error) {
        console.error('⚠️ 錯誤:', error);
        // 實際實現：顯示錯誤訊息
    }
}

// ==================== 便捷函數 ====================

/**
 * 快速生成 3 天文化之旅
 */
export async function quickCulturalTrip() {
    const generator = new QuickItineraryGenerator();
    return await generator.generateCompleteItinerary({
        days: 3,
        style: 'cultural',
        budgetLevel: 'comfort'
    });
}

/**
 * 快速生成台北一日遊
 */
export async function quickTaipeiDayTrip() {
    const generator = new QuickItineraryGenerator();
    return await generator.generateQuickDayTrip('台北', {
        style: 'relaxed',
        startTime: '09:00',
        endTime: '18:00'
    });
}

/**
 * 智能預算規劃
 */
export async function smartBudgetPlanner(budget, days) {
    const generator = new QuickItineraryGenerator();
    return await generator.smartRecommendation(budget, days);
}

// 導出單例
export const quickGenerator = new QuickItineraryGenerator();

// ==================== 使用示例 ====================

/*
// 在其他文件中使用：

import { quickCulturalTrip, quickTaipeiDayTrip, smartBudgetPlanner } from './quick-itinerary-generator.js';

// 快速生成文化之旅
const culturalTrip = await quickCulturalTrip();

// 快速生成台北一日遊
const dayTrip = await quickTaipeiDayTrip();

// 智能預算規劃
const budgetPlan = await smartBudgetPlanner(5000, 3);
*/
