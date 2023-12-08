import Sidebar from "./Sidebar";
import { Stack, Text } from "@chakra-ui/react";
import { style } from "../styles";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <Stack alignItems={{ base: "center", md: "flex-start" }}>
      <Text color={"#0063FF"} {...style.lgFontStyles}>
        Product details
      </Text>

      <Stack
        w={{ base: "80%", md: "100%" }}
        gap="24px"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Sidebar />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Products;
