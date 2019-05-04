export const addListing = listing =>
  $.ajax({
    method: "POST",
    url: "/api/listings",
    data: { listing }
  });

export const fetchAllListings = () =>
  $.ajax({
    method: "GET",
    url: "/api/listings"
  });
