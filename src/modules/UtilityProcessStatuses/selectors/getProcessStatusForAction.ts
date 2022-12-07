import rootSelector from './rootSelector';

import {ActionData} from '../reducer';
import {Action} from '../types';
import {RootState} from 'src/rootReducer';

export default (action: Action) =>
  (state: RootState): ActionData | undefined => {
    const actionData = rootSelector(state)[action.majorType];

    if (action.id) {
      return (
        actionData as
          | {
              [key: string]: ActionData | undefined;
            }
          | undefined
      )?.[action.id];
    }

    return actionData as ActionData | undefined;
  };
