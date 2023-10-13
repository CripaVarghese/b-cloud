import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  {name: '06:00', value: 40},
  {name: '07:00', value: 28},
  {name: '08:00', value: 32},
  {name: '09:00', value: 12},
  {name: '10:00', value: 18},
  {name: '11:00', value: 20},
  {name: '12:00', value: 35},
  {name: '13:00', value: 4},
  {name: '14:00', value: 15},
  {name: '15:00', value: 11},
  {name: '16:00', value: 15},
  {name: '17:00', value: 28}
];

const SimpleBarChart = ({color}) => (
  <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" width={200} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill={color} />
  </BarChart>
);

export default SimpleBarChart;
