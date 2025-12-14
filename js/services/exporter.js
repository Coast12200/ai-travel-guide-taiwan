/**
 * exporter.js
 * 行程匯出服務
 * 
 * 負責將行程匯出為各種格式：
 * - iCalendar (.ics)
 * - Google Calendar
 * - PDF
 * - CSV
 * - 純文字
 */

import { getAppState } from '../state.js';
import { eventBus } from '../core/event-bus.js';
import { formatDateTime } from '../utils/date-time.js';

/**
 * 匯出服務類別
 */
export class Exporter {
    constructor() {
        this.destinationsByCountry = null;
    }

    /**
     * 匯出為 iCalendar 格式
     * @returns {void}
     */
    exportToICS() {
        try {
            const appState = getAppState();

            if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) {
                throw new Error('尚未有可匯出的行程');
            }

            eventBus.emit('export:start', { format: 'ics' });

            // 獲取日期和時間
            const dateStr = document.getElementById('itineraryDate')?.value || null;
            const startTime = document.getElementById('itineraryStartTime')?.value || null;
            const endTime = document.getElementById('itineraryEndTime')?.value || null;

            // 分割行程段落
            const paragraphs = (appState.lastGeneratedItinerary.text || '')
                .split(/\n\n+/)
                .filter(p => p.trim());

            // 構建 ICS 內容
            const icsLines = this._buildICSHeader();
            const events = this._createEventsFromParagraphs(paragraphs, dateStr, startTime, endTime, appState);

            events.forEach(event => {
                icsLines.push(...this._buildICSEvent(event));
            });

            icsLines.push('END:VCALENDAR');

            // 下載文件
            const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `itinerary-${Date.now()}.ics`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            eventBus.emit('export:complete', { format: 'ics' });

        } catch (error) {
            eventBus.emit('export:error', { format: 'ics', error: error.message });
            throw error;
        }
    }

    /**
     * 匯出到 Google Calendar
     * @returns {void}
     */
    exportToGoogleCalendar() {
        try {
            const appState = getAppState();

            if (!appState.lastGeneratedItinerary || !appState.lastGeneratedItinerary.text) {
                throw new Error('尚未有可匯出的行程');
            }

            eventBus.emit('export:start', { format: 'google-calendar' });

            const dateStr = document.getElementById('itineraryDate')?.value || null;
            const startTime = document.getElementById('itineraryStartTime')?.value || null;
            const endTime = document.getElementById('itineraryEndTime')?.value || null;

            const paragraphs = (appState.lastGeneratedItinerary.text || '')
                .split(/\n\n+/)
                .filter(p => p.trim());

            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Taipei';

            // 如果事件少於等於3個，為每個打開 Google Calendar 模板
            if (paragraphs.length <= 3) {
                const events = this._createEventsFromParagraphs(paragraphs, dateStr, startTime, endTime, appState);

                events.forEach(event => {
                    const url = this._buildGoogleCalendarURL(event, tz);
                    try {
                        window.open(url, '_blank');
                    } catch (e) {
                        console.warn('Failed to open Google Calendar', e);
                    }
                });

                eventBus.emit('export:complete', { format: 'google-calendar', count: events.length });
            } else {
                // 事件太多，回退到 ICS 匯出
                this.exportToICS();
                eventBus.emit('export:complete', { format: 'google-calendar', fallback: 'ics' });
            }

        } catch (error) {
            eventBus.emit('export:error', { format: 'google-calendar', error: error.message });
            throw error;
        }
    }

    // ==================== 私有輔助方法 ====================

    /**
     * 構建 ICS 文件頭
     * @private
     */
    _buildICSHeader() {
        return [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//AI Travel Guide Taiwan//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VTIMEZONE',
            'TZID:Asia/Taipei',
            'BEGIN:STANDARD',
            'TZOFFSETFROM:+0800',
            'TZOFFSETTO:+0800',
            'TZNAME:CST',
            'DTSTART:19700101T000000',
            'END:STANDARD',
            'END:VTIMEZONE'
        ];
    }

    /**
     * 從段落創建事件
     * @private
     */
    _createEventsFromParagraphs(paragraphs, dateStr, startTime, endTime, appState) {
        let baseDate = null;
        if (dateStr) {
            const parts = dateStr.split('-').map(Number);
            if (parts.length === 3) {
                baseDate = new Date(parts[0], parts[1] - 1, parts[2]);
            }
        }

        let currentStart = null;
        if (baseDate && startTime) {
            const [sh, sm] = startTime.split(':').map(Number);
            currentStart = new Date(
                baseDate.getFullYear(),
                baseDate.getMonth(),
                baseDate.getDate(),
                sh || 9,
                sm || 0,
                0
            );
        }

        // 計算每個段落的持續時間
        const durationMs = this._calculateDuration(startTime, endTime, paragraphs.length);

        return paragraphs.map((p, idx) => {
            const lines = p.split('\n').filter(l => l.trim());
            const title = lines[0] || '行程';
            const description = lines.slice(0, 3).join('。') || p.slice(0, 200);

            let eventStart, eventEnd;
            if (currentStart) {
                eventStart = new Date(currentStart.getTime() + idx * durationMs);
                eventEnd = new Date(eventStart.getTime() + durationMs);
            } else if (baseDate) {
                eventStart = baseDate;
                eventEnd = baseDate;
            }

            // 提取位置
            const location = this._extractLocation(p, appState, idx);

            return {
                uid: `ai-itin-${Date.now()}-${idx}@ai-travel-guide`,
                title: title.slice(0, 80),
                description: description.slice(0, 300),
                location,
                start: eventStart,
                end: eventEnd,
                allDay: !currentStart
            };
        });
    }

    /**
     * 構建單個 ICS 事件
     * @private
     */
    _buildICSEvent(event) {
        const lines = [
            'BEGIN:VEVENT',
            `UID:${event.uid}`,
            `DTSTAMP:${this._toUTCString(new Date())}`,
            `SUMMARY:${this._escapeICalText(event.title)}`,
            `DESCRIPTION:${this._escapeICalText(event.description)}`
        ];

        if (event.location) {
            lines.push(`LOCATION:${this._escapeICalText(event.location)}`);
        }

        if (event.allDay) {
            const dayStr = this._toDateString(event.start);
            lines.push(`DTSTART;VALUE=DATE:${dayStr}`);
            lines.push(`DTEND;VALUE=DATE:${dayStr}`);
        } else {
            lines.push(`DTSTART:${this._toUTCString(event.start)}`);
            lines.push(`DTEND:${this._toUTCString(event.end)}`);
        }

        lines.push('END:VEVENT');
        return lines;
    }

    /**
     * 構建 Google Calendar URL
     * @private
     */
    _buildGoogleCalendarURL(event, tz) {
        const title = encodeURIComponent(event.title);
        const details = encodeURIComponent(event.description);
        const location = event.location ? encodeURIComponent(event.location) : '';

        let dates = '';
        if (event.allDay) {
            dates = this._toDateString(event.start) + '/' + this._toDateString(event.end);
        } else {
            dates = this._toUTCString(event.start) + '/' + this._toUTCString(event.end);
        }

        let url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}`;
        if (dates) url += `&dates=${dates}`;
        if (details) url += `&details=${details}`;
        if (location) url += `&location=${location}`;
        url += `&ctz=${encodeURIComponent(tz)}`;

        return url;
    }

    /**
     * 計算持續時間
     * @private
     */
    _calculateDuration(startTime, endTime, count) {
        if (!startTime || !endTime) {
            return 60 * 60 * 1000; // 默認 1 小時
        }

        const [sh, sm] = startTime.split(':').map(Number);
        const [eh, em] = endTime.split(':').map(Number);

        let startMinutes = (sh || 0) * 60 + (sm || 0);
        let endMinutes = (eh || 0) * 60 + (em || 0);

        if (endMinutes <= startMinutes) {
            endMinutes += 24 * 60;
        }

        const totalMinutes = endMinutes - startMinutes;
        return (totalMinutes * 60 * 1000) / Math.max(1, count);
    }

    /**
     * 提取位置信息
     * @private
     */
    _extractLocation(text, appState, idx) {
        // 嘗試從文字中提取位置
        const locationMatch = text.match(/\(([^)]+)\)|地點[:：]\s*([^\n,]+)/i);
        if (locationMatch) {
            return (locationMatch[1] || locationMatch[2] || '').trim();
        }

        // 嘗試從行程位置列表中獲取
        if (appState.currentItineraryLocations && idx < appState.currentItineraryLocations.length) {
            return appState.currentItineraryLocations[idx];
        }

        return '';
    }

    /**
     * 轉換為 UTC 字符串
     * @private
     */
    _toUTCString(date) {
        if (!date) return '';
        const pad = (n) => String(n).padStart(2, '0');
        return date.getUTCFullYear() +
            pad(date.getUTCMonth() + 1) +
            pad(date.getUTCDate()) +
            'T' +
            pad(date.getUTCHours()) +
            pad(date.getUTCMinutes()) +
            pad(date.getUTCSeconds()) +
            'Z';
    }

    /**
     * 轉換為日期字符串
     * @private
     */
    _toDateString(date) {
        if (!date) return '';
        return date.getFullYear() +
            String(date.getMonth() + 1).padStart(2, '0') +
            String(date.getDate()).padStart(2, '0');
    }

    /**
     * 轉義 iCal 文字
     * @private
     */
    _escapeICalText(txt) {
        return String(txt || '')
            .replace(/\\/g, '\\\\')
            .replace(/\n/g, '\\n')
            .replace(/,/g, '\\,')
            .replace(/;/g, '\\;');
    }
}

// 創建單例實例
export const exporter = new Exporter();

// 向後兼容的導出函數
export function exportItineraryToICS() {
    return exporter.exportToICS();
}

export function exportItineraryToGoogleCalendar() {
    return exporter.exportToGoogleCalendar();
}

export function escapeICalText(txt) {
    return exporter._escapeICalText(txt);
}
