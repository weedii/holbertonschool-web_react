import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications Component", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("logs the correct message when a notification is clicked", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // Simulate a click on the first notification item
    wrapper.find("NotificationItem").at(0).simulate("click");

    expect(consoleSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );
  });
});
