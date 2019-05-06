import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../signup_form/signup_form_container";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import "./modal.css";
function Modal({ isOpen, formType, closeModal }) {
  let component;
  switch (formType) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    isOpen && (
      <div
        className="modal-background"
        onClick={e => {
          e.stopPropagation();
          closeModal();
        }}
      >
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div>{component}</div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = state => {
  return {
    formType: state.ui.modal.formType,
    isOpen: state.ui.modal.isOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
