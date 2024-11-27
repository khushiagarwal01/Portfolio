import React from 'react';
import './Certificates.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import pic1 from '../img/certificate.png';
import pic2 from '../img/certificate 2.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css'

function Certificates() {
  const clients = [
    { img: pic1, review:<i> "Demonstrated innovative problem-solving by participating in Smart India Hackathon, developing skills to solve real world problme in collaborative environment."</i>,
        link:"https://drive.google.com/file/d/1KP4HqjD90Y7UOlDXPPMVS4QjMxpf416u/view?usp=drive_link"

 },
    { img: pic2, review: <i>"Guided and mentored learners in core Java and Python programming concepts during a comprehensive instructor internship in Triluxo Technologies." </i>,
      link:"https://drive.google.com/file/d/1_J8EA9HX10CHaVByoRmftQX603E93ec_/view?usp=drive_link"
    },
    { img: pic1, review: <i>"Led and organized successful events as Event Head of my college's technical club Abacus Society, fostering innovation and collaboration."</i> },
{ img: pic2, review:<i> "Completed 350+ LeetCode and Gfg questions and earned the 100 Days of LeetCode certificate, showcasing consistent problem-solving skills."</i>,
    link:"https://leetcode.com/u/KhushiAgarwal01/"

}, { img: pic1, review:<i> "Completed the Meta Front-End Developer certification on Coursera, gaining expertise in Html,Css,React, JavaScript, responsive design, and UI/UX best practices."</i>,
  link:"https://drive.google.com/file/d/1KP4HqjD90Y7UOlDXPPMVS4QjMxpf416u/view?usp=drive_link"


}, { img: pic2, review:<i> "Earned a certificate for participation and achievement in a college-level debate competition, showcasing excellent critical thinking and public speaking skills."</i>,
    link:"https://drive.google.com/file/d/1KP4HqjD90Y7UOlDXPPMVS4QjMxpf416u/view?usp=drive_link"

},
  ];

  return (
    <div className="c-wrapper" id='Certificates'>
      <div className="heading">
        <span>Acheivements & Certificates </span>
        <span>I Have Earned  </span>
        <span>Till Now...</span>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background:"skyblue"}}></div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="portfolio-slider"
      >
        {clients.map((client, index) => {
          return (<SwiperSlide key={index}>
            <div className="certi">
            <img className="k"src={client.img} alt="Certificate" />
            <span>{client.review}</span>
            <a href={client.link} target='_blank'><button className='button b'>View Certificate</button></a>
            </div>
          </SwiperSlide>);
})}
      </Swiper>
    </div>
  );
}

export default Certificates;
