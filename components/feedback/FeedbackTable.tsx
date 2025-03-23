'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Star, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DeleteModal from './DeleteModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';

// Import utility function untuk actions
import { useFeedbackActions, FeedbackItem } from '@/components/utils/feedback-actions';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Interface untuk props komponen
interface FeedbackTableProps {
  context?: 'feedbackTable' | 'userHistory';
}

// Interface untuk data feedback
interface FeedbackData extends FeedbackItem {
  id: string;
  date: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  type: string;
  message: string;
  documentation: string;
  rating: number;
  status: 'Selesai' | 'Belum';
  lrtDate?: string;
  station?: string;
}

const FeedbackTable = ({ context = 'feedbackTable' }: FeedbackTableProps) => {
  const router = useRouter();
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  // Handle sukses delete feedback
  const handleDeleteSuccess = (items: FeedbackItem[]) => {
    console.log('Deleted items:', items);
    // API untuk delete item
    // Kemudian tampilkan modal sukses
    setShowDeleteSuccess(true);
  };

  const { 
    renderActionButtons, 
    showDeleteConfirmation, 
    setShowDeleteConfirmation,
    selectedItems,
    handleConfirmDelete
  } = useFeedbackActions(context, handleDeleteSuccess);

  // Sample data
  const feedbacks: FeedbackData[] = [
    {
      id: 'UF-1245',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Selesai'
    },
    {
      id: 'UF-1241',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Selesai'
    },
    {
      id: 'UF-1243',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1242', // Changed the duplicate ID
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1244',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-12451',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1246',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1247',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1248',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1249',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
    {
      id: 'UF-1240',
      date: '2028-02-27 04:28:48',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/images/profile-placeholder.png'
      },
      type: 'Kritik dan Saran',
      message: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Belum'
    },
  ];

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader className="bg-[#EAEAEA]">
          <TableRow>
            <TableCell className="w-[15px] p-2.5 ">
              <input 
                type="checkbox" 
                className="w-[15px] h-[15px] border-[#C0C0C0] rounded"
              />
            </TableCell>
            <TableHead className="flex items-center gap-1.5 text-[#080808] font-medium">
              Feedback Id 
              <ArrowUpDown size={12} className="text-[#080808]" />
            </TableHead>
            <TableHead className="text-[#080808]">Tanggal</TableHead>
            <TableHead className="text-[#080808]">User</TableHead>
            <TableHead className="text-[#080808]">Jenis Feedback</TableHead>
            <TableHead className="text-[#080808]">Tanggal LRT</TableHead>
            <TableHead className="text-[#080808]">Stasiun</TableHead>
            <TableHead className="text-[#080808]">Feedback</TableHead>
            <TableHead className="text-[#080808] w-[100px]">Dokumentasi</TableHead>
            <TableHead>
              <div className="text-[#080808] flex items-center gap-1.5">
                Penilaian 
                <ArrowUpDown size={12} className="text-[#080808]" />
              </div>
            </TableHead>
            <TableHead>
              <div className="text-[#080808] flex items-center gap-1.5">
                Status
                <ArrowUpDown size={12} className="text-[#080808]" />
              </div>
            </TableHead>
            <TableHead className='text-[#080808]'>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id} className="h-[50px]">
              <TableCell className="p-2.5 bg-white">
                <input 
                  type="checkbox" 
                  className="bg-[#FFFFFF] w-[15px] h-[15px] border-[#C0C0C0] rounded"
                />
              </TableCell>
              <TableCell className="bg-white">{feedback.id}</TableCell>
              <TableCell className="bg-white">{feedback.date}</TableCell>
              <TableCell className="bg-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={feedback.user.avatar}
                    alt={feedback.user.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{feedback.user.name}</span>
                    <span className="text-xs text-gray-500">{feedback.user.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="bg-white">{feedback.type}</TableCell>
              <TableCell className="bg-white">{feedback.lrtDate || feedback.date}</TableCell>
              <TableCell className="bg-white">{feedback.station || 'DJKA'}</TableCell>
              <TableCell className="max-w-[200px] truncate bg-white">
                {feedback.message}
              </TableCell>
              <TableCell className="bg-white">{feedback.documentation}</TableCell>
              <TableCell className="bg-white">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < feedback.rating 
                        ? 'fill-[#E5B12F] text-[#E5B12F]' 
                        : 'fill-gray-200 text-gray-200'
                      }
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell className="bg-white">
                <span className={`px-2 py-1 rounded text-xs
                  ${feedback.status === 'Selesai' 
                    ? 'bg-[#EEFBD1] text-[#1F5305]' 
                    : 'bg-[#FCE6CF] text-[#CF0000]'
                  }`}
                >
                  {feedback.status}
                </span>
              </TableCell>
              <TableCell className="bg-white">
                {renderActionButtons(feedback)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">
            Show
          </span>
          <select className="bg-[#EAEAEA] px-2 py-1.5 rounded">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
          <span className="text-gray-500">
            out of 472,322
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
            <ChevronLeft size={16} className="text-[#080808]" />
          </button>
          
          {[1, 2, 3, '...', 15].map((page, i) => (
            <button
              key={i}
              className={`w-[30px] h-[30px] flex items-center justify-center rounded-lg text-xs
                ${page === 1 
                  ? 'bg-[#CF0000] text-white' 
                  : 'bg-[#EAEAEA] text-[#080808]'
                }`}
            >
              {page}
            </button>
          ))}

          <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
            <ChevronRight size={16} className="text-[#080808]" />
          </button>
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
    </div>
  );
};

export default FeedbackTable;