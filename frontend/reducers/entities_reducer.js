import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import listingsReducer from "./listings_reducer";
import searchResultReducer from "./listing_search_reducer";
import bookingsReducer from "./bookings_reducer";
import bookingEditReducer from "./booking_edit_reducer";
export default combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  bookings: bookingsReducer,
  searchResult: searchResultReducer,
  bookingToBeEdited: bookingEditReducer
});
