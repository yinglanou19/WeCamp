import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import Modal from "./modal/modal";

const App = () => (
  <div>
    <Modal />
    <h1>Wecamp</h1>
    <GreetingContainer />
  </div>
);

export default App;
