import React, { useState } from "react";
import "./Menu.css";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let navOpen = "navbar-wrap-open";
  let navClose = "navbar-wrap-close";

  let overlayOpen = "overlay-open";
  let overlayClose = "overlay-close";

  let navOverlay = "navbackground";
  const openMenu = (e) => {
    if (isOpen !== true) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "scroll";
    }
  };

  const closeMenu = (e) => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <>
      <div className={` ${isOpen ? overlayOpen : overlayClose}`}></div>
      <nav className={` ${isOpen ? navOverlay : ""}`}>
        <TfiMenu fontSize="30px" onClick={openMenu}></TfiMenu>
        <div className={` ${isOpen ? navOpen : navClose}`}>
          <AiOutlineClose
            fontSize="20px"
            style={{
              marginLeft: "200px",
              marginTop: "30px",
            }}
            onClick={closeMenu}
          ></AiOutlineClose>
          <p className="p-nav">Home</p>
          <p className="p-nav">About</p>
          <p className="p-nav">Contact</p>
        </div>
      </nav>
    </>
  );
};

export default Menu;
