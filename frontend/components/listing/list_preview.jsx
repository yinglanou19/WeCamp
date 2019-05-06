import React from "react";

export default function ListingPreview({ listing }) {
  // renderFirstImg(){
  //   if(listing.imgUrls){
  //     return (
  //       <img src={listing.imgUrls[0]} />
  //     )
  //   }
  //   return;
  // }
  let img;
  if (listing.imgUrls.length > 0) {
    img = <img src={listing.imgUrls[0]} width="200" height="100" />;
  }

  return (
    <div>
      <h3>{listing.title}</h3>
      <a href={`/#/listings/${listing.id}`}>Detail</a>
      <h4>{listing.description}</h4>
      <h5>{listing.dailyPrice}</h5>
      {img}
    </div>
  );
}
