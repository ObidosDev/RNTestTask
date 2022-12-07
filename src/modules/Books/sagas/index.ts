import {all, takeLatest} from 'redux-saga/effects';
import {takeLatestEveryUnique} from '@modules/utils/sagas/effects';

import BooksActions from '../actions';

import loadBookSaga from './loadBookSaga';
import loadBooksSaga from './loadBooksSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(BooksActions.BOOKS_LOAD.START.type, loadBooksSaga),

    takeLatestEveryUnique(
      BooksActions.BOOK_LOAD(null).START.type,
      loadBookSaga,
    ),
  ]);
}
