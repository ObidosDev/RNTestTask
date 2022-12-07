import produce from 'immer';

import BooksActions from '../actions';

import {ApiBook} from '@api/utils/types';

export interface State {
  items: {
    [bookId: string]: ApiBook;
  };

  ids: string[];
}

const actionCreatorBookLoad = BooksActions.BOOK_LOAD(null).SUCCESS.create;

type Actions =
  | ReturnType<typeof BooksActions.BOOKS_LOAD.SUCCESS.create>
  | ReturnType<typeof actionCreatorBookLoad>;

const INITIAL_STATE: State = {
  items: {},
  ids: [],
};

function reducer(state = INITIAL_STATE, action: Actions): State {
  return produce(state, draft => {
    switch (action.type) {
      case BooksActions.BOOKS_LOAD.SUCCESS.type:
        {
          const {books, bookIds} = action.payload;

          draft.items = {
            ...draft.items,
            ...books,
          };

          draft.ids = bookIds;
        }
        break;

      case BooksActions.BOOK_LOAD(null).SUCCESS.type:
        {
          const {book} = action.payload;

          draft.items[book.id] = book;
        }
        break;
    }
  });
}

export default reducer;
