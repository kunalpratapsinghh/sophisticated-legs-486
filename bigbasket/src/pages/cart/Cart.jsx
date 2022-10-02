import React from 'react'

import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {HStack,Stack,Container,Box, Button, Text,Divider, Center} from "@chakra-ui/react"
import Discription from '../../component/Discription';
import Display from '../../component/Display';
import {getcart} from "./Cart_action"
import { useEffect } from 'react';

let datawa=[
  {itemcateogory:"Food&Grains",item:"Wheat Floor",price:"899",quantity:2},
  {itemcateogory:"Brivarage",item:"Icecream",price:"500",quantity:1}
]

const Cart = () => {
  let {cart} = useSelector((state)=>state.cart);
  let dispatch = useDispatch();



  useEffect(()=>{
    dispatch(getcart());
  },[])
  

  return (
    
      <Container border='1px solid' maxW='100%' maxH={'100%'}  backgroundColor={'#f3f3f3'} >
        <Container backgroundColor={'#ffffff'}  maxW='79%' alignSelf={'left'} >
          <Box >
            <Text align={'left'} fontSize={{ base: '11px', md: '18px', lg: '28px' }}>{cart.length>0 ? `Your Basket (${cart.length})`:"There is no item in your basket"}</Text>

          </Box>
          
        <Divider orientation='horizontal' />
        <Box w='100%' >
          <Display />
        </Box>
        <Box w='100%' >
           <Discription   />
        </Box>
        

        
          <Box display={'flex'} justifySelf='left' >
             <Button   _hover={{ bg: '#ebedf0' }}>continue shopping</Button>
          </Box>
         

        </Container>
        

      </Container>

    

  )
}

export default Cart