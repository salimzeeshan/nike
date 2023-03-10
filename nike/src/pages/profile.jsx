import React, { useContext, useEffect, useState } from "react";
import { Button, Center, Flex, Text, Image, Input } from "@chakra-ui/react";
import { AuthContext } from "@/context/authContext";

const defaultPhoto = "https://freesvg.org/img/abstract-user-flat-4.png";

function Profile() {
  const { currentUser, logout, upload } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(defaultPhoto);
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    await logout();
    location.href = "/";
  };

  currentUser && console.log(currentUser);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    upload(photo, currentUser, setLoading);
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      console.log(currentUser);
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <Center px={"20px"}>
      <Flex
        maxW={"430px"}
        w={"100%"}
        gap={2}
        alignItems={"left"}
        flexDir={"column"}>
        <Flex gap={4} alignItems={"center"}>
          <Image w={"80px"} src={photoURL} />
          <Flex>
            <Input
              onChange={(e) => handleChange(e)}
              border={"none"}
              type="file"
            />{" "}
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
