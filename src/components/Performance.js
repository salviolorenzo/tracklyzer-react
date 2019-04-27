import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Performance = props => {
  let data;
  if (props.item.performance) {
    data = props.item.performance.map(object => {
      return {
        name: object.year,
        uv: parseFloat(object.income.substring(1)),
        pv: parseFloat(object.profit.substring(1))
        // amt: Math.floor(Math.random() * 10000000)
      };
    });
  } else {
    data = [];
  }
  return (
    <div className="performanceChart">
      <LineChart
        width={275}
        height={250}
        data={data}
        margin={{
          left: 5,
          right: 5
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="Profit"
          type="monotone"
          dataKey="pv"
          stroke="rgb(0, 140, 255)"
          activeDot={{ r: 8 }}
        />
        <Line name="Income" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Performance;
