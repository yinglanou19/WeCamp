import React from "react";
import "./errors.css";
const errors = ({ errors }) => (
  <div id="errors-container">
    <ul className="errors-ul">
      {errors.map((error, i) => (
        <li key={`error-${i}`}>{error}</li>
      ))}
    </ul>
  </div>
);

export default errors;
