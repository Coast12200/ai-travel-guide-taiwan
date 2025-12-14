/**
 * form-handler.js
 * 表單處理器
 * 
 * 提供表單驗證、提交和數據處理功能
 */

import { eventBus } from '../core/event-bus.js';
import { validateBatch } from '../utils/validators.js';

/**
 * 表單處理器類別
 */
export class FormHandler {
    constructor() {
        this.forms = new Map();
    }

    /**
     * 註冊表單
     * @param {string} formId - 表單 ID
     * @param {Object} config - 表單配置
     */
    register(formId, config = {}) {
        const form = document.getElementById(formId);
        if (!form) {
            console.warn(`Form not found: ${formId}`);
            return false;
        }

        const {
            validators = {},
            onSubmit = null,
            onValidate = null,
            onError = null,
            preventDefault = true,
            showErrors = true
        } = config;

        // 保存配置
        this.forms.set(formId, {
            element: form,
            validators,
            onSubmit,
            onValidate,
            onError,
            preventDefault,
            showErrors
        });

        // 添加提交事件監聽器
        form.addEventListener('submit', (e) => {
            this.handleSubmit(formId, e);
        });

        // 添加輸入驗證
        if (showErrors) {
            this.setupLiveValidation(formId);
        }

        // 觸發事件
        eventBus.emit('form:registered', { formId, config });

        return true;
    }

    /**
     * 設置即時驗證
     * @param {string} formId - 表單 ID
     */
    setupLiveValidation(formId) {
        const config = this.forms.get(formId);
        if (!config) return;

        const { element, validators } = config;

        Object.keys(validators).forEach(fieldName => {
            const field = element.querySelector(`[name="${fieldName}"]`);
            if (!field) return;

            // 失焦時驗證
            field.addEventListener('blur', () => {
                this.validateField(formId, fieldName);
            });

            // 輸入時清除錯誤
            field.addEventListener('input', () => {
                this.clearFieldError(formId, fieldName);
            });
        });
    }

    /**
     * 處理表單提交
     * @param {string} formId - 表單 ID
     * @param {Event} event - 提交事件
     */
    async handleSubmit(formId, event) {
        const config = this.forms.get(formId);
        if (!config) return;

        if (config.preventDefault) {
            event.preventDefault();
        }

        // 驗證表單
        const validation = this.validate(formId);

        if (!validation.valid) {
            // 顯示錯誤
            if (config.showErrors) {
                this.showErrors(formId, validation.errors);
            }

            // 調用錯誤回調
            if (config.onError) {
                config.onError(validation.errors);
            }

            // 觸發事件
            eventBus.emit('form:validation-failed', {
                formId,
                errors: validation.errors
            });

            return;
        }

        // 獲取表單數據
        const data = this.getData(formId);

        // 調用提交回調
        if (config.onSubmit) {
            try {
                await config.onSubmit(data, event);

                // 觸發事件
                eventBus.emit('form:submitted', { formId, data });
            } catch (error) {
                console.error('Form submission error:', error);

                if (config.onError) {
                    config.onError([error.message]);
                }

                eventBus.emit('form:submit-error', { formId, error });
            }
        }
    }

    /**
     * 驗證表單
     * @param {string} formId - 表單 ID
     * @returns {{valid: boolean, errors: Object}} 驗證結果
     */
    validate(formId) {
        const config = this.forms.get(formId);
        if (!config) {
            return { valid: false, errors: { _form: ['表單未找到'] } };
        }

        const { validators, onValidate } = config;
        const errors = {};
        let isValid = true;

        // 驗證每個字段
        Object.keys(validators).forEach(fieldName => {
            const result = this.validateField(formId, fieldName, false);
            if (!result.valid) {
                errors[fieldName] = result.errors;
                isValid = false;
            }
        });

        // 調用自定義驗證
        if (onValidate) {
            const customValidation = onValidate(this.getData(formId));
            if (customValidation && !customValidation.valid) {
                Object.assign(errors, customValidation.errors);
                isValid = false;
            }
        }

        return { valid: isValid, errors };
    }

    /**
     * 驗證單個字段
     * @param {string} formId - 表單 ID
     * @param {string} fieldName - 字段名稱
     * @param {boolean} showError - 是否顯示錯誤
     * @returns {{valid: boolean, errors: Array}} 驗證結果
     */
    validateField(formId, fieldName, showError = true) {
        const config = this.forms.get(formId);
        if (!config) {
            return { valid: false, errors: ['表單未找到'] };
        }

        const { element, validators, showErrors } = config;
        const field = element.querySelector(`[name="${fieldName}"]`);

        if (!field) {
            return { valid: false, errors: ['字段未找到'] };
        }

        const fieldValidators = validators[fieldName];
        if (!fieldValidators || fieldValidators.length === 0) {
            return { valid: true, errors: [] };
        }

        const value = field.value;
        const validations = fieldValidators.map(v => ({
            validator: v.validator,
            args: [value, ...(v.args || [])]
        }));

        const result = validateBatch(validations);

        if (!result.valid && showError && showErrors) {
            this.showFieldError(formId, fieldName, result.errors);
        }

        return result;
    }

    /**
     * 顯示字段錯誤
     * @param {string} formId - 表單 ID
     * @param {string} fieldName - 字段名稱
     * @param {Array} errors - 錯誤列表
     */
    showFieldError(formId, fieldName, errors) {
        const config = this.forms.get(formId);
        if (!config) return;

        const field = config.element.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        // 添加錯誤類別
        field.classList.add('error');

        // 創建或更新錯誤訊息
        let errorEl = field.parentElement.querySelector('.field-error');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'field-error';
            field.parentElement.appendChild(errorEl);
        }

        errorEl.textContent = errors[0] || '';
        errorEl.style.color = 'var(--error-color, #e74c3c)';
        errorEl.style.fontSize = '0.875rem';
        errorEl.style.marginTop = '4px';
    }

    /**
     * 清除字段錯誤
     * @param {string} formId - 表單 ID
     * @param {string} fieldName - 字段名稱
     */
    clearFieldError(formId, fieldName) {
        const config = this.forms.get(formId);
        if (!config) return;

        const field = config.element.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        field.classList.remove('error');

        const errorEl = field.parentElement.querySelector('.field-error');
        if (errorEl) {
            errorEl.remove();
        }
    }

    /**
     * 顯示所有錯誤
     * @param {string} formId - 表單 ID
     * @param {Object} errors - 錯誤對象
     */
    showErrors(formId, errors) {
        Object.keys(errors).forEach(fieldName => {
            if (fieldName === '_form') return;
            this.showFieldError(formId, fieldName, errors[fieldName]);
        });
    }

    /**
     * 清除所有錯誤
     * @param {string} formId - 表單 ID
     */
    clearErrors(formId) {
        const config = this.forms.get(formId);
        if (!config) return;

        const { validators } = config;
        Object.keys(validators).forEach(fieldName => {
            this.clearFieldError(formId, fieldName);
        });
    }

    /**
     * 獲取表單數據
     * @param {string} formId - 表單 ID
     * @returns {Object} 表單數據
     */
    getData(formId) {
        const config = this.forms.get(formId);
        if (!config) return {};

        const formData = new FormData(config.element);
        const data = {};

        for (const [key, value] of formData.entries()) {
            // 處理多選框
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }

        return data;
    }

    /**
     * 設置表單數據
     * @param {string} formId - 表單 ID
     * @param {Object} data - 數據對象
     */
    setData(formId, data) {
        const config = this.forms.get(formId);
        if (!config) return;

        Object.keys(data).forEach(key => {
            const field = config.element.querySelector(`[name="${key}"]`);
            if (field) {
                if (field.type === 'checkbox') {
                    field.checked = !!data[key];
                } else if (field.type === 'radio') {
                    const radio = config.element.querySelector(`[name="${key}"][value="${data[key]}"]`);
                    if (radio) radio.checked = true;
                } else {
                    field.value = data[key];
                }
            }
        });
    }

    /**
     * 重置表單
     * @param {string} formId - 表單 ID
     */
    reset(formId) {
        const config = this.forms.get(formId);
        if (!config) return;

        config.element.reset();
        this.clearErrors(formId);

        eventBus.emit('form:reset', { formId });
    }

    /**
     * 取消註冊表單
     * @param {string} formId - 表單 ID
     */
    unregister(formId) {
        const config = this.forms.get(formId);
        if (!config) return;

        this.clearErrors(formId);
        this.forms.delete(formId);

        eventBus.emit('form:unregistered', { formId });
    }
}

// 創建全域實例
export const formHandler = new FormHandler();

// 向後兼容的函數
export function registerForm(formId, config) {
    return formHandler.register(formId, config);
}

export function validateForm(formId) {
    return formHandler.validate(formId);
}

export function getFormData(formId) {
    return formHandler.getData(formId);
}

// 在開發環境中暴露到 window
if (typeof window !== 'undefined') {
    window.__formHandler = formHandler;
}

export default formHandler;
