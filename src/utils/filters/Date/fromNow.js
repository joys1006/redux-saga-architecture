// 3rd Party Libraries
import moment from 'moment';

function fromNow (date) {
    let result = '';
    if (date) {
        if (moment().diff(moment(date).format('YYYY-MM-DD'), 'year') > 0) {
            result = moment().diff(moment(date).format('YYYY-MM-DD'), 'year') + '년 전';
        } else if (moment().diff(moment(date).format('YYYY-MM-DD'), 'weeks') > 0) {
            result = moment().diff(moment(date).format('YYYY-MM-DD'), 'weeks') + '주 전';
        } else if (moment().diff(moment(date).format('YYYY-MM-DD'), 'days') > 0) {
            result = moment().diff(moment(date).format('YYYY-MM-DD'), 'days') + '일 전';
        } else if (moment().diff(date, 'hours') > 0) {
            result = moment().diff(date, 'hours') + '시간 전';
        } else if (moment().diff(date, 'minute') >= 10) {
            result = moment().diff(date, 'minute') + '분 전';
        } else {
            result = '방금 전';
        }
    }
    return result;
}

export default fromNow;
