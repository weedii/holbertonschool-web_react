import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

// shallow render footer component
describe("<Footer />", () => {
  let wrapper;

  it("Tests that Footer renders without crashing", () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the text "Copyright"', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });

  it('Does not display the "Contact us" link when the user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } }; // Simulate logged out state
    wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).not.toContain("Contact us");
  });

  it('Displays the "Contact us" link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } }; // Simulate logged in state
    wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain("Contact us");
  });
});
