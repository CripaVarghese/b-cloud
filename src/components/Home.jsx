import { Box, Divider, Stack } from "@chakra-ui/react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"} alignItems={"center"} height={"100%"}>
        <Box
          w={"100%"}
          mb={3}
          boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}
        >
          <Header />
          <Divider />
          <Navbar />
        </Box>
        <Box w={{ md: "90%", lg: "92.5%", "2xl": "80%" }}>
          <Hero />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
