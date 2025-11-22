import { initializeApp, setupEventListeners, renderWeatherAlertBanner } from './ui.js';

console.log('Main.js module loaded');

function init() {
    console.log('Initializing app...');
    try {
        initializeApp();
        setupEventListeners();

        // Render any weather alert banner if present from previous fetch
        try { renderWeatherAlertBanner(); } catch (e) { }

        // Left circular nav behavior
        try {
            const circleToggle = document.getElementById('circleToggle');
            const circleMenu = document.getElementById('circleMenu');
            const leftNav = document.getElementById('leftCircleNav');
            if (circleToggle && circleMenu && leftNav) {
                circleToggle.addEventListener('click', () => {
                    const expanded = circleToggle.getAttribute('aria-expanded') === 'true';
                    circleToggle.setAttribute('aria-expanded', String(!expanded));
                    circleMenu.setAttribute('aria-hidden', String(expanded));
                    leftNav.classList.toggle('open', !expanded);
                });

                // delegate clicks to items
                circleMenu.addEventListener('click', (e) => {
                    const btn = e.target.closest('.circle-item');
                    if (!btn) return;
                    const targetId = btn.getAttribute('data-target');
                    if (!targetId) return;
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else if (targetId === 'favoritesModal') {
                        // open favorites modal if present
                        const fav = document.getElementById('favoritesModal');
                        if (fav) fav.classList.remove('hidden');
                    }
                    // on mobile, close the menu after navigation
                    if (window.innerWidth <= 720) {
                        circleToggle.click();
                    }
                });
            }
        } catch (err) { console.warn('leftCircleNav init failed', err); }

        // Quick jump top/bottom
        try {
            const jumpTop = document.getElementById('jumpTopBtn');
            const jumpBottom = document.getElementById('jumpBottomBtn');
            if (jumpTop) jumpTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            if (jumpBottom) jumpBottom.addEventListener('click', () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
        } catch (err) { console.warn('quickJump init failed', err); }

    } catch (e) {
        console.error('Initialization error:', e);
    } finally {
        // 優化：骨架畫面處理，讓內容在準備好後再顯示
        // 給予一個短暫延遲，確保畫面元素都已渲染
        setTimeout(() => {
            const skeleton = document.getElementById('loading-skeleton');
            const container = document.querySelector('.container');
            if (skeleton) skeleton.classList.add('hidden');
            if (container) container.classList.remove('hidden');
            console.log('Skeleton removed, container shown');
        }, 100);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

