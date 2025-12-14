/**
 * performance-test.js
 * 性能測試腳本 - 測量 Phase 2 模組化改進效果
 */

/**
 * 性能測試套件
 */
class PerformanceTestSuite {
    constructor() {
        this.results = [];
        this.startTime = null;
    }

    /**
     * 開始測試
     */
    start(testName) {
        this.startTime = performance.now();
        console.log(`🏁 開始測試: ${testName}`);
    }

    /**
     * 結束測試
     */
    end(testName) {
        const endTime = performance.now();
        const duration = endTime - this.startTime;

        this.results.push({
            name: testName,
            duration: duration.toFixed(2),
            timestamp: new Date().toISOString()
        });

        console.log(`✅ ${testName} 完成: ${duration.toFixed(2)}ms`);
        return duration;
    }

    /**
     * 獲取結果摘要
     */
    getSummary() {
        const total = this.results.reduce((sum, r) => sum + parseFloat(r.duration), 0);
        const avg = total / this.results.length;

        return {
            totalTests: this.results.length,
            totalTime: total.toFixed(2),
            averageTime: avg.toFixed(2),
            results: this.results
        };
    }

    /**
     * 顯示結果
     */
    displayResults() {
        console.log('\n📊 ===== 性能測試結果 =====\n');

        this.results.forEach((result, index) => {
            console.log(`${index + 1}. ${result.name}: ${result.duration}ms`);
        });

        const summary = this.getSummary();
        console.log(`\n總測試數: ${summary.totalTests}`);
        console.log(`總耗時: ${summary.totalTime}ms`);
        console.log(`平均耗時: ${summary.averageTime}ms`);
        console.log('\n============================\n');

        return summary;
    }
}

/**
 * 測試模組載入性能
 */
export async function testModuleLoadingPerformance() {
    const suite = new PerformanceTestSuite();

    console.log('🚀 開始模組載入性能測試...\n');

    // 測試 1: Event Bus
    suite.start('Event Bus 載入');
    const { eventBus } = await import('./core/event-bus.js');
    suite.end('Event Bus 載入');

    // 測試 2: DI Container
    suite.start('DI Container 載入');
    const { diContainer } = await import('./core/di-container.js');
    suite.end('DI Container 載入');

    // 測試 3: Markdown Utils
    suite.start('Markdown Utils 載入');
    const markdownUtils = await import('./utils/markdown.js');
    suite.end('Markdown Utils 載入');

    // 測試 4: DateTime Utils
    suite.start('DateTime Utils 載入');
    const dateTimeUtils = await import('./utils/date-time.js');
    suite.end('DateTime Utils 載入');

    // 測試 5: Validators
    suite.start('Validators 載入');
    const validators = await import('./utils/validators.js');
    suite.end('Validators 載入');

    // 測試 6: Modal Manager
    suite.start('Modal Manager 載入');
    const { modalManager } = await import('./ui/modal-manager.js');
    suite.end('Modal Manager 載入');

    // 測試 7: AI Generator
    suite.start('AI Generator 載入');
    const { aiGenerator } = await import('./services/ai-generator.js');
    suite.end('AI Generator 載入');

    // 測試 8: Exporter
    suite.start('Exporter 載入');
    const { exporter } = await import('./services/exporter.js');
    suite.end('Exporter 載入');

    // 測試 9: Optimizer
    suite.start('Optimizer 載入');
    const { optimizer } = await import('./services/optimizer.js');
    suite.end('Optimizer 載入');

    // 測試 10: Budget Calculator
    suite.start('Budget Calculator 載入');
    const { budgetCalculator } = await import('./services/budget-calculator.js');
    suite.end('Budget Calculator 載入');

    return suite.displayResults();
}

/**
 * 測試事件系統性能
 */
export async function testEventSystemPerformance() {
    const suite = new PerformanceTestSuite();
    const { eventBus } = await import('./core/event-bus.js');

    console.log('🎧 開始事件系統性能測試...\n');

    // 測試 1: 事件註冊
    suite.start('註冊 100 個事件監聽器');
    for (let i = 0; i < 100; i++) {
        eventBus.on(`test:event${i}`, () => { });
    }
    suite.end('註冊 100 個事件監聽器');

    // 測試 2: 事件觸發
    suite.start('觸發 100 個事件');
    for (let i = 0; i < 100; i++) {
        eventBus.emit(`test:event${i}`, { data: i });
    }
    suite.end('觸發 100 個事件');

    // 測試 3: 事件取消註冊
    suite.start('取消 100 個事件監聽器');
    for (let i = 0; i < 100; i++) {
        eventBus.off(`test:event${i}`);
    }
    suite.end('取消 100 個事件監聽器');

    return suite.displayResults();
}

/**
 * 測試工具函數性能
 */
export async function testUtilityPerformance() {
    const suite = new PerformanceTestSuite();
    const { mdToHtml } = await import('./utils/markdown.js');
    const { formatDate, getRelativeTime } = await import('./utils/date-time.js');
    const { validateApiKey, validateEmail } = await import('./utils/validators.js');

    console.log('🔧 開始工具函數性能測試...\n');

    // 測試 1: Markdown 轉換
    const markdown = '# 標題\n\n這是一段**粗體**文字和*斜體*文字。\n\n- 項目 1\n- 項目 2';
    suite.start('Markdown 轉換 (100 次)');
    for (let i = 0; i < 100; i++) {
        mdToHtml(markdown);
    }
    suite.end('Markdown 轉換 (100 次)');

    // 測試 2: 日期格式化
    const date = new Date();
    suite.start('日期格式化 (100 次)');
    for (let i = 0; i < 100; i++) {
        formatDate(date);
    }
    suite.end('日期格式化 (100 次)');

    // 測試 3: 相對時間計算
    suite.start('相對時間計算 (100 次)');
    for (let i = 0; i < 100; i++) {
        getRelativeTime(date);
    }
    suite.end('相對時間計算 (100 次)');

    // 測試 4: API Key 驗證
    suite.start('API Key 驗證 (100 次)');
    for (let i = 0; i < 100; i++) {
        validateApiKey('test-api-key-1234567890');
    }
    suite.end('API Key 驗證 (100 次)');

    // 測試 5: Email 驗證
    suite.start('Email 驗證 (100 次)');
    for (let i = 0; i < 100; i++) {
        validateEmail('test@example.com');
    }
    suite.end('Email 驗證 (100 次)');

    return suite.displayResults();
}

/**
 * 測試記憶體使用
 */
export function testMemoryUsage() {
    console.log('💾 記憶體使用情況:\n');

    if (performance.memory) {
        const used = (performance.memory.usedJSHeapSize / 1048576).toFixed(2);
        const total = (performance.memory.totalJSHeapSize / 1048576).toFixed(2);
        const limit = (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2);

        console.log(`已使用: ${used} MB`);
        console.log(`總計: ${total} MB`);
        console.log(`限制: ${limit} MB`);
        console.log(`使用率: ${(used / limit * 100).toFixed(2)}%`);

        return {
            used: parseFloat(used),
            total: parseFloat(total),
            limit: parseFloat(limit),
            usagePercent: parseFloat((used / limit * 100).toFixed(2))
        };
    } else {
        console.log('⚠️ 此瀏覽器不支援 performance.memory API');
        return null;
    }
}

/**
 * 完整性能測試
 */
export async function runFullPerformanceTest() {
    console.log('🎯 開始完整性能測試...\n');
    console.log('='.repeat(50));

    const results = {
        moduleLoading: null,
        eventSystem: null,
        utilities: null,
        memory: null,
        timestamp: new Date().toISOString()
    };

    try {
        // 測試 1: 模組載入
        results.moduleLoading = await testModuleLoadingPerformance();
        console.log('\n' + '='.repeat(50) + '\n');

        // 測試 2: 事件系統
        results.eventSystem = await testEventSystemPerformance();
        console.log('\n' + '='.repeat(50) + '\n');

        // 測試 3: 工具函數
        results.utilities = await testUtilityPerformance();
        console.log('\n' + '='.repeat(50) + '\n');

        // 測試 4: 記憶體使用
        results.memory = testMemoryUsage();
        console.log('\n' + '='.repeat(50) + '\n');

        // 總結
        console.log('📈 ===== 總體性能摘要 =====\n');
        console.log(`模組載入總耗時: ${results.moduleLoading.totalTime}ms`);
        console.log(`事件系統總耗時: ${results.eventSystem.totalTime}ms`);
        console.log(`工具函數總耗時: ${results.utilities.totalTime}ms`);
        if (results.memory) {
            console.log(`記憶體使用: ${results.memory.used}MB / ${results.memory.limit}MB (${results.memory.usagePercent}%)`);
        }
        console.log('\n============================\n');

        return results;

    } catch (error) {
        console.error('❌ 性能測試失敗:', error);
        throw error;
    }
}

/**
 * 比較測試（模組化前後）
 */
export function comparePerformance(before, after) {
    console.log('📊 ===== 性能比較 =====\n');

    const improvement = ((before - after) / before * 100).toFixed(2);
    const faster = before > after;

    console.log(`模組化前: ${before}ms`);
    console.log(`模組化後: ${after}ms`);
    console.log(`差異: ${Math.abs(before - after).toFixed(2)}ms`);
    console.log(`${faster ? '提升' : '下降'}: ${Math.abs(improvement)}%`);

    if (faster) {
        console.log(`✅ 性能提升 ${Math.abs(improvement)}%！`);
    } else {
        console.log(`⚠️ 性能下降 ${Math.abs(improvement)}%`);
    }

    console.log('\n======================\n');

    return {
        before,
        after,
        difference: Math.abs(before - after).toFixed(2),
        improvement: parseFloat(improvement),
        faster
    };
}

// 導出測試套件
export { PerformanceTestSuite };

// ==================== 使用說明 ====================

/*
在瀏覽器控制台中運行：

// 完整測試
const perfTest = await import('./js/performance-test.js');
const results = await perfTest.runFullPerformanceTest();

// 單獨測試
await perfTest.testModuleLoadingPerformance();
await perfTest.testEventSystemPerformance();
await perfTest.testUtilityPerformance();
perfTest.testMemoryUsage();

// 比較測試
perfTest.comparePerformance(1000, 800); // 模組化前 vs 後
*/
