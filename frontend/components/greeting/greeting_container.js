import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  logout,
  login,
  clearSessionErrors
} from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: formType => dispatch(openModal(formType)),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearSessionErrors()),
  demologin: () =>
    dispatch(login({ username: "bobabutt", password: "bobabutt" }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
