'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Star, Pencil, Trash, ChevronLeft, ChevronRight, ArrowUpDown, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DeleteModal from './DeleteModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FeedbackData {
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
}

const FeedbackTable = () => {
  const router = useRouter();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [selectedFeedbacks, setSelectedFeedbacks] = useState<FeedbackData[]>([]);

    const handleDeleteClick = (feedback: FeedbackData) => {
      setSelectedFeedbacks([feedback]);
      setShowDeleteConfirmation(true);
    };

    const handleConfirmDelete = () => {
      // Proses hapus data
      setShowDeleteConfirmation(false);
      setShowDeleteSuccess(true);
      setSelectedFeedbacks([]);
    };

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
            <TableCell className="w-[15px] p-2.5">
              <input 
                type="checkbox" 
                className="w-[15px] h-[15px] border-[#C0C0C0] rounded"
              />
            </TableCell>
            <TableHead className="flex items-center gap-1.5 text-[#080808] font-medium">
              Feedback Id 
              <ArrowUpDown size={12} className="text-[#080808]" />
            </TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Jenis Feedback</TableHead>
            <TableHead>Tanggal LRT</TableHead>
            <TableHead>Stasiun</TableHead>
            <TableHead>Feedback</TableHead>
            <TableHead className="w-[100px]">Dokumentasi</TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                Penilaian 
                <ArrowUpDown size={12} className="text-[#080808]" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1.5">
                Status
                <ArrowUpDown size={12} className="text-[#080808]" />
              </div>
            </TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id} className="h-[50px]">
              <TableCell className="p-2.5">
                <input 
                  type="checkbox" 
                  className="w-[15px] h-[15px] border-[#C0C0C0] rounded"
                />
              </TableCell>
              <TableCell>{feedback.id}</TableCell>
              <TableCell>{feedback.date}</TableCell>
              <TableCell>
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
              <TableCell>{feedback.type}</TableCell>
              <TableCell>{feedback.date}</TableCell>
              <TableCell>DJKA</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {feedback.message}
              </TableCell>
              <TableCell>{feedback.documentation}</TableCell>
              <TableCell>
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
              <TableCell>
                <span className={`px-2 py-1 rounded text-xs
                  ${feedback.status === 'Selesai' 
                    ? 'bg-[#EEFBD1] text-[#1F5305]' 
                    : 'bg-[#FCE6CF] text-[#CF0000]'
                  }`}
                >
                  {feedback.status}
                </span>
              </TableCell>
              <TableCell>
              <div className="flex items-center gap-1.5">
                {feedback.status === 'Selesai' ? (
                  // Ikon untuk feedback yang sudah selesai
                  <button
                    onClick={() => router.push(`/feedback/${feedback.id}/reply`)}  
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FileText size={18} className="text-gray-600" />  
                  </button>
                ) : (
                  // Ikon untuk feedback yang belum selesai
                  <>
                    <button
                      onClick={() => router.push(`/feedback/${feedback.id}`)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Pencil size={18} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={() => handleDeleteClick(feedback)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash size={18} className="text-gray-600" />
                    </button>
                  </>
                )}
              </div>
            </TableCell>
            {/* Modals */}
            <DeleteConfirmationModal 
              isOpen={showDeleteConfirmation}
              onClose={() => setShowDeleteConfirmation(false)}
              onConfirm={handleConfirmDelete}
              selectedCount={selectedFeedbacks.length}
            />

            <DeleteModal 
              isOpen={showDeleteSuccess}
              onClose={() => setShowDeleteSuccess(false)}
            />
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
    </div>
  );
};

export default FeedbackTable;