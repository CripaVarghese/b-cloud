import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Morning 40%","Afternoon 10%","Evening 50%"],
  datasets: [
    {
      label: "# of Votes",
      options: {
        width:"1",
        height:"1",
        },
      data: [50,40,10],
      backgroundColor: [
        "#5E9CFF",
        "#0063FF",
        "#98C1FE",
      ],
      borderColor: [
        "#0063FF",
        "#5E9CFF",
        "#98C1FE"
      ],
      borderWidth: 1,
    }
  ]
};

export function DoughnutDetails() {
  return <Doughnut data={data} />;
}