import { RECEIVE_DRUMMERS } from '../actions';

export function artists(state = [], action) {
  switch (action.type) {
    case RECEIVE_DRUMMERS:
      return action.drummers;

    default:
      return state;
  }
}

export default artists;
