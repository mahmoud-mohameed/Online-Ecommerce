import React from 'react'
import './Home.css';
import Cart from '../components/cart/cart/Cart';
import HomeSwiper from './HomeSwiper';


const SlideProduct = ({title, data}) => {
  return (
   <div className="slideproduct">
    <div className="container">
        <div className="topslideproduct">
            <h2>{title}</h2>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint?"</p>
        </div>
        <HomeSwiper data={data}/>
    </div>
   </div>
  )
}

export default SlideProduct