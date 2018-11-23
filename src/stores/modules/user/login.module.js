import { Record } from 'immutable';
import { 
  put,
  call,
  all, 
  takeLatest,
} from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';

// API Services
import UserService from 'services/Apis/account/user.service';

const SET_LOGIN_REQUEST = 'login/SET_LOGIN_REQUEST';
const SET_LOGIN_SUCCESS = 'login/SET_LOGIN_SUCCESS';
const SET_LOGIN_FAILURE = 'login/SET_LOGIN_FAILURE';
const DELETE_LOGOUT = 'login/DELETE_LOGOUT';

export const setLoginRequest = createAction(SET_LOGIN_REQUEST);
export const setLoginSuccess = createAction(SET_LOGIN_SUCCESS);
export const setLoginFailure = createAction(SET_LOGIN_FAILURE);
export const deleteLogout = createAction(DELETE_LOGOUT);

export function* postLoginData(action) {
    try {
        const response = yield call(UserService.postLoginInfo, action.payload);
        yield put(setLoginSuccess({data:{token:'##@#!@#@!'}}));
    } catch (err) {
        yield put(setLoginFailure(err));
    }
}

export function* actionWatcher() {
    yield takeLatest(SET_LOGIN_REQUEST, postLoginData);
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


const login = handleActions({
    [SET_LOGIN_REQUEST]: (state, action) => {
        console.log('요청');
        return state.set('loading', true);
    },
    [SET_LOGIN_SUCCESS]: (state, action) => {
        console.log('성공', action.payload);
        return state.set('loginInfo', action.payload.data)
                    .set('loading', false);
    },
    [SET_LOGIN_FAILURE]: (state, action) => {
        console.log('에러');
        return state.set('loginInfo', action.payload.data)
                    .set('loading', false);
    },
    [DELETE_LOGOUT]: (state, action) => {
        console.log('로그아웃');
        return state.set('loginInfo', action.payload);
    },
}, initialState);


export default login;