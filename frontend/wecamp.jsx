import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";
import { addListing, fetchListings } from "../frontend/actions/listing_actions";
import * as ListingAPIUtil from "../frontend/util/listings_api_util";
import "./wecamp.css";
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.addListing = addListing;
  window.util = ListingAPIUtil.addListing;
  window.dispatch = store.dispatch;
  window.fetchListings = fetchListings;
  ReactDOM.render(<Root store={store} />, root);
});
