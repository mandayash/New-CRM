"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";
import ConfirmAddQRModal from "@/components/qr-management/ConfirmAddQRModal"
import SuccessAddQRModal from "@/components/qr-management/SuccessAddQRModal";
import ErrorAddQRModal from "@/components/qr-management/ErrorAddQRModal"

export default function TambahQRPage() {
  const [stationName, setStationName] = useState("");
  const [qrCode, setQrCode] = useState<string | null>(null);
  
  // Modal states
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  
  // Generate QR code based on station name
  const generateQRCode = () => {
    if (!stationName.trim()) return;
    
    // For demonstration purposes, we'll simulate the QR code generation
    // In a real app, you would integrate with a QR code generation library or API
    setQrCode("/sample-qr-code.png");
  };
  
  // Handle when station name changes
  const handleStationNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStationName(e.target.value);
    // Optionally, regenerate QR code as user types
    if (e.target.value.trim()) {
      generateQRCode();
    } else {
      setQrCode(null);
    }
  };
  
  // Triggered when "Tambah QR" button is clicked
  const handleAddQR = () => {
    if (!stationName.trim()) return;
    setIsConfirmModalOpen(true);
  };
  
  // Triggered when "Ya, Tambahkan" button is clicked in confirm modal
  const handleConfirmAdd = async () => {
    setIsConfirmModalOpen(false);
    
    try {
      // Simulate API call to add QR
      // const response = await fetch('/api/qr', {
      //   method: 'POST',
      //   body: JSON.stringify({ stationName, qrCode }),
      //   headers: { 'Content-Type': 'application/json' }
      // });
      
      // For demonstration, simulate success most of the time
      const success = Math.random() > 0.2;
      
      if (success) {
        // Show success modal
        setIsSuccessModalOpen(true);
      } else {
        // Show error modal
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      console.error("Error adding QR:", error);
      setIsErrorModalOpen(true);
    }
  };
  
  // Handle retry after error
  const handleRetry = () => {
    setIsErrorModalOpen(false);
    setTimeout(() => {
      handleConfirmAdd();
    }, 500);
  };
  
  // Download the generated QR code
  const handleDownloadQR = () => {
    if (!qrCode) return;
    
    // In a real application, you would implement proper download logic
    const link = document.createElement('a');
    link.href = qrCode;
    link.download = `QR-${stationName.replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Page title */}
      <div className="flex items-center">
        <h1 className="text-2xl font-medium">
          <span className="text-[#CF0000]">Manajemen QR</span> | <span>Tambah QR</span>
        </h1>
      </div>
      
      {/* Main content */}
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-xl font-medium mb-6">Tambah QR</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side - Input */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center justify-center w-5 h-5 bg-[#CF0000] text-white rounded-full text-xs">1</div>
                <label htmlFor="station-name" className="text-sm font-medium">
                  Masukan Nama Stasiun*
                </label>
              </div>
              <input
                id="station-name"
                type="text"
                value={stationName}
                onChange={handleStationNameChange}
                placeholder="Masukan Nama Stasiun"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-100"
              />
            </div>
          </div>
          
          {/* Right side - QR Code result */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center justify-center w-5 h-5 bg-[#CF0000] text-white rounded-full text-xs">2</div>
                <label className="text-sm font-medium">
                  Hasil QR
                </label>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
                {qrCode ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32">
                      <Image 
                        src="/sample-qr-code.png" 
                        alt="QR Code"
                        width={128}
                        height={128}
                        className="w-full h-full"
                      />
                    </div>
                    <button
                      onClick={handleDownloadQR}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download QR
                    </button>
                  </div>
                ) : (
                  <div className="w-32 h-32 border-2 border-dashed border-gray-300 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">QR Code</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Batalkan
          </button>
          <button
            onClick={handleAddQR}
            disabled={!stationName.trim() || !qrCode}
            className="px-4 py-2 bg-[#CF0000] text-white rounded-lg text-sm hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Tambah QR
          </button>
        </div>
      </div>
      
      {/* Modals */}
      <ConfirmAddQRModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={handleConfirmAdd}
      />
      
      <SuccessAddQRModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
      
      <ErrorAddQRModal
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        onRetry={handleRetry}
      />
    </div>
  );
}