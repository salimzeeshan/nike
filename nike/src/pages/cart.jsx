import CartItem from "@/components/CartItem";
import { AuthContext } from "@/context/authContext";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

function Cart() {
  const { currentUser } = useContext(AuthContext);
  const [userCart, setUserCart] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const skeleton = document.querySelectorAll(".cart-skeleton");
    setLoading(false);
    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: currentUser.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });
    setLoading(true);
    setUserCart(cart);
  };

  useEffect(() => {
    getData();
  }, []);

  var cartItemSkeletons = [];

  for (let i = 0; i < 20; i++) {
    cartItemSkeletons.push(
      <Skeleton mb={4} isLoaded={loading} h="200px"></Skeleton>
    );
  }

  return (
    <Box className="cart-grid">
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
          <Skeleton isLoaded={loading} h="300px" />
        </div>
      </Box>
    </Box>
  );
}

export default Cart;
