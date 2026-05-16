import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Cart: JSON.parse(localStorage.getItem('Cart')) ||[],
     WishList: JSON.parse(localStorage.getItem('WishList')) || [],
     theme: localStorage.getItem('theme') || 'light'

} 
const AppSlice=createSlice({
    name:"AppSlice",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
            const product = state.Cart.find((product)=>product.id ===action.payload.id );
           if (!product){
                 state.Cart.push({...action.payload,quantity: 1})
            }
            localStorage.setItem('Cart', JSON.stringify(state.Cart));

        },
        DeleteToCart:(state,action)=>{
            state.Cart=state.Cart.filter((product)=>product.id !==action.payload.id )
              localStorage.setItem('Cart', JSON.stringify(state.Cart));

        },
        ClearCart:(state)=>{
             state.Cart = [];
            localStorage.setItem('Cart', JSON.stringify(state.Cart));
        },
        increament:(state,action)=>{
            const product=state.Cart.find((item)=>item.id === action.payload.id)
            product.quantity=product.quantity+1
            localStorage.setItem('Cart', JSON.stringify(state.Cart));
        },
        decreament:(state,action)=>{
            const product=state.Cart.find((item)=>item.id===action.payload.id)
            if( product.quantity===1){
                 product.quantity = 1;
            }
            else{
                 product.quantity = product.quantity -1;
            }
            localStorage.setItem('Cart',JSON.stringify(state.Cart))
        },
        AddtoWish:(state,action)=>{
            const product=state.WishList.find((state)=>state.id=== action.payload.id)
           if (!product){
            state.WishList.push({...action.payload})
                
            }
            localStorage.setItem('WishList',JSON.stringify(state.WishList))
            
        },
        DeletetoWish:(state,action)=>{
            state.WishList=state.WishList.filter((state)=>state.id !== action.payload.id)
            localStorage.setItem('WishList',JSON.stringify(state.WishList))

        },
        ClearWish:(state)=>{
            state.WishList=[]
             localStorage.setItem('WishList',JSON.stringify(state.WishList))
        },
        toggleTheme: (state) => {
        state.theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)}

    }
})
export const { AddToCart, DeleteToCart,ClearCart,increament,decreament, AddtoWish,DeletetoWish,ClearWish,toggleTheme}=AppSlice.actions;
export default AppSlice.reducer