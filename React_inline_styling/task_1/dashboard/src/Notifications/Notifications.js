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
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
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
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img
                src={close_icon}
                alt="close"
                height="15px"
                width="15px"
              ></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {/* listNotifications is empty condition */}
              {listNotifications.length === 0 && (
                <li>
                  <p>No notification available yet</p>
                </li>
              )}
              {/* render listNotifications */}
              {listNotifications.map((notification) => (
                <NotificationItem
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

Notification.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notification.propTypes = {
  displayDrawer: propTypes.bool,
};

const styles = StyleSheet.create({
  notifications: {
    border: "1px solid #E11D3F", // Direct color replacement for var(--primar-color)
    padding: "1rem",
  },
  menuItem: {
    position: "absolute",
    right: "3rem",
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default Notification;
