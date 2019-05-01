import React from "react";

const Greeting = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav>
      <button onClick={() => openModal("login")}>Log In</button>
      <br />
      <button onClick={() => openModal("signup")}>Sign Up</button>
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
