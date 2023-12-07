import { Card, CardBody, Text, Stack, Flex, chakra } from "@chakra-ui/react";
import DoughnutChart from "./DoughnutChart";
import { style } from "../styles";

const DoughnutChartDetails = () => {
  return (
    <Stack justifyContent={"space-between"}>
      <Card
        borderTop={"5px solid #0063FF"}
        borderRadius={"15"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        h={{ md: "90%", lg: "100%" }}
        alignItems={"center"}
      >
        <CardBody p="4">
          <Stack gap={5}>
            <Flex flexDirection={"column"}>
              <Text {...style.xsBold}>
                Sales by Time of Day{" "}
                <chakra.span color="#6B6B6B">(Last 24 hours)</chakra.span>
              </Text>
            </Flex>
            <DoughnutChart />
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default DoughnutChartDetails;
