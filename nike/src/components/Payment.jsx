import { Alert, AlertIcon, GridItem, SlideFade } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  Flex,
  Text,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
} from "@chakra-ui/react";

function Payment({ confirmOrder, paymentLoading }) {
  const nameRef = useRef();
  const cvvRef = useRef();
  const accRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const [error, setError] = useState("");

  const handleOrder = () => {
    const name = nameRef.current.value;
    const cvv = cvvRef.current.value;
    const acc = accRef.current.value;
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    var currentYear = "";
    var current = new Date();
    current = current.getFullYear();
    currentYear += current;
    currentYear = currentYear.slice(2, 3);

    if (
      name === "" ||
      cvv === "" ||
      acc === "" ||
      month === "" ||
      year === ""
    ) {
      setError("Please fill all of the fields");
      return;
    }

    if (cvv.length != 3) {
      setError("Please enter a valid CVV");
      return;
    }

    if (acc.length != 16) {
      setError("Please enter a valid Account Number");
      return;
    }

    if (month.length != 2 || +month > 12) {
      setError("Please enter a valid month");
      return;
    }

    if (year.length != 2 || +year < +currentYear) {
      console.log(+year, currentYear);
      setError("Please enter a valid year");
      return;
    }

    confirmOrder();
  };

  return (
    <Box mb={"50px"}>
      {error === "" ? null : (
        <Alert w={"100%"} borderRadius={"5px"} mb={4} status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <HStack>
        <Box w={"100%"}>
          <FormControl id="name" isRequired>
            <FormLabel>CARDHOLDER'S NAME</FormLabel>
            <Input ref={nameRef} type="text" />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired id="CVV">
            <FormLabel>CVV</FormLabel>
            <Input
              ref={cvvRef}
              type="password"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 3))}
            />
          </FormControl>
        </Box>
      </HStack>
      <HStack mt={6}>
        <Box w={"100%"}>
          <FormControl id="email" isRequired>
            <FormLabel>CARD NUMBER</FormLabel>
            <Input
              ref={accRef}
              onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
              type="number"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl id="email" isRequired>
            <FormLabel>EXPIRATION DATE</FormLabel>
            <Flex alignItems={"center"}>
              <Input
                ref={monthRef}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                type="number"
              />
              <Text mx={2}>/</Text>
              <Input
                ref={yearRef}
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                type="number"
              />
            </Flex>
          </FormControl>
        </Box>
      </HStack>
      <Stack mt={1} spacing={10} pt={2}>
        <Button
          loadingText="PROCESSING"
          isLoading={paymentLoading}
          onClick={handleOrder}
          w={"100%"}
          color={"white"}
          _hover={{ bgColor: "gray" }}
          backgroundColor={"black"}
          style={{ marginTop: "10px", borderRadius: "5px" }}>
          Confirm Order
        </Button>
      </Stack>
    </Box>
  );
}

export default Payment;
