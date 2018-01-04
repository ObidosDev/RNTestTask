export const AUTH_IN_PROGRESS = 'AUTH_IN_PROGRESS'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR'

export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_ERROR = 'AUTH_LOGOUT_ERROR'

export const ITEMS_FETCH = 'ITEMS_FETCH'
export const ITEMS_FETCH_IN_PROGRESS = 'ITEMS_FETCH_IN_PROGRESS'
export const ITEMS_FETCH_SUCCESS = 'ITEMS_FETCH_SUCCESS'
export const ITEMS_FETCH_ERROR = 'ITEMS_FETCH_ERROR'

export function login({ nickname, password }) {
  return { type: AUTH_LOGIN, nickname, password }
}

export function logout() {
  return { type: AUTH_LOGOUT }
}

export function fetchItems({ query, after }) {
  return { type: ITEMS_FETCH, query, after }
}
