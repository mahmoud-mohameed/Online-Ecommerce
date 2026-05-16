import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaShare, FaStar } from "react-icons/fa";
import { FaStarHalfAlt, FaRegHeart} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './ProductDetails.css'
import SlideProduct from '../../page/SlideProduct';
import { useDispatch, useSelector, } from 'react-redux';
import { AddToCart, AddtoWish } from '../Rtk/AppSlice';
import toast from 'react-hot-toast';
import PageTransition from '../../page/PageTransition';
import { LuLoader } from "react-icons/lu";



const ProductDetails = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null)
    const [loading,setLoading]=useState(true)

    const [category,setCategory]=useState([])
    const [loadingcat,setLoadingCat]=useState(true)
    const imgRef = useRef();
    const dispatch=useDispatch()
     const navigate= useNavigate()
      const cart=useSelector((state)=>state.item.Cart)
     const isincart=cart.some((i)=>i.id === product?.id);
     const wishlist=useSelector((state)=>state.item.WishList)
     const isinwishlist=wishlist.some((i)=>i.id===product?.id)




    useEffect(()=>{
        const getproductdetails=async()=>{
            try{
                const res =await axios.get(`https://dummyjson.com/products/${id}`)
                setProduct(res.data)
                
                console.log(res)

            }
            catch(error){
                console.log("no product found", error)
            }
            finally{
                setTimeout(() => {
                    setLoading(false)
                }, 200);
                
                

            }
        }
        getproductdetails()

    },[id])
    useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}, [id]);
    

    useEffect(()=>{
        if(!product)return
        const fetch=async()=>{
            try{
                  const response=await axios.get(`https://dummyjson.com/products/category/${product.category}`)
                  setCategory(response.data.products)

            }
            catch(error){
                console.log("no data found",error)
            }
            finally{
                setLoadingCat(false)
            }
          

        }
        fetch()

    },[product])
    console.log(category)
    




    

    const Handeladdtocart=()=>{
       dispatch(AddToCart(product))
       if(!isincart){
        toast.success(
        
        <div className="stoast">
            <img src={product.images[0]} alt={product.name} className="imgtoast" />
            <div className="tost-contant">
                <h4 className='toast-name'>{product.title}</h4>
                <h5>added to cart </h5>
            
            <div> <button onClick={()=>navigate('/shopcart')} className='btn'> view cart</button></div>
           </div>
        </div>
        ,{duration:3500}
       )}

       
    }
    if (!product) return <p className='loading'>Loading related products...<LuLoader /></p>;
    
  return (
    <PageTransition key={id}> 
         <>
    { loading?(<p className='loading'><LuLoader /></p>):
   
   
   <div className="productdetails">
    <div className="container">
        <div className="left">
            <div className="topimage">
                <img ref={imgRef} src={product.images[0]} alt={product.title}/>
            </div>
            <div className="bottomimage">
                {product.images.map((img,index)=>{
                    return(
                        <img onClick={()=>(imgRef.current.src=img)} key={index} src={img} alt={img.title}/>
                    )

                })}

            </div>

        </div>
        <div className="right">
            <h1 className='name'>{product.title}</h1>
            
                <div className="iconstar">
                                 <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                               
                
                
                 </div>
                 <p className='price'>$ {product.price}</p>
                 <h3>Availability: <span>{product.availabilityStatus}</span></h3>
                 <h3>brand: <span>{product.brand}</span></h3>
                 <p>{product.description}</p>
                 <h3 className='stock'><span>Hurry Up! Only {product.stock} products left in stock.</span></h3>
                 <button className={`btn ${isincart?"in-cart":""}`} onClick={Handeladdtocart }>
                   {isincart?"item in cart":"Add To Car"} <TiShoppingCart />
                 </button>
                 <div className="icon">
                           
                             <span className={`${isinwishlist?"isinwishlist":""}`} onClick={()=>{dispatch(AddtoWish(product));
                                toast.success('item added from wishlist successfuly✅')}}><FaRegHeart /></span>
                             <span><FaShare /></span>
                 
                         </div>
                

            </div>

        </div>
    </div>}

    {loadingcat?(<p className='loading'><LuLoader /></p>):
    (<SlideProduct key={product.category} title={product.category.replace("-"," ")} data={category}/>)
    }
   
   </>

    </PageTransition>
   
    
  
  )
}

export default ProductDetails