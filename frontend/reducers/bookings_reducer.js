import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  REMOVE_BOOKING
} from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, action.bookings);
    case RECEIVE_BOOKING:
      let l = action.booking;
      return Object.assign({}, state, { [l.id]: l });
    case REMOVE_BOOKING:
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
