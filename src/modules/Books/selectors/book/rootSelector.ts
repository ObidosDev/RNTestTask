import rootSelector from '../rootSelector';

import {RootState} from 'src/rootReducer';

export default (state: RootState, bookId: string) =>
  rootSelector(state).items[bookId];
