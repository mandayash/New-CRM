"use client";

import { useState, useEffect } from "react";
import { 
  Download, 
  Plus, 
  Search, 
  Filter, 
  FileDown,
  Pencil,
  Trash,
  Eye,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import Link from "next/link";
import GiftStats from "@/components/gift/GiftStats";
import GiftTable from "@/components/gift/GiftTable";
import DeleteGiftModal from "@/components/gift/modals/DeleteGiftModal";
import DeleteSuccessModal from "@/components/gift/modals/DeleteSuccessModal";
import DeleteErrorModal from "@/components/gift/modals/DeleteErrorModal";

export default function StokHadiahPage() {
  // Filter states
  const [activeTab, setActiveTab] = useState("Semua");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Table states
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  
  // Delete modal states
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteSuccessModalOpen, setIsDeleteSuccessModalOpen] = useState(false);
  const [isDeleteErrorModalOpen, setIsDeleteErrorModalOpen] = useState(false);
  const [itemsToDelete, setItemsToDelete] = useState<string[]>([]);

  const tabs = ["Semua", "Terkirim", "Draft", "Gagal"];
  
  // Sample data untuk statistik
  const stats = {
    totalCategories: 16,
    totalItems: {
      all: 421,
      current: 301,
      exchanged: 120
    }
  };
  
  // Sample data untuk tabel
  const giftData = [
    { id: "HA-1245", name: "Mug", stock: 23, initialStock: 33, exchangePoints: 1023, totalExchanged: 10, status: "Draft" },
    { id: "HA-1246", name: "Topi", stock: 23, initialStock: 34, exchangePoints: 1123, totalExchanged: 11, status: "Draft" },
    { id: "HA-1247", name: "Payung", stock: 14, initialStock: 18, exchangePoints: 231, totalExchanged: 4, status: "Draft" },
    { id: "HA-1247", name: "Gantungan", stock: 13, initialStock: 19, exchangePoints: 340, totalExchanged: 6, status: "Gagal" },
    { id: "HA-1247", name: "Kaos", stock: 18, initialStock: 31, exchangePoints: 721, totalExchanged: 13, status: "Gagal" },
    { id: "HA-1248", name: "Stiker", stock: 23, initialStock: 34, exchangePoints: 2100, totalExchanged: 11, status: "Terkirim" },
    { id: "HA-1248", name: "Jaket", stock: 23, initialStock: 44, exchangePoints: 2101, totalExchanged: 21, status: "Terkirim" },
    { id: "HA-1249", name: "Tumbler", stock: 23, initialStock: 41, exchangePoints: 2105, totalExchanged: 18, status: "Terkirim" },
    { id: "HA-1250", name: "Piring", stock: 30, initialStock: 53, exchangePoints: 3000, totalExchanged: 23, status: "Terkirim" },
    { id: "HA-1250", name: "Pin LRT", stock: 31, initialStock: 58, exchangePoints: 3000, totalExchanged: 27, status: "Terkirim" },
    { id: "HA-1250", name: "Kacamata", stock: 62, initialStock: 64, exchangePoints: 23, totalExchanged: 2, status: "Terkirim" },
    { id: "HA-1250", name: "Emas", stock: 3, initialStock: 4, exchangePoints: 3100, totalExchanged: 1, status: "Terkirim" },
  ];

  // Handle column sorting
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  // Get the sort icon based on current sort state
  const getSortIcon = (column: string) => {
    if (sortColumn !== column) {
      return <ArrowUpDown size={16} />;
    }
    
    if (sortDirection === "asc") {
      return <ArrowUp size={16} />;
    }
    
    if (sortDirection === "desc") {
      return <ArrowDown size={16} />;
    }
    
    return <ArrowUpDown size={16} />;
  };

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredGifts.map(item => item.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle select single row
  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // Filter gifts based on tab and search query
  const filteredGifts = giftData
    .filter(gift => {
      if (activeTab === "Semua") return true;
      return gift.status === activeTab;
    })
    .filter(gift => {
      if (!searchQuery) return true;
      return (
        gift.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gift.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

  // Sort the filtered gifts
  const sortedGifts = [...filteredGifts];
  if (sortColumn && sortDirection) {
    sortedGifts.sort((a, b) => {
      const valueA = a[sortColumn as keyof typeof a];
      const valueB = b[sortColumn as keyof typeof b];
      
      if (sortDirection === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  }

  // Handle delete gift
  const handleDeleteClick = (giftIds: string[]) => {
    setItemsToDelete(giftIds);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleteModalOpen(false);
    
    try {
      // Simulation of API call
      const isSuccess = Math.random() > 0.2;
      
      if (isSuccess) {
        setIsDeleteSuccessModalOpen(true);
        // Update selected items
        setSelectedItems(selectedItems.filter(id => !itemsToDelete.includes(id)));
      } else {
        setIsDeleteErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Error deleting gifts:", error);
      setIsDeleteErrorModalOpen(true);
    }
  };

  const handleRetryDelete = () => {
    setIsDeleteErrorModalOpen(false);
    setTimeout(() => {
      handleConfirmDelete();
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-medium text-[#CF0000]">
        Stok Hadiah
      </h1>

      {/* Gift Stats */}
      <GiftStats 
        totalCategories={stats.totalCategories}
        initialStock={stats.totalItems.all}
        currentStock={stats.totalItems.current}
        totalRedeemed={stats.totalItems.exchanged}
        />
      
      {/* Add Gift Button */}
      <div className="flex items-center w-full sm:w-auto">
        <Link
          href="/gift/create"
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#CF0000] text-white rounded-lg hover:bg-red-700 text-xs sm:text-sm w-full sm:w-auto transition-colors"
        >
          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Tambah Hadiah
        </Link>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-8 px-3 sm:px-4 flex-shrink-0 flex items-center justify-center text-xs font-medium tracking-wider rounded-lg transition-colors
                ${
                  activeTab === tab
                    ? "bg-[#CF0000] text-[#FBFBFC]"
                    : "bg-gray-100 text-[#080808] hover:bg-gray-200"
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
              <FileDown size={18} />
              Export
            </button>
          </div>

          {/* Mobile Menu Button */}
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
                  <FileDown size={18} />
                  Export
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bulk Delete Button */}
      {selectedItems.length > 0 && (
        <div className="flex justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
            onClick={() => handleDeleteClick(selectedItems)}
          >
            <Trash className="w-4 h-4" />
            Hapus {selectedItems.length} hadiah yang dipilih
          </button>
        </div>
      )}
      
      {/* Gift Table */}
      <GiftTable 
        gifts={sortedGifts}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
        selectedItems={selectedItems}
        selectAll={selectAll}
        onSort={handleSort}
        onSelectAll={handleSelectAll}
        onSelectItem={handleSelectItem}
        onDelete={handleDeleteClick}
        getSortIcon={getSortIcon}
      />

      {/* Pagination */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-500">Showing</span>
          <select className="bg-[#EAEAEA] px-2 py-1.5 rounded">
            <option>1</option>
          </select>
          <span className="text-gray-500">out of 2</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
            <ChevronLeft
              size={16}
              className="text-[#080808]"
            />
          </button>

          <button className="w-[30px] h-[30px] flex items-center justify-center rounded-lg text-xs bg-[#CF0000] text-white">
            1
          </button>
          <button className="w-[30px] h-[30px] flex items-center justify-center rounded-lg text-xs bg-[#EAEAEA] text-[#080808]">
            2
          </button>

          <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
            <ChevronRight
              size={16}
              className="text-[#080808]"
            />
          </button>
        </div>
      </div>

      {/* Modals */}
      <DeleteGiftModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        count={itemsToDelete.length}
      />

      <DeleteSuccessModal
        isOpen={isDeleteSuccessModalOpen}
        onClose={() => setIsDeleteSuccessModalOpen(false)}
        count={itemsToDelete.length}
      />

      <DeleteErrorModal
        isOpen={isDeleteErrorModalOpen}
        onClose={() => setIsDeleteErrorModalOpen(false)}
        onRetry={handleRetryDelete}
        count={itemsToDelete.length}
      />
    </div>
  );
}