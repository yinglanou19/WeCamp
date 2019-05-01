import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      img_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Welcome to WECAMP!
          <br />
          Create an account!
          {this.renderErrors()}
          <div className="signup-form">
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="signup-input"
              />
            </label>
            <br />
            <label>
              Profile picture url:
              <input
                type="text"
                value={this.state.imgUrl}
                onChange={this.update("img_url")}
                className="signup-input"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value="Create account"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
