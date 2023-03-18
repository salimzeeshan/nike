import CartItem from "@/components/CartItem";
import { AuthContext } from "@/context/authContext";
import { Box, Divider, Flex, Skeleton, Text } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

function Cart() {
  const { currentUser } = useContext(AuthContext);
  const [userCart, setUserCart] = useState();
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [dataState, setDataState] = useState(false);

  const getData = async () => {
    setLoading(false);
    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: currentUser.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });
    var subtotal = 0,
      tax = 0,
      total = 0;
    cart.map((item) => {
      subtotal += item.price * item.quantity;
    });
    tax = subtotal * 0.15;
    total = subtotal + tax;
    setTax(tax);
    setTotal(total);
    setSubTotal(subtotal);
    setLoading(true);
    setUserCart(cart);
  };

  const getTotal = async () => {
    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: currentUser.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });
    var subtotal = 0,
      tax = 0,
      total = 0;
    cart.map((item) => {
      subtotal += item.price * item.quantity;
    });
    tax = subtotal * 0.15;
    total = subtotal + tax;
    setTax(tax);
    setTotal(total);
    setSubTotal(subtotal);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTotal();
  }, [dataState]);

  var cartItemSkeletons = [];

  for (let i = 0; i < 20; i++) {
    cartItemSkeletons.push(
      <Skeleton mb={4} isLoaded={loading} h="200px"></Skeleton>
    );
  }

  return (
    <Box className="cart-grid">
      <Head>
        <title>Cart. Nike Store.</title>
        <link
          rel="shortcut icon"
          href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
        />
      </Head>
      <Box>
        <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
          Bag
        </Text>
        <div className={loading ? "cart-skeleton-active" : "cart-skeleton"}>
          {cartItemSkeletons}
        </div>
        <Flex flexDir="column">
          {userCart &&
            userCart.map((item) => {
              return (
                <CartItem
                  setDataState={setDataState}
                  title={item.title}
                  subtitle={item.subtitle}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price}
                  color_count={item.color_count}
                  email={currentUser.email}
                  _id={item._id}
                />
              );
            })}
        </Flex>
      </Box>
      <Box>
        <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
          Summary
        </Text>
        <div className={loading ? "cart-skeleton-active" : "cart-skeleton"}>
          <Skeleton isLoaded={loading} h="1200px" />
        </div>
        <Box>
          <Flex w={"100%"} flexDir={"column"} gap={3}>
            <Flex justify={"space-between"}>
              <Text>Subtotal</Text>
              <Text>${subtotal}.00</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Estimated Shipping & Handling</Text>
              <Text>Free</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Estimated Tax</Text>
              <Text>${tax}.00</Text>
            </Flex>
            <Divider my={3} borderColor="gray.300" />
            <Flex justify={"space-between"}>
              <Text>Total</Text>
              <Text fontWeight={"bold"}>${total}.00</Text>
            </Flex>
            <Divider my={3} borderColor="gray.300" />
          </Flex>
          <button
            style={{ width: "100%", marginTop: "15px", padding: "15px" }}
            className="black-button">
            Checkout
          </button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
