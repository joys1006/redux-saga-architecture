import { Record } from 'immutable';
import { 
  put,
  call , 
  all, 
  takeEvery,  
} from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';

// API Services
import SampleService from 'services/Apis/sample.service';

const GET_TABLE_DATA_REQUEST = 'table/GET_TABLE_DATA_REQUEST';
const GET_TABLE_DATA_SUCCESS = 'table/GET_TABLE_DATA_SUCCESS';
const GET_TABLE_DATA_FAILURE = 'table/GET_TABLE_DATA_FAILURE';

export const getTableDataRequest = createAction(GET_TABLE_DATA_REQUEST);
export const getTableDataSuccess = createAction(GET_TABLE_DATA_SUCCESS);
export const getTableDataFailure = createAction(GET_TABLE_DATA_FAILURE);

export function* getTableData(action) {
    const response = yield call(SampleService.SampleTableData, action.payload);
    yield put(getTableDataSuccess(response));
};

export function* watchTableDataActions() {
    yield all([
        takeEvery(GET_TABLE_DATA_REQUEST, getTableData)
    ])
};

// 초기 상태를 정의합니다
const initialState = Record({
    data: [],
    loading: false,
})();

// 리듀서
const table = handleActions({
    [GET_TABLE_DATA_REQUEST]: (state, action) => {
        return state.set('loading', true);
    },
    [GET_TABLE_DATA_SUCCESS]: (state, action) => {
        return state
               .set('loading', false)
               .set('data', action.payload.results);
        
    },
    [GET_TABLE_DATA_FAILURE]: (state, action) => {
        console.error('통신에러');
        return state.set('loading', false);
    },
}, initialState);

export default table;