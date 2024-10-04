import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

// shallow render login component
describe("<Login />", () => {
  it("Tests that Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Tests that the component renders 2 <input> and 2 <label> tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(2); // 2 input fields (email and password)
    expect(wrapper.find("label").length).toBe(2); // 2 label fields
  });

  it("Tests that the submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(true); // Submit button is disabled by default
  });

  it("Tests that the submit button is enabled when both email and password are filled", () => {
    const wrapper = shallow(<Login />);
    // Simulate entering email and password
    wrapper
      .find("input#email")
      .simulate("change", { target: { value: "test@example.com" } });
    wrapper
      .find("input#password")
      .simulate("change", { target: { value: "password123" } });

    // Check that the submit button is enabled
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(false); // Submit button is enabled
  });
});
