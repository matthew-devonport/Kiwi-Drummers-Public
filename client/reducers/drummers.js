import { RECEIVE_DRUMMERS } from '../actions';

export function drummers(state = [], action) {
  switch (action.type) {
    case RECEIVE_DRUMMERS:
      return action.drummers;

    default:
      return state;
  }
}

export default drummers;
