import { Stack } from "@chakra-ui/react";
import Chart from "./Chart";
import React from "react";

const ChartUnitSold = () => {
  return (
    <Stack w="100%" justifyContent={"space-between"} gap={"0"}>
      <Chart
        color="#0063FF"
        data={data}
        width="99%"
        height={{ lg: 370, "2xl": 400 }}
        text={"Units Sold"}
      />
    </Stack>
  );
};
const data = [
  { name: "06:00", value: 40 },
  { name: "07:00", value: 28 },
  { name: "08:00", value: 32 },
  { name: "09:00", value: 12 },
  { name: "10:00", value: 18 },
  { name: "11:00", value: 20 },
  { name: "12:00", value: 35 },
  { name: "13:00", value: 4 },
  { name: "14:00", value: 15 },
  { name: "15:00", value: 11 },
  { name: "16:00", value: 15 },
  { name: "17:00", value: 28 },
];

export default ChartUnitSold;
