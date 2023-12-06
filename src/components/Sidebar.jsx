import { Card, CardBody, Text, Stack, Box, Image } from "@chakra-ui/react";
import List from "./List";

const Sidebar = () => {
  return (
    <Card
      w={{ base: "80%", md: "30%", lg: "24%" }}
      h={{ "2xl": "55%" }}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 10px 24px"}
      py="3px"
    >
      <CardBody p="6">
        <Stack justifyContent={"space-between"} gap={3}>
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
