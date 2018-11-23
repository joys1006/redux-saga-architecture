import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const setColor = createAction(SET_COLOR);

// 초기 상태를 정의합니다
const initialState = Record({
    color: 'black',
    number: 0
})();

/* 
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/
const counter = handleActions({
    [INCREMENT]: (state, action) => {
        return state.set('number', state.get('number') + 1);
    },
    [DECREMENT]: (state, action) => {
        return state.set('number', state.get('number') - 1);
    },
    [SET_COLOR]: (state, action) => {
        return state.set('color', action.payload);
    },
}, initialState);


export default counter;