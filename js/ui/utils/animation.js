/**
 * Animation Utilities
 * 提供動畫相關的輔助函數
 */

/**
 * 淡入動畫
 */
export function fadeIn(element, duration = 300) {
    if (!element) return Promise.resolve();

    return new Promise((resolve) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        element.style.transition = `opacity ${duration}ms ease`;

        requestAnimationFrame(() => {
            element.style.opacity = '1';
            setTimeout(resolve, duration);
        });
    });
}

/**
 * 淡出動畫
 */
export function fadeOut(element, duration = 300) {
    if (!element) return Promise.resolve();

    return new Promise((resolve) => {
        element.style.opacity = '1';
        element.style.transition = `opacity ${duration}ms ease`;

        requestAnimationFrame(() => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.display = 'none';
                resolve();
            }, duration);
        });
    });
}

/**
 * 滑入動畫
 */
export function slideDown(element, duration = 300) {
    if (!element) return Promise.resolve();

    return new Promise((resolve) => {
        element.style.display = 'block';
        const height = element.scrollHeight;
        element.style.height = '0';
        element.style.overflow = 'hidden';
        element.style.transition = `height ${duration}ms ease`;

        requestAnimationFrame(() => {
            element.style.height = height + 'px';
            setTimeout(() => {
                element.style.height = '';
                element.style.overflow = '';
                resolve();
            }, duration);
        });
    });
}

/**
 * 滑出動畫
 */
export function slideUp(element, duration = 300) {
    if (!element) return Promise.resolve();

    return new Promise((resolve) => {
        const height = element.scrollHeight;
        element.style.height = height + 'px';
        element.style.overflow = 'hidden';
        element.style.transition = `height ${duration}ms ease`;

        requestAnimationFrame(() => {
            element.style.height = '0';
            setTimeout(() => {
                element.style.display = 'none';
                element.style.height = '';
                element.style.overflow = '';
                resolve();
            }, duration);
        });
    });
}

/**
 * 添加脈衝動畫
 */
export function pulse(element, duration = 600) {
    if (!element) return;

    element.classList.add('pulse');
    setTimeout(() => {
        element.classList.remove('pulse');
    }, duration);
}

/**
 * 添加震動動畫
 */
export function shake(element, duration = 600) {
    if (!element) return;

    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, duration);
}

/**
 * 等待動畫結束
 */
export function waitForAnimation(element) {
    return new Promise((resolve) => {
        const handleAnimationEnd = () => {
            element.removeEventListener('animationend', handleAnimationEnd);
            resolve();
        };
        element.addEventListener('animationend', handleAnimationEnd);
    });
}

/**
 * 等待過渡結束
 */
export function waitForTransition(element) {
    return new Promise((resolve) => {
        const handleTransitionEnd = () => {
            element.removeEventListener('transitionend', handleTransitionEnd);
            resolve();
        };
        element.addEventListener('transitionend', handleTransitionEnd);
    });
}
