import React from "react";
import ListingCollection from "../listing/listing_collection";
import "./discover_page.css";
export default function discoverPage() {
  return (
    <div>
      <div className="discover-page-head-dummy" />
      <div className="discover-container">
        <div className="discover-text">
          <h3>Your search results:</h3>
        </div>
        <div>
          <div className="discover-list-collection">
            <ListingCollection />
          </div>
          <div className="map-box" />
        </div>
      </div>
    </div>
  );
}
