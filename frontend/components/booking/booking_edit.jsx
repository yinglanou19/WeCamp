import React from "react";
import { connect } from "react-redux";
import { updateBooking } from "../../actions/booking_actions";
import { closeModal } from "../../actions/modal_actions";
function formatDate(input) {
  let year = input.substring(0, 4);
  let month = input.substring(5, 7);
  let day = input.substring(8, 10);
  return year + "-" + month + "-" + day;
}
class BookingEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: formatDate(this.props.booking.checkIn),
      check_out: formatDate(this.props.booking.checkOut),
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
    this.props.updateBooking(b).then(() => this.props.closeModal());
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
        <div className="" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>From: </div>
            <input
              type="date"
              value={this.state.check_in}
              onChange={this.update("check_in")}
            />
          </div>
          <div>
            <div>To: </div>
            <input
              type="date"
              value={this.state.check_out}
              onChange={this.update("check_out")}
            />
          </div>
          <div>
            <div>Guests: </div>
            <input
              type="number"
              step="1"
              value={this.state.num_guests}
              min="1"
              max={this.props.listing.maxCapacity}
              onChange={this.update("num_guests")}
            />
          </div>
          <input type="submit" value="change book!" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let booking = state.entities.bookingToBeEdited;
  let listing = state.entities.listings[booking.listingId];
  return {
    booking,
    listing
  };
};

const mapDispatchToProps = dispatch => ({
  updateBooking: booking => dispatch(updateBooking(booking)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingEdit);
