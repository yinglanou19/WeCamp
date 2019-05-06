import * as BookingAPIUtil from "../util/bookings_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

const removeBooking = id => ({
  type: REMOVE_BOOKING,
  id
});

export const addBooking = booking => dispatch => {
  return BookingAPIUtil.addBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const fetchBookings = () => dispatch => {
  return BookingAPIUtil.fetchBookings().then(bookings =>
    dispatch(receiveBookings(bookings))
  );
};

export const deleteBooking = id => dispatch => {
  return BookingAPIUtil.deleteBooking(id).then(id =>
    dispatch(removeBooking(id))
  );
};

export const updateBooking = booking => dispatch => {
  return BookingAPIUtil.updateBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};
