import {getState} from 'io/store';

export function getToken() {
  return (getState().currentUser || {}).token;
}
