import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  Grid,
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

const Address = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack mt="-5px" border="1px solid grey">
      <HStack p={"20px"}>
        <Box fontSize="l">
          <Heading size={"s"}> Payments Type</Heading>
        </Box>
        <Spacer />
        <Box alignSelf={"right"}>
          {isOpen ? (
            ""
          ) : (
            <Button onClick={onToggle} variant="outline" h="40px" w="150px">
              Payment
            </Button>
          )}
        </Box>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Text fontSize="lg" textAlign={"left"} p={"0px 20px"}>
          Details For Gift Message
        </Text>
        <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 2fr"]} gap="5px">
          <GridItem alignItems="center">
            <Grid textAlign={"left"} alignItems="center">
              <GridItem
                border={"1px solid grey"}
                display="flex"
                alignItems={"center"}
                h="50px"
                p={"0 0 0 20px"}
              >
                <Text>Credit & Debit Card</Text>
              </GridItem>

              <GridItem
                border={"1px solid grey"}
                display="flex"
                alignItems={"center"}
                h="50px"
                p={"0 0 0 20px"}
              >
                <Text>Netbanking</Text>
              </GridItem>
              <GridItem
                border={"1px solid grey"}
                display="flex"
                alignItems={"center"}
                h="50px"
                p={"0 0 0 20px"}
              >
                <Text>UPI</Text>
              </GridItem>
              <GridItem
                border={"1px solid grey"}
                display="flex"
                alignItems={"center"}
                h="50px"
                p={"0 0 0 20px"}
              >
                <Text>Wallet</Text>
              </GridItem>
              <GridItem
                border={"1px solid grey"}
                display="flex"
                alignItems={"center"}
                h="50px"
                p={"0 0 0 20px"}
              >
                <Text>Cash / Card on Delivery</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem border={"1px solid red"}>
            <Text fontSize="lg" textAlign={"left"} p={"0px 20px"}>
              Add Card / Debit Card
            </Text>
            <SimpleGrid
              textAlign={"left"}
              p={"0px 20px"}
              columns={[1, 2, 2]}
              gap="10px"
            >
              <GridItem>
                <Flex direction={"column"}>
                  <Text>Enter Card Number</Text>
                  <Input
                    size={"xs"}
                    w="100%"
                    placeholder="Enter card Number"
                  ></Input>
                </Flex>
              </GridItem>
              <GridItem></GridItem>
              <GridItem>
                <Flex direction={"column"}>
                  <Text>Valid thru</Text>
                  <Input size={"xs"} w="100%" placeholder="MM/YY"></Input>
                </Flex>
              </GridItem>
              <GridItem>
                <Flex direction={"column"}>
                  <Text>Cvv</Text>
                  <Input
                    size={"xs"}
                    w="100%"
                    placeholder="Security Code"
                  ></Input>
                </Flex>
              </GridItem>
            </SimpleGrid>



            <Flex justifyContent={"left"} p="20px">
                <Checkbox size="md" colorScheme="green" defaultChecked>
                Save this card for faster payments
                </Checkbox>
              </Flex>
              <Box></Box>
              <Box rowSpan={2}>
                <Button
                  w={"80%"}
                  m="auto"
                  variant="outline"
                  bg={"#85c125"}
                  borderRadius="none"
                >
                  Proceed To pay
                </Button>
              </Box>
          </GridItem>
        </Grid>
      </Collapse>
    </Stack>
  );
};

export default Address;
