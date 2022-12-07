import {put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import BooksActions from '../actions';

import {ApiBook} from '@api/utils/types';

import Api from '@api/index';

export default function* loadBooksSaga(
  action: ReturnType<typeof BooksActions.BOOKS_LOAD.START.create>,
) {
  const {searchQuery} = action.payload;

  try {
    const {
      data: {books},
    }: Awaited<ReturnType<typeof Api.books.getBooks>> =
      yield Api.books.getBooks({
        searchQuery,
      });

    const newBooksByIds: {
      [key: string]: ApiBook;
    } = {};

    books.forEach(apiBook => {
      newBooksByIds[apiBook.id] = apiBook;
    });

    yield put(
      BooksActions.BOOKS_LOAD.SUCCESS.create({
        books: newBooksByIds,
        bookIds: books.map(({id}) => id),
      }),
    );
  } catch (error) {
    Alert.alert('Error', error.message);

    yield put(BooksActions.BOOKS_LOAD.FAILED.create(error.message));
  }
}
