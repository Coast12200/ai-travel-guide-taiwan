# 🌍 旅人探索札記 - AI 智慧導覽

> **AI-Powered Taiwan Travel Guide** - 您的智慧旅遊規劃助手

一個功能豐富的 AI 驅動旅遊規劃應用程式，專為探索台灣而設計。結合 Google Gemini AI、中央氣象署天氣資料、TDX 運輸資料等多種 API，為您打造個人化的旅遊體驗。

![Version](https://img.shields.io/badge/version-3.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

---

## ✨ 核心功能

### 🤖 AI 智慧規劃
- **智能行程生成** - 基於 Google Gemini AI 的個人化行程規劃
- **多種行程模式** - 晴天漫遊、雨天備案、隨機探索、多日行程
- **語音輸入** - 支援語音輸入旅行偏好
- **圖像分析** - 上傳圖片，AI 分析視覺風格並融入行程建議
- **行程優化** - 智能優化現有行程，提供改進建議
- **版本歷史** - 保存多個行程版本，隨時回溯

### 🗺️ 地圖與導航
- **互動式地圖** - 基於 Leaflet 的動態地圖顯示
- **攝影點推薦** - AI 推薦最佳拍攝地點

### 🌤️ 天氣整合
- **即時天氣** - 中央氣象署 (CWA) 即時天氣資料
- **天氣警報** - 自動顯示天氣警報橫幅
- **天氣建議** - 根據天氣狀況調整行程建議

### 🚇 交通資訊
- **TDX 整合** - 台灣運輸資料平台景點資訊
- **離線備援** - 無 API 時自動切換離線資料
- **快取機制** - 智能快取減少 API 請求

### 💰 預算規劃
- **旅費估算** - AI 智能估算旅行預算
- **預算等級** - 節儉、舒適、豪華三種預算選項
- **餐飲偏好** - 當地小吃、普通餐廳、高檔餐廳等選項

### 📖 豐富內容
- **景點故事** - AI 生成的景點文化背景與故事
- **美食推薦** - 在地美食與餐廳推薦
- **住宿建議** - 附近住宿選項
- **伴手禮推薦** - 特色伴手禮建議
- **行囊清單** - 旅行準備清單

### 🎨 視覺功能
- **景點插畫** - AI 生成景點代表性插畫
- **行程封面** - 自動生成行程封面圖
- **圖片畫廊** - 景點圖片展示

### 📤 匯出功能
- **多格式匯出** - 支援 PDF、iCalendar、Google Calendar、CSV、純文字
- **交通 PDF** - 專門的交通規劃 PDF 匯出
- **旅行日記** - 生成完整的旅行日記文檔

### 🌐 國際化
- **多語言支援** - 繁體中文 / English
- **深色模式** - 護眼夜間模式
- **響應式設計** - 完美支援桌面與行動裝置

### ⚡ 效能優化
- **模組化架構** - ES6 模組化設計
- **延遲載入** - 智能延遲載入非關鍵資源
- **快取管理** - 多層次快取策略
- **骨架屏** - 優雅的載入體驗

---

## 🚀 快速開始

### 前置需求

- 現代瀏覽器 (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- 網路連線 (首次載入)
- Google Gemini API Key (必需)
- CWA API Key (可選，用於天氣功能)
- TDX API 憑證 (可選，用於景點資訊)

### 安裝步驟

1. **下載專案**
   ```bash
   git clone https://github.com/your-username/ai-travel-guide-taiwan.git
   cd ai-travel-guide-taiwan
   ```

2. **開啟應用程式**
   
   直接在瀏覽器中開啟 `index.html`，或使用本地伺服器：
   
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx http-server
   
   # 使用 PHP
   php -S localhost:8000
   ```

3. **設定 API 金鑰**
   
   在應用程式中輸入您的 API 金鑰：
   - **Google Gemini API** (必需) - [申請連結](https://aistudio.google.com/app/apikey)
   - **中央氣象署 API** (可選) - [申請連結](https://opendata.cwa.gov.tw/user/authkey)
   - **TDX API** (可選) - [申請連結](https://tdx.transportdata.tw/user/register)

4. **開始使用**
   
   選擇景點 → 設定偏好 → 生成行程 → 享受旅程！

---

## 📖 使用指南

### 基本流程

1. **設定 API 金鑰**
   - 在「🔑 API 金鑰設定」區域輸入 Gemini API Key
   - 點擊「驗證」確認金鑰有效
   - (可選) 設定 CWA 和 TDX API 以獲得完整功能

2. **選擇探索國度**
   - 瀏覽台灣各地景點
   - 使用搜尋功能快速找到景點
   - 點擊景點卡片查看詳細資訊
   - 點擊「❤️」收藏喜愛的景點

3. **規劃行程**
   - 輸入旅行偏好 (例如：親子友善、美食探索)
   - 設定基本資訊：目的地、人數、日期、時長
   - 選擇行程類型：晴天漫遊、雨天備案、隨機探索、多日行程
   - 展開「⚙️ 更多設定」調整詳細參數

4. **查看與優化**
   - AI 生成行程後，查看詳細內容
   - 使用「優化行程」功能改進行程
   - 查看地圖與路線規劃
   - 探索景點故事、美食推薦等額外內容

5. **匯出行程**
   - 點擊「📅 匯出行程」選擇格式
   - 支援 PDF、iCalendar、Google Calendar、CSV、TXT
   - 下載交通規劃 PDF

### 進階功能

#### 自訂景點
點擊「+ 新增自訂景點」添加未收錄的景點

#### 語音輸入
點擊麥克風圖示 🎤 使用語音輸入旅行偏好

#### 圖像參考
在「更多設定」中上傳圖片，AI 將分析視覺風格

#### 版本歷史
查看和恢復之前的行程版本

#### 離線模式
啟用「始終離線模式」使用備援資料

---

## 🏗️ 專案架構

### 目錄結構

```
ai-travel-guide-taiwan/
├── index.html              # 主要 HTML 文件
├── README.md               # 專案說明文件
├── css/                    # 樣式表目錄
│   ├── base.css           # 基礎樣式
│   ├── components.css     # 元件樣式
│   ├── dark-mode.css      # 深色模式
│   ├── print.css          # 列印樣式
│   └── ...                # 其他樣式文件
├── js/                     # JavaScript 模組目錄
│   ├── main.js            # 主入口文件
│   ├── api.js             # API 處理
│   ├── state.js           # 狀態管理
│   ├── ui.js              # UI 邏輯
│   ├── config.js          # 配置管理
│   ├── itinerary.js       # 行程邏輯
│   ├── coordinators/      # 協調器模組
│   ├── core/              # 核心功能
│   ├── services/          # 服務層
│   ├── utils/             # 工具函數
│   └── ...                # 其他模組
└── tests/                  # 測試文件
    ├── README.md          # 測試說明
    ├── regression-tests.js # 回歸測試
    └── test-runner.js     # 測試運行器
```

### 核心模組

#### `main.js`
應用程式主入口，負責初始化和事件監聽設定

#### `api.js`
集中管理所有 API 呼叫：
- Gemini AI API
- 中央氣象署 API
- TDX 運輸資料 API
- 圖像生成 API

#### `state.js`
全域狀態管理，使用 Proxy 實現響應式狀態

#### `ui.js`
UI 渲染和互動邏輯，包含：
- 景點卡片渲染
- 行程顯示
- 地圖控制
- 模態框管理

#### `itinerary.js`
行程生成和管理核心邏輯

#### `config.js`
集中管理所有配置常數：
- 快取 TTL
- API 重試策略
- 地圖設定
- UI 參數

---

## 🔧 配置說明

### API 配置

所有 API 配置位於 `js/config.js`：

```javascript
ENDPOINTS: {
    GEMINI_API: 'https://generativelanguage.googleapis.com/v1beta/models',
    CWA_API: 'https://opendata.cwa.gov.tw/api',
    TDX_API: 'https://tdx.transportdata.tw/api/basic',
    NOMINATIM_API: 'https://nominatim.openstreetmap.org',
}
```

### 快取配置

```javascript
CACHE: {
    TTL_WEATHER: 60 * 60 * 1000,           // 1 小時
    TTL_DESTINATIONS: 24 * 60 * 60 * 1000, // 24 小時
    TTL_TDX_DATA: 30 * 60 * 1000,          // 30 分鐘
    TTL_AI_CONTENT: 0,                      // 會話期間
}
```

### 功能開關

```javascript
FEATURES: {
    ENABLE_VOICE_INPUT: true,
    ENABLE_TTS: true,
    ENABLE_DARK_MODE: true,
    ENABLE_PWA: true,
    ENABLE_VERSION_HISTORY: true,
    ENABLE_BUDGET_ESTIMATOR: true,
    ENABLE_AR_NAVIGATION: false,  // 實驗性功能
}
```

---

## 🧪 測試

### 運行測試

1. 在瀏覽器中開啟應用程式
2. 開啟開發者工具 (F12)
3. 切換到 Console 標籤
4. 運行測試命令：

```javascript
// 運行所有測試
await runAllTests()

// 運行特定類別測試
await runTestsByCategory('UI')
await runTestsByCategory('API')
await runTestsByCategory('AI')

// 獲取測試統計
getTestStats()
```

詳細測試說明請參閱 [tests/README.md](tests/README.md)

---

## 🤝 貢獻指南

我們歡迎所有形式的貢獻！

### 如何貢獻

1. Fork 此專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交變更 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

### 開發規範

- 使用 ES6+ 模組化語法
- 遵循現有的程式碼風格
- 添加適當的註解
- 更新相關文檔
- 確保測試通過

---

## 📋 API 文檔

### Google Gemini API

**用途**: AI 內容生成、行程規劃、圖像生成

**申請**: [Google AI Studio](https://aistudio.google.com/app/apikey)

**免費額度**: 每分鐘 15 次請求

### 中央氣象署 API

**用途**: 天氣預報、天氣警報

**申請**: [CWA 開放資料平台](https://opendata.cwa.gov.tw/user/authkey)

**免費額度**: 每日 5,000 次請求

### TDX 運輸資料 API

**用途**: 景點資訊、交通資料

**申請**: [TDX 運輸資料平台](https://tdx.transportdata.tw/user/register)

**免費額度**: 每日 20,000 次請求

---

## 🔒 隱私與安全

- **本地儲存**: 所有 API 金鑰儲存在瀏覽器本地儲存 (localStorage)
- **不傳送伺服器**: API 金鑰僅用於客戶端請求，不會傳送到任何伺服器
- **可清除**: 可隨時清除瀏覽器資料移除所有儲存的金鑰
- **HTTPS**: 建議使用 HTTPS 部署以確保安全

---

## 🐛 已知問題

- 某些舊版瀏覽器可能不支援所有功能
- 語音輸入需要瀏覽器支援 Web Speech API
- 圖像生成功能需要 Gemini 2.0 Flash 模型

---

## 📝 更新日誌

### v3.2 (Current)
- ✨ 新增版本歷史功能
- ✨ 新增旅費估算功能
- ✨ 新增匯出功能增強
- 🐛 修復深色模式背景問題
- 🐛 修復行程優化顯示問題
- ⚡ 效能優化與模組化重構

### v3.1
- ✨ 新增智能旅行規劃器
- ✨ 新增旅行日記生成器
- 🎨 UI/UX 改進

### v3.0
- 🎉 重大架構重構
- ✨ 模組化設計
- ⚡ 效能大幅提升

---

## 📄 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

---

## 👥 作者

**AI Travel Guide Taiwan Team**

---

## 🙏 致謝

- [Google Gemini](https://ai.google.dev/) - AI 能力支援
- [中央氣象署](https://www.cwa.gov.tw/) - 天氣資料
- [TDX 運輸資料平台](https://tdx.transportdata.tw/) - 景點與交通資料
- [Leaflet](https://leafletjs.com/) - 地圖功能
- [OpenStreetMap](https://www.openstreetmap.org/) - 地圖圖資

---

## 📞 聯絡方式

如有問題或建議，歡迎：
- 開啟 [Issue](https://github.com/your-username/ai-travel-guide-taiwan/issues)
- 提交 [Pull Request](https://github.com/your-username/ai-travel-guide-taiwan/pulls)

---

**享受您的台灣之旅！🎉**

