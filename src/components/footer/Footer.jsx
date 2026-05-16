import React from 'react'
import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
     <div className='footer'>
      <div className="container">

        <div className="top">
        <div className="follow_name">
        <h3>to follow us or communicate</h3>
        </div>
        <div className="follow">
          <li><a href="https://www.facebook.com/profile.php?id=100041785385858" target='blank' rel='noopener noreferrer'>  <FaSquareFacebook /></a></li>
          <li><a href="https://github.com/mahmoud-mohameed" target='blank' rel='noopener noreferrer'> <FaGithubSquare /></a></li>
          <li><a href="https://wa.me/201121775618" target='blank' rel='noopener noreferrer'> <FaWhatsapp/></a></li>
          <li><a href="https://www.linkedin.com/in/mahmoud-mostafa-180826362/" target='blank' rel='noopener noreferrer'> <FaLinkedin /></a></li>
        </div>


      </div>
      <div className="end">
        <span>Created and designed by <span className='endname'>Mahmoud Mohamed</span></span>
        <br />
        <span>2026</span>

      </div>

      </div>
      
      
        
    </div>
  )
}

export default Footer