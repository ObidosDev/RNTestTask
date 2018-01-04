import _ from 'lodash'
import {
  ITEMS_FETCH_IN_PROGRESS,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_ERROR
} from '../actions'

const _mergeQueryTree = (state, query, newData) => {
  let result = {}
  result[`${query}`] = newData
  if (_.has(state, `${query}`)) {
    result[`${query}`] = Object.assign(
      {},
      state[`${query}`],
      result[`${query}`]
    )
  }
  return result
}

const _mergeItems = (isRefresh, currentItems, newItems) => {
  let result = undefined
  if (isRefresh || currentItems === undefined) {
    result = newItems
  } else {
    result = currentItems.concat(newItems)
  }
  return result
}

export default function(state = {}, action) {
  switch (action.type) {
    case ITEMS_FETCH_IN_PROGRESS: {
      let rootQuery = _mergeQueryTree(state, action.query, {
        inProgress: action.value
      })
      return Object.assign({}, state, rootQuery)
    }
    case ITEMS_FETCH_SUCCESS: {
      let rootQuery = {}
      rootQuery[`${action.query}`] = {
        inProgress: false,
        error: undefined,
        items: _mergeItems(
          action.isRefresh,
          _.has(state, `${action.query}.items`)
            ? state[`${action.query}`].items
            : undefined,
          action.result.items
        ),
        hasMore: action.result.has_more,
        nextPage: _.has(state, `${action.query}.nextPage`)
          ? state[`${action.query}`].nextPage + 1
          : 2
      }
      return Object.assign({}, state, rootQuery)
    }
    case ITEMS_FETCH_ERROR: {
      alert(JSON.stringify(action.message))
      let rootQuery = _mergeQueryTree(state, action.query, {
        inProgress: false,
        error: action.message
      })
      return Object.assign({}, state, rootQuery)
    }
  }
  return state
}
