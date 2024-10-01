import React from "react";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = ({ id, html, type, value, markAsRead }) => {
  if (html) {
    return (
      <li
        onClick={() => {
          markAsRead(id);
        }}
        data-notification-type={type}
        className={css(type === "default" ? styles.default : styles.urgent)}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }
  return (
    <li
      onClick={() => {
        markAsRead(id);
      }}
      data-notification-type={type}
      className={css(type === "default" ? styles.default : styles.urgent)}
    >
      {value}
    </li>
  );
};

const styles = StyleSheet.create({
  notifications: {
    border: "1px solid #E11D3F",
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

export default React.memo(NotificationItem);
