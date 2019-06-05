import React from "react";
import "./listing_pictures.css";

// let slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs((slideIndex += n));
//   console.log("efkeffepotkoepfkepfe");
// }

// function showDivs(n) {
//   let i;
//   let x = document.getElementsByClassName("listing-image");
//   if (x && n > x.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   if (x && x.length > 0) {
//     x[slideIndex - 1].style.display = "block";
//   }
// }

function plusDivs(currIdx) {
  let imgCollection = document.getElementsByClassName("listing-image");
  for (let i = 0; i < imgCollection.length; i++) {
    imgCollection[i].style.display = "none";
  }
  imgCollection[currIdx].style.display = "block";
}

export default function ListingPictures({ images }) {
  let imgCollection = [];
  let currIdx = 0;
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
        onClick={() => {
          console.log("left" + currIdx);
          currIdx = (currIdx - 1) % imgCollection.length;
          plusDivs(currIdx);
        }}
      >
        &#10094;
      </button>
      <button
        onClick={() => {
          console.log("right" + currIdx);
          currIdx = (currIdx + 1) % imgCollection.length;
          plusDivs(currIdx);
        }}
      >
        &#10095;
      </button>
    </div>
  );
}
