import {RootState} from 'src/rootReducer';

import rootSelector from './rootSelector';

export default (state: RootState) => rootSelector(state).ids;
