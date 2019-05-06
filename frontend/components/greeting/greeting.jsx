import React from "react";
import "./greeting.css";
const Header = ({ currentUser, logout, demologin, onButtonClick }) => {
  const sessionLinks = () => (
    <nav className="header-button-collection">
      <button
        className="header-button"
        onClick={e => onButtonClick("login", e)}
      >
        Log in
      </button>
      <button
        className="header-button"
        onClick={e => onButtonClick("signup", e)}
      >
        Sign up
      </button>
      <button className="header-button" onClick={() => demologin()}>
        Demo login
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="header-user-nav">
      <img src="green_tent.png" className="header-user-img" />
      <div className="header-dropdown-div">
        <a href="/#/bookings">My Bookings</a>
        <a href="/#/create_listing">Add Listing</a>
        <a onClick={logout}>Log Out</a>
      </div>
    </nav>
  );

  return (
    <header className="header">
      <a href="/" className="header-logo">
        WECAMP
      </a>
      {currentUser ? personalGreeting() : sessionLinks()}
    </header>
  );
};

export default Header;
