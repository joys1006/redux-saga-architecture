/**
 * @author Philip
 * @reg_date 2018-08-22
 * @summary 소수 고정 표기 필터
 */

function toFixed (number, length) {
    let result = 0;

    if (number && !isNaN(number)) {
        result = parseFloat(number).toFixed(length);
    }
    return result;
}

export default toFixed;
