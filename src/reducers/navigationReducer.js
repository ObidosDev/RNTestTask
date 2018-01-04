import RootNavigator from '../Navigation'
import { NavigationActions } from 'react-navigation'

import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } from '../actions'

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Login')
)
const initialStateMain = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Main')
)

const navigationReducer = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Main' })]
        }),
        state
      )
      break
    case AUTH_LOGOUT_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.init({ routeName: 'Login' }),
        undefined
      )
      break
    default:
      nextState = RootNavigator.router.getStateForAction(action, state)
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

export default navigationReducer
