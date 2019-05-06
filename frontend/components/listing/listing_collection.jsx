import { connect } from "react-redux";
import React from "react";
import ListingPreview from "./list_preview";
import { fetchListings } from "../../actions/listing_actions";
class ListingCollection extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    return (
      this.props.listings && (
        <ul>
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

const mapStateToProps = ({ entities }) => ({
  listings: Object.values(entities.listings)
});
const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingCollection);
