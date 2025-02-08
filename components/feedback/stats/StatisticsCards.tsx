'use client';

import { MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import StatCard from './StatCard';

const StatisticsCards = () => {
  const stats = [
    {
      icon: MessageSquare,
      title: 'Total Feedback',
      value: 1121,
      previousValue: 1002,
      percentageChange: 8.20,
      bgColor: 'bg-[#FFE8E8]'
    },
    {
      icon: CheckCircle,
      title: 'Feedback Selesai',
      value: 932,
      previousValue: 801,
      percentageChange: 2,
      bgColor: 'bg-[#FFE7E7]'
    },
    {
      icon: AlertCircle,
      title: 'Feedback Belum',
      value: 189,
      previousValue: 219,
      percentageChange: -3.1,
      bgColor: 'bg-[#FFF1F1]'
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