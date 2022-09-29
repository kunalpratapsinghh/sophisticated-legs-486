import React from "react";
import { Box, SimpleGrid,Link,Container,Stack,Text,Flex } from "@chakra-ui/react";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,

} from "react-icons/ti";
import {
  BsInstagram,
} from "react-icons/bs";
import footer from "./footer.png"


export const Footer = () => {
  return (
    <Box width={"75%"} margin="auto">
      <Flex
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={0}
        width={"100%"}
        fontSize={"14px"}
        fontWeight={"350"}
        mt={"3rem"}
        padding={"1rem"}
      >
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            bigbasket
          </Text>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>In News</Link>
          <Link href={"#"}>Green bigbasket</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Affiliate</Link>
          <Link href={"#"}>Terms and Conditions</Link>
          <Link href={"#"}>Careers At bigbasket</Link>
          <Link href={"#"}>bb Instant</Link>
          <Link href={"#"}>bb Daily</Link>
          <Link href={"#"}>bb Blog</Link>
          <Link href={"#"}>bbnow</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Help
          </Text>
          <Link href={"#"}>FAQ's</Link>
          <Link href={"#"}>Contact Us</Link>
          <Link href={"#"}>bb Wallet FAQ's</Link>
          <Link href={"#"}>bb wallet T&Cs</Link>
          <Link href={"#"}>Vendor Connect</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Download Our App
          </Text>
          <Box>
            <img
              src="https://www.bbassets.com/static/v2557/custPage/build/content/img/Google-App-store-icon.png"
              alt=""
            />
          </Box>
          <Box>
            <img
              src="	https://www.bbassets.com/static/v2557/custPage/build/content/img/Apple-App-store-icon.png"
              alt=""
            />
          </Box>
        </Stack>

        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Get Social With Us
          </Text>
          <Flex>
            <Box
              bg={"#3b5998"}
              boxSize={"40px"}
              borderRadius={"50%"}
              mr={"1rem"}
            >
              <TiSocialFacebook color="white" size={"40px"} />
            </Box>
            <Box bg={"red"} boxSize={"40px"} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialPinterest color="white" size={"40px"} />
            </Box>
            <Box bg={"blue"} boxSize={"40px"} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialTwitter color="white" size={"40px"} />
            </Box>
            <Flex
              bg={"#517fa4"}
              boxSize={"40px"}
              borderRadius={"50%"}
              textAlign="center"
              alignItems={"center"}
              justifyContent={"center"}
              mr={"1rem"}
            >
              <BsInstagram color="white" size={"25px"} />
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <Flex alignItems={"center"}>
        <Text color={"#84c225"} size={"16px"} mr={"2rem"}>
          Payment Otions
        </Text>
        <Box>
          <img src={footer} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};

