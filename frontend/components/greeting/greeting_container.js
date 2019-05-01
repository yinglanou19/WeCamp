import { connect } from "react-redux";

import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: msg => dispatch(openModal(msg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
