import Header from "./components/Header";
import { Box, Divider, Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UnauthenticatedRoutes from "./routes/UnauthenticatedRoutes";

function App() {
  return (
    <>
      <Stack flexDirection={"column"} alignItems={"center"} height={"100%"}>
        <Box
          w={"100%"}
          mb={3}
          boxShadow={"rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}
          position={"fixed"}
          zIndex={"1"}
          bg="white"
        >
          <Header />
          <Divider />
          <Navbar />
        </Box>

        <Box w={{ md: "90%", lg: "92.5%", "2xl": "80%" }} pt="130px">
          <UnauthenticatedRoutes />
        </Box>
      </Stack>
    </>
  );
}

export default App;
