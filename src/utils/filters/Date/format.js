// 3rd Party Libraries
import moment from 'moment';

function format (date, format) {
    return date ? moment(date).format(format) : '';
}

export default format;
