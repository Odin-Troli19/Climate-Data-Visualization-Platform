import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ClimateDataPoint } from '../../services/api';

interface TemperatureChartProps {
  data: ClimateDataPoint[];
  loading: boolean;
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ data, loading }) => {
  if (loading) {
    return <div>Loading chart data...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available for the selected range.</div>;
  }
  
  // Format timestamp for display
  const formattedData = data.map(d => ({
    ...d,
    date: new Date(d.timestamp).toLocaleDateString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={formattedData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="temperature" 
          stroke="#8884d8" 
          activeDot={{ r: 8 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;