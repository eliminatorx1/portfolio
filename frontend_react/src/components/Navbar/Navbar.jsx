import React from 'react'
import { useState } from 'react';

//importing the icons
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from 'framer-motion'; //this is to implement the animations 

import './Navbar.scss';
import {images} from '../../constants';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src= {images.logo} alt = "logo"/>
        </div>
        <ul className='app__navbar-links'>
            {["home", "about","work","skills","contact" ].map((item) =>(
               <li className='app__flex p-text' key = {`link-${item}`}> 
               {/* in the above line map will basically iterate over all the elements i.e perform the mentioned action on all the elements  */}
               {/* in the above line inside the backticks (``) template string is written template strings aloows an expression to be inserted or placed in the string i.e item here  */}
               <div>
                <a href={`#${item}`}>{item}</a>
                {/* in the above line this will redirect to the item list basically # will access the id and will link to the particular element ll */}
               </div>

               </li>
            ))}
        </ul>
        <div className='app__navbar-menu'>
              <HiMenuAlt4 onClick={() => setToggle(true)}/> 
              
             
              {
                toggle &&(
                  //this is equivalent to if toggle is true
                  <motion.div
                  whileInView={{x:[300, 0]}}
                  // the above line means that when it is in view it will take 300px 
                  transition = {{duration: 0.85, ease: "easeOut"}}
                  //for more properties of the framer motion refer to the framer motion site
                  
                  >
                    {/* using the framer motion in the above line  */}
                    <HiX onClick={() => setToggle(false)}/>
                    <ul>
                      {["home", "about","work","skills","contact" ].map((item) =>(
                      <li  key = {item}> 
                      {/* in the above line map will basically iterate over all the elements i.e perform the mentioned action on all the elements  */}
                      {/* in the above line inside the backticks (``) template string is written template strings aloows an expression to be inserted or placed in the string i.e item here  */}
                    
                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        {/* in the above line this will redirect to the item list basically # will access the id and will link to the particular element ll */}
                    

                        </li>
            ))}
            </ul>
                  </motion.div>
                )
              }



        </div>
    </nav>
  )
}

export default Navbar;