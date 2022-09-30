import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'



const SingleAdressComponent = ({address,x,y}) => {
   const {type,Fname,Lname,HouseNo,ApartmentName,area,Pin}=address
  return (
    <Box border={x} textAlign="left" >
        <Heading fontSize={"16px"} color="gray" fontWeight="medium" p={"5px"}>{type}</Heading>
        <Box p={"5px"}>
            <span>{Fname +" "+Lname}</span>
        </Box>
        <Box p={"5px"}>
        <span>{HouseNo+", "+ApartmentName+", "+area+", "+Pin}</span>
        </Box>
        {y && <Button w={"100%"} variant="outline" mt={"20px"} bg="#85c125" borderRadius={"0px"}>Deliver Here</Button>}
    </Box>
  )
}

export default SingleAdressComponent