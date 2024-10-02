import React from "react";
import { shallow } from "enzyme";
import WithLogging from "./WithLogging";

class MockApp extends React.Component {
  render() {
    return <h1>Hello from Mock App Component</h1>;
  }
}

describe("WithLogging HOC", () => {
  let WrappedComponent;

  beforeEach(() => {
    WrappedComponent = WithLogging(MockApp);
  });

  it("should render the MockApp component with the correct heading", () => {
    const wrapper = shallow(<WrappedComponent />);

    expect(wrapper.find("h1").text()).toEqual("Hello from Mock App Component");
  });
});
