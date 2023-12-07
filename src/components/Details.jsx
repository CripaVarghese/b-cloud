import { useState } from "react";
import ChartUnitSold from "./ChartUnitSold";
import ChartRevenue from "./ChartRevenue";
import DoughnutChartDetails from "./DoughnutChartDetails";
import InsightsHeader from "./InsightsHeader";
import StatusDetails from "./StatusDetails";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

const expandedCardWidth = { base: "100%", md: "100%", lg: "100%" };
const collapsedCardWidth = { base: "80%", md: "40%", lg: "38%" };

const Details = () => {
  // eslint-disable-next-line no-unused-vars
  const [isExpanded, setExpanded] = useState(true);
  return (
    <Stack
      w={isExpanded ? expandedCardWidth : collapsedCardWidth}
      justifyContent={"space-between"}
      gap="20px"
    >
      <StatusDetails />
      <Stack w={{ md: "100%" }} justifyContent={"space-between"}>
        <InsightsHeader />
        {/* <Stack
            flexDirection={{ base: "column", md: "column", lg: "row" }}
            gap="20px"
             w="100%"
          > */}

        <Grid
          templateColumns="repeat(5, 1fr)"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          gap="20px"
        >
          <GridItem colSpan={1}>
            <DoughnutChartDetails />
          </GridItem>
          <GridItem colStart={2} colEnd={6}>
            <ChartUnitSold />
          </GridItem>
        </Grid>

        {/* </Stack> */}
      </Stack>
      <ChartRevenue />
    </Stack>
  );
};

export default Details;
