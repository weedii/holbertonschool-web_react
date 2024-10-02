import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

describe("BodySectionWithMarginBottom Component", () => {
  it("renders a div with the class bodySectionWithMargin", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test content</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find("div.bodySectionWithMargin").length).toBe(1);
  });
});
