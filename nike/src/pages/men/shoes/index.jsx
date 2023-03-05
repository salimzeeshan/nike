import { Box, filter, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const fetchData = () => {
  axios
    .get("https://dead-erin-coral-yoke.cyclic.app/men/shoes")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
};

function MenShoes() {
  const [hide, setHide] = useState(false);

  const getData = async () => {
    var data = await fetchData();
    console.log(data);
  };

  useEffect(() => {
    axios
      .get("/men/shoes")
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleFilter = () => {
    const filters = document.querySelector(".filters");
    const products = document.querySelector(".products");
    const home = document.querySelector(".home");
    const data_id = home.getAttribute("data-filters");

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
    <Box data-filters="false" className="home" mt={"50px"}>
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
            gap={2}
            cursor={"pointer"}
            onClick={handleFilter}
            className="hide-filter"
            alignItems={"center"}>
            {hide ? <Text>Show Filters</Text> : <Text>Hide Filters</Text>}
            {/* <BsFilterRight /> */}
            <svg
              aria-hidden="true"
              class="icon-filter-ds"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none">
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M21 8.25H10m-5.25 0H3"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M3 15.75h10.75m5 0H21"></path>
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"></path>
            </svg>
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
      {}
    </Box>
  );
}

export default MenShoes;
