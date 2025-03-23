'use client'

import { useState } from 'react';
import FeedbackReplyWrapper from '@/components/feedback/reply/FeedbackReplyWrapper';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Import Modal Components
import ConfirmSendFeedback from '@/components/feedback/modals/ConfirmSendFeedback';
import ErrorSendFeedback from '@/components/feedback/modals/ErrorSendFeedback';
import SuccessSendFeedback from '@/components/feedback/modals/SuccessSendFeedback';
import SuccessSaveFeedback from '@/components/feedback/modals/SuccessSaveFeedback';

interface FeedbackDetailProps {
    id?: string;
    user?: {
      name: string;
      email: string;
      avatar: string;
    };
    type?: string;
    date?: string;
    station?: string;
    message?: string;
    image?: {
      url: string;
      name: string;
    };
    rating?: number;
}
  
export default function FeedbackReplyPage() {
  const router = useRouter();
  
  // State untuk mengelola modal
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isSuccessSaveModalOpen, setIsSuccessSaveModalOpen] = useState(false);
  
  // State untuk menyimpan data form balasan
  const [replyData, setReplyData] = useState<any>(null);
  
  // Data dummy untuk testing
  const feedbackData: FeedbackDetailProps = {
    id: 'UF-1245',
    user: {
      name: 'Sarah Miller',
      email: 'smiller@gmail.com',
      avatar: '/images/profile-placeholder.png'
    },
    type: 'Masalah Fasilitas',
    date: '2028-02-27 | 04:28:48',
    station: 'Demang',
    message: 'AC di dalam kereta tidak dingin, terutama saat jam ramai. Rasanya pengap dan tidak nyaman.',
    image: {
      url: '/profile-placeholder.png',
      name: 'DSC21012.JPG'
    },
    rating: 3
  };

  const handleSubmit = (data: any) => {
    console.log('Data form diterima:', data);
    setReplyData(data);
    setIsConfirmModalOpen(true);
  };

  // Handler untuk menyimpan draft
  const handleSave = async (data: any) => {
    console.log('Data form untuk disimpan:', data);
    setReplyData(data);
    
    try {
      // Simulasi API call untuk menyimpan draft
      // await saveFeedbackDraft(feedbackData.id, data);
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulasi network delay
      
      // Tampilkan pesan sukses penyimpanan
      setIsSuccessSaveModalOpen(true);
    } catch (error) {
      console.error('Error saving draft:', error);
      setIsErrorModalOpen(true);
    }
  };

  const handleConfirmSend = async () => {
    console.log('User mengkonfirmasi pengiriman');
    
    // Tutup modal konfirmasi
    setIsConfirmModalOpen(false);
    
    try {
      console.log('Mengirim data ke API...');
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      
      console.log('Berhasil mengirim, menampilkan modal sukses');
      
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('Error sending reply:', error);
      setIsErrorModalOpen(true);
    }
  };
  
  return (
    <div className="p-4 sm:p-6 max-w-[1200px] mx-auto">
      {/* Back Button */}
      <div className="flex items-center gap-2 mb-4">
        <button 
          onClick={() => router.back()}
          className="hover:bg-gray-100 p-1.5 sm:p-2 rounded-lg transition-colors"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        </button>
        <h2 className="text-base sm:text-lg font-medium">Balasan Feedback</h2>
      </div>

      {/* Wrapper Content */}
      <FeedbackReplyWrapper 
        feedbackData={feedbackData} 
        onSubmit={handleSubmit}
        onSave={handleSave}
      />

      {/* Modal Konfirmasi  */}
      <ConfirmSendFeedback 
        isOpen={isConfirmModalOpen} 
        onClose={() => setIsConfirmModalOpen(false)} 
        onConfirm={handleConfirmSend} 
      />
      
      {/* Modal Error  */}
      <ErrorSendFeedback 
        isOpen={isErrorModalOpen} 
        onClose={() => setIsErrorModalOpen(false)} 
      />
      
      {/* Modal Sukses Kirim */}
      <SuccessSendFeedback 
        isOpen={isSuccessModalOpen} 
        onClose={() => {
          setIsSuccessModalOpen(false);
          // Redirect ke halaman list feedback setelah sukses
          router.push('/feedback');
        }} 
      />
      
      {/* Modal Sukses Simpan */}
      <SuccessSaveFeedback 
        isOpen={isSuccessSaveModalOpen} 
        onClose={() => setIsSuccessSaveModalOpen(false)} 
      />
    </div>
  );
}