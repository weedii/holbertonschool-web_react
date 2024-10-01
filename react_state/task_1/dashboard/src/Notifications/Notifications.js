import React from "react";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                position: "absolute",
                background: "transparent",
                border: "none",
                right: "20px",
              }}
              aria-label="close"
              onClick={handleHideDrawer}
            >
              <img src={close_icon} alt="close" height="15px" width="15px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {/* Display when listNotifications is empty */}
              {listNotifications.length === 0 && (
                <li>
                  <p>No notification available yet</p>
                </li>
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  html={notification.html}
                  type={notification.type}
                  value={notification.value}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

// Define defaultProps
Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

// Define propTypes
Notification.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      type: propTypes.string,
      value: propTypes.string,
      html: propTypes.shape({
        __html: propTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: propTypes.func,
  handleHideDrawer: propTypes.func,
};

const styles = StyleSheet.create({
  notifications: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 1000,
    padding: "0",
    fontSize: "20px",
  },
  menuItem: {
    position: "absolute",
    right: "3rem",
    cursor: "pointer",
  },
  notificationList: {
    listStyleType: "none",
    padding: "0",
  },
});

export default Notification;
