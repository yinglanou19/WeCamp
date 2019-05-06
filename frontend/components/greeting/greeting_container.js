import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout, login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: formType => dispatch(openModal(formType)),
  closeModal: () => dispatch(closeModal()),

  demologin: () =>
    dispatch(login({ username: "bobabutt", password: "bobabutt" }))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Greeting)
);
