import React from "react";
import Modal from "../components/modal/modal";
import HeaderContainer from "../components/greeting/greeting_container";
import "./home.css";
import { clearSessionErrors } from "../actions/session_actions";
import { connect } from "react-redux";
import ListingCollection from "./listing/listing_collection";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formtype: "", open: false };
  }
  render() {
    return (
      <div className="page-container">
        <Modal
          open={this.state.open}
          formtype={this.state.formtype}
          onClose={() => {
            this.setState({ open: false });
            this.props.clearSessionErrors();
          }}
          onSwitch={type => {
            this.setState({ formtype: type });
            this.props.clearSessionErrors();
          }}
        />
        <HeaderContainer
          onButtonClick={(formtype, e) => {
            this.setState({ formtype: formtype, open: true });
          }}
        />
        <div className="listing-container-div">
          <ListingCollection />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
