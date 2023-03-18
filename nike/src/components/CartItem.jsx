import React, { useState } from "react";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

function CartItem(item) {
  const [incLoading, setIncLoading] = useState(false);
  const [decLoading, setDecLoading] = useState(false);
  const [qty, setQty] = useState(item.quantity);

  const incQty = async (value) => {
    setIncLoading(true);
    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: item.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == item._id) {
        axios
          .patch("https://dead-erin-coral-yoke.cyclic.app/inc-qty", {
            email: item.email,
            _id: cart[i]._id,
          })
          .then(function () {
            setIncLoading(false);
            setQty(qty + value);
            return;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const decQty = async (value) => {
    setDecLoading(true);
    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: item.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == item._id) {
        axios
          .patch("https://dead-erin-coral-yoke.cyclic.app/dec-qty", {
            email: item.email,
            _id: cart[i]._id,
          })
          .then(function () {
            setDecLoading(false);
            setQty(qty + value);
            return;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };
  return (
    <Box>
      <Flex gap={6}>
        <Image w={"30%"} src={item.image} />
        <Flex gap={1} w={"70%"} flexDir={"column"}>
          <Flex justifyContent={"space-between"}>
            <Text>{item.title}</Text>
            <Text>${item.price * qty}.00</Text>
          </Flex>
          <Text color={"#757575"}>{item.subtitle}</Text>
          <Text color={"#757575"}>{item.color_count}</Text>
          <Flex mt={4} alignItems={"center"} gap={1}>
            <Text color={"#757575"}>Quantity: </Text>
            <Button
              fontSize={"md"}
              isDisabled={qty <= 1}
              onClick={() => decQty(-1)}
              isLoading={decLoading}
              color={"black"}
              _hover={{ bgColor: "transparent", color: "gray.500" }}
              backgroundColor={"transparent"}
              size={"xs"}>
              -
            </Button>
            <Text fontSize={"md"}>{qty}</Text>
            <Button
              fontSize={"md"}
              onClick={() => incQty(1)}
              isLoading={incLoading}
              style={{
                borderRadius: "50%",
              }}
              color={"black"}
              _hover={{ bgColor: "transparent", color: "gray.500" }}
              backgroundColor={"transparent"}
              size={"xs"}>
              +
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Divider my={6} />
    </Box>
  );
}

export default CartItem;
