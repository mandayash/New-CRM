'use client';

import React, { useState } from 'react';
import { Search, Filter, Table } from 'lucide-react';

const FilterSearch = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const tabs = ['Semua', 'Selesai', 'Belum'];

  return (
    <div className="flex justify-between items-center">
      {/* Filter Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-8 px-4 flex items-center justify-center text-xs font-medium tracking-wider rounded-lg
              ${activeTab === tab 
                ? 'bg-[#CF0000] text-[#FBFBFC]' 
                : 'bg-transparent text-[#080808]'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Tools */}
      <div className="flex items-center gap-2.5">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search placeholder"
            className="w-[283px] h-8 pl-10 pr-4 rounded-[20px] bg-[#E5E6E6] text-xs"
          />
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={18}
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs">
          <Filter size={18} />
          Filter
        </button>

        {/* Table View Button */}
        <button className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs">
          <Table size={18} />
          Tampilkan Tabel
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;