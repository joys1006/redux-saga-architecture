import {
    combineReducers
} from 'redux';
import { all } from 'redux-saga/effects';

// modules
import counter from './example/counter.module';
import table, { watchTableDataActions } from './example/table.module';
import appTemplate from './template/appTemplate.module';
import device from './device/device.module';
import notification from './notification/notification.module';
import login, { watchUserActions } from './user/login.module';

// Saga
export function* rootSaga() {
    yield all([
        watchTableDataActions(),
        watchUserActions()
    ])
}

export default combineReducers({
    counter,
    table,
    appTemplate,
    device,
    notification,
    login,
});