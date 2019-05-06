import React from "react";
import { connect } from "react-redux";
import { addBooking } from "../../actions/booking_actions";
import { withRouter } from "react-router-dom";
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
      <div>
        <h1>Booking create Form</h1>
        <h2>{this.p}</h2>
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
            praceholder="number of Guests"
            onChange={this.update("num_guests")}
          />
          <input type="submit" value="Create booking" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  p: state
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
