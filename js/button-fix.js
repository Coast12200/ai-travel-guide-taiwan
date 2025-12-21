// 臨時修復：為行程操作按鈕添加事件監聽器
// 在頁面載入後執行

document.addEventListener('DOMContentLoaded', function () {
    console.log('🔧 Button fix script loaded');

    // 等待一秒確保所有模組都已載入
    setTimeout(function () {
        // 優化行程按鈕
        const optimizeBtn = document.getElementById('optimizeBtn');
        if (optimizeBtn && !optimizeBtn.hasAttribute('data-listener-added')) {
            optimizeBtn.addEventListener('click', function () {
                console.log('⚡ Optimize button clicked');
                if (typeof window.optimizeItinerary === 'function') {
                    window.optimizeItinerary();
                } else {
                    console.error('optimizeItinerary function not found');
                }
            });
            optimizeBtn.setAttribute('data-listener-added', 'true');
            console.log('✅ Optimize button listener added');
        }

        // 下載行程菜單按鈕 (打開彈窗)
        const downloadMenuBtn = document.getElementById('downloadMenuBtn');
        if (downloadMenuBtn && !downloadMenuBtn.hasAttribute('data-listener-added')) {
            downloadMenuBtn.addEventListener('click', function () {
                console.log('⬇️ Download menu button clicked');
                const backdrop = document.getElementById('downloadBackdrop');
                const bottomSheet = document.getElementById('downloadBottomSheet');
                if (backdrop && bottomSheet) {
                    backdrop.style.display = 'block';
                    bottomSheet.classList.add('active');
                } else {
                    console.error('Download bottom sheet not found');
                }
            });
            downloadMenuBtn.setAttribute('data-listener-added', 'true');
            console.log('✅ Download menu button listener added');
        }

        // 關閉下載彈窗
        const closeBottomSheetBtn = document.getElementById('closeBottomSheetBtn');
        const downloadBackdrop = document.getElementById('downloadBackdrop');
        if (closeBottomSheetBtn && downloadBackdrop) {
            closeBottomSheetBtn.addEventListener('click', function () {
                downloadBackdrop.style.display = 'none';
                document.getElementById('downloadBottomSheet').classList.remove('active');
            });
            downloadBackdrop.addEventListener('click', function () {
                downloadBackdrop.style.display = 'none';
                document.getElementById('downloadBottomSheet').classList.remove('active');
            });
        }

        // 下載選項按鈕
        const downloadOptions = document.querySelectorAll('.download-option');
        downloadOptions.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const format = this.getAttribute('data-format');
                console.log('📥 Download format selected:', format);

                // 關閉彈窗
                document.getElementById('downloadBackdrop').style.display = 'none';
                document.getElementById('downloadBottomSheet').classList.remove('active');

                // 調用相應的下載函數
                import('./itinerary.js').then(mod => {
                    if (format === 'ics' && mod.exportItineraryToICS) {
                        mod.exportItineraryToICS();
                    } else if (format === 'text' && mod.downloadItineraryAsText) {
                        mod.downloadItineraryAsText();
                    } else {
                        console.log('Format not implemented yet:', format);
                    }
                }).catch(err => {
                    console.error('Failed to load itinerary module:', err);
                });
            });
        });

        console.log('✅ All button listeners added successfully');
    }, 1000);
});
