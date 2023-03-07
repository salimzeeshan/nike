import {
  Box,
  Button,
  Divider,
  filter,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import React, { useEffect, useState } from "react";

const invalidImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const placeholder = "https://placehold.jp/592x592.png";

const fetchData = async () => {
  var response = await fetch(
    "https://dead-erin-coral-yoke.cyclic.app/accessories"
  );
  response = await response.json();
  return response;
};

function Accessories() {
  const [hide, setHide] = useState(false);
  const [products, setProducts] = useState([]);
  const [varData, setVarData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const skeleton = document.querySelector(".skeleton-grid");
    skeleton.classList.add("skeleton-active");
    setLoading(false);
    var data = await fetchData();
    setProducts(data);
    setVarData(data);
    setLoading(true);
    skeleton.classList.remove("skeleton-active");
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = () => {
    const filters = document.querySelector(".filters");
    const products = document.querySelector(".products");
    const dummyDiv = document.querySelector(".products-dummy");
    const home = document.querySelector(".home");
    const data_id = home.getAttribute("data-filters");

    if (data_id == "false") {
      filters.classList.add("filters-hide");
      products.classList.add("products-full");
      dummyDiv.classList.add("product-dummy-active");
      home.setAttribute("data-filters", "true");
      setHide(!hide);
    }
    if (data_id == "true") {
      filters.classList.remove("filters-hide");
      products.classList.remove("products-full");
      dummyDiv.classList.remove("product-dummy-active");
      home.setAttribute("data-filters", "false");
      setHide(!hide);
    }
  };

  const handleFiltering = (query) => {
    setActiveFilter(query);
    let data = [...products];
    const radio = document.querySelector(".all");
    radio.checked = true;

    if (query === "all") {
      setVarData(products);
      return;
    }

    if (query === "100") {
      data = data.filter((item) => {
        return item.price < 100;
      });
      setVarData(data);
      return;
    }

    data = data.filter((item) => {
      return (
        item.title.toLowerCase().split(" ").includes(query) ||
        item.subtitle.toLowerCase().split(" ").includes(query)
      );
    });
    setVarData(data);
  };

  const handleRadio = (query) => {
    let data = [...products];
    const button = document.querySelector(`.${query}`);
    button.checked = true;

    if (activeFilter !== "all") {
      data = data.filter((item) => {
        return (
          item.title.toLowerCase().split(" ").includes(activeFilter) ||
          item.subtitle.toLowerCase().split(" ").includes(activeFilter)
        );
      });
    }

    console.log(data);

    if (query === "all") {
      if (activeFilter === "all") {
        setVarData(products);
        return;
      }
      data = products.filter((item) => {
        return (
          item.title.toLowerCase().split(" ").includes(activeFilter) ||
          item.subtitle.toLowerCase().split(" ").includes(activeFilter)
        );
      });
      setVarData(data);
      return;
    }

    if (query === "twofive") {
      data = data.filter((item) => {
        return (item.price >= 25) & (item.price <= 50);
      });
      setVarData(data);
      return;
    }

    if (query === "fivezero") {
      data = data.filter((item) => {
        return (item.price >= 50) & (item.price <= 100);
      });
      setVarData(data);
      return;
    }

    if (query === "hundered") {
      data = data.filter((item) => {
        return (item.price >= 100) & (item.price <= 150);
      });
      setVarData(data);
      return;
    }

    if (query === "onefifty") {
      data = data.filter((item) => {
        return item.price >= 150;
      });
      setVarData(data);
      return;
    }
  };

  const handleSort = (query) => {
    let data = [...varData];

    if (query === "hightolow") {
      data = data.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log(data);
    }
    if (query === "lowtohigh") {
      data = data.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    setVarData(data);
  };

  var skeleton = [];

  for (let i = 0; i < 100; i++) {
    skeleton.push(
      <GridItem>
        <Skeleton isLoaded={loading} h={"300px"}></Skeleton>
        <SkeletonText isLoaded={loading} noOfLines={6} />
        <Skeleton isLoaded={loading} mt={4} h={"30px"}></Skeleton>
      </GridItem>
    );
  }

  return (
    <Box data-filters="false" className="home" mt={"20px"}>
      <Flex
        py={"10px"}
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        mb={"20px"}>
        <Text className="product-title-lg" fontWeight={"bold"} fontSize={"3xl"}>
          All Accessories & Equipments ({varData.length})
        </Text>
        <Text className="product-title-sm" fontWeight={"bold"}>
          All Accessories & Equipments
        </Text>

        <Flex gap={4}>
          <Box
            gap={2}
            cursor={"pointer"}
            onClick={handleFilter}
            className="hide-filter"
            alignItems={"center"}>
            {hide ? <Text>Show Filters</Text> : <Text>Hide Filters</Text>}
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
          </Box>
          <Box className={"sort-lg"}>
            <Menu>
              <MenuButton
                border="none"
                py={2}
                transition="all 0.2s"
                borderRadius="md">
                <Flex alignItems={"center"} gap={2}>
                  Sort by <FiChevronDown />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => handleSort("hightolow")}>
                  Price: High-Low
                </MenuItem>
                <MenuItem onClick={() => handleSort("lowtohigh")}>
                  Price: Low-High
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Box mb={4} className="filters-sm">
        <Flex
          whiteSpace={"nowrap"}
          w={"100%"}
          overflow={"scroll"}
          className="filter-tag"
          flexDirection={"row"}
          gap={6}
          fontSize={"lg"}
          fontWeight={"bold"}
          cursor={"pointer"}>
          <Text
            className={activeFilter === "all" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("all")}>
            All
          </Text>
          <Text
            className={activeFilter === "bag" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("bag")}>
            Bags & Backpacks
          </Text>
          <Text
            className={activeFilter === "basketball" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("basketball")}>
            Basketball
          </Text>
          <Text
            className={activeFilter === "football" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("football")}>
            Football
          </Text>
          <Text
            className={activeFilter === "soccer" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("soccer")}>
            Soccer
          </Text>
          <Text
            className={activeFilter === "volleyball" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("volleyball")}>
            Volleyball
          </Text>
          <Text
            className={activeFilter === "gloves" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("gloves")}>
            Gloves & Mitts
          </Text>
          <Text
            className={activeFilter === "hat" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("hat")}>
            Hats & Caps
          </Text>
          <Text
            className={activeFilter === "hat" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("band")}>
            Watches
          </Text>
          <Text
            className={activeFilter === "sleeves" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("sleeves")}>
            Sleeves & Armbands
          </Text>
          <Text
            className={activeFilter === "swim" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("swim")}>
            Swim Goggles & Caps
          </Text>
          <Text
            className={activeFilter === "sunglasses" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("sunglasses")}>
            Sunglasses
          </Text>
          <Text
            className={activeFilter === "mat" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("mat")}>
            Yoga Mats
          </Text>
        </Flex>
      </Box>

      <Box className="sort-sm">
        <Text fontSize={"lg"} color={"gray"}>
          {varData.length} Results
        </Text>
        <Menu>
          <MenuButton
            border="none"
            py={2}
            transition="all 0.2s"
            borderRadius="md">
            <Flex alignItems={"center"} gap={2}>
              Sort by <FiChevronDown />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => handleSort("hightolow")}
              _hover={{ bg: "transparent" }}>
              Price: High-Low
            </MenuItem>
            <MenuItem
              onClick={() => handleSort("lowtohigh")}
              _hover={{ bg: "transparent" }}>
              Price: Low-High
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Flex
        position={"relative"}
        width={"100%"}
        className="product-container"
        gap={"30px"}>
        <Box flexDirection={"column"} className="filters">
          <Flex
            className="filter-tag"
            flexDirection={"column"}
            gap={1}
            fontSize={"lg"}
            fontWeight={"bold"}
            cursor={"pointer"}>
            <Text
              className={activeFilter === "all" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("all")}>
              All
            </Text>
            <Text
              className={activeFilter === "bag" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("bag")}>
              Bags & Backpacks
            </Text>
            <Text
              className={
                activeFilter === "basketball" ? "filter-tag-active" : ""
              }
              onClick={() => handleFiltering("basketball")}>
              Basketball
            </Text>
            <Text
              className={activeFilter === "football" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("football")}>
              Football
            </Text>
            <Text
              className={activeFilter === "soccer" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("soccer")}>
              Soccer
            </Text>
            <Text
              className={
                activeFilter === "volleyball" ? "filter-tag-active" : ""
              }
              onClick={() => handleFiltering("volleyball")}>
              Volleyball
            </Text>
            <Text
              className={activeFilter === "gloves" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("gloves")}>
              Gloves & Mitts
            </Text>
            <Text
              className={activeFilter === "hat" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("hat")}>
              Hats & Caps
            </Text>
            <Text
              className={activeFilter === "hat" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("band")}>
              Watches
            </Text>
            <Text
              className={activeFilter === "sleeves" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("sleeves")}>
              Sleeves & Armbands
            </Text>
            <Text
              className={activeFilter === "swim" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("swim")}>
              Swim Goggles & Caps
            </Text>
            <Text
              className={
                activeFilter === "sunglasses" ? "filter-tag-active" : ""
              }
              onClick={() => handleFiltering("sunglasses")}>
              Sunglasses
            </Text>
            <Text
              className={activeFilter === "mat" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("mat")}>
              Yoga Mats
            </Text>
          </Flex>
          <Box py={4}>
            <Divider
              w={"70%"}
              opacity={"20%"}
              border={".5px solid gray"}
              orientation="horizontal"
            />
          </Box>
          <Flex flexDirection={"column"} gap={4}>
            <Text fontWeight={"bold"}>Shop by Price</Text>
            <Flex className="radio-stack" flexDir={"column"} gap={1}>
              <Flex onClick={() => handleRadio("all")} gap={2}>
                <input
                  className="all"
                  defaultChecked="true"
                  name="radio"
                  type="radio"
                />
                <Text>All</Text>
              </Flex>
              <Flex onClick={() => handleRadio("twofive")} gap={2}>
                <input className="twofive" name="radio" type="radio" />
                <Text>$25 - $50</Text>
              </Flex>
              <Flex onClick={() => handleRadio("fivezero")} gap={2}>
                <input className="fivezero" name="radio" type="radio" />
                <Text>$50 - $100</Text>
              </Flex>
              <Flex onClick={() => handleRadio("hundered")} gap={2}>
                <input className="hundered" name="radio" type="radio" />
                <Text>$100 - $150</Text>
              </Flex>
              <Flex onClick={() => handleRadio("onefifty")} gap={2}>
                <input className="onefifty" name="radio" type="radio" />
                <Text>Over $150</Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box className="products">
          <Box className="products-grid" columnGap={4} rowGap={6}>
            {varData.map((item) => {
              return (
                <Box key={item._id}>
                  <Image
                    w={"100%"}
                    mb={2}
                    src={item.image === invalidImage ? placeholder : item.image}
                  />
                  <Text fontWeight={"500"} color={"#9d3400"} h={7}>
                    {item.message}
                  </Text>
                  <Flex mb={2} direction={"column"}>
                    <Text>{item.title}</Text>
                    <Text color={"gray"}>{item.subtitle}</Text>
                  </Flex>
                  <Text h={7} mb={4} color={"gray"}>
                    {item.color_count}
                  </Text>
                  <Text>${item.price}</Text>
                  <button className="black-button add-to-cart">
                    ADD TO CART
                  </button>
                </Box>
              );
            })}
          </Box>
          <Box className="skeleton-grid" gap={4} gridTemplateRows={"450px"}>
            {skeleton}
          </Box>
        </Box>
      </Flex>

      <Flex width={"100%"} className="product-container dummy-div" gap={"30px"}>
        <Box className="products-dummy">
          <Box className="products-grid" columnGap={4} rowGap={6}>
            {varData.map((item) => {
              return (
                <Box key={item._id}>
                  <Image
                    mb={2}
                    src={item.image === invalidImage ? placeholder : item.image}
                  />
                  <Text fontWeight={"500"} color={"#9d3400"} h={7}>
                    {item.message}
                  </Text>
                  <Flex mb={2} direction={"column"}>
                    <Text>{item.title}</Text>
                    <Text color={"gray"}>{item.subtitle}</Text>
                  </Flex>
                  <Text h={7} mb={4} color={"gray"}>
                    {item.color_count}
                  </Text>
                  <Text>${item.price}</Text>
                  <button className="black-button add-to-cart">
                    ADD TO CART
                  </button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Accessories;
