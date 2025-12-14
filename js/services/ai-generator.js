/**
 * ai-generator.js
 * AI 內容生成服務
 * 
 * 負責所有與 AI 內容生成相關的功能，包括：
 * - 行程規劃
 * - 景點描述
 * - 增強內容（美食、詩詞等）
 * - 專項推薦（清單、攝影點、伴手禮等）
 */

import { callGeminiAPI, callGeminiAPIWithSchema } from '../api.js';
import { getAppState, setAppState, updateAppState } from '../state.js';
import { eventBus } from '../core/event-bus.js';
import { mdToHtml } from '../utils/markdown.js';

/**
 * AI 生成服務類別
 * 提供各種 AI 內容生成功能
 */
export class AIGenerator {
    /**
     * 創建 AI Generator 實例
     * @param {Object} options - 配置選項
     * @param {Object} options.appState - 應用狀態引用
     * @param {Object} options.destinationsByCountry - 景點數據引用
     */
    constructor(options = {}) {
        this.appState = options.appState || null;
        this.destinationsByCountry = options.destinationsByCountry || null;

        // 增強內容提示詞模板
        this.enhancedContentPrompts = {
            cuisine: (destName) => `請用繁體中文，推薦「${destName}」附近的 5-8 個必吃美食或餐廳。請使用 Markdown 格式，包含店名、特色菜、價格區間。`,
            poem: (destName) => `請用繁體中文，為「${destName}」創作一首優美的七言絕句或現代詩，捕捉其獨特氛圍與魅力。`
        };
    }

    /**
     * 生成行程
     * @param {string} type - 行程類型 ('custom', 'multi-day', 'single-day')
     * @param {Object} options - 行程選項
     * @returns {Promise<Object>} 生成的行程數據
     */
    async generateItinerary(type, options = {}) {
        try {
            eventBus.emit('ai:generation:start', { type: 'itinerary', options });

            // 獲取應用狀態 - 使用 window.appState 作為備選
            const appState = this.appState || window.appState;

            if (!appState) {
                throw new Error('應用程式狀態未初始化');
            }

            // 驗證 API
            if (!appState.isGeminiApiVerified) {
                throw new Error('AI 行程規劃需要驗證 Gemini API');
            }

            // 準備行程參數
            const days = type === 'multi-day'
                ? (options.days || 3)
                : 1;

            const prefs = options.preferences || '';
            const style = options.style || '';
            const budgetLevel = options.budgetLevel || 'comfort';
            const transportPref = options.transportPref || 'driving';
            const groupInfo = options.group || null;
            const departureDate = options.date || null;
            const startTime = options.startTime || null;
            const endTime = options.endTime || null;

            // 構建提示詞
            const prompt = this._createItineraryPrompt({
                type,
                days,
                prefs,
                style,
                budgetLevel,
                transportPref,
                groupInfo,
                departureDate,
                startTime,
                endTime
            });

            // 定義輸出結構
            const schema = {
                type: "OBJECT",
                properties: {
                    itinerary_text: { type: "STRING" },
                    locations: {
                        type: "ARRAY",
                        items: { type: "STRING" }
                    }
                },
                required: ["itinerary_text", "locations"]
            };

            // 調用 AI API
            const result = await callGeminiAPIWithSchema(prompt, schema);

            // 更新狀態 - 保存生成的行程
            if (result.locations && result.locations.length > 0) {
                setAppState('currentItineraryLocations', result.locations);
                setAppState('lastGeneratedItinerary', {
                    text: result.itinerary_text,
                    locations: result.locations
                });
            }

            // 發送完成事件
            eventBus.emit('ai:generation:complete', {
                type: 'itinerary',
                result,
                options
            });

            return result;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'itinerary',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 生成景點描述
     * @param {Object} destination - 景點對象
     * @returns {Promise<string>} Markdown 格式的景點描述
     */
    async generateDescription(destination) {
        try {
            eventBus.emit('ai:generation:start', { type: 'description', destination });

            const appState = this.appState || getAppState();

            if (!appState.isGeminiApiVerified) {
                throw new Error('此功能需要驗證 Gemini API');
            }

            // 檢查當前語言
            const isEnglish = appState.currentLanguage === 'en';

            // 構建提示詞
            let prompt = '';
            if (isEnglish) {
                prompt = this._createEnglishDescriptionPrompt(destination.name);
            } else {
                prompt = this._createChineseDescriptionPrompt(destination.name);
            }

            // 如果有上傳圖片，添加視覺參考
            if (appState.uploadedImage?.attached && appState.uploadedImage?.analysis) {
                const analysis = appState.uploadedImage.analysis;
                prompt += `\n\n視覺參考：使用者上傳圖片（${appState.uploadedImage.name || '上傳圖片'}）。分析摘要：${analysis.summary || ''}。請在描述中考量此圖片的主要色調與構圖。`;
            }

            // 調用 AI API
            const markdown = await callGeminiAPI(prompt);

            eventBus.emit('ai:generation:complete', {
                type: 'description',
                destination,
                result: markdown
            });

            return markdown;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'description',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 生成增強內容（美食、詩詞等）
     * @param {string} type - 內容類型 ('cuisine', 'poem')
     * @returns {Promise<string>} 生成的內容
     */
    async generateEnhancedContent(type) {
        try {
            const appState = this.appState || getAppState();

            if (!appState.isGeminiApiVerified || !appState.currentDestination) {
                throw new Error('請先選擇景點並驗證 API');
            }

            eventBus.emit('ai:generation:start', { type: 'enhanced', subtype: type });

            const promptGenerator = this.enhancedContentPrompts[type];
            if (!promptGenerator) {
                throw new Error(`未知的查詢類型: ${type}`);
            }

            const prompt = promptGenerator(appState.currentDestination.name);
            const content = await callGeminiAPI(prompt);

            eventBus.emit('ai:generation:complete', {
                type: 'enhanced',
                subtype: type,
                result: content
            });

            return content;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'enhanced',
                subtype: type,
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 生成旅行打包清單
     * @returns {Promise<Object>} 清單數據
     */
    async generateChecklist() {
        try {
            const appState = this.appState || getAppState();
            const destinationsByCountry = this.destinationsByCountry || window.destinationsByCountry;

            if (!appState.isGeminiApiVerified || !appState.currentDestination) {
                throw new Error('請先選擇景點並驗證 API');
            }

            eventBus.emit('ai:generation:start', { type: 'checklist' });

            const schema = {
                type: "OBJECT",
                properties: {
                    categories: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                category_name: { type: "STRING" },
                                items: {
                                    type: "ARRAY",
                                    items: { type: "STRING" }
                                }
                            }
                        }
                    }
                }
            };

            const countryName = destinationsByCountry[appState.currentCountry]?.name || '台灣';
            const prompt = `為一趟前往「${countryName}」的旅行，生成一份實用旅行打包清單。`;

            const result = await callGeminiAPIWithSchema(prompt, schema);

            eventBus.emit('ai:generation:complete', {
                type: 'checklist',
                result
            });

            return result;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'checklist',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 生成攝影點推薦
     * @returns {Promise<string>} Markdown 格式的攝影點推薦
     */
    async generatePhotoSpots() {
        try {
            const appState = this.appState || getAppState();

            if (!appState.isGeminiApiVerified || !appState.currentDestination) {
                throw new Error('請先選擇景點並驗證 API');
            }

            eventBus.emit('ai:generation:start', { type: 'photoSpots' });

            const prompt = `
請針對「${appState.currentDestination.name}」這個景點，推薦 3 個最具代表性的攝影點。
請用繁體中文，並嚴格遵循以下的 Markdown 結構輸出，不要包含任何額外解釋文字。
每個攝影點必須是二級標題 (##)，並在其下方以無序列表列出細節。

## 📸 攝影點一：[具體攝影點名稱]
* **最佳時間：** [例如：日落前一小時]
* **建議角度：** [例如：低角度仰拍，捕捉建築宏偉]
* **攝影技巧：** [例如：使用廣角鏡頭避免變形]

## 📸 攝影點二：[具體攝影點名稱]
* **最佳時間：** [例如：清晨 6 點，光線柔和]
* **建議角度：** [例如：從側面捕捉建築倒影]
* **攝影技巧：** [例如：帶上三腳架，進行長時間曝光]

## 📸 攝影點三：[具體攝影點名稱]
* **最佳時間：** [例如：夜晚，捕捉燈光]
* **建議角度：** [例如：高處俯視，將景點納入城市背景]
* **攝影技巧：** [例如：開啟人像模式，虛化背景]
`;

            const markdown = await callGeminiAPI(prompt);

            eventBus.emit('ai:generation:complete', {
                type: 'photoSpots',
                result: markdown
            });

            return markdown;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'photoSpots',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 生成伴手禮推薦
     * @returns {Promise<string>} Markdown 格式的伴手禮推薦
     */
    async generateSouvenirList() {
        try {
            const appState = this.appState || getAppState();

            if (!appState.isGeminiApiVerified) {
                throw new Error('此功能需要驗證 Gemini API');
            }

            eventBus.emit('ai:generation:start', { type: 'souvenirs' });

            // 使用行程地點或當前景點
            const locations = (appState.currentItineraryLocations?.length)
                ? appState.currentItineraryLocations
                : (appState.currentDestination ? [appState.currentDestination.name] : []);

            const sampleLocations = locations.slice(0, 6).join(', ');

            if (!sampleLocations) {
                throw new Error('請先選擇景點或生成行程以獲取伴手禮推薦');
            }

            const prompt = `請用繁體中文，針對使用者行程會拜訪的位置（例如：${sampleLocations}）推薦 5 到 8 個在地必買的伴手禮。輸出必須嚴格遵循以下 Markdown 結構，並且不要輸出其他說明文字：

每一個伴手禮請包含：
1) 主標題（H3），例如：
   ### 🍍 鳳梨酥 (傳統口味)
2) 產品特色（段落）：一至兩句話說明產品特色與吸引力。
3) 購買資訊（無序列表），至少包含：
   - **特色：** 簡短描述
   - **推薦購買地點：** 列出 1-3 個購買地點（店名或市場）
   - **價格區間：** 使用 $ 表示（例如：$, $$, $$$）或文字描述。

請只輸出 Markdown，並以繁體中文回傳。`;

            const markdown = await callGeminiAPI(prompt);

            eventBus.emit('ai:generation:complete', {
                type: 'souvenirs',
                result: markdown
            });

            return markdown;

        } catch (error) {
            eventBus.emit('ai:generation:error', {
                type: 'souvenirs',
                error: error.message
            });
            throw error;
        }
    }

    /**
     * 分析圖片數據
     * @param {string} dataUrl - 圖片 Data URL
     * @returns {Promise<Object>} 分析結果
     */
    async analyzeImageData(dataUrl) {
        return new Promise((resolve) => {
            try {
                const img = new Image();
                img.crossOrigin = 'Anonymous';

                img.onload = function () {
                    const canvas = document.createElement('canvas');
                    const maxSize = 256;
                    let w = img.width;
                    let h = img.height;

                    if (w > maxSize || h > maxSize) {
                        const ratio = Math.min(maxSize / w, maxSize / h);
                        w = Math.round(w * ratio);
                        h = Math.round(h * ratio);
                    }

                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);

                    try {
                        const imgData = ctx.getImageData(0, 0, w, h).data;
                        let rSum = 0, gSum = 0, bSum = 0, total = 0;
                        const counts = {};

                        for (let i = 0; i < imgData.length; i += 4) {
                            const r = imgData[i];
                            const g = imgData[i + 1];
                            const b = imgData[i + 2];
                            rSum += r; gSum += g; bSum += b; total++;

                            const key = ((r >> 2) & 0x3F) + ',' + ((g >> 2) & 0x3F) + ',' + ((b >> 2) & 0x3F);
                            counts[key] = (counts[key] || 0) + 1;
                        }

                        // 找出主色調
                        let dominant = null;
                        let maxCount = 0;
                        Object.keys(counts).forEach(k => {
                            if (counts[k] > maxCount) {
                                maxCount = counts[k];
                                dominant = k;
                            }
                        });

                        const [dr, dg, db] = dominant
                            ? dominant.split(',').map(n => (Number(n) << 2))
                            : [Math.round(rSum / total), Math.round(gSum / total), Math.round(bSum / total)];

                        const toHex = (v) => ('0' + v.toString(16)).slice(-2);
                        const dominantHex = `#${toHex(dr)}${toHex(dg)}${toHex(db)}`;
                        const summary = `尺寸 ${img.width}x${img.height}，主色調 ${dominantHex}`;

                        resolve({
                            width: img.width,
                            height: img.height,
                            avgRgb: [Math.round(rSum / total), Math.round(gSum / total), Math.round(bSum / total)],
                            dominantHex,
                            summary
                        });
                    } catch (err) {
                        resolve({ width: img.width, height: img.height, summary: '無法分析像素資料' });
                    }
                };

                img.onerror = function () {
                    resolve({ summary: '圖片載入失敗' });
                };

                img.src = dataUrl;
                if (img.complete && img.naturalWidth) {
                    img.onload();
                }
            } catch (e) {
                resolve({ summary: '圖片分析失敗' });
            }
        });
    }

    // ==================== 私有輔助方法 ====================

    /**
     * 創建行程提示詞
     * @private
     */
    _createItineraryPrompt(params) {
        const {
            type,
            days,
            prefs,
            style,
            budgetLevel,
            transportPref,
            groupInfo,
            departureDate,
            startTime,
            endTime
        } = params;

        // 這裡應該包含完整的提示詞邏輯
        // 為了簡潔，這裡只是一個基本框架
        let prompt = `請為我規劃一個${days}天的台灣旅遊行程。`;

        if (prefs) {
            prompt += `\n偏好：${prefs}`;
        }

        if (style) {
            prompt += `\n風格：${style}`;
        }

        if (budgetLevel) {
            prompt += `\n預算等級：${budgetLevel}`;
        }

        return prompt;
    }

    /**
     * 創建英文景點描述提示詞
     * @private
     */
    _createEnglishDescriptionPrompt(destName) {
        return `Please write all outputs in fluent, professional, and engaging native English (US/UK style).

Write a concise, engaging Markdown description of "${destName}" for an international (non-local) visitor.
Use active, inviting verbs (e.g., Discover, Explore, Indulge).
Separate the output into three sections using level-2 headings (##):

1. ## 🏛️ History & Background (brief, relevant context for non-local visitors)
2. ## ✨ Highlights & Experiences (what to do, what makes it special)
3. ## 📸 Best Photo Angles (one practical tip for framing or timing)

Keep the total length around 150-250 words. Use evocative adjectives for food (e.g., savory, aromatic, delectable) where applicable.`;
    }

    /**
     * 創建中文景點描述提示詞
     * @private
     */
    _createChineseDescriptionPrompt(destName) {
        return `
請用繁體中文，以一位充滿熱情且博學的說書人、旅行家的口吻，生動地介紹「${destName}」。
請將輸出以 Markdown 格式回傳，且使用次標題 (##) 分隔下列三個部分：

1. ## 🏛️ 歷史與背景 (簡述景點的起源或歷史意義)
2. ## ✨ 核心魅力與體驗 (最值得看、最特別的活動)
3. ## 📸 最佳攝影角度 (提供一個建議的拍照點或時間)

請把整體篇幅控制在 200-300 字，並維持語氣生動、故事化。請僅回傳 Markdown 內容，勿額外包裹描述性文字。
`;
    }
}

// 創建單例實例（可選）
export const aiGenerator = new AIGenerator();

// 向後兼容的導出函數
export async function generateItinerary(type, options) {
    return aiGenerator.generateItinerary(type, options);
}

export async function generateDescription(destination) {
    return aiGenerator.generateDescription(destination);
}

export async function generateEnhancedContent(type) {
    return aiGenerator.generateEnhancedContent(type);
}

export async function generateChecklist() {
    return aiGenerator.generateChecklist();
}

export async function generatePhotoSpots() {
    return aiGenerator.generatePhotoSpots();
}

export async function generateSouvenirList() {
    return aiGenerator.generateSouvenirList();
}

export async function analyzeImageData(dataUrl) {
    return aiGenerator.analyzeImageData(dataUrl);
}
