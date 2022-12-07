import {put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import BooksActions from '../actions';

import Api from '@api/index';

const actionCreator = BooksActions.BOOK_LOAD(null).START.create;

export default function* loadBookSaga(
  action: ReturnType<typeof actionCreator>,
) {
  const {bookId} = action.payload;

  try {
    const {
      data: {book},
    }: Awaited<ReturnType<typeof Api.books.getBook>> = yield Api.books.getBook({
      bookId,
    });

    yield put(
      BooksActions.BOOK_LOAD(action.id).SUCCESS.create({
        book,
      }),
    );
  } catch (error) {
    Alert.alert('Error', error.message);

    yield put(BooksActions.BOOK_LOAD(action.id).FAILED.create(error.message));
  }
}
