import BookSelectors from './book';

import getBooksIds from './getBooksIds';

const BooksSelectors = Object.freeze({
  book: BookSelectors,

  getBooksIds,
});

export default BooksSelectors;
