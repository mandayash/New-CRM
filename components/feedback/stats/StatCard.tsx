// Untuk satu card di page Feedback
'use client';

import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  previousValue: number;
  percentageChange: number;
  bgColor?: string; 
  valueColor?: string;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  previousValue,
  percentageChange,
  valueColor = '#CF0000'
}: StatCardProps) => {
  const isIncrease = percentageChange > 0;
  
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Icon with consistent background styling */}
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-50">
              <Icon className="w-6 h-6 text-red-600" />
            </div>
            
            {/* Title and value */}
            <div className="flex flex-col">
              <p className="text-base text-gray-600">{title}</p>
              <p className="text-2xl font-semibold mt-1 text-primary" style={{ color: valueColor }}>
                {value.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Percentage change */}
          <div className="flex flex-col items-end">
            <div className={`flex items-center ${
              isIncrease ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="text-sm font-medium">
                {isIncrease ? '↑' : '↓'} {Math.abs(percentageChange)}%
              </span>
            </div>
            <div className="flex flex-col items-end text-xs text-gray-500 mt-1">
              <span>{title}</span>
              <span>Bulan Lalu</span>
              <span className="text-red-600 font-medium text-md">
                {previousValue.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};