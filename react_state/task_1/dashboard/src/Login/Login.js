import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
    console.log("Login successful!");
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.checkSubmitEnabled);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.checkSubmitEnabled);
  }

  checkSubmitEnabled() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== "" && password !== "" });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <React.Fragment>
        <div className={css(styles.app)}>
          <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <form
              className={css(styles.inputs)}
              onSubmit={this.handleLoginSubmit}
            >
              <label htmlFor="email" className={css(styles.label)}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={css(styles.input)}
                value={email}
                onChange={this.handleChangeEmail}
              />

              <label htmlFor="password" className={css(styles.label)}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={css(styles.input)}
                value={password}
                onChange={this.handleChangePassword}
              />

              <input
                type="submit"
                value="OK"
                className={css(styles.button)}
                disabled={!enableSubmit}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
  },
  appBody: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3rem",
    paddingTop: "1rem",
    minHeight: "50vh",
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  input: {
    height: "15px",
    marginLeft: "0.2rem",
    marginBottom: "1rem",
  },
  label: {
    marginLeft: "0.3rem",
    marginBottom: "0.5rem",
  },
  button: {
    height: "21px",
    marginTop: "1rem",
  },
  "@media (max-width: 900px)": {
    inputs: {
      flexDirection: "column",
    },
    input: {
      marginLeft: "0",
    },
    button: {
      marginLeft: "0",
      width: "auto",
    },
  },
});
