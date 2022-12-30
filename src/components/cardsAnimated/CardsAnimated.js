import React, { useEffect } from "react";
import "./CardsAnimated.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CardsAnimated = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="cardsAnimated_container">
      <div className="card-animated-1" data-aos="flip-down">
        <img
          src={require("../../assets/imgcard1.jpg")}
          height="308"
          width={255}
          alt="img1"
        />
        <div className="cardsanimated__info">
          <h4 className="c_a_h4">Yellow Sofa</h4>
          <p className="c_a_p">
            Duis aute irure dolor in <br /> reprehenderit in voluptate <br />{" "}
            velit esse cillum dolore eu <br /> fugiat nulla pariatur. <br />{" "}
            Excepteur sint occaecat
          </p>
          <button className="cardsanimated__btn">ADD TO CART</button>
        </div>
      </div>
      <div className="card-animated-2" data-aos="flip-down">
        <img
          src={require("../../assets/imgcard2.jpg")}
          height="308"
          width={255}
          alt="img2"
        />
        <div className="cardsanimated__info">
          <h4 className="c_a_h4">Yellow Sofa</h4>
          <p className="c_a_p">
            Duis aute irure dolor in <br /> reprehenderit in voluptate <br />{" "}
            velit esse cillum dolore eu <br /> fugiat nulla pariatur. <br />{" "}
            Excepteur sint occaecat
          </p>
          <button className="cardsanimated__btn">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default CardsAnimated;
