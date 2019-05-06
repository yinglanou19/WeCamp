import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../signup_form/signup_form_container";
import "./modal.css";
export default function Modal({ open, formtype, onClose, onSwitch }) {
  let component;
  switch (formtype) {
    case "login":
      component = (
        <LoginFormContainer
          onClose={onClose}
          onSwitch={type => onSwitch(type)}
        />
      );
      break;
    case "signup":
      component = (
        <SignupFormContainer
          onClose={onClose}
          onSwitch={type => onSwitch(type)}
        />
      );
      break;
    default:
      return null;
  }
  return (
    open && (
      <div
        className="modal-background"
        onClick={e => {
          console.log("herer");
          e.stopPropagation();
          onClose();
        }}
      >
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div>{component}</div>
        </div>
      </div>
    )
  );
}

// const mapStateToProps = state => {
//   return {
//     modal: state.ui.modal
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     closeModal: () => dispatch(closeModal())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Modal);
