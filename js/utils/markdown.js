/**
 * markdown.js
 * Markdown 處理工具模組
 * 
 * 提供 Markdown 轉 HTML 和文本提取功能
 * 純函數，無外部依賴
 */

/**
 * 將 Markdown 轉換為 HTML
 * 支持標題、列表、粗體、斜體、段落、引用
 * 
 * @param {string} raw - Markdown 文本
 * @returns {string} HTML 字符串
 */
export function mdToHtml(raw) {
    if (!raw || typeof raw !== 'string') return raw || '';

    // 轉義 HTML 以避免注入
    let s = raw.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    /**
     * 轉換 Markdown 片段為 HTML
     * @param {string} t - Markdown 片段
     * @returns {string} HTML 字符串
     */
    function transformFragment(t) {
        if (!t) return '';
        let out = t;

        // 標題: #### -> h4, ### -> h3, ## -> h2, # -> h1
        out = out.replace(/^####\s+(.*)$/gim, '<h4>$1</h4>');
        out = out.replace(/^###\s+(.*)$/gim, '<h3>$1</h3>');
        out = out.replace(/^##\s+(.*)$/gim, '<h2>$1</h2>');
        out = out.replace(/^#\s+(.*)$/gim, '<h1>$1</h1>');

        // 列表項 -> li
        out = out.replace(/^(?:[-*+]\s+)(.*)$/gim, '<li>$1</li>');

        // 將 li 組合成 ul
        out = out.replace(/(?:<li>[\s\S]*?<\/li>\s*)+/gim, function (group) {
            return '<ul>' + group + '</ul>';
        });

        // 粗體 / 斜體
        out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');

        return out;
    }

    // 處理行並特別處理引用塊
    const lines = s.split('\n');
    let inBQ = false;
    let bqLines = [];
    const outLines = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isBQ = line.trim().startsWith('&gt;');

        if (isBQ) {
            inBQ = true;
            const content = line.trim().replace(/^&gt;\s?/, '');
            bqLines.push(content);
        } else {
            if (inBQ) {
                // 結束引用塊 — 轉換內部 Markdown 然後包裝
                const inner = bqLines.join('\n');
                const processedInner = transformFragment(inner);
                outLines.push('<div class="review-summary-block"><blockquote>' + processedInner + '</blockquote></div>');
                bqLines = [];
                inBQ = false;
            }
            outLines.push(line);
        }
    }

    // 處理尾部引用塊
    if (inBQ && bqLines.length) {
        const inner = bqLines.join('\n');
        const processedInner = transformFragment(inner);
        outLines.push('<div class="review-summary-block"><blockquote>' + processedInner + '</blockquote></div>');
    }

    s = outLines.join('\n');

    // 轉換剩餘的非引用塊片段
    // 按兩個或更多換行符分割以形成段落/塊
    const parts = s.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
    const htmlParts = parts.map(p => {
        if (p.startsWith('<blockquote') || p.startsWith('<div class="review-summary-block"')) return p;

        const frag = transformFragment(p);

        // 如果片段已經以塊級標籤開始，直接返回
        if (/^<h[1-4]|^<ul|^<p|^<blockquote/i.test(frag.trim())) return frag;

        // 如果包含 <li>，包裝為 ul
        if (frag.indexOf('<li>') !== -1 && frag.indexOf('<ul>') === -1) {
            return '<ul>' + frag + '</ul>';
        }

        // 否則包裝為段落並保留換行
        return '<p>' + frag.replace(/\n/g, '<br/>') + '</p>';
    });

    return htmlParts.join('\n');
}

/**
 * 從 Markdown 文本中提取第一個標題
 * @param {string} markdown - Markdown 文本
 * @returns {string} 標題文本，如果沒有則返回空字符串
 */
export function extractTitle(markdown) {
    if (!markdown) return '';

    const lines = markdown.split('\n');
    for (const line of lines) {
        const match = line.match(/^#\s+(.+)/);
        if (match) {
            return match[1].trim();
        }
    }

    return '';
}

/**
 * 從 Markdown 文本中提取所有標題
 * @param {string} markdown - Markdown 文本
 * @param {number} level - 標題級別 (1-4)，不指定則返回所有級別
 * @returns {Array<{level: number, text: string}>} 標題數組
 */
export function extractHeadings(markdown, level = null) {
    if (!markdown) return [];

    const headings = [];
    const lines = markdown.split('\n');

    for (const line of lines) {
        const match = line.match(/^(#{1,4})\s+(.+)/);
        if (match) {
            const headingLevel = match[1].length;
            const text = match[2].trim();

            if (level === null || headingLevel === level) {
                headings.push({ level: headingLevel, text });
            }
        }
    }

    return headings;
}

/**
 * 從行程文本中提取天數
 * @param {string} itinerary - 行程文本
 * @returns {number} 天數
 */
export function extractDays(itinerary) {
    if (!itinerary) return 0;

    const dayMatches = itinerary.match(/Day \d+|第\s*\d+\s*天/gi);
    return dayMatches ? dayMatches.length : 0;
}

/**
 * 從文本中提取摘要（前 N 個字符）
 * @param {string} text - 文本
 * @param {number} maxLength - 最大長度，默認 30
 * @returns {string} 摘要文本
 */
export function extractSummary(text, maxLength = 30) {
    if (!text) return '';

    // 移除 Markdown 標記
    let clean = text
        .replace(/^#{1,6}\s+/gm, '')  // 移除標題標記
        .replace(/\*\*(.*?)\*\*/g, '$1')  // 移除粗體
        .replace(/\*(.*?)\*/g, '$1')  // 移除斜體
        .replace(/^[-*+]\s+/gm, '')  // 移除列表標記
        .trim();

    // 取第一個非空行
    const lines = clean.split('\n').filter(l => l.trim().length > 0);
    const firstLine = lines[0] || '';

    if (firstLine.length <= maxLength) {
        return firstLine;
    }

    return firstLine.substring(0, maxLength) + '...';
}

/**
 * 將 HTML 轉換為純文本
 * @param {string} html - HTML 字符串
 * @returns {string} 純文本
 */
export function htmlToText(html) {
    if (!html) return '';

    return html
        .replace(/<br\s*\/?>/gi, '\n')  // br -> 換行
        .replace(/<\/p>/gi, '\n\n')  // 段落結束 -> 雙換行
        .replace(/<[^>]+>/g, '')  // 移除所有 HTML 標籤
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .trim();
}

/**
 * 簡單的 Markdown 驗證
 * @param {string} text - 文本
 * @returns {boolean} 是否包含 Markdown 標記
 */
export function isMarkdown(text) {
    if (!text) return false;

    // 檢查常見的 Markdown 標記
    const markdownPatterns = [
        /^#{1,6}\s+/m,  // 標題
        /\*\*.*?\*\*/,  // 粗體
        /\*.*?\*/,  // 斜體
        /^[-*+]\s+/m,  // 列表
        /^\d+\.\s+/m,  // 有序列表
        /^>\s+/m  // 引用
    ];

    return markdownPatterns.some(pattern => pattern.test(text));
}
