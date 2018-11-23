/**
 * @author Philip
 * @reg_date 2018-08-22
 * @summary 숫자 콤마 및 통화 표기 필터
 * @param {Number} number
 * @param {String} currency 통화 구분 기호
 * @returns {String} ex)1,000원
 * @description 천원단위 숫자 콤마 표시 및 통화 단위 표시
 * 통화 단위 : kr = 원
 *
 */
function comma (number, currency) {
    let result = 0;

    if (number && !isNaN(number)) {
        let splitNumbers = number.toString().split('.');
        result = splitNumbers[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (splitNumbers[1] ? '.' + splitNumbers[1] : '');
    }

    switch (currency) {
        case 'kr' :
            result += '원';
            break;
    }
    return result;
}

export default comma;
