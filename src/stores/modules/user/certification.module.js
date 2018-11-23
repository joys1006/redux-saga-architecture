import { Record } from 'immutable';
import {
    put,
    call,
    all,
    takeLatest,
} from 'redux-saga/effects';
import { createAction, hanldeActions } from 'redux-actions';

// API Services


const GET_CERTIFICATION_REQUEST = 'certification/GET_CERTIFICATION_REQUEST';
const GET_CERTIFICATION_SUCCESS = 'certification/GET_CERTIFICATION_SUCCESS';
const GET_CERTIFICATION_FAILURE = 'certification/GET_CERTIFICATION_FAILURE';

export const getCertificationRequest = createAction(GET_CERTIFICATION_REQUEST);
export const getCertificationSuccess = createAction(GET_CERTIFICATION_SUCCESS);
export const getCertificationFailure = createAction(GET_CERTIFICATION_FAILURE);

export function* getCertificationData (action) {
    try {
        const response = yield call(UserService.postLoginInfo, action.payload);
        yield put(setCertificationSuccess(response));
    } catch (err) {
        yield put(setCertificationFailure(err));
    }
}

export function* actionWatcher() {
    yield takeLatest(GET_CERTIFICATION_REQUEST, getCertificationData);
}

export function* watchUserActions() {
    yield all([
        actionWatcher()
    ])
}

// 초기 상태를 정의합니다
const initialState = Record({
    loading: false,
    loginInfo: {},
})();


const certification = handleActions({
    [GET_CERTIFICATION_REQUEST]: (state, action) => {
        console.log('요청');
        return state.set('loading', true);
    },
    [GET_CERTIFICATION_SUCCESS]: (state, action) => {
        console.log('성공', action.payload);
        return state.set('loginInfo', action.payload.data)
                    .set('loading', false);
    },
    [SET_LOGIN_FAILURE]: (state, action) => {
        console.log('에러');
        return state.set('loginInfo', action.payload.data)
                    .set('loading', false);
    },
    [GET_CERTIFICATION_FAILURE]: (state, action) => {
        console.log('로그아웃');
        return state.set('loginInfo', action.payload);
    },
}, initialState);


export default certification;