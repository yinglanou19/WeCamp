import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import NotFoundPage from "./not_found_page";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./signup_form/signup_form_container";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default App;
