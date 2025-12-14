# API 文檔

本文檔詳細說明專案中使用的所有 API 及其使用方法。

---

## 目錄

- [Google Gemini API](#google-gemini-api)
- [中央氣象署 API](#中央氣象署-api)
- [TDX 運輸資料 API](#tdx-運輸資料-api)
- [內部 API 函數](#內部-api-函數)
- [錯誤處理](#錯誤處理)
- [重試策略](#重試策略)

---

## Google Gemini API

### 概述

Google Gemini API 是本專案的核心 AI 引擎，用於生成行程、景點故事、美食推薦等內容。

### 申請方式

1. 前往 [Google AI Studio](https://aistudio.google.com/app/apikey)
2. 登入 Google 帳號
3. 點擊「Create API Key」
4. 複製生成的 API Key

### 免費額度

- **請求限制**: 每分鐘 15 次請求
- **Token 限制**: 每分鐘 1,000,000 tokens
- **每日限制**: 1,500 次請求

### 使用的模型

#### gemini-2.0-flash-exp
- **用途**: 文字生成、行程規劃
- **特點**: 快速回應、支援結構化輸出
- **Context Window**: 1,000,000 tokens

#### gemini-1.5-flash
- **用途**: 圖像分析、多模態任務
- **特點**: 支援圖像輸入
- **Context Window**: 1,000,000 tokens

### API 函數

#### `verifyGeminiApi()`

驗證 Gemini API Key 是否有效。

```javascript
async function verifyGeminiApi()
```

**返回值**:
- `true` - API Key 有效
- `false` - API Key 無效

**範例**:
```javascript
const isValid = await verifyGeminiApi();
if (isValid) {
    console.log('API Key 驗證成功');
}
```

#### `callGeminiAPI(prompt)`

呼叫 Gemini API 生成文字內容。

```javascript
async function callGeminiAPI(prompt)
```

**參數**:
- `prompt` (string) - 提示詞

**返回值**:
- (string) - 生成的文字內容

**範例**:
```javascript
const story = await callGeminiAPI('請介紹台北101的歷史');
console.log(story);
```

#### `callGeminiAPIWithSchema(prompt, schema)`

呼叫 Gemini API 並要求結構化輸出。

```javascript
async function callGeminiAPIWithSchema(prompt, schema)
```

**參數**:
- `prompt` (string) - 提示詞
- `schema` (object) - JSON Schema 定義

**返回值**:
- (object) - 符合 schema 的 JSON 物件

**範例**:
```javascript
const schema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        rating: { type: 'number' }
    }
};

const result = await callGeminiAPIWithSchema(
    '推薦一家台北餐廳',
    schema
);
```

#### `callGeminiImageGenerationAPI(prompt)`

使用 Gemini 生成圖像。

```javascript
async function callGeminiImageGenerationAPI(prompt)
```

**參數**:
- `prompt` (string) - 圖像描述提示詞

**返回值**:
- (string) - Base64 編碼的圖像資料

**範例**:
```javascript
const imageData = await callGeminiImageGenerationAPI(
    '台北101的插畫，水彩風格'
);
```

---

## 中央氣象署 API

### 概述

中央氣象署 (CWA) API 提供台灣地區的天氣預報和警報資訊。

### 申請方式

1. 前往 [CWA 開放資料平台](https://opendata.cwa.gov.tw/user/authkey)
2. 註冊帳號並登入
3. 在「授權碼」頁面取得 API Key

### 免費額度

- **每日限制**: 5,000 次請求
- **每小時限制**: 500 次請求

### API 函數

#### `verifyCwaApi()`

驗證 CWA API Key 並載入天氣資料。

```javascript
async function verifyCwaApi()
```

**返回值**:
- `true` - API Key 有效且成功載入資料
- `false` - API Key 無效或載入失敗

**範例**:
```javascript
const success = await verifyCwaApi();
if (success) {
    console.log('天氣資料載入成功');
}
```

#### `fetchCwaData(location)`

獲取指定地點的天氣預報資料。

```javascript
async function fetchCwaData(location = '臺北市')
```

**參數**:
- `location` (string) - 縣市名稱，預設為「臺北市」

**返回值**:
```javascript
{
    forecast: {
        temperature: string,
        weather: string,
        rainProbability: string
    },
    warnings: Array<string>
}
```

**範例**:
```javascript
const weather = await fetchCwaData('台中市');
console.log(weather.forecast.temperature); // "25°C"
```

#### `fetchCwaAlerts()`

獲取天氣警報資訊。

```javascript
async function fetchCwaAlerts()
```

**返回值**:
```javascript
Array<{
    title: string,
    severity: string,
    description: string
}>
```

**範例**:
```javascript
const alerts = await fetchCwaAlerts();
alerts.forEach(alert => {
    console.log(`${alert.severity}: ${alert.title}`);
});
```

---

## TDX 運輸資料 API

### 概述

TDX (Transport Data eXchange) 提供台灣的景點、交通等資料。

### 申請方式

1. 前往 [TDX 運輸資料平台](https://tdx.transportdata.tw/user/register)
2. 註冊帳號
3. 在「會員中心」取得 Client ID 和 Client Secret

### 免費額度

- **每日限制**: 20,000 次請求
- **每分鐘限制**: 60 次請求

### API 函數

#### `verifyTdxApi()`

驗證 TDX API 憑證。

```javascript
async function verifyTdxApi()
```

**返回值**:
- `true` - 憑證有效
- `false` - 憑證無效

**範例**:
```javascript
const isValid = await verifyTdxApi();
```

#### `getTdxAccessToken()`

獲取 TDX Access Token。

```javascript
async function getTdxAccessToken()
```

**返回值**:
- (string) - Access Token

**說明**: 此函數會自動快取 token，在過期前不會重複請求。

#### `fetchTdxScenicSpots(city)`

獲取指定城市的觀光景點資料。

```javascript
async function fetchTdxScenicSpots(city)
```

**參數**:
- `city` (string) - 城市名稱（例如：'Taipei', 'Taichung'）

**返回值**:
```javascript
Array<{
    ScenicSpotID: string,
    ScenicSpotName: string,
    Description: string,
    Address: string,
    Position: {
        PositionLat: number,
        PositionLon: number
    },
    Picture: {
        PictureUrl1: string
    }
}>
```

**範例**:
```javascript
const spots = await fetchTdxScenicSpots('Taipei');
console.log(spots[0].ScenicSpotName);
```

#### `fetchTdxScenicSpotDetails(scenicSpotId)`

獲取景點詳細資訊。

```javascript
async function fetchTdxScenicSpotDetails(scenicSpotId)
```

**參數**:
- `scenicSpotId` (string) - 景點 ID

**返回值**:
```javascript
{
    OpenTime: string,
    Phone: string,
    WebsiteUrl: string,
    TicketInfo: string
}
```

#### `fetchTdxNearbyPOIs(type, lat, lon, radius, top)`

獲取附近的興趣點 (POI)。

```javascript
async function fetchTdxNearbyPOIs(
    type,
    lat,
    lon,
    radius = 800,
    top = 5
)
```

**參數**:
- `type` (string) - POI 類型：'ScenicSpot', 'Restaurant', 'Hotel'
- `lat` (number) - 緯度
- `lon` (number) - 經度
- `radius` (number) - 搜尋半徑（公尺），預設 800
- `top` (number) - 返回數量，預設 5

**返回值**:
- (Array) - POI 列表

**範例**:
```javascript
const restaurants = await fetchTdxNearbyPOIs(
    'Restaurant',
    25.0330,
    121.5654,
    1000,
    10
);
```

#### `clearTdxCache()`

清除 TDX 快取資料。

```javascript
function clearTdxCache()
```

**範例**:
```javascript
clearTdxCache();
console.log('TDX 快取已清除');
```

---

## 內部 API 函數

### 快取管理

#### `CacheManager`

快取管理器類別，提供統一的快取介面。

```javascript
import { CacheManager } from './cache-manager.js';

const cache = new CacheManager();
```

**方法**:

##### `get(key)`
```javascript
const value = cache.get('myKey');
```

##### `set(key, value, ttl)`
```javascript
cache.set('myKey', data, 3600000); // TTL: 1 小時
```

##### `has(key)`
```javascript
if (cache.has('myKey')) {
    // 快取存在
}
```

##### `delete(key)`
```javascript
cache.delete('myKey');
```

##### `clear()`
```javascript
cache.clear(); // 清除所有快取
```

### 重試處理

#### `globalRetryHandler`

全域重試處理器，提供智能重試機制。

```javascript
import { globalRetryHandler } from './api-retry-handler.js';
```

##### `fetchWithRetry(fn, options)`

```javascript
const result = await globalRetryHandler.fetchWithRetry(
    async () => {
        // 您的 API 呼叫
        return await fetch(url);
    },
    {
        maxRetries: 3,
        initialDelay: 1000,
        onRetry: (attempt, delay, error) => {
            console.log(`重試第 ${attempt} 次...`);
        }
    }
);
```

**選項**:
- `maxRetries` (number) - 最大重試次數，預設 3
- `initialDelay` (number) - 初始延遲（毫秒），預設 1000
- `backoffMultiplier` (number) - 退避倍數，預設 2
- `onRetry` (function) - 重試回調函數

---

## 錯誤處理

### 錯誤類型

#### API 錯誤

```javascript
try {
    await callGeminiAPI(prompt);
} catch (error) {
    if (error.status === 401) {
        // API Key 無效
    } else if (error.status === 429) {
        // 超過速率限制
    } else if (error.status === 500) {
        // 伺服器錯誤
    }
}
```

#### 網路錯誤

```javascript
try {
    await fetchTdxData(url);
} catch (error) {
    if (error.message.includes('network')) {
        // 網路連線問題
    }
}
```

### 錯誤處理最佳實踐

1. **使用 try-catch**
   ```javascript
   try {
       const result = await apiCall();
   } catch (error) {
       console.error('API 呼叫失敗:', error);
       // 顯示使用者友善的錯誤訊息
   }
   ```

2. **提供備援方案**
   ```javascript
   let data;
   try {
       data = await fetchTdxScenicSpots(city);
   } catch (error) {
       // 使用離線備援資料
       data = getFallbackDestinations();
   }
   ```

3. **記錄錯誤**
   ```javascript
   catch (error) {
       console.error('詳細錯誤:', {
           message: error.message,
           stack: error.stack,
           timestamp: new Date().toISOString()
       });
   }
   ```

---

## 重試策略

### 配置

重試策略在 `config.js` 中配置：

```javascript
API: {
    RETRY_MAX: 3,                      // 最大重試次數
    RETRY_INITIAL_DELAY: 1000,         // 初始延遲 1 秒
    RETRY_BACKOFF_MULTIPLIER: 2,       // 指數退避倍數
    TIMEOUT: 30000,                    // 30 秒超時
    NON_RETRYABLE_STATUS: [400, 401, 403, 404, 422],
}
```

### 重試邏輯

1. **第 1 次重試**: 延遲 1 秒
2. **第 2 次重試**: 延遲 2 秒
3. **第 3 次重試**: 延遲 4 秒

### 不可重試的狀態碼

以下 HTTP 狀態碼不會觸發重試：
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Unprocessable Entity

### 自訂重試

```javascript
const result = await globalRetryHandler.fetchWithRetry(
    async () => await myApiCall(),
    {
        maxRetries: 5,              // 自訂最大重試次數
        initialDelay: 2000,         // 自訂初始延遲
        backoffMultiplier: 1.5,     // 自訂退避倍數
        onRetry: (attempt, delay, error) => {
            console.log(`重試 ${attempt}/${5}，延遲 ${delay}ms`);
        }
    }
);
```

---

## 速率限制

### Gemini API
- **每分鐘**: 15 次請求
- **建議**: 在請求之間加入延遲

### CWA API
- **每小時**: 500 次請求
- **每日**: 5,000 次請求
- **建議**: 使用快取減少請求

### TDX API
- **每分鐘**: 60 次請求
- **每日**: 20,000 次請求
- **建議**: 快取景點資料

---

## 最佳實踐

### 1. 使用快取

```javascript
// 檢查快取
if (cache.has('destinations_taipei')) {
    return cache.get('destinations_taipei');
}

// 呼叫 API
const data = await fetchTdxScenicSpots('Taipei');

// 儲存到快取
cache.set('destinations_taipei', data, CONFIG.CACHE.TTL_TDX_DATA);
```

### 2. 批次請求

```javascript
// 不好的做法
for (const city of cities) {
    await fetchTdxScenicSpots(city); // 逐一請求
}

// 好的做法
const promises = cities.map(city => fetchTdxScenicSpots(city));
const results = await Promise.all(promises); // 並行請求
```

### 3. 錯誤恢復

```javascript
async function fetchWithFallback(city) {
    try {
        return await fetchTdxScenicSpots(city);
    } catch (error) {
        console.warn('API 失敗，使用備援資料');
        return getFallbackDestinations();
    }
}
```

### 4. 超時處理

```javascript
async function fetchWithTimeout(promise, timeout = 30000) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('請求超時')), timeout)
        )
    ]);
}
```

---

## 範例程式碼

### 完整的 API 呼叫範例

```javascript
import { callGeminiAPI } from './api.js';
import { CacheManager } from './cache-manager.js';
import { globalRetryHandler } from './api-retry-handler.js';

const cache = new CacheManager();

async function generateItinerary(preferences) {
    // 檢查快取
    const cacheKey = `itinerary_${JSON.stringify(preferences)}`;
    if (cache.has(cacheKey)) {
        console.log('使用快取的行程');
        return cache.get(cacheKey);
    }

    // 建立提示詞
    const prompt = `請根據以下偏好生成台灣旅遊行程：
        偏好: ${preferences.style}
        天數: ${preferences.days}
        預算: ${preferences.budget}
    `;

    try {
        // 使用重試機制呼叫 API
        const itinerary = await globalRetryHandler.fetchWithRetry(
            async () => await callGeminiAPI(prompt),
            {
                maxRetries: 3,
                onRetry: (attempt) => {
                    console.log(`生成行程重試第 ${attempt} 次...`);
                }
            }
        );

        // 儲存到快取
        cache.set(cacheKey, itinerary, 3600000); // 1 小時

        return itinerary;
    } catch (error) {
        console.error('生成行程失敗:', error);
        throw error;
    }
}
```

---

## 故障排除

### Gemini API 問題

**問題**: API Key 無效
```
解決方案:
1. 檢查 API Key 是否正確複製
2. 確認 API Key 未過期
3. 在 Google AI Studio 重新生成 Key
```

**問題**: 超過速率限制
```
解決方案:
1. 減少請求頻率
2. 使用快取
3. 考慮升級到付費方案
```

### CWA API 問題

**問題**: 無法取得天氣資料
```
解決方案:
1. 檢查 API Key 是否有效
2. 確認縣市名稱格式正確（例如：「臺北市」而非「台北市」）
3. 檢查是否超過每日限制
```

### TDX API 問題

**問題**: Token 獲取失敗
```
解決方案:
1. 檢查 Client ID 和 Client Secret
2. 確認憑證未過期
3. 清除快取並重試
```

**問題**: 景點資料為空
```
解決方案:
1. 檢查城市名稱拼寫（使用英文，例如：'Taipei'）
2. 嘗試使用離線模式
3. 清除 TDX 快取
```

---

## 參考資源

- [Google Gemini API 文檔](https://ai.google.dev/docs)
- [CWA API 文檔](https://opendata.cwa.gov.tw/dist/opendata-swagger.html)
- [TDX API 文檔](https://tdx.transportdata.tw/api-service/swagger)
- [專案 GitHub](https://github.com/your-username/ai-travel-guide-taiwan)

---

**最後更新**: 2025-12-04
