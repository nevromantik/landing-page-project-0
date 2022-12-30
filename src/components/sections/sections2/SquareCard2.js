import React from "react";
import "./SquareCard2.css";
const SquareCard2 = (props) => {
  return (
    <div className="squarecard2_wrap">
      <div className="sc2_left">
        <p className="sc2_p1">
          Odio eu feugiat pretium nibh ipsum <br /> consequat nisl. Adipiscing
          elit pellentesque <br /> habitant morbi tristique senectus. Ultrices{" "}
          <br /> neque ornare aenean euismod elementum. <br /> Dignissim sodales
          ut eu sem integer vitae <br />
          justo eget. Egestas erat imperdiet sed <br /> euismod nisi. Enim
          facilisis gravida neque <br /> convallis a cras semper auctor. Quam{" "}
          <br /> elementum pulvinar etiam non quam lacus <br /> suspendisse
          faucibus. Nibh nisl <br />
          condimentum.
        </p>
      </div>

      <div className="sc2_right">
        <img
          src={require("../../../assets/sq2.jpg")}
          alt="sq2"
          width={200}
          height={200}
          className="sq2-img"
        ></img>
        <p className="sc2_p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do
          eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua.
          Malesuada proin libero nunc consequat. Mauris <br /> ultrices eros in
          cursus. Nisl tincidunt eget nullam non nisi. <br /> Dignissim
          suspendisse in est ante in. Lectus vestibulum <br /> mattis
          ullamcorper velit sed ullamcorper morbi. Imperdiet <br /> dui accumsan
          sit amet.
        </p>
        <button className="cardsanimated__btn">READ MORE</button>
      </div>
    </div>
  );
};
export default SquareCard2;
