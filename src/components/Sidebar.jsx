import { Card, CardBody, Text, Stack, Box, Image } from "@chakra-ui/react";
import List from "./List";

const Sidebar = () => {
  return (
    <Card
      // w={{ base: "80%", md: "40%", lg: "35%" }}
      // h={{ base: "", md: "", lg: "", "2xl": "630" }}
      w="24%"
      h="55%"
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 10px 24px"}
      py="3px"
    >
      {/* h={{ base:'552', md:'552', lg:'59%' , '2xl': '675'}} */}
      <CardBody p="6">
        <Stack
          // h={{ base: "", md: "", lg: "", "2xl": "100%" }}
          justifyContent={"space-between"}
          gap={3}
        >
          <Stack>
            <Image src="/images/Dairymilk.png" />
            <Stack gap={0}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                Dairy Milk
              </Text>
              <Text fontSize={"xs"}>Chocolates</Text>
            </Stack>
          </Stack>

          <Box>
            <List />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Sidebar;
