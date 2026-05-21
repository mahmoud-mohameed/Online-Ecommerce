import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from '../Rtk/AppSlice';
import { MdDarkMode, MdLightMode } from "react-icons/md";




 const BotemHeader = () => {
  const location =useLocation()
  const [data,setData]=useState([])
  const [isOpen, setIsOpen]=useState(false);
  const [mobilemenu,setMobilemenu]=useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.item.theme);
  useEffect(()=>{
    const getData=async()=>{
      try{
        const res= await axios.get('https://dummyjson.com/products/categories')
        setData(res.data)
        // console.log(res.data)
      }
      catch(error){
        console.log("Error fetching data:", error);

      }
    }
    getData();


  },[])
useEffect(()=>{
  setIsOpen(false)
  setMobilemenu(false)
},[location.pathname])


  const NavLink=[{link:"/",name:"Home"},
    
    {link:"/about",name:"About"},
   
    {link:"/blog",name:"Blog"},
    {link:"/contact",name:"Contact Us"},
  ]
  return (
    <div className="bottom_header">
      <div className="container">
        <div className="nav">
          <div className="category_nav">
            <div className="category_btn" onClick={()=>{setIsOpen(!isOpen);setMobilemenu(false)}}>
              <HiMenu  />
              <p className='menu2'>Browse Category</p>
              <MdArrowDropDown className='menu1'/>


            </div>
            <div className={`category_list ${isOpen?"active":""}`}>
              {data.map((cat)=>{
                return( <Link key={cat.slug} to={`category/${cat.slug}`}>{cat.name}</Link>)
               
              })}

            </div>
          </div>
          
          <div className="category_link">
           { NavLink.map((item)=>(
             <li key={item.link} className={location.pathname === item.link? "active":""}><Link to={item.link}>{item.name}</Link></li> 
            ))}

          </div>
                <div className="mobile_menuicon" onClick={() => {setMobilemenu(!mobilemenu);setIsOpen(false)}}>
            <HiMenu /> <span className='mo_page'>page</span>
          </div>
          <div className={`mobile_menu ${mobilemenu ? "active" : ""}`}>
            {NavLink.map((item)=>(
              <li key={item.link} className={location.pathname === item.link? "active":""}><Link to={item.link}>{item.name}</Link></li> 
              
            ))}
          </div>
        </div>
  
          
        <div className="register_icon">
          <button className="theme_btn"onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}</button>
           <Link to="/"><FaUserPlus /></Link>
        </div>
      </div>
      
    </div>
  )
}
export default BotemHeader
