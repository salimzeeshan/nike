import React, { useState } from "react";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { BsTrash3 } from "react-icons/bs";

function CartItem(item) {
  const [incLoading, setIncLoading] = useState(false);
  const [decLoading, setDecLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);

  const [qty, setQty] = useState(item.quantity);

  const incQty = async (value) => {
    setIncLoading(true);
    const cart = await axios
      .post(`${process.env.PRODUCTS_API}users/`, {
        email: item.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == item._id) {
        axios
          .patch(`${process.env.PRODUCTS_API}inc-qt/`, {
            email: item.email,
            _id: cart[i]._id,
          })
          .then(function () {
            item.setDataState((state) => !state);
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
      .post(`${process.env.PRODUCTS_API}users`, {
        email: item.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == item._id) {
        axios
          .patch(`${process.env.PRODUCTS_API}dec-qty`, {
            email: item.email,
            _id: cart[i]._id,
          })
          .then(function () {
            item.setDataState((state) => !state);
            setDelLoading(false);
            setQty(qty + value);
            return;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  const handleDelete = () => {
    setDelLoading(true);
    axios
      .patch(`${process.env.PRODUCTS_API}del-qty`, {
        email: item.email,
        _id: item._id,
      })
      .then(function () {
        item.setDataState((state) => !state);
        setDelLoading(false);
        setQty(qty + value);
        return;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box>
      <Flex gap={4}>
        <Image className="cart-item-image" src={item.image} />
        <Flex gap={1} w={"100%"} flexDir={"column"}>
          <Flex justifyContent={"space-between"}>
            <Text>{item.title}</Text>
            <Text>${item.price * qty}.00</Text>
          </Flex>
          <Text color={"#757575"}>{item.subtitle}</Text>
          <Text color={"#757575"}>{item.color_count}</Text>
          <Flex mb={3} mt={4} alignItems={"center"} gap={1}>
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
          <Flex align={"center"} gap={2}>
            <Button
              p={"0px"}
              ml={"-10px"}
              w={"max-content"}
              isLoading={delLoading}
              onClick={handleDelete}
              color={"black"}
              _hover={{ bgColor: "transparent" }}
              backgroundColor={"transparent"}
              style={{ marginTop: "auto", borderRadius: "50%" }}>
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
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"></path>
              </svg>
            </Button>
            <svg
              cursor={"pointer"}
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
                d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path>
            </svg>
          </Flex>
        </Flex>
      </Flex>
      <Divider my={6} />
    </Box>
  );
}

export default CartItem;
