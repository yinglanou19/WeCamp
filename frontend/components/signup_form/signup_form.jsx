import React from "react";
import "../session_form/session_form.css";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      zip_code: ""
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
    this.props.signup(user).then(_user => this.props.closeModal());
  }

  handleOpenModal() {
    this.props.clearErrors();
    this.props.openModal("login");
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
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <h3>Join Wecamp!</h3>
          <p>Discover the best camping near me</p>
          {this.renderErrors()}
          <div>
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              placeholder="FIRST NAME"
              className="session-input-field-name"
            />
            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder="LAST NAME"
              className="session-input-field-name"
            />
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
              type="number"
              step="1"
              min="10000"
              max="99999"
              value={this.state.zip_code}
              onChange={this.update("zip_code")}
              placeholder="ZIP CODE..."
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
          Already a wecamper?&nbsp;
          <strong>
            <u>Log in!</u>
          </strong>
        </button>
      </div>
    );
  }
}

export default SignupForm;
