import React from 'react'
import AppWithNavigationState from './AppWithNavigationState'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(rootReducer, {}, applyMiddleware(...middleware))

const AppWithStoreProvider = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

sagaMiddleware.run(rootSaga)

export default AppWithStoreProvider
