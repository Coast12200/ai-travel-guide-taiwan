/**
 * version-history-ui.js
 * 行程歷史版本 UI 組件
 */

import { appState } from './state.js';
import {
    getItineraryHistory,
    loadItineraryVersion,
    deleteItineraryVersion,
    formatTime,
    getTypeLabel
} from './version-history.js';

/**
 * 初始化歷史版本 UI
 */
export function initVersionHistoryUI() {
    // 創建歷史版本按鈕
    createHistoryButton();

    // 創建 Modal（延遲創建）
    // Modal 會在第一次點擊按鈕時創建
}

/**
 * 創建歷史版本按鈕
 */
function createHistoryButton() {
    // 找到行程顯示區域
    const suggestionWrapper = document.getElementById('suggestionContentWrapper');
    if (!suggestionWrapper) {
        console.warn('suggestionContentWrapper not found');
        return;
    }

    // 檢查按鈕是否已存在
    if (document.getElementById('showHistoryBtn')) {
        return;
    }

    // 創建按鈕容器
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'history-button-container';
    buttonContainer.innerHTML = `
        <button id="showHistoryBtn" class="btn-history">
            <span class="icon">🕐</span>
            <span class="text" data-i18n="version_history_btn">歷史版本</span>
            <span class="badge" style="display: none;">0</span>
        </button>
    `;

    // 插入到行程區域頂部
    suggestionWrapper.insertBefore(buttonContainer, suggestionWrapper.firstChild);

    // 添加事件監聽
    const btn = document.getElementById('showHistoryBtn');
    btn.addEventListener('click', showHistoryModal);

    // 更新徽章
    updateHistoryBadge();
}

/**
 * 顯示歷史版本 Modal
 */
export function showHistoryModal() {
    let modal = document.getElementById('historyModal');

    if (!modal) {
        modal = createHistoryModal();
        document.body.appendChild(modal);
    }

    renderVersionList();
    modal.classList.add('show');
}

/**
 * 創建歷史版本 Modal
 */
function createHistoryModal() {
    const modal = document.createElement('div');
    modal.id = 'historyModal';
    modal.className = 'modal history-modal';
    modal.innerHTML = `
        <div class="modal-content history-content">
            <div class="modal-header">
                <h3 data-i18n="version_history_title">🕐 行程歷史版本</h3>
                <button class="modal-close" data-close-history>&times;</button>
            </div>
            <div class="modal-body">
                <div class="history-layout">
                    <div class="version-list" id="versionList">
                        <!-- 版本列表 -->
                    </div>
                    <div class="version-preview" id="versionPreview">
                        <div class="preview-placeholder">
                            <div class="placeholder-icon">👈</div>
                            <p data-i18n="version_preview_placeholder">選擇一個版本查看詳情</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 事件監聽
    modal.querySelector('[data-close-history]').addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // 點擊背景關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    return modal;
}

/**
 * 渲染版本列表
 */
function renderVersionList() {
    const container = document.getElementById('versionList');
    if (!container) return;

    const history = getItineraryHistory();

    if (history.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📝</div>
                <p data-i18n="version_history_empty">尚無歷史版本</p>
                <p class="empty-hint" data-i18n="version_history_empty_hint">生成行程後會自動保存版本</p>
            </div>
        `;
        return;
    }

    container.innerHTML = history.map((version, index) => `
        <div class="version-card ${index === 0 ? 'latest' : ''}" data-version-id="${version.id}">
            <div class="version-header">
                <span class="version-type ${version.type}">${getTypeLabel(version.type)}</span>
                <span class="version-time">${formatTime(version.timestamp)}</span>
            </div>
            <div class="version-title">${escapeHtml(version.title)}</div>
            <div class="version-summary">${escapeHtml(version.summary)}</div>
            <div class="version-meta">
                <span>📍 ${version.thumbnail.totalDestinations}<span data-i18n="version_meta_spots"> 個景點</span></span>
                <span>📅 ${version.thumbnail.days}<span data-i18n="version_meta_days"> 天</span></span>
                ${version.thumbnail.budget ? `<span>💰 ${version.thumbnail.budget}<span data-i18n="version_meta_budget"> 元</span></span>` : ''}
            </div>
            <div class="version-actions">
                <button class="btn-sm btn-view" data-action="view" data-id="${version.id}">
                    👁️ <span data-i18n="version_action_view">查看</span>
                </button>
                <button class="btn-sm btn-restore" data-action="restore" data-id="${version.id}">
                    ↩️ <span data-i18n="version_action_restore">恢復</span>
                </button>
                <button class="btn-sm btn-delete" data-action="delete" data-id="${version.id}">
                    🗑️ <span data-i18n="version_action_delete">刪除</span>
                </button>
            </div>
        </div>
    `).join('');

    // 添加事件監聽
    attachVersionActions();
}

/**
 * 附加版本操作事件
 */
function attachVersionActions() {
    const container = document.getElementById('versionList');
    if (!container) return;

    container.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const action = btn.dataset.action;
            const versionId = btn.dataset.id;

            switch (action) {
                case 'view':
                    showVersionPreview(versionId);
                    break;
                case 'restore':
                    await handleRestore(versionId);
                    break;
                case 'delete':
                    handleDelete(versionId);
                    break;
            }
        });
    });

    // 點擊卡片查看預覽
    container.querySelectorAll('.version-card').forEach(card => {
        card.addEventListener('click', () => {
            const versionId = card.dataset.versionId;
            showVersionPreview(versionId);

            // 高亮選中的卡片
            container.querySelectorAll('.version-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });
}

/**
 * 顯示版本預覽
 */
function showVersionPreview(versionId) {
    const history = getItineraryHistory();
    const version = history.find(v => v.id === versionId);
    if (!version) return;

    const previewContainer = document.getElementById('versionPreview');
    if (!previewContainer) return;

    previewContainer.innerHTML = `
        <div class="preview-header">
            <h4>${escapeHtml(version.title)}</h4>
            <span class="preview-type ${version.type}">${getTypeLabel(version.type)}</span>
        </div>
        <div class="preview-meta">
            <div class="meta-item">
                <span class="meta-label" data-i18n="version_preview_time">時間</span>
                <span class="meta-value">${formatTime(version.timestamp)}</span>
            </div>
            <div class="meta-item">
                <span class="meta-label" data-i18n="version_preview_spots_count">景點數量</span>
                <span class="meta-value">${version.thumbnail.totalDestinations}<span data-i18n="version_meta_spots"> 個</span></span>
            </div>
            <div class="meta-item">
                <span class="meta-label" data-i18n="version_preview_days_count">天數</span>
                <span class="meta-value">${version.thumbnail.days}<span data-i18n="version_meta_days"> 天</span></span>
            </div>
            ${version.thumbnail.budget ? `
            <div class="meta-item">
                <span class="meta-label" data-i18n="version_preview_budget_label">預算</span>
                <span class="meta-value">${version.thumbnail.budget}<span data-i18n="version_meta_budget"> 元</span></span>
            </div>
            ` : ''}
        </div>
        <div class="preview-destinations">
            <h5 data-i18n="version_preview_main_spots">主要景點</h5>
            <ul>
                ${version.thumbnail.destinations.map(dest => `
                    <li>📍 ${escapeHtml(dest)}</li>
                `).join('')}
                ${version.thumbnail.totalDestinations > 3 ? `
                    <li class="more"><span data-i18n="version_preview_more_spots">... 還有</span> ${version.thumbnail.totalDestinations - 3}<span data-i18n="version_preview_more_spots_suffix"> 個景點</span></li>
                ` : ''}
            </ul>
        </div>
        <div class="preview-summary">
            <h5 data-i18n="version_preview_settings">行程設定</h5>
            <p>${escapeHtml(version.summary)}</p>
        </div>
    `;
}

/**
 * 處理恢復版本
 */
async function handleRestore(versionId) {
    const confirmed = confirm('確定要恢復到這個版本嗎？\n當前的行程將被替換。');
    if (!confirmed) return;

    const success = loadItineraryVersion(versionId);
    if (success) {
        // 關閉 Modal
        const modal = document.getElementById('historyModal');
        if (modal) {
            modal.classList.remove('show');
        }

        // 顯示成功提示
        showToast('✅ 已恢復到選定版本', 'success');
    } else {
        showToast('❌ 恢復失敗，請重試', 'error');
    }
}

/**
 * 處理刪除版本
 */
function handleDelete(versionId) {
    const confirmed = confirm('確定要刪除這個版本嗎？\n此操作無法撤銷。');
    if (!confirmed) return;

    const success = deleteItineraryVersion(versionId);
    if (success) {
        // 重新渲染列表
        renderVersionList();

        // 更新徽章
        updateHistoryBadge();

        // 清空預覽
        const previewContainer = document.getElementById('versionPreview');
        if (previewContainer) {
            previewContainer.innerHTML = `
                <div class="preview-placeholder">
                    <div class="placeholder-icon">👈</div>
                    <p data-i18n="version_preview_placeholder">選擇一個版本查看詳情</p>
                </div>
            `;
        }

        showToast('🗑️ 版本已刪除', 'info');
    } else {
        showToast('❌ 刪除失敗，請重試', 'error');
    }
}

/**
 * 更新歷史版本徽章
 */
function updateHistoryBadge() {
    const badge = document.querySelector('.btn-history .badge');
    if (!badge) return;

    const history = getItineraryHistory();
    badge.textContent = history.length;
    badge.style.display = history.length > 0 ? 'inline-block' : 'none';
}

/**
 * 顯示提示訊息
 */
function showToast(message, type = 'info') {
    // 移除舊的 toast
    const oldToast = document.querySelector('.version-toast');
    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `version-toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // 顯示動畫
    setTimeout(() => toast.classList.add('show'), 10);

    // 3 秒後自動隱藏
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * HTML 轉義
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 導出給外部使用
export { updateHistoryBadge };
