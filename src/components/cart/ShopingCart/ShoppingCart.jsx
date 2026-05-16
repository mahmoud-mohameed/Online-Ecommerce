import React from 'react'
import './ShoppingCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaTrashCan } from "react-icons/fa6";
import { ClearCart, decreament, DeleteToCart, increament } from '../../Rtk/AppSlice';
import PageTransition from '../../../page/PageTransition';

const ShoppingCart = () => {
  const incart= useSelector((state)=>state.item.Cart)
  const disbatch=useDispatch();
  console.log(incart)
  const total=  incart.reduce((acc,item)=>acc +item.price * item.quantity ,0).toFixed(2);

  return (
    <PageTransition>
 <>
  <div className="shoppingcart">
    <div className="ordersummry">
      <h1 className="summry">order summry</h1>
      <div className="item">
        {incart.length === 0 ? (
  <p className='empty_cart'>Your cart is empty</p>
) : (
  incart.map((item) => (
    <div key={item.id} className="cart_item">
     <div className="img_name">
      <img src={item.images?.[0]} alt={item.name} />
      <div className="content">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div className="quantity_control">
          <button onClick={()=>(disbatch(decreament (item)))}>-</button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={()=>disbatch(increament(item))}>+</button>
        </div>
        </div>

      </div>
      <button  onClick={()=>disbatch(DeleteToCart(item))} className='delete_btn'><FaTrashCan /></button>
     </div>
    
  ))
)}
      </div>
      <div className="buttom_summry">
        <div className="shop-table">
          <p>Totle:</p>
          <span className='total_price'>${total}</span>
        </div>
        <div className="button-div">
          <button className='order' type='submit'>Place Order</button>
          <button onClick={()=>disbatch(ClearCart())} className='clear' >Clear all</button>
        </div>
      </div>
    </div>
  </div>
  
 
  
  </>
    </PageTransition>
 
 
    
  )
}

export default ShoppingCart