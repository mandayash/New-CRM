'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface LevelProps {
  level: 'Gold Level' | 'Silver Level' | 'Platinum Level';
}

// Komponen badge untuk level
const LevelBadge = ({ level }: LevelProps) => {
  const badgeStyles = {
    'Silver Level': {
      background: "linear-gradient(198deg, #ADADAD 20.34%, #D2D2D2 29.06%, #BBB 50.52%, #A0A0A0 58.25%, #959595 86.63%)",
      text: "#303030"
    },
    'Gold Level': {
      background: "linear-gradient(179deg, #FFD23D 35.57%, #EFD787 42.04%, #E1B831 57.97%, #EFD787 63.71%, rgba(242, 186, 0, 0.47) 84.77%)",
      text: "#303030"
    },
    'Platinum Level': {
      background: "linear-gradient(244deg, #B09FFF 37.63%, #8C7BDB 41.94%, #BEB0FF 52.54%, #8C7BDB 56.36%, #CBC0FF 70.38%)",
      text: "#303030"
    }
  }[level];

  return (
    <span 
      className="px-3 py-1 rounded-full text-xs font-medium"
      style={{ 
        background: badgeStyles.background,
        color: badgeStyles.text
      }}
    >
      {level}
    </span>
  );
};

// Data dummy untuk hadiah
const giftInfo = {
  name: "Mug",
  id: "HA-1245",
  points: 1023
};

// Data dummy untuk history
const giftHistory = [
  {
    penukaranId: "PN-1245",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1245",
    name: "Anandita Nabila Ramadhani",
    level: "Gold Level"
  },
  {
    penukaranId: "PN-1246",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1246",
    name: "Salsabila",
    level: "Gold Level"
  },
  {
    penukaranId: "PN-1247",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1247",
    name: "Rahmawati",
    level: "Silver Level"
  },
  {
    penukaranId: "PN-1247",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1247",
    name: "Putri Rara",
    level: "Silver Level"
  },
  {
    penukaranId: "PN-1250",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1249",
    name: "Anandita Nabila Ramadhani",
    level: "Platinum Level"
  },
  {
    penukaranId: "PN-1247",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1247",
    name: "Anandita Nabila Ramadhani",
    level: "Gold Level"
  },
  {
    penukaranId: "PN-1249",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1248",
    name: "Anandita Nabila Ramadhani",
    level: "Gold Level"
  },
  {
    penukaranId: "PN-1249",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1248",
    name: "Anandita Nabila Ramadhani",
    level: "Platinum Level"
  },
  {
    penukaranId: "PN-1250",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1249",
    name: "Anandita Nabila Ramadhani",
    level: "Silver Level"
  },
  {
    penukaranId: "PN-1250",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1249",
    name: "Anandita Nabila Ramadhani",
    level: "Platinum Level"
  },
  {
    penukaranId: "PN-1250",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1249",
    name: "Anandita Nabila Ramadhani",
    level: "Platinum Level"
  },
  {
    penukaranId: "PN-1250",
    tanggal: "2028-02-27 04:28:48",
    userId: "US-1250",
    name: "Anandita Nabila Ramadhani",
    level: "Silver Level"
  }
];

export default function GiftHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const totalResults = 472322;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  // InfoCard component untuk menampilkan detail gift
  const InfoCard = () => (
    <div className="p-6 rounded-2xl border border-[#EAEAEA] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] mb-6">
      <h2 className="text-base font-medium mb-4">Informasi Hadiah</h2>
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <Image 
            src="/images/mug.png" 
            alt="Hadiah" 
            width={75} 
            height={75}
            className="rounded-lg bg-gray-100"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-5 w-full">
          <div>
            <p className="text-sm text-gray-500 mb-1">Nama Hadiah:</p>
            <p className="text-sm font-medium">{giftInfo.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Hadiah Id:</p>
            <p className="text-sm font-medium">{giftInfo.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Poin Penukaran:</p>
            <p className="text-sm font-medium">{giftInfo.points}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-medium">
        <span className="text-[#CF0000]">Stok Hadiah</span> | <span className="text-black">Lihat Riwayat</span>
      </h1>

      {/* Info Card */}
      <InfoCard />

      {/* Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search placeholder"
            className="w-full h-10 pl-10 pr-4 rounded-[20px] bg-[#E5E6E6] text-xs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={18} 
          />
        </div>

        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <div className="inline-flex items-center gap-2 rounded-lg overflow-hidden border border-[#EAEAEA]">
            <button className="h-10 px-4 text-xs font-medium bg-white hover:bg-gray-50">
              Semua
            </button>
            <button className="h-10 px-4 text-xs font-medium bg-[#CF0000] text-white">
              Terbaru
            </button>
            <button className="h-10 px-4 text-xs font-medium bg-white hover:bg-gray-50">
              Terlama
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border overflow-x-auto shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="py-4 text-xs font-medium text-gray-600">Penukaran Id</TableHead>
              <TableHead className="py-4 text-xs font-medium text-gray-600">Tanggal</TableHead>
              <TableHead className="py-4 text-xs font-medium text-gray-600">User Id</TableHead>
              <TableHead className="py-4 text-xs font-medium text-gray-600">Nama Pengguna</TableHead>
              <TableHead className="py-4 text-xs font-medium text-gray-600">Level Poin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {giftHistory.map((item, index) => (
              <TableRow key={index} className="border-t hover:bg-gray-50">
                <TableCell className="py-4 text-sm">{item.penukaranId}</TableCell>
                <TableCell className="py-4 text-sm">{item.tanggal}</TableCell>
                <TableCell className="py-4 text-sm">{item.userId}</TableCell>
                <TableCell className="py-4 text-sm">{item.name}</TableCell>
                <TableCell className="py-4">
                  <div className="flex justify-start">
                    <LevelBadge level={item.level as LevelProps['level']} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">Showing</span>
          <select className="bg-[#EAEAEA] px-2 py-1.5 rounded">
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
          <span className="text-gray-500">out of {totalResults.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
            <ChevronLeft size={16} className="text-[#080808]" />
          </button>
          
          {[1, 2, 3, '...', 15].map((page, i) => (
            <button
              key={i}
              onClick={() => typeof page === 'number' && setCurrentPage(page)}
              className={`w-[30px] h-[30px] flex items-center justify-center rounded-lg text-xs
                ${page === currentPage 
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
}