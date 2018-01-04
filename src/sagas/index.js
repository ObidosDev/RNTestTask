import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from './Api'
import {
  AUTH_IN_PROGRESS,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_ERROR,
  ITEMS_FETCH,
  ITEMS_FETCH_IN_PROGRESS,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_ERROR
} from '../actions'

function* login(action) {
  try {
    yield put({ type: AUTH_IN_PROGRESS, value: true })

    const loginResult = action.nickname === action.password

    if (loginResult) {
      yield put({
        type: AUTH_LOGIN_SUCCESS,
        nickname: action.nickname
      })
      yield put({
        type: 'Login'
      })
    } else {
      yield put({
        type: AUTH_LOGIN_ERROR,
        message: 'Wrong credentials'
      })
      alert('Wrong credentials')
    }
  } catch (e) {
    yield put({ type: AUTH_LOGIN_ERROR, message: e.message })
  }
}

function* logout(action) {
  try {
    yield put({ type: AUTH_IN_PROGRESS, value: true })
    yield put({ type: AUTH_LOGOUT_SUCCESS })
  } catch (e) {
    yield put({ type: AUTH_LOGOUT_ERROR, message: e.message })
  }
}

function* fetchItems(action) {
  try {
    yield put({
      type: ITEMS_FETCH_IN_PROGRESS,
      value: true,
      query: action.query
    })

    const fetchResult = yield call(Api.fetchItems, {
      query: action.query,
      after: action.after
    })
    yield put({
      type: ITEMS_FETCH_SUCCESS,
      result: fetchResult,
      query: action.query,
      isRefresh: !action.after
    })
  } catch (e) {
    yield put({
      type: ITEMS_FETCH_ERROR,
      message: e.message,
      query: action.query
    })
  }
}

function* rootSaga() {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  yield takeEvery(ITEMS_FETCH, fetchItems)
}

export default rootSaga
