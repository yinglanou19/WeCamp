import { connect } from "react-redux";
import { fetchBookings, deleteBooking } from "../../actions/booking_actions";
import React from "react";
import BookingShow from "./booking_show";
import { fetchListings } from "../../actions/listing_actions";
import { openModal } from "../../actions/modal_actions";
import { receiveBookingToEdit } from "../../actions/booking_actions";
import "./booking_collection.css";
class BookingCollection extends React.Component {
  componentDidMount() {
    this.props.fetchListings().then(this.props.fetchBookings);
    // this.props.fetchBookings();
  }

  render() {
    return (
      this.props.listings &&
      this.props.bookings && (
        <ul className="booking-collection-ul">
          {this.props.bookings.map(booking => (
            <li key={booking.id}>
              <BookingShow
                booking={booking}
                listing={this.props.listings[booking.listingId]}
                deleteBooking={this.props.deleteBooking}
                openModal={this.props.openModal}
                receiveEditBooking={this.props.receiveEditBooking}
              />
            </li>
          ))}
        </ul>
      )
    );
  }
}

const mapStateToProps = ({ entities }) => {
  return {
    bookings: Object.values(entities.bookings),
    listings: entities.listings
  };
};
const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id)),
  fetchListings: () => dispatch(fetchListings()),
  openModal: formType => dispatch(openModal(formType)),
  receiveEditBooking: booking => {
    dispatch(receiveBookingToEdit(booking));
    dispatch(openModal("edit_booking"));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingCollection);
