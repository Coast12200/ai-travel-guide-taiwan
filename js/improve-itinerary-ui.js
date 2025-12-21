/**
 * Improve Itinerary UI Module
 * Provides unified interface for optimizing, adjusting, and regenerating itineraries
 */

import { appState } from './state.js';
import { optimizeItinerary, generateFeedbackItinerary } from './itinerary.js';
import { t } from './ui.js';

/**
 * Show improve itinerary modal with three options
 */
export function showImproveItineraryModal() {
    let modal = document.getElementById('improveItineraryModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'improveItineraryModal';
        modal.className = 'modal improve-modal';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px;">
                <div class="modal-header">
                    <h3>🔄 改進行程</h3>
                    <button class="modal-close" data-close-improve-modal>&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 20px; color: var(--text-secondary);">選擇您想要的改進方式：</p>
                    
                    <div class="improve-options" style="display: flex; flex-direction: column; gap: 12px;">
                        <!-- Option 1: Optimize Route Only -->
                        <button class="improve-option-btn" data-improve-mode="optimize" style="
                            padding: 16px;
                            border: 2px solid var(--border-color);
                            border-radius: 8px;
                            background: var(--card-bg);
                            cursor: pointer;
                            text-align: left;
                            transition: all 0.2s;
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                        ">
                            <span style="font-size: 24px; flex-shrink: 0;">⚡</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0; font-size: 16px;">只優化順序</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    保持景點不變，使用 TSP 演算法優化路線以減少移動時間
                                </p>
                            </div>
                        </button>

                        <!-- Option 2: Adjust Content -->
                        <button class="improve-option-btn" data-improve-mode="adjust" style="
                            padding: 16px;
                            border: 2px solid var(--border-color);
                            border-radius: 8px;
                            background: var(--card-bg);
                            cursor: pointer;
                            text-align: left;
                            transition: all 0.2s;
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                        ">
                            <span style="font-size: 24px; flex-shrink: 0;">🎯</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0; font-size: 16px;">調整景點內容</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    根據您的反饋替換或調整景點（太擁擠、太無聊、預算等）
                                </p>
                            </div>
                        </button>

                        <!-- Option 3: Complete Regeneration -->
                        <button class="improve-option-btn" data-improve-mode="regenerate" style="
                            padding: 16px;
                            border: 2px solid var(--border-color);
                            border-radius: 8px;
                            background: var(--card-bg);
                            cursor: pointer;
                            text-align: left;
                            transition: all 0.2s;
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                        ">
                            <span style="font-size: 24px; flex-shrink: 0;">🔄</span>
                            <div style="flex: 1;">
                                <h4 style="margin: 0 0 4px 0; font-size: 16px;">完全重新規劃</h4>
                                <p style="margin: 0; font-size: 14px; color: var(--text-secondary);">
                                    重新生成全新的行程方案（即將推出）
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Add hover effects
        const style = document.createElement('style');
        style.textContent = `
            .improve-option-btn:hover {
                border-color: var(--primary-color) !important;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }
            .improve-option-btn:active {
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);

        // Event listeners
        modal.querySelector('[data-close-improve-modal]').addEventListener('click', closeImproveModal);

        modal.querySelectorAll('[data-improve-mode]').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const mode = e.currentTarget.getAttribute('data-improve-mode');
                closeImproveModal();
                await handleImproveMode(mode);
            });
        });
    }
    modal.classList.add('show');
}

/**
 * Close improve itinerary modal
 */
function closeImproveModal() {
    const modal = document.getElementById('improveItineraryModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

/**
 * Handle improve mode selection
 */
async function handleImproveMode(mode) {
    switch (mode) {
        case 'optimize':
            // Call existing optimize function
            await optimizeItinerary();
            break;
        case 'adjust':
            // Show feedback modal for adjustment
            showAdjustContentModal();
            break;
        case 'regenerate':
            // TODO: Implement complete regeneration
            alert('完全重新規劃功能即將推出！');
            break;
    }
}

/**
 * Show adjust content modal (feedback modal)
 */
function showAdjustContentModal() {
    let modal = document.getElementById('adjustContentModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'adjustContentModal';
        modal.className = 'modal adjust-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🎯 調整行程內容</h3>
                    <button class="modal-close" data-close-adjust-modal>&times;</button>
                </div>
                <div class="modal-body">
                    <p>請選擇您想要調整的方向：</p>
                    <div class="feedback-options" style="display: flex; flex-direction: column; gap: 8px; margin: 16px 0;">
                        <label style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">
                            <input type="radio" name="adjustType" value="crowded"> 🚶 太擁擠 - 避免人潮，推薦冷門景點
                        </label>
                        <label style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">
                            <input type="radio" name="adjustType" value="boring"> 😴 太無聊 - 增加互動體驗和冒險活動
                        </label>
                        <label style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">
                            <input type="radio" name="adjustType" value="budget_exceeded"> 💰 預算超支 - 選擇免費或低價景點
                        </label>
                        <label style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">
                            <input type="radio" name="adjustType" value="too_long"> ⏰ 太長 - 縮短行程，減少景點數量
                        </label>
                        <label style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; cursor: pointer;">
                            <input type="radio" name="adjustType" value="not_enough"> 📍 不夠豐富 - 增加更多景點和活動
                        </label>
                    </div>
                    <textarea id="adjustCommentText" class="feedback-text" placeholder="其他具體建議（選填）" style="
                        width: 100%;
                        min-height: 80px;
                        padding: 8px;
                        border: 1px solid var(--border-color);
                        border-radius: 4px;
                        resize: vertical;
                    "></textarea>
                    <div class="modal-actions" style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 16px;">
                        <button class="btn btn-secondary" data-close-adjust-modal>取消</button>
                        <button class="btn btn-primary" data-accept-adjust>重新規劃</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('[data-close-adjust-modal]').addEventListener('click', closeAdjustModal);
        modal.querySelectorAll('[data-close-adjust-modal]').forEach(btn => {
            btn.addEventListener('click', closeAdjustModal);
        });

        modal.querySelector('[data-accept-adjust]').addEventListener('click', async () => {
            const selectedType = modal.querySelector('input[name="adjustType"]:checked');
            const comment = modal.querySelector('#adjustCommentText').value;

            if (!selectedType) {
                alert('請選擇調整方向');
                return;
            }

            closeAdjustModal();
            await generateFeedbackItinerary(comment, selectedType.value);
        });
    }
    modal.classList.add('show');
}

/**
 * Close adjust content modal
 */
function closeAdjustModal() {
    const modal = document.getElementById('adjustContentModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

/**
 * Render unified improve itinerary button
 */
export function renderImproveItineraryButton(container) {
    if (!container) return;

    // Remove old buttons if they exist
    const oldOptimizeBtn = container.querySelector('[data-show-optimize]');
    const oldFeedbackBtn = container.querySelector('[data-show-feedback-modal]');
    const oldImproveBtn = container.querySelector('[data-show-improve-modal]');
    if (oldOptimizeBtn) oldOptimizeBtn.remove();
    if (oldFeedbackBtn) oldFeedbackBtn.remove();
    if (oldImproveBtn) oldImproveBtn.remove();

    // Create wrapper for centering
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
        margin-top: 20px;
        text-align: center;
        padding: 0 16px;
    `;

    const btn = document.createElement('button');
    btn.className = 'btn btn-improve';
    btn.setAttribute('data-show-improve-modal', 'true');
    btn.innerHTML = `🔄 改進行程`;
    btn.style.cssText = `
        margin: 0 auto;
        padding: 12px 32px;
        font-size: 16px;
        font-weight: 600;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        min-width: 200px;
        max-width: 100%;
        display: inline-block;
    `;

    // Responsive: full width on mobile
    if (window.innerWidth <= 768) {
        btn.style.width = '100%';
        btn.style.maxWidth = '400px';
    }

    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.5)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
    });
    btn.addEventListener('click', showImproveItineraryModal);

    wrapper.appendChild(btn);
    container.appendChild(wrapper);
}
