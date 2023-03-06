import {
  Box,
  Button,
  Divider,
  filter,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const dummy = [
  {
    _id: "63fdf9234d63f62a5828e6b4",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6b5",
    title: "Air Jordan 6 Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd76efc6-0d14-45f3-811b-703a4b2c4d2b/air-jordan-6-retro-mens-shoes-CVPFVM.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 200,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6b6",
    title: "Nike Blazer Mid Pro Club",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3882dca8-76f9-4bb9-b78e-a5bf8e4d72fb/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "5 Colors",
    price: 115,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6b7",
    title: "Nike Blazer Mid '77 Vintage",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 105,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6b8",
    title: "LeBron XX ASW",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/240233b5-760b-4771-8bed-e5e3198310fb/lebron-xx-asw-basketball-shoes-XHwV4M.png",
    message: "Just In",
    subtitle: "Basketball Shoes",
    color_count: "1 Color",
    price: 200,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6b9",
    title: "KD15 ASW",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f6a1c8d-d8e6-436b-86a2-1e3a13951f78/kd15-asw-basketball-shoes-10P3rj.png",
    message: "Just In",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ba",
    title: "Nike Pegasus 39",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/729b0a10-1405-45b8-9d22-3c32bf53dcc3/pegasus-39-mens-road-running-shoes-d4dvtm.png",
    message: "Best Seller",
    subtitle: "Men's Road Running Shoes",
    color_count: "9 Colors",
    price: 90.97,
    original_price: 120,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6bb",
    title: "Nike Invincible 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/514c0c6c-8c60-4d65-94c4-73158a3028be/invincible-3-mens-road-running-shoes-CLdFjq.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "4 Colors",
    price: 180,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6bc",
    title: "Nike Air Cross Trainer 3 Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c222a55-4162-4ac7-81c4-74e9f384cf1e/air-cross-trainer-3-low-mens-shoes-l9MqNc.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6bd",
    title: "Nike Air Huarache",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03fd4328-0fd9-4257-90ac-40222abd9940/air-huarache-mens-shoes-JppwBb.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "16 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6be",
    title: "Nike Air Presto",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf44da7-c3a7-4293-9c77-9fcdc0466f68/air-presto-mens-shoes-JlLlWz.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "8 Colors",
    price: 135,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6bf",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/090db8b8-ab43-4afd-88e6-d9892265963e/air-force-1-07-mens-shoes-7qQ67j.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c0",
    title: "Nike Air Max 90",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/baa2520d-49da-4a27-ab2c-7fb133fb3008/air-max-90-mens-shoes-6n3vKB.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c1",
    title: "Nike Air Max 90",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6b71290-b61d-4baf-ac63-8aa02d10f3ac/air-max-90-mens-shoes-HFxBCQ.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c2",
    title: "Nike Air VaporMax 2021 FK",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dfe54c4c-1c62-4f11-b9b9-c22125d3fc6e/air-vapormax-2021-fk-mens-shoes-NpTfFz.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "12 Colors",
    price: 210,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c3",
    title: "Nike Air VaporMax Plus",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fcujpsr93l0mcpeyy8ad/air-vapormax-plus-mens-shoes-nC0dzF.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "8 Colors",
    price: 210,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c4",
    title: "Nike Air Max 97",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cuvuokzz86meuxcssbma/air-max-97-mens-shoes-LJmK45.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "10 Colors",
    price: 175,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c5",
    title: "Nike Air Max 270",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-mens-shoes-KkLcGR.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "11 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c6",
    title: "Air Jordan 1 Mid",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/304a0bcf-d790-4b33-9d09-8dcaf1416b97/air-jordan-1-mid-mens-shoes-FGLltd.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c7",
    title: "Nike Dunk High Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e5c2b2d-ffed-4874-a843-338faf37b8e3/dunk-high-retro-mens-shoes-dTVTCk.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c8",
    title: "Luka 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8558612-6667-4fb1-8f56-ec4ad8f93e76/luka-1-basketball-shoes-69X9Vs.png",
    message: "Just In",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6c9",
    title: "Zoom Freak 4 ASW",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/edcba1fe-3eb6-4faa-865a-8d9240fdbb08/zoom-freak-4-asw-basketball-shoes-dsLlqf.png",
    message: "Just In",
    subtitle: "Basketball Shoes",
    color_count: "12 Colors",
    price: 135,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ca",
    title: "Nike Air More Uptempo '96",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2557b521-7942-40b2-af87-9839b62bba32/air-more-uptempo-96-mens-shoes-zpkSSs.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "7 Colors",
    price: 165,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6cb",
    title: "Nike Air Zoom Flight 95",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/850885fb-624d-42e8-b403-a72f282400ff/air-zoom-flight-95-mens-shoes-zc42bP.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "6 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6cc",
    title: "Nike Blazer Mid Pro Club",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3882dca8-76f9-4bb9-b78e-a5bf8e4d72fb/blazer-mid-pro-club-mens-shoes-Vgslvc.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "",
    price: 115,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6cd",
    title: "Air Jordan 1 Low G",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d01cb6e6-5d25-46e6-8851-2bf514d9066c/air-jordan-1-low-g-golf-shoes-jChrQ3.png",
    message: "Just In",
    subtitle: "Golf Shoes",
    color_count: "5 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ce",
    title: "Tiger Woods '13",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59a3c20c-e12b-42f1-90f1-d830d837d11a/tiger-woods-13-mens-golf-shoes-HBZwkB.png",
    message: "Just In",
    subtitle: "Men's Golf Shoes",
    color_count: "1 Color",
    price: 240,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6cf",
    title: "Nike Pegasus Turbo Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d438819-e8ff-4de5-aa4d-6565756171da/pegasus-turbo-next-nature-mens-road-running-shoes-pnz45r.png",
    message: "Sustainable Materials",
    subtitle: "Men's Road Running Shoes",
    color_count: "8 Colors",
    price: 150,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d0",
    title: "Nike React Infinity Run Flyknit 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ea586b86-bd76-4010-87d6-253f2d0e83ee/react-infinity-run-flyknit-3-mens-road-running-shoes-1bRq75.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "6 Colors",
    price: 170,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d1",
    title: "Nike Juniper Trail 2 Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc2ee5eb-8adb-4190-a6b3-3b66ded8268a/juniper-trail-2-next-nature-mens-trail-running-shoes-lFQ3lS.png",
    message: "Sustainable Materials",
    subtitle: "Men's Trail Running Shoes",
    color_count: "4 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d2",
    title: "Nike Pegasus Trail 4 GORE-TEX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7cc3b91-c206-4aff-87e5-5e8b408729fe/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    message: "",
    subtitle: "Men's Waterproof Trail Running Shoes",
    color_count: "9 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d3",
    title: "Nike Air Max Plus",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/go9ejlsilpz2hq0eophu/air-max-plus-mens-shoes-x9G2xF.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "10 Colors",
    price: 175,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d4",
    title: "Nike Air Max Plus Utility",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6be330b0-4fde-47bf-9739-259da9aab551/air-max-plus-utility-mens-shoes-Rpkxlg.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 195,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d5",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/752efdf6-b2b7-47fc-b137-5a70b5dd9423/air-force-1-07-mens-shoes-5xqQ6q.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d6",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-force-1-07-mens-shoes-xDpsTk.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d7",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fc01e3ac-b2d0-4543-b254-6ea989731c1b/air-force-1-07-lv8-mens-shoes-ZvGj5Q.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d8",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-mens-shoes-rXkGJX.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6d9",
    title: "Nike Waffle One",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/25e0f899-d881-49cd-9963-6570e14a6ccc/waffle-one-mens-shoes-4SPCK4.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "13 Colors",
    price: 105,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6da",
    title: "Nike Air Trainer 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a488aed8-f23e-4113-8e7d-1403a7b8bd90/air-trainer-1-mens-shoes-0vx2ft.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "7 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6db",
    title: "Nike Free Metcon 4",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6c248067-b97e-4f45-b17a-5a5e1c1c2423/free-metcon-4-training-shoes-KX41Bv.png",
    message: "",
    subtitle: "Training Shoes",
    color_count: "10 Colors",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6dc",
    title: "Nike Metcon 8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/547cec68-3933-430a-b104-f8bf3b675c6d/metcon-8-mens-training-shoes-ppltpW.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "9 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6dd",
    title: "Nike SB Nyjah 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/94bb7cb9-6e72-4590-9bde-9a4c2f39834b/sb-nyjah-3-skate-shoes-wk7V8x.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "6 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6de",
    title: "Nike SB Zoom Blazer Mid",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6d180e6-03f6-4e44-8160-668c1ef97c5e/sb-zoom-blazer-mid-skate-shoes-ZLRvRZ.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "7 Colors",
    price: 90,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6df",
    title: "Nike Air Max SYSTM",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76201ac6-a3be-451d-936f-259e97be076b/air-max-systm-mens-shoes-TwgLWK.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "6 Colors",
    price: 100,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e0",
    title: "Nike Air Max TW",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d933c92e-f510-4137-8948-0ce2f9db91c0/air-max-tw-mens-shoes-DLKBKm.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "5 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e1",
    title: "Nike Air Max 97 SE",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5afb828-acec-4930-bacd-5cba3145e06b/air-max-97-se-mens-shoes-VTqg7B.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 185,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e2",
    title: "Nike Air Max 90 SE",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86b70843-0d71-4aa1-8d18-18b94bc097b7/air-max-90-se-mens-shoes-sXJXK0.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e3",
    title: "Jordan ADG 4",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07fe8bcd-5131-4aed-85b9-7f05312e5677/jordan-adg-4-mens-golf-shoes-zw1ZGK.png",
    message: "",
    subtitle: "Men's Golf Shoes",
    color_count: "5 Colors",
    price: 185,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e4",
    title: "Nike Court Vision Low Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/012c85df-3b66-4fca-96f5-19f3afe7c029/court-vision-low-next-nature-mens-shoes-M967RF.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "9 Colors",
    price: 75,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e5",
    title: "Nike Court Vision Mid Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/440deb6f-e486-4c08-9d3b-538be9b7591b/court-vision-mid-next-nature-mens-shoes-j5K4rb.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "6 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e6",
    title: "Nike Air Force 1 Mid '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0447d3b3-28d3-4ba3-a6d6-deb0b21558af/air-force-1-mid-07-mens-shoes-S1QClz.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e7",
    title: "Nike Air Force 1 High '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a91c26b-7471-459d-91c5-30665fdc144c/air-force-1-high-07-mens-shoes-CGjvNW.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e8",
    title: "Nike Air Force 1 Mid '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2f5ab29-36fb-48c7-81d9-50baa654b2b9/air-force-1-mid-07-mens-shoes-CmXM62.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6e9",
    title: "Nike Air Force 1 High '07 LV8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3727d0f9-a6d1-4ee9-993c-9aac2fd0b65b/air-force-1-high-07-lv8-mens-shoes-lR6frj.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 145,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ea",
    title: "Air Jordan 1 Retro High OG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/50544d3c-3be0-4451-9691-702f6800b0c2/air-jordan-1-retro-high-og-mens-shoes-VdpsB7.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 180,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6eb",
    title: "Air Jordan 7 Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f00e0c1d-9500-4063-843d-01f3f40ec1c7/air-jordan-7-retro-mens-shoes-098sXt.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 210,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ec",
    title: "Nike Blazer Low '77 Vintage",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0173204-5c89-40e9-bae6-fc4fbbb67d12/blazer-low-77-vintage-mens-shoes-jsksCM.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "3 Colors",
    price: 90,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ed",
    title: "Air Jordan 1 Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4becaa33-4fc0-4858-a68d-9d77efbd11d5/air-jordan-1-low-mens-shoes-0LXhbn.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "5 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ee",
    title: "Air Jordan 1 Mid SE",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc9efa13-9572-490e-afa9-4c5b8e25187a/air-jordan-1-mid-se-mens-shoes-Zn07hL.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "3 Colors",
    price: 135,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ef",
    title: "Nike Alphafly 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c0e5a3d-e70e-4a29-b470-d880239b84da/alphafly-2-mens-road-racing-shoes-Bstm8X.png",
    message: "",
    subtitle: "Men's Road Racing Shoes",
    color_count: "2 Colors",
    price: 285,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f0",
    title: "Nike Crater Impact",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4aff6751-9456-481a-9396-d49531b6937c/crater-impact-mens-shoes-QXmvst.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 62.97,
    original_price: 105,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f1",
    title: "Nike Dunk Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-womens-shoes-mTXmdj.png",
    message: "Coming Soon",
    subtitle: "Women's Shoes",
    color_count: "1 Color",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f2",
    title: "Kyrie Infinity",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fd65fe0-9e8c-4a64-863e-bb9fd5848650/kyrie-infinity-basketball-shoes-LvzsVp.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 69.97,
    original_price: 140,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f3",
    title: "Nike Blazer Low '77 Premium",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f85be18b-dbcc-4c48-85be-b340287ccbea/blazer-low-77-premium-mens-shoes-6ZNq6W.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 85.97,
    original_price: 100,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f4",
    title: "Nike Zoom Mercurial Vapor 15 Elite FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/745d468b-7519-4829-87a7-4718c656d237/zoom-mercurial-vapor-15-elite-fg-firm-ground-soccer-cleats-NLZxDR.png",
    message: "",
    subtitle: "Firm Ground Soccer Cleats",
    color_count: "6 Colors",
    price: 250,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f5",
    title: "Air Jordan 7 Retro SE",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/571df40b-1b5b-41c4-a2ca-982449647284/air-jordan-7-retro-se-mens-shoes-8mRqbR.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 210,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f6",
    title: "Nike Air Force 1 Mid '07 Premium",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1b80be6-fce8-4f2f-820e-fad7dd1a1272/air-force-1-mid-07-premium-mens-shoes-6HzNcj.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 98.97,
    original_price: 185,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f7",
    title: "Nike Zoom Mercurial Superfly 9 Elite FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a283f803-d49a-40aa-aa39-2c011a97ee4d/zoom-mercurial-superfly-9-elite-fg-firm-ground-soccer-cleats-sb8gJK.png",
    message: "Best Seller",
    subtitle: "Firm-Ground Soccer Cleats",
    color_count: "5 Colors",
    price: 275,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f8",
    title: "Nike Precision 5",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31d5f3fc-69f1-4248-af95-e8e6c9ac4ea9/precision-5-basketball-shoes-PKN7Vk.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "1 Color",
    price: 49.97,
    original_price: 70,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6f9",
    title: "Nike Revolution 5",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/hbaotfderndelmnbcm9t/revolution-5-mens-road-running-shoes-ZXqS6C.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "1 Color",
    price: 59.97,
    original_price: 65,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6fa",
    title: "LeBron Witness 6 (Team)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4bdee219-c49a-4194-b606-ebf5ee2fd9a1/lebron-witness-6-team-basketball-shoes-d6BdZB.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "5 Colors",
    price: 89.97,
    original_price: 105,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6fb",
    title: "Nike Pegasus 38 (NFL Pittsburgh Steelers)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a69ba219-ca54-4692-bae6-3352c53cdc6e/pegasus-38-pittsburgh-steelers-mens-running-shoes-884pG1.png",
    message: "",
    subtitle: "Men's Running Shoes",
    color_count: "5 Colors",
    price: 65,
    original_price: 130,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6fc",
    title: "Air Jordan 1 Mid",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9666574d-f12c-46c8-b04b-fc50b3581e91/air-jordan-1-mid-shoes-X5pM09.png",
    message: "Best Seller",
    subtitle: "Shoes",
    color_count: "4 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6fd",
    title: "Nike Air Force 1 '07 Premium",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0cf30d74-57f8-43fa-b67f-11efbfd2afb3/air-force-1-07-premium-mens-shoes-zqBZTs.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6fe",
    title: "Nike Go FlyEase",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/247616b5-1d3b-4777-abbb-d5e08a924b78/go-flyease-easy-on-off-shoes-LGmqKx.png",
    message: "",
    subtitle: "Easy On/Off Shoes",
    color_count: "2 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e6ff",
    title: "Air Jordan 1 Mid",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4704ba44-0d65-41dc-bd5b-57bfcf5f7b14/air-jordan-1-mid-mens-shoes-b3js2D.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "3 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e700",
    title: "Nike Dunk Low Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-8t3K7k.png",
    message: "Coming Soon",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e701",
    title: "Air Jordan 5 Retro SE",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b56167d3-98f7-41cd-9c43-17c475b8f032/air-jordan-5-retro-se-mens-shoes.png",
    message: "Launching in SNKRS",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 225,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e702",
    title: "Nike Gripknit Phantom GX Elite FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6de4b02f-718c-46cf-a548-da944cf3e836/gripknit-phantom-gx-elite-fg-firm-ground-soccer-cleats-WGRzk4.png",
    message: "Coming Soon",
    subtitle: "Firm-Ground Soccer Cleats",
    color_count: "2 Colors",
    price: 250,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e703",
    title: "KD15 (Team)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38882159-aa3c-47a8-b902-ef6c15bc54c3/kd15-team-basketball-shoes-RBczWt.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "5 Colors",
    price: 127.97,
    original_price: 150,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e704",
    title: "Nike Pegasus 39",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aedf5ba2-51c9-4635-86a3-a70c9f7058f0/pegasus-39-mens-road-running-shoes-jXTgc9.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "19 Colors",
    price: 77.97,
    original_price: 130,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e705",
    title: "Nike Go FlyEase",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fb70b7e2-5594-4382-a529-7b342057e6a6/go-flyease-easy-on-off-shoes-6nd2cc.png",
    message: "",
    subtitle: "Easy On/Off Shoes",
    color_count: "3 Colors",
    price: 92.97,
    original_price: 120,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e706",
    title: "Nike Air Force 1 High By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/67031162-9cc5-481d-8ffe-7ada8f3d78bd/custom-nike-air-force-1-high-by-you-shoes.png",
    message: "Customize",
    subtitle: "Men's Custom Shoes",
    color_count: "6 Colors",
    price: 145,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e707",
    title: "Nike Air Force 1 High By MADE Hoops",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a60a7280-4043-4bcb-ae8c-47450d560a49/custom-nike-air-force-1-high-by-you-shoes.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "1 Color",
    price: 145,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e708",
    title: "Converse Chuck Taylor All Star High Top",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d82dc1keg33jjklyiw8l/converse-chuck-taylor-all-star-high-top-unisex-shoes-xX439O.png",
    message: "",
    subtitle: "Unisex Shoes",
    color_count: "3 Colors",
    price: 65,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e709",
    title: "Nike Vaporfly 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dad73e3e-0759-4c4d-8d75-7a50d87e5459/vaporfly-2-mens-road-racing-shoes-glWqfm.png",
    message: "",
    subtitle: "Men's Road Racing Shoes",
    color_count: "5 Colors",
    price: 260,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70a",
    title: "Nike Tiempo Legend 9 Club MG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/922a1b27-1b37-44ec-827f-d3076b6a6030/tiempo-legend-9-club-mg-multi-ground-soccer-cleats-d3m7HP.png",
    message: "",
    subtitle: "Multi-Ground Soccer Cleats",
    color_count: "2 Colors",
    price: 50,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70b",
    title: "Nike Legend Essential 3 Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aad797f1-2c9a-4141-ac5c-975274961946/legend-essential-3-next-nature-mens-training-shoes-Kbdqcx.png",
    message: "Sustainable Materials",
    subtitle: "Men's Training Shoes",
    color_count: "8 Colors",
    price: 55.97,
    original_price: 65,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70c",
    title: "Nike Air Force 1 '07 LV8 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fdeb34c8-a6bf-4530-9145-b6cfea5dd963/air-force-1-07-lv8-1-mens-shoes-x0bMdL.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70d",
    title: "Nike Digital Gift Card",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eda96757-b754-43e3-9fb8-9343ec57d8f9/digital-gift-card-emailed-in-approximately-2-hours-or-less-B9Mv2K.png",
    message: "",
    subtitle: "Emailed in Approximately 2 Hours or Less",
    color_count: "5 Colors",
    price: null,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70e",
    title: "Nike Court Legacy",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf4a5556-6163-4abf-9b83-0f89b4766100/court-legacy-mens-shoes-75ljqX.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "3 Colors",
    price: 70,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e70f",
    title: "Nike Zoom Mercurial Vapor 15 Pro FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e333735c-d6fa-4ac8-930f-d9922c23eb9d/zoom-mercurial-vapor-15-pro-fg-firm-ground-soccer-cleats-prClZQ.png",
    message: "",
    subtitle: "Firm-Ground Soccer Cleats",
    color_count: "2 Colors",
    price: 150,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e710",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd16cd97-5cb4-49ad-b8ee-e2590967e8a1/air-force-1-07-mens-shoes-vRgTMx.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 93.97,
    original_price: 110,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e711",
    title: "Nike SB Nyjah Free 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4688228a-b95b-4e49-9127-54723a205f1e/sb-nyjah-free-2-skate-shoes-s4Kt9q.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "4 Colors",
    price: 85.97,
    original_price: 100,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e712",
    title: "Nike Air Monarch IV",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/hakauduofjuvxtltfa6z/air-monarch-iv-mens-training-shoe-extra-wide-FZwDht.png",
    message: "",
    subtitle: "Men's Training Shoe (Extra Wide)",
    color_count: "8 Colors",
    price: 44.97,
    original_price: 75,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e713",
    title: "Giannis Immortality 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7aa6d11f-fabf-4bc1-b33e-70c2540dae30/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e714",
    title: "Nike Air Force 1 '07",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6a095e1-d80b-4a28-b0d4-fdc3c098c95c/air-force-1-07-mens-shoes-6HPpcT.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e715",
    title: "Nike Varsity Compete TR 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bcf05770-118b-4138-9504-affb93147fa3/varsity-compete-tr-3-mens-training-shoes-tfHsXn.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "2 Colors",
    price: 64.97,
    original_price: 70,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e716",
    title: "Nike Zoom Fly 5",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Running Shoes",
    color_count: "9 Colors",
    price: 170,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e717",
    title: "Nike Air Force 1 '07 WB",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e718",
    title: "Nike Dunk High",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Coming Soon",
    subtitle: "Women's Shoes",
    color_count: "1 Color",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e719",
    title: "Nike Dunk High Retro",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Coming Soon",
    subtitle: "Men's Shoe",
    color_count: "1 Color",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71a",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 97.97,
    original_price: 130,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71b",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71c",
    title: "Jordan Access",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoe",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71d",
    title: "Nike Air Force 1 Mid '07 LX",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 126.97,
    original_price: 150,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71e",
    title: "Air Jordan XXXVII Low",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "1 Color",
    price: 175,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e71f",
    title: "Nike SB Force 58",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Skate Shoe",
    color_count: "7 Colors",
    price: 80,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e720",
    title: "Nike Air Force 1 Low By Bishop Gorman",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e721",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e722",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e723",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e724",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e725",
    title: "Nike Air Force 1 Low By You",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Men's Shoes",
    color_count: "6 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e726",
    title: "Nike Air Force 1 Low By Duncanville",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e727",
    title: "Nike Air Force 1 Low By Sierra Canyon",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e728",
    title: "KD Trey 5 X",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 95,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e729",
    title: "Kyrie Flytrap 6",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "Sustainable Materials",
    subtitle: "Basketball Shoes",
    color_count: "2 Colors",
    price: 47.97,
    original_price: 95,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72a",
    title: "Jordan One Take 4",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "5 Colors",
    price: 100,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72b",
    title: "Nike Air Max 95 N7",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 180,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72c",
    title: "Nike React Infinity 3",
    image:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "8 Colors",
    price: 111.97,
    original_price: 160,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72d",
    title: "Nike Zoom Fly 5",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8d53955-784b-4fcd-b189-ad23a75c532e/zoom-fly-5-mens-running-shoes-jGsdSl.png",
    message: "",
    subtitle: "Men's Running Shoes",
    color_count: "9 Colors",
    price: 170,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72e",
    title: "Nike Air Force 1 '07 WB",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zjrheo7cjgrv6opt8txu/air-force-1-07-wb-mens-shoes-txRBM6.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e72f",
    title: "Nike Dunk High",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-L3Tqlr.png",
    message: "Coming Soon",
    subtitle: "Women's Shoes",
    color_count: "1 Color",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e730",
    title: "Nike Dunk High Retro",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-mens-shoe-14wxtR.png",
    message: "Coming Soon",
    subtitle: "Men's Shoe",
    color_count: "1 Color",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e731",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18734018-620a-4d31-bebf-eeeaa7e3cc76/air-force-1-07-lv8-mens-shoes-M866WJ.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 97.97,
    original_price: 130,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e732",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b05de1c-b694-48b1-9855-f8494f99e0b3/air-force-1-07-lv8-mens-shoes-PZf0LL.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e733",
    title: "Jordan Access",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1da9a11f-cc52-4b7a-ae05-29bb2a11318d/jordan-access-mens-shoe-5Jm9bC.png",
    message: "",
    subtitle: "Men's Shoe",
    color_count: "2 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e734",
    title: "Nike Air Force 1 Mid '07 LX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5008fd39-b017-4d08-8e70-95b9e565dd21/air-force-1-mid-07-lx-mens-shoes-083W0h.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 126.97,
    original_price: 150,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e735",
    title: "Air Jordan XXXVII Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c4d511ca-3d9a-4b96-a1e5-4f5d0655237b/air-jordan-xxxvii-low-basketball-shoes-Q0x2XT.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "1 Color",
    price: 175,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e736",
    title: "Nike SB Force 58",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bb9550a3-bc9b-4e79-8665-c94791036524/sb-force-58-skate-shoe-Txk6xG.png",
    message: "",
    subtitle: "Skate Shoe",
    color_count: "7 Colors",
    price: 80,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e737",
    title: "Nike Air Force 1 Low By Bishop Gorman",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d383ee93-84ab-4b53-a00f-ec2f18388609/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e738",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cfd41c0c-f24d-4e91-b26a-928f0f8db01a/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e739",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/79d7a15c-c579-494b-b2a8-eaa2cbccecd4/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73a",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d26ec773-7182-4859-82a7-fa9412f692cb/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73b",
    title: "Nike Air Force 1 Low By MADE Hoops",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd0f3d63-7c47-4d12-b752-fe9d31df24b5/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "2 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73c",
    title: "Nike Air Force 1 Low By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/321852ae-3bb4-4228-9704-68a8ac41b0bc/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Men's Shoes",
    color_count: "6 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73d",
    title: "Nike Air Force 1 Low By Duncanville",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1a481a2b-5e46-48f6-b5c6-24efde714538/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73e",
    title: "Nike Air Force 1 Low By Sierra Canyon",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9ff93c5-6ad7-4fc5-9a90-51b38490405c/hispl-quxm-tvxus.png",
    message: "Customize",
    subtitle: "Custom Shoes",
    color_count: "3 Colors",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e73f",
    title: "KD Trey 5 X",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0015a667-cd6f-4998-b16c-37fcb54c059b/kd-trey-5-x-basketball-shoes-cNfPMN.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "7 Colors",
    price: 95,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e740",
    title: "Kyrie Flytrap 6",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/daf4c547-fee0-4771-8ff7-77de88aeb0a6/kyrie-flytrap-6-basketball-shoes-Tkvqw6.png",
    message: "Sustainable Materials",
    subtitle: "Basketball Shoes",
    color_count: "2 Colors",
    price: 47.97,
    original_price: 95,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e741",
    title: "Jordan One Take 4",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a29f7bc7-0827-489a-b080-84fc3de2c076/jordan-one-take-4-basketball-shoes-1kGWDg.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "5 Colors",
    price: 100,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e742",
    title: "Nike Air Max 95 N7",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c521311-cf05-4fa3-8b8e-5fa96cd09988/air-max-95-n7-mens-shoes-KqfRGP.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 180,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e743",
    title: "Nike React Infinity 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/02d56024-3918-4d0b-931f-a05a2aa92999/react-infinity-3-mens-road-running-shoes-mZMPS2.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "8 Colors",
    price: 111.97,
    original_price: 160,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e744",
    title: "LeBron XX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ebfde99-9257-4c27-8ae1-d4990f192175/lebron-xx-basketball-shoes-ct1qVm.png",
    message: "Best Seller",
    subtitle: "Basketball Shoes",
    color_count: "6 Colors",
    price: 210,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e745",
    title: "Nike Air Max Terrascape 90",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/76201dcc-657c-4b3d-8a0f-860bcd3884ff/air-max-terrascape-90-mens-shoes-61rLc8.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "8 Colors",
    price: 97.97,
    original_price: 140,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e746",
    title: "Nike Air Max SC",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de5aa98a-8fb9-4382-846b-b5b528d6bcc6/air-max-sc-mens-shoes-LR42xg.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "7 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e747",
    title: "Nike Zoom Mercurial Vapor 15 Academy MG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/456ff31d-2b5b-41d6-b388-ae029f65af0f/zoom-mercurial-vapor-15-academy-mg-multi-ground-soccer-cleats-5DNpWz.png",
    message: "Sustainable Materials",
    subtitle: "Multi-Ground Soccer Cleats",
    color_count: "5 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e748",
    title: "Air Jordan 11 CMFT Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38b25ad6-22a7-41e9-82b5-f6f2b1f3a373/air-jordan-11-cmft-low-mens-shoes-HbCxnb.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 130,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e749",
    title: "Nike Phantom GT2 Elite FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7b3a510-2592-4b8b-bcf1-ef41fb80a83f/phantom-gt2-elite-fg-firm-ground-soccer-cleats-GNHLws.png",
    message: "",
    subtitle: "Firm-Ground Soccer Cleats",
    color_count: "4 Colors",
    price: 250,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74a",
    title: "Nike Air Max 95 By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eed1bb5a-ebdc-4a82-a030-dff057828b10/custom-nike-air-max-95-by-you.png",
    message: "Customize",
    subtitle: "Custom Men's Shoe",
    color_count: "4 Colors",
    price: 195,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74b",
    title: "Nike Infinity Pro 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/140e99c2-d59a-4256-8e60-2adecc6a4bef/infinity-pro-2-mens-golf-shoes-TsqzdV.png",
    message: "",
    subtitle: "Men's Golf Shoes",
    color_count: "7 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74c",
    title: "Nike Victory G Lite NN",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3f2dcff-6654-4a4e-8a34-15f8dc5bf3e6/victory-g-lite-nn-golf-shoes-nHl2CN.png",
    message: "Sustainable Materials",
    subtitle: "Golf Shoes",
    color_count: "3 Colors",
    price: 48.97,
    original_price: 70,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74d",
    title: "Jordan 1 Retro MCS Low",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/kk2q1rhluxaibr3ryi6o/jordan-1-retro-mcs-low-mens-baseball-cleats-bM8M6j.png",
    message: "",
    subtitle: "Men's Baseball Cleats",
    color_count: "4 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74e",
    title: "Nike Metcon 8 By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20145869-3cbd-4631-b6ab-31afb88a1b09/custom-nike-metcon-8-by-you.png",
    message: "Customize",
    subtitle: "Custom Men's Training Shoes",
    color_count: "6 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e74f",
    title: "Nike SB Zoom Blazer Low Pro GT",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61bdd43c-9c12-4782-816a-00d56894b7a4/sb-zoom-blazer-low-pro-gt-skate-shoes-lzbVB5.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "6 Colors",
    price: 75.97,
    original_price: 85,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e750",
    title: "Nike Air Force 1 Mid '07 LX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f190a992-411a-4990-bf8d-0e6023e937fe/air-force-1-mid-07-lx-mens-shoes-QpdMmT.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 150,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e751",
    title: "Nike Zoom Mercurial Vapor 15 Pro TF",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f59f4455-9c48-49e4-8fe7-395f5f763049/zoom-mercurial-vapor-15-pro-tf-turf-soccer-shoes-k3JLmK.png",
    message: "",
    subtitle: "Turf Soccer Shoes",
    color_count: "1 Color",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e752",
    title: "Nike Revolution 6 Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/56c2328b-b165-4077-aa70-95b25e782898/revolution-6-next-nature-mens-road-running-shoes-Kck1ZS.png",
    message: "Sustainable Materials",
    subtitle: "Men's Road Running Shoes",
    color_count: "13 Colors",
    price: 41.97,
    original_price: 70,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e753",
    title: "Nike SuperRep Cycle 2 Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e577224c-180e-483f-bbc8-1fae2d6b9a92/superrep-cycle-2-next-nature-indoor-cycling-shoes-fNRjQJ.png",
    message: "Sustainable Materials",
    subtitle: "Indoor Cycling Shoes",
    color_count: "5 Colors",
    price: 87.97,
    original_price: 120,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e754",
    title: "Nike Air Max 97 Premium",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/38938fb6-6121-44af-9049-32a81febae0c/air-max-97-premium-mens-shoes-vf75n4.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 185,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e755",
    title: "Nike Zoom Rival XC 5",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6899d455-0cda-4c8a-a3a7-9109b6fa0aaa/zoom-rival-xc-5-track-field-distance-spikes-HR9ZQT.png",
    message: "",
    subtitle: "Track & Field Distance Spikes",
    color_count: "2 Colors",
    price: 31.97,
    original_price: 65,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e756",
    title: "Nike Zoom Superfly Elite 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5f4252cf-ecf1-45e4-81f0-455bca04815d/zoom-superfly-elite-2-track-field-sprinting-spikes-dqWkz6.png",
    message: "",
    subtitle: "Track & Field Sprinting Spikes",
    color_count: "3 Colors",
    price: 104.97,
    original_price: 150,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e757",
    title: "Nike Renew Elevate 3",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eb0cc0ba-9790-4a7d-af82-d17c0973b1a1/renew-elevate-3-basketball-shoes-BQ8xtz.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "8 Colors",
    price: 80,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e758",
    title: "Nike Metcon 8 AMP",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75d37d05-a9bc-490a-b5fc-fd3baffbdb94/metcon-8-amp-mens-training-shoes-TwVHpS.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "1 Color",
    price: 105.97,
    original_price: 140,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e759",
    title: "Nike College Pegasus 39 (Penn State)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e9d0f06-05df-4d28-8eda-75349a48e2b0/pegasus-39-penn-state-mens-road-running-shoes-hRnzP7.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "16 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75a",
    title: "NikeCourt Zoom Vapor Cage 4 Rafa",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88d188cf-b8ce-4288-a49b-2bc4d174eb3c/nikecourt-zoom-vapor-cage-4-rafa-mens-hard-court-tennis-shoes-dMxMqL.png",
    message: "",
    subtitle: "Men’s Hard Court Tennis Shoes",
    color_count: "3 Colors",
    price: 150,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75b",
    title: "Nike Offcourt (Oregon)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d873531c-aef2-4a7f-be35-673b822fedac/offcourt-oregon-slide-GwtMfd.png",
    message: "",
    subtitle: "Slide",
    color_count: "19 Colors",
    price: 29.97,
    original_price: 40,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75c",
    title: "LeBron Witness 6",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46662a6b-1fd0-4a87-91be-bb11258f3b25/lebron-witness-6-basketball-shoes-HXbMw7.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "6 Colors",
    price: 76.97,
    original_price: 100,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75d",
    title: "Nike Air Force 1 '07 LX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dc27a6e1-e954-4238-9fc0-35c3f2161cb3/air-force-1-07-lx-mens-shoes-7Xt6gz.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "2 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75e",
    title: "Nike Air Force 1 Low Unlocked By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd783078-3db7-4785-82b8-1b0c9ab627a6/custom-air-force-1-low-unlocked-by-you.png",
    message: "Customize",
    subtitle: "Custom Men's Shoes",
    color_count: "9 Colors",
    price: 150,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e75f",
    title: "Jordan Series ES",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/351b1b98-af29-4829-9d47-b0ea3430fc16/jordan-series-es-mens-shoes-cpH1mx.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "4 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e760",
    title: "Nike Vapor Edge 360 VC",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/465ccfde-b707-413d-8871-55d9ea4d4c65/vapor-edge-360-vc-mens-football-cleats-sxPXbT.png",
    message: "",
    subtitle: "Men's Football Cleats",
    color_count: "2 Colors",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e761",
    title: "Nike ACG Lowcate",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22645ef9-8f00-456e-bdc3-45b52d51eeff/acg-lowcate-shoes-7Px0Lq.png",
    message: "",
    subtitle: "Shoes",
    color_count: "9 Colors",
    price: 92.97,
    original_price: 115,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e762",
    title: "Nike Benassi JDI",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5d8ec2ff-c13d-47dc-96ab-5089be945da3/benassi-jdi-mens-slides-JMOEGm.png",
    message: "",
    subtitle: "Men's Slides",
    color_count: "3 Colors",
    price: 25,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e763",
    title: "Nike Force Zoom Trout 8 Turf",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0680bdb8-30ed-47c5-8785-d5acdb05c01b/force-zoom-trout-8-turf-mens-baseball-shoes-Sgx8Dm.png",
    message: "",
    subtitle: "Men's Baseball Shoes",
    color_count: "4 Colors",
    price: 120,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e764",
    title: "Nike Precision 6",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ac39d0d5-8f92-436b-9d95-23adeb7c2c7b/precision-6-basketball-shoes-l7zDFB.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "6 Colors",
    price: 75,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e765",
    title: "Nike Tiempo Legend 9 Academy IC",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/779f8210-d4d3-4417-aeea-0d0489d1ce77/tiempo-legend-9-academy-ic-indoor-court-soccer-shoe-hc5v4g.png",
    message: "",
    subtitle: "Indoor/Court Soccer Shoe",
    color_count: "5 Colors",
    price: 75,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e766",
    title: "Nike Air Griffey Max 1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b7b3cde-746b-48f5-8c97-c6ac88d68751/air-griffey-max-1-mens-shoes-6q83v3.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "3 Colors",
    price: 136.97,
    original_price: 170,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e767",
    title: "NOCTA Hot Step Air Terra",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e28d779-9d3c-47e0-be4a-6a79a7211b69/nocta-hot-step-air-terra-mens-shoe-jJzCRV.png",
    message: "",
    subtitle: "Men's Shoe",
    color_count: "1 Color",
    price: 180,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e768",
    title: "Nike Alpha Huarache 4 Keystone",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1112baea-479d-497a-8210-95ddeb397d09/alpha-huarache-4-keystone-mens-baseball-cleats-dGXhG3.png",
    message: "Sustainable Materials",
    subtitle: "Men's Baseball Cleats",
    color_count: "5 Colors",
    price: 40,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e769",
    title: "Nike SB Ishod Wair",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99e42e76-c667-4ac7-a8c8-056deea830b9/sb-ishod-wair-skate-shoes-ztstT9.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "6 Colors",
    price: 105,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76a",
    title: "Nike Tiempo Legend 9 Pro FG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d7ec7a5e-090b-4b11-a78a-9fefa8ead235/tiempo-legend-9-pro-fg-firm-ground-soccer-cleat-cfNbfw.png",
    message: "",
    subtitle: "Firm-Ground Soccer Cleat",
    color_count: "4 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76b",
    title: "Nike Pegasus 39 Shield",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f08d2d36-816b-4bfd-ae12-bc4a228bd060/pegasus-39-shield-mens-weatherized-road-running-shoes-MNDLg2.png",
    message: "",
    subtitle: "Men's Weatherized Road Running Shoes",
    color_count: "2 Colors",
    price: 104.97,
    original_price: 140,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76c",
    title: "Nike Zoom Metcon Turbo 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c17d2478-65e2-48a0-8a82-ab366bbc7f63/zoom-metcon-turbo-2-mens-training-shoes-qzmdn3.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "6 Colors",
    price: 104.97,
    original_price: 150,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76d",
    title: "Nike Air Max Genome",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e635141-9d72-445e-bf85-8b8bcb6c4450/air-max-genome-mens-shoes-f4SHr3.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "5 Colors",
    price: 102.97,
    original_price: 170,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76e",
    title: "Nike Phantom GX Academy Dynamic Fit MG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/420fbe37-3962-4a8a-94fa-77e590c310c8/phantom-gx-academy-dynamic-fit-mg-multi-ground-soccer-cleats-0PftvL.png",
    message: "Sustainable Materials",
    subtitle: "Multi-Ground Soccer Cleats",
    color_count: "2 Colors",
    price: 95,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e76f",
    title: "Nike SB Ishod Premium",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/618a2ea8-202d-4179-806d-69b8f2d6f45a/sb-ishod-premium-skate-shoes-xjNjBC.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "7 Colors",
    price: 110,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e770",
    title: "Nike Flex Control 4",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-1400a944-8438-43e2-8bc3-73aa4beb4d3d/flex-control-4-mens-training-shoes-14Z62l.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "5 Colors",
    price: 54.97,
    original_price: 65,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e771",
    title: "Nike Phantom GX Academy MG",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff138b97-05d7-414b-b006-70050c3f2661/phantom-gx-academy-mg-multi-ground-soccer-cleats-LvwP1D.png",
    message: "Sustainable Materials",
    subtitle: "Multi-Ground Soccer Cleats",
    color_count: "2 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e772",
    title: "LeBron Witness 7",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bc3cfb34-2b74-42be-bdb0-a35f0347c250/lebron-witness-7-basketball-shoes-43zKtc.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "8 Colors",
    price: 105,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e773",
    title: "Nike Air Max Flyknit Racer Next Nature",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7310de9b-1024-4cab-b633-099b86992400/air-max-flyknit-racer-next-nature-mens-shoes-m3NSDB.png",
    message: "Sustainable Materials",
    subtitle: "Men's Shoes",
    color_count: "7 Colors",
    price: 160,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e774",
    title: "Nike Phantom GX Academy MG By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4855efa3-a817-4108-b3c2-2aa9711824b8/custom-phantom-academy-low-by-you.png",
    message: "Customize",
    subtitle: "Custom Multi-Ground Soccer Cleats",
    color_count: "6 Colors",
    price: 125,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e775",
    title: "Nike City Rep TR",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1a3f1ee-1ffa-4634-96d7-5f4d8770ceb7/city-rep-tr-mens-training-shoes-r0PpSf.png",
    message: "Sustainable Materials",
    subtitle: "Men's Training Shoes",
    color_count: "8 Colors",
    price: 59.97,
    original_price: 70,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e776",
    title: "Nike Air Max 95 Unlocked By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/361f64fb-9e8b-43bb-9e3a-669e35141bc5/custom-nike-air-max-95-unlocked-by-you.png",
    message: "Customize",
    subtitle: "Custom Men's Shoes",
    color_count: "6 Colors",
    price: 215,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e777",
    title: "Nike Vista",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f35ee3d5-3bda-4130-afb8-af17ec2b44cf/vista-mens-sandals-TrbqsG.png",
    message: "",
    subtitle: "Men's Sandals",
    color_count: "5 Colors",
    price: 60,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e778",
    title: "Nike Air Penny 2 x Stüssy",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/553a70bc-0316-4bf0-b91e-c468b31ca2d0/air-penny-2-x-st%C3%BCssy-mens-shoes.png",
    message: "Available in SNKRS",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 200,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e779",
    title: "Nike Zoom Rival",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/87d0f158-799a-41b8-8eac-ce030f309b26/zoom-rival-track-field-sprinting-spikes-Bc9gTn.png",
    message: "",
    subtitle: "Track & Field Sprinting Spikes",
    color_count: "5 Colors",
    price: 70,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77a",
    title: "Nike Pegasus 39 (NFL Jacksonville Jaguars)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f924138-5e62-48cf-9ef9-a6546c30ea20/pegasus-39-jacksonville-jaguars-mens-road-running-shoes-KC6WCj.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "15 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77b",
    title: "Nike Zoom Mercurial Vapor 15 Academy TF",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48d2a1f1-9a59-4de9-b576-0f1f6c4a85c3/zoom-mercurial-vapor-15-academy-tf-turf-soccer-shoes-rdbD4k.png",
    message: "Sustainable Materials",
    subtitle: "Turf Soccer Shoes",
    color_count: "3 Colors",
    price: 85,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77c",
    title: "Nike SFB B1",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c2b51fe-c548-4ea4-8cb5-8514a7e116cb/sfb-b1-tactical-boot-0tPb8S.png",
    message: "",
    subtitle: "Tactical Boot",
    color_count: "1 Color",
    price: 165,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77d",
    title: "Nike React Infinity 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f66c6551-4f46-41df-86d8-a3c0dcd7c449/react-infinity-2-mens-road-running-shoes-DttDF2.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "1 Color",
    price: 129.97,
    original_price: 160,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77e",
    title: "Nike Air Force 1 '07 LV8",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7bba277-0bff-4550-a67b-a0061c0d05e7/air-force-1-07-lv8-mens-shoes-863lmJ.png",
    message: "",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 96.97,
    original_price: 120,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e77f",
    title: "KD Trey 5 IX",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b665562-1df6-4ebc-9bb2-b311ed1b1e52/kd-trey-5-ix-basketball-shoes-1HJf9Q.png",
    message: "",
    subtitle: "Basketball Shoes",
    color_count: "2 Colors",
    price: 89.97,
    original_price: 90,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e780",
    title: "Nike Offcourt (NFL Indianapolis Colts)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f3aa9dc-7a02-4956-801e-861755a42d0b/offcourt-indianapolis-colts-slide-1xbMzS.png",
    message: "",
    subtitle: "Slide",
    color_count: "32 Colors",
    price: 40,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e781",
    title: "Nike Offcourt (Kentucky)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/097dac82-633c-4730-a5fa-69cd031f1cc0/offcourt-kentucky-slide-DrFtDR.png",
    message: "",
    subtitle: "Slide",
    color_count: "1 Color",
    price: 40,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e782",
    title: "Nike Air Penny 2",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4fe536ca-4075-40b4-8b07-7efd0f6b6183/air-penny-2-mens-shoes-mMv3Hx.png",
    message: "Just In",
    subtitle: "Men's Shoes",
    color_count: "1 Color",
    price: 200,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e783",
    title: "Nike Gripknit Phantom GX Elite AG By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8996bdef-258c-48f0-b5d8-4f33359f7a00/custom-phantom-elite-low-by-you.png",
    message: "Customize",
    subtitle: "Custom Soccer Cleats",
    color_count: "4 Colors",
    price: 280,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e784",
    title: "Nike Victori One",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35522a68-54d2-489c-92a1-4c413aacc489/victori-one-mens-printed-slides-bDnqZM.png",
    message: "",
    subtitle: "Men's Printed Slides",
    color_count: "6 Colors",
    price: 40,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e785",
    title: "Nike Pegasus 39 (NFL Tampa Bay Buccaneers)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/811487e3-4675-4a6f-bd96-9f9896ce2145/pegasus-39-tampa-bay-buccaneers-mens-road-running-shoes-FMcHZl.png",
    message: "",
    subtitle: "Men's Road Running Shoes",
    color_count: "12 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e786",
    title: "Nike SuperRep Go 3 Next Nature Flyknit",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/317143d3-3d9b-4238-8efd-883e4b1c7a37/superrep-go-3-next-nature-flyknit-mens-training-shoes-9BPXdD.png",
    message: "Member Access",
    subtitle: "Men's Training Shoes",
    color_count: "13 Colors",
    price: 100,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e787",
    title: "Nike Air Max 97 By You",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4326926f-8c12-4bed-9f09-726350f553b3/custom-nike-air-max-97-by-you.png",
    message: "Customize",
    subtitle: "Custom Men's Shoe",
    color_count: "6 Colors",
    price: 195,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e788",
    title: "Nike SB Zoom Blazer Mid ISO",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beaefd87-cb3c-4af8-bb05-4fe56fd25389/sb-zoom-blazer-mid-iso-skate-shoes-W52tx0.png",
    message: "",
    subtitle: "Skate Shoes",
    color_count: "1 Color",
    price: 90,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e789",
    title: "Nike Offcourt (MLB Washington Nationals)",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/db0f87ac-f724-4118-aad6-effbd432c5b0/offcourt-washington-nationals-slide-B2ZZsZ.png",
    message: "",
    subtitle: "Slide",
    color_count: "28 Colors",
    price: 40,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e78a",
    title: "Nike Metcon 8 AMP",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b203341b-7365-4ded-8ad3-12164e00a44a/metcon-8-amp-mens-training-shoes-3jRcHK.png",
    message: "",
    subtitle: "Men's Training Shoes",
    color_count: "2 Colors",
    price: 140,
    original_price: null,
    tag: "men-shoes",
  },
  {
    _id: "63fdf9234d63f62a5828e78b",
    title: "Air Jordan Dub Zero",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b5256bd-7b3b-4ec7-a92b-41c7e618afa5/air-jordan-dub-zero-mens-shoes-vYVG0Z.png",
    message: "Best Seller",
    subtitle: "Men's Shoes",
    color_count: "5 Colors",
    price: 136.97,
    original_price: 160,
    tag: "men-shoes",
  },
];

const invalidImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const placeholder = "https://placehold.jp/592x592.png";

const fetchData = async () => {
  var response = await fetch(
    "https://dead-erin-coral-yoke.cyclic.app/men/shoes"
  );
  response = await response.json();
  return response;
};

function MenShoes() {
  const [hide, setHide] = useState(false);
  const [products, setProducts] = useState(dummy);
  const [varData, setVarData] = useState(dummy);
  const [activeFilter, setActiveFilter] = useState("all");

  const getData = async () => {
    var data = await fetchData();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    // getData();
  }, []);

  const handleFilter = () => {
    const filters = document.querySelector(".filters");
    const products = document.querySelector(".products");
    const dummyDiv = document.querySelector(".products-dummy");
    const home = document.querySelector(".home");
    const data_id = home.getAttribute("data-filters");

    if (data_id == "false") {
      filters.classList.add("filters-hide");
      products.classList.add("products-full");
      dummyDiv.classList.add("product-dummy-active");
      home.setAttribute("data-filters", "true");
      setHide(!hide);
    }
    if (data_id == "true") {
      filters.classList.remove("filters-hide");
      products.classList.remove("products-full");
      dummyDiv.classList.remove("product-dummy-active");
      home.setAttribute("data-filters", "false");
      setHide(!hide);
    }
  };

  const handleFiltering = (query) => {
    setActiveFilter(query);
    let data = [...products];
    const radio = document.querySelector(".all");
    radio.checked = true;

    if (query === "all") {
      setVarData(products);
      return;
    }

    if (query === "100") {
      data = data.filter((item) => {
        return item.price < 100;
      });
      setVarData(data);
      return;
    }

    data = data.filter((item) => {
      return (
        item.title.toLowerCase().split(" ").includes(query) ||
        item.subtitle.toLowerCase().split(" ").includes(query)
      );
    });
    setVarData(data);
  };

  const handleRadio = (query) => {
    let data = [...products];
    const button = document.querySelector(`.${query}`);
    button.checked = true;

    if (activeFilter !== "all") {
      data = data.filter((item) => {
        return (
          item.title.toLowerCase().split(" ").includes(activeFilter) ||
          item.subtitle.toLowerCase().split(" ").includes(activeFilter)
        );
      });
    }

    console.log(data);

    if (query === "all") {
      if (activeFilter === "all") {
        setVarData(products);
        return;
      }
      data = products.filter((item) => {
        return (
          item.title.toLowerCase().split(" ").includes(activeFilter) ||
          item.subtitle.toLowerCase().split(" ").includes(activeFilter)
        );
      });
      setVarData(data);
      return;
    }

    if (query === "twofive") {
      data = data.filter((item) => {
        return (item.price >= 25) & (item.price <= 50);
      });
      setVarData(data);
      return;
    }

    if (query === "fivezero") {
      data = data.filter((item) => {
        return (item.price >= 50) & (item.price <= 100);
      });
      setVarData(data);
      return;
    }

    if (query === "hundered") {
      data = data.filter((item) => {
        return (item.price >= 100) & (item.price <= 150);
      });
      setVarData(data);
      return;
    }

    if (query === "onefifty") {
      data = data.filter((item) => {
        return item.price >= 150;
      });
      setVarData(data);
      return;
    }
  };

  const handleSort = (query) => {
    let data = [...varData];

    if (query === "hightolow") {
      data = data.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log(data);
    }
    if (query === "lowtohigh") {
      data = data.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    setVarData(data);
  };

  return (
    <Box data-filters="false" className="home" mt={"50px"}>
      <Flex
        py={"10px"}
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        mb={"20px"}>
        <Text className="product-title-lg" fontWeight={"bold"} fontSize={"3xl"}>
          Men's Shoes & Sneakers ({varData.length})
        </Text>
        <Text className="product-title-sm" fontWeight={"bold"} fontSize={"3xl"}>
          Men's Shoes & Sneakers
        </Text>

        <Flex gap={4}>
          <Box
            gap={2}
            cursor={"pointer"}
            onClick={handleFilter}
            className="hide-filter"
            alignItems={"center"}>
            {hide ? <Text>Show Filters</Text> : <Text>Hide Filters</Text>}
            <svg
              aria-hidden="true"
              class="icon-filter-ds"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M21 8.25H10m-5.25 0H3"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M3 15.75h10.75m5 0H21"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"></path>
            </svg>
          </Box>
          <Box className={"sort-lg"}>
            <Menu>
              <MenuButton
                border="none"
                py={2}
                transition="all 0.2s"
                borderRadius="md">
                <Flex alignItems={"center"} gap={2}>
                  Sort by <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => handleSort("hightolow")}
                  _hover={{ bg: "transparent" }}>
                  Price: High-Low
                </MenuItem>
                <MenuItem
                  onClick={() => handleSort("lowtohigh")}
                  _hover={{ bg: "transparent" }}>
                  Price: Low-High
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Box mb={4} className="filters-sm">
        <Flex
          whiteSpace={"nowrap"}
          w={"100%"}
          overflow={"scroll"}
          className="filter-tag"
          flexDirection={"row"}
          gap={6}
          fontSize={"lg"}
          fontWeight={"bold"}
          cursor={"pointer"}>
          <Text
            className={activeFilter === "all" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("all")}>
            All
          </Text>
          <Text
            className={activeFilter === "jordan" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("jordan")}>
            Jordan
          </Text>
          <Text
            className={activeFilter === "running" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("running")}>
            Running
          </Text>
          <Text
            className={activeFilter === "training" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("training")}>
            Training
          </Text>
          <Text
            className={activeFilter === "soccer" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("soccer")}>
            Soccer
          </Text>
          <Text
            className={activeFilter === "skate" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("skate")}>
            Skateboarding
          </Text>
          <Text
            className={activeFilter === "100" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("100")}>
            Shoes $100 & Under
          </Text>
        </Flex>
      </Box>

      <Box className="sort-sm" >
        <Text fontSize={"lg"} color={"gray"}>{varData.length} Results</Text>
        <Menu>
          <MenuButton
            border="none"
            py={2}
            transition="all 0.2s"
            borderRadius="md">
            <Flex alignItems={"center"} gap={2}>
              Sort by <FiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => handleSort("hightolow")}
              _hover={{ bg: "transparent" }}>
              Price: High-Low
            </MenuItem>
            <MenuItem
              onClick={() => handleSort("lowtohigh")}
              _hover={{ bg: "transparent" }}>
              Price: Low-High
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Flex
        position={"relative"}
        width={"100%"}
        className="product-container"
        gap={"30px"}>
        <Box flexDirection={"column"} className="filters">
          <Flex
            className="filter-tag"
            flexDirection={"column"}
            gap={1}
            fontSize={"lg"}
            fontWeight={"bold"}
            cursor={"pointer"}>
            <Text
              className={activeFilter === "all" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("all")}>
              All
            </Text>
            <Text
              className={activeFilter === "jordan" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("jordan")}>
              Jordan
            </Text>
            <Text
              className={activeFilter === "running" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("running")}>
              Running
            </Text>
            <Text
              className={activeFilter === "training" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("training")}>
              Training
            </Text>
            <Text
              className={activeFilter === "soccer" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("soccer")}>
              Soccer
            </Text>
            <Text
              className={activeFilter === "skate" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("skate")}>
              Skateboarding
            </Text>
            <Text
              className={activeFilter === "100" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("100")}>
              Shoes $100 & Under
            </Text>
          </Flex>
          <Box py={4}>
            <Divider
              w={"70%"}
              opacity={"20%"}
              border={".5px solid gray"}
              orientation="horizontal"
            />
          </Box>
          <Flex flexDirection={"column"} gap={4}>
            <Text fontWeight={"bold"}>Shop by Price</Text>
            <Flex className="radio-stack" flexDir={"column"} gap={1}>
              <Flex onClick={() => handleRadio("all")} gap={2}>
                <input
                  className="all"
                  defaultChecked="true"
                  name="radio"
                  type="radio"
                />
                <Text>All</Text>
              </Flex>
              <Flex onClick={() => handleRadio("twofive")} gap={2}>
                <input className="twofive" name="radio" type="radio" />
                <Text>$25 - $50</Text>
              </Flex>
              <Flex onClick={() => handleRadio("fivezero")} gap={2}>
                <input className="fivezero" name="radio" type="radio" />
                <Text>$50 - $100</Text>
              </Flex>
              <Flex onClick={() => handleRadio("hundered")} gap={2}>
                <input className="hundered" name="radio" type="radio" />
                <Text>$100 - $150</Text>
              </Flex>
              <Flex onClick={() => handleRadio("onefifty")} gap={2}>
                <input className="onefifty" name="radio" type="radio" />
                <Text>Over $150</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box className="products">
          <Box className="products-grid" columnGap={4} rowGap={6}>
            {varData.map((item) => {
              return (
                <Box>
                  <Image
                    mb={2}
                    src={item.image === invalidImage ? placeholder : item.image}
                  />
                  <Text fontWeight={"500"} color={"#9d3400"} h={7}>
                    {item.message}
                  </Text>
                  <Flex mb={2} direction={"column"}>
                    <Text>{item.title}</Text>
                    <Text color={"gray"}>{item.subtitle}</Text>
                  </Flex>
                  <Text mb={4} color={"gray"}>
                    {item.color_count}
                  </Text>
                  <Text>${item.price}</Text>
                  <button className="black-button add-to-cart">
                    ADD TO CART
                  </button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>

      <Flex width={"100%"} className="product-container dummy-div" gap={"30px"}>
        <Box w={"100%"} className="products-dummy">
          <Box className="products-grid" columnGap={4} rowGap={6}>
            {varData.map((item) => {
              return (
                <Box>
                  <Image
                    mb={2}
                    src={item.image === invalidImage ? placeholder : item.image}
                  />
                  <Text fontWeight={"500"} color={"#9d3400"} h={7}>
                    {item.message}
                  </Text>
                  <Flex mb={2} direction={"column"}>
                    <Text>{item.title}</Text>
                    <Text color={"gray"}>{item.subtitle}</Text>
                  </Flex>
                  <Text mb={4} color={"gray"}>
                    {item.color_count}
                  </Text>
                  <Text>${item.price}</Text>
                  <button className="black-button add-to-cart">
                    ADD TO CART
                  </button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default MenShoes;
