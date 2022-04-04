import { motion } from 'framer-motion'
import React from 'react'
import { images } from '../../constants'
import "./header.scss"

const Header = () => {
  return (
    <div className='header app__flex'>
      <motion.div
      whileInView={{x:[-100,0],opacity:[0,1]}}
      transition={{duration:0.5}}
      className="header-info"
      >
        <div className="header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
            <p className="app__p-text">Hello, I am</p>
            <h1 className="app__head-text">Ali</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="app__p-text">Web Developer</p>
            <p className="app__p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      
    


    </div>
  )
}

export default Header