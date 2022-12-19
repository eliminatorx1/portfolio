import React from 'react'

import {BsTwitter, BsInstagram, BsWhatsapp} from 'react-icons/bs';
import {FaFacebook, FafacebookF} from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebook/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsWhatsapp/>
        </div>
    </div>
  )
}

export default SocialMedia