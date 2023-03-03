import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function FooterCTA() {
  return (
    <Box mt={"90px"}>
      <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
        Nike Membership
      </Text>
      <Box
        bgImage={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1520,c_limit/5e4a0ef7-a2c9-483a-8e5b-45d8277db19d/nike-just-do-it.jpg"
        }
        bgSize={"contain"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        flexDirection={"column"}
        gap={"30px"}
        color={"white"}
        py={"25px"}
        className={"black-bg footer-cta footer-lg"}>
        <Text className="fancy-text">
          Become a <br /> member
        </Text>
        <Text>Sign Up for free. Join the community.</Text>
        <Flex gap={"15px"}>
          <button className="white-button">Join Us</button>
          <button className="white-button">Sign In</button>
        </Flex>
      </Box>
    </Box>
  );
}

export default FooterCTA;
