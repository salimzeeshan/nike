import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import ScrollGrid from "@/components/ScrollGrid";
import TwoGrid from "@/components/TwoGrid";
import FooterCTA from "@/components/FooterCTA";
import Head from "next/head";

export default function Home() {
  return (
    <Box className="home">
      <Head>
        <title>Nike. Just Do It.</title>
        <link rel="shortcut icon" href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png" />
      </Head>
      <Box className="banner-container">
        <Image
          w={"100%"}
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
            className="fancy-text">
            All the cushion, <br />
            All the feels
          </Text>
          <Text>
            The Nike Invincible 3 is our most cushioned road-running shoe yet.
          </Text>
          <button className="black-button banner-button">
            Shop Running Shoes
          </button>
        </Flex>
      </Box>

      <ScrollGrid
        img1="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/efcb41d3-9ccd-48b0-8384-039c91280cce/nike-just-do-it.jpg"
        img2="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/0b599005-dfc8-45d3-af0f-83de94e0f501/nike-just-do-it.jpg"
        img3="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_375,c_limit/0af799f9-68a2-4e03-b455-e59042f7361c/nike-just-do-it.jpg"
        title="Shop the look"
      />

      <TwoGrid
        title={"Trending"}
        txt1={"Nike Style"}
        dsc1={"Cynthia Cervantes's Unexpected Fits"}
        btn1={"Shop Women's Lifestyle"}
        img1={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_370,c_limit/1e3cbdb5-a729-4b55-b02b-95247287f16d/nike-just-do-it.jpg"
        }
        dsc2={"AJ1 Elevate"}
        btn2={"Shop Women's Jordan"}
        img2={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_370,c_limit/0be53ce0-512f-4b5b-bd33-1e25b646be82/nike-just-do-it.jpg"
        }
      />

      <Box mt={"90px"}>
        <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
          Get Ready
        </Text>
        <Box color={"white"} py={"50px"} className="orange-bg">
          <Text className="fancy-text">
            Women's event <br /> starts 03.06.23
          </Text>
          <Text>
            Don't miss 6 days filled with Member-exclusive drops, stories, and
            more.
          </Text>
          <button className="white-button">See the Lineup</button>
        </Box>
      </Box>

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
        img1="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_725,c_limit/156a200a-91a4-41b4-8d14-5dc0938e6c28/nike-just-do-it.jpg"
        img2="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_725,c_limit/800dd287-7255-423c-b2ed-72e220ca5c48/nike-just-do-it.jpg"
        img3="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_726,c_limit/44ebbf56-daf4-4efb-8ede-6258194048e3/nike-just-do-it.jpg"
        title="Gear Up for Spring"
      />

      <TwoGrid
        title={"For Workouts & Beyond"}
        dsc1={"Our Most Versatile Styles"}
        btn1={"Shop Men's Versatile Apparel"}
        img1={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_708,c_limit/f3334a25-d1c0-4c98-b264-8aa9b84af655/nike-just-do-it.jpg"
        }
        dsc2={"Must Have Pieces For Comfy Fit"}
        btn2={"Shop Women's Fitness"}
        img2={
          "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_708,c_limit/6debd627-3045-4a69-bb06-616d491ad5af/nike-just-do-it.jpg"
        }
      />

      <ScrollGrid
        img1="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_816,c_limit/cd2c0283-08eb-4628-a538-ee577b4c0aee/nike-just-do-it.jpg"
        img2="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_816,c_limit/3a148c22-fa92-47fe-a4dd-783919e4eb85/nike-just-do-it.jpg"
        img3="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_816,c_limit/f1d83c67-588b-4de8-943c-560e2740072c/nike-just-do-it.jpg"
        title="Always Iconic"
      />
      <FooterCTA />
    </Box>
  );
}
