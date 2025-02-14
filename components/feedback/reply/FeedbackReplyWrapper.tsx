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
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Feedback Detail Section */}
                <div className="w-full lg:w-auto lg:min-w-[443px]">
                    <FeedbackDetail {...feedbackData} />
                </div>

                {/* Reply Form Section */}
                <div className="w-full lg:flex-1">
                    <ReplyForm 
                        onSubmit={handleSubmit}
                        onSave={handleSave}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeedbackReplyWrapper;