import React from 'react'

import {BsTwitter, BsInstagram, BsWhatsapp} from 'react-icons/bs';
import {FaFacebook, FaFacebookF, FafacebookF} from 'react-icons/fa';
import { VscGithub } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>

           <a href='https://github.com/eliminatorx1' target='_blank'><VscGithub/></a> 
        </div>
        <div>
            <a href='https://www.linkedin.com/in/sandeep-singh-535009224/' target='_blank'><GrLinkedin/></a>
        </div>
    </div>
  )
}

export default SocialMedia