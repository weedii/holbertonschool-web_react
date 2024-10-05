import React from "react";
import { shallow } from "enzyme";
import Notification from "./Notification";

describe("Notification component tests", () => {
  it("clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notification
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );

    // Simulate click on the menu item
    wrapper.find(".menuItem").simulate("click");

    // Check if handleDisplayDrawer was called
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("clicking on the close button calls handleHideDrawer", () => {
    const handleHideDrawer = jest.fn();

    const wrapper = shallow(
      <Notification displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );

    // Simulate click on the close button
    wrapper.find('button[aria-label="close"]').simulate("click");

    // Check if handleHideDrawer was called
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it("renders the correct notification items", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
    ];
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notification
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
        handleHideDrawer={() => {}}
        handleDisplayDrawer={() => {}}
      />
    );

    // Check if notifications are rendered
    expect(wrapper.find("NotificationItem").length).toBe(
      listNotifications.length
    );
  });

  it("calls markNotificationAsRead when a notification is clicked", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
    ];
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(
      <Notification
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
        handleHideDrawer={() => {}}
        handleDisplayDrawer={() => {}}
      />
    );

    // Simulate clicking on the NotificationItem
    wrapper.find("NotificationItem").simulate("click");

    // Check if markNotificationAsRead was called
    expect(markNotificationAsRead).toHaveBeenCalledWith(
      listNotifications[0].id
    );
  });

  it("displays the message when listNotifications is empty", () => {
    const wrapper = shallow(
      <Notification
        displayDrawer={true}
        listNotifications={[]}
        handleHideDrawer={() => {}}
        handleDisplayDrawer={() => {}}
      />
    );

    // Check for the message when no notifications are available
    expect(wrapper.find("li").text()).toBe("No notification available yet");
  });
});
