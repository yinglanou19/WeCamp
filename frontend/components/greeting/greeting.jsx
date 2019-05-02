import React from "react";

const Greeting = ({ currentUser, logout, openModal, demologin }) => {
  const sessionLinks = () => (
    <nav>
      <button className="header-button" onClick={() => openModal("login")}>
        Log In
      </button>
      <button className="header-button" onClick={() => openModal("signup")}>
        Sign Up
      </button>
      <button className="header-button" onClick={() => demologin()}>
        Demo Login
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <nav>
      <span className="header-message">Hi, {currentUser.username}!</span>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
