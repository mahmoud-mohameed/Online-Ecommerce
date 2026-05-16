
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import banner1 from "../img/banner_Hero1.jpg";
import banner2 from "../img/banner_Hero2.jpg";
import banner3 from "../img/banner_Hero3.jpg";
const HeroSlider = () => {
  return (
    <div className="hearoslider">
        <div className="container">
             <Swiper
  spaceBetween={30}
  centeredSlides={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, Pagination]}
>
       <SwiperSlide>
           <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox<br/>360 controller</h3>
                <p>Windows Xp/10/7/8 Ps3 tv Box</p>
                <Link to="/" className="btn">Shop Now</Link>
           </div>   
        
        <img src={banner1} alt='banner1'/>
        
       </SwiperSlide>
       <SwiperSlide>
           <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox<br/>360 controller</h3>
                <p>Windows Xp/10/7/8 Ps3 tv Box</p>
                <Link to="/" className="btn">Shop Now</Link>
           </div>   
        
        <img src={banner2} alt='baner2'/>
       </SwiperSlide>
       <SwiperSlide>
           <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft xbox<br/>360 controller</h3>
                <p>Windows Xp/10/7/8 Ps3 tv Box</p>
                <Link to="/" className="btn">Shop Now</Link>
           </div>   
        
        <img src={banner3} alt='banner3'/>
       </SwiperSlide>
      </Swiper>
     

        </div>
    </div>
  )
}

export default HeroSlider