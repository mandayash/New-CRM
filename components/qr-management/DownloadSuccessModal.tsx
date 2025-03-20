import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface DownloadSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadSuccessModal = ({ isOpen, onClose }: DownloadSuccessModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-0 rounded-2xl border-0 shadow-lg bg-white overflow-hidden">
        {/* Konten Modal */}
        <div className="flex flex-col items-center p-6 text-center">
          {/* Ilustrasi Petugas */}
          <div className="mb-6">
            <Image 
              src="/images/success-feedback.png" 
              alt="Petugas" 
              width={120} 
              height={155}
              className="w-auto h-auto"
            />
          </div>
          
          {/* Success Text */}
          <div className="mb-6 text-center">
            <h2 className="text-red-600 text-xl font-medium mb-2">
              QR berhasil diunduh!
            </h2>
            <p className="text-gray-700">
              Data QR berhasil diunduh.
            </p>
          </div>
          
          {/* Action Button */}
          <Button 
            variant="outline"
            className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border-none"
            onClick={onClose}
          >
            Kembali
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadSuccessModal;