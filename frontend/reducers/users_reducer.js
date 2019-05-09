import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_HOST } from "../actions/listing_actions";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_HOST:
      return Object.assign({}, state, { [action.host.id]: action.host });
    default:
      return state;
  }
};

export default usersReducer;
