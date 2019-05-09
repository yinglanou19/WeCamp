import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../signup_form/signup_form_container";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import "./modal.css";
import EditBooking from "../booking/booking_edit"
function Modal({ isOpen, formType, closeModal }) {
  let component;
  switch (formType) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      case "edit_booking":
      component= <EditBooking />
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
          clearSessionErrors();
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
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
