import { RECEIVE_LISTING, RECEIVE_LISTINGS } from "../actions/listing_actions";

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let l;
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return Object.assign({}, state, action.listings);
    case RECEIVE_LISTING:
      l = action.listing;

      return Object.assign({}, state, { [l.id]: l });
    default:
      return state;
  }
};

export default listingsReducer;
