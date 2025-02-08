// Untuk satu card di page Feedback

'use client';

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: number;
  previousValue: number;
  percentageChange: number;
  bgColor: string;
  valueColor?: string;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  previousValue,
  percentageChange,
  bgColor,
  valueColor = '#CF0000'
}: StatCardProps) => {
  const isIncrease = percentageChange > 0;
  
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-2 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          {/* Icon with background */}
          <div className={`p-2 rounded-lg ${bgColor}`}>
            <Icon className="w-6 h-6 text-[#CF0000]" />
          </div>
          
          {/* Title and value */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">{title}</span>
            <span className="text-2xl font-bold" style={{ color: valueColor }}>
              {value.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Percentage change */}
        <div className="flex flex-col items-end">
          <div className={`flex items-center ${
            isIncrease ? 'text-green-600' : 'text-red-600'
          }`}>
            <span className="text-xs">
              {isIncrease ? '↑' : '↓'} {Math.abs(percentageChange)}%
            </span>
          </div>
          <div className="flex flex-col items-end text-xs text-gray-500">
            <span>{title}</span>
            <span>Bulan Lalu</span>
            <span className="text-[#CF0000]">{previousValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;