'use client';

import { Circle, Trophy } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface LevelCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  bgColor: string;
}

const LevelCard = ({ icon, count, label, bgColor }: LevelCardProps) => {
  return (
    <div className={`inline-flex items-center gap-2 p-3 rounded-lg ${bgColor}`}>
      <div>{icon}</div>
      <div>
        <p className="text-lg font-bold">{count.toLocaleString()}</p>
        <p className="text-sm">{label}</p>
      </div>
    </div>
  );
};

const LevelSummaryCard = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {/* Title Section */}
          <div className="flex items-center gap-2">
            <div className="bg-[#FFF9E7] p-2 rounded-lg">
              <Trophy className="text-[#FFD23D] w-5 h-5" />
            </div>
            <span className="font-medium whitespace-nowrap">Poin Level</span>
          </div>

          {/* Level Cards */}
          <div className="flex items-center gap-3">
            <LevelCard 
              icon={<Circle className="w-4 h-4 text-gray-400" fill="currentColor" />}
              count={311172}
              label="Silver Level"
              bgColor="bg-gray-100"
            />
            <LevelCard 
              icon={<Circle className="w-4 h-4 text-[#FFD23D]" fill="currentColor" />}
              count={77792}
              label="Gold Level"
              bgColor="bg-[#FFF9E7]"
            />
            <LevelCard 
              icon={<Circle className="w-4 h-4 text-[#B09FFF]" fill="currentColor" />}
              count={43429}
              label="Platinum Level"
              bgColor="bg-[#F4F1FF]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelSummaryCard;