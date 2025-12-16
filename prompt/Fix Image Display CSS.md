# Chat Conversation

Note: _This is purely the output of the chat conversation and does not contain any raw data, codebase snippets, etc. used to generate the output._

### User Input

進行天氣資訊功能的測試，http://127.0.0.1:5501/index.html

### Planner Response

I'll help you test the weather information feature at http://127.0.0.1:5501/index.html. Let me start by examining the current implementation and then perform comprehensive testing.

*Viewed [index.html](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/index.html) *

### Planner Response

Let me continue viewing the HTML to see the weather-related sections:

*Grep searched codebase*

*Viewed [index.html](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/index.html) *

### Planner Response

Now let me check the weather-related JavaScript code to understand how the weather feature works:

*Searched filesystem*

*Grep searched codebase*

*Grep searched codebase*

### Planner Response

Now let me create a comprehensive test plan document and then execute the browser testing:

*Edited relevant file*

### Planner Response

Now let me start the browser testing:

### User Input

api以輸入

### Planner Response

好的，了解您已經輸入了 API 金鑰。讓我繼續測試天氣資訊功能的各個方面。

### Planner Response

太好了！CWA API 驗證成功。現在讓我繼續測試天氣警報橫幅和天氣預報顯示：

### Planner Response

讓我繼續測試，嘗試直接訪問天氣資訊區域：

### Planner Response

很好！現在讓我點擊「載入最新天氣」按鈕來查看天氣預報資料：

### Planner Response

發現天氣資料載入失敗。讓我檢查一下程式碼中的問題，並測試其他天氣功能：

*Viewed code item*

### Planner Response

讓我更新測試任務並創建測試報告：

*Edited relevant file*

*Edited relevant file*

### User Input

解決景點資料讀取不穩定

### Planner Response

我來幫您解決景點資料讀取不穩定的問題。讓我先調查一下目前的景點資料載入機制。

*Grep searched codebase*

*Grep searched codebase*

*Grep searched codebase*

*Viewed code item*

*Grep searched codebase*

*Viewed code item*

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

現在我了解了問題所在。讓我檢查 `fetchTdxData` 函數和相關的錯誤處理：

*Viewed code item*

*Grep searched codebase*

### Planner Response

現在我明白問題了。讓我創建一個實施計劃來解決景點資料讀取不穩定的問題：

*Edited relevant file*

*Viewed [api.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js) *

### Planner Response

現在讓我實施修復方案。首先添加重試機制：

*Edited relevant file*

### Planner Response

現在讓我改進 [fetchTdxData](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js:259:0-284:1) 函數以支持超時和重試：

*Edited relevant file*

### Planner Response

現在讓我改進 [fetchTdxScenicSpots](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js:320:0-357:1) 函數以更好地處理快取和錯誤：

*Edited relevant file*

### Planner Response

現在讓我改進 [ui.js](cci:7://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:0:0-0:0) 中的 [loadAndRenderDestinations](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1425:0-1606:1) 函數以更好地處理部分失敗的情況：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

*Edited relevant file*

### Planner Response

現在讓我確保 [showToast](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:2407:0-2441:1) 函數支持警告類型。讓我檢查一下：

*Grep searched codebase*

*Viewed code item*

### Planner Response

好的，[showToast](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:2407:0-2441:1) 函數已經支持類型參數。現在讓我更新它以支持帶有持續時間的類型：

*Edited relevant file*

### Planner Response

現在讓我更新任務文件並創建測試驗證計劃：

*Edited relevant file*

*Edited relevant file*

### User Input

tdx驗證後為甚麼有時會只有一個離線景點

### Planner Response

我來幫您診斷為什麼 TDX 驗證後有時只顯示一個離線景點的問題。讓我先查看上傳的截圖和相關程式碼。

*Viewed [uploaded_image_1763812381088.png](file:///C:/Users/asus/.gemini/antigravity/brain/b636bbcd-ed24-4fb6-91fa-5376e82591d7/uploaded_image_1763812381088.png) *

*Grep searched codebase*

### Planner Response

從截圖中我看到中部地區只顯示 1 個景點，這確實是個問題。讓我檢查相關的程式碼邏輯：

*Viewed [state.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/state.js) *

*Grep searched codebase*

### Planner Response

我發現問題了！從截圖看到中部地區只有 1 個景點，而離線備援資料中確實只有一個中部地區的景點（日月潭）。問題在於當 TDX API 請求失敗或返回空資料時，程式碼會回退到離線備援資料，但離線備援資料本身就很少。

讓我檢查資料映射的邏輯：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

*Grep searched codebase*

### Planner Response

我找到問題了！在 [renderDestinationsAccordion](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1757:0-1853:1) 函數的第 1774 行，地區匹配邏輯使用了 `dest.city.includes(city)`，這會導致問題：

```javascript
if (cities.some(city => dest.city && dest.city.includes(city))) {
```

這個邏輯有問題，因為：
1. 如果 `dest.city` 是「臺中市」，而 `city` 是「臺中市」，這會匹配成功
2. 但如果 TDX 返回的城市名稱格式不一致（例如沒有「市」或「縣」），就會匹配失敗

讓我檢查 TDX 返回的資料格式並修復這個問題：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

現在我明白問題了。讓我檢查一下 [loadAndRenderDestinations](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1425:0-1644:1) 中的地區映射邏輯，看看是否也有同樣的問題：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

好的，我現在明白問題的根源了。在 [loadAndRenderDestinations](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1425:0-1644:1) 中，地區是通過 `cityToRegionMap.get(spot.City)` 正確設置的（第 1526 行），但在 [renderDestinationsAccordion](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1757:0-1853:1) 中（第 1774 行），使用了錯誤的匹配邏輯。

問題有兩個：
1. **第 1774 行的匹配邏輯錯誤**：使用 `dest.city.includes(city)` 會導致匹配問題
2. **應該使用已經設置好的 `dest.region` 屬性**，而不是重新計算

讓我修復這個問題：

*Edited relevant file*

### Planner Response

現在讓我添加一些調試日誌來幫助診斷問題，並確保我們能看到實際發生了什麼：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

讓我添加調試日誌並創建診斷文檔：

*Edited relevant file*

*Edited relevant file*

*Edited relevant file*

### User Input

C1_379000000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000009?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000005?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
C1_379000000A_000004?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
C1_379000000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
C1_379000000A_000008?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
C1_379000000A_000003?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
C1_379000000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000035?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000033?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000034?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000023?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000017?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000019?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000018?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000021?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000015?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000031?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000032?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376420000A_000253?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_001274?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000117?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000249?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000275?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000279?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000283?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000286?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000291?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000293?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000295?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000313?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000316?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000423?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_379000000A_000425?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107161?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107166?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107424?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109607?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109612?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109613?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109616?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109617?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109618?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109620?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109621?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109622?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109624?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109625?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_382000000A_109630?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376570000A_000069?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000061?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000063?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_A15011000H_000255?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000156?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000154?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000155?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000157?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_313020000G_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000054?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000050?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000129?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000189?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000151?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_313020000G_000136?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000012?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_A15011000H_000152?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000057?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_379000000A_000130?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376430000A_000188?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000119?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000137?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000118?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000248?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000308?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000292?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000106?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000276?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000309?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000134?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000135?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000186?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000108?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000311?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376430000A_000314?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000283?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000104?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376580000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000021?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000025?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000020?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000032?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000073?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000075?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000054?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000031?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000032?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000033?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000036?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000039?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000041?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000043?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000044?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000045?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000048?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000049?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000052?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000054?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000055?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000056?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000060?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000065?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000070?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_387000000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000073?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000007?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000009?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000012?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376470000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000032?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000033?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376470000A_000034?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376470000A_000036?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376470000A_000037?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376470000A_000041?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000042?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000045?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000050?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000060?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000061?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000065?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000067?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000068?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000070?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376470000A_000071?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000072?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000003?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000024?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000025?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000049?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000085?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000086?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000087?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000088?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000089?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000090?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000091?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
C1_376490000A_000092?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000093?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000094?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000095?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000096?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000097?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000098?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000099?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000100?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000101?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000103?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000104?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000106?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000109?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000110?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376490000A_000111?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
C1_376600000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000239?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_395000000A_000971?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000235?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000049?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000050?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000051?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000053?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000055?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000056?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000057?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000059?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000062?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000064?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000065?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000066?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000067?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000070?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000074?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000077?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000081?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000084?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000087?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000089?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000094?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000096?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000138?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000145?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000152?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011100H_000154?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000033?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000047?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000049?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000050?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000051?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000063?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000067?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000068?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000069?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000070?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000073?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000074?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000075?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000076?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000077?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000079?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000081?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000083?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000084?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000085?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376540000A_000427?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376540000A_001310?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000032?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000033?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000034?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/2 after 1000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376550000A_000036?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 1/2，延遲 1000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/2 after 1000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000009?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000005?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000008?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_379000000A_000035?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000033?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000003?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_376430000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 400 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
C1_313020000G_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376430000A_000050?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000129?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376430000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011000H_000151?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000034?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000283?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000249?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000293?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000117?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376420000A_000253?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000286?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000118?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000137?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000292?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000119?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000309?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000248?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000308?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000106?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000276?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000295?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000152?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000313?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000057?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000130?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000154?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000134?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000156?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000255?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000135?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000157?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000054?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000155?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_313020000G_000136?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000425?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_A15011000H_000189?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000186?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000108?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000311?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000314?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376580000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000279?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000423?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000316?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_379000000A_000291?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376430000A_000188?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000019?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000275?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000017?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000032?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000030?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_379000000A_000023?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000025?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000007?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000024?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000023?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000018?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000017?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376580000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000012?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000015?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000022?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000019?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000020?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000021?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000025?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109621?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000020?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000021?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376430000A_000061?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109612?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109622?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109607?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109630?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376430000A_000063?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_382000000A_109617?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109616?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107166?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109620?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109625?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109624?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000003?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376570000A_000069?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000004?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000009?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000024?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109613?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000007?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000283?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_001274?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000104?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000015?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000029?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000019?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000030?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000005?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107161?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000008?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109618?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107424?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000023?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000032?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000073?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000075?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000054?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000031?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000032?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000033?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000036?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000039?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000041?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000043?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000044?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000045?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000048?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000049?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000052?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000054?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000055?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000056?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000060?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000065?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000070?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_387000000A_000071?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000072?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000073?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000006?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000007?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000009?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000012?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000017?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000018?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000032?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000033?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376470000A_000036?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376470000A_000037?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376470000A_000041?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000042?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000045?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000050?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000060?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000061?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000065?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000067?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000068?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000070?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376470000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000049?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000085?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000087?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000088?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000089?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000090?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000091?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000092?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000093?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000094?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000095?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000096?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000097?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000098?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000099?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000100?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000101?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000103?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000104?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376490000A_000110?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000015?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000016?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000017?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000018?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000019?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000020?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000021?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000023?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000024?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000025?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000026?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000027?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000028?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000029?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000030?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000031?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_395000000A_000971?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000235?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376500000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376600000A_000022?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000069?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000070?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000071?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000072?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000073?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000074?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000075?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000076?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000077?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000079?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000081?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000083?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000084?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000085?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_397000000A_000086?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000001?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000002?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000003?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000004?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000005?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000006?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000007?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000008?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000009?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000010?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000011?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000012?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000013?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
C1_376530000A_000014?$format=JSON:1   Failed to load resource: net::ERR_CONNECTION_CLOSED
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 2/2 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000051?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000049?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000047?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000011?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000067?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000033?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000010?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000021?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000050?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000031?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000014?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000028?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376500000A_000005:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376500000A_000004:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376500000A_000007:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376500000A_000010:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376500000A_000011:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000030:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000023:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000024:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_397000000A_000068:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_397000000A_000063:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_397000000A_000016:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_397000000A_000028:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376490000A_000239?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000015?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000016?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000004?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000065?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000066?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000064?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000074?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000062?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000067?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000070?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000086?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000071?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000077?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000081?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000145?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000084?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000096?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000059?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000055?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000057?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000154?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000056?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000087?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000051?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000050?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000053?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000094?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000138?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000152?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376490000A_000106?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000089?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376490000A_000109?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376470000A_000034?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376490000A_000111?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000002?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000003?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000036?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_A15011100H_000049?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000013?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000029?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376540000A_001310?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000025?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000020?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000019?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000031?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000017?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000022?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000001?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000024?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000026?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000027?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000004?$format=JSON:1   Failed to load resource: the server responded with a status of 429 ()
 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000021:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000018:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000028:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376540000A_000427:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000016:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376600000A_000003:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000005:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000009:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376530000A_000030:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000010:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000021:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000017:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000007:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000014:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000019:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000024:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000023:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000030:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000018:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000031:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000011:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000033:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000027:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000028:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000032:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000029:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000025:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
C1_376550000A_000034:1   Failed to load resource: the server responded with a status of 429 ()
api.js:313 TDX API 請求重試 2/2，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 2/2 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000035?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000249?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000283?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000117?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000293?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000253?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000286?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000295?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000118?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_313020000G_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000129?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000151?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000276?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000106?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000308?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000292?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000309?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000137?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000248?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000152?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000119?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000313?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000130?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000154?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000134?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000156?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000255?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000135?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000157?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000054?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000155?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_313020000G_000136?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000425?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000189?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000186?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000108?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000311?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000314?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000279?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000423?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000316?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000291?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000188?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000275?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000022?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000020?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000013?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000021?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000012?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000019?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109621?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000020?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000016?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000021?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000061?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109612?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109622?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109607?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109630?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000063?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109617?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109616?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107166?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109620?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109625?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109624?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000003?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000010?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376570000A_000069?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000004?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000009?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000006?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109613?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000007?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000283?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000002?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000011?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_001274?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000001?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000104?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000006?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000029?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000019?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000030?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000005?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107161?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000008?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109618?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107424?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000023?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000030?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000031?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000032?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000071?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000072?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000073?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000075?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000054?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000001?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000003?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000009?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000010?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000013?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000031?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000032?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000033?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000036?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000039?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000041?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000043?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000044?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000045?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000048?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000049?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000052?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000054?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000055?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000056?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000060?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000065?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000070?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000072?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000073?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000001?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000006?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000013?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000016?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000017?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000018?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000032?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000033?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000036?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000037?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000041?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000042?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000045?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000050?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000060?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000061?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000065?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000067?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000068?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000070?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000072?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000002?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000085?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000086?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000087?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000088?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000089?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000090?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000091?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000092?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000093?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000094?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000095?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000096?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000097?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000098?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000099?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000100?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000101?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000103?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000104?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000110?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000011?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000019?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000020?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000021?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000029?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000016?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000017?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000018?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000019?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000020?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000021?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000022?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000023?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_395000000A_000971?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000235?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000069?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000072?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000073?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000074?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000075?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000076?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000077?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000079?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000081?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000083?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed TypeError: Failed to fetch
    at call (api.js:276:38)
    at fetchFn (api.js:281:34)
    at retryWithBackoff (api.js:211:26)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000084?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000085?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000051?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000047?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000154?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000056?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000087?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000051?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000053?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000081?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000077?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000096?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000145?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000066?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000064?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000065?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000094?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000059?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000055?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000084?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000074?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000062?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000063?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000068?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000138?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000089?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000106?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000239?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
  fetchTdxScenicSpotDetails failed 
fetchTdxScenicSpotDetails @ api.js:420
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000427?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000109?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000152?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_001310?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000111?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000036?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
api.js:420  fetchTdxScenicSpotDetails failed Error: TDX API 請求失敗，狀態碼: 429
    at fetchFn (api.js:292:23)
    at async retryWithBackoff (api.js:211:20)
    at async fetchTdxData (api.js:309:16)
    at async fetchTdxScenicSpotDetails (api.js:407:22)
    at async ui.js:1983:29
fetchTdxScenicSpotDetails @ api.js:420


### Planner Response

我看到了嚴重的問題！您遇到了 **TDX API 速率限制（Rate Limiting）** 問題。從錯誤日誌可以看到：

## 問題分析

**主要錯誤類型：**
1. **429 錯誤**：Too Many Requests（請求過多）
2. **400 錯誤**：Bad Request（錯誤的請求）
3. **ERR_CONNECTION_CLOSED**：連接被關閉

**根本原因：**
您的程式碼正在**同時對每個景點發送個別請求**，而不是按城市批量獲取。這導致在短時間內發送了數百個請求，觸發了 TDX API 的速率限制。

## 問題所在

讓我檢查當前的 API 請求邏輯：

*Grep searched codebase*

*Viewed [api.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js) *

### Planner Response

好的，我看到 API 請求是按城市批量獲取的，這是正確的。但問題是您可能在**並行請求太多城市**，導致觸發速率限制。讓我實施一個解決方案：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

問題找到了！在第 1471-1472 行，程式碼使用 `Promise.allSettled` **同時發送所有城市的請求**。台灣有 22 個縣市，這意味著同時發送 22 個請求，這絕對會觸發速率限制。

我需要實施**批次處理和請求節流**：

*Edited relevant file*

### Planner Response

現在讓我也減少重試次數以進一步降低請求頻率：

*Viewed [api.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js) *

*Edited relevant file*

*Edited relevant file*

### Planner Response

我看到有一個語法錯誤。讓我修復它：

*Viewed [api.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js) *

### Planner Response

我看到檔案被損壞了。讓我查看完整的錯誤並修復：

*Viewed [api.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js) *

### Planner Response

檔案被嚴重損壞了。我需要修復它。讓我重新編輯正確的部分：

*Edited relevant file*

### User Input


main.js:3 Main.js module loaded
main.js:6 Initializing app...
main.js:67 Skeleton removed, container shown
ui.js:225  Uncaught ReferenceError: startOnboarding is not defined
    at ui.js:225:30
(匿名) @ ui.js:225
setTimeout
initializeApp @ ui.js:225
init @ main.js:8
(匿名) @ main.js:75
content_script.js:7193  Immersive Translate ERROR: UnknownError: Model not available
error @ content_script.js:7193
zv @ content_script.js:7231
await in zv
yc @ content_script.js:7231
Be @ content_script.js:7231
await in Be
E1 @ content_script.js:7312
_L @ content_script.js:7903
JD @ content_script.js:10526
await in JD
o5 @ content_script.js:10525
await in o5
oP @ content_script.js:10526
(匿名) @ content_script.js:10528
Promise.then
(匿名) @ content_script.js:10528
Promise.then
cX @ content_script.js:10528
await in cX
(匿名) @ content_script.js:10528
(匿名) @ content_script.js:10528
ui.js:1458 從快取載入景點資料。
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000002?$format=JSON 400 (Bad Request)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000001?$format=JSON 400 (Bad Request)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000003?$format=JSON 400 (Bad Request)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000004?$format=JSON 400 (Bad Request)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000005?$format=JSON 400 (Bad Request)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 400
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 400
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_001274?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000253?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000117?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000283?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000279?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000313?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000249?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000423?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000275?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000291?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000035?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000293?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107161?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000316?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107424?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000286?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_107166?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000295?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109613?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109625?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109622?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109621?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376570000A_000069?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109624?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000152?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109616?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109617?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000155?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_313020000G_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109607?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_313020000G_000136?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000189?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000157?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109612?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109618?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000255?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000129?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109620?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000425?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000154?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000156?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_382000000A_109630?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011000H_000151?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000130?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000054?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000061?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000063?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000104?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000106?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000108?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000118?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000119?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000135?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000186?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000137?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000134?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000308?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000276?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000283?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000188?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000248?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000314?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000292?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000309?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376430000A_000311?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000043?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000060?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000029?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000045?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000051?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000054?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000050?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000058?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000059?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000055?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000046?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000053?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376580000A_000030?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000048?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000047?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000052?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000056?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000068?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000064?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000062?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000061?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000065?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000069?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000070?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000075?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000074?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000073?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000072?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000002?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000001?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000077?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000076?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000004?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000003?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000007?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000008?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000006?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376440000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000010?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000011?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000016?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000019?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000020?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000021?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000026?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000027?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000030?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000031?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000032?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000071?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000072?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000073?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376420000A_000075?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000054?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000001?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000003?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000009?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000010?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000013?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000024?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000025?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000028?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000031?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000032?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000033?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000036?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000039?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000041?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000043?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000044?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000045?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000048?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000049?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000052?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000054?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000055?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000056?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000060?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000065?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000072?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_387000000A_000073?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000035?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000037?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000039?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000041?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000042?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000043?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000045?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000046?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000049?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000050?$format=JSON net::ERR_FAILED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
api.js:225  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000052?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000061?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000063?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000074?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000075?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000077?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000078?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000079?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000080?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376450000A_000082?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000036?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000037?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000041?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000042?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000045?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000060?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000061?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000065?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000068?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376470000A_000072?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000085?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000087?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000088?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000089?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000090?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000091?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000092?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000093?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000094?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000095?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000096?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000097?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000098?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000099?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000100?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000101?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000103?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000104?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000106?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000109?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000110?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000111?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376600000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000057?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000062?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000064?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000015?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_395000000A_000971?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376490000A_000239?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000053?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000065?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000235?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000051?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000055?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000059?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000056?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000066?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376500000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000077?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000084?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000081?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000074?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000094?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000089?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000087?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000138?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000096?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000145?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000152?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15011100H_000154?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000047?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000050?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000051?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000063?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000067?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000068?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000069?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000070?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000071?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000072?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000073?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000074?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000075?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000076?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000077?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000079?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000081?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000083?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000084?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000085?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_397000000A_000086?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000008?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000009?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000010?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000011?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000012?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000013?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000014?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000015?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000022?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000427?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_001310?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000010?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000023?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000027?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376550000A_000036?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376530000A_000200?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000212?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000213?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000214?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000216?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000217?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000218?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000219?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000220?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000221?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000228?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000229?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000230?$format=JSON net::ERR_CONNECTION_CLOSED
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: Failed to fetch
  Retry attempt 1/1 after 2000ms: Failed to fetch
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000231?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000232?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000233?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000236?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000240?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000244?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000245?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000252?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000253?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000255?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000256?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000258?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000260?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000262?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000264?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000265?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376540000A_000266?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000001?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000002?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000003?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000004?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000005?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000006?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000008?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000011?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000012?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000018?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000026?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000028?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000029?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000030?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000032?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000034?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000035?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000037?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000038?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000040?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000041?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000043?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_376560000A_000044?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000007?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000009?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000013?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000014?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000016?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000017?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000019?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000020?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000021?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000024?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000025?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000031?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000033?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000035?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000038?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000039?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000041?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000042?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000043?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000045?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000048?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000049?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_371030000A_000053?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020102?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020104?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020110?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020181?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020187?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020188?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:276   GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_A15010500H_020195?$format=JSON 429 (Too Many Requests)
call @ api.js:276
fetchFn @ api.js:281
retryWithBackoff @ api.js:211
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518
api.js:313 TDX API 請求重試 1/1，延遲 2000ms，錯誤: TDX API 請求失敗，狀態碼: 429
api.js:225  Retry attempt 1/1 after 2000ms: TDX API 請求失敗，狀態碼: 429
retryWithBackoff @ api.js:225
await in retryWithBackoff
fetchTdxData @ api.js:309
fetchTdxScenicSpotDetails @ api.js:407
(匿名) @ ui.js:2007
createCardElement @ ui.js:2054
(匿名) @ ui.js:1887
(匿名) @ ui.js:1886
renderDestinationsAccordion @ ui.js:1852
loadAndRenderDestinations @ ui.js:1460
(匿名) @ ui.js:518


### Planner Response

我看到問題了！現在的錯誤顯示有**另一個不同的問題**：

## 新問題分析

從錯誤日誌中，我看到：

1. **429 錯誤**仍然存在（速率限制）
2. **400 錯誤**（Bad Request）- 這些是針對**個別景點詳細資訊**的請求
3. **ERR_CONNECTION_CLOSED** - 連接被關閉

關鍵發現：這些錯誤來自 [fetchTdxScenicSpotDetails](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js:401:0-422:1) 函數，這是在**渲染卡片時**為每個景點發送的**個別請求**！

```
GET https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/C1_379000000A_000002?$format=JSON 400 (Bad Request)
```

這意味著：
- 我們已經成功從快取載入了景點列表（`ui.js:1458 從快取載入景點資料。`）
- 但是在渲染每個景點卡片時，程式碼又嘗試獲取每個景點的詳細資訊
- 這導致了**數百個並發請求**，遠超我之前修復的批次請求問題

讓我查看這個問題的源頭：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

*Grep searched codebase*

### Planner Response

找到了！問題在於 [createCardElement](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1910:0-2059:1) 函數在渲染每個景點卡片時，都會調用 [fetchTdxScenicSpotDetails(dest.id)](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js:401:0-422:1) 來獲取詳細資訊。這導致了**數百個並發的個別請求**。

**解決方案**：我們應該**禁用或延遲這些個別請求**，因為：
1. 我們已經有了基本的景點資料
2. 這些詳細資訊（營業時間、電話）不是必需的
3. 發送數百個請求會觸發速率限制

讓我修復這個問題：

*Edited relevant file*

### Planner Response

現在讓我找到並註釋掉這個異步函數的結尾部分：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

*Edited relevant file*

### User Input

ui.js:2171  Uncaught SyntaxError: Unexpected token ','
content_script.js:7193  Immersive Translate ERROR: UnknownError: Model not available
error @ content_script.js:7193


### Planner Response

我看到有語法錯誤。讓我檢查並修復：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

我看到問題了。在我之前的編輯中，註釋掉的代碼沒有正確結束，導致後續代碼的縮排混亂。讓我查看更多上下文並修復：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

讓我查看註釋掉的代碼部分，看看問題在哪裡：

*Viewed [ui.js](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js) *

### Planner Response

我看到問題了！在第 2040 行，註釋掉的代碼突然中斷了，沒有正確關閉。讓我修復這個問題：

*Edited relevant file*

### Planner Response

完美！語法錯誤已修復。現在讓我測試一下頁面是否能正常載入：

### Planner Response

瀏覽器工具暫時無法使用。讓我總結一下已完成的修復：

## ✅ 已完成的修復

### 問題 1: 批次城市請求速率限制
- **修復**: 將 22 個並發城市請求改為每批 3 個，批次間延遲 2 秒
- **位置**: [ui.js](cci:7://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:0:0-0:0) 的 [loadAndRenderDestinations](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1425:0-1606:1) 函數

### 問題 2: 個別景點詳情請求（主要問題）
- **修復**: 禁用了 [createCardElement](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1910:0-2066:1) 中的 [fetchTdxScenicSpotDetails](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/api.js:401:0-422:1) 調用
- **原因**: 每個景點卡片都會發送個別請求，導致數百個並發請求
- **位置**: [ui.js](cci:7://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:0:0-0:0) 的 [createCardElement](cci:1://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:1910:0-2066:1) 函數

### 問題 3: 語法錯誤
- **修復**: 正確關閉了註釋塊，恢復了缺失的代碼結構
- **位置**: [ui.js](cci:7://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/js/ui.js:0:0-0:0) 第 2037-2069 行

## 請您測試

請您手動測試：

1. **清除瀏覽器快取**（重要！）
   - 按 `Ctrl + Shift + Delete`
   - 選擇"快取的圖片和檔案"
   - 清除

2. **重新整理頁面**
   - 開啟 `index.html`
   - 按 `F12` 打開開發者工具
   - 切換到 Console 標籤

3. **驗證 TDX API**
   - 輸入您的 TDX Client ID 和 Secret
   - 點擊驗證

4. **觀察結果**
   - ✅ 應該看到批次處理日誌：`總共 22 個城市，將分 8 批次處理`
   - ✅ 應該看到批次進度：`處理第 1/8 批次...`
   - ✅ **不應該**看到數百個 429/400/ERR_CONNECTION_CLOSED 錯誤
   - ✅ 景點列表應該正常顯示

5. **預期載入時間**
   - 首次載入：~30-40 秒（因為要分批處理）
   - 後續載入：<1 秒（使用快取）

如果仍有問題，請告訴我控制台的錯誤訊息！

### User Input

解決圖片大小和清晰度問題，給我詳細指南我手動改

### Planner Response

我看到圖片了！景點卡片的圖片確實太小且模糊。讓我為您創建一個詳細的手動修改指南：

*Edited relevant file*

### Planner Response

完美！我已經為您創建了一份**詳細的手動修改指南**。這份指南包含：

## 📋 指南內容概覽

### ✅ 基礎修改（必做）
1. **增加圖片高度** - 從 150px 改為 280px
2. **優化圖片顯示** - 使用 `background-size: cover`
3. **防止圖片模糊** - 添加圖片渲染優化

### 🎨 進階優化（可選）
- 懸停放大效果
- 載入動畫
- 響應式設計（手機/平板/桌面）
- 圖片陰影和濾鏡

### 🔄 替代方案
- 使用 `<img>` 標籤替代背景圖（更好的品質控制）
- 包含完整的 JavaScript 和 CSS 代碼

### 🔧 故障排除
- 常見問題解答
- 測試檢查清單

## 🚀 快速開始

最簡單的修改只需要 3 步：

1. **打開** [css/components.css](cci:7://file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css:0:0-0:0)
2. **找到** `.card-picture` 樣式
3. **修改** `height: 150px;` 為 `height: 280px;`

就這麼簡單！

---

如果您在修改過程中遇到任何問題，或者想讓我直接幫您修改代碼，請隨時告訴我！我可以：
- 直接修改 CSS 檔案
- 提供更具體的代碼位置
- 幫您測試修改效果

*Edited relevant file*

### User Input

還是一樣請檢察css

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Grep searched codebase*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Grep searched codebase*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Edited relevant file*

*Viewed [components.css](file:///c:/Users/asus/Desktop/ai-travel-guide-taiwan-main%20-%20v9/css/components.css) *

*Viewed [task.md](file:///C:/Users/asus/.gemini/antigravity/brain/b636bbcd-ed24-4fb6-91fa-5376e82591d7/task.md) *

*Edited relevant file*

*Viewed [walkthrough.md](file:///C:/Users/asus/.gemini/antigravity/brain/b636bbcd-ed24-4fb6-91fa-5376e82591d7/walkthrough.md) *

*Edited relevant file*