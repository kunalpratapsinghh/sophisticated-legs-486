import React from 'react'
import {Stack,HStack,Box,Container, Center, Button,Text, Divider,Heading,Flex,SimpleGrid} from "@chakra-ui/react";
import {TbCoin, TbDeviceMobileVibration} from "react-icons/tb";
import {BsBasket} from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"


const Discription = () => {
  const navigate = useNavigate();
  const {cart} = useSelector((state)=>state.cart);
  let total=0;
  let saved=0;

  return (
    
        <SimpleGrid   columns={[2, null, 3]} spacing='40px'>
          <Stack border={'1px solid red'}  h='90%'   >
              
              <Box  >
                <Button><BsBasket /> Basket</Button>
              </Box>
          </Stack>
           < Stack  mt='0px' h='90%' >
              <Stack border='1px solid green' h={["70px","100px","150px"]} >

              
              
                <Text fontSize={{ base: '3px', md: '8px', lg: '13px' }}>Free Uber<br/> Voucher with so<br/>Good</Text>
                
             
             
                <Text fontSize={{ base: '3px', md: '8px', lg: '13px' }} >Free Uber<br/> Voucher with so<br/>Good Selected<br />Product </Text>
               
              </Stack>
              
            </Stack>
            {/* total cost */}
            {/* <Stack> */}
            <Box width={"45%"} border="1px solid  " mt='0px' h='90%' >
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
                <Box borderLeft={"1px solid #e8e8e8"} color="red" mt='0px' pl="2px " lh='0px' h={["10px","20px","50px"]} >
                  <Text fontSize={{ base: '3px', md: '8px', lg: '13px' }} >You saved!</Text>
                  <Text fontSize={{ base: '3px', md: '8px', lg: '13px' }} >Rs {Math.floor(saved)}</Text>
                </Box>
              </Flex>
              <Flex
                textAlign={"left"}
                border={"1px solid #e8e8e8"}
                padding="2rem"
                justify={"space-around"}
              >
                <Text as={"h6"} fontSize={{ base: '15px', md: '20px', lg: '30px' }} fontWeight={["70px","150","200"]}>
                  TOTAL{" "}
                </Text>
                <Text fontSize={{ base: '15px', md: '20px', lg: '30px' }} fontWeight={["70px","150","200"]}>
                  {/* {" "} */}
                  RS {Math.floor(total - saved)}
                </Text>
              </Flex>
              <Box float={"right"} mt='0px' >
                <Button
                  fontSize={{ base: '3px', md: '8px', lg: '13px' }}
                  onClick={() => {
                    if (cart.length !== 0) {
                      navigate("/checkout");
                    } else {
                      alert(
                        "Your Cart is Empty, Please Add items into cart and after check it out"
                      );
                      // navigate("/product");
                    }
                  }}
                >
                  {" "}
                  CheckOut
                </Button>
              </Box>
            </Box>
          {/* </Stack> */}
        </SimpleGrid>
    
  )
}

export default Discription