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
    this.props.signup(user).then(_user => this.props.closeModal());
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
      <div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          Join Wecamp!
          <br />
          Discover the best camping near me
          {this.renderErrors()}
          <div>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <label>
              Profile picture url:
              <input
                type="text"
                value={this.state.imgUrl}
                onChange={this.update("img_url")}
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
