import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide } from'swiper/react';
import pr2 from '../img/pr2.png';
import ecom from '../img/pr3.png';
import pr from '../img/pr1.png';
import musicapp from '../img/musicapp.png';
import 'swiper/css'
import 'swiper/css/navigation'; // Swiper navigation styles
import 'swiper/css/pagination'; // Swiper pagination styles
import { Navigation, Pagination } from 'swiper/modules'; // Import modules
import { themecontext } from '../Context';
import { useContext } from 'react';
function Portfolio() {
  const theme=useContext(themecontext);
  const darkmode=theme.state.darkmode;
  return (
  <div className="portfolio" id='Portfolio'>
    <span style={{color:darkmode?'white':''}}>Recent Projects</span>
    <span>Portfolio</span>
    <Swiper
        modules={[Navigation, Pagination]} // Enable navigation and pagination
        spaceBetween={30} // Add space between slides
        slidesPerView={3} // Show one slide at a time
        navigation // Enable navigation buttons
        
        className='portfolio-slider'
        pagination={{ clickable: true }} // Enable clickable pagination
      >
        <SwiperSlide>
            <img src={musicapp} alt=""  style={{height:'10rem'}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={pr} alt=""  style={{height:'10rem'}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={pr2} alt=""  style={{height:'10rem'}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ecom} alt="" style={{height:'10rem'}} />
        </SwiperSlide>
    </Swiper>
    <span className='t1' style={{color:'black'}}>Others are in <span className='t2' style={{color:'var(--orange'}}>developing </span> phase..</span>
  </div>

  )
}

export default Portfolio
