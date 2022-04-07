import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import ReactToolTip from 'react-tooltip'
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'
import "./skills.scss"



const Skills = () => {

  useEffect(()=>{

    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query)
    .then((data) => setExperience(data));

    client.fetch(skillsQuery)
    .then((data) => setSkills(data));

  }, [])

  return (
    <>
    <h2 className='app__head-text'>Skills & Experience</h2>
    <div className="skills-container">
      <motion.div className='skills-list'>

      </motion.div>
    </div>
    </>
  )
}

export default Skills