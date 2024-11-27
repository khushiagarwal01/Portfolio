import React from 'react'
import './Intro.css'
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';

import Instagram from '../img/instagram.png';
import vector1 from '../img/Vector1.png';
import vector2 from '../img/Vector2.png';
import boyyy from '../img/boyyy.png';
import crown from '../img/crown.png';
import thumbup from '../img/thumbup.png';
import glassemoji from '../img/glassesimoji.png';
import Floatingdiv from './Floatingdiv';
import { useContext } from 'react';
import { themecontext } from '../Context';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';

function Intro() {
    const transition1={duration:2,type:'spring'};
    const theme=useContext(themecontext);
    const darkmode=theme.state.darkmode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkmode?'white':''}} >Hy! I Am</span>
                <span>Khushi Agarwal</span>
                <span>MERN Stack developer with problem solving abilities and
                    experience in java,seeking opportunities 
                    to contribute in quality projects with agile methodology.

                </span>
            </div>
           <Link to='contact' smooth={true} spy={true} activeClass="activeClass"> <button className='button i-button'>Hire me</button></Link>
            <div className="i-icons">
                <a href="https://github.com/khushiagarwal01"> <img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/khushi-agarwal-13355a1a5"> <img src={Linkedin} alt="" /></a>
                <a href="https://www.instagram.com/khuu__shiii_/"> <img src={Instagram} alt="" /></a>
            </div>

        </div>
        <div className="i-right">
            <img src={vector1} alt="" />
            <img src={vector2} alt="" />
            <img  className='bo'   src={boyyy} alt="" />
            <motion.img className='floating-div'
            initial={{left:'-46%'}}
            whileInView={{left:'-24%'}}
            transition={transition1}
            
            src={glassemoji} alt="" />
            <motion.div 
             initial={{left:'76%' ,top:'-4%'}}
             whileInView={{left:'68%'}}
             transition={transition1}
            style={{top:'-4%',left:'68%'}} className='floating-div'> 
                <Floatingdiv image={crown} txt1="Web" txt2="Developer"></Floatingdiv>
            </motion.div>
            <motion.div className='floating-div'
             initial={{left:'9rem'}}
             whileInView={{left:'0rem'}}
             transition={transition1} style={{top:'18rem',left:'5rem'}}> 
                <Floatingdiv image={thumbup} txt1="Dedicated" txt2="Learner"></Floatingdiv>
            </motion.div>
            <div className='blur' style={{background:"rgb(236 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
