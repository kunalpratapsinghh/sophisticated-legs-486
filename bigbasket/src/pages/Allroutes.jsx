import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from './cart/Cart'
import Checkout from './checkout/Checkout'
import Homepage from './homepage/Homepage'
import Login from './login/Login'
import Productdetails from './productdetails/Productdetails'
import Signup from './signup/Signup'

const Router = () => {
  return (
    
    <Routes>
        
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/productdetails'} element={<Productdetails />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/checkout'} element={<Checkout />} />
        
    </Routes>
  )
}

export default Router