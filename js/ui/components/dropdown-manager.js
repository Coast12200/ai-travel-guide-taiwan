/**
 * Dropdown Manager
 * 負責管理所有下拉選單的開啟、關閉和互動
 * 
 * 📍 從 ui.js 遷移的函數：
 * - setupHeaderDropdown()
 * - 下拉選單相關事件處理
 */

/**
 * Dropdown Manager 類
 */
class DropdownManager {
    constructor() {
        this.activeDropdown = null;
        this.init();
    }

    /**
     * 初始化下拉選單管理器
     */
    init() {
        // 點擊外部關閉所有下拉選單
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                this.closeAll();
            }
        });

        // ESC 鍵關閉
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAll();
            }
        });
    }

    /**
     * 註冊下拉選單
     * @param {string} buttonId - 觸發按鈕 ID
     * @param {string} menuId - 選單 ID
     * @param {Object} options - 配置選項
     */
    register(buttonId, menuId, options = {}) {
        const button = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);

        if (!button || !menu) {
            console.warn(`Dropdown elements not found: ${buttonId}, ${menuId}`);
            return;
        }

        const dropdown = button.closest('.dropdown');
        if (!dropdown) {
            console.warn(`Button ${buttonId} is not inside a .dropdown container`);
            return;
        }

        // 點擊按鈕切換
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggle(dropdown, menu);
        });

        // 選單項點擊後關閉（可選）
        if (options.closeOnItemClick !== false) {
            menu.addEventListener('click', (e) => {
                if (e.target.closest('.dropdown-item')) {
                    this.close(dropdown, menu);
                }
            });
        }
    }

    /**
     * 切換下拉選單
     */
    toggle(dropdown, menu) {
        const isActive = dropdown.classList.contains('active');

        // 先關閉所有其他下拉選單
        this.closeAll();

        if (!isActive) {
            this.open(dropdown, menu);
        }
    }

    /**
     * 開啟下拉選單
     */
    open(dropdown, menu) {
        dropdown.classList.add('active');
        menu.classList.remove('hidden');

        // 觸發動畫
        requestAnimationFrame(() => {
            menu.classList.add('show');
        });

        this.activeDropdown = { dropdown, menu };
    }

    /**
     * 關閉下拉選單
     */
    close(dropdown, menu) {
        dropdown.classList.remove('active');
        menu.classList.remove('show');

        setTimeout(() => {
            menu.classList.add('hidden');
        }, 200);

        if (this.activeDropdown && this.activeDropdown.dropdown === dropdown) {
            this.activeDropdown = null;
        }
    }

    /**
     * 關閉所有下拉選單
     */
    closeAll() {
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            m.classList.remove('show');
            m.classList.add('hidden');
        });
        this.activeDropdown = null;
    }
}

// 創建單例實例
const dropdownManager = new DropdownManager();

// 導出便捷函數
export function setupHeaderDropdown() {
    dropdownManager.register('advancedSettingsBtn', 'advancedSettingsMenu');
}

export function registerDropdown(buttonId, menuId, options) {
    dropdownManager.register(buttonId, menuId, options);
}

// 導出類和實例
export { DropdownManager, dropdownManager };
export default dropdownManager;
