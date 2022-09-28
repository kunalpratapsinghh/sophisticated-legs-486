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
        
        <Route path={'/'} elemenet={<Homepage />} />
        <Route path={'/login'} elemenet={<Login />} />
        <Route path={'/signup'} elemenet={<Signup />} />
        <Route path={'/productdetails'} elemenet={<Productdetails />} />
        <Route path={'/cart'} elemenet={<Cart />} />
        <Route path={'/checkout'} elemenet={<Checkout />} />
        
    </Routes>
  )
}

export default Router