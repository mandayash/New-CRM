// app/users/page.tsx
'use client';

import DashboardStats from '@/components/dashboard/DashboardStats';
import LevelSummaryCard from '@/components/users/LevelSummaryCard';
import UsersTable from '@/components/users/UsersTable';
import { Users, MessageSquare, CoinsIcon, Filter, Table, Search } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      
      {/* Cards Container */}
      <div className="grid gap-6">
        {/* Stats Row */}
        <DashboardStats />

        {/* Level Summary Card */}
        <LevelSummaryCard />

        {/* Filter and Search */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-[#CF0000] text-white">Semua</button>
            <button className="px-4 py-2 rounded-lg bg-gray-100">Silver Level</button>
            <button className="px-4 py-2 rounded-lg bg-gray-100">Gold Level</button>
            <button className="px-4 py-2 rounded-lg bg-gray-100">Platinum Level</button>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search placeholder"
                className="w-[320px] h-[46px] pl-10 pr-4 rounded-lg bg-gray-100"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="px-4 py-2 rounded-lg border flex items-center gap-2">
              <Filter size={20} />
              Filter
            </button>
            <button className="px-4 py-2 rounded-lg border flex items-center gap-2">
              <Table size={20} />
              Tampilkan Tabel
            </button>
          </div>
        </div>

        {/* Users Table */}
        <UsersTable />
      </div>
    </div>
  );
}