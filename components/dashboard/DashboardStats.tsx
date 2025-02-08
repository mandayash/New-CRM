import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Share2, FileText, CircleDollarSign } from "lucide-react";


// Interface untuk props StatCard
interface StatCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
  }

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="bg-white">
      <CardContent className="flex items-center p-6">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-50">
          {icon}
        </div>
        <div className="ml-4">
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value.toLocaleString()}</p>
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

// Komponen utama yang berisi semua card statistik
const DashboardStats: React.FC = () => {
    const stats: StatItem[] = [
      {
        title: "Total Pengguna",
        value: 472322,
        icon: <Users className="w-6 h-6 text-red-600" />
      },
      {
        title: "Total Feedback",
        value: 127981,
        icon: <MessageSquare className="w-6 h-6 text-red-600" />
      },
      {
        title: "Total Point",
        value: 432932,
        icon: <CircleDollarSign className="w-6 h-6 text-red-600" />
      },
      {
        title: "Total Artikel",
        value: 76,
        icon: <FileText className="w-6 h-6 text-red-600" />
      }
    ]; 
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    );
  };
  
  export default DashboardStats;