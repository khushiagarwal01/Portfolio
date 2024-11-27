import React from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themecontext } from '../Context'
import { useContext } from 'react'
function Toggle() {
    const theme=useContext(themecontext);
    const darkmode=theme.state.darkmode;
    const handleclick=()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
<div className="toggle" onClick={handleclick} >
    <Moon></Moon>
    <Sun></Sun>
    <div className="t-button"  style={darkmode?{left:'2px'}:{right:'2px'}}>

    </div>


</div>      
    
  )
}

export default Toggle
