import { RECEIVE_LISTING_ERRORS } from "../actions/listing_actions";

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
