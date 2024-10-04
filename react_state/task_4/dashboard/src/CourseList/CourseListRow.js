import React, { useState } from "react";
import PropTypes from "prop-types";

const rowStyle = { backgroundColor: "#f5f5f5ab" };
const headerStyle = { backgroundColor: "#deb5b545" };
const rowCheckedStyle = { backgroundColor: "#e6e4e4" };

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={rowStyle}>
          <th style={headerStyle}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={rowStyle}>
          <th style={headerStyle}>{textFirstCell}</th>
          <th style={headerStyle}>{textSecondCell}</th>
        </tr>
      );
    }
  }

  return (
    <tr style={isChecked ? rowCheckedStyle : rowStyle}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
