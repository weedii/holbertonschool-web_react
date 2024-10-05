const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes");

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

module.exports = { selectCourse, unSelectCourse };
