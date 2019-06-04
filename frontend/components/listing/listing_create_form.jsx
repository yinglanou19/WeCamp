import React from "react";
import { connect } from "react-redux";
import { addListing } from "../../actions/listing_actions";
import "./listing_create_form.css";
import Errors from "../errors/errors";
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
      max_capacity: "",
      images: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  // renderErrors() {
  //   return (
  //     <ul className="listing-create-form-errors">
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  handleFile(e) {
    // const file = e.currentTarget.files[0];
    // const reader = new FileReader();
    // reader.onloadend = () => {
    //   this.setState({
    //     images: [reader.result]
    //   });
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    // }

    this.setState({ images: e.target.files });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("listing[title]", this.state.title);
    formData.append("listing[description]", this.state.description);
    formData.append("listing[long]", this.state.long);
    formData.append("listing[lat]", this.state.lat);
    formData.append("listing[address]", this.state.address);
    formData.append("listing[daily_price]", this.state.daily_price);
    formData.append("listing[max_capacity", this.state.max_capacity);

    for (let i = 0; i < this.state.images.length; i++) {
      formData.append("listing[images][]", this.state.images[i]);
    }

    this.props.addListing(formData).then(l => {
      return this.props.history.push(`listings/${l.listing.id}`);
    });
  }
  render() {
    return (
      <div className="listing-create-container">
        <div className="listing-create-header-dummy" />
        <div className="listing-form-outer-container">
          <div className="listing-create-form">
            <Errors errors={this.props.errors} />
            <form onSubmit={this.handleSubmit}>
              <p className="listing-create-question">
                Tell us about your property!
              </p>
              <input
                type="text"
                value={this.state.title}
                placeholder="Title"
                onChange={this.update("title")}
                className="listing-create-title"
              />
              <input
                type="textarea"
                value={this.state.description}
                placeholder="Description"
                onChange={this.update("description")}
                className="listing-create-description"
              />
              <input
                type="text"
                value={this.state.address}
                placeholder="Address"
                onChange={this.update("address")}
                className="listing-create-address"
              />
              <div className="listing-create-nums">
                <input
                  type="number"
                  step="0.000001"
                  value={this.state.long}
                  placeholder="Longitude"
                  onChange={this.update("long")}
                  className="listing-create-long"
                />

                <input
                  type="number"
                  step="0.000001"
                  value={this.state.lat}
                  placeholder="Latitude"
                  onChange={this.update("lat")}
                  className="listing-create-lat"
                />

                <input
                  type="number"
                  step="1"
                  value={this.state.dailyPrice}
                  placeholder="Price"
                  onChange={this.update("daily_price")}
                  className="listing-create-price"
                />
                <input
                  type="number"
                  step="1"
                  value={this.state.maxCapacity}
                  placeholder="Max Capacity"
                  onChange={this.update("max_capacity")}
                  className="listing-create-capacity"
                />
              </div>
              <div className="image-upload-container">
                <input
                  type="file"
                  onChange={this.handleFile.bind(this)}
                  multiple
                />
              </div>
              <div className="listing-create-button-div">
                <input
                  type="submit"
                  value="Create"
                  className="listing-create-submit"
                />
              </div>
            </form>
          </div>
          <div className="list-create-msg-box">
            <h3>Welcome!</h3>
            <p>
              We are so excited you've chosen us to be your partner in sharing
              your land with our community of Wecampers across the country. We
              want to help you achieve your hosting goals.{" "}
              <strong>Email us at any time</strong> if you have any questions.”
            </p>
          </div>
        </div>
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
