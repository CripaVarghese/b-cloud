import ChartUnitSold from "./ChartUnitSold";
import ChartRevenue from "./ChartRevenue";
import DoughnutChartDetails from "./DoughnutChartDetails";
import InsightsHeader from "./InsightsHeader";
import StatusDetails from "./StatusDetails";
import { Stack } from "@chakra-ui/react";

const ProductDashboard = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      gap="20px"
      w={{ base: "85%", md: "70%", lg: "90%", xl: "85%" }}
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

export default ProductDashboard;
