import React from "react";
import "./list_preview.css";
export default function ListingPreview({ listing }) {
  let img;
  if (listing.imgUrls.length > 0) {
    img = <img src={listing.imgUrls[0]} />;
  }

  return (
    <a href={`/#/listings/${listing.id}`} className="list-prev-link">
      <div className="list-preview-container">
        <div className="list-image-container">{img}</div>
        <div className="list-title-container">
          <div className="list-title">{listing.title}</div>
          <div className="list-subtitle">{listing.address}</div>
        </div>
        <div className="list-price-container">
          <label className="list-price-label">
            ${listing.dailyPrice}/night
          </label>
        </div>
      </div>
    </a>
  );

  // return (
  //   <div>
  //     <h3>{listing.title}</h3>
  //     <a href={`/#/listings/${listing.id}`}>Detail</a>
  //     <h4>{listing.description}</h4>
  //     <h5>{listing.dailyPrice}</h5>
  //     {img}
  //   </div>
  // );
}
