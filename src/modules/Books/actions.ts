import {createAction} from '../utils/actions/createAction';

import {ApiBook} from '@api/utils/types';

const BOOKS_LOAD = createAction('BOOKS/BOOKS_LOAD', {
  START: (payload: {searchQuery: string}) => payload,
  SUCCESS: (payload: {
    books: {
      [key: string]: ApiBook;
    };
    bookIds: string[];
  }) => payload,
  FAILED: (errorMessage: string) => ({
    errorMessage,
  }),
});

const BOOK_LOAD = createAction(
  'BOOKS/BOOK_LOAD',
  {
    START: (payload: {bookId: string}) => payload,
    SUCCESS: (payload: {book: ApiBook}) => payload,
    FAILED: (errorMessage: string) => ({
      errorMessage,
    }),
  },
  {
    isMultiInstanceProcess: true,
  },
);

const BooksActions = Object.freeze({
  BOOKS_LOAD,
  BOOK_LOAD,
});

export default BooksActions;
