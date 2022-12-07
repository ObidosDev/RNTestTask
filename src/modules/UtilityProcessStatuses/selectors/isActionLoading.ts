import getProcessStatusForAction from './getProcessStatusForAction';

import {Action} from '../types';
import {RootState} from 'src/rootReducer';

export default (action: Action) => (state: RootState) => {
  const requestData = getProcessStatusForAction(action)(state);

  return requestData?.status === 'START';
};
