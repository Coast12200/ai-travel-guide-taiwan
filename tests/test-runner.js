/**
 * test-runner.js
 * 自動化測試運行器 - 在瀏覽器控制台中運行測試
 * 
 * 使用方法:
 * 1. 在瀏覽器中打開應用
 * 2. 打開開發者工具控制台
 * 3. 運行: await runAllTests()
 */

import { regressionTests, getTestStats, getTestsByCategory } from './regression-tests.js';

/**
 * 測試運行器類別
 */
class TestRunner {
    constructor() {
        this.results = [];
        this.startTime = null;
        this.endTime = null;
    }

    /**
     * 運行單個測試
     * @param {Object} test - 測試對象
     * @returns {Object} 測試結果
     */
    async runTest(test) {
        console.log(`\n🧪 Running: ${test.name} (${test.category})`);
        console.log(`   Steps:`);
        test.steps.forEach(step => console.log(`   ${step}`));

        const startTime = Date.now();
        let result = {
            name: test.name,
            category: test.category,
            status: 'PENDING',
            duration: 0,
            error: null
        };

        try {
            await test.testFn();
            result.status = 'PASS';
            result.duration = Date.now() - startTime;
            console.log(`✅ PASS: ${test.name} (${result.duration}ms)`);
        } catch (error) {
            result.status = 'FAIL';
            result.duration = Date.now() - startTime;
            result.error = error.message;
            console.error(`❌ FAIL: ${test.name}`, error);
        }

        this.results.push(result);
        return result;
    }

    /**
     * 運行所有測試
     * @param {Object} options - 選項 { category: string, stopOnFail: boolean }
     * @returns {Object} 測試報告
     */
    async runAll(options = {}) {
        this.results = [];
        this.startTime = Date.now();

        console.log('🚀 Starting Test Suite...\n');
        console.log('═'.repeat(60));

        // 過濾測試
        let testsToRun = regressionTests;
        if (options.category) {
            testsToRun = getTestsByCategory(options.category);
            console.log(`Running tests for category: ${options.category}`);
        }

        // 運行測試
        for (const test of testsToRun) {
            const result = await this.runTest(test);

            if (options.stopOnFail && result.status === 'FAIL') {
                console.log('\n⚠️  Stopping test suite due to failure');
                break;
            }

            // 短暫延遲以避免過快執行
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        this.endTime = Date.now();
        return this.generateReport();
    }

    /**
     * 生成測試報告
     * @returns {Object} 測試報告
     */
    generateReport() {
        const passed = this.results.filter(r => r.status === 'PASS');
        const failed = this.results.filter(r => r.status === 'FAIL');
        const totalDuration = this.endTime - this.startTime;

        const report = {
            summary: {
                total: this.results.length,
                passed: passed.length,
                failed: failed.length,
                passRate: ((passed.length / this.results.length) * 100).toFixed(2),
                duration: totalDuration
            },
            results: this.results,
            failures: failed.map(f => ({
                name: f.name,
                category: f.category,
                error: f.error
            }))
        };

        this.printReport(report);
        return report;
    }

    /**
     * 打印測試報告
     * @param {Object} report - 測試報告
     */
    printReport(report) {
        console.log('\n' + '═'.repeat(60));
        console.log('📊 TEST RESULTS');
        console.log('═'.repeat(60));

        console.log(`\n✅ Passed: ${report.summary.passed}`);
        console.log(`❌ Failed: ${report.summary.failed}`);
        console.log(`📈 Total: ${report.summary.total}`);
        console.log(`📊 Pass Rate: ${report.summary.passRate}%`);
        console.log(`⏱️  Duration: ${report.summary.duration}ms`);

        if (report.failures.length > 0) {
            console.log('\n❌ FAILURES:');
            report.failures.forEach((failure, index) => {
                console.log(`\n${index + 1}. ${failure.name} (${failure.category})`);
                console.log(`   Error: ${failure.error}`);
            });
        }

        // 按類別統計
        const byCategory = {};
        this.results.forEach(result => {
            if (!byCategory[result.category]) {
                byCategory[result.category] = { passed: 0, failed: 0 };
            }
            if (result.status === 'PASS') {
                byCategory[result.category].passed++;
            } else {
                byCategory[result.category].failed++;
            }
        });

        console.log('\n📂 BY CATEGORY:');
        Object.entries(byCategory).forEach(([category, stats]) => {
            const total = stats.passed + stats.failed;
            const rate = ((stats.passed / total) * 100).toFixed(0);
            console.log(`   ${category}: ${stats.passed}/${total} (${rate}%)`);
        });

        console.log('\n' + '═'.repeat(60));
    }

    /**
     * 重置測試結果
     */
    reset() {
        this.results = [];
        this.startTime = null;
        this.endTime = null;
    }
}

// 創建全域測試運行器實例
const testRunner = new TestRunner();

/**
 * 便捷函數：運行所有測試
 * @param {Object} options - 選項
 * @returns {Object} 測試報告
 */
export async function runAllTests(options = {}) {
    return await testRunner.runAll(options);
}

/**
 * 便捷函數：運行特定類別的測試
 * @param {string} category - 測試類別
 * @returns {Object} 測試報告
 */
export async function runTestsByCategory(category) {
    return await testRunner.runAll({ category });
}

/**
 * 便捷函數：獲取測試統計
 * @returns {Object} 測試統計
 */
export function getStats() {
    return getTestStats();
}

// 在開發環境中暴露到 window 以便在控制台中使用
if (typeof window !== 'undefined') {
    window.runAllTests = runAllTests;
    window.runTestsByCategory = runTestsByCategory;
    window.getTestStats = getStats;
    window.__testRunner = testRunner;

    console.log('✨ Test Runner loaded!');
    console.log('📝 Available commands:');
    console.log('   - await runAllTests()');
    console.log('   - await runTestsByCategory("UI")');
    console.log('   - getTestStats()');
}

export default testRunner;
