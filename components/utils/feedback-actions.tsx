'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash, FileText, Eye } from 'lucide-react';

// Tipe data untuk item feedback
export interface FeedbackItem {
  id: string;
  status: 'Selesai' | 'Belum';
  [key: string]: any;
}

export type ContextType = 'feedbackTable' | 'userHistory';

// Hook untuk mengelola actions feedback
export const useFeedbackActions = (
  contextType: ContextType,
  onDeleteConfirm: (items: FeedbackItem[]) => void
) => {
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<FeedbackItem[]>([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Handler untuk tombol delete
  const handleDeleteClick = (item: FeedbackItem) => {
    setSelectedItems([item]);
    setShowDeleteConfirmation(true);
  };

  // Handler untuk konfirmasi delete
  const handleConfirmDelete = () => {
    setShowDeleteConfirmation(false);
    onDeleteConfirm(selectedItems);
  };

  const renderActionButtons = (item: FeedbackItem) => {
    if (item.status === 'Selesai') {
      return (
        <div className="flex gap-2 items-center justify-end">
          <button
            onClick={() => router.push(`/feedback/${item.id}`)}
            className="p-1 hover:bg-gray-100 rounded"
            title="Lihat Detail"
          >
            <FileText size={18} className="text-gray-600" />
          </button>
        </div>
      );
    } else {

      return (
        <div className="flex gap-2 items-center justify-end">
          <button
            onClick={() => router.push(`/feedback/${item.id}/reply`)}
            className="p-1 hover:bg-gray-100 rounded"
            title="Edit/Reply"
          >
            <Pencil size={18} className="text-gray-600" />
          </button>
          <button
            onClick={() => handleDeleteClick(item)}
            className="p-1 hover:bg-gray-100 rounded"
            title="Hapus"
          >
            <Trash size={18} className="text-gray-600" />
          </button>
        </div>
      );
    }
  };

  return {
    renderActionButtons,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    selectedItems,
    handleConfirmDelete
  };
};