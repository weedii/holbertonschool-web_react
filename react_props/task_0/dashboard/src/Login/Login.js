import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form>
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" id="email" />
          </label>

          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" id="password" />
          </label>

          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
