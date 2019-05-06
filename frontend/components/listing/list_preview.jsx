import React from "react";

export default function ListingPreview({ listing }) {
  return (
    <div>
      <h3>{listing.title}</h3>
      <a href={`/#/listings/${listing.id}`}>Detail</a>
      <h4>{listing.description}</h4>
      <h5>{listing.dailyPrice}</h5>
      <img src={listing.imgUrls[0]} />
    </div>
  );
}
