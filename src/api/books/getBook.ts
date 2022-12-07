import axios from '@api/utils/axios';

import {ApiBook} from '../utils/types';

interface Response {
  book: ApiBook;
}

interface Params {
  bookId: string;
}

export default function getBook({bookId}: Params) {
  return axios.get<Response>(`/books/${bookId}`, {});
}
