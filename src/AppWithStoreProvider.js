import React from 'react'
import AppWithNavigationState from './AppWithNavigationState'
import { Provider } from 'react-redux'
import store from './store'

const AppWithStoreProvider = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}

export default AppWithStoreProvider
