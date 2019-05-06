import { connect } from "react-redux";
import React from "react";
import { login, clearSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: formType => dispatch(openModal(formType)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
