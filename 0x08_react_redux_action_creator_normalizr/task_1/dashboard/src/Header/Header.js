import React, { Component } from "react";
import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.h_1)}>School dashboard</h1>

        {user.isLoggedIn && (
          <div>
            <p>
              Welcome {user.email} (
              <a href="#" onClick={logOut}>
                logout
              </a>
              )
            </p>
          </div>
        )}
      </header>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#E11D3F",
    borderBottom: "3px solid #E11D3F",
  },
  appLogo: {
    height: "200px",
    width: "200px",
  },
  h_1: {
    marginLeft: "3rem",
  },
});

export default Header;
