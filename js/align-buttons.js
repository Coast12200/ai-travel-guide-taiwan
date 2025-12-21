/**
 * 對齊行程操作按鈕與版本歷史按鈕
 * 使它們在同一排顯示
 */

(function () {
    'use strict';

    console.log('🎨 Button alignment script loaded');

    let alignmentAttempts = 0;
    const MAX_ATTEMPTS = 10;

    /**
     * 對齊按鈕函數
     */
    function alignButtons() {
        alignmentAttempts++;

        const historyContainer = document.querySelector('.history-button-container');
        const itineraryActions = document.getElementById('itineraryActions');
        const suggestionWrapper = document.getElementById('suggestionContentWrapper');

        console.log(`🔍 Alignment attempt ${alignmentAttempts}:`, {
            historyContainer: !!historyContainer,
            itineraryActions: !!itineraryActions,
            suggestionWrapper: !!suggestionWrapper,
            itineraryDisplay: itineraryActions ? itineraryActions.style.display : 'N/A'
        });

        if (!suggestionWrapper) {
            console.warn('⚠️ suggestionContentWrapper not found');
            return false;
        }

        // 檢查是否已經創建包裝器
        let wrapper = suggestionWrapper.querySelector('.buttons-row-wrapper');

        // 如果兩個按鈕容器都存在且行程按鈕可見
        if (historyContainer && itineraryActions) {
            const isVisible = itineraryActions.style.display === 'flex' ||
                itineraryActions.style.display === 'inline-flex' ||
                window.getComputedStyle(itineraryActions).display !== 'none';

            console.log(`📊 Buttons status:`, {
                historyVisible: true,
                itineraryVisible: isVisible,
                wrapperExists: !!wrapper
            });

            // 如果還沒有包裝器，創建一個
            if (!wrapper) {
                wrapper = document.createElement('div');
                wrapper.className = 'buttons-row-wrapper';

                // 將包裝器插入到 suggestionWrapper 的開頭
                suggestionWrapper.insertBefore(wrapper, suggestionWrapper.firstChild);
                console.log('✨ Created buttons-row-wrapper');
            }

            // 將兩個按鈕容器移動到包裝器中
            if (historyContainer.parentElement !== wrapper) {
                wrapper.appendChild(historyContainer);
                console.log('📌 Moved history button to wrapper');
            }

            if (itineraryActions.parentElement !== wrapper) {
                wrapper.appendChild(itineraryActions);
                console.log('📌 Moved itinerary actions to wrapper');
            }

            console.log('✅ Buttons aligned in the same row');
            return true;
        } else {
            if (!historyContainer) {
                console.log('⏳ Waiting for history button...');
            }
            if (!itineraryActions) {
                console.log('⏳ Waiting for itinerary actions buttons...');
            }
            return false;
        }
    }

    /**
     * 重試對齊按鈕
     */
    function retryAlignment() {
        if (alignmentAttempts >= MAX_ATTEMPTS) {
            console.warn(`⚠️ Max alignment attempts (${MAX_ATTEMPTS}) reached`);
            return;
        }

        const success = alignButtons();

        if (!success && alignmentAttempts < MAX_ATTEMPTS) {
            setTimeout(retryAlignment, 500);
        }
    }

    // 初始化
    document.addEventListener('DOMContentLoaded', function () {
        console.log('📄 DOM Content Loaded');

        // 首次嘗試對齊
        setTimeout(function () {
            retryAlignment();
        }, 1000);

        // 監聽行程操作按鈕的顯示
        const checkInterval = setInterval(function () {
            const itineraryActions = document.getElementById('itineraryActions');

            if (itineraryActions && alignmentAttempts < MAX_ATTEMPTS) {
                // 使用 MutationObserver 監聽樣式變化
                const observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                            const display = itineraryActions.style.display;
                            if (display === 'flex' || display === 'inline-flex') {
                                console.log('🔔 Itinerary actions became visible');
                                alignButtons();
                            }
                        }
                    });
                });

                observer.observe(itineraryActions, {
                    attributes: true,
                    attributeFilter: ['style']
                });

                clearInterval(checkInterval);
                console.log('👀 MutationObserver attached to itineraryActions');
            }
        }, 500);

        // 10秒後停止檢查
        setTimeout(function () {
            clearInterval(checkInterval);
        }, 10000);
    });

    // 暴露給全局使用
    window.alignButtons = alignButtons;

    // 當窗口載入完成後再次嘗試
    window.addEventListener('load', function () {
        console.log('🌐 Window loaded');
        setTimeout(function () {
            if (alignmentAttempts < MAX_ATTEMPTS) {
                alignButtons();
            }
        }, 500);
    });
})();
