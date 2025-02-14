'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { MessageSquare, Menu, Trophy, Filter, Table, Search, Star, Edit, Trash, FileImage } from 'lucide-react';
import Image from 'next/image';

// User Info Card Component
const UserInfoSection = () => {
  const goldLevelGradient = "linear-gradient(179deg, #FFD23D 35.57%, #EFD787 42.04%, #E1B831 57.97%, #EFD787 63.71%, rgba(242, 186, 0, 0.47) 84.77%)";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* User Info Card */}
      <Card className="lg:col-span-2 overflow-hidden">
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {/* Header */}
          <h2 className="text-xl text-primary font-medium text-gray-800">
            Informasi User
          </h2>

          {/* Content Container */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Profile Image */}
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/profile-placeholder.png"
                alt="User Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            
            {/* User Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Nama:</p>
                <p className="text-sm sm:text-base font-medium truncate">Anandita Nabilia Ramadhani</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">User Id:</p>
                <p className="text-sm sm:text-base font-medium">US-1247</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">Email:</p>
                <p className="text-sm sm:text-base font-medium truncate">anandita0211@gmail.com</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">No Telepon:</p>
                <p className="text-sm sm:text-base font-medium">081234567891</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <Card className="bg-white overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50 shadow-sm">
                <MessageSquare className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-lg text-primary font-medium text-gray-800">Total Feedback</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">43</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 flex items-center justify-center rounded-full bg-red-50 shadow-sm">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <div>
                <p className="text-lg text-primary font-medium text-gray-800">Poin Level</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold">1,131</p>
                  <div 
                    className="px-2 py-1 text-xs rounded-lg font-medium"
                    style={{ 
                      background: goldLevelGradient,
                      color: "#303030"
                    }}
                  >
                    Gold Level
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Feedback Status Filter
const FeedbackFilter = () => {
  const [activeStatus, setActiveStatus] = useState('Semua');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const statuses = ['Semua', 'Terkirim', 'Draft', 'Gagal'];

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`h-8 px-3 sm:px-4 flex-shrink-0 flex items-center justify-center text-xs font-medium tracking-wider rounded-lg transition-colors
              ${activeStatus === status 
                ? 'bg-[#CF0000] text-[#FBFBFC]' 
                : 'bg-gray-100 text-[#080808] hover:bg-gray-200'
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Search and Tools */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        <div className="relative flex-grow sm:flex-grow-0">
          <input
            type="text"
            placeholder="Search placeholder"
            className="w-full sm:w-[283px] h-8 pl-10 pr-4 rounded-[20px] bg-[#E5E6E6] text-xs"
          />
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={18} 
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            Filter
          </button>
          <button className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs hover:bg-gray-50 transition-colors">
            <Table size={18} />
            Tampilkan Tabel
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="relative sm:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs w-full justify-center hover:bg-gray-50 transition-colors"
          >
            <Menu size={18} />
            Menu
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
              <button className="flex items-center gap-1.5 px-4 py-2 text-xs hover:bg-gray-50 w-full">
                <Filter size={18} />
                Filter
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 text-xs hover:bg-gray-50 w-full">
                <Table size={18} />
                Tampilkan Tabel
              </button>
            </div>
          )}
        </div>
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
  return (
    <span className={`px-2 py-1 rounded text-xs
      ${status === 'Selesai' 
        ? 'bg-[#EEFBD1] text-[#1F5305]' 
        : 'bg-[#FCE6CF] text-[#CF0000]'
      }`}
    >
      {status}
    </span>
  );
};

// Feedback History Table
const FeedbackTable = () => {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-4 p-4 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left text-sm font-medium">Feedback Id</th>
              <th className="p-4 text-left text-sm font-medium">Tanggal</th>
              <th className="p-4 text-left text-sm font-medium">Jenis Feedback</th>
              <th className="p-4 text-left text-sm font-medium">Tanggal LRT</th>
              <th className="p-4 text-left text-sm font-medium">Stasiun</th>
              <th className="p-4 text-left text-sm font-medium">Feedback</th>
              <th className="p-4 text-left text-sm font-medium">Dokumentasi</th>
              <th className="p-4 text-left text-sm font-medium">Penilaian</th>
              <th className="p-4 text-left text-sm font-medium">Status</th>
              <th className="p-4 text-right text-sm font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-4 text-sm">UF-1245</td>
              <td className="p-4 text-sm whitespace-nowrap">2028-02-27 04:28:48</td>
              <td className="p-4 text-sm">Kritik dan Saran</td>
              <td className="p-4 text-sm whitespace-nowrap">2028-02-27</td>
              <td className="p-4 text-sm">DJKA</td>
              <td className="p-4 text-sm max-w-xs truncate">Ada beberapa pintu otomatis yang tidak...</td>
              <td className="p-4 text-sm text-gray-500">DSC21012.JPG</td>
              <td className="p-4">
                <StarRating rating={4} />
              </td>
              <td className="p-4">
                <StatusBadge status="Belum" />
              </td>
              <td className="p-4">
                <div className="flex justify-end gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <Trash className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          <UserInfoSection />
          <FeedbackFilter />
          <FeedbackTable />
        </div>
      </div>
    );
  };