'use client'

import React from 'react';
import { Bell } from 'lucide-react';
import NotificationItem from '@/components/layout/NotificationItem';
import { useOutsideClicks } from '@/hooks/useOutsideClicks';

// Tipe data untuk notifikasi
interface Notification {
  id: string;
  icon: 'alert' | 'article' | 'gift' | 'feedback';
  title: string;
  time: string;
  date: 'Hari Ini' | 'Kemarin' | string;
}

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('Semua');
  const dropdownRef = React.useRef<HTMLDivElement>(null);


useOutsideClicks(dropdownRef as React.RefObject<HTMLElement>, () => {
    if (isOpen) setIsOpen(false);
});

  // Data notifikasi (contoh data statis)
  const notifications: Notification[] = [
    {
      id: '1',
      icon: 'alert',
      title: 'Pengingat: 189 Feedback belum di balas',
      time: '1:00 PM',
      date: 'Hari Ini'
    },
    {
      id: '2',
      icon: 'article',
      title: 'Kelola Artikel: Artikel berhasil dikirim!',
      time: '10:30 AM',
      date: 'Hari Ini'
    },
    {
      id: '3',
      icon: 'gift',
      title: 'Hadiah: Stok tumbler habis.',
      time: '10:30 AM',
      date: 'Hari Ini'
    },
    {
      id: '4',
      icon: 'feedback',
      title: 'Feedback: 200 Feedback belum di balas',
      time: '1:00 PM',
      date: 'Kemarin'
    },
    {
      id: '5',
      icon: 'alert',
      title: 'Pengingat: 189 Feedback belum di balas',
      time: '2:30 PM',
      date: 'Kemarin'
    },
    {
      id: '6',
      icon: 'article',
      title: 'Kelola Artikel: Artikel berhasil dikirim!',
      time: '10:30 AM',
      date: 'Kemarin'
    },
    {
      id: '7',
      icon: 'gift',
      title: 'Hadiah: Stok tumbler habis.',
      time: '11:30 AM',
      date: 'Kemarin'
    },
  ];

  // Fungsi untuk memfilter notifikasi
  const getFilteredNotifications = () => {
    if (filter === 'Semua') return notifications;
    
    // Implementasi filter lain jika diperlukan
    return notifications;
  };

  // Kelompokkan notifikasi berdasarkan tanggal
  const groupedNotifications = getFilteredNotifications().reduce<Record<string, Notification[]>>(
    (groups, notification) => {
      const { date } = notification;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(notification);
      return groups;
    },
    {}
  );

  // Hitung total notifikasi yang belum dibaca 
  const unreadCount = notifications.length;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Button */}
      <button 
        className="p-1.5 sm:p-2 hover:bg-[#CF0000]/10 rounded-full transition-colors relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-red-500 rounded-full" />
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[320px] sm:w-[480px] bg-white rounded-lg shadow-lg border py-2 z-50 max-h-[80vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b">
            <h2 className="text-xl font-medium">Notifikasi</h2>
            <div className="relative">
              <select 
                className="bg-white border rounded-full px-4 py-1.5 pr-8 text-sm appearance-none cursor-pointer"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>Semua</option>
                <option>Belum Dibaca</option>
                <option>Sudah Dibaca</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Notification List */}
          <div className="overflow-y-auto flex-grow">
            {Object.entries(groupedNotifications).map(([date, notifications]) => (
              <div key={date}>
                <div className="sticky top-0 bg-gray-100 px-5 py-2 text-sm text-gray-600">
                  {date}
                </div>
                <div>
                  {notifications.map((notification) => (
                    <NotificationItem 
                      key={notification.id}
                      icon={notification.icon}
                      title={notification.title}
                      time={notification.time}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;