// app/feedback/[id]/page.tsx
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
        avatar: '/placeholder-avatar.jpg'
      },
      type: 'Masalah Fasilitas',
      date: '2028-02-27 | 04:28:48',
      station: 'Demang',
      message: 'AC di dalam kereta tidak dingin, terutama saat jam ramai. Rasanya pengap dan tidak nyaman.',
      image: {
        url: '/placeholder-image.jpg',
        name: 'DSC21012.JPG'
      },
      rating: 3
    };
  
    return <FeedbackReplyWrapper feedbackData={feedbackData} />;
}