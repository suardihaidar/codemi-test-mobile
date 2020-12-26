import {SET_ACTIVE_USER} from './constant';

export function setActiveUser(data) {
  return {
    type: SET_ACTIVE_USER,
    payload: data,
  };
}
