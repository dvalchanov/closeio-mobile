import {List} from 'immutable';
import {handleActions} from 'redux-actions';

import {
  RECEIVE_LEADS,
  RECEIVE_LEAD,
} from './constants';

export default handleActions({
  [RECEIVE_LEADS]: (state, action) => {
    return List(action.payload.data);
  },
  [RECEIVE_LEAD]: (state, action) => {
    return state.unshift(action.payload);
  },
}, new List());
