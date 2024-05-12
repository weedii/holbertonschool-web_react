import { shallow } from "enzyme";
import Header from "./Header";

describe("renders a div with the class App-header", () => {
  it("renders a div with the class App-header", () => {
    const res = shallow(<Header />);
    expect(res.find(".App-header").exists()).toBe(true);
  });

  it("test img exists", () => {
    const res = shallow(<Header />);
    expect(res.find("img").exists()).toBe(true);
  });

  it("test h1 exists", () => {
    const res = shallow(<Header />);
    expect(res.find("h1").exists()).toBe(true);
  });
});
