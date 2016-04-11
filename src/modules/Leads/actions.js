import {createAction} from 'redux-actions';
import http from 'io/lib/http';

import {
  FETCH_LEADS,
} from './api';

import {
  RECEIVE_LEADS,
  RECEIVE_LEAD,
} from './constants';

export const receiveLeads = createAction(RECEIVE_LEADS);
export const receiveLead = createAction(RECEIVE_LEAD);

export async function fetchLeads(params) {
  return await http(FETCH_LEADS);
}
