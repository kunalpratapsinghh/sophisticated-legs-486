import React from 'react'
import { addtoCart, fetchData} from '../../redux/product/product.action';
import { Box, Container, Flex,Select,Button, Text, Image, Checkbox, Grid, Input } from '@chakra-ui/react'
import styles from "./products.module.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {handledelete} from "../cart/Cart_action"


let a = localStorage.getItem("userid")

const Product_detail = ({el}) => {
    let {userid} = useSelector((state)=>state.auth);
    let dispatch = useDispatch();
    let [show,setShow] = useState(true);
      let [count,setCount] = useState(0);

    let addtocart=(op)=>{
        show==true && setShow(false);
        let ap = {...el}
        op==="add" ? ap['op']="add":ap['op']="sub"
        console.log(el,"el",ap,"ap");
        if(op=="add"){
            setCount(count+1);
        }else{
            if(count>1){
                setCount(count-1);
            }else {
                setCount(0);
                setShow(true);
            }
        }
        userid==undefined ? dispatch(addtoCart(ap,a)) : dispatch(addtoCart(ap,userid))
        
        

    }
    let removetocart = ()=>{
        el['user_id'] = a;
        el['product_id'] = el._id;
        dispatch(handledelete(el));
        setShow(true);


    }


  return (
    <div>
        <Flex  direction={"row-reverse"} boxShadow='md' p={2}   bg='white' h={6} >
            <Box className={styles.asterIcon} mt={"-5px"}></Box>
                <Text fontSize={"9px"} color={"#ba5253"} fontWeight={"bold"}>GET 23% OFF</Text>
                  </Flex>
          <Image src={el.Image_url} w={"8rem"} margin={"auto"} mt={"1rem"}/>
          <Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/vegicon.svg
" width= "1.5rem" height= "1.5rem" ml={2} />
          <Text  pl={2} fontSize={"10px"}>{el.Brand}</Text>
          <Text pl={2}  fontSize={"12px"}>{el.Title}</Text>
          
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
          {show==false ? (<Flex h={"1.2rem"} ><Button onClick={()=>addtocart("subs")} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"9px"} bgColor={"#f7d779"} borderRadius={"none"}>-</Button>
          <Text  h={"1.2rem"}  textAlign={"center"} fontSize={"10px"} border={"1px solid #e0e0e0"} bgColor={"white"}>&nbsp;{count}&nbsp;</Text>
          <Button onClick={()=>addtocart("add")} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"9px"} bgColor={"#f7d779"} borderRadius={"none"}>+</Button>
          <Flex  ><Button  ml={"3px"}  mr='3px' onClick={()=>removetocart()} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"9px"} bgColor={"#f7d779"} borderRadius={"none"}>Remove<Box className={styles.bsktIcon}></Box></Button>

</Flex>
          
          
          </Flex>):(<Flex w='100%' ><Button w='75%' ml={"3px"} onClick={()=>addtocart("add")} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"13px"} bgColor={"#f7d779"} borderRadius={"none"}>ADD<Box className={styles.bsktIcon}></Box></Button>

</Flex>)}
          
          </Flex>
        </Flex>

    </div>
  )
}

export default Product_detail