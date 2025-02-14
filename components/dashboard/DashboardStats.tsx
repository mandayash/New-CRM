import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Share2, FileText, CircleDollarSign } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="bg-white overflow-hidden">
      <CardContent className="flex items-center p-4 sm:p-6">
        <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50">
          {icon}
        </div>
        <div className="ml-3 sm:ml-4 min-w-0"> {/* min-w-0 untuk memungkinkan truncate bekerja */}
          <p className="text-xs sm:text-sm text-gray-600 truncate">{title}</p>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold mt-0.5 sm:mt-1 truncate">
            {value.toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatItem {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const DashboardStats: React.FC = () => {
  const stats: StatItem[] = [
    {
      title: "Total Pengguna",
      value: 472322,
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
    },
    {
      title: "Total Feedback",
      value: 127981,
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
    },
    {
      title: "Total Point",
      value: 432932,
      icon: <CircleDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
    },
    {
      title: "Total Artikel",
      value: 76,
      icon: <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
    }
  ];

  return (
    <div className="pt-12 sm:pt-6"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;