export const addBooking = booking =>
  $.ajax({
    method: "post",
    url: "/api/bookings",
    data: { booking }
  });

export const deleteBooking = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/bookings/${id}`
  });

export const updateBooking = booking =>
  $.ajax({
    method: "PATCH",
    url: `/api/bookings/${booking.id}`,
    data: { booking }
  });

export const fetchBookings = () =>
  $.ajax({
    method: "get",
    url: "/api/bookings"
  });
