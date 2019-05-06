import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home";
import NotFoundPage from "./not_found_page";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./signup_form/signup_form_container";
import ListingCreateForm from "./listing/listing_create_form";
import ListingDetail from "./listing/list_detail";
import BookingCollection from "./booking/booking_collection";
import HeaderContainer from "../components/greeting/greeting_container";

const App = () => (
  <>
    <HeaderContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings/:listingId" component={ListingDetail} />
      <Route path="/bookings" component={BookingCollection} />
      <Route path="/create_listing" component={ListingCreateForm} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </>
);

export default App;
