import React from 'react'
import './Contact.css'
import  { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import happy from '../img/happy.png'
import { useContext } from 'react';
import { themecontext } from '../Context';
function Contact() {
  const theme=useContext(themecontext);
  const darkmode=theme.state.darkmode;
   const[done,setDone]=useState(false);
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_3d3gyb9', 'template_1h21fpi', form.current, {
              publicKey: 'Gtt3QQETFkhoSZF2V',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                setDone(true);
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
  return (
    <div className="contact" id='contact'>
       <div className="left">
        <div className="awesome">

            <span style={{fontSize:"3rem",color:darkmode?'white':''}}>Get in touch</span>
            <span style={{fontSize:"3rem"}}>Contact me</span>
            
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}> </div>
                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>


                
                </div>

        </div>
        <div className="right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='Send' className='button but'/>
                <div className="happy">
         {done ? (
        <>
        <span>Thanks for contacting me!</span>
        <img src={happy} alt="Happy Emoji" />
        </>
        ) : null}
        </div>

                <div className="blur c-blur2" style={{background:"#ABF1FF94"}}></div>



            </form>
        </div>
    </div>
  )
}

export default Contact
