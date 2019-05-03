import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const u = this.props.signup(user);
    alert("aa");
    u.then(_user => this.props.closeModal());
  }

  handleOpenModal() {
    this.props.openModal();
  }

  renderErrors() {
    alert(typeof this.props.errors);
    alert(this.props.errors.toString());
    return (
      <ul className="session-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h3>Join Wecamp!</h3>
          <p>Discover the best camping near me</p>
          {this.renderErrors()}
          <div>
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="USERNAME"
              className="session-input-field"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="PASSWORD"
              className="session-input-field"
            />
            <br />
            <input
              className="session-submit"
              type="submit"
              value="Create account"
            />
          </div>
        </form>
        <button onClick={this.handleOpenModal} className="switch-modal-button">
          Already a wecamper?
          <strong>
            <u>Log in!</u>
          </strong>
        </button>
      </div>
    );
  }
}

export default SignupForm;
