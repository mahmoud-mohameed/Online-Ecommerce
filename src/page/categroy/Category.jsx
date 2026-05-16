import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from "axios"
import Cart from '../../components/cart/cart/Cart'
import "./Category.css"
import PageTransition from '../PageTransition'

const Category = () => {
    const {category}=useParams()
    const[categoryProducts,setCategoryProducts]=useState([])

    useEffect(()=>{
      const fechdata=async()=>{
        try{
          const res=await axios.get(`https://dummyjson.com/products/category/${category}`)
          setCategoryProducts(res.data.products)
          

        }
        catch(error){
          console.log(error)
        }
        
      }
      fechdata()

    },[category])

  return (
    <PageTransition>
 <>
    <div className='category'>
      <div className="container">
        <div className="topslideproduct">
            <h2>{category} {categoryProducts.limit}</h2>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, sint?"</p>
        </div>
        <div className="category-product">
          {categoryProducts.map((product) => (
        <Cart key={product.id} item={product}/>
      ))}

        </div>

      </div>
      
    </div>
    </>
    </PageTransition>
   
  )
}

export default Category