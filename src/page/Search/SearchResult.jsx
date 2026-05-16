import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Cart from '../../components/cart/cart/Cart';
import PageTransition from '../PageTransition';
import "./Search.css"

const SearchResult = () => {
    const query= new URLSearchParams(useLocation().search).get("query");
    const[result,setResult]=useState([]);
    const [loading,setLoading]=useState(true);
    console.log(result)
    useEffect(()=>{
        const feachdata=async()=>{
            try{
                const res= await axios.get(`https://dummyjson.com/products/search?q=${query}`);
                setResult(res.data.products || [])
            }
            catch(error){
                console.log("no product found",error)
            }finally{
                setLoading(false)
            }
        }
        if(query) feachdata()
    },[query])
  return (
   <PageTransition>
    <div className="search_result">
        {loading?(<p>ffffffff</p>):
            result.length >0 ?(<div className="cearch">
                <div className="container">
                    <div className="topslide">
                        <h2>Result for : {query}</h2>
                    </div>
                    <div className="search">
                        {result.map((item)=>{
                            return(
                                 <Cart key={item.id} item={item}/>
                            )
                           
                        })}

                    </div>
                </div>
            </div>):(
                <div className="container">
                    <p className='no-result'>No products found</p>
                </div>
            )
        }
    </div>
   </PageTransition>
  )
}

export default SearchResult