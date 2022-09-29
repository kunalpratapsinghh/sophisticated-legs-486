import { Box, Flex, Grid, Text, Image, Select, Button, Input } from '@chakra-ui/react'
import React from 'react'
import styles from "./product.module.css";
const Product = () => {

    // asteriskicon:"https://www.bbassets.com/static/v2590/custPage/build/content/img/product-deck-sprite.png"
  // stamp:"https://www.bbassets.com/static/v2590/custPage/build/content/img/vegicon.svg"
  // truck:"https://www.bbassets.com/static/v2590/custPage/build/content/img/standard-del-gray.svg"
  // delivery:"Standard Delivery: Tomorrow"
  // time: 3:00PM - 7:30PM
  const products=[
    {discount:"GET 23% OFF",
  img:"https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",brand:"Fresho",name:"Carrot - Orange (Loose)",
strikedprice:101.30,price:75.50,delivery_date:"Standard Delivery: Tomorrow",delivery_time:"3:00PM - 7:30PM"},
{discount:"GET 23% OFF",
  img:"https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",brand:"Fresho",name:"Carrot - Orange (Loose)",
strikedprice:101.30,price:75.50,delivery_date:"Standard Delivery: Tomorrow",delivery_time:"3:00PM - 7:30PM"},
{discount:"GET 23% OFF",
  img:"https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",brand:"Fresho",name:"Carrot - Orange (Loose)",
strikedprice:101.30,price:75.50,delivery_date:"Standard Delivery: Tomorrow",delivery_time:"3:00PM - 7:30PM"},
{discount:"GET 23% OFF",
  img:"https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",brand:"Fresho",name:"Carrot - Orange (Loose)",
strikedprice:101.30,price:75.50,delivery_date:"Standard Delivery: Tomorrow",delivery_time:"3:00PM - 7:30PM"}
  ]
  return (
    <>
    <Flex justifyContent={"space-between"}><Text fontSize={"24px"} color={"#58595b"}>Fruits & Vegetables (620)</Text>
    <Select w={"13rem"} h={"1.4rem"} fontSize={"13px"} p={0} borderRadius={"none"} border={"1px solid black"}>
      <option>Popularity</option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>
      <option></option>

    </Select>
    </Flex>
   
    <Grid templateColumns={"repeat(4,3fr)"} gap={"1rem"}>

    {products.map((el)=>
    (
        <Flex direction={"column"} width={"200px"} _hover={{boxShadow:'lg',  bg:'white'}} p={2} textAlign="start">
            {/* <Box boxShadow='md' p='6' rounded='md' bg='white'> */}
            <Flex  direction={"row-reverse"} boxShadow='md' p={2}   bg='white' h={6} >
            <Box className={styles.asterIcon} mt={"-5px"}></Box>
                <Text fontSize={"9px"} color={"#ba5253"} fontWeight={"bold"}>{el.discount}</Text>
                  </Flex>
          <Image src={el.img} w={"8rem"} margin={"auto"} mt={"1rem"}/>
          <Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/vegicon.svg
" width= "1.5rem" height= "1.5rem" ml={2} />
          <Text  pl={2} fontSize={"10px"}>{el.brand}</Text>
          <Text pl={2}  fontSize={"12px"}>{el.name}</Text>
          <Select h={"1.5rem"} fontSize={"12px"} fontWeight={"400"} color={"#666666"} mt="1rem" borderRadius={"none"} border={"1px solid black"}>
            <option>1kg - Rs 38.00</option>
            <option>1kg - Rs 38.00</option>
            <option>1kg - Rs 38.00</option>
            <option>1kg - Rs 38.00</option>
          </Select>
          <Flex gap={"4px"}  bgColor={"#f4f3f2"} direction={"column"} p={2}>
          <Flex gap={"4px"} mt={"4px"}>
          <Text fontSize={"10px"}>MRP:</Text>
          <Text fontSize={"10px"} textDecoration={"line-through"}>Rs {el.strikedprice}</Text>
          <Text fontSize={"13px"} mt={"-3px"}>Rs {el.price}</Text>
          </Flex>
          <Flex direction={"column"} textAlign="start">
           <Flex gap={"5px"}><Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/standard-del-gray.svg" w={"1.5rem"} mt={"-8px"}/>
          <span><Text fontSize={"9px"}>{el.delivery_date}</Text>
          <Text fontSize={"9px"}> {el.delivery_time}</Text></span>
          </Flex>
          <Flex h={"1.2rem"} gap={"5px"}><Flex><Text fontSize={"10px"} border={"1px solid #e0e0e0"} w={6} color={"#999999"} fontWeight={400}>Qty</Text>
          <Text value={1} h={"1.2rem"} w={"3rem"} border={"1px solid #e0e0e0"} bgColor={"white"}></Text></Flex>
          <Flex><Button h={"1.2rem"} fontSize={"13px"} bgColor={"#f7d779"}>ADD</Button></Flex>
          </Flex>
          </Flex>
        </Flex>
        </Flex>
    ))}
    </Grid>
    </>
  )
}

export default Product