import React from "react";
import "./SquareCard1.css";

const SquareCard1 = (props) => {
  return (
    <div className="squarecard1_container">
      <div className="squarecard1_wrap">
        <h1 className="squarecard1_h1">01</h1>
        <div className="squarecard1_left">
          <div className="s_c1_text">
            <h1>
              About <br /> Design
            </h1>
          </div>
          <img
            src={require("../../../assets/sq1.jpeg")}
            height={397}
            width={285}
            alt="sq1"
          ></img>
        </div>
        <div className="squarecard1_right"></div>
      </div>
      <div className="squarecard1_text_wrap">
        <p className="p_t">
          The event was a success, and we realized good ideas <br /> can come
          from anyone, anywhere, at any time. They <br /> also realized there
          were many others who wanted to <br /> support good ideas. So they left
          the Bank to launch <br /> the world’s first crowdfunding community in
          2002. <br /> Today, people in more than 165 countries can easily{" "}
          <br /> share their ideas, and <br />
          individual donors and companies can easily support vetted nonprofits.
        </p>
        <div className="squarecard1_right"></div>
      </div>
    </div>
  );
};
export default SquareCard1;
