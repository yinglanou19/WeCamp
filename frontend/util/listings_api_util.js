export const addListing = listing =>
  $.ajax({
    method: "POST",
    url: "/api/listings",
    data: listing,
    contentType: false,
    processData: false
  });

export const fetchAllListings = () =>
  $.ajax({
    method: "GET",
    url: "/api/listings"
  });

export const fetchListing = id =>
  $.ajax({
    method: "get",
    url: `/api/listings/${id}`
  });

export const fetchSearchResult = condition =>
  $.ajax({
    method: "get",
    url: `/api/listings?search=${condition}`
  });
// encodeURIComponent()

export const fetchHost = id =>
  $.ajax({
    method: "get",
    url: `api/users/${id}`
  });
