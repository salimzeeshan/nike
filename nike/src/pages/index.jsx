import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box px={"40px"}>
      <Box className="banner-container">
        <Image
          className="home-banner"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_890,c_limit/0a5aa15e-e49a-4b32-925c-8a848b234b79/nike-just-do-it.jpg"
        />
        <Image
          className="home-banner-small"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_509,c_limit/9a33480e-d483-4a6d-b36f-c630da32c304/nike-just-do-it.jpg"
        />
        <Flex mt={"20px"} gap={"20px"} flexDirection={"column"} className="banner-cta">
          <Text className="banner-text" fontWeight={"900"} textTransform={"uppercase"} as={"b"} fontSize={"5xl"}>
            All the cushion, <br />
            All the feels
          </Text>
          <Text>
            The Nike Invincible 3 is our most cushioned road-running shoe yet.
          </Text>
          <button className="black-button banner-button">Shop Running Shoes</button>
        </Flex>
      </Box>
    </Box>
  );
}
