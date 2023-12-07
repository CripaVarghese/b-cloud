import { useState } from "react";
import ChartUnitSold from "./ChartUnitSold";
import ChartRevenue from "./ChartRevenue";
import DoughnutChartDetails from "./DoughnutChartDetails";
import InsightsHeader from "./InsightsHeader";
import StatusDetails from "./StatusDetails";
import { Stack } from "@chakra-ui/react";

const Details = () => {
  const expandedCardWidth = { base: "100%", md: "100%", lg: "100%" };
  const collapsedCardWidth = { base: "80%", md: "40%", lg: "38%" };

  // eslint-disable-next-line no-unused-vars
  const [isExpanded, setExpanded] = useState(true);
  return (
    <Stack
      w={isExpanded ? expandedCardWidth : collapsedCardWidth}
      justifyContent={"space-between"}
      gap="20px"
    >
      <StatusDetails />
      <Stack justifyContent={"space-between"}>
        <InsightsHeader />
        <Stack
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap="20px"
          w="100%"
        >
          <DoughnutChartDetails />
          <ChartUnitSold />
        </Stack>
      </Stack>
      <ChartRevenue />
    </Stack>
  );
};

export default Details;
