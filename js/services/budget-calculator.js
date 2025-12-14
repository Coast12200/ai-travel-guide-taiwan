/**
 * budget-calculator.js
 * 預算計算服務
 * 
 * 負責旅費估算和成本分析：
 * - 預算估算
 * - 成本分解
 * - 多幣種顯示
 * - 預算調整
 */

import { callGeminiAPIWithSchema } from '../api.js';
import { getAppState, updateAppState } from '../state.js';
import { eventBus } from '../core/event-bus.js';

/**
 * 預算計算服務類別
 */
export class BudgetCalculator {
    constructor() {
        this.destinationsByCountry = null;

        // 預算等級映射
        this.budgetLevelMap = {
            'budget': '節儉 (每日NT$800-1,500)',
            'comfort': '舒適 (每日NT$1,500-3,000)',
            'luxury': '豪華 (每日NT$3,000-5,000)'
        };

        // 餐飲偏好映射
        this.diningMap = {
            'local-street': '當地小吃 (平價)',
            'casual-restaurant': '普通餐廳 (中等)',
            'fine-dining': '高檔餐廳 (奢華)',
            'self-catering': '自煮 (最省)',
            'mixed': '混合搭配'
        };

        // 類別顏色
        this.categoryColors = {
            'Accommodation': '#FF6B6B',
            'Food': '#4ECDC4',
            'Transportation': '#45B7D1',
            'Tickets': '#FFA07A',
            'Contingency': '#98D8C8'
        };
    }

    /**
     * 計算預算估算
     * @param {number} days - 天數
     * @param {Object} options - 選項
     * @returns {Promise<Object>} 預算估算結果
     */
    async calculateBudget(days = 1, options = {}) {
        try {
            const appState = window.appState || getAppState();
            
            if (!appState) {
                throw new Error('應用程式狀態未初始化');
            }

            if (!appState.isGeminiApiVerified) {
                throw new Error('AI 行程規劃需要驗證 Gemini API');
            }

            eventBus.emit('budget:calculation:start', { days, options });

            // 獲取參數
            const budgetLevel = options.budgetLevel || appState.budgetLevel || 'comfort';
            const diningPreference = options.diningPreference || appState.diningPreference || 'local-street';
            const dailyBudgetCustom = options.dailyBudget || null;
            const prefs = options.prefs || '';

            // 定義輸出結構
            const schema = {
                type: 'OBJECT',
                properties: {
                    totalCost: { type: 'NUMBER' },
                    dailyAverage: { type: 'NUMBER' },
                    breakdown: {
                        type: 'ARRAY',
                        items: {
                            type: 'OBJECT',
                            properties: {
                                category: { type: 'STRING' },
                                estimatedCost: { type: 'NUMBER' },
                                suggestion: { type: 'STRING' }
                            },
                            required: ['category', 'estimatedCost']
                        }
                    },
                    confidence: { type: 'STRING' },
                    assumptions: { type: 'STRING' }
                },
                required: ['totalCost', 'dailyAverage', 'breakdown']
            };

            // 獲取景點信息
            const destinationsByCountry = this.destinationsByCountry || window.destinationsByCountry;
            const attractions = appState.currentItineraryLocations?.length
                ? appState.currentItineraryLocations.join(', ')
                : destinationsByCountry?.taiwan?.destinations?.slice(0, 5).map(d => d.name).join(', ') || '台北、台中、台南';

            // 構建提示詞
            const prompt = this._createBudgetPrompt({
                days,
                budgetLevel,
                diningPreference,
                dailyBudgetCustom,
                attractions,
                prefs
            });

            // 調用 AI API
            const result = await callGeminiAPIWithSchema(prompt, schema);

            // 儲存結果
            updateAppState('lastCostEstimate', {
                totalCost: result.totalCost,
                dailyAverage: result.dailyAverage,
                breakdown: result.breakdown,
                confidence: result.confidence,
                assumptions: result.assumptions,
                parameters: {
                    days,
                    budgetLevel,
                    diningPreference,
                    customDailyBudget: dailyBudgetCustom,
                    timestamp: new Date().toISOString()
                }
            });

            eventBus.emit('budget:calculation:complete', {
                result,
                days
            });

            return result;

        } catch (error) {
            eventBus.emit('budget:calculation:error', {
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 渲染成本分解
     * @param {Object} result - 預算結果
     * @param {number} days - 天數
     * @returns {string} HTML 字符串
     */
    renderCostBreakdown(result, days) {
        let html = `<div class="cost-estimate-container">`;

        // 標題和總計
        html += this._renderSummary(result, days);

        // 分解視覺化
        html += this._renderBreakdownChart(result);

        // 詳細表格
        html += this._renderDetailTable(result);

        // 假設說明
        if (result.assumptions) {
            html += this._renderAssumptions(result.assumptions);
        }

        // 調整控制
        html += this._renderAdjustmentControls();

        // 多幣種顯示容器
        html += `<div id="currencyDisplayContainer"></div>`;

        html += `</div>`;

        return html;
    }

    /**
     * 顯示多幣種
     * @param {number} totalTwd - 總金額（台幣）
     * @param {number} dailyAvgTwd - 每日平均（台幣）
     * @returns {string} HTML 字符串
     */
    showMultiCurrency(totalTwd, dailyAvgTwd) {
        // 匯率（示例，實際應該從 API 獲取）
        const rates = {
            'USD': 0.032,
            'EUR': 0.029,
            'JPY': 4.5,
            'CNY': 0.23,
            'HKD': 0.25
        };

        let html = `<div class="multi-currency-display">
            <h5>💱 其他貨幣參考</h5>
            <div class="currency-grid">`;

        Object.entries(rates).forEach(([currency, rate]) => {
            const total = Math.round(totalTwd * rate);
            const daily = Math.round(dailyAvgTwd * rate);

            html += `<div class="currency-item">
                <div class="currency-code">${currency}</div>
                <div class="currency-total">${total.toLocaleString()}</div>
                <div class="currency-daily">每日 ${daily.toLocaleString()}</div>
            </div>`;
        });

        html += `</div>
            <p class="currency-note">* 匯率僅供參考，實際以當日匯率為準</p>
        </div>`;

        return html;
    }

    /**
     * 獲取類別顏色
     * @param {string} category - 類別名稱
     * @returns {string} 顏色代碼
     */
    getColorForCategory(category) {
        return this.categoryColors[category] || '#95A5A6';
    }

    // ==================== 私有輔助方法 ====================

    /**
     * 創建預算提示詞
     * @private
     */
    _createBudgetPrompt(params) {
        const {
            days,
            budgetLevel,
            diningPreference,
            dailyBudgetCustom,
            attractions,
            prefs
        } = params;

        return `你是一位台灣旅遊成本估算專家。請基於以下資訊，為使用者提供精準的台灣旅遊費用估算。

**行程參數：**
- 天數：${days} 天
- 預算等級：${this.budgetLevelMap[budgetLevel] || budgetLevel}
${dailyBudgetCustom ? `- 每日每人預算上限：NT$${dailyBudgetCustom}` : ''}
- 餐飲偏好：${this.diningMap[diningPreference] || diningPreference}
- 參考景點：${attractions}
- 使用者備註：${prefs || '無'}

**估算要求：**
1. 輸出必須是符合 JSON 格式的物件，包含以下欄位：
   - totalCost: 總預估費用 (新台幣)
   - dailyAverage: 每日平均費用 (新台幣)
   - breakdown: 詳細費用分類陣列，每筆包含：
     * category: 類別名稱 (Accommodation/住宿, Food/餐飲, Transportation/交通, Tickets/門票, Contingency/預備金)
     * estimatedCost: 該類別的預估費用
     * suggestion: 該類別的建議或節省秘訣 (可選)
   - confidence: 估算信心度描述 (例如：高/中/低 - 理由)
   - assumptions: 估算的主要假設條件

2. 考慮以下因素：
   - 住宿：根據預算等級選擇旅館或民宿等級
   - 餐飲：根據選定的餐飲偏好調整費用
   - 交通：包括景點間移動、公共運輸或租車成本
   - 門票：主要景點的入場費用
   - 預備金：突發狀況或額外消費 (建議總費用的 10-15%)

3. 請給出保守但現實的估算，所有費用近似到整數。`;
    }

    /**
     * 渲染摘要
     * @private
     */
    _renderSummary(result, days) {
        return `<div class="cost-summary">
            <h4>🧮 旅費估算報告 (${days}天)</h4>
            <div class="cost-totals">
                <div class="cost-total-item">
                    <span class="cost-label">總預估費用</span>
                    <span class="cost-value">NT$${Math.round(result.totalCost).toLocaleString('zh-TW')}</span>
                </div>
                <div class="cost-total-item">
                    <span class="cost-label">每日平均</span>
                    <span class="cost-value">NT$${Math.round(result.dailyAverage).toLocaleString('zh-TW')}</span>
                </div>
            </div>
            ${result.confidence ? `<p class="cost-confidence"><strong>估算信心度：</strong>${result.confidence}</p>` : ''}
        </div>`;
    }

    /**
     * 渲染分解圖表
     * @private
     */
    _renderBreakdownChart(result) {
        if (!result.breakdown || !Array.isArray(result.breakdown)) {
            return '';
        }

        const total = result.breakdown.reduce((sum, b) => sum + (b.estimatedCost || 0), 0);

        let html = `<div class="cost-breakdown">
            <h5>費用分類明細</h5>
            <div class="cost-chart-container">
                <div class="cost-breakdown-bars">`;

        result.breakdown.forEach((item) => {
            const percentage = total > 0 ? ((item.estimatedCost / total) * 100).toFixed(1) : 0;
            const categoryLabel = {
                'Accommodation': '住宿',
                'Food': '餐飲',
                'Transportation': '交通',
                'Tickets': '門票',
                'Contingency': '預備金'
            }[item.category] || item.category;

            html += `<div class="cost-bar-row">
                <div class="cost-bar-label">${categoryLabel}</div>
                <div class="cost-bar-visual">
                    <div class="cost-bar-fill" style="width:${percentage}%; background-color:${this.getColorForCategory(item.category)};" title="${percentage}%">
                        <span class="cost-bar-percent">${percentage}%</span>
                    </div>
                </div>
                <div class="cost-bar-value">NT$${Math.round(item.estimatedCost).toLocaleString('zh-TW')}</div>
            </div>`;
        });

        html += `</div></div></div>`;
        return html;
    }

    /**
     * 渲染詳細表格
     * @private
     */
    _renderDetailTable(result) {
        if (!result.breakdown || !Array.isArray(result.breakdown)) {
            return '';
        }

        let html = `<table class="cost-breakdown-table">
            <thead>
                <tr>
                    <th>項目</th>
                    <th>金額</th>
                    <th>建議</th>
                </tr>
            </thead>
            <tbody>`;

        result.breakdown.forEach(item => {
            const categoryLabel = {
                'Accommodation': '🏨 住宿',
                'Food': '🍽️ 餐飲',
                'Transportation': '🚌 交通',
                'Tickets': '🎫 門票',
                'Contingency': '⚠️ 預備金'
            }[item.category] || item.category;

            html += `<tr>
                <td>${categoryLabel}</td>
                <td><strong>NT$${Math.round(item.estimatedCost).toLocaleString('zh-TW')}</strong></td>
                <td><small>${item.suggestion || '－'}</small></td>
            </tr>`;
        });

        html += `</tbody></table>`;
        return html;
    }

    /**
     * 渲染假設說明
     * @private
     */
    _renderAssumptions(assumptions) {
        return `<div class="cost-assumptions">
            <h5>估算假設</h5>
            <p style="font-size: 0.95rem; line-height: 1.6;">${assumptions}</p>
        </div>`;
    }

    /**
     * 渲染調整控制
     * @private
     */
    _renderAdjustmentControls() {
        return `<div class="cost-adjustment">
            <h5>快速調整</h5>
            <div class="adjustment-controls">
                <button class="btn btn-small" id="adjustBudgetBtn">重新估算 (不同預算)</button>
                <button class="btn btn-small" id="adjustDaysBtn">重新估算 (不同天數)</button>
                <button class="btn btn-small" id="showCurrencyBtn">其他貨幣</button>
            </div>
        </div>`;
    }
}

// 創建單例實例
export const budgetCalculator = new BudgetCalculator();

// 向後兼容的導出函數
export async function generateBudgetEstimate(days, options) {
    return budgetCalculator.calculateBudget(days, options);
}

export function renderCostBreakdown(result, days) {
    return budgetCalculator.renderCostBreakdown(result, days);
}

export function showMultiCurrencyDisplay(totalTwd, dailyAvgTwd) {
    return budgetCalculator.showMultiCurrency(totalTwd, dailyAvgTwd);
}

export function getColorForCategory(category) {
    return budgetCalculator.getColorForCategory(category);
}
