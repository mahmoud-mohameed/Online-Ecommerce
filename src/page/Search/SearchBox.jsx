import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const[serachTerm,setSerachTerm]=useState("");
    const [searchproduct,setSearchproduct]=useState([]);
    const navigate=useNavigate();
    const location=useLocation()


   const handelonsubmit = (e)=>{
    e.preventDefault();
    if(serachTerm.trim())
        navigate(`/search?query=${encodeURIComponent( serachTerm.trim())}`);
      setSearchproduct([])

    }

    useEffect(()=>{

      if(!serachTerm.trim()){
        setSearchproduct([])
        return;

      }
      const feachdata= async ()=>{
        try{
          const res = await axios.get(`https://dummyjson.com/products/search?q=${serachTerm}`);
          setSearchproduct(res.data.products.slice(0,5) || [])
        }
        catch(error){
          console.log("no product found",error)
        }
      }
      const duration= setTimeout(() => {
        feachdata()
      }, 300);
      return()=>clearTimeout(duration)

    },[serachTerm])

    useEffect(()=>{
      setSerachTerm("")

    },[location])

  return (
    <>
    <div className="search-box">

   
    <form onSubmit={handelonsubmit} className="search-box">
           <input type="text" name='search' id='search' placeholder='search for product' autoComplete='off'
           value={serachTerm} onChange={(e)=>setSerachTerm(e.target.value)}/>
           <button type='submit'><FaSearch/></button>
          </form>
          {searchproduct.length>0 &&(
            <ul className='search_result'>
              {searchproduct.map((item)=>(
              <Link to={`/products/${item.id}`}>  <li key={item.id}> <img src={item.images[0]} alt={item.title}/> <span>{item.title}</span></li></Link>
              ))}
            </ul>
          )}
           </div>
    </>
   
  )
}

export default SearchBox