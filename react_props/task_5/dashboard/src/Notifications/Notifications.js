import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = false }) => {
  return (
    <div>
      <div className="menuItem">Your notifications</div>

      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
              position: "absolute",
              right: 20,
              top: 25,
            }}
            aria-label="Close"
            onClick={() => console.log("Close button has been clicked")}
          >
            X
          </button>

          <p>Here is the list of notifications</p>

          <ul>
            <NotificationItem type={"default"} value={"New course available"} />
            <NotificationItem type={"urgent"} value={"New resume available"} />
            <NotificationItem
              type={"urgent"}
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
