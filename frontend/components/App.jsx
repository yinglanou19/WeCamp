import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";
const App = () => (
  <div>
    <Modal />
    <div className="header">
      <a href="/">
        <h1 className="header-logo">WECAMP</h1>
      </a>
      <GreetingContainer />
    </div>
  </div>
);

export default App;
