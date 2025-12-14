# 貢獻指南

感謝您對 AI 台灣旅遊指南專案的興趣！我們歡迎所有形式的貢獻。

---

## 目錄

- [行為準則](#行為準則)
- [如何貢獻](#如何貢獻)
- [開發環境設定](#開發環境設定)
- [程式碼規範](#程式碼規範)
- [提交規範](#提交規範)
- [Pull Request 流程](#pull-request-流程)
- [測試指南](#測試指南)

---

## 行為準則

### 我們的承諾

為了營造一個開放且友善的環境，我們承諾：

- 尊重不同的觀點和經驗
- 接受建設性的批評
- 關注對社群最有利的事情
- 對其他社群成員表現同理心

### 不可接受的行為

- 使用性暗示的語言或圖像
- 人身攻擊或侮辱性評論
- 公開或私下騷擾
- 未經許可發布他人的私人資訊
- 其他不道德或不專業的行為

---

## 如何貢獻

### 回報 Bug

發現 Bug？請幫助我們改進！

1. **檢查是否已有相同問題**
   - 搜尋 [Issues](https://github.com/your-username/ai-travel-guide-taiwan/issues)
   - 避免重複回報

2. **建立詳細的 Bug 報告**
   - 使用清晰的標題
   - 描述重現步驟
   - 說明預期行為和實際行為
   - 提供截圖或錯誤訊息
   - 說明環境（瀏覽器、作業系統）

**Bug 報告範本**:
```markdown
### Bug 描述
簡短描述問題

### 重現步驟
1. 前往 '...'
2. 點擊 '...'
3. 滾動到 '...'
4. 看到錯誤

### 預期行為
應該發生什麼

### 實際行為
實際發生什麼

### 截圖
如果適用，請附上截圖

### 環境
- 瀏覽器: [例如 Chrome 120]
- 作業系統: [例如 Windows 11]
- 版本: [例如 v3.2]
```

### 建議新功能

有好點子？我們很樂意聽到！

1. **檢查是否已有相同建議**
2. **建立 Feature Request**
   - 清楚描述功能
   - 說明為什麼需要這個功能
   - 提供使用案例
   - 如果可能，提供實作建議

**功能建議範本**:
```markdown
### 功能描述
清楚簡潔地描述您想要的功能

### 問題陳述
這個功能解決什麼問題？

### 建議解決方案
您希望如何實作？

### 替代方案
您考慮過哪些替代方案？

### 額外資訊
其他相關資訊或截圖
```

### 改進文檔

文檔永遠可以更好！

- 修正錯字或語法錯誤
- 改進說明的清晰度
- 添加範例
- 翻譯文檔

### 貢獻程式碼

準備好貢獻程式碼了嗎？太棒了！

1. Fork 專案
2. 建立功能分支
3. 撰寫程式碼
4. 撰寫測試
5. 提交 Pull Request

詳細步驟請見 [Pull Request 流程](#pull-request-流程)

---

## 開發環境設定

### 前置需求

- Git
- 現代瀏覽器 (Chrome 90+, Firefox 88+)
- 文字編輯器 (推薦 VS Code)
- (可選) Node.js (用於本地伺服器)

### 設定步驟

1. **Fork 專案**
   ```bash
   # 在 GitHub 上點擊 Fork 按鈕
   ```

2. **Clone 您的 Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ai-travel-guide-taiwan.git
   cd ai-travel-guide-taiwan
   ```

3. **設定 Upstream**
   ```bash
   git remote add upstream https://github.com/original-owner/ai-travel-guide-taiwan.git
   ```

4. **啟動本地伺服器**
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 或使用 Node.js
   npx http-server
   
   # 或使用 PHP
   php -S localhost:8000
   ```

5. **開啟瀏覽器**
   ```
   http://localhost:8000
   ```

### 推薦的 VS Code 擴充功能

- ESLint
- Prettier
- Live Server
- JavaScript (ES6) code snippets
- Path Intellisense

---

## 程式碼規範

### JavaScript 規範

#### 1. 使用 ES6+ 語法

```javascript
// ✅ 好
const items = [...array];
const { name, age } = person;
const greeting = `Hello, ${name}!`;

// ❌ 不好
var items = array.slice();
var name = person.name;
var greeting = 'Hello, ' + name + '!';
```

#### 2. 使用 const 和 let

```javascript
// ✅ 好
const MAX_SIZE = 100;
let currentSize = 0;

// ❌ 不好
var MAX_SIZE = 100;
var currentSize = 0;
```

#### 3. 函數命名

```javascript
// ✅ 好 - 使用動詞開頭
function fetchUserData() { }
function calculateTotal() { }
function isValid() { }

// ❌ 不好
function userData() { }
function total() { }
function valid() { }
```

#### 4. 使用箭頭函數

```javascript
// ✅ 好
const double = x => x * 2;
const sum = (a, b) => a + b;

// ❌ 不好 (除非需要 this 綁定)
const double = function(x) { return x * 2; };
```

#### 5. 解構賦值

```javascript
// ✅ 好
const { name, age } = user;
const [first, second] = array;

// ❌ 不好
const name = user.name;
const age = user.age;
```

#### 6. 模組匯入

```javascript
// ✅ 好
import { fetchData, processData } from './api.js';
import CONFIG from './config.js';

// ❌ 不好
import * as everything from './api.js';
```

#### 7. 錯誤處理

```javascript
// ✅ 好
try {
    const data = await fetchData();
    processData(data);
} catch (error) {
    console.error('Failed to fetch data:', error);
    showErrorMessage('無法載入資料，請稍後重試');
}

// ❌ 不好
const data = await fetchData(); // 沒有錯誤處理
```

#### 8. 註解

```javascript
// ✅ 好 - 解釋為什麼，不是什麼
// 使用快取避免重複的 API 呼叫
if (cache.has(key)) {
    return cache.get(key);
}

// ❌ 不好 - 只是重複程式碼
// 檢查快取是否有 key
if (cache.has(key)) {
    return cache.get(key);
}
```

### CSS 規範

#### 1. 使用 BEM 命名

```css
/* ✅ 好 */
.card { }
.card__title { }
.card__title--highlighted { }

/* ❌ 不好 */
.card { }
.cardTitle { }
.card-title-highlighted { }
```

#### 2. 使用 CSS 變數

```css
/* ✅ 好 */
:root {
    --primary-color: #22c55e;
    --text-color: #333;
}

.button {
    background: var(--primary-color);
    color: var(--text-color);
}

/* ❌ 不好 */
.button {
    background: #22c55e;
    color: #333;
}
```

#### 3. 避免深層嵌套

```css
/* ✅ 好 */
.nav { }
.nav__item { }
.nav__link { }

/* ❌ 不好 */
.nav ul li a { }
```

### HTML 規範

#### 1. 語義化標籤

```html
<!-- ✅ 好 -->
<header>
    <nav>
        <ul>
            <li><a href="#">首頁</a></li>
        </ul>
    </nav>
</header>

<!-- ❌ 不好 -->
<div class="header">
    <div class="nav">
        <div class="list">
            <div class="item"><a href="#">首頁</a></div>
        </div>
    </div>
</div>
```

#### 2. 無障礙屬性

```html
<!-- ✅ 好 -->
<button aria-label="關閉對話框" aria-expanded="false">
    ✕
</button>

<!-- ❌ 不好 -->
<div onclick="close()">✕</div>
```

---

## 提交規範

### Commit Message 格式

使用 [Conventional Commits](https://www.conventionalcommits.org/) 規範：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 類型

- `feat`: 新功能
- `fix`: Bug 修復
- `docs`: 文檔更新
- `style`: 程式碼格式（不影響功能）
- `refactor`: 重構（不是新功能也不是 Bug 修復）
- `perf`: 效能改進
- `test`: 測試相關
- `chore`: 建置或輔助工具變動

### 範例

```bash
# 新功能
feat(itinerary): add multi-day trip planning

# Bug 修復
fix(map): correct marker positioning on mobile

# 文檔
docs(readme): update API documentation

# 重構
refactor(api): simplify retry logic

# 效能
perf(cache): implement memory cache layer
```

### Commit Message 最佳實踐

1. **使用現在式**: "add feature" 不是 "added feature"
2. **簡潔明瞭**: 第一行不超過 50 字元
3. **詳細說明**: 如需要，在 body 中詳細說明
4. **參考 Issue**: 在 footer 中參考相關 Issue

```bash
feat(export): add CSV export functionality

Implement CSV export for itineraries with the following columns:
- Date
- Time
- Location
- Activity
- Notes

Closes #123
```

---

## Pull Request 流程

### 1. 建立分支

```bash
# 更新主分支
git checkout main
git pull upstream main

# 建立功能分支
git checkout -b feature/your-feature-name
```

### 分支命名規範

- `feature/` - 新功能
- `fix/` - Bug 修復
- `docs/` - 文檔更新
- `refactor/` - 重構
- `test/` - 測試

範例:
```bash
feature/add-budget-calculator
fix/map-marker-positioning
docs/update-api-guide
refactor/simplify-state-management
```

### 2. 撰寫程式碼

- 遵循程式碼規範
- 撰寫清晰的註解
- 保持 commit 小而專注

### 3. 測試

```bash
# 在瀏覽器中測試
# 運行回歸測試
await runAllTests()

# 確保沒有錯誤
```

### 4. 提交變更

```bash
git add .
git commit -m "feat(scope): description"
```

### 5. 推送到 GitHub

```bash
git push origin feature/your-feature-name
```

### 6. 建立 Pull Request

1. 前往 GitHub 上您的 Fork
2. 點擊 "New Pull Request"
3. 選擇您的分支
4. 填寫 PR 描述

### PR 描述範本

```markdown
## 變更類型
- [ ] Bug 修復
- [ ] 新功能
- [ ] 重構
- [ ] 文檔更新

## 變更描述
簡短描述這個 PR 做了什麼

## 相關 Issue
Closes #123

## 測試
描述如何測試這些變更

## 截圖
如果適用，請附上截圖

## Checklist
- [ ] 程式碼遵循專案規範
- [ ] 已撰寫/更新測試
- [ ] 已更新文檔
- [ ] 所有測試通過
- [ ] 沒有新的警告
```

### 7. Code Review

- 回應審查意見
- 進行必要的修改
- 保持禮貌和專業

### 8. 合併

PR 被批准後，維護者會合併您的變更。

---

## 測試指南

### 運行測試

```javascript
// 在瀏覽器控制台中
await runAllTests()

// 運行特定類別
await runTestsByCategory('UI')
await runTestsByCategory('API')
```

### 撰寫測試

在 `tests/regression-tests.js` 中添加測試：

```javascript
{
    name: '測試名稱',
    category: 'UI',
    steps: [
        '1. 步驟一',
        '2. 步驟二'
    ],
    expected: '預期結果',
    testFn: async () => {
        // 測試邏輯
        const element = document.getElementById('test-id');
        if (!element) {
            throw new Error('Element not found');
        }
        return true;
    }
}
```

### 測試最佳實踐

1. **測試應該獨立**: 不依賴其他測試
2. **清理狀態**: 測試後恢復原始狀態
3. **明確的斷言**: 清楚說明預期結果
4. **覆蓋邊界情況**: 測試極端情況

---

## 發布流程

### 版本號規則

遵循 [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH`
- `MAJOR`: 不相容的 API 變更
- `MINOR`: 向後相容的新功能
- `PATCH`: 向後相容的 Bug 修復

範例:
- `3.2.0` → `3.2.1` (Bug 修復)
- `3.2.0` → `3.3.0` (新功能)
- `3.2.0` → `4.0.0` (重大變更)

---

## 獲取幫助

### 需要協助？

- 查看 [文檔](docs/)
- 搜尋 [Issues](https://github.com/your-username/ai-travel-guide-taiwan/issues)
- 開啟新的 Issue 提問

### 聯絡方式

- GitHub Issues
- Email: your-email@example.com

---

## 致謝

感謝所有貢獻者！您的貢獻讓這個專案更好。

### 貢獻者名單

查看 [Contributors](https://github.com/your-username/ai-travel-guide-taiwan/graphs/contributors)

---

**感謝您的貢獻！🎉**
