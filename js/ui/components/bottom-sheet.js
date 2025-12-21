/**
 * Bottom Sheet Manager
 * 負責管理底部彈窗的開啟、關閉和動畫
 * 
 * 📍 從 ui.js 遷移的函數：
 * - openDownloadSheet()
 * - closeDownloadSheet()
 * - 下載底部彈窗相關事件處理
 */

/**
 * Bottom Sheet Manager 類
 */
class BottomSheetManager {
    constructor() {
        this.activeSheet = null;
        this.init();
    }

    /**
     * 初始化
     */
    init() {
        // ESC 鍵關閉
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeSheet) {
                this.close(this.activeSheet.sheetId);
            }
        });
    }

    /**
     * 註冊底部彈窗
     * @param {string} sheetId - 彈窗 ID
     * @param {string} backdropId - 背景遮罩 ID
     * @param {string} closeButtonId - 關閉按鈕 ID (可選)
     */
    register(sheetId, backdropId, closeButtonId = null) {
        const sheet = document.getElementById(sheetId);
        const backdrop = document.getElementById(backdropId);

        if (!sheet || !backdrop) {
            console.warn(`Bottom sheet elements not found: ${sheetId}, ${backdropId}`);
            return;
        }

        // 背景點擊關閉
        backdrop.addEventListener('click', () => {
            this.close(sheetId);
        });

        // 關閉按鈕
        if (closeButtonId) {
            const closeBtn = document.getElementById(closeButtonId);
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.close(sheetId);
                });
            }
        }

        return { sheet, backdrop };
    }

    /**
     * 開啟底部彈窗
     * @param {string} sheetId - 彈窗 ID
     */
    open(sheetId) {
        const sheet = document.getElementById(sheetId);
        const backdrop = this.getBackdrop(sheetId);

        if (!sheet || !backdrop) {
            console.warn(`Cannot open sheet: ${sheetId}`);
            return;
        }

        // 顯示背景
        backdrop.style.display = 'block';

        // 強制重排以確保過渡效果
        backdrop.offsetHeight;

        // 添加活動類
        backdrop.classList.add('active');
        sheet.classList.add('active');

        // 鎖定背景滾動
        document.body.style.overflow = 'hidden';

        this.activeSheet = { sheetId, sheet, backdrop };
    }

    /**
     * 關閉底部彈窗
     * @param {string} sheetId - 彈窗 ID
     */
    close(sheetId) {
        const sheet = document.getElementById(sheetId);
        const backdrop = this.getBackdrop(sheetId);

        if (!sheet || !backdrop) return;

        // 移除活動類
        backdrop.classList.remove('active');
        sheet.classList.remove('active');

        // 恢復背景滾動
        document.body.style.overflow = '';

        // 動畫結束後隱藏背景
        setTimeout(() => {
            backdrop.style.display = 'none';
        }, 300);

        this.activeSheet = null;
    }

    /**
     * 獲取對應的背景遮罩
     */
    getBackdrop(sheetId) {
        // 約定：背景 ID 為 sheetId 去掉 'Sheet' 加上 'Backdrop'
        // 例如：downloadBottomSheet -> downloadBackdrop
        const backdropId = sheetId.replace('Sheet', '').replace('Bottom', '') + 'Backdrop';
        return document.getElementById(backdropId) || document.getElementById('downloadBackdrop');
    }

    /**
     * 切換底部彈窗
     */
    toggle(sheetId) {
        if (this.activeSheet && this.activeSheet.sheetId === sheetId) {
            this.close(sheetId);
        } else {
            this.open(sheetId);
        }
    }
}

// 創建單例實例
const bottomSheetManager = new BottomSheetManager();

// 導出便捷函數（向後兼容）
export function openDownloadSheet() {
    bottomSheetManager.open('downloadBottomSheet');
}

export function closeDownloadSheet() {
    bottomSheetManager.close('downloadBottomSheet');
}

export function registerBottomSheet(sheetId, backdropId, closeButtonId) {
    return bottomSheetManager.register(sheetId, backdropId, closeButtonId);
}

// 導出類和實例
export { BottomSheetManager, bottomSheetManager };
export default bottomSheetManager;
