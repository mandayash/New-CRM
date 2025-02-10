import FeedbackReplyWrapper from '@/components/feedback/reply/FeedbackReplyWrapper';

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
    // Data dummy untuk testing
    const feedbackData: FeedbackDetailProps = {
      id: 'UF-1245',
      user: {
        name: 'Sarah Miller',
        email: 'smiller@gmail.com',
        avatar: '/profile-placeholder.png'
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
  
    return (
      <div className="p-6 max-w-[1200px] mx-auto overflow-x-hidden">
        <FeedbackReplyWrapper feedbackData={feedbackData} />
      </div>
    );
  }