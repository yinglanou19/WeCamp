import React from "react";
import "./session_form.css";
class LoginForm extends React.Component {
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
    this.props.login(user).then(_user => this.props.closeModal());
  }

  handleOpenModal() {
    this.props.clearErrors();
    this.props.openModal("signup");
  }
  renderErrors() {
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
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>Welcome back!</h3>
          <p>It is about time for another camping trip</p>
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
            <input className="session-submit" type="submit" value="Sign In" />
          </div>
        </form>
        <button onClick={this.handleOpenModal} className="switch-modal-button">
          Dont have a wecamp account?
          <strong>
            <u>Sign Up!</u>
          </strong>
        </button>
      </div>
    );
  }
}

export default LoginForm;
