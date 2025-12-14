/**
 * travel-journal-generator.js
 * 旅行日記生成器 - 使用 Phase 2 架構
 */

import { loadAIGenerator } from './lazy-loader.js';
import { debounce, downloadFile, formatFileSize } from './utils/helpers.js';
import { mdToHtml } from './utils/markdown.js';
import { formatDate, formatDateTime } from './utils/date-time.js';
import { eventBus } from './core/event-bus.js';

/**
 * 旅行日記生成器類別
 */
export class TravelJournalGenerator {
    constructor() {
        this.currentJournal = null;
        this.photos = [];
        this.itineraryData = null;
        this.container = null;

        this.init();
    }

    /**
     * 初始化
     */
    init() {
        console.log('🎨 初始化旅行日記生成器...');
        this.createUI();
        this.attachEventListeners();

        // 監聽行程生成事件
        eventBus.on('itinerary:generated', (data) => {
            this.itineraryData = data;
            this.updateItinerarySelect();
        });
    }

    /**
     * 創建 UI
     */
    createUI() {
        const container = document.createElement('div');
        container.className = 'travel-journal-container';
        container.innerHTML = `
            <div class="journal-header">
                <h2>📖 旅行日記生成器</h2>
                <p>將您的行程轉換為精美的旅行日記</p>
            </div>

            <div class="journal-form">
                <div class="form-group">
                    <label for="journalTheme">旅行主題</label>
                    <input 
                        type="text" 
                        id="journalTheme" 
                        placeholder="例如：文化探索之旅、美食之旅、放鬆度假..."
                        class="journal-input"
                    >
                </div>

                <div class="form-group">
                    <label for="journalFeelings">個人感受（可選）</label>
                    <textarea 
                        id="journalFeelings" 
                        placeholder="分享您對這次旅行的期待或感受..."
                        class="journal-textarea"
                        rows="3"
                    ></textarea>
                </div>

                <div class="form-group">
                    <label for="journalPhotos">添加照片（可選）</label>
                    <input 
                        type="file" 
                        id="journalPhotos" 
                        accept="image/*" 
                        multiple
                        class="journal-file-input"
                    >
                    <div id="photoPreview" class="photo-preview"></div>
                </div>

                <div class="journal-actions">
                    <button id="generateJournalBtn" class="btn-primary">
                        ✨ 生成日記
                    </button>
                    <button id="clearJournalBtn" class="btn-secondary">
                        🗑️ 清除
                    </button>
                </div>
            </div>

            <div id="journalPreview" class="journal-preview hidden">
                <div class="preview-header">
                    <h3>📝 日記預覽</h3>
                    <div class="preview-actions">
                        <button id="editJournalBtn" class="btn-icon" title="編輯">✏️</button>
                        <button id="exportMarkdownBtn" class="btn-icon" title="匯出 Markdown">📄</button>
                        <button id="exportHtmlBtn" class="btn-icon" title="匯出 HTML">🌐</button>
                        <button id="copyJournalBtn" class="btn-icon" title="複製">📋</button>
                    </div>
                </div>
                <div id="journalContent" class="journal-content"></div>
            </div>

            <div id="journalLoading" class="journal-loading hidden">
                <div class="spinner"></div>
                <p>AI 正在為您撰寫日記...</p>
            </div>
        `;

        // 添加到頁面底部
        document.body.appendChild(container);
        this.container = container;

        console.log('✅ 旅行日記生成器 UI 已創建');
    }

    /**
     * 綁定事件監聽器
     */
    attachEventListeners() {
        // 生成按鈕
        document.getElementById('generateJournalBtn')?.addEventListener('click', () => {
            this.generateJournal();
        });

        // 清除按鈕
        document.getElementById('clearJournalBtn')?.addEventListener('click', () => {
            this.clearForm();
        });

        // 照片上傳
        document.getElementById('journalPhotos')?.addEventListener('change', (e) => {
            this.handlePhotoUpload(e);
        });

        // 編輯按鈕
        document.getElementById('editJournalBtn')?.addEventListener('click', () => {
            this.editJournal();
        });

        // 匯出按鈕
        document.getElementById('exportMarkdownBtn')?.addEventListener('click', () => {
            this.exportJournal('markdown');
        });

        document.getElementById('exportHtmlBtn')?.addEventListener('click', () => {
            this.exportJournal('html');
        });

        // 複製按鈕
        document.getElementById('copyJournalBtn')?.addEventListener('click', () => {
            this.copyJournal();
        });

        // 防抖輸入
        const themeInput = document.getElementById('journalTheme');
        if (themeInput) {
            themeInput.addEventListener('input', debounce(() => {
                this.validateForm();
            }, 300));
        }
    }

    /**
     * 生成日記
     */
    async generateJournal() {
        try {
            const theme = document.getElementById('journalTheme')?.value || '探索之旅';
            const feelings = document.getElementById('journalFeelings')?.value || '';

            // 獲取當前行程數據 - 使用 window.appState 直接訪問
            const appState = window.appState;

            if (!appState) {
                this.showError('應用程式狀態未初始化，請刷新頁面');
                return;
            }

            const itinerary = appState.lastGeneratedItinerary;

            if (!itinerary || !itinerary.text) {
                this.showError('請先生成一個行程！');
                return;
            }

            // 顯示載入動畫
            this.showLoading(true);

            // 使用懶加載載入 AI Generator
            console.log('⏳ 懶加載 AI Generator...');
            const aiGenerator = await loadAIGenerator();

            // 生成日記內容
            console.log('📝 生成日記內容...');
            const journal = await this.generateJournalContent(
                aiGenerator,
                itinerary,
                theme,
                feelings
            );

            this.currentJournal = journal;

            // 渲染日記
            this.renderJournal(journal);

            // 隱藏載入動畫
            this.showLoading(false);

            // 顯示預覽
            this.showPreview(true);

            console.log('✅ 日記生成完成');

            // 發送事件
            eventBus.emit('journal:generated', { journal });

        } catch (error) {
            console.error('❌ 生成日記失敗:', error);
            this.showError(`生成失敗: ${error.message}`);
            this.showLoading(false);
        }
    }

    /**
     * 生成日記內容
     */
    async generateJournalContent(aiGenerator, itinerary, theme, feelings) {
        const prompt = `
請根據以下行程，生成一篇精美的旅行日記：

行程內容：
${itinerary.text}

旅行主題：${theme}
個人感受：${feelings || '無'}

要求：
1. 使用第一人稱撰寫
2. 生動描述景點和體驗
3. 包含個人感受和反思
4. 使用 Markdown 格式
5. 結構清晰，包含標題和段落
6. 字數約 500-800 字

請按以下結構撰寫：
# 我的台灣之旅

## 旅行概述
（簡短介紹這次旅行）

## Day 1: [日期/主題]
（描述第一天的行程和感受）

## Day 2: [日期/主題]
（如果有多天）

## 旅行感悟
（總結這次旅行的收穫和感想）
`;

        // 這裡應該調用 AI API，暫時返回模擬數據
        // 實際使用時需要配置 Gemini API Key
        return this.generateMockJournal(theme, itinerary);
    }

    /**
     * 生成模擬日記（用於演示）
     */
    generateMockJournal(theme, itinerary) {
        const today = formatDate(new Date());

        return `# 我的台灣${theme}

**日期**: ${today}  
**主題**: ${theme}

## 旅行概述

這次的台灣之旅充滿了驚喜與感動。從繁華的都市到寧靜的鄉村，從古老的廟宇到現代的建築，每一處都讓我深深著迷。

## Day 1: 初遇台北

早晨，我踏上了這片充滿活力的土地。台北的街道熙熙攘攘，卻又井然有序。

### 上午：文化之旅

參觀了故宮博物院，那些精美的文物讓我驚嘆不已。每一件展品都訴說著千年的故事，讓我彷彿穿越時空，回到了那個輝煌的年代。

### 下午：美食探索

來到士林夜市，這裡是美食的天堂。大腸包小腸、臭豆腐、珍珠奶茶...每一樣都讓我回味無窮。熱情的攤主和絡繹不絕的人群，構成了最地道的台灣風情。

## Day 2: 深度體驗

第二天，我選擇放慢腳步，深入體驗台灣的文化。

### 茶文化體驗

在茶館品茗，聽老師傅講述茶道的精髓。那一刻，我感受到了台灣人對傳統文化的尊重與傳承。

### 夕陽時分

傍晚時分，我來到淡水，看著夕陽緩緩落下，海風拂面，心中無比寧靜。這就是旅行的意義吧，讓心靈得到片刻的安寧。

## 旅行感悟

這次旅行讓我深深愛上了台灣。這裡的人們熱情友善，這裡的文化豐富多彩，這裡的美食令人難忘。

台灣，我還會再來的！

---

*生成時間: ${formatDateTime(new Date())}*
`;
    }

    /**
     * 渲染日記
     */
    renderJournal(journal) {
        const content = document.getElementById('journalContent');
        if (!content) return;

        // 將 Markdown 轉換為 HTML
        const html = mdToHtml(journal);
        content.innerHTML = html;

        // 添加照片
        if (this.photos.length > 0) {
            const photosHtml = `
                <div class="journal-photos">
                    <h3>📸 旅行照片</h3>
                    <div class="photo-grid">
                        ${this.photos.map(photo => `
                            <img src="${photo.data}" alt="${photo.name}" class="journal-photo">
                        `).join('')}
                    </div>
                </div>
            `;
            content.insertAdjacentHTML('beforeend', photosHtml);
        }
    }

    /**
     * 處理照片上傳
     */
    handlePhotoUpload(event) {
        const files = event.target.files;
        if (!files || files.length === 0) return;

        Array.from(files).forEach(file => {
            if (file.size > 5 * 1024 * 1024) {
                this.showError(`照片 ${file.name} 太大（超過 5MB）`);
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                this.photos.push({
                    data: e.target.result,
                    name: file.name,
                    size: formatFileSize(file.size),
                    timestamp: new Date()
                });
                this.updatePhotoPreview();
            };
            reader.readAsDataURL(file);
        });
    }

    /**
     * 更新照片預覽
     */
    updatePhotoPreview() {
        const preview = document.getElementById('photoPreview');
        if (!preview) return;

        preview.innerHTML = this.photos.map((photo, index) => `
            <div class="photo-item">
                <img src="${photo.data}" alt="${photo.name}">
                <button class="remove-photo" data-index="${index}">×</button>
            </div>
        `).join('');

        // 綁定刪除按鈕
        preview.querySelectorAll('.remove-photo').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.photos.splice(index, 1);
                this.updatePhotoPreview();
            });
        });
    }

    /**
     * 匯出日記
     */
    exportJournal(format) {
        if (!this.currentJournal) {
            this.showError('沒有可匯出的日記');
            return;
        }

        const timestamp = formatDateTime(new Date()).replace(/[:\s]/g, '-');

        switch (format) {
            case 'markdown':
                downloadFile(
                    this.currentJournal,
                    `travel-journal-${timestamp}.md`,
                    'text/markdown'
                );
                this.showSuccess('Markdown 已匯出');
                break;

            case 'html':
                const html = this.generateHTMLExport();
                downloadFile(
                    html,
                    `travel-journal-${timestamp}.html`,
                    'text/html'
                );
                this.showSuccess('HTML 已匯出');
                break;
        }
    }

    /**
     * 生成 HTML 匯出
     */
    generateHTMLExport() {
        const content = mdToHtml(this.currentJournal);

        return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的旅行日記</title>
    <style>
        body {
            font-family: 'Georgia', 'Noto Serif TC', serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            line-height: 1.8;
            color: #2c3e50;
            background: #fffcf5;
        }
        h1 { 
            color: #2c3e50; 
            border-bottom: 2px solid #6497b1; 
            padding-bottom: 10px; 
            margin-bottom: 30px;
        }
        h2 { 
            color: #e08f0a; 
            margin-top: 35px; 
            border-left: 4px solid #fca311;
            padding-left: 15px;
        }
        h3 { color: #6c757d; margin-top: 25px; }
        p { margin: 15px 0; text-align: justify; }
        img { max-width: 100%; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .journal-photos { margin-top: 50px; border-top: 1px solid #e0e0e0; padding-top: 30px; }
        .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; }
        blockquote { border-left: 4px solid #e0e0e0; margin: 0; padding-left: 20px; color: #666; font-style: italic; }
    </style>
</head>
<body>
    ${content}
    ${this.photos.length > 0 ? `
        <div class="journal-photos">
            <h3>📸 旅行照片</h3>
            <div class="photo-grid">
                ${this.photos.map(photo => `
                    <img src="${photo.data}" alt="${photo.name}">
                `).join('')}
            </div>
        </div>
    ` : ''}
</body>
</html>`;
    }

    /**
     * 複製日記
     */
    async copyJournal() {
        if (!this.currentJournal) return;

        try {
            await navigator.clipboard.writeText(this.currentJournal);
            this.showSuccess('已複製到剪貼板');
        } catch (error) {
            this.showError('複製失敗');
        }
    }

    /**
     * 編輯日記
     */
    editJournal() {
        const content = document.getElementById('journalContent');
        if (!content) return;

        const currentText = this.currentJournal;

        content.innerHTML = `
            <textarea id="journalEditor" class="journal-editor">${currentText}</textarea>
            <div class="editor-actions">
                <button id="saveEditBtn" class="btn-primary">💾 保存</button>
                <button id="cancelEditBtn" class="btn-secondary">❌ 取消</button>
            </div>
        `;

        document.getElementById('saveEditBtn')?.addEventListener('click', () => {
            const newText = document.getElementById('journalEditor').value;
            this.currentJournal = newText;
            this.renderJournal(newText);
        });

        document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
            this.renderJournal(this.currentJournal);
        });
    }

    /**
     * 清除表單
     */
    clearForm() {
        document.getElementById('journalTheme').value = '';
        document.getElementById('journalFeelings').value = '';
        document.getElementById('journalPhotos').value = '';
        this.photos = [];
        this.updatePhotoPreview();
        this.showPreview(false);
    }

    /**
     * 驗證表單
     */
    validateForm() {
        const theme = document.getElementById('journalTheme')?.value;
        const btn = document.getElementById('generateJournalBtn');

        if (btn) {
            btn.disabled = !theme || theme.trim().length === 0;
        }
    }

    /**
     * 顯示/隱藏載入動畫
     */
    showLoading(show) {
        const loading = document.getElementById('journalLoading');
        if (loading) {
            loading.classList.toggle('hidden', !show);
        }
    }

    /**
     * 顯示/隱藏預覽
     */
    showPreview(show) {
        const preview = document.getElementById('journalPreview');
        if (preview) {
            preview.classList.toggle('hidden', !show);
        }
    }

    /**
     * 顯示錯誤訊息
     */
    showError(message) {
        // 簡單的錯誤提示
        alert(`❌ ${message}`);
    }

    /**
     * 顯示成功訊息
     */
    showSuccess(message) {
        // 簡單的成功提示
        alert(`✅ ${message}`);
    }

    /**
     * 更新行程選擇
     */
    updateItinerarySelect() {
        // 未來可以添加行程選擇下拉選單
    }
}

// 創建單例並暴露到全域
export const travelJournalGenerator = new TravelJournalGenerator();

// 暴露到 window 以便測試
if (typeof window !== 'undefined') {
    window.travelJournalGenerator = travelJournalGenerator;
}

console.log('✅ 旅行日記生成器已載入');
console.log('💡 使用 window.travelJournalGenerator 訪問');
