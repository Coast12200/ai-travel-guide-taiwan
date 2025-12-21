/**
 * smart-trip-planner.js
 * 智能旅行規劃器 - 展示如何使用 Phase 2 服務模組
 * 
 * 這個功能整合了所有 4 個服務模組，提供智能化的旅行規劃體驗
 */

// ==================== 導入服務模組 ====================
import { aiGenerator } from './services/ai-generator.js';
import { exporter } from './services/exporter.js';
import { optimizer } from './services/optimizer.js';
import { budgetCalculator } from './services/budget-calculator.js';

// 導入事件系統
import { eventBus } from './core/event-bus.js';

// 導入狀態管理
import { getAppState, updateAppState } from './state.js';

// 導入 UI 輔助函數
import { showError, showToast } from './ui.js';

/**
 * 智能旅行規劃器類別
 */
class SmartTripPlanner {
    constructor() {
        this.currentPlan = null;
        this.setupEventListeners();
        this.initializeUI();
    }

    /**
     * 設置事件監聽器
     */
    setupEventListeners() {
        // 監聽 AI 生成事件
        eventBus.on('ai:generation:start', (data) => {
            this.showProgress('正在生成行程...', 25);
        });

        eventBus.on('ai:generation:complete', (data) => {
            this.showProgress('行程生成完成', 50);
            this.handleItineraryGenerated(data.result);
        });

        eventBus.on('ai:generation:error', (data) => {
            this.hideProgress();
            showError(`生成失敗: ${data.error}`, document.getElementById('smartPlannerContent'));
        });

        // 監聽優化事件
        eventBus.on('optimize:complete', (data) => {
            this.showProgress('優化完成', 75);
            this.handleOptimizationComplete(data.result);
        });

        // 監聽預算計算事件
        eventBus.on('budget:calculation:complete', (data) => {
            this.showProgress('預算計算完成', 100);
            this.handleBudgetCalculated(data.result);
        });
    }

    /**
     * 初始化 UI
     */
    initializeUI() {
        // 創建智能規劃器容器（如果不存在）
        if (!document.getElementById('smartPlannerContainer')) {
            this.createPlannerUI();
        }

        // 綁定按鈕事件
        this.bindUIEvents();
    }

    /**
     * 創建規劃器 UI
     */
    createPlannerUI() {
        const container = document.createElement('div');
        container.id = 'smartPlannerContainer';
        container.className = 'smart-planner-container';
        container.innerHTML = `
            <div class="smart-planner-header">
                <h2>🧠 智能旅行規劃器</h2>
                <p>使用 AI 服務模組快速生成完整旅行計劃</p>
            </div>

            <div class="smart-planner-form">
                <div class="form-group">
                    <label>旅行天數</label>
                    <input type="number" id="smartDays" min="1" max="14" value="3">
                </div>

                <div class="form-group">
                    <label>旅行風格</label>
                    <select id="smartStyle">
                        <option value="cultural">文化探索</option>
                        <option value="relaxed">悠閒慢活</option>
                        <option value="adventure">冒險刺激</option>
                        <option value="foodie">美食之旅</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>預算等級</label>
                    <select id="smartBudget">
                        <option value="budget">節儉 (NT$800-1,500/天)</option>
                        <option value="comfort" selected>舒適 (NT$1,500-3,000/天)</option>
                        <option value="luxury">豪華 (NT$3,000+/天)</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>交通方式</label>
                    <select id="smartTransport">
                        <option value="public">大眾運輸</option>
                        <option value="driving">自駕</option>
                        <option value="mixed">混合</option>
                    </select>
                </div>

                <div class="form-actions">
                    <button id="smartPlanBtn" class="btn btn-primary">
                        🚀 一鍵生成智能計劃
                    </button>
                    <button id="smartOptimizeBtn" class="btn btn-secondary" disabled>
                        ⚡ 優化行程
                    </button>
                    <button id="smartExportBtn" class="btn btn-secondary" disabled>
                        📤 匯出行程
                    </button>
                </div>
            </div>

            <div id="smartPlannerProgress" class="progress-container hidden">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <p class="progress-text">準備中...</p>
            </div>

            <div id="smartPlannerContent" class="planner-content"></div>
        `;

        // 插入到主容器
        const mainContent = document.querySelector('.container') || document.body;
        mainContent.appendChild(container);
    }

    /**
     * 綁定 UI 事件
     */
    bindUIEvents() {
        const planBtn = document.getElementById('smartPlanBtn');
        const optimizeBtn = document.getElementById('smartOptimizeBtn');
        const exportBtn = document.getElementById('smartExportBtn');

        if (planBtn) {
            planBtn.addEventListener('click', () => this.generateSmartPlan());
        }

        if (optimizeBtn) {
            optimizeBtn.addEventListener('click', () => this.optimizePlan());
        }

        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportPlan());
        }
    }

    /**
     * 生成智能計劃
     */
    async generateSmartPlan() {
        try {
            console.log('🚀 開始生成智能旅行計劃...');

            // 獲取用戶輸入
            const days = parseInt(document.getElementById('smartDays')?.value || 3);
            const style = document.getElementById('smartStyle')?.value || 'cultural';
            const budgetLevel = document.getElementById('smartBudget')?.value || 'comfort';
            const transportPref = document.getElementById('smartTransport')?.value || 'public';

            // 禁用按鈕
            this.setButtonsEnabled(false);

            // 步驟 1: 生成基礎行程
            console.log('📝 步驟 1/3: 生成基礎行程');
            this.showProgress('正在生成行程...', 33);

            const itinerary = await aiGenerator.generateItinerary('multi-day', {
                days,
                style,
                budgetLevel,
                transportPref
            });

            // 步驟 2: 自動優化
            console.log('⚡ 步驟 2/3: 自動優化行程');
            this.showProgress('正在優化路線...', 66);

            const optimized = await optimizer.optimizeItinerary({
                travelStyle: style
            });

            // 步驟 3: 計算預算
            console.log('💰 步驟 3/3: 計算預算');
            this.showProgress('正在計算預算...', 90);

            const budget = await budgetCalculator.calculateBudget(days, {
                budgetLevel,
                diningPreference: 'local-street'
            });

            // 完成
            this.showProgress('完成！', 100);

            // 儲存計劃
            this.currentPlan = {
                itinerary,
                optimized,
                budget,
                params: { days, style, budgetLevel, transportPref }
            };

            // 顯示結果
            this.displayPlan();

            // 啟用按鈕
            this.setButtonsEnabled(true);

            showToast('智能計劃生成成功！', 'success');

        } catch (error) {
            console.error('❌ 生成失敗:', error);
            this.hideProgress();
            this.setButtonsEnabled(true);
            showError(`生成失敗: ${error.message}`, document.getElementById('smartPlannerContent'));
        }
    }

    /**
     * 優化計劃
     */
    async optimizePlan() {
        if (!this.currentPlan) {
            showToast('請先生成計劃', 'warning');
            return;
        }

        try {
            console.log('⚡ 重新優化行程...');
            this.showProgress('正在優化...', 50);

            const optimized = await optimizer.optimizeItinerary({
                travelStyle: this.currentPlan.params.style
            });

            this.currentPlan.optimized = optimized;
            this.displayPlan();
            this.hideProgress();

            showToast('優化完成！', 'success');

        } catch (error) {
            console.error('❌ 優化失敗:', error);
            this.hideProgress();
            showError(`優化失敗: ${error.message}`, document.getElementById('smartPlannerContent'));
        }
    }

    /**
     * 匯出計劃
     */
    exportPlan() {
        if (!this.currentPlan) {
            showToast('請先生成計劃', 'warning');
            return;
        }

        try {
            console.log('📤 匯出計劃...');

            // 匯出為 ICS
            exporter.exportToICS();

            showToast('行程已匯出為 .ics 檔案', 'success');

        } catch (error) {
            console.error('❌ 匯出失敗:', error);
            showError(`匯出失敗: ${error.message}`, document.getElementById('smartPlannerContent'));
        }
    }

    /**
     * 顯示計劃
     */
    displayPlan() {
        const container = document.getElementById('smartPlannerContent');
        if (!container || !this.currentPlan) return;

        const { itinerary, optimized, budget, params } = this.currentPlan;

        let html = `
            <div class="plan-summary">
                <h3>📋 計劃摘要</h3>
                <div class="summary-grid">
                    <div class="summary-item">
                        <span class="label">天數</span>
                        <span class="value">${params.days} 天</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">風格</span>
                        <span class="value">${this.getStyleLabel(params.style)}</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">預算</span>
                        <span class="value">NT$${Math.round(budget.totalCost).toLocaleString()}</span>
                    </div>
                    <div class="summary-item">
                        <span class="label">每日平均</span>
                        <span class="value">NT$${Math.round(budget.dailyAverage).toLocaleString()}</span>
                    </div>
                </div>
            </div>

            <div class="plan-sections">
                <div class="plan-section">
                    <h4>🗺️ 優化後行程</h4>
                    <div class="itinerary-content">
                        ${this.formatItinerary(optimized.optimized_itinerary_text || itinerary.itinerary_text)}
                    </div>
                </div>

                ${optimized.suggestions && optimized.suggestions.length > 0 ? `
                <div class="plan-section">
                    <h4>💡 優化建議</h4>
                    <ul class="suggestions-list">
                        ${optimized.suggestions.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}

                <div class="plan-section">
                    <h4>💰 預算明細</h4>
                    ${budgetCalculator.renderCostBreakdown(budget, params.days)}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    /**
     * 處理行程生成完成
     */
    handleItineraryGenerated(result) {
        console.log('✅ 行程生成完成:', result);
    }

    /**
     * 處理優化完成
     */
    handleOptimizationComplete(result) {
        console.log('✅ 優化完成:', result);
    }

    /**
     * 處理預算計算完成
     */
    handleBudgetCalculated(result) {
        console.log('✅ 預算計算完成:', result);
    }

    /**
     * 顯示進度
     */
    showProgress(text, percent) {
        const container = document.getElementById('smartPlannerProgress');
        const fill = container?.querySelector('.progress-fill');
        const textEl = container?.querySelector('.progress-text');

        if (container) {
            container.classList.remove('hidden');
            if (fill) fill.style.width = `${percent}%`;
            if (textEl) textEl.textContent = text;
        }
    }

    /**
     * 隱藏進度
     */
    hideProgress() {
        const container = document.getElementById('smartPlannerProgress');
        if (container) {
            container.classList.add('hidden');
        }
    }

    /**
     * 設置按鈕啟用狀態
     */
    setButtonsEnabled(enabled) {
        const planBtn = document.getElementById('smartPlanBtn');
        const optimizeBtn = document.getElementById('smartOptimizeBtn');
        const exportBtn = document.getElementById('smartExportBtn');

        if (planBtn) planBtn.disabled = !enabled;
        if (optimizeBtn) optimizeBtn.disabled = !enabled || !this.currentPlan;
        if (exportBtn) exportBtn.disabled = !enabled || !this.currentPlan;
    }

    /**
     * 格式化行程文字
     */
    formatItinerary(text) {
        if (!text) return '<p>無行程內容</p>';

        // 簡單的 Markdown 轉換
        return text
            .split('\n\n')
            .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
            .join('');
    }

    /**
     * 獲取風格標籤
     */
    getStyleLabel(style) {
        const labels = {
            'cultural': '文化探索',
            'relaxed': '悠閒慢活',
            'adventure': '冒險刺激',
            'foodie': '美食之旅'
        };
        return labels[style] || style;
    }
}

// ==================== 導出和初始化 ====================

// 創建單例
export const smartTripPlanner = new SmartTripPlanner();

// 便捷函數
export function initSmartPlanner() {
    return smartTripPlanner;
}

// 自動初始化（如果在瀏覽器環境）
if (typeof window !== 'undefined') {
    window.smartTripPlanner = smartTripPlanner;
    console.log('✅ 智能旅行規劃器已初始化');
    console.log('💡 使用 window.smartTripPlanner 訪問');
}

export default SmartTripPlanner;
