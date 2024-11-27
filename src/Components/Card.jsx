import React from 'react'
import './Card.css'
function Card({emoji,heading,detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
       <a href="https://drive.google.com/file/d/1iRrrLIelQJUT5-ZikP7MGHceHj9DW1BD/view?usp=drive_link" target='_blank'> <button className="c-button">Learn More</button></a>
    </div>
  )
}

export default Card
