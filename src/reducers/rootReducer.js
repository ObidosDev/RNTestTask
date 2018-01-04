import { combineReducers } from 'redux'

import navigationReducer from './navigationReducer'
import authReducer from './authReducer'
import itemsReducer from './itemsReducer'

const rootReducer = combineReducers({
  nav: navigationReducer,
  auth: authReducer,
  items: itemsReducer
})

export default rootReducer
