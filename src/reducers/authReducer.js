import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_IN_PROGRESS,
  AUTH_LOGOUT_SUCCESS
} from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH_IN_PROGRESS:
      return Object.assign({}, state, {
        inProgress: action.value
      })
    case AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        inProgress: false,
        user: {
          nickname: action.nickname
        }
      })
    case AUTH_LOGIN_ERROR:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.message,
        user: false
      })
    case AUTH_LOGIN_ERROR:
      return Object.assign({}, state, {
        inProgress: false,
        error: action.message,
        user: false
      })
    case AUTH_LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        inProgress: false,
        user: false
      })
  }
  return state
}
