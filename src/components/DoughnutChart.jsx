import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Morning 40%", value: 400, color: "#0088FE" },
  { name: "Afternoon 10%", value: 300, color: "#0088FE" },
  { name: "Evening 50%", value: 300, color: "#0088FE" },
];

const COLORS = ["#0063FF", "#5E9CFF", "#98C1FE"];

const DoughnutChart = () => {
  return (
    <PieChart width={200} height={300}>
      <Pie
        data={data}
        // cx={500}
        // cy={200}
        // fill="#8884d8"
        // label
        innerRadius={50}
        outerRadius={80}
        paddingAngle={0}
        dataKey="value"
        isAnimationActive={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        align="left"
        layout="horizontal"
        wrapperStyle={{
          width: "50%",
          left: "0%",
          top: "0%",
          position: "absolute",
          fill: "#8884d8",
          fontSize: "10px",
        }}
      />
    </PieChart>
  );
};

export default DoughnutChart;
