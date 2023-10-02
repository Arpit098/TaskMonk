import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Task 1',
    Done: 4,
    Todo: 2,
    amt: 24,
  },
  {
    name: 'Task 2',
    Done: 3,
    Todo: 1,
    amt: 20,
  },
  {
    name: 'Task 3',
    Done: 2,
    Todo: 9,
    amt: 19,
  },
  {
    name: 'Task 4',
    Done: 2,
    Todo: 3,
    amt: 20,
  },
  {
    name: 'Task 5',
    Done: 1,
    Todo: 4,
    amt: 21
  },
];

const Graph = () => {
  return (
    <>
    <div className="heading" style={{fontFamily:"serif", fontSize:"2.1rem", marginLeft:"16px"}}>
       Analytics
    </div>
    <div style={{ width: '100%', height: 420 }}>
    <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Todo" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="Done" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  </div>
  </>
  )
}

export default Graph
