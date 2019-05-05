import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
