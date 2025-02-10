import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal = ({ isOpen, onClose }: DeleteModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <div className="flex flex-col items-center text-center p-6">
          <Image
            src="/images/success-feedback.png" 
            alt="Success"
            width={200}
            height={200}
            className="mb-6"
          />
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-[#CF0000] text-xl">
              Data feedback berhasil dihapus!
            </DialogTitle>
            <DialogDescription className="text-[#303030] text-base">
              Data feedback pengguna berhasil dihapus.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-[#EAEAEA] hover:bg-gray-200 text-[#303030] rounded-lg text-sm font-medium transition-colors"
          >
            Kembali
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;