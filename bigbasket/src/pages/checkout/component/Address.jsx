import {
  Box,
  Button,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import React from "react";
import SingleAdressComponent from "./SingleAdressComponent";

const Address = () => {
  const address = [
    {
      type: "Home",
      Fname: "kunal",
      Lname: "Singh",
      HouseNo: "1",
      ApartmentName: "A",
      area: "Newtown",
      Pin: "700156",
    },
    {
      type: "Home",
      Fname: "kunal",
      Lname: "Singh",
      HouseNo: "2",
      ApartmentName: "A",
      area: "Newtown",
      Pin: "700156",
    },
    {
      type: "Home",
      Fname: "kunal",
      Lname: "Singh",
      HouseNo: "3",
      ApartmentName: "A",
      area: "Newtown",
      Pin: "700156",
    },
  ];
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack border="1px solid grey" justifyContent={"right"} mb="15px">
      <Grid p={"20px"} templateColumns="repeat(3, 1fr)" >
        <Box fontSize="l" textAlign={"left"}>
          <Heading size={"s"}> Delivery Address</Heading>
        </Box>
        {!isOpen && <SingleAdressComponent x="none" address={address[0]}/>}
        {isOpen && <Box></Box>}
        <Box textAlign={"right"}>
          {isOpen ? (
            <Button variant="outline" h="40px" w="150px">
              Add New Address
            </Button>
          ) : (
            <Button onClick={onToggle} variant="outline" h="40px" w="150px">
              Change
            </Button>
          )}
        </Box>
      </Grid>
      <Collapse in={isOpen} animateOpacity>
        <SimpleGrid columns={[1, 2, 2, 3]} gap="10px">
          {address.map((address) => {
            return (
              <GridItem key={address.HouseNo}>
                <SingleAdressComponent
                  address={address}
                  y={true}
                  x={"1px solid green"}
                />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Collapse>
    </Stack>
  );
};

export default Address;
