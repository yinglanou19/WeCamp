import { connect } from "react-redux";
import React from "react";
import ListingPreview from "./list_preview";
import { searchListings } from "../../actions/listing_actions";
import "./listing_collection.css";
import { withRouter } from "react-router-dom";

class ListingResults extends React.Component {
  componentDidMount() {
    this.props.searchListings(this.props.match.params.value);
  }
  render() {
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

const mapStateToProps = ({ entities }) => ({
  listings: Object.values(entities.searchResult)
});

const mapDispatchToProps = dispatch => ({
  searchListings: condition => dispatch(searchListings(condition))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListingResults)
);
