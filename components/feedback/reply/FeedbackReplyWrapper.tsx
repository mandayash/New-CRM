// components/feedback/reply/FeedbackReplyWrapper.tsx
'use client';

import FeedbackDetail from './FeedbackDetail';
import ReplyForm from './ReplyForm';

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

interface FeedbackReplyWrapperProps {
    feedbackData: FeedbackDetailProps;
}

const FeedbackReplyWrapper = ({ feedbackData }: FeedbackReplyWrapperProps) => {
    const handleSubmit = (data: any) => {
        console.log('Submit:', data);
    };

    const handleSave = (data: any) => {
        console.log('Save:', data);
    };

    return (
        <div className="flex gap-6">
            <FeedbackDetail {...feedbackData} />
            <ReplyForm 
                onSubmit={handleSubmit}
                onSave={handleSave}
            />
        </div>
    );
};

export default FeedbackReplyWrapper;