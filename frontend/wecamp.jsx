import React from "react";
import ReactDOM from "react-dom";

import configureStore from "./store/store";
import Root from "./components/root";
import {
  addBooking,
  fetchBookings,
  updateBooking,
  deleteBooking
} from "../frontend/actions/booking_actions";
import * as BookingAPIUtil from "../frontend/util/bookings_api_util";
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
  window.addBooking = addBooking;
  window.deleteBooking = deleteBooking;
  window.updateBooking = updateBooking;
  window.fetchBookings = fetchBookings;
  window.utiladd = BookingAPIUtil.addBooking;
  window.utildel = BookingAPIUtil.deleteBooking;
  window.utilupd = BookingAPIUtil.updateBooking;
  window.utilfet = BookingAPIUtil.fetchBookings;
  window.dispatch = store.dispatch;
  window.state = store.getState;

  ReactDOM.render(<Root store={store} />, root);
});
