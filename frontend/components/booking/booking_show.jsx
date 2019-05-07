import React from "react";
export default function BookingShow({ booking, listing, deleteBooking }) {
  return (
    <div>
      <h1>{listing.title}</h1>
      <h1>{booking.checkIn}</h1>
      <h1>{booking.checkOut}</h1>
      <h1>{booking.id}</h1>
      <button onClick={() => deleteBooking(booking.id)}>Delete</button>
      <a href={`/#/bookings/${booking.id}`}>edit this booking!</a>
    </div>
  );
}
