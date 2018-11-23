/**
 * @author Philip
 * @reg_date 2018-03-16
 * @summary 정책 및 기획에 따라 공통으로 사용되는 validation 체크
 */

// Project Sources
import { VALIDATION } from 'constants/validation.constant';

export const validations = {
    getPattern (name) {
        return VALIDATION[name].pattern;
    },
    setRules (name, value, optionalValue) {
        let result = VALIDATION[name].required.message;
        if (name) {
            if (!value) {
                result = VALIDATION[name].required.message;
            }
            for (let i = 0; i < VALIDATION[name].regexes.length; i++) {
                if (!VALIDATION[name].regexes[i].rule.test(value)) {
                    result = VALIDATION[name].regexes[i].message;
                    break;
                }
            }
        }

        if (name === 'upw_confirmation' && value !== optionalValue) {
            result = VALIDATION.upw_confirmation.confirmed.message;
        }
        return result;
    },
    checkValidation (name, value, optionalValue) {
        let result = true;
        if (name) {
            if (!value) {
                result = false;
            }
            for (let i = 0; i < VALIDATION[name].regexes.length; i++) {
                if (!VALIDATION[name].regexes[i].rule.test(value)) {
                    result = false;
                    break;
                }
            }
        }

        if (name === 'upw_confirmation' && value !== optionalValue) {
            result = false;
        }
        return result;
    },
    checkValidationList (list) {
        let result = true;
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (!this.checkValidation(item.name, item.value)) {
                result = false;
                break;
            }
        }
        return result;
    },
};