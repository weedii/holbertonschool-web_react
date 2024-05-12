import { shallow } from "enzyme";
import Footer from "./Footer";

describe("renders a div with the class App-footer Footer", () => {
  it("renders a div with the class App-footer", () => {
    const res = shallow(<Footer />);
    expect(res.find(".App-footer").exists()).toBe(true);
  });
});
