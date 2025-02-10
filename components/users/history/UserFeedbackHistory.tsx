'use client';

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Trophy, Filter, Table, Search, Star, Edit, Trash, FileImage } from 'lucide-react';
import Image from 'next/image';

// User Info Card Component
const UserInfoCard = () => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <Image
            src="/path-to-user-image.jpg"
            alt="User Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-gray-500">Nama:</p>
              <p className="font-medium">Anandita Nabilia Ramadhani</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">User Id:</p>
              <p className="font-medium">US-1247</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email:</p>
              <p className="font-medium">anandita0211@gmail.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">No Telepon:</p>
              <p className="font-medium">081234567891</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Stats Cards Component
const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <MessageSquare className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Feedback</p>
              <p className="text-2xl font-semibold">43</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#FFF9E7] p-3 rounded-lg">
              <Trophy className="w-5 h-5 text-[#FFD23D]" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Poin Level</p>
              <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">1,131</p>
                <span className="px-3 py-1 bg-[#FFF9E7] text-sm rounded-full text-[#FFD23D]">
                  Gold Level
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Feedback Status Filter
const FeedbackFilter = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2">
        <button className="px-4 py-2 rounded-lg bg-[#CF0000] text-white">
          Semua
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-100">
          Terkirim
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-100">
          Draft
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-100">
          Gagal
        </button>
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
  );
};

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating 
              ? "fill-yellow-400 text-yellow-400" 
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: 'Belum' | 'Selesai' }) => {
  const styles = {
    'Belum': 'bg-red-100 text-red-600',
    'Selesai': 'bg-green-100 text-green-600',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>
      {status}
    </span>
  );
};

// Feedback History Table
const FeedbackTable = () => {
  return (
    <div className="rounded-lg border">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-4 p-4">
              <input type="checkbox" className="rounded" />
            </th>
            <th className="text-left p-4">Feedback Id</th>
            <th className="text-left p-4">Tanggal</th>
            <th className="text-left p-4">Jenis Feedback</th>
            <th className="text-left p-4">Tanggal LRT</th>
            <th className="text-left p-4">Stasiun</th>
            <th className="text-left p-4">Feedback</th>
            <th className="text-left p-4">Dokumentasi</th>
            <th className="text-left p-4">Penilaian</th>
            <th className="text-left p-4">Status</th>
            <th className="text-right p-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr className="border-t">
            <td className="p-4">
              <input type="checkbox" className="rounded" />
            </td>
            <td className="p-4">UF-1245</td>
            <td className="p-4">2028-02-27 04:28:48</td>
            <td className="p-4">Kritik dan Saran</td>
            <td className="p-4">2028-02-27</td>
            <td className="p-4">DJKA</td>
            <td className="p-4 max-w-xs">Ada beberapa pintu otomatis yang tidak...</td>
            <td className="p-4">
              <span className="text-gray-500">DSC21012.JPG</span>
            </td>
            <td className="p-4">
              <StarRating rating={4} />
            </td>
            <td className="p-4">
              <StatusBadge status="Belum" />
            </td>
            <td className="p-4">
              <div className="flex justify-end gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Main Page Component
export const UserFeedbackHistory = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-[#CF0000]">
            Data Pengguna | <span className="text-black">Lihat Riwayat</span>
          </h1>
        </div>
  
        <div className="space-y-6">
          <UserInfoCard />
          <StatsCards />
          <FeedbackFilter />
          <FeedbackTable />
        </div>
      </div>
    );
  };