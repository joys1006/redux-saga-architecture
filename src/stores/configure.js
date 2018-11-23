import {
    createStore,
    applyMiddleware
} from 'redux';
import modules, { rootSaga } from './modules';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

const logger = createLogger();
const saga = createSagaMiddleware();

const configure = () => {
  const store = createStore(modules, applyMiddleware(saga, logger));

  store.runSaga = saga.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
}

export default configure;