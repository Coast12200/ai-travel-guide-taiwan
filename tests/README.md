# 測試環境使用指南

## 概述

本測試環境提供回歸測試功能，用於驗證重構後應用程式的功能正常運作。

## 文件結構

```
tests/
├── regression-tests.js  # 測試定義
├── test-runner.js       # 測試運行器
└── README.md           # 本文件
```

## 使用方法

### 1. 在瀏覽器中運行測試

1. 打開應用程式 (`index.html`)
2. 打開瀏覽器開發者工具 (F12)
3. 切換到 Console 標籤
4. 運行以下命令：

```javascript
// 運行所有測試
await runAllTests()

// 運行特定類別的測試
await runTestsByCategory('UI')
await runTestsByCategory('API')
await runTestsByCategory('AI')

// 獲取測試統計
getTestStats()
```

### 2. 測試類別

- **UI**: 使用者介面相關測試
- **API**: API 調用和驗證測試
- **AI**: AI 內容生成測試
- **Map**: 地圖功能測試
- **Weather**: 天氣資訊測試
- **Export**: 匯出功能測試
- **History**: 版本歷史測試
- **I18n**: 國際化測試
- **Performance**: 性能相關測試

### 3. 測試報告

測試完成後會顯示詳細報告，包括：
- 通過/失敗數量
- 通過率
- 執行時間
- 按類別統計
- 失敗詳情

## 添加新測試

在 `regression-tests.js` 中添加新測試：

```javascript
{
    name: '測試名稱',
    category: '測試類別',
    steps: [
        '1. 步驟一',
        '2. 步驟二',
        '3. 步驟三'
    ],
    expected: '預期結果描述',
    testFn: async () => {
        // 測試邏輯
        const element = document.getElementById('someId');
        if (!element) {
            throw new Error('Element not found');
        }
        return true;
    }
}
```

## 最佳實踐

1. **每次重構前運行測試** - 建立基準
2. **每次重構後運行測試** - 驗證功能正常
3. **記錄測試結果** - 追蹤問題
4. **逐步修復失敗** - 不要一次修復太多

## 注意事項

- 某些測試需要有效的 API Key
- 某些測試需要網路連接
- 測試運行時間可能較長
- 建議在乾淨的瀏覽器環境中測試

## 故障排除

### 測試無法運行
- 確認已在瀏覽器中打開應用
- 確認控制台沒有其他錯誤
- 嘗試重新載入頁面

### 測試失敗
- 檢查失敗原因
- 驗證相關功能是否正常
- 查看控制台錯誤訊息

### 測試超時
- 某些 AI 生成測試可能需要較長時間
- 可以單獨運行該測試
- 檢查網路連接

## 未來改進

- [ ] 添加更多測試案例
- [ ] 支持自動化測試（Playwright/Puppeteer）
- [ ] 添加視覺回歸測試
- [ ] 生成 HTML 測試報告
- [ ] 整合 CI/CD 流程
