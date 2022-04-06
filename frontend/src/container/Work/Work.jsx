import React,{useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import "./work.scss"

const Work = () => {

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1});

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, []);

  

  return (
    <>
      <h2 className="app__head-text">
        My <span>Portfolio</span> Section
      </h2>

      <div className="work-filter">
        {
          ['Web App, Mobile App, React JS, Node JS, All']
          .map((item,index) => (
            <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item app__flex app__p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
            {item}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Work