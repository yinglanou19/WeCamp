import React from "react";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <button onClick={() => dispatch(openModal("login"))}>Log In</button>
      <br />
      <button onClick={() => dispatch(openModal("signup"))}>Sign Up</button>
    </nav>
  );
  const personalGreeting = () => (
    <nav>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
