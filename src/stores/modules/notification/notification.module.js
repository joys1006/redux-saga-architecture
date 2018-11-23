import { Record } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const IS_NOTIFICATION = 'notification/IS_NOTIFICATION';
const SET_MESSAGE = 'notification/SET_MESSAGE';

export const is_notification = createAction(IS_NOTIFICATION);
export const set_message = createAction(SET_MESSAGE);

// 초기 상태를 정의합니다
const initialState = Record({
    visible: false,
    messages: {
        main: [
            {
                id: 132123,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 32421,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 123123,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 23432,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 12445,
                name: '알림테스트1',
                desc: '알림내용 1',
            }
        ],
        normal: [
            {
                id: 132123,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 32421,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 123123,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 23432,
                name: '알림테스트1',
                desc: '알림내용 1',
            },
            {
                id: 12445,
                name: '알림테스트1',
                desc: '알림내용 1',
            }
        ],
    },
})();

const notification = handleActions({
    [IS_NOTIFICATION]: (state, action) => {
        return state.set('visible', action.payload);
    },
    [SET_MESSAGE]: (state, action) => {
        return state.set('messages', action.payload);
    },
}, initialState);


export default notification;