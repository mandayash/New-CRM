'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ArrowUpDown } from "lucide-react";

const combineClasses = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

interface FeedbackData {
  id: string;
  type: string;
  date: string;
  time: string;
  feedback: string;
  documentation: string;
  rating: number;
  status: 'Selesai' | 'Belum';
}

const FeedbackTable = () => {
  const feedbackStats = {
    total: 1121,
    completed: 932,
    pending: 189
  };

  const feedbackData: FeedbackData[] = [
    {
      id: 'UF-1245',
      type: 'Kritik dan Saran',
      date: '2028-02-27',
      time: '04:28:48',
      feedback: 'Fasilitas di dalam kereta bersih dan terawat.',
      documentation: 'DSC21012.JPG',
      rating: 5,
      status: 'Selesai'
    },
    {
      id: 'UF-1247',
      type: 'Pembayaran dan Tiket',
      date: '2028-02-27',
      time: '04:28:48',
      feedback: 'AC di beberapa gerbong terasa kurang dingin...',
      documentation: 'DSC21012.JPG',
      rating: 4,
      status: 'Selesai'
    },
    {
      id: 'UF-1249',
      type: 'Masalah Fasilitas',
      date: '2028-02-27',
      time: '04:28:48',
      feedback: 'Ada beberapa pintu otomatis yang tidak...',
      documentation: 'DSC21012.JPG',
      rating: 4,
      status: 'Belum'
    },
    {
      id: 'UF-1250',
      type: 'Kritik dan Saran',
      date: '2028-02-27',
      time: '04:28:48',
      feedback: 'Kereta sering terlambat di jam sibuk.',
      documentation: 'DSC21012.JPG',
      rating: 3,
      status: 'Belum'
    },
  ];

  const StatCard = ({ label, value, className }: { label: string; value: number; className?: string }) => {
    return (
      <div className={combineClasses(
        "flex-1 px-3 sm:px-4 py-3 rounded min-w-[180px]",
        className || "bg-[#F0F1F3]"
      )}>
        <p className="text-xs sm:text-sm text-gray-600 font-bold line-clamp-1">{label}</p>
        <p className="text-xl sm:text-2xl lg:text-[30px] font-bold mt-1">{value.toLocaleString()}</p>
      </div>
    );
  };

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2">
          <div className="min-w-0 w-full sm:w-auto">
            <CardTitle className="text-base sm:text-lg font-medium text-primary truncate">
              Feedback Terbaru
            </CardTitle>
          </div>
          <select className="w-full sm:w-auto border rounded-lg px-3 py-2 text-xs sm:text-sm bg-white flex-shrink-0">
            <option>Tahun Ini</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </CardHeader>

      <CardContent className="px-4 sm:px-6">
        {/* Stats Cards */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 overflow-x-auto pb-2">
          <StatCard 
            label="Total Feedback" 
            value={feedbackStats.total} 
          />
          <StatCard 
            label="Total Feedback Selesai" 
            value={feedbackStats.completed} 
            className="!bg-[#EEFBD1]"
          />
          <StatCard 
            label="Total Feedback Belum" 
            value={feedbackStats.pending}
            className="!bg-[#FCE6CF]"
          />
        </div>

        {/* Feedback Table */}
        <div className="w-full overflow-auto rounded-lg border border-[#EAEAEA]">
          <table className="w-full min-w-[1000px] text-sm">
            <thead className="bg-[#EAEAEA]">
              <tr>
                <th className="text-left px-4 py-2.5 font-medium whitespace-nowrap">
                  <button className="flex items-center gap-1">
                    Feedback Id <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left px-4 py-2.5 font-medium whitespace-nowrap">
                  <button className="flex items-center gap-1">
                    Jenis Feedback <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left px-4 py-2.5 font-medium whitespace-nowrap">
                  <button className="flex items-center gap-1">
                    Tanggal LRT <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left px-4 py-2.5 font-medium">
                  Feedback
                </th>
                <th className="text-left px-4 py-2.5 font-medium w-[100px] whitespace-nowrap">
                  Dokumentasi
                </th>
                <th className="text-left px-4 py-2.5 font-medium whitespace-nowrap">
                  <button className="flex items-center gap-1">
                    Penilaian <ArrowUpDown size={16} />
                  </button>
                </th>
                <th className="text-left px-4 py-2.5 font-medium w-[92px] whitespace-nowrap">
                  <button className="flex items-center gap-1">
                    Status <ArrowUpDown size={16} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item) => (
                <tr key={item.id} className="h-[50px] border-t border-[#EAEAEA]">
                  <td className="px-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-4 whitespace-nowrap">{item.type}</td>
                  <td className="px-4 whitespace-nowrap">
                    {item.date}
                    <br />
                    <span className="text-gray-500">{item.time}</span>
                  </td>
                  <td className="px-4 max-w-[300px] truncate">{item.feedback}</td>
                  <td className="px-4 whitespace-nowrap">{item.documentation}</td>
                  <td className="px-4 whitespace-nowrap">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 whitespace-nowrap">
                    <span className={combineClasses(
                      "px-2 py-1 rounded text-xs",
                      item.status === 'Selesai' 
                        ? 'bg-[#EEFBD1] text-[#1F5305]' 
                        : 'bg-[#FCE6CF] text-[#CF0000]'
                    )}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackTable;