import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./signup_form/signup_form_container";
const App = () => (
  <div>
    <h1>Wecamp</h1>
    <GreetingContainer />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
