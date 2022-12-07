import {combineReducers} from 'redux';

import books from '@modules/Books/reducer';
import utilityProcessStatuses from '@modules//UtilityProcessStatuses/reducer';

const rootReducer = combineReducers({
  books,
  utilityProcessStatuses,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
