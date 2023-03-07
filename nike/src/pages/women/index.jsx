import Banner from "@/components/Banner";
import FooterCTA from "@/components/FooterCTA";
import ScrollGrid from "@/components/ScrollGrid";
import TwoGrid from "@/components/TwoGrid";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Women() {
  return (
    <Box mt={"30px"}>
      <Head>
        <title>Women's Shoes, Clothing & Bras</title>
        <link
          rel="shortcut icon"
          href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
        />
      </Head>
      <Flex
        zIndex={"999"}
        w={"100%"}
        bgColor="white"
        h={"max-content"}
        py={4}
        position="sticky"
        top={"0"}>
        <Flex w={"51%"} transition="300ms ease" className="nav-men">
          <Text fontSize={"2xl"} fontWeight="bold">
            Women
          </Text>
          <Flex fontWeight={"bold"} gap={8}>
            <Link href={"/women/shoes"}>
              <Text>Shoes</Text>
            </Link>
            <Link href={"/women/clothing"}>
              <Text>Clothing</Text>
            </Link>
            <Link href={"/women/bras"}>
              <Text>Bras</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Box className="home" mt={"50px"}>
        <Box overflow={"hidden"} position={"relative"}>
          <Image
            className="women-banner-img-lg"
            minW={"1576px"}
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1520,c_limit/de6e71ec-b504-4627-b41c-9477b74747d8/women-s-shoes-clothing-accessories.jpg"
          />
          <Image
            className="women-banner-img-sm"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_496,c_limit/fa3b6e0c-0978-4668-871b-1d63473427f7/women-s-shoes-clothing-accessories.jpg"
          />
          <Box className="women-banner-text-lg">
            <Text fontSize={"50px"} lineHeight="40px" className="fancy-text">
              Welcome to the <br /> women's event
            </Text>
            <Text>
              From 3.6 to 3.11, we’ve got Member-exclusive drops, stories, a
              <br /> special sale, and more. Shop the collection or check out
              the lineup.
            </Text>
            <Flex gap={2}>
              <buttton className="black-button">Shop</buttton>
              <buttton className="black-button">See the Lineup</buttton>
            </Flex>
          </Box>
        </Box>
        <Box className="women-banner-text-sm">
          <Text fontSize={"50px"} lineHeight="40px" className="fancy-text">
            Welcome to the women's event
          </Text>
          <Text>
            From 3.6 to 3.11, we’ve got Member-exclusive drops, stories, a special sale, and more. Shop the collection or check out the
            lineup.
          </Text>
          <Flex gap={2}>
            <buttton className="black-button">Shop</buttton>
            <buttton className="black-button">See the Lineup</buttton>
          </Flex>
        </Box>
        <Box mt={"90px"}>
          <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
            Trending
          </Text>
          <Banner
            img1={
              "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1299,c_limit/ba0c6e93-8754-40a6-8d84-580b7bd13199/women-s-shoes-clothing-accessories.jpg"
            }
            img2={
              "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_675,c_limit/9f47fd0a-22dd-425a-9932-6b17a4465b0d/women-s-shoes-clothing-accessories.jpg"
            }
            txt1={"Style up your"}
            txt2={"nike leggings"}
            dsc={
              "Pair Zenvy and Go Leggings with your must have prices for a fit that"
            }
            dsc2={"takes you from workout to brunch and beyond."}
            btn1={"Shop"}
          />
        </Box>
        <TwoGrid
          title={"Nike Running's Latest"}
          dsc1={"Nike Pegasus 39"}
          btn1={"Shop"}
          dsc2={"Nike React Infinity 3"}
          btn2={"Shop"}
          img1={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_734,c_limit/97ad9025-1390-4aea-ab7f-0b4ab3231d87/women-s-shoes-clothing-accessories.jpg"
          }
          img2={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_734,c_limit/e8c5c4ef-cf2e-49db-a44b-aeacdf83fcff/women-s-shoes-clothing-accessories.jpg"
          }
        />
        <ScrollGrid
          title={"More to Explore"}
          img1="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/7286a10f-76b3-49fa-b9f3-7cd46369963a/women-s-shoes-clothing-accessories.jpg"
          img2="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/9fd957c1-b818-4a2c-912a-1b577a44238b/women-s-shoes-clothing-accessories.png"
          img3="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/93570e73-3cd6-4acd-bac4-6d7e37aa9ccd/women-s-shoes-clothing-accessories.jpg"
        />
        <ScrollGrid
          title={"Icons for Any Season"}
          img1={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/46039e79-b671-446e-a6a8-c5f0ed03ec98/women-s-shoes-clothing-accessories.jpg"
          }
          img2={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/c752cf11-b579-4a7e-a60b-8c0acebf455d/women-s-shoes-clothing-accessories.jpg"
          }
          img3={
            "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_486,c_limit/7bf4c601-f22f-42de-acc1-7e31a9c4f9bb/women-s-shoes-clothing-accessories.jpg"
          }
        />
        <FooterCTA />
      </Box>
    </Box>
  );
}

export default Women;
