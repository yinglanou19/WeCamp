import React from "react";
import { connect } from "react-redux";
import { addListing } from "../../actions/listing_actions";
class ListingCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      long: "",
      lat: "",
      address: "",
      daily_price: "",
      max_capacity: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  renderErrors() {
    return (
      <ul className="listing-create-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const l = Object.assign({}, this.state);
    this.props.addListing(l).then(() => this.props.history.push("/"));
  }
  render() {
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update("title")}
          />
          <br />
          <input
            type="textarea"
            value={this.state.description}
            placeholder="Description"
            onChange={this.update("description")}
          />
          <br />
          <input
            type="number"
            step="0.000001"
            value={this.state.long}
            placeholder="Longitude"
            onChange={this.update("long")}
          />
          <input
            type="number"
            step="0.000001"
            value={this.state.lat}
            placeholder="Latitude"
            onChange={this.update("lat")}
          />
          <input
            type="text"
            value={this.state.address}
            placeholder="Address"
            onChange={this.update("address")}
          />
          <br />
          <input
            type="number"
            step="1"
            value={this.state.dailyPrice}
            placeholder="Price"
            onChange={this.update("daily_price")}
          />
          <input
            type="number"
            step="1"
            value={this.state.maxCapacity}
            placeholder="Maximum Capacity"
            onChange={this.update("max_capacity")}
          />
          <input type="submit" value="Create listing!" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ errors }) => ({
  errors: errors.listing
});

const mapDispatchToProps = dispatch => ({
  addListing: listing => {
    return dispatch(addListing(listing));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCreateForm);
