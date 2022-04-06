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
    <div>Work</div>
  )
}

export default Work