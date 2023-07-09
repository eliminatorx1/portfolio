import React , {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import  {Tooltip as ReactTooltip} from '@mui/material';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';


import './Skills.scss';
import { style } from '@mui/system';

const Skills = () => {

  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsquery = '*[_type == "skills"]'; //fectching the data from the sanity client
    
    client.fetch(query)
      .then((data) =>{
        setExperience(data);
      });
    client.fetch(skillsquery)
      .then((data) =>{
        setSkills(data);
      });
  
  }, [])
  return (
    <>
      <h2 id = "testimonial" className='head-text' >Skills & <span style={{color: "red" }}>Technologies</span> </h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skill) =>(
            <motion.div
              whileInView={{opacity:[0, 1]}}
              whileHover={{scale: 1.1}}
              transition = {{duration: 0.1, type: 'tween'}}
              className = "app__skills-item app__flex"
              key = {skill.name}
              >

                <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                  <img src= {urlFor(skill.icon)} alt = {skill.name}/>
                </div>
                <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}

        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience?.map((experience) => (
            <motion.div
            className='app__skills-exp-item'
            key={experience.year}
            > 
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) =>(
                  <>
                  <motion.div
                  whileInView={{opacity:[0, 1]}}
                  // whileHover={{scale: 1.1}}
                  transition = {{duration: 0.1, type: 'tween'}}
                  className = "app__skills-exp-work app__flex"
                  data-tip 
                  data-for = {work.name}
                  key = {work.name}
                  >

                  <ReactTooltip
                  id = {work.name}
                  title = {work.desc}
                  effect = "solid"
                  arrow
                  className = "skills-tooltip"
                  >
                    
                    <h4 className='bold-text'>{work.name}</h4>
      
                  </ReactTooltip>
                   <p className='p-text'>{work.company}</p>
                    
                  </motion.div>
                  
                  </>
                  
                ))}
              </motion.div>

            </motion.div>
            
          ))}
            

        </motion.div>

      </div>
    </>
    
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
  );