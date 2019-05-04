import React from "react";

const Header = ({ currentUser, logout, demologin, onButtonClick }) => {
  const sessionLinks = () => (
    <nav>
      <button
        className="header-button"
        onClick={e => onButtonClick("login", e)}
      >
        Log In
      </button>
      <button
        className="header-button"
        onClick={e => onButtonClick("signup", e)}
      >
        Sign Up
      </button>
      <button className="header-button" onClick={() => demologin()}>
        Demo Login
      </button>
    </nav>
  );
  const personalGreeting = () => (
    <nav className="header-user-nav">
      <img src="green_tent.png" className="header-user-img" />
      <div className="header-dropdown-div">
        <a onClick={logout}>Log Out</a>
      </div>
    </nav>
  );

  return (
    <header className="header">
      <a href="/">
        <h1 className="header-logo">WECAMP</h1>
      </a>
      {currentUser ? personalGreeting() : sessionLinks()}
    </header>
  );
};

export default Header;
