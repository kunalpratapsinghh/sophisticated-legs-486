import React from "react";
import {
  Box,
  Stack,
  Image,
  Spacer,
  StackDivider,
  Text,
  VStack,
  Grid,
  GridItem,
  Button,
  ScaleFade,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import Address from "./component/Address";
import Giftorder from "./component/GiftOrder";
import DeliveryOption from "./component/DeliveryOption";
const Checkout = () => {
  return (
    <Box>
      {/*---------------------------------------Top Section-------------------------------------------------- */}
      <Box padding={["5px 10px", "5px 15px", "5px 20px", "10px 200px"]}>
        <Stack direction={["column", "row"]} alignItems="center">
          <Image
            src="https://www.bigbasket.com/static/v2489/common/img/bb_logo.png"
            h={["50px", "70px"]}
            w={["100px", "170px"]}
          ></Image>
          <Spacer />
          <Text fontWeight="bold" color={"grey"} fontSize="2xl">
            1860 123 1000
          </Text>
        </Stack>
      </Box>
      <VStack divider={<StackDivider borderColor={"grey"} />}>
        <Box></Box>
        <Spacer />
      </VStack>
      {/*---------------------------------------Delivery Section-------------------------------------------------- */}
      <Grid
        templateColumns={["1fr", "1fr", "2fr 1fr"]}
        gap="10px"
        padding={["5px 10px", "5px 15px", "5px 20px", "10px 200px"]}
      >
        <GridItem>
          <Address />
          <Giftorder />
          <DeliveryOption/>
        </GridItem>
        <GridItem h="10" bg="tomato"></GridItem>
      </Grid>
    </Box>
  );
};

export default Checkout;
