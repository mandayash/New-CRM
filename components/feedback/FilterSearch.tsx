'use client';

import React, { useState } from 'react';
import { Search, Filter, Table, Menu } from 'lucide-react';

const FilterSearch = () => {
  const [activeTab, setActiveTab] = useState('Semua');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = ['Semua', 'Selesai', 'Belum'];

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
      {/* Filter Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-8 px-3 sm:px-4 flex items-center justify-center text-xs font-medium tracking-wider rounded-lg transition-colors
              ${activeTab === tab 
                ? 'bg-[#CF0000] text-[#FBFBFC]' 
                : 'bg-transparent text-[#080808] hover:bg-gray-100'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Tools */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
        {/* Search Input */}
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

        {/* Mobile Menu Button untuk responsifnya */}
        <div className="relative sm:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-1.5 px-3 h-8 bg-white rounded-lg border text-xs w-full justify-center hover:bg-gray-50 transition-colors"
          >
            <Menu size={18} />
            Menu
          </button>

          {/* Mobile Dropdown Menu */}
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

export default FilterSearch;