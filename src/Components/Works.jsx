import React from 'react'
import './Works.css';
import upwork from '../img/Upwork.png';
import fiver from '../img/fiverr.png';
import amazon from '../img/amazon.png';
import shopify from '../img/Shopify.png';
import facebook from '../img/Facebook.png';
import { useContext } from 'react';
import { themecontext } from '../Context';
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
function Works() {

    const theme=useContext(themecontext);
  const darkmode=theme.state.darkmode;
  return (
   <div className="works">
    <div className="awesome">
            <span style={{fontSize:"3rem",color:darkmode?'white':''}}>My Total Work</span>
            <span style={{fontSize:"3rem"}}>Using new Techstack</span>
            <span>"I am good in creating responsive, modern websites with 
                interactive designs, <br /> seamless user experiences, and dynamic features tailored 
                to your needs."</span>

                <Link to='contact' smooth={true} spy={true} activeClass="activeClass"><button className='button s-button'>Hire me</button></Link>
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

        </div>
        <div className="w-right">
            <motion.div className="w-maincircle"    initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}>
                <div className="w-circle">
                    <img src={upwork} alt="" /> </div>
                    <div className="w-circle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-circle">
                    <img src={facebook} alt="" />
                </div>
                <div className="w-circle">
                    <img src={shopify} alt="" />
                </div>
                <div className="w-circle">
                    <img src={fiver} alt="" />
                </div>
                </motion.div>
                <div className="bg-circle blue"></div>
                <div className="bg-circle yellow"></div>
            </div>
        </div>
   
  )
}

export default Works
