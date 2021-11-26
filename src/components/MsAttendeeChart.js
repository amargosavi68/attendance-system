import React from 'react';
import {
     ComposedChart,
     Line,
     Bar,
     XAxis,
     YAxis,
     CartesianGrid,
     Tooltip,
     Legend,
     ResponsiveContainer,
} from 'recharts';

import { dashboard } from "../utils/dashboard.json";


const MsAttendeeChart = () => {

     const data = dashboard.historical_data;

     return (
          <ResponsiveContainer className="mt-3 mb-2" width="100%" height="100%">
               <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                         top: 20,
                         right: 10,
                         bottom: 20,
                         left: 10,
                    }}
               >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ta" barSize={20} fill="#195258" />
                    <Line type="monotone" dataKey="ra" stroke="#ff7300" />
               </ComposedChart>
          </ResponsiveContainer>
     )
}

export default MsAttendeeChart
