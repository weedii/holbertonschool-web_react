import React from "react";
import BodySection from "./BodySection";
import "BodySectionWithMarginBottom.css";

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection title={title} children={children} />
    </div>
  );
};

export default BodySectionWithMarginBottom;
