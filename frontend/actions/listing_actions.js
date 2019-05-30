import * as ListingAPIUtil from "../util/listings_api_util";

export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";
export const RECEIVE_HOST = "RECEIVE_HOST";
// const receiveListing = listing => ({
//   type: RECEIVE_LISTING,
//   listing
// });
const receiveListing = listing => {
  return {
    type: RECEIVE_LISTING,
    listing
  };
};
const receiveErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
});
const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
});

const receiveResults = listings => ({
  type: RECEIVE_RESULTS,
  listings
});
const receiveHost = host => ({
  type: RECEIVE_HOST,
  host
});
export const addListing = listing => dispatch => {
  return ListingAPIUtil.addListing(listing).then(
    listing => dispatch(receiveListing(listing)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const fetchListings = () => dispatch => {
  return ListingAPIUtil.fetchAllListings().then(listings =>
    dispatch(receiveListings(listings))
  );
};

export const fetchListing = id => dispatch => {
  return ListingAPIUtil.fetchListing().then(listing =>
    dispatch(receiveListing(listing))
  );
};

export const searchListings = condition => dispatch =>
  ListingAPIUtil.fetchSearchResult(condition).then(results =>
    dispatch(receiveResults(results))
  );

export const fetchHost = id => dispatch =>
  ListingAPIUtil.fetchHost(id).then(host => dispatch(receiveHost(host)));
