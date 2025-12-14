/**
 * optimizer.js
 * 行程優化服務
 * 
 * 負責優化已生成的行程：
 * - 路線優化（TSP）
 * - 反饋優化
 * - 時間窗口調整
 * - TDX 數據整合
 */

import { callGeminiAPI, callGeminiAPIWithSchema, fetchTdxNearbyPOIs } from '../api.js';
import { getAppState, updateAppState } from '../state.js';
import { eventBus } from '../core/event-bus.js';

/**
 * 優化服務類別
 */
export class Optimizer {
    constructor() {
        this.destinationsByCountry = null;
    }

    /**
     * 優化行程
     * @param {Object} options - 優化選項
     * @returns {Promise<Object>} 優化後的行程
     */
    async optimizeItinerary(options = {}) {
        try {
            const appState = window.appState || getAppState();

            if (!appState.isGeminiApiVerified) {
                throw new Error('AI 行程優化需要驗證 Gemini API');
            }

            if (!appState.currentItineraryLocations || appState.currentItineraryLocations.length < 1) {
                throw new Error('尚未有可優化的行程。請先生成行程。');
            }

            eventBus.emit('optimize:start', { type: 'route' });

            const currentList = appState.currentItineraryLocations;

            // 定義輸出結構
            const schema = {
                type: 'OBJECT',
                properties: {
                    optimized_itinerary_text: { type: 'STRING' },
                    optimized_locations: { type: 'ARRAY', items: { type: 'STRING' } },
                    suggestions: { type: 'ARRAY', items: { type: 'STRING' } },
                    strengths: { type: 'ARRAY', items: { type: 'STRING' } },
                    route_order: { type: 'ARRAY', items: { type: 'INTEGER' } },
                    time_estimates: { type: 'ARRAY', items: { type: 'STRING' } }
                },
                required: ['optimized_itinerary_text', 'optimized_locations']
            };

            // 收集上下文信息
            const context = this._gatherOptimizationContext(appState, options);

            // 構建提示詞
            const prompt = this._createOptimizationPrompt(currentList, context);

            // 調用 AI API
            const result = await callGeminiAPIWithSchema(prompt, schema);

            // 更新狀態
            if (result.optimized_locations && result.optimized_locations.length) {
                updateAppState('currentItineraryLocations', result.optimized_locations);
                updateAppState('lastGeneratedItinerary', {
                    text: result.optimized_itinerary_text,
                    locations: result.optimized_locations
                });
            }

            eventBus.emit('optimize:complete', {
                type: 'route',
                result
            });

            return result;

        } catch (error) {
            eventBus.emit('optimize:error', {
                type: 'route',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 根據反饋優化行程
     * @param {string} feedback - 用戶反饋
     * @param {string} feedbackType - 反饋類型
     * @returns {Promise<Object>} 優化後的行程
     */
    async optimizeWithFeedback(feedback = '', feedbackType = '') {
        try {
            const appState = window.appState || getAppState();

            if (!appState.isGeminiApiVerified || !appState.currentItineraryLocations) {
                throw new Error('無法重新生成行程');
            }

            eventBus.emit('optimize:start', { type: 'feedback', feedbackType });

            const schema = {
                type: 'OBJECT',
                properties: {
                    feedback_itinerary_text: { type: 'STRING' },
                    feedback_locations: { type: 'ARRAY', items: { type: 'STRING' } },
                    changes_made: { type: 'ARRAY', items: { type: 'STRING' } }
                },
                required: ['feedback_itinerary_text', 'feedback_locations']
            };

            const currentLocations = appState.currentItineraryLocations.join(' > ');

            // 反饋類型映射
            const feedbackMapping = {
                'crowded': '避免人潮擁擠的景點，優先推薦冷門景點或建議避峰時間',
                'boring': '增加更有趣的互動體驗、美食探索、冒險活動、文化沉浸',
                'budget_exceeded': '減少高消費景點，優先選擇免費或低價景點，減少餐飲預算',
                'too_long': '縮短行程距離，減少景點數量，集中在一個區域',
                'not_enough': '增加更多景點和活動，提供更豐富的體驗'
            };

            const isEnglish = appState.currentLanguage === 'en';
            const prompt = this._createFeedbackPrompt(
                currentLocations,
                feedback,
                feedbackType,
                feedbackMapping,
                isEnglish
            );

            const result = await callGeminiAPIWithSchema(prompt, schema);

            // 更新狀態並防止無限循環
            if (result.feedback_locations && result.feedback_locations.length) {
                updateAppState('currentItineraryLocations', result.feedback_locations);

                const feedbackCount = (appState.itineraryFeedbackCount || 0) + 1;
                updateAppState('itineraryFeedbackCount', feedbackCount);

                if (feedbackCount > 5) {
                    throw new Error('反饋迭代次數已達上限，請考慮從頭規劃新行程');
                }
            }

            eventBus.emit('optimize:complete', {
                type: 'feedback',
                result,
                changesMade: result.changes_made
            });

            return result;

        } catch (error) {
            eventBus.emit('optimize:error', {
                type: 'feedback',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 查找附近的 TDX POI
     * @param {string} type - POI 類型
     * @returns {Promise<Array>} POI 列表
     */
    async findNearbyPOIs(type) {
        try {
            const appState = window.appState || getAppState();

            if (!appState.currentDestination || !appState.currentDestination.coordinates) {
                throw new Error('請先選擇景點');
            }

            eventBus.emit('tdx:search:start', { type });

            const [lat, lng] = appState.currentDestination.coordinates;
            const pois = await fetchTdxNearbyPOIs(lat, lng, type);

            eventBus.emit('tdx:search:complete', {
                type,
                count: pois.length
            });

            return pois;

        } catch (error) {
            eventBus.emit('tdx:search:error', {
                type,
                error: error.message
            });
            throw error;
        }
    }

    // ==================== 私有輔助方法 ====================

    /**
     * 收集優化上下文
     * @private
     */
    _gatherOptimizationContext(appState, options) {
        const context = {
            weather: '',
            traffic: '',
            budget: '',
            style: ''
        };

        // 天氣建議
        try {
            const date = document.getElementById('itineraryDate')?.value;
            if (date && appState.isCwaApiVerified && appState.weatherData) {
                const analysis = window.analyzeWeatherForDate?.(date);
                if (analysis?.advice) {
                    context.weather = analysis.advice;
                }
            }
        } catch (err) {
            console.warn('Weather advice failed', err);
        }

        // 交通狀況
        try {
            if (appState.tdxDataCache?.congestion) {
                context.traffic = `當前主要路段擁堵情況：${Object.entries(appState.tdxDataCache.congestion)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join('；')}`;
            }
        } catch (err) {
            console.warn('Traffic context failed', err);
        }

        // 預算上下文
        if (appState.budgetLevel) {
            context.budget = `使用者預算等級：${appState.budgetLevel}。請優先安排符合此預算的景點與餐飲。`;
        }

        // 旅遊風格
        if (options.travelStyle || appState.travelStyle) {
            const style = options.travelStyle || appState.travelStyle;
            context.style = `旅遊風格偏好：${style}。請優先推薦此類景點。`;
        }

        return context;
    }

    /**
     * 創建優化提示詞
     * @private
     */
    _createOptimizationPrompt(locations, context) {
        return `你是一位資深的台灣行程規劃師，擅長利用 Traveling Salesman Problem (TSP) 演算法最小化移動時間。下面是一份已生成的行程地點清單，請幫我優化並以清晰易讀的格式輸出。

**地點清單**（保持原名）：${locations.join(' | ')}

**額外上下文**：
${context.weather ? `天氣建議：${context.weather}` : ''}
${context.traffic}
${context.budget}
${context.style}

**優化目標**：
1) **路線最優化（TSP）**：分析各景點地理位置與交通距離，重新排序以最小化總移動時間與折返次數
2) **時間窗口規劃**：為每個景點指定合理的到達時間與停留時間
3) **合理休息與用餐**：在適當位置插入用餐時段，推薦當地美食
4) **優化建議**：提供 3-5 條可立即採納的優化建議
5) **行程三大優勢**：列出此優化行程的三大亮點

**輸出格式要求**：
- optimized_itinerary_text 必須使用 Markdown 格式
- 包含時間段劃分（上午、中午、下午）
- 每個景點包含：活動、停留時間、交通方式、建議
- 最後列出優化建議和行程優勢`;
    }

    /**
     * 創建反饋提示詞
     * @private
     */
    _createFeedbackPrompt(currentLocations, feedback, feedbackType, feedbackMapping, isEnglish) {
        if (isEnglish) {
            return `You are a Taiwan itinerary optimization specialist. The user provided feedback on the following itinerary:
Original itinerary: ${currentLocations}

User feedback:
- Feedback type: ${feedbackMapping[feedbackType] || feedbackType}
- Details: ${feedback || 'unspecified'}

Based on the feedback, regenerate an improved itinerary. Focus:
1. If feedback concerns attraction selection, replace with spots that better match the user's needs.
2. If feedback concerns timing, adjust density and pacing (increase or decrease number of visits).
3. Preserve core highlights while optimizing for the feedback.
4. List the main changes made.

Tone: professional, concise, and visitor-focused. Use fluent native English and active verbs.

Return a JSON object with keys: feedback_itinerary_text (Markdown), feedback_locations (array), changes_made (array of strings).`;
        } else {
            return `你是台灣行程優化專家。使用者對以下行程提出反饋：
原行程：${currentLocations}

**使用者反饋**：
- 反饋類型：${feedbackMapping[feedbackType] || feedbackType}
- 具體意見：${feedback || '不滿意'}

請基於此反饋，重新生成改進的行程。改進方向：
1. 如反饋涉及景點選擇，替換為更符合需求的景點
2. 如反饋涉及時間安排，調整行程密度（增加或減少）
3. 保持核心吸引力，但針對反饋進行優化
4. 列出主要改進內容

輸出必須包含：
- feedback_itinerary_text: Markdown 格式的改進行程
- feedback_locations: 改進後的景點陣列
- changes_made: 主要改進內容的清單`;
        }
    }
}

// 創建單例實例
export const optimizer = new Optimizer();

// 向後兼容的導出函數
export async function optimizeItinerary(options) {
    return optimizer.optimizeItinerary(options);
}

export async function generateFeedbackItinerary(feedback, feedbackType) {
    return optimizer.optimizeWithFeedback(feedback, feedbackType);
}

export async function findNearbyTDXData(type) {
    return optimizer.findNearbyPOIs(type);
}
