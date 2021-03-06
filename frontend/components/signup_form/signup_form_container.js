import { connect } from "react-redux";
import React from "react";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal("login")),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
