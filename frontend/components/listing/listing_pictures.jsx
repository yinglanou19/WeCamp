import React from "react";
import "./listing_pictures.css";

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
  console.log("efkeffepotkoepfkepfe");
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("listing-image");
  if (x && n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (x && x.length > 0) {
    x[slideIndex - 1].style.display = "block";
  }
}

export default function ListingPictures({ images }) {
  let imgCollection = [];

  for (let i = 0; i < images.length; i++) {
    let img = (
      <img className="listing-image" src={`${images[i]}`} key={`${i}`} />
    );
    imgCollection.push(img);
  }

  return (
    <div className="listing-detail-image-container">
      {imgCollection.map(img => img)}
      <button
        className="w3-button w3-black w3-display-left"
        onClick={() => plusDivs(-1)}
      >
        &#10094;
      </button>
      <button
        className="w3-button w3-black w3-display-right"
        onClick={() => plusDivs(1)}
      >
        &#10095;
      </button>
    </div>
  );
}
