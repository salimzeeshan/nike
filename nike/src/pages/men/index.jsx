import ScrollGrid from "@/components/ScrollGrid";
import TwoGrid from "@/components/TwoGrid";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import FooterCTA from "@/components/FooterCTA";
import Banner from "@/components/Banner";

function Men() {
  return (
    <Box>
      <Flex
        zIndex={"999"}
        w={"100%"}
        bgColor="white"
        h={"max-content"}
        py={4}
        position="sticky"
        top={"0"}>
        <Flex transition="300ms ease" className="nav-men">
          <Text fontSize={"2xl"} fontWeight="bold">
            Men
          </Text>
          <Flex fontWeight={"bold"} gap={8}>
            <Link href={"/men/shoes"}>
              <Text>Shoes</Text>
            </Link>
            <Text>Clothing</Text>
            <Text>Accessories</Text>
            <Text>Sale</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box className="home" mt={"50px"}>
        <Banner
          img1={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_982,c_limit/2b3c640e-7fa0-4fce-b5e2-974fa8494e9b/men-s-shoes-clothing-accessories.jpg"
          }
          img2={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_699,c_limit/3b464bd4-3211-4fa0-a356-d648991eecde/men-s-shoes-clothing-accessories.jpg"
          }
          txt1={"Just add air"}
          dsc={
            "Whatever your vibe, Air Max takes your look to the next level with styles like the Air Max SC and more."
          }
          btn1={"Style Your Air"}
        />

        <TwoGrid
          title={"Nike Running Favourites"}
          dsc1={"Pegasus 39"}
          btn1={"Shop"}
          img1={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_456,c_limit/55ed254a-f5de-470f-a78d-2f9bd454cfb0/nike-just-do-it.jpg"
          }
          dsc2={"Nike Infinity 3"}
          btn2={"Shop"}
          img2={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_456,c_limit/d4b482d7-a5c2-4f39-abc2-c9b7f8892d05/nike-just-do-it.jpg"
          }
        />

        <ScrollGrid
          title={"Icons for Any Season"}
          img1={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/2676934d-303c-48d2-8050-4f9a0ef1a4b6/men-s-shoes-clothing-accessories.jpg"
          }
          img2={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/d45c04f7-16ea-41b8-a347-5b2109b0d16e/men-s-shoes-clothing-accessories.jpg"
          }
          img3={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_616,c_limit/92afde42-e67d-4a68-b63d-f767fb76be17/men-s-shoes-clothing-accessories.jpg"
          }
        />

        <FooterCTA />
      </Box>
    </Box>
  );
}

export default Men;
