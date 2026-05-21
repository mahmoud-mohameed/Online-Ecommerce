import React , { useRef } from 'react'
import './Contact.css'
import PageTransition from '../PageTransition'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";

import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
     const form = useRef();
    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_i8ugaq9',
      'template_ioialir',
      form.current,
      '6UTNd9fh1UdFqlyaL'
    )
    .then(() => {
      toast.success("Message sent successfully")
      form.current.reset(); 
    })
    .catch((err) => {
      console.log(err);
      alert("Error sending message");
    });
};
  return (
    <PageTransition>
 <div className="contact">
    <div className="container">
        <div className="contact_us">
            <div className="address">
                <h1>Address <FaLocationDot /></h1>
                <p>Mohamed Yousef st.</p>
                <p>Shobura,Cairo</p>
            </div>
            <div className="phone">
                <h1>Contacts <IoIosPhonePortrait /></h1>
                <p>01121775618(Whatsapp)</p>
                <p>01080752276</p>
            </div>
            <div className="email">
                <h1>Emails <MdMarkEmailRead /></h1>
                <p>mahmoudmohamed2860@yahoo.com</p>
                <p>mostafa143mahmoud@gmail.com</p>
            </div>
        </div>
        <div className="contact_form">
            <h1 className="header_form">
                Leave your message here
            </h1>
            <form ref={form} onSubmit={sendEmail}>
                <input name='name' required placeholder='Enter your name'/>
                <input name='phone' required placeholder='Enter your phone'/>
                <textarea name='message' required placeholder='Enter your message' />
                <button type="submit">send message</button>
            </form>
        </div>
    </div>
   </div>
    </PageTransition>
  
  )
}

export default Contact