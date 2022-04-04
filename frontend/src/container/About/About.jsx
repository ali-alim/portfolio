import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import {urlFor, client} from '../../client'

import "./about.scss";

// const abouts = [
//   {
//     title: "Frontend Development",
//     description: "I am good at FrontEnd Development",
//     imgUrl: images.about01,
//   },
//   {
//     title: "FullStack Development",
//     description: "I use MERN stack for full stack development",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Backend Development",
//     description: "Node.js is my passion",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Web Design",
//     description: "Not so addicted",
//     imgUrl: images.about04,
//   },
//   {
//     title: "Web Development",
//     description: "My passion as well",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data));
    
  }, []);
  


  return (
    <>
      <h2 className="app__head-text">
      <span>What separates design from </span><span>art</span>
        <br />
        is that design{" "}
        <span>
          <br />
          is meant to be...</span> 
          <br />
          functional!
        
      </h2>
      <div className="about__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="about__profile-item"
            key={`about.title-${index}`}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* <img src={about.imgUrl} alt={about.title} />  */}
            <h2 className="app__bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="app__p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
