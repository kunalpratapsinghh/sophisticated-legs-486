import React, { useState } from 'react'
import {Stack,Container,Th,Button,Td,Tbody,Thead,TableContainer,Tr,Table} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react';
import {getcart} from "../pages/cart/Cart_action";
import {useNavigate} from "react-router-dom"


const Display = () => {
    let {cart} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    let [count,setCount] = useState(0);
    let saved=0;
    let navigate = useNavigate();
    

let handleDelete=()=>{

}

 
useEffect(()=>{
    dispatch(getcart());
},[])


  return (
    <Stack>
        <TableContainer width="100%">
            <Table variant="simple">
              <Thead width="99%">
                <Tr
                  bg={"#555555"}
                  color={"white"}
                  justifyContent={"space-between"}
                >
                  <Th color={"white"}>ITEM DESCRIPTION</Th>
                  <Th color={"white"}>UNIT Price</Th>
                  <Th color={"white"}>QUANTITY</Th>
                  <Th color={"white"}>SUBTOTAL</Th>
                  <Th color={"#555555"}>......</Th>
                  <Th color={"black"} bg={"#c6cc74"}>
                    Saving
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart?.map((e) => {
                  {
                    saved =
                      saved + (Math.floor(e.Price) - Math.floor(e.Price - (10 * e.Price) / 100));
                    // console.log("saved",saved)
                  }
                  return (
                    <Tr
                      key={e._id}
                      fontSize={"12px"}
                      justifyContent={"space-between"}
                    >
                      <Td fontSize={"12px"}>
                        {e.brand}
                        <br></br>
                        {e.Title}
                      </Td>
                      <Td>
                        Rs {Math.floor(e.Price - (10 * e.Price) / 100)}
                        <br></br>
                        <span textDecoration={"line-through"}>
                          Rs {Math.floor(e.Price)}
                        </span>
                      </Td>
                      <Td >
                        <Button
                          variant={"outline"}
                          
                          onClick={() => setCount(count - 1)}
                        >
                          -
                        </Button>
                        <Button variant={"outline"} >
                          {count}
                        </Button>
                        <Button
                          variant={"outline"}
                          
                          onClick={() => setCount(count + 1)}
                        >
                          +
                        </Button>
                      </Td>
                      <Td  >Rs {Math.floor(e.Price - (10 * e.Price) / 100)}</Td>
                      <Td>
                        <CloseIcon onClick={() => handleDelete(e._id)} />
                      </Td>
                      <Td>
                        {" "}
                        Rs{" "}
                        {Math.floor(
                          e.Price - Math.floor(e.Price - (10 * e.Price) / 100)
                        )}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>

    </Stack>
  )
}

export default Display