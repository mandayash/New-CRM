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
    onSubmit?: (data: any) => void; 
    onSave?: (data: any) => void;   
}

const FeedbackReplyWrapper = ({ 
    feedbackData, 
    onSubmit,
    onSave
}: FeedbackReplyWrapperProps) => {
    // Handler untuk ReplyForm
    const handleSubmit = (data: any) => {
        if (onSubmit) {
            onSubmit(data);
        } else {
            console.log('Submit form:', data);
        }
    };

    const handleSave = (data: any) => {
        if (onSave) {
            onSave(data);
        } else {
            console.log('Save as draft:', data);
        }
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