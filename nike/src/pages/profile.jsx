import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Center,
  Flex,
  Text,
  Image,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "@/context/authContext";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Head from "next/head";

const defaultPhoto =
  "https://i.pinimg.com/1200x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg";

function Profile() {
  const { currentUser, logout, upload } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(defaultPhoto);
  const [loading, setLoading] = useState(false);
  const [opacity, setOpacity] = useState("0");
  const [blur, setBlur] = useState("0");
  const toast = useToast();

  const handleLogout = async () => {
    await logout();
    location.href = "/";
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    await upload(photo, currentUser, setLoading);
    toast({
      title: "Profile picture updated!",
      description: "Please reload this page to see the changes",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      console.log(currentUser);
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleMouseOver = () => {
    setOpacity("100");
    setBlur("10");
  };

  const handleMouseOut = () => {
    setOpacity("0");
    setBlur("0");
  };

  return (
    <Center px={"20px"}>
      <Head>
        <title>Account Management</title>
        <link
          rel="shortcut icon"
          href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
        />
      </Head>
      <Flex
        border={"1px"}
        borderColor={"gray.300"}
        borderRadius={"30px"}
        px={8}
        py={6}
        maxW={"430px"}
        w={"100%"}
        gap={2}
        alignItems={"left"}
        flexDir={"column"}>
        <Heading mb={6}>Profile</Heading>
        <Flex
          mb={4}
          justifyContent={"space-between"}
          gap={4}
          alignItems={"center"}>
          <Box
            w={"80px"}
            h={"80px"}
            position={"relative"}
            objectFit={"contain"}
            borderRadius={"50%"}
            overflow={"hidden"}>
            <Image
              transition={"300ms"}
              filter={`blur(${blur}px)`}
              bgColor={"gray.300"}
              w={"80px"}
              src={photoURL}
            />
            <Box
              cursor={"pointer"}
              p={"30px"}
              className="cloud-upload-icon"
              opacity={opacity}
              transition={"300ms"}>
              <AiOutlineCloudUpload color="white" size={"40px"} />
            </Box>
            <input
              title=""
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onChange={(e) => handleChange(e)}
              type="file"
              name="photo"
              id="upload-photo"
            />
          </Box>
          <Flex>
            <Button
              isDisabled={photo === null}
              isLoading={loading}
              onClick={handleUpload}
              borderRadius={"5px"}
              color={"white"}
              _hover={{ bgColor: "gray.600" }}
              backgroundColor={"black"}>
              Upload
            </Button>
          </Flex>
        </Flex>
        <Text fontSize={"xl"}>
          <strong>Email:</strong> {currentUser && currentUser.email}
        </Text>
        <Button
          mt={3}
          onClick={handleLogout}
          style={{ width: "100%", borderRadius: "5px" }}
          color={"white"}
          _hover={{ bgColor: "gray.600" }}
          backgroundColor={"black"}>
          Log out
        </Button>
      </Flex>
    </Center>
  );
}

export default Profile;
