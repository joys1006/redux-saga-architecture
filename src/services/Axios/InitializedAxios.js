// 3rd Party Libraries
import axios from 'axios';

const _axios = axios.create({
    baseURL: '/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

_axios.interceptors.request.use(
    (config) => {
        // eslint-disable-next-line no-console
        console.log('interceptorRequest', config);
        const token = sessionStorage.getItem('loginInfo') ? 'Bearer ' + JSON.parse(sessionStorage.getItem('loginInfo')).token : null;
        config.headers.Authorization = token || '';
        return config;
    },
    (error) => {
        // eslint-disable-next-line no-console
        console.log('interceptorRequestError', error);
        error = {
            status: 400,
            title: '에러',
            message: '잘못된 요청입니다.',
        };
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    (response) => {
        // eslint-disable-next-line no-console
        console.log('interceptorResponse', response);
        const responseData = response.data;
        if (parseInt(response.status, 10) === 200) {
            return responseData;
        } else if (
            parseInt(responseData.code, 10) === 401 || parseInt(responseData.code, 10) === 403 || responseData.message === 'token_not_provided'
        ) {
            sessionStorage.removeItem('loginInfo');
        } else {
            const error = {
                status: response.status || 500,
                title: '에러',
                message: responseData.data.message || '잠시 후 다시 시도해주세요.',
            };
            return Promise.reject(error);
        }
    },
    (error) => {
        // eslint-disable-next-line no-console
        console.log('interceptorResponseError', error);
        if (error.response) {
            const status = error.response.status;
            let statusCode = parseInt(status, 10);
            if (statusCode === 401 || statusCode === 403) {
                sessionStorage.removeItem('userInfo');
            }
        } else {
            if (error.message.indexOf('timeout') >= 0) {
                error = {
                    status: 400,
                    title: '요청시간이 초과되었습니다.',
                    message: '잠시 후 다시 이용해주세요.',
                };
            } else if (error.message.indexOf('Network Error') >= 0) {
                error = {
                    status: 400,
                    title: '네트워크 연결이 원활하지 않습니다.',
                    message: '잠시 후 다시 이용해주세요.',
                };
            } else {
                error = {
                    status: error.status || 500,
                    title: error.title || '네트워크 연결이 원활하지 않습니다.',
                    message: error.message || '잠시후 다시 이용해주세요.',
                };
            }
            return Promise.reject(error);
        }
    }
);

export default _axios;
