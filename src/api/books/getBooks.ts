import axios from '@api/utils/axios';

import {ApiBook} from '../utils/types';

interface Response {
  books: ApiBook[];
}

interface Params {
  searchQuery?: string;
}

interface ApiParams {
  q?: string;
}

export default function getBooks({searchQuery}: Params) {
  const params: ApiParams = {
    q: searchQuery || undefined,
  };

  return axios.get<Response>('/books', {
    params,
  });
}
