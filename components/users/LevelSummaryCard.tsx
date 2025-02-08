'use client';

import { Circle, Trophy } from 'lucide-react';


interface LevelCardProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  bgColor: string;
}

const LevelCard = ({ icon, count, label, bgColor }: LevelCardProps) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${bgColor}`}>
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
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-[#FFF9E7] p-2 rounded-lg">
          <Trophy className="text-[#FFD23D]" />
        </div>
        <span>Poin Level</span>
      </div>
      <div className="flex gap-4">
        <LevelCard 
          icon={<Circle className="text-gray-400" fill="currentColor" />}
          count={311172}
          label="Silver Level"
          bgColor="bg-gray-100"
        />
        <LevelCard 
          icon={<Circle className="text-[#FFD23D]" fill="currentColor" />}
          count={77792}
          label="Gold Level"
          bgColor="bg-[#FFF9E7]"
        />
        <LevelCard 
          icon={<Circle className="text-[#B09FFF]" fill="currentColor" />}
          count={43429}
          label="Platinum Level"
          bgColor="bg-[#F4F1FF]"
        />
      </div>
    </div>
  );
};

export default LevelSummaryCard;