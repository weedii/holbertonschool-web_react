import { shallow } from "enzyme";
import Login from "./Login";

describe("renders a div with the class App-body Login", () => {
  it("renders a div with the class App-body", () => {
    const res = shallow(<Login />);
    expect(res.find(".App-body").exists()).toBe(true);
  });

  it("test 2 inputs exists", () => {
    const res = shallow(<Login />);
    expect(res.find("input")).to.have.lengthOf(2);
  });

  it("test 2 labels exists", () => {
    const res = shallow(<Login />);
    expect(res.find("label")).to.have.lengthOf(2);
  });
});
