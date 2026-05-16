import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../img/logo1.png'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa"; 
import { TiShoppingCart } from "react-icons/ti";
import './Header.css'
import { useSelector } from 'react-redux';
import SearchBox from '../../page/Search/SearchBox';


 const TopHeader = () => {
    const shopcart=useSelector((state)=>state.item.Cart)
    const wishcart=useSelector((state)=>state.item.WishList)
  return (
   <div className="top_header">
    <div className="container">
       <Link to='/'>
       <img src={logo}alt='logo'/>
       </Link>

       <SearchBox/>
       
       <div className="header_icon">
        <div className="icon">
             <Link to='/wishcart'>
            <FaRegHeart />
            <span className='count'>{wishcart.length}</span>
            </Link>

        </div>
        <div className="icon">
            <Link to='/shopcart'>
            
            <TiShoppingCart />

            <span className='count'>{shopcart.length}</span></Link>

        </div>

       </div>
    </div>
   </div>
  )
}

export default TopHeader