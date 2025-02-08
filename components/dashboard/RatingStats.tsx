'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface RatingData {
  stars: number;
  percentage: number;
  count: number;
  backgroundColor: string;
}

const RatingStats: React.FC = () => {
  const ratings: RatingData[] = [
    { stars: 5, percentage: 55, count: 275068, backgroundColor: '#4A0404' },
    { stars: 4, percentage: 19, count: 97320, backgroundColor: '#8B0000' },
    { stars: 3, percentage: 23, count: 122543, backgroundColor: '#D64017' },
    { stars: 2, percentage: 21, count: 113502, backgroundColor: '#FFA500' },
    { stars: 1, percentage: 10, count: 52312, backgroundColor: '#FFD700' }
  ];

  const GaugeChart = () => {
    const total = 523126;
    
    // Fungsi untuk membuat arc path
    const createArcPath = (startAngle: number, endAngle: number, radius: number) => {
      const start = polarToCartesian(100, 80, radius, endAngle);
      const end = polarToCartesian(100, 80, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
      return [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
      ].join(' ');
    };

    // Konversi koordinat polar ke kartesian
    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    };

    return (
      <div className="relative w-full aspect-[2/1] max-w-[300px] mx-auto mb-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-600">Total Penilaian</p>
          <p className="text-3xl font-bold text-red-600">{total.toLocaleString()}</p>
        </div>
        <svg viewBox="0 0 200 100" className="w-full">
          {/* Arc sections */}
          {[
            { color: '#4A0404', start: 0, end: 36 },
            { color: '#8B0000', start: 36, end: 72 },
            { color: '#D64017', start: 72, end: 108 },
            { color: '#FFA500', start: 108, end: 144 },
            { color: '#FFD700', start: 144, end: 180 }
          ].map((section, index) => (
            <path
              key={index}
              d={createArcPath(section.start, section.end, 60)}
              fill="none"
              stroke={section.color}
              strokeWidth="20"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    );
  };

  const RatingBar: React.FC<RatingData> = ({ stars, percentage, count, backgroundColor }) => {
    return (
      <div className="flex items-center gap-3">
        <div 
          className="w-6 h-6 rounded-sm flex-shrink-0"
          style={{ backgroundColor }}
        />
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < stars ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-sm font-semibold">{percentage}%</span>
          <span className="text-sm text-gray-500">({count.toLocaleString()})</span>
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-red-600">Penilaian</CardTitle>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Tahun Ini</option>
          <option>2024</option>
          <option>2023</option>
        </select>
      </CardHeader>
      <CardContent>
        <GaugeChart />
        <div className="space-y-4">
          {ratings.map((rating) => (
            <RatingBar key={rating.stars} {...rating} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingStats;