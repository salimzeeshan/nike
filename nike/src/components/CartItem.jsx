import React from "react";
import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";

function CartItem(item) {
  const [incLoading, setIncLoading] = useState(false);
  const [decLoading, setDecLoading] = useState(false);

  const incQty = async () => {
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
            setIncLoading(true);
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
      }
    }
  };

  const decQty = async () => {
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
            setDecLoading(true);
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
            <Text>${item.price}</Text>
          </Flex>
          <Text color={"#757575"}>{item.subtitle}</Text>
          <Text color={"#757575"}>{item.color_count}</Text>
          <Flex mt={4} alignItems={"center"} gap={2}>
            <Button
              onClick={decQty}
              isLoading={decLoading}
              style={{
                borderRadius: "5px",
              }}
              color={"white"}
              _hover={{ bgColor: "gray.600" }}
              backgroundColor={"black"}
              size={"xs"}>
              -
            </Button>
            <Text fontSize={"md"}>{item.quantity}</Text>
            <Button
              onClick={incQty}
              isLoading={incLoading}
              style={{
                borderRadius: "5px",
              }}
              color={"white"}
              _hover={{ bgColor: "gray.600" }}
              backgroundColor={"black"}
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
