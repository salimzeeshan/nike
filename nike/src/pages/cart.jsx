import Address from "@/components/Address";
import CartItem from "@/components/CartItem";
import { AuthContext } from "@/context/authContext";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Payment from "@/components/Payment";
import { useRouter } from "next/router";
import Link from "next/link";

function Cart() {
  const { currentUser } = useContext(AuthContext);
  const [userCart, setUserCart] = useState();
  const [loading, setLoading] = useState(true);
  const [subtotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [dataState, setDataState] = useState(false);
  const [step, setStep] = useState(1);
  const [checkLoading, setCheckLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [order, setOrder] = useState(false);
  const router = useRouter();

  const getData = async () => {
    setLoading(false);
    const cart = await axios
      .post(`${process.env.PRODUCTS_API}users/`, {
        email: currentUser.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });
    var subtotal = 0,
      tax = 0,
      total = 0;
    cart.map((item) => {
      subtotal += Math.round(+item.price) * +item.quantity;
    });
    tax = subtotal * 0.15;
    total = subtotal + tax;
    setTax(Math.round(tax));
    setTotal(Math.round(total));
    setSubTotal(subtotal);
    setLoading(true);
    setUserCart(cart);
  };

  const getTotal = async () => {
    const cart = await axios
      .post(`${process.env.PRODUCTS_API}users/`, {
        email: currentUser.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });
    var subtotal = 0,
      tax = 0,
      total = 0;
    cart.map((item) => {
      subtotal += Math.round(+item.price) * +item.quantity;
    });
    tax = subtotal * 0.15;
    total = subtotal + tax;
    setTax(Math.round(tax));
    setTotal(Math.round(total));
    setSubTotal(subtotal);
    setUserCart(cart);
  };

  const hadleCheckout = () => {
    setCheckLoading(true);
    setTimeout(() => {
      setStep(2);
    }, 2000);
  };

  const confirmOrder = () => {
    setPaymentLoading(true);
    setTimeout(completeOrder, 3000);
  };

  const completeOrder = () => {
    setPaymentLoading(false);
    setOrder(true);
    axios.patch(`${process.env.PRODUCTS_API}del-cart/`, {
      email: currentUser.email,
    });
    setTimeout(() => {
      router.push("/");
    }, 5000);
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

  if (order) {
    return (
      <Box mb={"100px"} mt={"100px"} textAlign="center" py={10}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Order placed successfully
        </Heading>
        <Text color={"gray.500"}>
          You will recieve an email with tracking information once your goods
          have shipped.
        </Text>
      </Box>
    );
  }

  if (userCart && userCart.length === 0) {
    return (
      <Flex
        gap={4}
        justify={"center"}
        align={"center"}
        flexDir={"column"}
        h={"500px"}>
        <Head>
          <title>Empty Cart. Nike Store.</title>
          <link
            rel="shortcut icon"
            href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
          />
        </Head>
        <Image
          opacity={"40%"}
          w={"70px"}
          src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png"
        />
        <Text color={"gray"} fontSize={"20px"}>
          It seems like your cart is empty.
        </Text>
        <Link href={"/men/shoes"}>
          <Button
            color={"white"}
            _hover={{ bgColor: "gray" }}
            backgroundColor={"black"}
            borderRadius={"5px"}>
            Looking for Shoes?
          </Button>
        </Link>
      </Flex>
    );
  }

  return (
    <Box mt={"50px"} className="cart-container">
      <Box className="cart-grid">
        <Head>
          <title>Cart. Nike Store.</title>
          <link
            rel="shortcut icon"
            href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
          />
        </Head>
        {step === 1 ? (
          <Box>
            <Text
              className="bag-lg"
              mb={"20px"}
              fontWeight={"bold"}
              fontSize={"3xl"}>
              Bag
            </Text>
            <Box className="bag-sm">
              <Text fontWeight={"bold"} fontSize={"3xl"}>
                Bag
              </Text>
              <Flex alignItems={"center"} gap={2}>
                <Text color={"gray"}>{userCart && userCart.length} items</Text>
                <Divider
                  h={"15px"}
                  border={".7px solid gray"}
                  orientation="vertical"
                />
                <Text>${total}.00</Text>
              </Flex>
            </Box>
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
                      price={Math.round(item.price)}
                      color_count={item.color_count}
                      email={currentUser.email}
                      _id={item._id}
                    />
                  );
                })}
            </Flex>
          </Box>
        ) : null}

        {step === 2 ? (
          <Box>
            <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
              Delivery Address
            </Text>
            <Address paymentLoading={paymentLoading} setStep={setStep} />
          </Box>
        ) : null}

        {step === 3 ? (
          <Box>
            <Text mb={"20px"} fontWeight={"bold"} fontSize={"3xl"}>
              Payment Details
            </Text>
            <Payment
              paymentLoading={paymentLoading}
              confirmOrder={confirmOrder}
            />
          </Box>
        ) : null}

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
            {step === 1 ? (
              <Button
                mb={"30px"}
                isLoading={checkLoading}
                w={"100%"}
                onClick={hadleCheckout}
                color={"white"}
                _hover={{ bgColor: "gray" }}
                backgroundColor={"black"}
                style={{ marginTop: "20px", borderRadius: "5px" }}>
                Checkout
              </Button>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
