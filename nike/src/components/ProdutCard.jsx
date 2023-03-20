import { Box, Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/context/authContext";
import axios from "axios";

const invalidImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const placeholder = "https://placehold.jp/592x592.png";

function ProdutCard(props) {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const toast = useToast();

  const handleATC = async (item) => {
    if (!currentUser) {
      toast({
        title: "Please login!",
        description: "You need to login to add products to your cart.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    var product = { ...item, quantity: 1 };
    product = { ...product, email: currentUser.email };
    setLoading(true);

    const cart = await axios
      .post("https://dead-erin-coral-yoke.cyclic.app/users", {
        email: product.email,
      })
      .then(function (response) {
        return response.data[0].cart;
      });

    console.log(cart);
    console.log(item);

    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id == product._id) {
        axios
          .patch("https://dead-erin-coral-yoke.cyclic.app/inc-qty", {
            email: product.email,
            _id: cart[i]._id,
          })
          .then(function () {
            setLoading(false);
            toast({
              title: "Product added",
              description: "We have added the product to your cart.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            return;
          })
          .catch(function (error) {
            console.log(error);
          });
        return;
      }
    }

    axios
      .post("https://dead-erin-coral-yoke.cyclic.app/add-to-cart", product)
      .then(function (response) {
        setLoading(false);
        toast({
          title: "Product added",
          description: "We have added the product to your cart.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Box key={props._id}>
      <Image
        width={"100%"}
        mb={2}
        src={props.image === invalidImage ? placeholder : props.image}
      />
      <Text fontWeight={"500"} color={"#9d3400"} h={7}>
        {props.message}
      </Text>
      <Flex mb={2} direction={"column"}>
        <Text h={7}>{props.title}</Text>
        <Text h={12} color={"gray"}>
          {props.subtitle}
        </Text>
      </Flex>
      <Text h={7} mb={4} color={"gray"}>
        {props.color_count}
      </Text>
      <Text h={7}>${props.price}</Text>
      <Button
        isDisabled={props.message === "Sold Out"}
        isLoading={loading}
        style={{ width: "100%", borderRadius: "5px", marginTop: "1.5rem" }}
        color={"white"}
        _hover={{ bgColor: "gray.600" }}
        backgroundColor={"black"}
        onClick={() => handleATC(props)}>
        ADD TO CART
      </Button>
    </Box>
  );
}

export default ProdutCard;
