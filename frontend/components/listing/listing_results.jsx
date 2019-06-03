import { connect } from "react-redux";
import React from "react";
import ListingPreview from "./list_preview";
import { searchListings } from "../../actions/listing_actions";
import "./listing_collection.css";
import { withRouter } from "react-router-dom";
import "./list_results.css";
import ListingsMap from "../map/listings_map";
class ListingResults extends React.Component {
  componentDidMount() {
    this.props.searchListings(this.props.match.params.value);
  }

  render() {
    return (
      this.props.listings && (
        <div>
          <div className="result-page-head-dummy" />
          <div className="listing-result-container">
            <div className="listing-result-collection">
              <ul className="listing-collection-ul">
                {this.props.listings.map(listing => (
                  <li key={listing.id}>
                    <ListingPreview listing={listing} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="map-box">
              <ListingsMap />
            </div>
          </div>
        </div>
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
