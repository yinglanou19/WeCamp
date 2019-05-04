import React from "react";
import Modal from "../components/modal/modal";
import HeaderContainer from "../components/greeting/greeting_container";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button: "", open: false };
  }
  render() {
    return (
      <div
        className="page-container"
        onClick={() => this.setState({ open: false })}
      >
        <Modal open={this.state.open} button={this.state.button} />
        <HeaderContainer
          onButtonClick={(button, e) => {
            this.setState({ button: button, open: true });
            e.stopPropagation();
          }}
        />
      </div>
    );
  }
}

export default Home;
