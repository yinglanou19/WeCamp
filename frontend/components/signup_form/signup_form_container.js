import { connect } from "react-redux";
import React from "react";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
