import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="app__head-text">Chat with me</h2>
      <div className="footer-cards">
        <div className="footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:alim.webdev@gmail.com" className="app__p-text">
            alim.webdev@gmail.com
          </a>
        </div>

        <div className="footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+995 571-07-00-05" className="app__p-text">
            (+995) 571-07-00-05
          </a>
        </div>

        <div className="footer-card">
          <img src={images.linkedIn} alt="linkedIn" />
          <a href="https://www.linkedin.com/in/alim999" className="app__p-text">
            linkedin.com/in/alim999
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "footer"), "contact", "app__whitebg");
