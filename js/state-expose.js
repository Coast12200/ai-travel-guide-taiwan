/**
 * state.js
 * 集中管理應用程式的共享狀態和靜態資料。
 * 這樣可以避免全域變數污染，並使狀態的傳遞和修改更加清晰。
 */

// 暴露 appState 到 window 以便全域訪問
import { appState } from './state.js';

if (typeof window !== 'undefined') {
    window.appState = appState;
    console.log('✅ appState exposed to window');
}
