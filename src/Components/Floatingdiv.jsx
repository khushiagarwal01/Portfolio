import React from 'react'
import './Floatingdiv.css'
import { useContext } from 'react';
import { themecontext } from '../Context';
function Floatingdiv({image ,txt1,txt2}) {
  const theme=useContext(themecontext);
    const darkmode=theme.state.darkmode;
  return (
 <div className="f-div">
    <img src={image} alt="" />
    <span style={{color:darkmode?'black':''}}>{txt1}
        <br />
        {txt2}
    </span>
 </div>
  )
}

export default Floatingdiv
