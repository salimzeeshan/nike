import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineLogin } from "react-icons/ai";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/authContext";

const searchIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    role="img"
    width="24px"
    height="24px"
    fill="none">
    <path
      stroke="currentColor"
      stroke-width="1.5"
      d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
  </svg>
);

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");
  const [scroll, setScroll] = useState(0);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const input = document.querySelector(".input-small");
    const search = document.querySelector(".search-small");
    const icon = document.querySelector(".search-icon");
    const cancel = document.querySelector(".cancel");

    cancel.addEventListener("click", () => {
      icon.classList.remove("icon-active");
      input.classList.remove("input-active");
      search.classList.remove("search-active");
      cancel.classList.remove("cancel-active");
    });

    icon &&
      icon.addEventListener("click", () => {
        icon.classList.add("icon-active");
        input.classList.add("input-active");
        search.classList.add("search-active");
        cancel.classList.add("cancel-active");
      });

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <Flex
      position={"sticky"}
      backgroundColor={"white"}
      width={"100%"}
      mb={"20px"}
      className="navbar"
      justifyContent={"space-between"}
      alignItems={"center"}>
      <Link href={"/"}>
        <Box>
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="80px"
            height="80px"
            fill="none">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clip-rule="evenodd"></path>
          </svg>
        </Box>
      </Link>
      <Box className="nav-links">
        <Flex as={"b"} gap={5}>
          <Link href={"/men"}>
            <Text cursor={"pointer"}>Men</Text>
          </Link>
          <Link href={"/women"}>
            <Text cursor={"pointer"}>Women</Text>
          </Link>
          <Link href={"/accessories"}>
            <Text cursor={"pointer"}>Accessories</Text>
          </Link>
          <Link href={"/sale"}>
            <Text cursor={"pointer"}>Sale</Text>
          </Link>
        </Flex>
      </Box>
      <Flex alignItems={"center"} gap={5}>
        <Box className="search">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={searchIcon} />
            <Input
              transition={"300ms"}
              _focus={{
                WebkitBoxShadow: "none",
                boxShadow: "none",
                outlineColor: "black",
              }}
              border={"0px solid transparent"}
              borderRadius={"20px"}
              backgroundColor={"#f5f5f5"}
              overflow={"hidden"}
              type="text"
              placeholder="Search"
            />
          </InputGroup>
        </Box>
        <Box className="search-small">
          <Flex height={"max-content"} alignItems={"center"} w={"100%"}>
            <input
              className="input-small"
              backgroundColor={"red"}
              width={"0"}
              border="none"
              borderRadius={"20px"}
              overflow={"hidden"}
              type="text"
              placeholder="Search"
            />
            <Text className="cancel" as={"b"} ml={5}>
              Cancel
            </Text>
          </Flex>
          <Box class={"search-icon"}>
            <svg
              aria-hidden="true"
              class="pre-nav-design-icon"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
            </svg>
          </Box>
        </Box>
        <Box className="wishlist">
          <svg
            aria-hidden="true"
            class="pre-nav-design-icon"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none">
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
          </svg>
        </Box>
        <Box>
          <svg
            aria-hidden="true"
            class="pre-nav-design-icon"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none">
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
          </svg>
        </Box>
        <Box>
          {currentUser ? (
            currentUser.photoURL ? (
              <Link href={"/profile"}>
                <Box objectFit={"contain"} w={"30px"} h={"30px"} borderRadius={"50%"} overflow={"hidden"}>
                  <Image src={currentUser.photoURL} />
                </Box>
              </Link>
            ) : (
              <Link href={"/profile"}>
                <VscAccount size={"22px"} />
              </Link>
            )
          ) : (
            <Link href={"/login"}>
              <AiOutlineLogin size={"22px"} />
            </Link>
          )}
        </Box>
        <Box onClick={onOpen} className="hamburger">
          <svg
            aria-hidden="true"
            class="pre-nav-design-icon"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none">
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M21 5.25H3M21 12H3m18 6.75H3"></path>
          </svg>
        </Box>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent px={"10px"}>
            <DrawerCloseButton autoFocus={"false"} size={"lg"} mr={"15px"} />
            <DrawerHeader></DrawerHeader>
            <DrawerBody mt={6}>
              <Flex
                gap={"8px"}
                flexDirection={"column"}
                mb={"100px"}
                fontSize={"2xl"}>
                <Link href={"/men"}>
                  <Flex
                    onClick={onClose}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Text as={"b"}>Men</Text>
                    <IoIosArrowForward size={"25px"} />
                  </Flex>
                </Link>
                <Link href={"/women"}>
                  <Flex
                    onClick={onClose}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Text as={"b"}>Women</Text>
                    <IoIosArrowForward size={"25px"} />
                  </Flex>
                </Link>
                <Link href={"/accessories"}>
                  <Flex
                    onClick={onClose}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Text as={"b"}>Accessories</Text>
                    <IoIosArrowForward size={"25px"} />
                  </Flex>
                </Link>
                <Link href={"/sale"}>
                  <Flex
                    onClick={onClose}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Text as={"b"}>Sale</Text>
                    <IoIosArrowForward size={"25px"} />
                  </Flex>
                </Link>
              </Flex>
              <Text color={"#757575"} as={"b"} fontSize={"xl"}>
                Become a Nike Member for the best products, inspiration and
                stories in sport.{" "}
                <a style={{ color: "black" }} href="">
                  <strong>Learn more</strong>
                </a>
              </Text>
              <ButtonGroup mt={"30px"}>
                <button
                  className="black-button"
                  bgColor={"black"}
                  color={"white"}
                  borderRadius={"20px"}
                  px={"25px"}>
                  Join Us
                </button>
                <button className="outline-button">Sign In</button>
              </ButtonGroup>
              <Stack></Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Navbar;
