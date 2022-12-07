import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const arrayMiddleware = [];
arrayMiddleware.push(sagaMiddleware);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  arrayMiddleware.push(createDebugger());
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...arrayMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default {
  store,
};
