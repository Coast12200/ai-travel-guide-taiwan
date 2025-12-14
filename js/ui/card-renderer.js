/**
 * card-renderer.js
 * 景點卡片渲染器
 * 
 * 提供景點卡片的創建和渲染功能
 */

import { eventBus } from '../core/event-bus.js';

/**
 * 卡片渲染器類別
 */
export class CardRenderer {
    constructor(options = {}) {
        this.icons = options.icons || {};
        this.translations = options.translations || {};
        this.appState = options.appState || {};
    }

    /**
     * 創建景點卡片元素
     * @param {Object} destination - 景點數據
     * @returns {HTMLElement} 卡片元素
     */
    createCard(destination) {
        const dest = destination;
        const isFavorited = this.appState.favorites?.includes(dest.id) || false;
        const currentLang = this.appState.currentLanguage || 'zh';

        // 收藏按鈕文字
        const favText = isFavorited
            ? (this.translations.favorited?.[currentLang] || '★ 已收藏')
            : (this.translations.favorite?.[currentLang] || '⭐ 收藏');
        const favClass = isFavorited ? 'favorited' : '';

        // 數據來源標籤
        const sourceClass = dest.id && String(dest.id).startsWith('offline') ? 'offline' : 'live';
        const sourceLabel = sourceClass === 'offline'
            ? (this.translations.data_source_offline?.[currentLang] || 'Offline')
            : (this.translations.data_source_live?.[currentLang] || 'Live');

        // 創建卡片容器
        const card = document.createElement('div');
        card.className = 'destination-card';
        if (dest.id !== undefined) card.dataset.id = dest.id;
        if (dest.name !== undefined) card.dataset.name = dest.name;
        if (dest.city !== undefined) card.dataset.city = dest.city;

        // 數據來源徽章
        const badge = document.createElement('div');
        badge.className = `source-badge ${sourceClass}`;
        badge.textContent = sourceLabel;
        card.appendChild(badge);

        // 圖片或圖標
        if (dest.picture) {
            const pic = document.createElement('div');
            pic.className = 'card-picture';
            pic.style.backgroundImage = `url('${dest.picture}')`;

            // 添加載入動畫
            pic.style.opacity = '0';
            pic.style.transition = 'opacity 0.3s ease';

            // 預載圖片
            const img = new Image();
            img.onload = () => {
                pic.style.opacity = '1';
            };
            img.src = dest.picture;

            card.appendChild(pic);
        } else {
            const fallback = document.createElement('div');
            fallback.className = 'card-icon-fallback';
            fallback.innerHTML = this.icons.mountain || '📍';
            card.appendChild(fallback);
        }

        // 內容包裝器
        const wrapper = document.createElement('div');
        wrapper.className = 'card-content-wrapper';

        // 收藏按鈕
        const favBtn = document.createElement('button');
        favBtn.className = `favorite-btn ${favClass}`;
        favBtn.setAttribute('aria-pressed', isFavorited);
        favBtn.textContent = favText;
        favBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleFavoriteClick(dest.id, favBtn);
        });
        wrapper.appendChild(favBtn);

        // 標題
        const h4 = document.createElement('h4');
        h4.textContent = dest.name || '';
        wrapper.appendChild(h4);

        // 自訂景點的編輯/刪除按鈕
        if (dest.id && String(dest.id).startsWith('custom-')) {
            const actions = this.createCustomActions(dest.id);
            wrapper.appendChild(actions);
        }

        // 內容區域
        const contentDiv = document.createElement('div');
        contentDiv.className = 'destination-card-content';

        // 描述
        const p = document.createElement('p');
        p.textContent = dest.description || '';
        contentDiv.appendChild(p);

        // 天氣資訊
        const weatherDiv = document.createElement('div');
        weatherDiv.className = 'weather-info';
        weatherDiv.id = `weather-${dest.id}`;
        weatherDiv.textContent = '--';
        contentDiv.appendChild(weatherDiv);

        // 即時狀態
        const statusDiv = document.createElement('div');
        statusDiv.className = 'realtime-status';
        statusDiv.id = `status-${dest.id}`;
        statusDiv.textContent = this.appState.isTdxApiVerified ? '載入中…' : '無即時資料';
        statusDiv.style.marginTop = '8px';
        statusDiv.style.fontSize = '0.9rem';
        statusDiv.style.color = 'var(--muted)';
        contentDiv.appendChild(statusDiv);

        wrapper.appendChild(contentDiv);
        card.appendChild(wrapper);

        // 添加點擊事件
        card.addEventListener('click', () => {
            this.handleCardClick(dest);
        });

        // 觸發事件
        eventBus.emit('card:created', { destination: dest, element: card });

        return card;
    }

    /**
     * 創建自訂景點的操作按鈕
     * @param {string} destId - 景點 ID
     * @returns {HTMLElement} 操作按鈕容器
     */
    createCustomActions(destId) {
        const actions = document.createElement('div');
        actions.className = 'card-actions';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-custom-btn';
        editBtn.type = 'button';
        editBtn.textContent = '編輯';
        editBtn.setAttribute('aria-label', '編輯自訂景點');
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleEditClick(destId);
        });
        actions.appendChild(editBtn);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-custom-btn';
        delBtn.type = 'button';
        delBtn.textContent = '刪除';
        delBtn.setAttribute('aria-label', '刪除自訂景點');
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.handleDeleteClick(destId);
        });
        actions.appendChild(delBtn);

        return actions;
    }

    /**
     * 處理卡片點擊
     * @param {Object} destination - 景點數據
     */
    handleCardClick(destination) {
        eventBus.emit('card:clicked', { destination });
    }

    /**
     * 處理收藏按鈕點擊
     * @param {string} destId - 景點 ID
     * @param {HTMLElement} button - 按鈕元素
     */
    handleFavoriteClick(destId, button) {
        eventBus.emit('card:favorite:clicked', { destId, button });
    }

    /**
     * 處理編輯按鈕點擊
     * @param {string} destId - 景點 ID
     */
    handleEditClick(destId) {
        eventBus.emit('card:edit:clicked', { destId });
    }

    /**
     * 處理刪除按鈕點擊
     * @param {string} destId - 景點 ID
     */
    handleDeleteClick(destId) {
        eventBus.emit('card:delete:clicked', { destId });
    }

    /**
     * 批量渲染卡片
     * @param {Array} destinations - 景點數組
     * @param {HTMLElement} container - 容器元素
     */
    renderCards(destinations, container) {
        if (!container) {
            console.warn('Container not found');
            return;
        }

        // 清空容器
        container.innerHTML = '';

        // 創建並添加卡片
        const fragment = document.createDocumentFragment();
        destinations.forEach(dest => {
            const card = this.createCard(dest);
            fragment.appendChild(card);
        });

        container.appendChild(fragment);

        // 觸發事件
        eventBus.emit('cards:rendered', {
            count: destinations.length,
            container
        });
    }

    /**
     * 更新卡片收藏狀態
     * @param {string} destId - 景點 ID
     * @param {boolean} isFavorited - 是否已收藏
     */
    updateFavoriteStatus(destId, isFavorited) {
        const card = document.querySelector(`[data-id="${destId}"]`);
        if (!card) return;

        const favBtn = card.querySelector('.favorite-btn');
        if (!favBtn) return;

        const currentLang = this.appState.currentLanguage || 'zh';
        const favText = isFavorited
            ? (this.translations.favorited?.[currentLang] || '★ 已收藏')
            : (this.translations.favorite?.[currentLang] || '⭐ 收藏');

        favBtn.textContent = favText;
        favBtn.setAttribute('aria-pressed', isFavorited);

        if (isFavorited) {
            favBtn.classList.add('favorited');
        } else {
            favBtn.classList.remove('favorited');
        }
    }
}

// 創建默認實例（需要在使用時配置）
export function createCardRenderer(options) {
    return new CardRenderer(options);
}

export default CardRenderer;
