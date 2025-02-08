
import DashboardStats from "@/components/dashboard/DashboardStats";
import UsersBarChart from "@/components/dashboard/UsersBarChart";
import RatingStats from "@/components/dashboard/RatingStats";
import FeedbackData from "@/components/dashboard/FeedbackData";
import LevelStats from "@/components/dashboard/LevelStats";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        <UsersBarChart />
        <RatingStats />
        <FeedbackData />
        <LevelStats />
      </div>
    </div>
  );
}