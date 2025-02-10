// components/feedback/SuccessModal.tsx
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const router = useRouter();

  const handleBack = () => {
    onClose();
    router.push('/feedback'); 
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-2xl">
        <div className="flex flex-col items-center text-center p-6">
          <Image
            src="/images/success-feedback.png" 
            alt="Success"
            width={200}
            height={200}
            className="mb-6"
          />
          
          <DialogHeader>
            <DialogTitle className="text-[#CF0000] text-xl mb-2">
              Feedback berhasil ditambahkan!
            </DialogTitle>
            <DialogDescription className="text-[#303030] text-base">
              Feedback berhasil dikirim.
            </DialogDescription>
          </DialogHeader>

          <button
            onClick={handleBack}
            className="mt-6 px-6 py-2 bg-[#EAEAEA] text-[#303030] rounded-lg text-sm font-medium"
          >
            Kembali
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;