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

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, currentUser } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(passwordRef.current.value.length);

    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      setError("Please fill both of the fields");
      return;
    }

    if (!emailRef.current.value.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (passwordRef.current.value.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError("Error while creating your account");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <Center
      px={"20px"}
      bgColor={"white"}
      h={"100vh"}
      w={"100%"}
      zIndex={"999999999"}
      overflow={"hidden"}
      position={"absolute"}
      top={"0"}
      right={"0"}>
      <Head>
        <title>Sign Up</title>
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
          <Image
            w={"150px"}
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
          />
        </Center>
        <Text>{currentUser && currentUser.email}</Text>
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
          <Flex gap={2} flexDir={"column"}>
            <Text>Confirm Password</Text>
            <Input
              ref={confirmPasswordRef}
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
            Sign Up
          </Button>
        </FormControl>
        <Center mt={4}>
          <Text>
            Already have an account?{" "}
            <Link href={"/signin"}>
              <span style={{ fontWeight: "bold" }}>Sign In</span>
            </Link>
          </Text>
        </Center>
      </Flex>
    </Center>
  );
}

export default Signup;
