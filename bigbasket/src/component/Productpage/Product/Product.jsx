import { Box, Flex, Grid, Text, Image, Select, Button, Input } from '@chakra-ui/react'
import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, fetchData } from '../../../redux/product/product.action';

import styles from "./product.module.css";
const Product = () => {
  const {data}=useSelector((state)=>state.product.products);
  const dispatch=useDispatch();
  const[count,setCount]=useState(1);
  const addtocart=(id)=>
  {
    console.log(id);
   dispatch(addtoCart(id));
  }

  const sorting=(filter)=>
  {
      fetchData(dispatch(filter));
  }

  return (
    <>
    <Flex justifyContent={"space-between"} ><Text fontSize={"24px"} color={"#58595b"}>Fruits & Vegetables ({data.length})</Text>
    <Select w={"13rem"} h={"1.4rem"} onChange={(e)=>sorting(e.target.value)} fontSize={"13px"} p={0} borderRadius={"none"} border={"1px solid black"}>
     <option value="asc(Price)">Price - Low to High</option>
      <option value="desc(Price)">Price - High to Low</option>
      <option value="asc(Title)">Alphabetical</option>
     
    </Select>
    </Flex>
    <Flex mt={"1rem"} gap={"6px"} >
    <Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/standard-del.svg" w={"1.4rem"} />
    <Text fontSize={"10px"}> ALL PRODUCTS</Text>
    </Flex>
   <Box mt={"1rem"} borderBottom={"1px solid #dfdfdf"} ></Box>
    <Grid templateColumns={"repeat(4,3fr)"} >

    {data.map((el)=>
    (
        <Flex direction={"column"} width={"200px"} p={2} borderRight={"1px solid #dfdfdf"} _hover={{boxShadow:'md',  bg:'white'}} key={el._id} textAlign="start" margin={"auto"} mt={"1rem"}>
            {/* <Box boxShadow='md' p='6' rounded='md' bg='white'> */}
            <Flex  direction={"row-reverse"} boxShadow='md' p={2}   bg='white' h={6} >
            <Box className={styles.asterIcon} mt={"-5px"}></Box>
                <Text fontSize={"9px"} color={"#ba5253"} fontWeight={"bold"}>GET 23% OFF</Text>
                  </Flex>
          <Image src={el.Image_url} w={"8rem"} margin={"auto"} mt={"1rem"}/>
          <Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/vegicon.svg
" width= "1.5rem" height= "1.5rem" ml={2} />
          <Text  pl={2} fontSize={"10px"}>{el.Brand}</Text>
          <Text pl={2}  fontSize={"12px"}>{el.Title}</Text>
          <Select h={"1.5rem"} fontSize={"12px"} fontWeight={"400"} color={"#666666"} mt="1rem" borderRadius={"none"} border={"1px solid black"}>
            <option value={`${el.Price}`}>1kg - Rs {el.Price}</option>
            <option value={`${el.Price*2}`}>2kg - Rs {el.Price*2}</option>
            <option value={`${el.Price*3}`}>3kg - Rs {el.Price*3}</option>
            <option value={`${el.Price*5}`}>5kg - Rs {el.Price*5}</option>
          </Select>
          <Flex gap={"4px"}  bgColor={"#f4f3f2"} direction={"column"} p={2}>
          <Flex gap={"4px"} mt={"4px"}>
          <Text fontSize={"10px"}>MRP:</Text>
          <Text fontSize={"10px"} textDecoration={"line-through"}>Rs {Math.floor(el.Price*23/100+el.Price)}</Text>
          <Text fontSize={"13px"} mt={"-3px"}>Rs {el.Price}</Text>
          </Flex>
          <Flex direction={"column"} textAlign="start">
           <Flex gap={"5px"}><Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/standard-del-gray.svg" w={"1.5rem"} mt={"-8px"}/>
          <span><Text fontSize={"9px"}>Standard Delivery: Tomorrow</Text>
          <Text fontSize={"9px"}> 3:00PM - 7:30PM</Text></span>
          </Flex>
          <Flex h={"1.2rem"} gap={"5px"}><Flex><Text fontSize={"10px"} border={"1px solid #e0e0e0"} w={6} color={"#999999"} fontWeight={400}>Qty</Text>
          <Text value={1} h={"1.2rem"} w={"3rem"} textAlign={"center"} fontSize={"10px"} border={"1px solid #e0e0e0"} bgColor={"white"}>{count}</Text></Flex>
          <Flex><Button onClick={()=>addtocart(el._id)} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"13px"} bgColor={"#f7d779"} borderRadius={"none"}>ADD<Box className={styles.bsktIcon}></Box></Button>
          </Flex>
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