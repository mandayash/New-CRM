'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Import modal components
import ConfirmDeleteArticle from '@/components/articles/modals/ConfirmDeleteArticle';
import SuccessDeleteArticle from '@/components/articles/modals/SuccessDeleteArticle';
import ErrorDeleteArticle from '@/components/articles/modals/ErrorDeleteArticle';

interface Article {
  id: string;
  date: string;
  title: string;
  content: string;
  image: string;
  status: 'Draft' | 'Terkirim' | 'Gagal';
}

const articles: Article[] = [
  {
    id: 'AR-1245',
    date: '2028-02-27 04:28:48',
    title: 'Sed ut perspiciatis unde omnis iste',
    content: 'Lorem ipsum dolor sit amet, ipsum das consectetur adipiscing elit sed...',
    image: 'DSC21012.JPG',
    status: 'Draft'
  },
  {
    id: 'AR-1246',
    date: '2028-02-27 04:28:48',
    title: 'Sed ut perspiciatis unde omnis iste',
    content: 'Lorem ipsum dolor sit amet, ipsum das consectetur adipiscing elit sed...',
    image: 'DSC21012.JPG',
    status: 'Terkirim'
  },
  {
    id: 'AR-1247',
    date: '2028-02-27 04:28:48',
    title: 'Sed ut perspiciatis unde omnis iste',
    content: 'Lorem ipsum dolor sit amet, ipsum das consectetur adipiscing elit sed...',
    image: 'DSC21012.JPG',
    status: 'Gagal'
  },
];

const StatusBadge = ({ status }: { status: Article['status'] }) => {
  const styles = {
    'Draft': 'bg-[#4B5563] text-[#FFFFFF]',
    'Terkirim': 'bg-[#EEFBD1] text-[#1F5305]',
    'Gagal': 'bg-[#FCE6CF] text-[#CF0000]'
  }[status];

  return (
    <span className={`px-2 py-1 rounded text-xs ${styles}`}>
      {status}
    </span>
  );
};

export default function ArticleTable() {
  const router = useRouter();
  
  // State untuk modal
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  const [showErrorDelete, setShowErrorDelete] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Handler untuk tombol delete
  const handleDeleteClick = (article: Article) => {
    setSelectedArticle(article);
    setShowConfirmDelete(true);
  };

  // Handler untuk konfirmasi delete
  const handleConfirmDelete = () => {
    // Tutup modal konfirmasi
    setShowConfirmDelete(false);
    
    // Simulasi penghapusan artikel
    console.log('Menghapus artikel:', selectedArticle);
    
    try {
      // Simulasi API call untuk menghapus artikel      
      // Simulasi keberhasilan 
      const isSuccess = true;
      
      if (isSuccess) {
        // Tampilkan modal sukses
        setShowSuccessDelete(true);
      } else {
        // Tampilkan modal error
        setShowErrorDelete(true);
      }
    } catch (error) {
      console.error('Error deleting article:', error);
      setShowErrorDelete(true);
    }
  };

  // Handler untuk menutup modal sukses hapus
  const handleSuccessDeleteClose = () => {
    setShowSuccessDelete(false);
    // Refresh data atau lakukan tindakan lain setelah sukses hapus
    // Misalnya refetch data dari API
  };

  // Handler untuk menutup modal error hapus
  const handleErrorDeleteClose = () => {
    setShowErrorDelete(false);
  };

  return (
    <>
      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-[#EAEAEA]">
              <tr>
                <th className="w-4 p-4 text-left">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-4 text-center text-sm font-medium">Artikel Id</th>
                <th className="p-4 text-center text-sm font-medium">Tanggal Artikel</th>
                <th className="p-4 text-center text-sm font-medium">Judul Artikel</th>
                <th className="p-4 text-center text-sm font-medium">Isi Artikel</th>
                <th className="p-4 text-center text-sm font-medium">Gambar Artikel</th>
                <th className="p-4 text-center text-sm font-medium">Status</th>
                <th className="p-4 text-center text-sm font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <TableRow key={article.id} className="bg-white hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-4 text-center text-sm font-medium">{article.id}</td>
                  <td className="p-4 text-center text-sm whitespace-nowrap">{article.date}</td>
                  <td className="p-4 text-center text-sm max-w-[200px] truncate">{article.title}</td>
                  <td className="p-4 text-center text-sm max-w-[300px] truncate">{article.content}</td>
                  <td className="p-4 text-center text-sm text-gray-500">{article.image}</td>
                  <td className="p-4 text-center">
                    <StatusBadge status={article.status} />
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      {article.status === 'Terkirim' ? (
                        <button
                          onClick={() => router.push(`/articles/${article.id}`)}  
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-center"
                        >
                          <FileText className="w-4 h-4 text-gray-500" />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => router.push(`/articles/${article.id}/edit`)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Pencil className="w-4 h-4 text-gray-500" />
                          </button>
                          <button 
                            onClick={() => handleDeleteClick(article)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Trash className="w-4 h-4 text-gray-500" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Konfirmasi Hapus */}
      <ConfirmDeleteArticle 
        isOpen={showConfirmDelete}
        onClose={() => setShowConfirmDelete(false)}
        onConfirm={handleConfirmDelete}
      />

      {/* Modal Sukses Hapus */}
      <SuccessDeleteArticle 
        isOpen={showSuccessDelete}
        onClose={handleSuccessDeleteClose}
      />

      {/* Modal Error Hapus */}
      <ErrorDeleteArticle 
        isOpen={showErrorDelete}
        onClose={handleErrorDeleteClose}
      />
    </>
  );
}