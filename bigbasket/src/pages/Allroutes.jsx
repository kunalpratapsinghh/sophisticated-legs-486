import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import Homepage from './homepage/Homepage'
import Products from './Products/Products'


const Router = () => {
  return (
    
    <Routes>
        
        <Route path={'/'} element={<Homepage />} />

        <Route path={'/products'} element={<Products/>} />

        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/checkout'} element={<Checkout />} />
        
    </Routes>
  )
}

export default Router