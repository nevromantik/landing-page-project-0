import React, { useState } from "react";
import "./Gallery.css";
import { FullScreen } from "@chiragrupani/fullscreen-react";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";

const images = [
  { image: image1, alt: "image1", id: 1 },
  { image: image2, alt: "image2", id: 2 },
  { image: image3, alt: "image3", id: 3 },
  { image: image4, alt: "image4", id: 4 },
  { image: image5, alt: "image5", id: 5 },
  { image: image6, alt: "image6", id: 6 },
];

const Gallery = (props) => {
  let [isFullScreen, setFullScreen] = useState(false);

  const [id, setId] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const GetImage = (e) => {
    setFullScreen(true);

    const clickedId = e.target.getAttribute("data-id");
    setId(clickedId);
    const selectedImg = images.find((el) => {
      return el.id == clickedId;
    });
    setSelectedImage(selectedImg);
    setIsClicked(!isClicked);
    console.log(selectedImg);
  };

  /*const swipe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (counter < 6) {
      setCounter((prev) => {
        return prev + 1;
      });
      setSelectedImage(images[counter]);
      if (counter === 5) {
        e.target.disabled = true;
      }
    }
  };*/

  return (
    <>
      <div className="cardsgallery_container">
        {images.map((el) => {
          return (
            <div
              className={`gallery_item ${
                isClicked ? "gallery_item_hidden" : ""
              }`}
              key={el.id}
            >
              <img
                data-id={el.id}
                alt={el.alt}
                className="gallery_image"
                src={`${el.image}`}
                width={363}
                height={380}
                onClick={GetImage}
              ></img>
            </div>
          );
        })}
      </div>

      <FullScreen
        isFullScreen={isFullScreen}
        onChange={(isFull) => {
          setFullScreen(isFull);
        }}
      >
        <img
          src={isClicked ? selectedImage.image : ""}
          className={`selected_image ${
            isFullScreen ? "img_show" : "img_hidden"
          }`}
          alt="ok"
        ></img>
      </FullScreen>
    </>
  );
};

export default Gallery;
