import react from "react";
import "./footer.css";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrap">
        <div className="footer-top">
          <div className="footer-top-left">
            <h1 className="footer-top-left-h1">Contact Us</h1>
            <p className="footer-top-left-p">
              New York, 4140 Parker Rd. Allentown, <br />
              New Mexico 31134{" "}
            </p>
            <span className="footer-top-left-span"> +1 (555) 656 77 89 </span>
            <h5 className="footer-top-left-h5">info@sample.com</h5>
          </div>
          <div className="footer-top-right">
            <h5 className="footer-top-right-h5">Sign me up!</h5>
            <p className="footer-top-right-p">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia <br />{" "}
              deserunt mollit anim id est laborum.
            </p>
            <div className="footer-input">
              <input
                type="text"
                placeholder="Enter your name"
                className="input-footer"
              ></input>
              <button className="button-footer">SUBMIT</button>
            </div>
            <div className="icons">
              <CgFacebook fontSize="30px"> </CgFacebook>
              <BsTwitter fontSize="30px"></BsTwitter>
              <GrInstagram fontSize="30px"></GrInstagram>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-p">
            Sample text. Click to select the text box. Click again or double{" "}
            <br /> click to start editing the text.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
