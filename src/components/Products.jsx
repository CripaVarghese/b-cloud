import Sidebar from "./Sidebar";
import { Stack, Text } from "@chakra-ui/react";
import Details from "./Details";
import { productDetailsStyles as style } from "../styles";

const Products = () => {
  return (
    <Stack alignItems={{ base: "center", md: "flex-start" }}>
      <Text color={"#0063FF"} {...style.lgFontStyles}>
        Product details
      </Text>

      <Stack
        gap="24px"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Sidebar />
        <Details />
      </Stack>
    </Stack>
  );
};

export default Products;
