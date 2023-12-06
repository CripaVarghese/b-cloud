import { Card, CardBody, Text, Stack, Flex } from "@chakra-ui/react";
import { DoughnutDetails } from "./DoughnutDetails";

const DoughnutChart = () => {
  return (
    <Stack
      // w={{ md: "100%", lg: "29%" }}
      w="290px"
      // h={{ md: "90%", lg: "100%" }}
      justifyContent={"space-between"}
    >
      <Card
        borderTop={"5px solid #0063FF"}
        borderRadius={"15"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      >
        <CardBody p="4">
          <Flex flexDirection={"column"}>
            <Text fontSize={"13"} fontWeight={"extrabold"}>
              Sales by Time of Day <span color="#6B6B6B">(Last 24 Hours)</span>
            </Text>
          </Flex>
          <DoughnutDetails />
        </CardBody>
      </Card>
    </Stack>
  );
};

export default DoughnutChart;
