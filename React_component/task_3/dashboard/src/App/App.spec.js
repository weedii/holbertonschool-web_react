import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should display the title "Log in to continue" above the Login component when isLoggedIn is false', () => {
    wrapper.setProps({ isLoggedIn: false });
    const loginSection = wrapper.find(Login);
    expect(
      wrapper.find(BodySectionWithMarginBottom).first().prop("title")
    ).toMatch(/log in to continue/i);
    expect(loginSection.exists()).toBe(true);
  });

  it('should display the title "Course list" above the CourseList component when isLoggedIn is true', () => {
    wrapper.setProps({ isLoggedIn: true });
    const courseListSection = wrapper.find(CourseList);
    expect(
      wrapper.find(BodySectionWithMarginBottom).first().prop("title")
    ).toMatch(/course list/i);
    expect(courseListSection.exists()).toBe(true);
  });

  it('should display the title "News from the School" and a paragraph with text "Holberton School News goes here" by default', () => {
    const newsSection = wrapper.find(BodySectionWithMarginBottom).last();
    expect(newsSection.prop("title")).toMatch(/news from the school/i);
    expect(newsSection.find("p").text()).toMatch(
      /holberton school news goes here/i
    );
  });
});
