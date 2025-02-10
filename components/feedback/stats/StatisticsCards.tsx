'use client';

import { MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ElementType;  // Ubah dari LucideIcon ke ElementType
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
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            {/* Icon container */}
            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-50">
              <Icon className="w-6 h-6 text-red-600" />
            </div>
            
            {/* Title and value */}
            <div className="flex flex-col">
              <p className="text-sm text-gray-600">{title}</p>
              <p className="text-3xl font-black text-primary mt-1">{value.toLocaleString()}</p>
            </div>
          </div>

          {/* Percentage change and previous value */}
          <div className="flex flex-col items-end">
            <div className={`flex items-center ${
              isIncrease ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="text-sm font-medium">
                {isIncrease ? '↑' : '↓'} {Math.abs(percentageChange)}%
              </span>
            </div>
            <div className="flex flex-col items-end text-sm text-gray-500 mt-1">
              <span>{title}</span>
              <span>Bulan Lalu</span>
              <span className="text-red-600 font-medium">
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </div>
  );
};

export default StatisticsCards;