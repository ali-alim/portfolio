import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./about.scss";

const abouts = [
  {
    title: "FrontEnd Development",
    description: "I am good at FrontEnd Development",
    imgUrl: images.about01,
  },
  {
    title: "FullStack Development",
    description: "I use MERN stack for full stack development",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "Node.js is my passion",
    imgUrl: images.about03,
  },
  {
    title: "Web Design",
    description: "Not so addicted",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="app_head-text">
        What separates design from art is that design is meant to be...
        functional!
      </h2>
      <div className="about__profiles">
        {abouts.map((about, index) => (
          <motion.div 
          whileInView={{ opacity: 1 }}
          whileHover={{scale: 1.1}}
          transition = {{duration: 0.5, type:'tween'}}
          className="about__profile-item"
          key={`about-${index}`}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="app__bold-text" style={{margin: 20}}>{about.title}</h2>
            <p className="app__p-text" style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
