import React from "react";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../signup_form/signup_form_container";

export default function Modal({ open, button }) {
  let component;
  switch (button) {
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
    open && (
      <div className="modal-background">
        <div className="modal-child">
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
