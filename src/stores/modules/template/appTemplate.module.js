import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const IS_MOBILE_ASIDE = 'appTemplate/IS_MOBILE_ASIDE';
const IS_LAYOUT = 'appTemplate/IS_LAYOUT';
const COLLAPSED_CHANGED = 'appTemplate/COLLAPSED_CHANGED';
const OPEN_KEYS = 'appTemplate/OPEN_KEYS';
const CHANGED_SELECTED_KEY = 'appTemplate/CHANGED_SELECTED_KEY';

export const isLayout = createAction(IS_LAYOUT);
export const isMobileAside = createAction(IS_MOBILE_ASIDE);
export const collapsedChanged = createAction(COLLAPSED_CHANGED);
export const openKeys = createAction(OPEN_KEYS);
export const changedSelectedKey = createAction(CHANGED_SELECTED_KEY);

// 초기 상태를 정의합니다
const initialState = Record({
    isLayout: false,
    menuSelectedKey: ['/'],
    openKeys: ['/'],
    collapsed: false,
    isMobileAside: false,
})();

/* 
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/
const appTemplate = handleActions({
    [IS_MOBILE_ASIDE]: (state, action) => {
        return state.set('isMobileAside', action.payload);
    },
    [IS_LAYOUT]: (state, action) => {
        return state.set('isLayout', action.payload);
    },
    [COLLAPSED_CHANGED]: (state, action) => {
        return state.set('collapsed', action.payload);
    },
    [OPEN_KEYS]: (state, action) => {
        return state.set('openKeys', action.payload)
    },
    [CHANGED_SELECTED_KEY]: (state, action) => {
        return state.set('menuSelectedKey', action.payload);
    },
}, initialState);


export default appTemplate;