import StatusDetails from "./StatusDetails";
import { Stack } from "@chakra-ui/react";
import CustomProduct from "./CustomProduct";
import SelectDuration from "./SelectDuration";
import Chart from "./Chart";

const Details = () => {
  return (
    <Stack
      // w={{ base: "80%", md: "55%", lg: "100%", "2xl": "75%" }}
      h={"89.5%"}
      justifyContent={{
        base: "80%",
        lg: "space-between",
        "2xl": "space-between",
      }}
      gap={{ md: "5", lg: "2", "2xl": "5" }}
    >
      <StatusDetails />
      <Stack gap={"5"}>
        <Stack
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          w={{ md: "100%" }}
          h={{ md: "50%", lg: "100%" }}
          gap={{ md: "5" }}
          justifyContent={"space-between"}
        >
          <CustomProduct />
          <Stack w="100%" justifyContent={"space-between"} gap={"0"}>
            <SelectDuration />
            <Chart
              color="#0063FF"
              data={data1Default}
              width={{ md: "100%", lg: "100%", "2xl": "100%" }}
              height={{ md: 390, lg: 370, "2xl": 485 }}
              text={"Units Sold"}
            />
          </Stack>
        </Stack>

        <Chart
          color="#00CD4D"
          data={data2}
          width={{ md: "100%", lg: "100%", "2xl": "100%" }}
          height={{ md: 390, lg: 370, "2xl": 400 }}
          text={"Revenue"}
        />
      </Stack>
    </Stack>
  );
};

const data1Default = [
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

const data2 = [
  { name: "06:00", value: 10 },
  { name: "07:00", value: 7.5 },
  { name: "08:00", value: 8.3 },
  { name: "09:00", value: 4.1 },
  { name: "10:00", value: 5.5 },
  { name: "11:00", value: 6 },
  { name: "12:00", value: 9 },
  { name: "13:00", value: 1.5 },
  { name: "14:00", value: 5.5 },
  { name: "15:00", value: 4 },
  { name: "16:00", value: 2 },
  { name: "17:00", value: 8 },
];

export default Details;
