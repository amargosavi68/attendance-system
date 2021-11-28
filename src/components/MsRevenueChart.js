import React from "react";
import {
     Line,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
     LineChart,
} from "recharts";

import { dashboard } from "../utils/dashboard.json";

const MsRevenueChart = () => {
     const data = dashboard.historical_data;

     return (
          <ResponsiveContainer width="100%" height="100%">
               <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                         top: 20,
                         right: 30,
                         left: 20,
                         bottom: 20,
                    }}
               >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                         type="monotone"
                         dataKey="amt"
                         stroke="#8884d8"
                         activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="ra" stroke="#82ca9d" />
               </LineChart>
          </ResponsiveContainer>
     );
};

export default MsRevenueChart;
