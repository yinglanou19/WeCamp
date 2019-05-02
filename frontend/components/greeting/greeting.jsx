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
    <nav className="header-user-nav">
      <a hef="#" className="header-user-img">
        {currentUser.username}
      </a>
      <div className="header-dropdown-div">
        <a onClick={logout}>Log Out</a>
      </div>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
