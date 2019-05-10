import { connect } from "react-redux";
import React from "react";
import ListingPreview from "./list_preview";
import { fetchListings } from "../../actions/listing_actions";
import "./listing_collection.css";
class ListingCollection extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    if (this.props.ownProps.home) {
      return (
        this.props.listings && (
          <ul className="listing-collection-ul">
            {this.props.listings.slice(0, 3).map(listing => (
              <li key={listing.id}>
                <ListingPreview listing={listing} />
              </li>
            ))}
          </ul>
        )
      );
    }
    return (
      this.props.listings && (
        <ul className="listing-collection-ul">
          {this.props.listings.map(listing => (
            <li key={listing.id}>
              <ListingPreview listing={listing} />
            </li>
          ))}
        </ul>
      )
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings),
    ownProps
  };
};
const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCollection);
