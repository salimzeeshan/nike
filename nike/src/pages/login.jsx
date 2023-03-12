import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import Head from "next/head";

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, currentUser } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("Please fill both of the fields");
      return;
    }

    if (!emailRef.current.value.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      location.href = "/";
    } catch (error) {
      setError("Incorrect email or password");
      console.log(error);
    }

    setLoading(false);
  }

  return (
    <Center px={"20px"} bgColor={"white"} h={"100vh"}>
      <Head>
        <title>Sign In</title>
        <link
          rel="shortcut icon"
          href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
        />
      </Head>
      <Flex
        maxW={"500px"}
        w={"100%"}
        borderRadius={"20px"}
        pt={"40px"}
        pb={"80px"}
        px={"40px"}
        border={"1px solid gray"}
        borderColor={"gray.200"}
        flexDir={"column"}>
        <Center>
          <Link href={"/"}>
            <Image
              w={"150px"}
              src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
            />
          </Link>
        </Center>
        <FormControl onSubmit={handleSubmit}>
          {error === "" ? null : (
            <Alert borderRadius={"5px"} mb={4} status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <Flex mb={4} gap={2} flexDir={"column"}>
            <Text>Email</Text>
            <Input
              ref={emailRef}
              _focus={{
                WebkitBoxShadow: "none",
                boxShadow: "none",
                outlineColor: "black",
                border: "inherit",
              }}
              type={"email"}
            />
          </Flex>
          <Flex mb={4} gap={2} flexDir={"column"}>
            <Text>Password</Text>
            <Input
              ref={passwordRef}
              _focus={{
                WebkitBoxShadow: "none",
                boxShadow: "none",
                outlineColor: "black",
                border: "inherit",
              }}
              type={"password"}
            />
          </Flex>
          <Button
            isLoading={loading}
            onClick={handleSubmit}
            style={{ width: "100%", borderRadius: "5px", marginTop: "1.5rem" }}
            color={"white"}
            _hover={{ bgColor: "gray.600" }}
            backgroundColor={"black"}
            type="submit">
            Sign In
          </Button>
        </FormControl>
        <Center mt={4}>
          <Text>
            Don't have an account?{" "}
            <Link href={"/signup"}>
              <span style={{ fontWeight: "bold" }}>Sign Up</span>
            </Link>
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default Signin;
