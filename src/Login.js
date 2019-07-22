import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "user",
      password: "pass"
    };
  }

  onChangeUserName = value => {
    this.setState({ username: value });
  };

  onChangePassword = value => {
    this.setState({ password: value });
  };

  alertTheInfo = () => {
    alert(
      "user name: " + this.state.username + "  password: " + this.state.password
    );
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.onChangeUserName(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.onChangePassword(e.target.value)}
          type="text"
        />
        <button onClick={e => this.alertTheInfo()}>Login Cracka</button>
      </div>
    );
  }
}

export default Login;
