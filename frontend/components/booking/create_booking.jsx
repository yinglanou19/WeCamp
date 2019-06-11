import React from "react";
import { connect } from "react-redux";
import { addBooking } from "../../actions/booking_actions";
import { withRouter } from "react-router-dom";
import "./create_booking.css";
import Errors from "../errors/errors";
class BookingCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: "",
      check_out: "",
      num_guests: "",
      listing_id: this.props.listingId
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
    this.props.addBooking(b).then(() => this.props.history.push("/bookings"));
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
      <div className="create-book-form-container">
        <div className="create-book-price-container">
          <div>${this.props.price}</div>
          <div className="create-book-per-night">per night</div>
        </div>
        <div className="create-book-error-container">
          <Errors errors={this.props.errors} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="create-book-data-container">
            <div className="booking-data-item-container">
              <div className="booking-data-title-div">Check in</div>
              <input
                type="date"
                value={this.state.check_in}
                placeholder="Check In"
                onChange={this.update("check_in")}
              />
            </div>
            <div className="booking-data-item-container">
              <div className="booking-data-title-div">Check out</div>
              <input
                type="date"
                value={this.state.check_out}
                placeholder="Check Out"
                onChange={this.update("check_out")}
              />
            </div>
            <div className="booking-data-item-container">
              <div className="booking-data-title-div">Guests</div>
              <input
                type="number"
                step="1"
                min="1"
                max={this.props.maxGuests}
                placeholder={`Max: ${this.props.maxGuests}`}
                onChange={this.update("num_guests")}
              />
            </div>
          </div>
          <div className="create-book-button-container">
            <input
              type="submit"
              value="Create booking"
              className="create-book-submit"
            />
          </div>
        </form>
      </div>

      // <div>
      //   <h1>Booking create Form</h1>
      //   <form onSubmit={this.handleSubmit}>
      //     <input
      //       type="date"
      //       value={this.state.check_in}
      //       placeholder="Check In"
      //       onChange={this.update("check_in")}
      //     />
      //     <input
      //       type="date"
      //       value={this.state.check_out}
      //       placeholder="Check Out"
      //       onChange={this.update("check_out")}
      //     />
      //     <input
      //       type="number"
      //       step="1"
      //       praceholder="number of Guests"
      //       onChange={this.update("num_guests")}
      //     />
      //     <input type="submit" value="Create booking" />
      //   </form>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors.booking
});

const mapDispatchToProps = dispatch => ({
  addBooking: booking => dispatch(addBooking(booking))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookingCreateForm)
);
