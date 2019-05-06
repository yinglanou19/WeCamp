import React from "react";

export default function ListingPreview({ listing }) {
  return (
    <div>
      <h3>{listing.title}</h3>
      <h4>{listing.description}</h4>
      <h5>{listing.dailyPrice}</h5>
    </div>
  );
}
