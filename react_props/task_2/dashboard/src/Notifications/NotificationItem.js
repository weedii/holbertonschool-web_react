import React from "react";

const NotificationItem = ({ type, html, value }) => {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    >
      {value}
    </li>
  );
};

export default NotificationItem;
