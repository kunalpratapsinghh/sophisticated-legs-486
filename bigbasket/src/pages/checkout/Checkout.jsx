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
} from "@chakra-ui/react";
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
      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)']}gap="10px">
        <GridItem h='10' bg='tomato' w="70%"></GridItem>
        <GridItem  h='10' bg='tomato' ColSpan={1}></GridItem>
      </Grid>
    </Box>
  );
};

export default Checkout;