import { RECEIVE_BOOKING_ERRORS } from "../actions/booking_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
