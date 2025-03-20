import React from 'react';
import Link from 'next/link';
import { Edit, Trash, Eye } from 'lucide-react';

interface Gift {
  id: string;
  name: string;
  stock: number;
  initialStock: number;
  exchangePoints: number;
  totalExchanged: number;
  status: string;
}

interface GiftTableProps {
  gifts: Gift[];
  sortColumn: string | null;
  sortDirection: "asc" | "desc" | null;
  selectedItems: string[];
  selectAll: boolean;
  onSort: (column: string) => void;
  onSelectAll: () => void;
  onSelectItem: (itemId: string) => void;
  onDelete: (itemIds: string[]) => void;
  getSortIcon: (column: string) => React.ReactNode;
}

const GiftTable: React.FC<GiftTableProps> = ({
  gifts,
  sortColumn,
  sortDirection,
  selectedItems,
  selectAll,
  onSort,
  onSelectAll,
  onSelectItem,
  onDelete,
  getSortIcon
}) => {
  // Function to render status badge
  const renderStatus = (status: string) => {
    let bgColor = "";
    
    switch (status) {
      case "Terkirim":
        bgColor = "bg-green-100 text-green-800";
        break;
      case "Draft":
        bgColor = "bg-gray-100 text-gray-800";
        break;
      case "Gagal":
        bgColor = "bg-red-100 text-red-800";
        break;
      default:
        bgColor = "bg-gray-100 text-gray-800";
    }
    
    return (
      <span className={`px-2.5 py-1 rounded-md text-xs ${bgColor}`}>
        {status}
      </span>
    );
  };

  if (gifts.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <p className="text-gray-500">Tidak ada data yang ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-4 p-4 text-left">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300" 
                  checked={selectAll}
                  onChange={onSelectAll}
                />
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('id')}
              >
                <div className="flex items-center gap-1">
                  Hadiah Id {getSortIcon('id')}
                </div>
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('name')}
              >
                <div className="flex items-center gap-1">
                  Nama Hadiah {getSortIcon('name')}
                </div>
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('stock')}
              >
                <div className="flex items-center gap-1">
                  Stok Hadiah {getSortIcon('stock')}
                </div>
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('initialStock')}
              >
                <div className="flex items-center gap-1">
                  Stok Awal Hadiah {getSortIcon('initialStock')}
                </div>
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('exchangePoints')}
              >
                <div className="flex items-center gap-1">
                  Poin Penukaran {getSortIcon('exchangePoints')}
                </div>
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('totalExchanged')}
              >
                <div className="flex items-center gap-1">
                  Total Penukar {getSortIcon('totalExchanged')}
                </div>
              </th>
              <th className="p-4 text-left text-sm font-medium">
                Riwayat Penukaran Hadiah
              </th>
              <th 
                className="p-4 text-left text-sm font-medium cursor-pointer"
                onClick={() => onSort('status')}
              >
                <div className="flex items-center gap-1">
                  Status {getSortIcon('status')}
                </div>
              </th>
              <th className="p-4 text-center text-sm font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {gifts.map((gift) => (
              <tr key={`${gift.id}-${gift.name}`} className="border-t hover:bg-gray-50">
                <td className="p-4">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedItems.includes(gift.id)}
                    onChange={() => onSelectItem(gift.id)}
                  />
                </td>
                <td className="p-4 text-sm font-medium">{gift.id}</td>
                <td className="p-4 text-sm">{gift.name}</td>
                <td className="p-4 text-sm">{gift.stock}</td>
                <td className="p-4 text-sm">{gift.initialStock}</td>
                <td className="p-4 text-sm">{gift.exchangePoints}</td>
                <td className="p-4 text-sm">{gift.totalExchanged}</td>
                <td className="p-4">
                  <Link 
                    href={`/gift/${gift.id}/history`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs hover:bg-gray-50 transition-colors justify-center w-fit"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Lihat Riwayat
                  </Link>
                </td>
                <td className="p-4 text-center">
                  {renderStatus(gift.status)}
                </td>
                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <Link
                      href={`/gift/${gift.id}/edit`}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Edit Hadiah"
                    >
                      <Edit className="w-4 h-4 text-gray-500" />
                    </Link>
                    <button
                      onClick={() => onDelete([gift.id])}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      title="Hapus Hadiah"
                    >
                      <Trash className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftTable;