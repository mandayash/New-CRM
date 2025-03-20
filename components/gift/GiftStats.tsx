import React from 'react';
import { Gift, Package, ShoppingBag } from 'lucide-react';

interface GiftStatsProps {
  totalCategories?: number;
  initialStock?: number;
  currentStock?: number;
  totalRedeemed?: number;
}

const GiftStats: React.FC<GiftStatsProps> = ({
  totalCategories = 16,
  initialStock = 421,
  currentStock = 301,
  totalRedeemed = 120
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Info Banner Card */}
      <div className="flex flex-col sm:flex-row items-center p-4 sm:p-5 gap-6 rounded-2xl border border-[#EAEAEA] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)]">
        {/* Left Side - Category Count */}
        <div className="flex flex-col items-center justify-center border border-[#EAEAEA] rounded-xl p-4 min-w-[150px]">
          <p className="text-[#CF0000] text-2xl sm:text-3xl font-bold">{totalCategories}</p>
          <p className="text-xs sm:text-sm">Kategori Hadiah</p>
        </div>
        
        {/* Right Side - Icon and Text */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FDEBEB] rounded-full flex items-center justify-center">
            <Gift className="w-6 h-6 text-[#CF0000]" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-medium">Informasi Total Hadiah</h3>
          </div>
        </div>
      </div>

      {/* Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Initial Stock */}
        <div className="h-[83px] px-5 py-2.5 rounded-2xl border border-[#EAEAEA] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <div className="text-center">
            <span className="block text-[#69AF1D] text-2xl sm:text-3xl font-bold">{initialStock}</span>
            <span className="text-xs sm:text-sm">Stok Awal</span>
          </div>
        </div>

        {/* Current Stock */}
        <div className="h-[83px] px-5 py-2.5 rounded-2xl border border-[#EAEAEA] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <div className="text-center">
            <span className="block text-[#CF0000] text-2xl sm:text-3xl font-bold">{currentStock}</span>
            <span className="text-xs sm:text-sm">Stok Terkini</span>
          </div>
        </div>

        {/* Redeemed */}
        <div className="h-[83px] px-5 py-2.5 rounded-2xl border border-[#EAEAEA] bg-white shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] flex items-center justify-center">
          <div className="text-center">
            <span className="block text-[#B2841A] text-2xl sm:text-3xl font-bold">{totalRedeemed}</span>
            <span className="text-xs sm:text-sm">Total Penukaran Hadiah</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftStats;