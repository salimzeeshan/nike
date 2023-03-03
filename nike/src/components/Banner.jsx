import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Banner({ img1, img2, txt1, txt2, dsc, btn1 }) {
  return (
    <Box className="banner-container">
      <Image className="home-banner" src={img1} />
      <Image className="home-banner-small" src={img2} />
      <Flex
        mt={"20px"}
        gap={"20px"}
        flexDirection={"column"}
        className="banner-cta">
        <Text
          className="banner-text"
          fontWeight={"900"}
          textTransform={"uppercase"}
          as={"b"}
          fontSize={"5xl"}>
          {txt1} <br />
          {txt2}
        </Text>
        <Text>{dsc}</Text>
        <button className="black-button banner-button">{btn1}</button>
      </Flex>
    </Box>
  );
}

export default Banner;
