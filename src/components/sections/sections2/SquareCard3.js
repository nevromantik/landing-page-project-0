import React from "react";
import "./SquareCard3.css";
const SquareCard3 = (props) => {
  return (
    <div className="squarecard3_wrap">
      <div className="sc3_left">
        <div className="sc3left1">
          <div className="sc3l1">
            {" "}
            <h1 className="sq3_h1">02</h1>
          </div>

          <img
            src={require("../../../assets/sq3.jpeg")}
            alt="sq3"
            width={280}
            height={285}
          ></img>
        </div>

        <div className="sc3left1">
          <img
            src={require("../../../assets/sq3_b.jpeg")}
            alt="sq3"
            width={280}
            height={285}
          ></img>
          <div className="sc3l1 sc3l1b">
            <h1>
              About <br /> Desing
            </h1>
          </div>
        </div>
      </div>

      <div className="sc3_right">
        <h3 className="h3sc3right">about workshop</h3>
        <p className="p3sc3right">
          The event was a success, and we realized good ideas can <br />
          come from anyone, anywhere, at any time. They also <br /> realized
          there were many others who wanted to support <br /> good ideas. So
          they left the Bank to launch the world’s first <br /> crowdfunding
          community in 2002. Today, people in more <br /> than 165 countries can
          easily share their ideas, and <br />
          individual donors and companies can easily support vetted <br />{" "}
          nonprofits.
        </p>
      </div>
    </div>
  );
};
export default SquareCard3;
