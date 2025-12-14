/**
 * example-usage.js
 * 示例：如何在新功能中使用 Phase 2 服務模組
 * 
 * 這個文件展示了如何正確導入和使用新創建的服務模組
 */

// ==================== 導入服務模組 ====================

// 方法 1: 導入類別（用於創建自定義實例）
import { AIGenerator } from './services/ai-generator.js';
import { Exporter } from './services/exporter.js';
import { Optimizer } from './services/optimizer.js';
import { BudgetCalculator } from './services/budget-calculator.js';

// 方法 2: 導入單例實例（推薦用於大多數情況）
import {
    aiGenerator,
    exporter,
    optimizer,
    budgetCalculator
} from './services/ai-generator.js';

// 導入事件系統（用於監聽服務事件）
import { eventBus } from './core/event-bus.js';

// 導入狀態管理
import { getAppState, updateAppState } from './state.js';

// ==================== 使用示例 ====================

/**
 * 示例 1: 使用 AI Generator 生成行程
 */
export async function exampleGenerateItinerary() {
    try {
        console.log('🚀 開始生成行程...');

        // 使用單例實例（推薦）
        const result = await aiGenerator.generateItinerary('multi-day', {
            days: 3,
            style: 'cultural',
            budgetLevel: 'comfort',
            transportPref: 'public'
        });

        console.log('✅ 行程生成成功:', result);
        return result;

    } catch (error) {
        console.error('❌ 行程生成失敗:', error);
        throw error;
    }
}

/**
 * 示例 2: 使用 Exporter 匯出行程
 */
export function exampleExportItinerary() {
    try {
        console.log('📤 開始匯出行程...');

        // 匯出為 ICS 格式
        exporter.exportToICS();

        console.log('✅ 匯出成功');

    } catch (error) {
        console.error('❌ 匯出失敗:', error);
    }
}

/**
 * 示例 3: 使用 Optimizer 優化行程
 */
export async function exampleOptimizeItinerary() {
    try {
        console.log('⚡ 開始優化行程...');

        const result = await optimizer.optimizeItinerary({
            travelStyle: 'relaxed'
        });

        console.log('✅ 優化完成:', result);
        return result;

    } catch (error) {
        console.error('❌ 優化失敗:', error);
        throw error;
    }
}

/**
 * 示例 4: 使用 Budget Calculator 計算預算
 */
export async function exampleCalculateBudget() {
    try {
        console.log('💰 開始計算預算...');

        const result = await budgetCalculator.calculateBudget(3, {
            budgetLevel: 'comfort',
            diningPreference: 'local-street'
        });

        console.log('✅ 預算計算完成:', result);

        // 渲染成本分解
        const html = budgetCalculator.renderCostBreakdown(result, 3);
        console.log('HTML 已生成');

        return result;

    } catch (error) {
        console.error('❌ 預算計算失敗:', error);
        throw error;
    }
}

/**
 * 示例 5: 使用事件系統監聽服務事件
 */
export function exampleSetupEventListeners() {
    console.log('🎧 設置事件監聽器...');

    // 監聽 AI 生成開始
    eventBus.on('ai:generation:start', (data) => {
        console.log('🎬 AI 生成開始:', data);
        // 顯示載入動畫
        showLoadingSpinner();
    });

    // 監聽 AI 生成完成
    eventBus.on('ai:generation:complete', (data) => {
        console.log('🎉 AI 生成完成:', data);
        // 隱藏載入動畫
        hideLoadingSpinner();
        // 顯示結果
        displayResult(data.result);
    });

    // 監聽 AI 生成錯誤
    eventBus.on('ai:generation:error', (data) => {
        console.error('💥 AI 生成錯誤:', data);
        // 顯示錯誤訊息
        showError(data.error);
    });

    // 監聽匯出完成
    eventBus.on('export:complete', (data) => {
        console.log('📦 匯出完成:', data);
        showToast('行程已成功匯出！', 'success');
    });

    // 監聽優化完成
    eventBus.on('optimize:complete', (data) => {
        console.log('⚡ 優化完成:', data);
        if (data.result.suggestions) {
            displaySuggestions(data.result.suggestions);
        }
    });

    console.log('✅ 事件監聽器設置完成');
}

/**
 * 示例 6: 創建自定義服務實例（進階用法）
 */
export function exampleCustomInstance() {
    console.log('🔧 創建自定義服務實例...');

    // 創建自定義 AI Generator 實例
    const customGenerator = new AIGenerator({
        appState: getAppState(),
        destinationsByCountry: window.destinationsByCountry
    });

    // 使用自定義實例
    customGenerator.generateDescription({
        name: '台北101',
        id: 'taipei-101'
    }).then(description => {
        console.log('✅ 描述生成完成:', description);
    });
}

/**
 * 示例 7: 完整的工作流程
 */
export async function exampleCompleteWorkflow() {
    console.log('🎯 開始完整工作流程...');

    try {
        // 1. 生成行程
        const itinerary = await aiGenerator.generateItinerary('multi-day', {
            days: 3,
            style: 'cultural'
        });

        // 2. 優化行程
        const optimized = await optimizer.optimizeItinerary({
            travelStyle: 'relaxed'
        });

        // 3. 計算預算
        const budget = await budgetCalculator.calculateBudget(3, {
            budgetLevel: 'comfort'
        });

        // 4. 匯出行程
        exporter.exportToICS();

        console.log('🎉 完整工作流程完成！');

        return {
            itinerary,
            optimized,
            budget
        };

    } catch (error) {
        console.error('❌ 工作流程失敗:', error);
        throw error;
    }
}

// ==================== 輔助函數（示例）====================

function showLoadingSpinner() {
    console.log('⏳ 顯示載入動畫...');
    // 實際實現
}

function hideLoadingSpinner() {
    console.log('✅ 隱藏載入動畫...');
    // 實際實現
}

function displayResult(result) {
    console.log('📊 顯示結果:', result);
    // 實際實現
}

function showError(error) {
    console.error('⚠️ 顯示錯誤:', error);
    // 實際實現
}

function showToast(message, type) {
    console.log(`🔔 Toast (${type}):`, message);
    // 實際實現
}

function displaySuggestions(suggestions) {
    console.log('💡 顯示建議:', suggestions);
    // 實際實現
}

// ==================== 導出所有示例函數 ====================

export default {
    exampleGenerateItinerary,
    exampleExportItinerary,
    exampleOptimizeItinerary,
    exampleCalculateBudget,
    exampleSetupEventListeners,
    exampleCustomInstance,
    exampleCompleteWorkflow
};

// ==================== 使用說明 ====================

/*
在其他文件中使用這些示例：

// 導入示例
import examples from './example-usage.js';

// 或導入特定函數
import { exampleGenerateItinerary } from './example-usage.js';

// 執行示例
examples.exampleGenerateItinerary();

// 或
exampleGenerateItinerary();
*/
