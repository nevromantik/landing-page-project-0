import React from "react";
import "./CardsContainer.css";
import SquareCard1 from "../sections/sections2/SquareCard1";
import SquareCard2 from "../sections/sections2/SquareCard2";
import SquareCard3 from "../sections/sections2/SquareCard3";
const CardsContainer = (props) => {
  return (
    <div className="squarecards_layout">
      <SquareCard1></SquareCard1>
      <h1 className="h1_sqc_text">Turn your house into a Home</h1>
      <p className="p_sqc_text">
        Modern Décor to help you achieve your dream interior
      </p>
      <SquareCard2></SquareCard2>
      <SquareCard3></SquareCard3>
    </div>
  );
};
export default CardsContainer;
