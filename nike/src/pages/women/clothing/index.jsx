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
import Head from "next/head";
import ProdutCard from "@/components/ProdutCard";

const invalidImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const placeholder = "https://placehold.jp/592x592.png";

const fetchData = async () => {
  var response = await fetch(
    "https://dead-erin-coral-yoke.cyclic.app/women/clothes"
  );
  response = await response.json();
  return response;
};

function WomenClothing() {
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
      <Head>
        <title>Women's Clothing</title>
        <link
          rel="shortcut icon"
          href="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/nike-1024.png"
        />
      </Head>
      <Flex
        py={"10px"}
        w={"100%"}
        alignItems="center"
        justifyContent="space-between"
        mb={"20px"}>
        <Text className="product-title-lg" fontWeight={"bold"} fontSize={"3xl"}>
          Women's Clothing ({varData.length})
        </Text>
        <Text className="product-title-sm" fontWeight={"bold"}>
          Women's Clothing
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
            className={activeFilter === "leggings" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("leggings")}>
            Leggings
          </Text>
          <Text
            className={activeFilter === "hoodie" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("hoodie")}>
            Hoodies & Pullovers
          </Text>
          <Text
            className={activeFilter === "shorts" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("shorts")}>
            Shorts
          </Text>
          <Text
            className={activeFilter === "bra" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("bra")}>
            Sports Bras
          </Text>
          <Text
            className={activeFilter === "top" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("top")}>
            Tops & T-shirts
          </Text>
          <Text
            className={activeFilter === "pants" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("pants")}>
            Pants & Tights
          </Text>
          <Text
            className={activeFilter === "jacket" ? "filter-tag-active" : ""}
            onClick={() => handleFiltering("jacket")}>
            Jackets & Vests
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
              className={activeFilter === "leggings" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("leggings")}>
              Leggings
            </Text>
            <Text
              className={activeFilter === "hoodie" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("hoodie")}>
              Hoodies & Pullovers
            </Text>
            <Text
              className={activeFilter === "shorts" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("shorts")}>
              Shorts
            </Text>
            <Text
              className={activeFilter === "bra" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("bra")}>
              Sports Bras
            </Text>
            <Text
              className={activeFilter === "top" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("top")}>
              Tops & T-shirts
            </Text>
            <Text
              className={activeFilter === "pants" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("pants")}>
              Pants & Tights
            </Text>
            <Text
              className={activeFilter === "jacket" ? "filter-tag-active" : ""}
              onClick={() => handleFiltering("jacket")}>
              Jackets & Vests
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
                <ProdutCard
                  key={item._id}
                  _id={item._id}
                  image={item.image}
                  message={item.message}
                  title={item.title}
                  subtitle={item.subtitle}
                  color_count={item.color_count}
                  price={item.price}
                  item={item}
                />
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
                <ProdutCard
                  key={item._id}
                  _id={item._id}
                  image={item.image}
                  message={item.message}
                  title={item.title}
                  subtitle={item.subtitle}
                  color_count={item.color_count}
                  price={item.price}
                  item={item}
                />
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default WomenClothing;
