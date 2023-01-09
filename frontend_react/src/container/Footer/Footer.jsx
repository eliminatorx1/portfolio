import React, {useState} from 'react'
import { client } from '../../client';

import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({name:'', email:'',message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const{name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]:value});
  }

  const handleSubmit = () =>{
    setLoading(true);

    const contact = {
      _type:'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() =>{
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }







  return (
    <>
      <h2 className='head-text'>grab a cup of Tea & <span style={{color:"#ff347f"}} >chat with me</span> </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt = "email"/>
          <a href='mailto:sandeepiitm2003@gmail.com' className='p-text'>sandeepiitm2003@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt = "mobile"/>
          <a href='tel:8287592269' className='p-text'>8287592269</a>
        </div>

      {!isFormSubmitted}
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' name = "name" type="text" placeholder = "Your Name" value = {name} onChange = {handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input className='p-text' name = "Email" type="email" placeholder = "Your Email" value = {email} onChange = {handleChangeInput}/>
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name = {message}
              onChange = {handleChangeInput}
              />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading?'sending' :'Send Message'}</button>
        </div>

      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)