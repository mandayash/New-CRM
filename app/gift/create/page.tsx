'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { UploadCloudIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import AddGiftConfirmModal from '@/components/gift/modals/DeleteGiftModal';
import SuccessModal from '@/components/gift/modals/AddSuccessModal';
import ErrorModal from '@/components/gift/modals/AddErrorModal';
import ConfirmAddQRModal from '@/components/qr-management/ConfirmAddQRModal'
import ConfirmAddModal from '@/components/gift/modals/ConfirmAddModal';

export default function TambahHadiahPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form state
  const [giftName, setGiftName] = useState('');
  const [stockCount, setStockCount] = useState(0);
  const [pointsRequired, setPointsRequired] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  // Modal states
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  // Increment and decrement functions for stock and points
  const incrementStock = () => setStockCount(stockCount + 1);
  const decrementStock = () => stockCount > 0 && setStockCount(stockCount - 1);
  
  const incrementPoints = () => setPointsRequired(pointsRequired + 1);
  const decrementPoints = () => pointsRequired > 0 && setPointsRequired(pointsRequired - 1);

  // Modal handlers
  const handleConfirmAdd = async () => {
    setShowConfirmModal(false);
    
    // Simulate API call
    try {
      // In a real app, you would send the form data to your API here
      setTimeout(() => {
        setShowSuccessModal(true);
      }, 1000);
    } catch (error) {
      setShowErrorModal(true);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-medium">
        <span className="text-[#CF0000]">Stok Hadiah</span> | <span className="text-black">Tambah Hadiah</span>
      </h1>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-[#EAEAEA] shadow-[0px_6px_14px_0px_rgba(0,0,0,0.05)] p-6">
        <h2 className="text-xl font-medium mb-6">Tambah Hadiah</h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Nama Hadiah */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Nama Hadiah <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={giftName}
                onChange={(e) => setGiftName(e.target.value)}
                placeholder="Masukkan Nama Hadiah"
                className="w-full h-12 px-4 rounded-lg border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#CF0000]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stok Hadiah */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Stok Hadiah <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={decrementStock}
                    className="h-12 w-12 flex items-center justify-center border border-[#EAEAEA] rounded-l-lg bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={stockCount}
                    onChange={(e) => setStockCount(Number(e.target.value))}
                    className="h-12 w-full text-center border-t border-b border-[#EAEAEA] focus:outline-none"
                    min="0"
                  />
                  <button
                    type="button"
                    onClick={incrementStock}
                    className="h-12 w-12 flex items-center justify-center border border-[#EAEAEA] rounded-r-lg bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Poin Penukaran */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Poin Penukaran <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={decrementPoints}
                    className="h-12 w-12 flex items-center justify-center border border-[#EAEAEA] rounded-l-lg bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={pointsRequired}
                    onChange={(e) => setPointsRequired(Number(e.target.value))}
                    className="h-12 w-full text-center border-t border-b border-[#EAEAEA] focus:outline-none"
                    min="0"
                  />
                  <button
                    type="button"
                    onClick={incrementPoints}
                    className="h-12 w-12 flex items-center justify-center border border-[#EAEAEA] rounded-r-lg bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Gambar */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Gambar <span className="text-red-500">*</span>
              </label>
              {preview ? (
                <div className="relative w-full h-64 border border-[#EAEAEA] rounded-lg overflow-hidden">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setImage(null);
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                  >
                    X
                  </button>
                </div>
              ) : (
                <div
                  className="border-2 border-dashed border-[#EAEAEA] rounded-lg p-8 text-center cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="mx-auto w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-3">
                    <UploadCloudIcon className="w-8 h-8 text-[#CF0000]" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-700">
                      Seret dan lepas atau Pilih File
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      (.jpg, .pdf, .png)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => router.push('/gift')}
                className="px-4 py-2 rounded-lg bg-[#EAEAEA] text-gray-700 hover:bg-gray-300 transition-colors"
              >
                Simpan
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#CF0000] text-white hover:bg-red-700 transition-colors"
              >
                Tambah Hadiah
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Modals */}
      {showConfirmModal && (
        <ConfirmAddModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={handleConfirmAdd}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => {
            setShowSuccessModal(false);
            router.push('/gift');
          }}
          title="Data Hadiah berhasil ditambah!"
          message="Data Hadiah berhasil ditambah."
        />
      )}

      {showErrorModal && (
        <ErrorModal
          isOpen={showErrorModal}
          onClose={() => setShowErrorModal(false)}
          title="Data Hadiah gagal ditambah!"
          message="Mohon periksa koneksi internet Anda dan coba lagi."
        />
      )}
    </div>
  );
}