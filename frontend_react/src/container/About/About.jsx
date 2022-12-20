import React , {useState, useEffect} from 'react';

import {motion} from 'framer-motion';
import { AppWrap } from '../../wrapper';

import './About.scss'; //importing the About.scss file

import { urlFor,client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data)=>setAbouts(data))
  }, []);
  
  return (
   <>
    <h2 className='head-text'>
       Code Never lies
       <span style = {{color:'red'}}> Comments Sometimes do! </span>
    </h2>
    <div className='app__profiles'>
      {/* looping through the about section  */}
      {abouts.map((about,index) =>(
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          // {/* the above line will make the text to appear bigger as we hover on it  */}
          transition ={{duration: 0.5, type: 'tween'}}
          className = "app__profile-item"
          key = {about.title + index}
          >
    
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        

        </motion.div>
      ))}
      
    </div>


   </>
  );
};

export default AppWrap(About,'about');