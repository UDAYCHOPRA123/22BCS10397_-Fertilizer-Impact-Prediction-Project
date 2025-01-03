import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Jan', yield: 4000, prediction: 4400 },
  { month: 'Feb', yield: 3000, prediction: 3200 },
  { month: 'Mar', yield: 2000, prediction: 2400 },
  { month: 'Apr', yield: 2780, prediction: 2900 },
  { month: 'May', yield: 1890, prediction: 2100 },
  { month: 'Jun', yield: 2390, prediction: 2500 },
];

export function YieldTrends() {
  const [period, setPeriod] = useState('6m');
  const periods = ['1m', '3m', '6m', '1y'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Yield Trends</h2>
        <div className="flex space-x-2">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded ${
                period === p
                  ? 'bg-green-100 text-green-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="yield"
              stroke="#16a34a"
              name="Actual Yield"
            />
            <Line
              type="monotone"
              dataKey="prediction"
              stroke="#4ade80"
              name="Predicted Yield"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}