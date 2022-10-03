import { Box, Container, Flex,Select,Button, Text, Image, Checkbox, Grid, Input } from '@chakra-ui/react'
import Slideshow from '../../component/Productpage/Slideshow/Slideshow'
import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, fetchData} from '../../redux/product/product.action';
import styles from "./products.module.css"
import Content from '../../component/Productpage/Content/Content';
const Products = () => {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.product.products);
  const[products,setProducts]=useState([]);
  const[count,setCount]=useState(1);

  console.log(products)

  const Brand=["Fresho","Amul","Britannia","BB Royal","Milky Mist","KNoor","Everest","Suhana","Maggi","Tasties"];
const Country=["Australia","China","Greece","India","Italy","South Africa","Spain","Thailand","Iran","USA","Egypt","New Zealand","Turkey","Peru" ,"Chile"]
  useEffect(()=>
  {
    setProducts([...data]);
    console.log(products);
  },[data])


  // add to cart function
  const addtocart=(el)=>
  {
    console.log(el);
   dispatch(addtoCart(el));
  //  alert("One item is added")
  }


  const filter=(value)=>
  {
    console.log(typeof(value))
    if(typeof(value)=="string")
    {
   let data1=data.filter((el)=> el.Brand==value)
   console.log(data1);
   setProducts([...data1])
    }
    else 
    {
      let data1=data.filter((el)=>
      {
        if(value<=20)
        return el.Price<20;
        else if(value>20 && value<=50)
        return el.Price>20 && el.Price<=50;
        else if(value>50 && value<=100)
        return el.Price>50 && el.Price<=100;
        else if(value>100 && value<=200)
        return el.Price>100 && el.Price<=200;
      })
   
   console.log(data1);
   setProducts([...data1])
    }
  }

  // sort By
  function sorting(val) {
    console.log(val);
    const data1= data.sort((a, b) => {
      if (val == "lth") {
        return a.Price - b.Price;
      } else if (val == "htl") {
        return b.Price - a.Price;
      } else if (val == "alphabetical") {
        return a.Title.localeCompare(b.Title);
      }
      else if (val == "r-lth") {
        return a.Price*23/100 - b.Price*23/100;
      } else if (val == "r-htl") {
        return b.Price*23/100 - a.Price*23/100;
      }
    });
    setProducts([...data1])
  }
  
  // Fetch data request
  useEffect(()=>
  {
      dispatch(fetchData());
  },[])

  
  return (
    <Container maxW={"100%"} margin={"auto"} mt="1rem">
      <Flex width={"90%"} margin={"auto"}><Text lineHeight={"21px"} fontSize={"10px"} fontFamily={"ProximaNovaA-Regular"} color={"#818285"} >HOME { " > "} </Text></Flex>
   <Slideshow/>
   <Image width={"90%"} margin={"auto"} src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits%20&%20vegetables.jpg"/>
   <Flex gap={"1rem"} width={"90%"} margin={"auto"} marginTop={"1rem"} >
    <Box height={"400px"}>
    <Flex direction={"column"} pl={"1rem"} width={"13rem"} textAlign="start" gap={1} >
    <Text fontSize="14px">Category</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Text color={"#62a154 "} fontSize="13px">Fruits & Vegetables</Text>
    <Text fontSize="14px">Brand<i class="icon svg-header svg-search-mw svg-search-mw-dim hidden-md hidden-lg"></i></Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex ><Input placeholder='Search by Brand' borderRadius={"none"} height={"1.5rem"} fontSize={"14px"} p={2}></Input></Flex>
    <Flex direction={"column"} p={0} gap={0} lineHeight={"4px"} onClick={(e)=>filter(e.target.value)} fontFamily={"ProximaNovaA-Regular"} color={"#898989"}>
      {Brand.map((el)=>
      (
        <Checkbox onClick={(e)=>filter(e.target.value)} value={`${el}`}><Text fontSize={"14px"}>{el}</Text></Checkbox>
      ))}
      </Flex>

      <Text fontSize="14px">Price</Text>
    <Box borderBottom={"1px solid #dfdfdf"} width="95%"></Box>
    <Flex direction={"column"} p={0} gap={0} fontFamily={"ProximaNovaA-Regular"} color={"#898989"} lineHeight={"4px"}>
      <Checkbox onClick={()=>filter(10)} value="10"><Text fontSize={"14px"}>Less than Rs 20 (67)</Text></Checkbox>
      <Checkbox onClick={(e)=>filter(e.target.value)} value={21}><Text fontSize={"14px"}>Rs 21 to Rs 50 (216)</Text></Checkbox>
      <Checkbox onClick={(e)=>filter(e.target.value)} value={51}><Text fontSize={"14px"}>Rs 51 to Rs 100 (155)</Text></Checkbox>
      <Checkbox onClick={(e)=>filter(e.target.value)} value={101}><Text fontSize={"14px"}>Rs 101 to Rs 200 (94) </Text></Checkbox>
      <Checkbox onClick={(e)=>filter(e.target.value)} value={201}><Text fontSize={"14px"}>Rs 201 to Rs 500 (38)</Text></Checkbox>
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
    {Country.map((el)=>
      (
        <Checkbox onClick={(e)=>filter(e.target.value)} value={`${el}`}><Text fontSize={"14px"}>{el}</Text></Checkbox>
      ))}
      </Flex>    
    </Flex>
    </Box>

    
    <Box>
    <Flex justifyContent={"space-between"} ><Text fontSize={"24px"} color={"#58595b"}>Fruits & Vegetables ({data.length})</Text>
    <Select w={"13rem"} h={"1.4rem"} onChange={(e)=>sorting(e.target.value)} fontSize={"13px"} p={0} borderRadius={"none"} border={"1px solid black"}>
     <option>Sort By</option>
     <option value="lth">Price - Low to High</option>
      <option value="htl">Price - High to Low</option>
      <option value="alphabetical">Alphabetical</option>
     <option value="r-htl">Rupee Saving - High to Low</option>
     <option value="r-lth">Rupee Saving - Low to High</option>
      
    </Select>
    </Flex>
    <Flex mt={"1rem"} gap={"6px"} >
    <Image src="https://www.bbassets.com/static/v2590/custPage/build/content/img/standard-del.svg" w={"1.4rem"} />
    <Text fontSize={"10px"}> ALL PRODUCTS</Text>
    </Flex>


   <Box mt={"1rem"} borderBottom={"1px solid #dfdfdf"} ></Box>
    <Grid templateColumns={"repeat(4,3fr)"} borderLeft={"1px solid #dfdfdf"} >

    {products.map((el)=>
    (
        <Flex direction={"column"} width={"210px"} p={2} borderRight={"1px solid #dfdfdf"} _hover={{boxShadow:'md',  bg:'white'}} key={el._id} textAlign="start" margin={"auto"} mt={"1rem"}>
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
            <option value={`${el.Price}`}>1 kg - Rs {el.Price}</option>
            <option value={`${el.Price*2}`}>2 kg - Rs {el.Price*2}</option>
            <option value={`${el.Price*3}`}>3 kg - Rs {el.Price*3}</option>
            <option value={`${el.Price*5}`}>5 kg - Rs {el.Price*5}</option>
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
          <Flex><Button onClick={()=>addtocart(el)} _hover={{bgColor:"#fce681"}} h={"1.2rem"} fontSize={"13px"} bgColor={"#f7d779"} borderRadius={"none"}>ADD<Box className={styles.bsktIcon}></Box></Button>
          </Flex>
          </Flex>
          </Flex>
        </Flex>
        </Flex>
    ))}
    </Grid>
    </Box>
    </Flex>
    <Content/>
</Container>
  )
}

export default Products