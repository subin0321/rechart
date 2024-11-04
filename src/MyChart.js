import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import data from './data';

const App = () => {
  // 날짜와 값을 매핑
  const chartData = data.전국.map((value, index) => ({
    date: data.시도별[index],
    value: value,
  }));

  return (
    <div>
      <h1>소비자물가지수</h1>
      <p>1997.03~2024.09</p>
      <LineChart
        width={1500} 
        height={400} 
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default App;
