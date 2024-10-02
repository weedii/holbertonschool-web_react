import React from "react";
import { render, screen } from "@testing-library/react";
import Notification from "./Notifications";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    html: { __html: "<strong>Urgent requirement</strong>" },
    type: "urgent",
  },
];

describe("Notification component tests", () => {
  test("renders 3 notification items by default", () => {
    render(
      <Notification
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // Check that there are 3 items in the list
    const notificationItems = screen.getAllByRole("listitem");
    expect(notificationItems.length).toBe(3);
  });

  test("updates the notification items when the listNotifications prop changes", () => {
    const { rerender } = render(
      <Notification
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // Check that there are 3 items initially
    let notificationItems = screen.getAllByRole("listitem");
    expect(notificationItems.length).toBe(3);

    // New notifications list with 5 items
    const updatedListNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        html: { __html: "<strong>Urgent requirement</strong>" },
        type: "urgent",
      },
      { id: 4, type: "default", value: "New project submission" },
      { id: 5, type: "default", value: "New message received" },
    ];

    // Re-render the component with the updated notifications list
    rerender(
      <Notification
        displayDrawer={true}
        listNotifications={updatedListNotifications}
      />
    );

    // Check that there are now 5 items in the list
    notificationItems = screen.getAllByRole("listitem");
    expect(notificationItems.length).toBe(5);
  });
});
