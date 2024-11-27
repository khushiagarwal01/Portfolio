import React from 'react'
import './Service.css'
import heartemoji from '../img/heartemoji.png';
import glasses from '../img/glasses.png';
import humble from '../img/humble.png';
import Card from './Card';
import resume from './KhushiAgarwal_SDE_.pdf'
import { themecontext } from '../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

function Service() {
    const theme=useContext(themecontext);
    const darkmode=theme.state.darkmode;
    const transition1={duration:0.8,type:'spring'};
  return (
    <div className="service" id='Service'>
        <div className="awesome">
            <span style={{fontSize:"3rem" ,color:darkmode?'white':''}}>My Awesome</span>
            <span style={{fontSize:"3rem"}}>Services</span>
            <span>"I am good in creating responsive, modern websites with 
                interactive designs, <br /> seamless user experiences, and dynamic features tailored 
                to your needs."</span>
               <a href={resume} download> <button className='button s-button'>Download CV</button></a>
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

        </div>
        <div className="cards">
            <motion.div 
             initial={{left:'25%'}}
             whileInView={{left:'14rem'}}
             transition={transition1}
            
            style={{left:'14rem'}}>
                <Card emoji={heartemoji} heading='Design' detail={"Bootstrap,Canva,React-Bootstrap,Photoshop"} ></Card>
                
            </motion.div>
            <motion.div 
                 initial={{ left: "-11rem", top: "12rem" }}
                 whileInView={{ left: "-4rem" }}
               transition={transition1}
            
            style={{left:'-4rem' ,top:'12rem'}}>
                <Card emoji={glasses} heading='Frontend Developer' detail={"Html,Css,Javascript,MERN Stack"} ></Card>
                
            </motion.div>
            <motion.div
                      initial={{ top: "19rem", left: "25rem" }}
                      whileInView={{ left: "12rem" }}
            
             transition={transition1}
            
            style={{left:'12rem' ,top:'19rem'}}>
                <Card emoji={humble} heading='Software Developer' detail={"Java,Oops,DBMS,Git,Os, MySql"} ></Card>
                
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Service
