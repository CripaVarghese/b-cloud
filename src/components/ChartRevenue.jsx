import Chart from "./Chart";

const ChartRevenue = () => {
  return (
    <Chart
      color="#00CD4D"
      data={data}
      width="99%"
      height={{ md: 390, lg: 370, "2xl": 400 }}
      text={"Revenue"}
    />
  );
};

const data = [
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

export default ChartRevenue;
