import React from 'react'
import './Navbar.css';
import Toggle from './Toggle.jsx'
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
        <div className="n-name">
  <span>K</span>
  <span>h</span>
  <span>u</span>
  <span>s</span>
  <span>h</span>
  <span>i</span>
</div>

            <Toggle></Toggle>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link to='Navbar' smooth={true} spy={true} activeClass="activeClass" ><li>Home</li></Link>
                    <Link to='Service' smooth={true} spy={true} activeClass="activeClass"><li>Services</li></Link>
                    <Link to='Experience' smooth={true}spy={true} activeClass="activeClass"><li>Experiences</li></Link>
                    <Link to='Portfolio' smooth={true} spy={true} activeClass="activeClass"><li>Portfolio</li></Link>
                    <Link to='Certificates'  smooth={true} spy={true} activeClass="activeClass"><li>Certificates</li></Link>

                    <Link to='contact' smooth={true} spy={true} activeClass="activeClass">    <button className='button n-button'>Contact</button></Link>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
