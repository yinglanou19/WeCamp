import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../components/home";
import NotFoundPage from "./not_found_page";
import ListingCreateForm from "./listing/listing_create_form";
import ListingDetail from "./listing/list_detail";
import BookingCollection from "./booking/booking_collection";
import HeaderContainer from "../components/greeting/greeting_container";
import Modal from "./modal/modal";
import ListingResults from "./listing/listing_results";
import DiscoverPage from "./discover/discover_page";
const App = () => (
  <>
    <HeaderContainer />
    <Modal />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/listings/:listingId" component={ListingDetail} />
      <Route path="/bookings" component={BookingCollection} />
      <Route exact path="/discover" component={DiscoverPage} />
      <Route path="/discover/:value" component={ListingResults} />
      <Route path="/create_listing" component={ListingCreateForm} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </>
);

export default App;
