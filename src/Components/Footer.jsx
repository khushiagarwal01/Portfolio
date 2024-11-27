import './Footer.css'
import React from 'react'
import Wave from '../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


function Footer() {
  return (
   <div className="footer">
    <img src={Wave} alt=""  style={{width:'100%'}}/>
    <div className="f-content">
        <span>Agarwalkhushi010101@gmail.com</span>
        <div className="f-icons">
            <Insta color='white' size='3rem'></Insta>
            <Linkedin color='white' size='3rem'></Linkedin>
            <Github color='white' size='3rem'></Github>
        </div>
        <span>Copyright@khushi</span>
    </div>
   </div>
  )
}

export default Footer
