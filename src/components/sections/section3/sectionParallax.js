import React from "react";
import "./sectionParallax.css";

const SectionParallax = (props) => {
  return (
    <>
      <div className="parallax">
        <div className="parallax-content">
          <h1 className="parallax-h1">
            Interior Design Ideas for Your <br /> Modern Home
          </h1>
          <p className="parallax-p">
            Sample text. Click to select the text box. Click again or <br />{" "}
            double click to start editing the text.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionParallax;
