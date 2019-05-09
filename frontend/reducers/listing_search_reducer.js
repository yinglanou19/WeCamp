import { RECEIVE_RESULTS } from "../actions/listing_actions";

const listingSearchReducer = (state = {}, action) => {
  Object.freeze(state);
  let l;
  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.listings;

    default:
      return state;
  }
};

export default listingSearchReducer;
