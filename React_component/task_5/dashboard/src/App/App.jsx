import React, { PureComponent } from "react";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import propTypes from "prop-types";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

// implement class components
class App extends PureComponent {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDownLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDownLogout);
  }

  handleKeyDownLogout = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    // assign props to local variables
    const { isLoggedIn } = this.props;

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
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className="App-body">
          {this.isLoggedIn ? (
            <BodySectionWithMarginBottom title={"Log in to continue"}>
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <Login />
          )}

          <BodySectionWithMarginBottom title={"News from the School"}>
            <p>Holberton School News goes here</p>
          </BodySectionWithMarginBottom>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: PropTypes.func,
};

export default App;
