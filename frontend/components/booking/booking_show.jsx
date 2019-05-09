import React from "react";
import "./booking_show.css";
import ListingPreview from "../listing/list_preview";

function formatDate(input) {
  let year = input.substring(0, 4);
  let month = input.substring(5, 7);
  let day = input.substring(8, 10);

  return year + "/" + month + "/" + day;
}

export default function BookingShow({
  booking,
  listing,
  deleteBooking,
  receiveEditBooking
}) {
  let indate = new Date(formatDate(booking.checkIn));
  let outdate = new Date(formatDate(booking.checkOut));
  return (
    <div>
      <div className="booking-show-dummy-div" />
      <div className="booking-show-container">
        <div className="booking-show-listing-div">
          <ListingPreview listing={listing} />
        </div>
        <div className="booking-info-div">
          <div className="booking-show-nums">
            <div>
              <div>
                {indate.getMonth() +
                  1 +
                  "/" +
                  indate.getDate() +
                  "/" +
                  indate.getFullYear()}
              </div>
              <div id="to">TO</div>
              <div>
                {outdate.getMonth() +
                  1 +
                  "/" +
                  outdate.getDate() +
                  "/" +
                  outdate.getFullYear()}
              </div>
            </div>
            <div className="booking-show-guests">
              {"Guests: " + booking.numGuests}
            </div>
          </div>
          <div className="booking-show-buttons">
            <button onClick={() => deleteBooking(booking.id)}>Delete</button>

            {/* href={`/#/bookings/${booking.id}`} */}
            <button onClick={() => receiveEditBooking(booking)}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
