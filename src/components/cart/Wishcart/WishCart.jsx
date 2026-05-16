import React from 'react'
import './WishCart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DeletetoWish,ClearWish, AddToCart } from '../../Rtk/AppSlice'
import PageTransition from '../../../page/PageTransition'

const WishCart = () => {
  const wishlist=useSelector((state)=>state.item.WishList)
  const dispatch=useDispatch();
  const handelremove=(product)=>{
    dispatch( DeletetoWish(product))
  }
  const cart=useSelector((state)=>state.item.Cart)

 
  return (
    <PageTransition>
<>

    <div className="wishpage">
      <div className="container">
        {wishlist.length === 0 ?<p className='empty_wish'> your wishlist is empty</p>:<><div className="clear">
          <button className='btn' onClick={()=>dispatch(ClearWish())}>Remove All favourites</button>
        </div>
        <div className="wish">
          <div className="wish-contant">
            {wishlist.map((product)=>{
               const isinshopcart=cart.some((i)=>i.id ===product.id )
              return(
                <div key={product.id} className="cart-wish">
                  <Link to={`/products/${product.id}`}>
                  <div className="wish-img">
                    
                    <img src={product.images[0]} alt={product.title}/>
                  </div>
                  <div className="wishname">
                    <h2>{product.title}</h2>
                  </div>
                  </Link>
                  <div className="wishprice">
                     <span>$ {product.price}</span>
                  </div>
                  <div className="butttons">
                     <button className="btn btn-1" onClick={()=>handelremove(product)}> remove</button>
                     <button className={`btn ${isinshopcart?"is-in-cart":""}`}
                     onClick={()=>dispatch(AddToCart(product))}> {isinshopcart? "item in cart":"Add To Cart"}</button>

                  </div>
                 


                </div>
              )
            })}

          </div>
        </div></>}
        
      </div>
    </div>
    </>
    </PageTransition>
    
  )
}

export default WishCart