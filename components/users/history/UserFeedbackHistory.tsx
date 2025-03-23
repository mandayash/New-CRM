'use client';

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Menu, Trophy, Filter, Table, Search, Star, Edit, Trash, Eye, FileText } from 'lucide-react';
import Image from 'next/image';
import DeleteConfirmationModal from '@/components/feedback/DeleteConfirmationModal';
import DeleteModal from '@/components/feedback/DeleteModal';
import { useFeedbackActions, FeedbackItem } from '@/components/utils/feedback-actions';
import FeedbackTable from '@/components/feedback/FeedbackTable';

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
            <h2 className="text-xl text-primary font-bold text-gray-800">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 2.5V10L17.5 7.5" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 10L12.5 7.5" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.75 15C3.75 15 3.75 17.2375 3.75 20V21.25C3.75 24.7 3.75 27.5 10 27.5H20C25 27.5 26.25 24.7 26.25 21.25V20C26.25 17.2375 26.25 15 21.25 15C20 15 19.65 15.2625 19 15.75L17.725 17.1C16.25 18.675 13.75 18.675 12.2625 17.1L11 15.75C10.35 15.2625 10 15 8.75 15Z" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.25 14.9998V9.99981C6.25 7.4873 6.25 5.4123 10 5.0498" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23.75 14.9998V9.99981C23.75 7.4873 23.75 5.4123 20 5.0498" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-lg text-primary font-bold text-gray-800">Total Feedback</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold font-poppins">43</p>
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
                <p className="text-lg text-primary font-bold text-gray-800">Poin Level</p>
                <div className="flex items-center gap-2">
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold font-poppins">1,131</p>
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
            className="w-full sm:w-[283px] h-8 pl-10 pr-4 rounded-[20px] bg-white text-xs"
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

// Custom FeedbackTable Component
const CustomFeedbackTable = () => {
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  // Sample data untuk history feedback
  const feedbackData = [
    {
      id: 'UF-1245',
      date: '2028-02-27 04:28:48',
      type: 'Kritik dan Saran',
      lrtDate: '2028-02-27',
      station: 'DJKA',
      feedback: 'Ada beberapa pintu otomatis yang tidak...',
      documentation: 'DSC21012.JPG',
      rating: 4,
      status: 'Belum' as const,
    },
    {
      id: 'UF-1246',
      date: '2028-02-26 14:15:20',
      type: 'Saran Perbaikan',
      lrtDate: '2028-02-26',
      station: 'Ampera',
      feedback: 'Perbaikan pada sistem ticketing...',
      documentation: 'IMG20281226.JPG',
      rating: 5,
      status: 'Selesai' as const,
    }
  ];

  // Handle sukses delete feedback
  const handleDeleteSuccess = (items: FeedbackItem[]) => {
    console.log('Deleted items from history:', items);
    // API untuk delete item dari history
    setShowDeleteSuccess(true);
  };

  // Utility untuk actions
  const { 
    renderActionButtons, 
    showDeleteConfirmation, 
    setShowDeleteConfirmation,
    selectedItems,
    handleConfirmDelete
  } = useFeedbackActions('userHistory', handleDeleteSuccess);

  return (
    <>
      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-4 p-4 text-left bg-[#EAEAEA]">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Feedback Id</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Tanggal</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Jenis Feedback</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Tanggal LRT</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Stasiun</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Feedback</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Dokumentasi</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Penilaian</th>
                <th className="p-4 bg-[#EAEAEA] text-left text-sm font-medium">Status</th>
                <th className="p-4 bg-[#EAEAEA] text-right text-sm font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item) => (
                <tr key={item.id} className="border-t hover:bg-gray-50 bg-white">
                  <td className="p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-4 text-sm">{item.id}</td>
                  <td className="p-4 text-sm whitespace-nowrap">{item.date}</td>
                  <td className="p-4 text-sm">{item.type}</td>
                  <td className="p-4 text-sm whitespace-nowrap">{item.lrtDate}</td>
                  <td className="p-4 text-sm">{item.station}</td>
                  <td className="p-4 text-sm max-w-xs truncate">{item.feedback}</td>
                  <td className="p-4 text-sm text-gray-500">{item.documentation}</td>
                  <td className="p-4">
                    <StarRating rating={item.rating} />
                  </td>
                  <td className="p-4">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      {renderActionButtons(item as FeedbackItem)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <DeleteConfirmationModal 
        isOpen={showDeleteConfirmation}
        onClose={() => setShowDeleteConfirmation(false)}
        onConfirm={handleConfirmDelete}
        selectedCount={selectedItems.length}
      />

      <DeleteModal 
        isOpen={showDeleteSuccess}
        onClose={() => setShowDeleteSuccess(false)}
      />
    </>
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
        {/* Gunakan FeedbackTable dari komponen external atau CustomFeedbackTable */}
        <FeedbackTable context="userHistory" /> 
        {/* <CustomFeedbackTable /> */}
      </div>
    </div>
  );
};

export default UserFeedbackHistory;