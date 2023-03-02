import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";

export default function Home() {
  return (
    <Box className="home">
      <Box className="banner-container">
        <Image
          className="home-banner"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_890,c_limit/0a5aa15e-e49a-4b32-925c-8a848b234b79/nike-just-do-it.jpg"
        />
        <Image
          className="home-banner-small"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_509,c_limit/9a33480e-d483-4a6d-b36f-c630da32c304/nike-just-do-it.jpg"
        />
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
            All the cushion, <br />
            All the feels
          </Text>
          <Text>
            The Nike Invincible 3 is our most cushioned road-running shoe yet.
          </Text>
          <button className="black-button banner-button">
            Shop Running Shoes
          </button>
          <Box mt={"90px"}>
            <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
              Shop the look
            </Text>
            <div className="grid-three">
              <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/efcb41d3-9ccd-48b0-8384-039c91280cce/nike-just-do-it.jpg" />
              <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/0b599005-dfc8-45d3-af0f-83de94e0f501/nike-just-do-it.jpg" />
              <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/0af799f9-68a2-4e03-b455-e59042f7361c/nike-just-do-it.jpg" />
            </div>
          </Box>
          <Box mt={"90px"}>
            <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
              Trending
            </Text>
            <Box className="grid-two">
              <Box position={"relative"}>
                <Box pr={"25px"} className="grid-two-box">
                  <Text fontWeight={"bold"}>Nike Style</Text>
                  <Text fontSize={"2xl"} fontWeight={"bold"} mb={"30px"}>Cynthia Cervantes's Unexpected Fits</Text>
                  <button className="white-button">Shop Women's Lifestyle</button>
                </Box>
                <Image src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_370,c_limit/1e3cbdb5-a729-4b55-b02b-95247287f16d/nike-just-do-it.jpg" />
              </Box>
              <Box position={"relative"}>
                <Box pr={"25px"} className="grid-two-box">
                  <Text fontSize={"2xl"} fontWeight={"bold"} mb={"30px"}>AJ1 Elevate</Text>
                  <button className="white-button">Shop Women's Jordan</button>
                </Box>
                <Image src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_370,c_limit/0be53ce0-512f-4b5b-bd33-1e25b646be82/nike-just-do-it.jpg" />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
