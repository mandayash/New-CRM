// components/feedback/DeleteConfirmationModal.tsx
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  selectedCount?: number; // Untuk menampilkan jumlah data yang akan dihapus
}

const DeleteConfirmationModal = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  selectedCount = 1 
}: DeleteConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <div className="flex flex-col items-center text-center p-6">
          <Image
            src="/images/alert-illustration.png" 
            alt="Warning"
            width={200}
            height={200}
            className="mb-6"
          />
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-red-600 text-2xl">⚠️</span>
              <DialogTitle className="text-[#CF0000] text-xl">
                Anda yakin ingin menghapus {selectedCount} data feedback?
              </DialogTitle>
            </div>
            <DialogDescription className="text-[#303030] text-base">
              Jika Anda menghapus data feedback pengguna, data akan terhapus dan Anda tidak dapat memberikan balasan terkait feedback!
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#EAEAEA] hover:bg-gray-200 text-[#303030] rounded-lg text-sm font-medium transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-2 bg-[#CF0000] hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Ya, Hapus
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;