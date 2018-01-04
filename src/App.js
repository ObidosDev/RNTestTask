import React from 'react'
import PropTypes from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'
import RootNavigator from './Navigation'

const App = ({ dispatch, nav }) => {
  return (
    <RootNavigator
      navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav
      })}
    />
  )
}

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
}

export default App
