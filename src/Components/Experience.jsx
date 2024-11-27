import React from 'react'
import './Experience.css'
import { useContext } from 'react';
import { themecontext } from '../Context';
import photo from '../img/khushi.jpeg';

function Experience() {
    const theme = useContext(themecontext);
    const darkmode = theme.state.darkmode;

    return (
        <div className="experience" id='Experience'>
            <div className="experience-container">
                {/* Left side: Your image */}
                <div className="experience-image">

                    <div className="image-wrapper">
                    <span class="image-text khushi-text">Khushi's</span> 
                    <span class="image-text skills-text">Skills...</span>
                    <img src={photo} alt="Your Name" className="experience-photo" />
                    </div>
                    <div className='blur' style={{background:"#ABF1FF94"}}> </div>
                </div>
               
                <div className='blur' > </div>
                {/* Right side: Experience information */}
                <div className="achievements">
                    {/* First Row */}
                    <div className="achievement-row">
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>3+</div>
                            <span className='span1'>years</span>
                            <span>Experience</span>
                        </div>
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>5+</div>
                            <span className='span1'>Completed</span>
                            <span>Projects</span>
                        </div>
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>1</div>
                            <span className='span1'>Internship</span>
                            <span>Done</span>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="achievement-row">
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>100%</div>
                            <span className='span1'>Communication</span>
                            <span>Skills</span>
                        </div>
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>100%</div>
                            <span className='span1'>Problem</span>
                            <span>Solver</span>
                        </div>
                        <div className="acheivement">
                            <div className="circle" style={{color: darkmode ? 'black' : '', border: darkmode ? '4px solid var(--orange)' : ''}}>100%</div>
                            <span className='span1'>Leadership</span>
                            <span>Skills</span>
                        </div>
                        <div className='blur1' style={{background:"var(--purple"}}> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;
