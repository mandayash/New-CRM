'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UsersBarChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Chart = () => {
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
      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] sm:min-w-[700px] lg:min-w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ 
                top: 10, 
                right: 20, 
                left: 0, 
                bottom: 0 
              }}
              barSize={30}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D64017" />
                  <stop offset="100%" stopColor="#FFB547" />
                </linearGradient>
              </defs>
              <CartesianGrid 
                vertical={false} 
                strokeDasharray="3 3"
                stroke="#E4E4E4"
              />
              <XAxis 
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fill: '#666', 
                  fontSize: 11,
                  fontFamily: 'var(--sf-pro-display)'
                }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ 
                  fill: '#666', 
                  fontSize: 11,
                  fontFamily: 'var(--sf-pro-display)'
                }}
                tickFormatter={(value: number) => `${value/1000}K`}
                width={45}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar
                dataKey="users"
                fill="url(#colorGradient)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full h-full overflow-hidden">
      <CardHeader className="px-4 sm:px-6 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
          <div className="min-w-0 w-full sm:w-auto"> 
            <CardTitle className="text-base sm:text-lg font-medium text-primary truncate">
              Total Pengguna Aplikasi
            </CardTitle>
            <div className="mt-1 min-w-0"> 
              <p className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold truncate">1,121</p>
              <p className="text-xs sm:text-sm text-gray-500 truncate font-medium">Total Pengguna</p>
            </div>
          </div>
          <select className="w-full sm:w-auto border rounded-lg px-3 py-2 text-xs sm:text-sm bg-white flex-shrink-0">
            <option>Tahun Ini</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-4 sm:px-6"> 
        {isClient ? <Chart /> : (
          <div className="w-full h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Loading chart...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UsersBarChart;