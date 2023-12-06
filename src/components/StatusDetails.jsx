import { Card, CardBody, Box, Text, Stack, Flex } from "@chakra-ui/react";
import statusList from "../dataLists/statusList";

const StatusDetails = () => {
  return (
    <Card
      w={{ base: "100%", md: "100%", lg: "100%" }}
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      gap={"3"}
      borderRadius={"10px"}
    >
      <CardBody>
        <Flex
          direction={{ base: "column", md: "column", lg: "row" }}
          justifyContent={"space-between"}
          alignItems={{ md: "flex-start", lg: "center" }}
          gap={5}
        >
          {statusList.map((list, i) => (
            <Stack
              key={i}
              direction={{ lg: "row" }}
              w="100%"
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
            >
              <Stack justifyContent={"space-between"} gap={3}>
                <Text fontWeight="bold" fontSize={"xs"} mt="5px">
                  {list.title}
                </Text>
                <Text p={"0"} fontSize={"22"} fontWeight={"bold"}>
                  {list.price}
                </Text>
              </Stack>
              <Box>
                {
                  <list.svg
                    fontSize="2px"
                    width="40"
                    height="40"
                    fontWeight="30"
                    color={list.color}
                  />
                }
              </Box>
              {/* <Divider orientation="vertical" /> */}
            </Stack>
          ))}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StatusDetails;
