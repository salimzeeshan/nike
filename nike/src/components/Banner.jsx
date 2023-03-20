import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Banner({ img1, img2, txt1, txt2, dsc, dsc2, btn1 }) {
  return (
    <Box className="banner-container">
      <Image w={"100%"} className="home-banner" src={img1} />
      <Image w={"100%"} className="home-banner-small" src={img2} />
      <Flex
        mt={"30px"}
        gap={"20px"}
        flexDirection={"column"}
        className="banner-cta">
        <Text className="fancy-text">
          {txt1} <br />
          {txt2}
        </Text>
        <Text>
          {dsc} <br /> {dsc2}
        </Text>
        <button className="black-button banner-button">{btn1}</button>
      </Flex>
    </Box>
  );
}

export default Banner;
