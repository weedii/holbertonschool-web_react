import React from "react";
import { shallow } from "enzyme";
import App from "./App";

window.alert = jest.fn();

describe("App Component", () => {
  it("calls logOut function when control + h are pressed", () => {
    const logOutMock = jest.fn();
    const wrapper = shallow(<App logOut={logOutMock} isLoggedIn={true} />);

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });

  it("calls alert with 'Logging you out' when control + h are pressed", () => {
    const logOutMock = jest.fn();
    shallow(<App logOut={logOutMock} isLoggedIn={true} />);

    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
  });
});
