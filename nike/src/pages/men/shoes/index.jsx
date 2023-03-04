import { Box, filter, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";

function MenShoes() {
  const [hide, setHide] = useState(false);

  const handleFilter = () => {
    const filters = document.querySelector(".filters");
    const products = document.querySelector(".products");
    const home = document.querySelector(".home");
    const data_id = home.getAttribute("data-filters");
    console.log(data_id);

    if (data_id == "false") {
      filters.classList.add("filters-hide");
      products.classList.add("products-full");
      home.setAttribute("data-filters", "true");
      setHide(!hide);
    }
    if (data_id == "true") {
      filters.classList.remove("filters-hide");
      products.classList.remove("products-full");
      home.setAttribute("data-filters", "false");
      setHide(!hide);
    }
  };

  return (
    <Box
      data-filters="false"
      className="home"
      mt={"50px"}>
      <Flex
        py={"10px"}
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        mb={"20px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Men's Shoes & Sneakers
        </Text>
        <Flex>
          <Flex
            cursor={"pointer"}
            onClick={handleFilter}
            className="hide-filter"
            alignItems={"center"}>
            {hide ? <Text>Show Filters</Text> : <Text>Hide Filters</Text>}
            <BsFilterRight />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        position={"relative"}
        width={"100%"}
        className="product-container"
        gap={"30px"}>
        <Box className="dummy-div"></Box>
        <Box h={"1000px"} className="filters">
          Filters
        </Box>
        <Box h={"1000px"} className="products">
          Products
        </Box>
      </Flex>
    </Box>
  );
}

export default MenShoes;
