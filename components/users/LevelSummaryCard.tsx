'use client';

import { Circle, Trophy } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface LevelCardProps {
  count: number;
  label: string;
  gradient: string;
}

const LevelCard = ({ count, label, gradient }: LevelCardProps) => {
  return (
    <div 
      className="flex items-center gap-2 py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg min-w-[150px] sm:min-w-[170px] hover:shadow-md transition-shadow"
      style={{ background: gradient }}
    >
      <div className="w-full">
        <p className="text-base sm:text-lg lg:text-xl font-bold truncate leading-tight text-[#303030]">
          {count.toLocaleString()}
        </p>
        <p className="text-[11px] sm:text-xs font-medium truncate text-[#404040]">
          {label}
        </p>
      </div>
    </div>
  );
};

const LevelSummaryCard = () => {
  const levels = [
    {
      count: 311172,
      label: "Silver Level",
      gradient: "linear-gradient(198deg, #ADADAD 20.34%, #D2D2D2 29.06%, #BBB 50.52%, #A0A0A0 58.25%, #959595 86.63%)",
    },
    {
      count: 77792,
      label: "Gold Level",
      gradient: "linear-gradient(179deg, #FFD23D 35.57%, #EFD787 42.04%, #E1B831 57.97%, #EFD787 63.71%, rgba(242, 186, 0, 0.47) 84.77%)",
    },
    {
      count: 43429,
      label: "Platinum Level",
      gradient: "linear-gradient(244deg, #B09FFF 37.63%, #8C7BDB 41.94%, #BEB0FF 52.54%, #8C7BDB 56.36%, #CBC0FF 70.38%)",
    }
  ];

  return (
    <Card className="bg-white overflow-hidden shadow-sm mt-6 mb-4 py-2">
      <CardContent className="h-[76px] sm:h-[92px] flex items-center px-5 py-4 sm:px-7 sm:py-6">
        <div className="flex items-center gap-5 sm:gap-6 w-full">
          {/* Title Section */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-[8px] bg-[#FCECAC] shadow-sm">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
            </div>
            <div>
              <p className="text-lg text-primary font-bold text-gray-800">Poin Level</p>
              <p className="text-xs text-gray-500 hidden sm:block">Statistik Level</p>
            </div>
          </div>

          {/* Level Cards - Scrollable Container */}
          <div className="overflow-x-auto flex-1 -mr-5 sm:-mr-7">
            <div className="flex items-center gap-3 sm:gap-4 pr-5 sm:pr-7 py-1">
              {levels.map((level, index) => (
                <LevelCard 
                  key={level.label}
                  count={level.count}
                  label={level.label}
                  gradient={level.gradient}
                />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelSummaryCard;