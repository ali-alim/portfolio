import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./navbar.scss";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {["home", "about", "works", "skills","contact"].map((item) => (
          <li className="app__flex app__p-text" key={`link -${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
                {
                    ['home', 'about', 'works', 'skills', 'contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>
                                {item}
                            </a>
                        </li>
                    ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
