import ChartRevenue from "./ChartRevenue";
import ChartUnitSold from "./ChartUnitSold";
import DoughnutChartDetails from "./CustomProduct";
import InsightsHeader from "./InsightsHeader";
import StatusDetails from "./StatusDetails";
import { Stack } from "@chakra-ui/react";

const Details = () => {
  return (
    <Stack
      w={{ base: "80%", md: "60%", lg: "74%" }}
      justifyContent={"space-between"}
      gap="20px"
    >
      <StatusDetails />
      <Stack
        // flexDirection={{ base: "column", md: "column", lg: "row" }}
        w={{ md: "100%" }}
        justifyContent={"space-between"}
      >
        <InsightsHeader />
        <Stack
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap="20px"
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
