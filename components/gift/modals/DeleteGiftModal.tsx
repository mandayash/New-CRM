import React from 'react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

interface DeleteGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  count: number; 
}

const DeleteGiftModal: React.FC<DeleteGiftModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  count 
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[400px] p-0 rounded-2xl border-0 shadow-lg bg-white overflow-hidden">
        {/* Konten Modal */}
        <div className="flex flex-col items-center p-6 text-center">
          {/* Ilustrasi Petugas */}
          <div className="mb-6">
            <Image 
              src="/images/alert-illustration.png" 
              alt="Petugas" 
              width={120} 
              height={155}
              className="w-auto h-auto"
            />
          </div>
          
          {/* Warning Text */}
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="text-red-600 w-6 h-6" />
              <h2 className="text-red-600 text-xl font-medium">
                Anda yakin ingin menghapus {count} data hadiah?
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Jika Anda menghapus data hadiah, data akan terhapus secara permanen.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-2">
            <Button 
              variant="outline"
              className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border-none"
              onClick={onClose}
            >
              Kembali
            </Button>
            <Button 
              className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
              onClick={onConfirm}
            >
              Ya, Hapus
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteGiftModal;