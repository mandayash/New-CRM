// Ini untuk yang di Feedback Card (Ringkasan)
'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface FeedbackDetailProps {
    id?: string;
    user?: {
      name: string;
      email: string;
      avatar: string;
    };
    type?: string;
    date?: string;
    station?: string;
    message?: string;
    image?: {
      url: string;
      name: string;
    };
    rating?: number;
  }

const FeedbackDetail = ({
  id = 'UF-1245',
  user = {
    name: 'Sarah Miller',
    email: 'smiller@gmail.com',
    avatar: '/images/profile-placeholder.png'
  },
  type = 'Masalah Fasilitas',
  date = '2028-02-27 | 04:28:48',
  station = 'Demang',
  message = 'AC di dalam kereta tidak dingin, terutama saat jam ramai. Rasanya pengap dan tidak nyaman.',
  image = {
    url: '/path-to-image.jpg',
    name: 'DSC21012.JPG'
  },
  rating = 3
}: FeedbackDetailProps) => {
  return (
    <div className="w-[443px] p-6 flex flex-col gap-3 rounded-2xl border border-[#C0C0C0] bg-[#F9F9F9]">
      {/* Judul */}
      <h2 className="text-[18px] font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
        Feedback
      </h2>

      {/* Feedback ID */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Feedback ID: {id}
        </p>
      </div>

      {/* User Info */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          User
        </p>
        <div className="flex items-center gap-2 rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <Image
            src={user.avatar}
            alt={user.name}
            width={30}
            height={30}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xs">{user.name}</span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        </div>
      </div>

      {/* Jenis Umpan Balik */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Jenis Umpan Balik
        </p>
        <div className="rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <p className="text-xs leading-[150%] tracking-[0.5px]">{type}</p>
        </div>
      </div>

      {/* Tanggal dan Waktu Perjalanan */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Tanggal dan Waktu Perjalanan
        </p>
        <div className="rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <p className="text-xs leading-[150%] tracking-[0.5px]">{date}</p>
        </div>
      </div>

      {/* Stasiun Keberangkatan */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Stasiun Keberangkatan
        </p>
        <div className="rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <p className="text-xs leading-[150%] tracking-[0.5px]">{station}</p>
        </div>
      </div>

      {/* Feedback Text */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Feedback
        </p>
        <div className="rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <p className="text-xs leading-[150%] tracking-[0.5px]">{message}</p>
        </div>
      </div>

      {/* File Pendukung */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          File Pendukung
        </p>
        <div className="rounded-lg border border-[#EAEAEA] bg-[#EAEAEA] p-2.5">
          <Image
            src={image.url}
            alt="Supporting document"
            width={395}
            height={200}
            className="mb-2 rounded-lg"
          />
          <p className="text-xs text-center text-gray-500">{image.name}</p>
        </div>
      </div>

      {/* Penilaian */}
      <div className="space-y-2">
        <p className="text-sm font-medium leading-[150%] tracking-[0.5px] text-[#080808]">
          Penilaian
        </p>
        <div className="flex gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={32}
              className={i < rating 
                ? 'fill-[#E5B12F] text-[#E5B12F]' 
                : 'fill-[#C0C0C0] text-[#C0C0C0]'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;