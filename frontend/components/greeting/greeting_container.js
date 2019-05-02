import { connect } from "react-redux";

import { logout, login } from "../../actions/session_actions";
import Greeting from "./greeting";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: msg => dispatch(openModal(msg)),
  demologin: () =>
    dispatch(login({ username: "bobabutt", password: "bobabutt" }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
