import { Box, Container, Flex, Text, Image, Checkbox, Grid } from '@chakra-ui/react'
import React from 'react'
import Product from '../../component/Productpage/Product/Product'
import Slideshow from '../../component/Productpage/Slideshow/Slideshow'

const Productdetails = () => {

  
  return (
    <Container maxW={"90%"} margin={"auto"}>
   <Slideshow/>
   <Image src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"/>
   <Flex align={"flex-start"} gap={"1rem"} marginTop={"1rem"} >
    <Box height={"400px"}>
    <Flex direction={"column"} borderRight={"1px solid grey"} width={"13rem"} >
    <Text borderBottom={"1px solid grey"}>Category</Text>
    <Checkbox></Checkbox>
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