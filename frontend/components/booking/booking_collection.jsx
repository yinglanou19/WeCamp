import { connect } from "react-redux";
import { fetchBookings } from "../../actions/booking_actions";
import React from "react";
import BookingShow from "./booking_show";
import { deleteBooking } from "../../actions/booking_actions";
class BookingCollection extends React.Component {
  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    return (
      this.props.bookings && (
        <ul>
          {this.props.bookings.map(booking => (
            <li key={booking.id}>
              <BookingShow
                booking={booking}
                listing={this.props.listings[booking.listingId]}
                deleteBooking={this.props.deleteBooking}
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
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingCollection);
