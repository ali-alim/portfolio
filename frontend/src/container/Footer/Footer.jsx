import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="app__head-text">Take a coffee & chat with me</h2>
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
      </div>

      {!isFormSubmitted ? (
        <div className="footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="app__p-text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              type="text"
              className="app__p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="app__p-text"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="app__p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="app__head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

// export default Footer;
export default AppWrap(MotionWrap(Footer, "footer"), "contact", "app__whitebg");
