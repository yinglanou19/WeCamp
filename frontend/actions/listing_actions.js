import * as ListingAPIUtil from "../util/listings_api_util";

export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";

const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});
const receiveErrors = errors => ({
  type: RECEIVE_LISTING_ERRORS,
  errors
});
const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
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
