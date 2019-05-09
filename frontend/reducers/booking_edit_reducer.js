import { RECEIVE_BOOKING_TO_EDIT } from "../actions/booking_actions";
const bookingEditReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_TO_EDIT:
      return Object.assign({}, state, action.booking);
    default:
      return state;
  }
};

export default bookingEditReducer;
