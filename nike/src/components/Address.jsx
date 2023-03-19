import React, { useState } from "react";
import {
  Button,
  GridItem,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  FormErrorMessage,
  SlideFade,
} from "@chakra-ui/react";

function Address({ setStep }) {
  const [fname, setfname] = useState("");
  const [add, setAdd] = useState("");
  const [app, setApp] = useState("");
  const [num, setNum] = useState("");
  const [loading, setLoading] = useState(false);

  const nameError = fname === "";
  const addError = add === "";
  const appError = app === "";

  const handleForm = () => {
    if (fname === "" || add === "" || app === "") {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, "2000");
  };

  return (
    <Box mb={"50px"}>
      <Stack spacing={4}>
        <HStack>
          <Box>
            <FormControl id="firstName" isInvalid={nameError} isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                onChange={(e) => setfname(e.target.value)}
                aria-required={true}
                type="text"
              />
              {!nameError ? null : (
                <FormErrorMessage>This field is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName" isInvalid={nameError} isRequired>
              <FormLabel>Last name</FormLabel>
              <Input aria-required={true} type="text" />
              {!nameError ? null : (
                <FormErrorMessage>This field is required.</FormErrorMessage>
              )}
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isInvalid={addError} isRequired>
          <FormLabel>Street Address</FormLabel>
          <Input onChange={(e) => setAdd(e.target.value)} type="text" />
          {!addError ? null : (
            <FormErrorMessage>This field is requied.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="email" isInvalid={appError} isRequired>
          <FormLabel>Apartment, suite, etc</FormLabel>
          <Input onChange={(e) => setApp(e.target.value)} type="text" />
          {!appError ? null : (
            <FormErrorMessage>This field is requied.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl id="password">
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <Input
              w={"100%"}
              onChange={(e) => setNum(e.target.value)}
              type={"number"}
              onInput={(e) => (e.target.value = e.target.value.slice(0, 10))}
            />
            <InputRightElement h={"full"}></InputRightElement>
          </InputGroup>
        </FormControl>
        <Stack spacing={10} pt={2}>
          <Button
            isLoading={loading}
            onClick={handleForm}
            w={"100%"}
            color={"white"}
            _hover={{ bgColor: "gray" }}
            backgroundColor={"black"}
            style={{ marginTop: "10px", borderRadius: "5px" }}>
            Save & Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Address;
