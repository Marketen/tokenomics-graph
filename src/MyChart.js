import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const MyChart = () => {
  const [data, setData] = useState([]);

  // fetches already built data "data.json" from the server
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  // render the chart
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 50,
          left: 30,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        <Area type="monotone" dataKey="Public Sale" stackId="1" stroke="#d0ed57" fill="#d0ed57" />
        <Area type="monotone" dataKey="Community Incentive" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="Foundation" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="Seed (Launch Partners)" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="Private Round" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="Team" stackId="1" stroke="#ffc658" fill="#ffc658" />
        <Area type="monotone" dataKey="Partners & Advisors" stackId="1" stroke="#a4de6c" fill="#a4de6c" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MyChart;
