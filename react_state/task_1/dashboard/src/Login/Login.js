import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (email != "" && password != "") setEnableSubmit(true);
  }, [email, password]);

  return (
    <main role="main" className={css(styles.login)}>
      <p>Login to access the full dashboard</p>

      <from onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className={css(styles.inp)}
          type="email"
          name="email"
          id="email"
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          className={css(styles.inp)}
          type="password"
          name="password"
          id="password"
          onChange={handleChangePassword}
        />
        <button
          disabled={!enableSubmit}
          className={css(styles.btn)}
          type="submit"
        >
          OK
        </button>
      </from>
    </main>
  );
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    padding: "16px 24px",
    [screenSize.small]: {
      width: "90%",
      padding: 0,
    },
  },
  inp: {
    margin: "4px",
    [screenSize.small]: {
      display: "block",
      border: "none",
      margin: 0,
    },
  },
  btn: {
    margin: "4px",
    cursor: "pointer",
    [screenSize.small]: {
      width: "32px",
      display: "block",
      margin: 0,
    },
  },
});

export default Login;
