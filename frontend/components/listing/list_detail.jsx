import React from "react";
import { connect } from "react-redux";
import BookingCreateForm from "../booking/create_booking";
import { fetchHost } from "../../actions/listing_actions";
import "./list_detail.css";
class ListingDetail extends React.Component {
  componentDidMount() {
    this.props.fetchHost(this.props.listing.hostId);
  }

  render() {
    if (!this.props.users.hasOwnProperty(`${this.props.listing.hostId}`)) {
      return null;
    }
    return (
      <div>
        <div className="listing-detail-head-dummy-div" />
        <div className="listing-detail-image-container">
          <img src={this.props.listing.imgUrls[0]} />
        </div>
        <div className="listing-middle-container">
          <div className="listing-detail-container-div">
            <div className="listing-detail-title-div">
              <p>{this.props.listing.address}</p>
              <p>{this.props.listing.title}</p>
            </div>
            <div className="listing-detail-description-div">
              <p id="listing-detail-host">
                Host: {this.props.users[this.props.listing.hostId].username}
              </p>
              <p id="listing-detail-des">{this.props.listing.description}</p>
            </div>
          </div>
          <div className="listing-booking-form-container">
            <BookingCreateForm
              listingId={this.props.listing.id}
              price={this.props.listing.dailyPrice}
              maxGuests={this.props.listing.maxCapacity}
            />
          </div>
        </div>
        <div className="listing-detail-hardcode-container" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  users: state.entities.users
});
const mapDispatchToProps = dispatch => ({
  fetchHost: id => dispatch(fetchHost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingDetail);
