import React from "react";
import "./Section1.css";
const Section1 = (props) => {
  return (
    <div className="section1-container">
      <div className="section1-item1">
        <h3 className="section1-h3">
          Turn your house <br /> into a Home
        </h3>
        <p className="p-s1-i1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
          Malesuada proin libero nunc consequat. Mauris ultrices eros in <br />{" "}
          cursus. Nisl tincidunt eget nullam non nisi. Dignissim suspendisse in{" "}
          <br />
          est ante in. Lectus vestibulum mattis ullamcorper velit sed <br />{" "}
          ullamcorper morbi. Imperdiet dui accumsan sit amet.
        </p>
      </div>
      <div className="section1-item2">
        <h5 className="section1-h5 position-h5">Interior Designing</h5>
        <p className="position-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </p>
        <h5 className="section1-h5 position-h5">Modern Building</h5>
        <p className="position-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
};

export default Section1;
