import React, { useEffect, useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import './Home.css'
import SlideProduct from './SlideProduct'
import axios from 'axios'
import PageTransition from './PageTransition'


const Home = () => {
  const catname=["smartphones","mobile-accessories","laptops", "sunglasses","sports-accessories","tablets",]
  const [data,setData]=useState({})
  const [productFound,setProductFound]=useState(true)
  useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const request = await Promise.all(
          catname.map(async(cat)=>{
            const res= await axios.get(`https://dummyjson.com/products/category/${cat}`)
            return{[cat]:res.data.products}
          })

        )
        const productdata=Object.assign({},...request)
        setData(productdata)
        

      }
      catch(error){
        console.error("error: no data founded",error )
      }
      finally{
        setProductFound(false)
      }
    }
    fetchdata()

  },[])

  
  return (
    <PageTransition>
<><HeroSlider/>
    {productFound ?(
      <p>loading.....</p>
    ):(catname.map((title)=>(
      <SlideProduct key={title} data={data[title]} title={title.replace("-", " ")} />

    )))}
    
    
    
    </>

    </PageTransition>
    
  )
}

export default Home