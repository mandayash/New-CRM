'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface LevelData {
  level: string;
  count: number;
  percentage: number;
  color: string;
}

const LevelStats = () => {
  const totalPoin = 432932;
  
  const levels: LevelData[] = [
    {
      level: "Silver Level",
      count: 311172,
      percentage: 72,
      color: "#ADADAD"
    },
    {
      level: "Gold Level",
      count: 77792,
      percentage: 18,
      color: "#FFD23D"
    },
    {
      level: "Platinum Level",
      count: 43429,
      percentage: 10,
      color: "#B09FFF"
    }
  ];

  const LevelRow = ({ level, count, percentage }: LevelData) => {
    // Helper function untuk mendapatkan gradient style berdasarkan level
    const getGradientStyle = (level: string) => {
      switch (level) {
        case "Silver Level":
          return "linear-gradient(198deg, #ADADAD 20.34%, #D2D2D2 29.06%, #BBB 50.52%, #A0A0A0 58.25%, #959595 86.63%)";
        case "Gold Level":
          return "linear-gradient(179deg, #FFD23D 35.57%, #EFD787 42.04%, #E1B831 57.97%, #EFD787 63.71%, rgba(242, 186, 0, 0.47) 84.77%)";
        case "Platinum Level":
          return "linear-gradient(244deg, #B09FFF 37.63%, #8C7BDB 41.94%, #BEB0FF 52.54%, #8C7BDB 56.36%, #CBC0FF 70.38%)";
        default:
          return "";
      }
    };
    
    return (
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Percentage badge with gradient background */}
          <div 
            className="px-3 py-1 rounded-lg"
            style={{
              backgroundImage: getGradientStyle(level)
            }}
          >
            <span className="text-sm font-bold text-text">{percentage}%</span>
          </div>
          <span className="text-sm font-medium">{level}</span>
        </div>
        <span className="text-sm font-bold">{count.toLocaleString()}</span>
      </div>
    );
  };

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium text-primary">Statistik Level Poin</CardTitle>
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>Tahun Ini</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-[160px] h-[160px] mx-auto mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <defs>
                <linearGradient id="silverGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="20.34%" stopColor="#ADADAD" />
                  <stop offset="29.06%" stopColor="#D2D2D2" />
                  <stop offset="50.52%" stopColor="#BBB" />
                  <stop offset="58.25%" stopColor="#A0A0A0" />
                  <stop offset="86.63%" stopColor="#959595" />
                </linearGradient>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="35.57%" stopColor="#FFD23D" />
                  <stop offset="42.04%" stopColor="#EFD787" />
                  <stop offset="57.97%" stopColor="#E1B831" />
                  <stop offset="63.71%" stopColor="#EFD787" />
                  <stop offset="84.77%" stopColor="rgba(242, 186, 0, 0.47)" />
                </linearGradient>
                <linearGradient id="platinumGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="37.63%" stopColor="#B09FFF" />
                  <stop offset="41.94%" stopColor="#8C7BDB" />
                  <stop offset="52.54%" stopColor="#BEB0FF" />
                  <stop offset="56.36%" stopColor="#8C7BDB" />
                  <stop offset="70.38%" stopColor="#CBC0FF" />
                </linearGradient>
              </defs>
              <Pie
                data={levels}
                dataKey="percentage"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                stroke="#FBFBFC"
                strokeWidth={3}
              >
                {levels.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={`url(#${entry.level.toLowerCase().split(' ')[0]}Gradient)`}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[#303030] text-sm">Total Poin</p>
            <p className="text-primary text-xl font-bold">{totalPoin.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-[15px]">
          {levels.map((level) => (
            <LevelRow key={level.level} {...level} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelStats;