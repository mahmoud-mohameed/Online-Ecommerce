import React from 'react'
import TopHeader from '../components/header/TopHeader'
import BotemHeader from '../components/header/BotemHeader'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
    <header >
    <TopHeader/>
    <BotemHeader/>
    </header>
    <Outlet/>
    <Footer/>
    </>
    

  )
}

export default Layout