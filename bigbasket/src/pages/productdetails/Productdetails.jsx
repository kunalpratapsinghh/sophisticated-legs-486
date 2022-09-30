import { Box, Container, Flex, Text, Image, Checkbox, Grid, Input } from '@chakra-ui/react'
import Product from '../../component/Productpage/Product/Product'
import Slideshow from '../../component/Productpage/Slideshow/Slideshow'
import React, { useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addtoCart, fetchData} from '../../redux/product/product.action';

const Productdetails = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>
  {
      dispatch(fetchData());
  },[])

  
  return (
    <Container maxW={"100%"} margin={"auto"}>
   <Slideshow/>
   <Image width={"90%"} margin={"auto"} src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"/>
   <Flex gap={"1rem"} width={"90%"} margin={"auto"} marginTop={"1rem"} >
    <Box height={"400px"}>
    <Flex direction={"column"} pl={"1rem"} borderRight={"1px solid #dfdfdf"} width={"13rem"} textAlign="start" gap={1} >
    <Text fontSize="14px">Category</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Text color={"#62a154 "} fontSize="13px">Fruits & Vegetables</Text>
    <Text fontSize="14px">Brand</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex ><Input placeholder='Search by Brand' borderRadius={"none"} height={"1.5rem"} fontSize={"14px"} p={2}></Input></Flex>
    <Flex direction={"column"} p={0} gap={0} lineHeight={"4px"} fontFamily={"ProximaNovaA-Regular"} color={"#898989"}><Checkbox><Text fontSize={"14px"}>Brotos</Text> </Checkbox>
      <Checkbox><Text fontSize={"14px"}>Fresho</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Gopalan Organi</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Hoovu Fresh</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Organic Tadaa </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Trikaya</Text></Checkbox>
      </Flex>


      <Text fontSize="14px">Seasonal</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex direction={"column"} p={0} gap={0} fontFamily={"ProximaNovaA-Regular"} color={"#898989"} lineHeight={"4px"}>
      <Checkbox><Text fontSize={"14px"}>Pooja Items</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Summer Fruits</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Summer Veggies</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Winter Fruits </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Winter Veggies</Text></Checkbox>
      </Flex>

      <Text fontSize="14px">Country of Origin</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex direction={"column"} fontSize={"14px"} fontFamily={"ProximaNovaA-Regular"}  color={"#898989"} lineHeight={"4px"}>
      <Checkbox ><Text fontSize={"14px"}>Australia</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>China</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Greece</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>India </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Italy</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>South Africa</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> Spain</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Thailand </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> Iran</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> USA</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> Egypt</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>New Zealand </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> Turkey</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Peru </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}> Chile</Text></Checkbox>
      </Flex>


      <Text fontSize="14px">Price</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex direction={"column"} p={0} gap={0} fontFamily={"ProximaNovaA-Regular"} color={"#898989"} lineHeight={"4px"}>
      <Checkbox><Text fontSize={"14px"}>Less than Rs 20 (67)</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Rs 21 to Rs 50 (216)</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Rs 51 to Rs 100 (155)</Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Rs 101 to Rs 200 (94) </Text></Checkbox>
      <Checkbox><Text fontSize={"14px"}>Rs 201 to Rs 500 (38)</Text></Checkbox>
      </Flex>
    </Flex>
    </Box>

    
    <Box>
       <Product/>
    </Box>
    </Flex>
</Container>
  )
}

export default Productdetails