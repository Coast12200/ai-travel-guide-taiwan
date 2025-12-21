/**
 * init-modules.js
 * Phase 2 模組初始化（簡化版 + 服務模組）
 * 
 * 此文件用於確保模組被載入並暴露到全域以便測試
 */

// ==================== 導入核心模組 ====================
import { eventBus } from './core/event-bus.js';
import { container } from './core/di-container.js';

// ==================== 導入 UI 組件 ====================
import { modalManager } from './ui/modal-manager.js';
import { accordionManager } from './ui/accordion-manager.js';
import { formHandler } from './ui/form-handler.js';

// ==================== 導入工具函數 ====================
import * as markdownUtils from './utils/markdown.js';
import * as dateTimeUtils from './utils/date-time.js';
import * as validators from './utils/validators.js';

// ==================== 導入服務模組（Phase 2 階段 4）====================
import { AIGenerator, aiGenerator } from './services/ai-generator.js';
import { Exporter, exporter } from './services/exporter.js';
import { Optimizer, optimizer } from './services/optimizer.js';
import { BudgetCalculator, budgetCalculator } from './services/budget-calculator.js';

console.log('✅ Phase 2 modules loaded (ES6 module mode)');
console.log('✅ Service modules loaded (AIGenerator, Exporter, Optimizer, BudgetCalculator)');

// ==================== 暴露到全域以便測試 ====================
// 注意：這僅用於開發和測試，生產環境應使用直接導入

window.__phase2Modules = {
    // 核心
    eventBus,
    container,

    // UI 組件
    modalManager,
    accordionManager,
    formHandler,

    // 工具函數
    markdownUtils,
    dateTimeUtils,
    validators,

    // 服務模組（類別）
    AIGenerator,
    Exporter,
    Optimizer,
    BudgetCalculator,

    // 服務模組（單例實例）
    aiGenerator,
    exporter,
    optimizer,
    budgetCalculator
};

console.log('💡 提示: 所有模組可通過 window.__phase2Modules 訪問');
console.log('💡 服務模組可直接使用，例如:');
console.log('   window.__phase2Modules.aiGenerator.generateItinerary(...)');
console.log('   window.__phase2Modules.exporter.exportToICS()');


// 導出以供其他模組使用
export {
    eventBus,
    container,
    modalManager,
    accordionManager,
    formHandler,
    markdownUtils,
    dateTimeUtils,
    validators
};
