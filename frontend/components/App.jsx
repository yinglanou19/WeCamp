import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
import NotFoundPage from "./not_found_page";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./signup_form/signup_form_container";
const App = () => (
  <div>
    <Modal />
    <div className="header">
      <a href="/">
        <h1 className="header-logo">WECAMP</h1>
      </a>
      <GreetingContainer />
    </div>
    <Switch>
      <Route path="/" exact />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
