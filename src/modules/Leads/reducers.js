import {List} from 'immutable';
import {handleActions} from 'redux-actions';

import {
  RECEIVE_LEADS,
} from './constants';

export default handleActions({
  [RECEIVE_LEADS]: (state, action) => {
    return List(action.payload.data);
  },
}, new List());
