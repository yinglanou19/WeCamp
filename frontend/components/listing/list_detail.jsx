import React from "react";
import { connect } from "react-redux";
import BookingCreateForm from "../booking/create_booking";
class ListingDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.listing.title}</h1>
        <h2>{this.props.listing.dailyPrice}</h2>
        <h3>{this.props.listing.id}</h3>
        <BookingCreateForm
          listingId={this.props.listing.id}
          price={this.props.listing.dailyPrice}
          maxGuests={this.props.listing.maxCapacity}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId]
});

export default connect(mapStateToProps)(ListingDetail);
