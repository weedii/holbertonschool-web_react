import React from "react";

// Define a default user object
const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

// Define a default logOut function
const logOut = () => {
  console.log("User logged out");
};

// Create a React Context with the default values
const AppContext = React.createContext({
  user: defaultUser,
  logOut: logOut,
});

export default AppContext;
