'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsersBarChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Chart = () => {
    // Kita import Recharts hanya jika di client side
    const {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      ResponsiveContainer,
    } = require('recharts');

    const data = [
      { month: 'Jan', users: 35000 },
      { month: 'Feb', users: 29000 },
      { month: 'Mar', users: 32000 },
      { month: 'Apr', users: 37000 },
      { month: 'Mei', users: 31000 },
      { month: 'Jun', users: 39311 },
      { month: 'Jul', users: 38000 },
      { month: 'Ags', users: 32000 },
      { month: 'Sep', users: 36000 },
      { month: 'Okt', users: 34000 },
      { month: 'Nov', users: 29000 },
      { month: 'Des', users: 31000 },
    ];

    const CustomTooltip = ({ active, payload }: any) => {
      if (active && payload && payload.length) {
        return (
          <div className="bg-white p-3 border rounded-lg shadow-lg">
            <p className="text-sm text-gray-600">{`${payload[0].payload.month} 2025`}</p>
            <p className="text-sm font-bold">
              {`${payload[0].value.toLocaleString()} Pengguna`}
            </p>
          </div>
        );
      }
      return null;
    };

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D64017" />
              <stop offset="100%" stopColor="#FFB547" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis 
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#666' }}
            tickFormatter={(value: number) => `${value/1000}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="users"
            fill="url(#colorGradient)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium">Total Pengguna Aplikasi</CardTitle>
            <div className="mt-1">
              <p className="text-3xl font-bold">1,121</p>
              <p className="text-sm text-gray-500">Total Pengguna</p>
            </div>
          </div>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Tahun Ini</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          {isClient ? <Chart /> : (
            <div className="w-full h-full flex items-center justify-center">
              <p>Loading chart...</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersBarChart;