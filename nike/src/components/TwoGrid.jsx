import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function TwoGrid({ title, txt1, dsc1, img1, btn1, txt2, dsc2, btn2, img2 }) {
  return (
    <Box mt={"90px"} width={"100%"}>
      <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
        {title}
      </Text>
      <Box w={"100%"} className="grid-two">
        <Box position={"relative"}>
          <Box pr={"25px"} className="grid-two-box">
            {txt1 ? <Text fontWeight={"bold"}>{txt1}</Text> : null}
            {dsc1 ? (
              <Text fontSize={"2xl"} fontWeight={"bold"} mb={"30px"}>
                {dsc1}
              </Text>
            ) : null}

            <button className="white-button">{btn1}</button>
          </Box>
          <Image width={"100%"} src={img1} />
        </Box>
        <Box position={"relative"}>
          <Box pr={"25px"} className="grid-two-box">
            {txt2 ? (
              <Text fontSize={"2xl"} fontWeight={"bold"} mb={"30px"}>
                {txt2}
              </Text>
            ) : null}
            {dsc2 ? (
              <Text fontSize={"2xl"} fontWeight={"bold"} mb={"30px"}>
                {dsc2}
              </Text>
            ) : null}
            <button className="white-button">{btn2}</button>
          </Box>
          <Image width={"100%"} src={img2} />
        </Box>
      </Box>
    </Box>
  );
}

export default TwoGrid;
