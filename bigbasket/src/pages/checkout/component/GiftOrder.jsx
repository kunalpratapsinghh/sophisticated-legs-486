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

const Address = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  return (
    <Stack
      mt="-5px"
      border="1px solid grey"
    >
      <HStack p={"20px"}>
        <Box fontSize="l">
          <Heading size={"s"}> Is this a gift order?</Heading>
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
      <Collapse in={isOpen} animateOpacity >
        <Text fontSize="lg" textAlign={"left"} p={"0px 20px"}>Details For Gift Message</Text>
        <SimpleGrid textAlign={"left"} p={"0px 20px"} columns={[1, 2, 2]} gap="10px">
            <GridItem>
                <Flex direction={"column"}>
                <Text>Enter recipient's name</Text>
                <Input size={"xs"} w="100%"></Input>
                </Flex>
            </GridItem>
            <GridItem>
                <Flex direction={"column"}>
                <Text>Enter your name</Text>
                <Input size={"xs"} w="100%"></Input>
                </Flex>
            </GridItem><GridItem>
                <Flex direction={"column"}>
                <Text>Enter message</Text>
                <Input size={"xs"} w="100%" h="80px"></Input>
                </Flex>
            </GridItem>
        </SimpleGrid>
        <SimpleGrid justifyContent={"left"} padding="20px" w={"50%"}>
            <Button bg={"gray"} variant="outline" borderRadius={"0"} fontSize={["5px","10px","15px","16px"]}>Save & Continue</Button>
            <Spacer/>
            <Button variant="outline" borderRadius={"0"} onClick={onToggle}>Cancel</Button>
        </SimpleGrid>
      </Collapse>
    </Stack>
  );
};

export default Address;
