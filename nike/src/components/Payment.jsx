import { GridItem, SlideFade } from "@chakra-ui/react";
import React from "react";
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
  return (
    <GridItem>
      <HStack>
        <Box w={"100%"}>
          <FormControl id="name" isRequired>
            <FormLabel>CARDHOLDER'S NAME</FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <Box>
          <FormControl isRequired id="CVV">
            <FormLabel>CVV</FormLabel>
            <Input
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
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                type="number"
              />
              <Text mx={2}>/</Text>
              <Input
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
                type="number"
              />
            </Flex>
          </FormControl>
        </Box>
      </HStack>
      <Stack mt={6} spacing={10} pt={2}>
        <Button
          isLoading={paymentLoading}
          onClick={confirmOrder}
          w={"100%"}
          color={"white"}
          _hover={{ bgColor: "gray" }}
          backgroundColor={"black"}
          style={{ marginTop: "10px", borderRadius: "5px" }}>
          Confirm Order
        </Button>
      </Stack>
    </GridItem>
  );
}

export default Payment;
