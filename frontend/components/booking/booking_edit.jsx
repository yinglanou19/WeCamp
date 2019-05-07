import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import updateBooking from "../../actions/booking_actions";

class BookingEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: this.props.booking.checkIn,
      check_out: this.props.booking.checkOut,
      num_guests: this.props.booking.numGuests,
      id: this.props.booking.id,
      listing_id: this.props.booking.listingId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const b = Object.assign({}, this.state);
    this.props
      .updateBooking(b)
      .then(() => this.props.history.push("/bookings"));
  }

  // renderErrors() {
  //     return (
  //         <ul >
  //             {this.props.errors.map((error, i) => (
  //                 <li key={`error-${i}`}>{error}</li>
  //             ))}
  //         </ul>
  //     );
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            value={this.state.check_in}
            placeholder="Check In"
            onChange={this.update("check_in")}
          />
          <input
            type="date"
            value={this.state.check_out}
            placeholder="Check Out"
            onChange={this.update("check_out")}
          />
          <input
            type="number"
            step="1"
            min="1"
            max={this.props.listing.maxCapacity}
            praceholder="number of Guests"
            onChange={this.update("num_guests")}
          />
          <input type="submit" value="change book!" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let booking = state.entities.bookings[ownProps.match.params.bookingId];
  let listing = state.entities.listings[booking.listingId];
  return {
    booking,
    listing
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: () => dispatch(updateBooking())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookingEdit)
);
