import React from 'react'
import {Stack,HStack,Box,Container, Center, Button,Text, Divider,Heading,Flex,SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { useState } from 'react';
import { useEffect } from 'react';


const Discription = () => {
  const navigate = useNavigate();
  const {cart} = useSelector((state)=>state.cart);
  let [total,setTotal] = useState(0);
  let [saved,setSaved] = useState(0);

  const handletotal = ()=>{
    let p=0;
    p = cart.reduce((a,el)=>{
      return a+((el.Price)*el.count)
  
    },0);
    setTotal(p);
    console.log(p);
  }

useEffect(()=>{
  handletotal()
  

})


  return (
    
        // <SimpleGrid   columns={[2, null, 2]} w='100%' spacing='40px'>
           <Flex justifyContent={"space-between"}  mt={8}>
            <Box width={"45%"}>
              <Button variant={"outline"} float={"left"} onClick={() => {}}>
                Empty Basket
              </Button>
            </Box>
            <Box width={"45%"} border="1px solid #e8e8e8 ">
              <Flex
                justifyContent={"space-between"}
                p="1rem"
                textAlign={"left"}
                fontSize="14px"
                fontWeight={400}
              >
                <Box>
                  <Text>SubTotal</Text>
                  <Text>Delivery Charges</Text>
                </Box>
                <Box>
                  <Text>Rs {Math.floor(total-saved)}</Text>
                  <Text>***</Text>
                </Box>
                <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                  <Text>You saved!</Text>
                  <Text>Rs {Math.floor(saved)}</Text>
                </Box>
              </Flex>
              <Flex
                textAlign={"left"}
                border={"1px solid #e8e8e8"}
                padding="2rem"
                justify={"space-around"}
              >
                <Text as={"h4"} fontWeight="250">
                  TOTAL{" "}
                </Text>
                <Text as={"h4"} fontWeight="250">
                  {" "}
                  RS {Math.floor(total - saved)}
                </Text>
              </Flex>
              <Box float={"right"}>
                <Button
                  variant={"outline"}
                  onClick={() => {
                    if (cart.length !== 0) {
                      navigate("/checkout");
                    } else {
                      alert(
                        "Your Cart is Empty, Please Add items into cart and after check it out"
                      );
                      navigate("/product");
                    }
                  }}
                >
                  {" "}
                  CheckOut
                </Button>
              </Box>
            </Box>
          </Flex>
        // </SimpleGrid>
    
  )
}

export default Discription