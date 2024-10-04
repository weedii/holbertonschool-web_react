import React, { PureComponent } from "react";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import propTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import AppContext from "./AppContext";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDownLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDownLogout);
  }

  handleKeyDownLogout = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  };

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  render() {
    const { displayDrawer, user } = this.state;
    const isLoggedIn = user.isLoggedIn;

    const listCourses = [
      { id: 1, name: "ES6", credit: "60" },
      { id: 2, name: "Webpack", credit: "20" },
      { id: 3, name: "React", credit: "40" },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className="App">
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <Login logIn={this.logIn} />
            )}

            <BodySectionWithMarginBottom title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySectionWithMarginBottom>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

const styles = StyleSheet.create({
  body: {
    fontFamily: "sans-serif",
    marginTop: "50px",
    marginLeft: "30px",
  },
  footer: {
    fontFamily: "sans-serif",
    fontStyle: "italic",
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
});

export default App;
