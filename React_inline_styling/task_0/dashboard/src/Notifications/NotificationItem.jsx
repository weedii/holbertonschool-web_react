import React from "react";

const NotificationItem = ({ id, html, type, value, markAsRead }) => {
  if (html)
    return (
      <li
        onClick={() => {
          markAsRead(id);
        }}
        data-priority={type}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  return (
    <li
      onClick={() => {
        markAsRead(id);
      }}
      data-priority={type}
    >
      {value}
    </li>
  );
};

export default React.memo(NotificationItem);
