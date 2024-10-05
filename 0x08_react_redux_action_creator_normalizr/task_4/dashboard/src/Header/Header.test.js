import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";
import AppContext from "../App/AppContext";

// shallow render header component
describe("<Header />", () => {
  it("Tests that Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Tests that the component renders <img> and <h1> tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toBe(true);
    expect(wrapper.exists("h1")).toBe(true);
  });

  it("Tests that the logoutSection is not created when the user is not logged in", () => {
    const context = {
      user: { isLoggedIn: false, email: "" },
      logOut: jest.fn(),
    };
    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("Tests that the logoutSection is created when the user is logged in", () => {
    const context = {
      user: { isLoggedIn: true, email: "test@test.com" },
      logOut: jest.fn(),
    };
    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toBe(true);
    expect(wrapper.find("#logoutSection").text()).toContain(
      "Welcome test@test.com"
    );
  });

  it("Tests that clicking the logout link calls the logOut function", () => {
    const logOutMock = jest.fn();
    const context = {
      user: { isLoggedIn: true, email: "test@test.com" },
      logOut: logOutMock,
    };
    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("#logoutSection a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });

  it('Tests that after logout, the component updates to show "School dashboard"', () => {
    const logOutMock = jest.fn();
    const context = {
      user: { isLoggedIn: true, email: "test@test.com" },
      logOut: logOutMock,
    };
    const wrapper = shallow(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>
    );

    // Simulate the click on logout link
    wrapper.find("#logoutSection a").simulate("click");

    // Set user to logged out (re-render)
    wrapper.setContext({ user: { isLoggedIn: false, email: "" } });

    expect(wrapper.find("h1").text()).toBe("School dashboard");
  });
});
