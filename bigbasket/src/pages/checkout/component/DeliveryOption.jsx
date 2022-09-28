import {
  Box,
  Button,
  Collapse,
  Flex,
  GridItem,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const DeliveryOption = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack mt="-5px" border="1px solid grey">
      <HStack p={"20px"} mb="-10px">
        <Box fontSize="l">
          <Heading size={"s"}> Delivery Options</Heading>
        </Box>
        <Spacer />
        <Box alignSelf={"right"}>
          {isOpen ? (
            ""
          ) : (
            <Button onClick={onToggle} variant="outline" h="40px" w="150px">
              Add Message
            </Button>
          )}
        </Box>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Flex padding="0px 20px" mt={"0px"}>
          {" "}
          <Text mr={"5px"}>Default Delivery Option</Text>
          <Text fontSize={"3xs"} mr="5px">1 Shipment, Delivery Charge:</Text>
          <Text color={"green"}>FREE</Text>
        </Flex>
        <Box  padding="0px 20px">
        <SimpleGrid columns={[2, 3, 3]} textAlign="left" mt="20px">
            <GridItem>
            Shipment 1:  Standard Delivery
            </GridItem>
            <GridItem>
            1 Item @ Rs 240
Delivery Charge: FREE
            </GridItem>
            <GridItem>
                <Input placeholder="Tomorrow 10:00 AM - 12:30 PM"></Input>
            </GridItem>
        </SimpleGrid>
        </Box>

        <Flex justifyContent={"right"} padding="20px">
         
          <Button variant="outline" borderRadius={"0"} onClick={onToggle} h="60px" w={"250px"} bg="#85c125">
            Proceed To Payment
          </Button>
        </Flex>
      </Collapse>
    </Stack>
  );
};

export default DeliveryOption;
