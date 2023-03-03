import { Box, filter, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsFilterRight } from "react-icons/bs";

function MenShoes() {
  useEffect(() => {
    const hideFilter = document.querySelector(".hide-filter");

    hideFilter.addEventListener("click", () => {
      const filters = document.querySelector(".filters");
      const products = document.querySelector(".products");
      const home = document.querySelector(".home");
      const data_id = home.getAttribute("data-filters");
      console.log(data_id);

      if (data_id == "false") {
        filters.classList.add("filters-hide");
        products.classList.add("products-full");
        home.setAttribute("data-filters", "true");
      }
      if (data_id == "true") {
        filters.classList.remove("filters-hide");
        products.classList.remove("products-full");
        home.setAttribute("data-filters", "false");
      }
    });
  }, []);

  return (
    <Box data-filters="false" className="home" mt={"50px"}>
      <Flex
        py={"10px"}
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        border="1px solid black"
        mb={"20px"}>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Men's Shoes & Sneakers
        </Text>
        <Flex>
          <Flex className="hide-filter" alignItems={"center"}>
            <Text>Hide Filters</Text>
            <BsFilterRight />
          </Flex>
        </Flex>
      </Flex>
      <Flex className="product-container" justifyContent={"end"} gap={"30px"}>
        <Flex h={"1000px"} className="filters">
          Filters
        </Flex>
        <Flex h={"1000px"} className="products">
          Products
        </Flex>
      </Flex>
    </Box>
  );
}

export default MenShoes;
