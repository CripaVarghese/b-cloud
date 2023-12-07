import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardBody, Text, chakra } from "@chakra-ui/react";
import { style } from "../styles";

export default function Chart(props) {
  // eslint-disable-next-line react/prop-types
  const { data, width, height, color, text } = props;
  return (
    <Card
      boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      width={width}
      height={height}
    >
      <CardBody>
        <Text {...style.xsBold}>
          {text} <chakra.span color="#6B6B6B">(Last 24 hours)</chakra.span>
        </Text>
        <ResponsiveContainer height="94%">
          <BarChart
            data={data}
            margin={{
              top: 35,
              right: -30,
              left: -30,
              bottom: 5,
            }}
            barSize={15}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 50, right: 50 }}
              style={{
                fontFamily: "Work sans",
                fontSize: "10",
                fontWeight: "extrabold",
              }}
            />
            <YAxis
              axisLine={false}
              style={{
                fontFamily: "Work sans",
                fontSize: "10",
                fontWeight: "extrabold",
              }}
            />
            <Tooltip
              wrapperStyle={{
                fontFamily: "Work Sans",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            />
            <CartesianGrid vertical={false} horizontal={true} />
            <Bar dataKey="value" fill={color} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  );
}
