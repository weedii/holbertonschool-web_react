const { selectCourse, unSelectCourse } = require("./courseActionCreators");
const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes");

describe("courseActionCreators", () => {
  it("selectCourse should return the correct action object when called with index 1", () => {
    const expectedAction = {
      type: SELECT_COURSE,
      index: 1,
    };
    expect(selectCourse(1)).toEqual(expectedAction);
  });

  it("unSelectCourse should return the correct action object when called with index 1", () => {
    const expectedAction = {
      type: UNSELECT_COURSE,
      index: 1,
    };
    expect(unSelectCourse(1)).toEqual(expectedAction);
  });
});
