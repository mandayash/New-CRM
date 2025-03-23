import React from 'react';
import { Bell, FileText, GiftIcon, MessageSquare } from 'lucide-react';

interface NotificationItemProps {
  icon: 'alert' | 'article' | 'gift' | 'feedback';
  title: string;
  time: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, title, time }) => {
  // Fungsi untuk render icon yang sesuai dengan tipe notifikasi
  const renderIcon = () => {
    const iconBgColor = {
      alert: 'bg-red-100',
      article: 'bg-blue-100',
      gift: 'bg-orange-100',
      feedback: 'bg-purple-100'
    }[icon];

    const iconColor = {
      alert: 'text-red-500',
      article: 'text-blue-500',
      gift: 'text-orange-500',
      feedback: 'text-purple-500'
    }[icon];

    const AlertIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M15.1425 10.5451L14.295 9.1351C14.1075 8.8276 13.9425 8.2351 13.9425 7.8751V6.4726C13.9425 3.7501 11.73 1.5376 9.01503 1.5376C6.29253 1.5451 4.08003 3.7501 4.08003 6.4726V7.8676C4.08003 8.2276 3.91503 8.8201 3.73503 9.1276L2.88753 10.5376C2.56503 11.0851 2.49003 11.7076 2.69253 12.2476C2.89503 12.7951 3.35253 13.2301 3.95253 13.4251C4.76253 13.6951 5.58003 13.8901 6.41253 14.0326C6.49503 14.0476 6.57753 14.0551 6.66003 14.0701C6.76503 14.0851 6.87753 14.1001 6.99003 14.1151C7.18503 14.1451 7.38003 14.1676 7.58253 14.1826C8.05503 14.2276 8.53503 14.2501 9.01503 14.2501C9.48753 14.2501 9.96003 14.2276 10.425 14.1826C10.5975 14.1676 10.77 14.1526 10.935 14.1301C11.07 14.1151 11.205 14.1001 11.34 14.0776C11.4225 14.0701 11.505 14.0551 11.5875 14.0401C12.4275 13.9051 13.26 13.6951 14.07 13.4251C14.6475 13.2301 15.09 12.7951 15.3 12.2401C15.51 11.6776 15.45 11.0626 15.1425 10.5451ZM9.56253 7.5001C9.56253 7.8151 9.30753 8.0701 8.99253 8.0701C8.67753 8.0701 8.42253 7.8151 8.42253 7.5001V5.1751C8.42253 4.8601 8.67753 4.6051 8.99253 4.6051C9.30753 4.6051 9.56253 4.8601 9.56253 5.1751V7.5001Z" fill="#CF0000"/>
          <path d="M11.1225 15.0075C10.8075 15.8775 9.97501 16.5 9.00001 16.5C8.40751 16.5 7.82251 16.26 7.41001 15.8325C7.17001 15.6075 6.99001 15.3075 6.88501 15C6.98251 15.015 7.08001 15.0225 7.18501 15.0375C7.35751 15.06 7.53751 15.0825 7.71751 15.0975C8.14501 15.135 8.58001 15.1575 9.01501 15.1575C9.44251 15.1575 9.87001 15.135 10.29 15.0975C10.4475 15.0825 10.605 15.075 10.755 15.0525C10.875 15.0375 10.995 15.0225 11.1225 15.0075Z" fill="#CF0000"/>
        </svg>
    );

    const ArticleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M15.3749 8.47499V5.28001C15.3749 2.25751 14.6699 1.5 11.8349 1.5H6.16488C3.32988 1.5 2.62488 2.25751 2.62488 5.28001V13.725C2.62488 15.72 3.71989 16.1925 5.04739 14.7675L5.05487 14.76C5.66987 14.1075 6.60737 14.16 7.13987 14.8725L7.89738 15.885" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.99988 5.25H11.9999" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.75 8.25H11.25" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const CustomGiftIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M14.9775 7.5H2.97754V13.5C2.97754 15.75 3.72754 16.5 5.97754 16.5H11.9775C14.2275 16.5 14.9775 15.75 14.9775 13.5V7.5Z" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.125 5.25V6C16.125 6.825 15.7275 7.5 14.625 7.5H3.375C2.2275 7.5 1.875 6.825 1.875 6V5.25C1.875 4.425 2.2275 3.75 3.375 3.75H14.625C15.7275 3.75 16.125 4.425 16.125 5.25Z" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const FeedbackIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
          <path d="M9 1.77979V6.27979L10.5 4.77979" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6.27979L7.5 4.77979" stroke="#CF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.25 9.27979C2.25 9.27979 2.25 10.6223 2.25 12.2798V13.0298C2.25 15.0998 2.25 16.7798 6 16.7798H12C15 16.7798 15.75 15.0998 15.75 13.0298V12.2798C15.75 10.6223 15.75 9.27979 12.75 9.27979C12 9.27979 11.79 9.43729 11.4 9.72979L10.635 10.5398C9.75 11.4848 8.25 11.4848 7.3575 10.5398L6.6 9.72979C6.21 9.43729 6 9.27979 5.25 9.27979Z" stroke="#CF0000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const IconComponent = {
        alert: AlertIcon,
        article: ArticleIcon,
        gift: CustomGiftIcon,
        feedback: FeedbackIcon
    }[icon];

    return (
      <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center flex-shrink-0`}>
        <IconComponent />
      </div>
    );
  };

  return (
    <div className="px-5 py-4 border-b hover:bg-gray-50 flex items-center gap-3 cursor-pointer transition-colors">
      {renderIcon()}
      <div className="flex-grow">
        <p className="text-sm font-medium">{title}</p>
      </div>
      <div className="text-sm text-gray-500">{time}</div>
    </div>
  );
};

export default NotificationItem;