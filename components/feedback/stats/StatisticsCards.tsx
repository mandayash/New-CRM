'use client';

import { MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: number;
  previousValue: number;
  percentageChange: number;
}

const StatCard = ({
  icon: Icon,
  title,
  value,
  previousValue,
  percentageChange,
}: StatCardProps) => {
  const isIncrease = percentageChange > 0;
  
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          {/* Left Section */}
          <div className="flex items-start gap-3 sm:gap-4 min-w-0">
            {/* Icon container */}
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
            
            {/* Title and value */}
            <div className="flex flex-col min-w-0">
              <p className="text-xs sm:text-sm text-gray-600 truncate">{title}</p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mt-0.5 sm:mt-1 truncate">
                {value.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center sm:items-end justify-between sm:justify-end sm:flex-col gap-2 sm:gap-1 flex-shrink-0 ml-auto">
            {/* Percentage change */}
            <div className={`flex items-center ${
              isIncrease ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {isIncrease ? '↑' : '↓'} {Math.abs(percentageChange)}%
              </span>
            </div>
            
            {/* Previous value info */}
            <div className="flex flex-col items-end">
              <div className="text-[10px] sm:text-xs text-gray-500 text-right">
                <span className="sm:block truncate">{title}</span>
                <span className="ml-1 sm:ml-0 sm:block">Bulan Lalu</span>
              </div>
              <span className="text-xs sm:text-sm text-red-600 font-medium whitespace-nowrap">
                {previousValue.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatisticsCards = () => {
  const stats = [
    {
      icon: MessageSquare,
      title: 'Total Feedback',
      value: 1121,
      previousValue: 1002,
      percentageChange: 8.20,
    },
    {
      icon: CheckCircle,
      title: 'Feedback Selesai',
      value: 932,
      previousValue: 801,
      percentageChange: 2,
    },
    {
      icon: AlertCircle,
      title: 'Feedback Belum',
      value: 189,
      previousValue: 219,
      percentageChange: -3.1,
    }
  ];

  return (
    <div className="pt-12 sm:pt-6"> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsCards;