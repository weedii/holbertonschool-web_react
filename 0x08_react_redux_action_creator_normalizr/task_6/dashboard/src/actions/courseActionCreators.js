const { SELECT_COURSE, UNSELECT_COURSE } = require("./courseActionTypes");
import { bindActionCreators } from "redux";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export const boundCourseActionCreators = (dispatch) =>
  bindActionCreators({ selectCourse, unSelectCourse }, dispatch);
