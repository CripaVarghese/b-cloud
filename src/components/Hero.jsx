import Sidebar from "./Sidebar";
import { Stack, Text } from "@chakra-ui/react";
import Details from "./Details";
import { productDetailsStyles as style } from "../styles";

const Hero = () => {
  return (
    <Stack alignItems={{ base: "center", md: "flex-start" }}>
      <Text color={"#0063FF"} {...style.lgFontStyles}>
        Product details
      </Text>

      <Stack
        w={{ "2xl": "100%" }}
        h={{ lg: "113vh", "2xl": "100%" }}
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

export default Hero;
