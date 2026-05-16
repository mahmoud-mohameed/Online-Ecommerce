
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt,FaCartArrowDown,FaRegHeart,FaShare , FaCheckCircle} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, AddtoWish } from '../../Rtk/AppSlice';
import toast from 'react-hot-toast';



const Cart = ({item}) => {
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.item.Cart)
    const isincart=cart.some((i)=>i.id === item.id);
    const wishlist= useSelector((state)=>state.item.WishList)
    const isinwish= wishlist.some((i)=> i.id === item.id )
  
   

    const navigate=useNavigate()

    const Handeladdtocart=()=>{
       dispatch(AddToCart(item))
       if(!isincart){
        toast.success(
        
        <div className="stoast">
            <img src={item.images[0]} alt={item.name} className="imgtoast" />
            <div className="tost-contant">
                <h4 className='toast-name'>{item.title}</h4>
                <h5>added to cart </h5>
            
            <div> <button onClick={()=>navigate('/shopcart')} className='btn'> view cart</button></div>
           </div>
        </div>
        ,{duration:3500}
       )}

       
    }


  return (
    <>
     
   <div className={`cart ${isincart?"in-cart":""}`}>
    <Link to={`/products/${item.id}`}>

    <h1 className="stuts"><FaCheckCircle /> in Cart</h1>
          <div className="imgcart">
            
           
            <img src={item.images[0]} alt='image'/>
            
        
        </div>
        <div className="header">
            <h2>{item.title}</h2>
            
        </div>
    </Link>
    
  
        <div className="iconstar">
                 <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
               


        </div>
        <div className="price">
            
            <span>${item.price}</span>
        </div>
        <div className="icon">
            <span className='shop-cart' onClick={Handeladdtocart}><FaCartArrowDown /></span>
            <span className={`${isinwish?"isinwish":""}`} onClick={()=>{
                dispatch(AddtoWish(item))

                toast.success('item added from wishlist successfuly✅')
               
            }}><FaRegHeart /></span>
            <span><FaShare /></span>

        </div>
       

   </div>
   </>
  )
}

export default Cart