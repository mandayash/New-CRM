'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

interface RatingData {
  stars: number;
  percentage: number;
  count: number;
  fill: string;
}

const RatingStats: React.FC = () => {
  const ratings: RatingData[] = [
    { stars: 5, percentage: 55, count: 275068, fill: '#630022' },
    { stars: 4, percentage: 19, count: 97320, fill: '#950019' },
    { stars: 3, percentage: 23, count: 122543, fill: '#CF0000' },
    { stars: 2, percentage: 21, count: 113502, fill: '#E5B12F' },
    { stars: 1, percentage: 10, count: 52312, fill: '#F7DC81' }
  ];

  const total = ratings.reduce((sum, item) => sum + item.count, 0);

  const RatingBar: React.FC<RatingData> = ({ stars, percentage, count, fill }) => {
    return (
      <div className="flex items-center gap-3 w-full min-w-[300px]">
        <div 
          className="w-6 h-6 rounded-sm flex-shrink-0"
          style={{ backgroundColor: fill }}
        />
        <div className="flex items-center gap-1 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto flex-shrink-0">
          <span className="text-sm font-semibold whitespace-nowrap">{percentage}%</span>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            ({count.toLocaleString()})
          </span>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full h-full overflow-hidden">
      <CardHeader className="px-4 sm:px-6 pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
          <div className="min-w-0 w-full sm:w-auto"> {/* Added min-w-0 for truncate */}
            <CardTitle className="text-base sm:text-lg text-primary font-medium truncate">
              Penilaian
            </CardTitle>
          </div>
          <select className="w-full sm:w-auto border rounded-lg px-3 py-2 text-xs sm:text-sm bg-white flex-shrink-0">
            <option>Tahun Ini</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col pt-6 sm:pt-8 px-4 sm:px-6">
        {/* Pie Chart */}
        <div className="relative w-full max-w-[200px] aspect-square mx-auto mb-8">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full">
            <p className="text-sm text-gray-600">Total Penilaian</p>
            <p className="text-xl md:text-2xl font-bold text-primary">{total.toLocaleString()}</p>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ratings}
                dataKey="percentage"
                nameKey="stars"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                startAngle={90}
                endAngle={-270}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Wrapper untuk konten yang bisa di-scroll */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent pb-2">
          <div className="space-y-4 min-w-[350px]">
            {ratings.map((rating) => (
              <RatingBar key={rating.stars} {...rating} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingStats;