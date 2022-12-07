import {RootState} from 'src/rootReducer';

import rootSelector from './rootSelector';

export default (bookId: string) => (state: RootState) =>
  rootSelector(state, bookId).publisher;
