import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Galaxy S24",
      cette_semaine: 2,
      semaine_passee: 40,
      amt: 2400,
    },
    {
      name: "Iphone 15",
      cette_semaine: 0,
      semaine_passee: 30,
      amt: 2210,
    },
    {
      name: "Galaxy Z Fold5",
      cette_semaine: 9,
      semaine_passee: 20,
      amt: 2290,
    },
    {
      name: "Iphone 15 pro",
      cette_semaine: 39,
      semaine_passee: 27,
      amt: 2000,
    },
    {
      name: "Iphone 15 pro max",
      cette_semaine: 48,
      semaine_passee: 18,
      amt: 2181,
    },
    {
      name: "Galaxy Z-flip",
      cette_semaine: 38,
      semaine_passee: 23,
      amt: 2500,
    },
  ];

  return (
    <div>
      <h2>Récapitulatif de la semaine</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="cette_semaine"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="semaine_passee" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
