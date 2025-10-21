import { initializeApp, setupEventListeners } from './ui.js';

/**
 * 當 DOM 內容完全載入後，初始化應用程式。
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();

    // 優化：骨架畫面處理，讓內容在準備好後再顯示
    // 給予一個短暫延遲，確保畫面元素都已渲染
    setTimeout(() => {
        document.getElementById('loading-skeleton').classList.add('hidden');
        document.querySelector('.container').classList.remove('hidden');
    }, 100);
});

