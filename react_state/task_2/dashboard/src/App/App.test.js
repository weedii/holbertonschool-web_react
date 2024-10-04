import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

describe("<App />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Tests that App renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Contains Header component", () => {
    expect(wrapper.find("Header").length).toBe(1);
  });

  it("Contains Footer component", () => {
    expect(wrapper.find("Footer").length).toBe(1);
  });

  it("Tests that CourseList is not displayed when the user is not logged in", () => {
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it("Tests that Login component is displayed when the user is not logged in", () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it("Tests that CourseList is displayed when the user is logged in", () => {
    wrapper.setState({
      user: {
        isLoggedIn: true,
        email: "test@example.com",
        password: "password",
      },
    });
    expect(wrapper.find(CourseList).length).toBe(1);
  });

  it("Tests that Login component is not displayed when the user is logged in", () => {
    wrapper.setState({
      user: {
        isLoggedIn: true,
        email: "test@example.com",
        password: "password",
      },
    });
    expect(wrapper.find(Login).length).toBe(0);
  });

  it("Tests that logOut method updates the state and UI", () => {
    wrapper.setState({
      user: {
        isLoggedIn: true,
        email: "test@example.com",
        password: "password",
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
    expect(wrapper.find(Login).length).toBe(1);
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  it("Tests that handleDisplayDrawer is called when Notifications menu is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleDisplayDrawer");
    wrapper.instance().handleDisplayDrawer();
    expect(instance.handleDisplayDrawer).toHaveBeenCalled();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("Tests that handleHideDrawer is called when the close button is clicked", () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, "handleHideDrawer");
    wrapper.instance().handleHideDrawer();
    expect(instance.handleHideDrawer).toHaveBeenCalled();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
