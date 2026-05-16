

import Home from './page/Home'
import { Outlet, Route, Routes } from 'react-router-dom'
import ProductDetails from './components/ProductDetailss/ProductDetails'
import ShoppingCart from './components/cart/ShopingCart/ShoppingCart'
import { Toaster } from 'react-hot-toast'
import WishCart from './components/cart/Wishcart/WishCart'
import Category from './page/categroy/Category'
import { AnimatePresence } from 'framer-motion'
import SearchResult from './page/Search/SearchResult'
import Contact from './page/Contact/Contact'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from './components/footer/Footer'
import Layout from './page/Layout'



function App() {
  const theme = useSelector((state) => state.item.theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
 

  return (
    <>
    {/* <header>
      <TopHeader/>
     <BotemHeader/>
     <Outlet/>
     <Footer/>

    </header> */}
    <Toaster position= "bottom-right"/>
    
     <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
        

       <Route path="/" element={<Home />} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/search" element={<SearchResult />} />
       <Route path="/shopcart" element={<ShoppingCart />} />
        <Route path="/wishcart" element={<WishCart />} />
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/category/:category" element={<Category/>}/>
      </Route>
     </Routes>

     </AnimatePresence>
     
    </>
  )
}

export default App
