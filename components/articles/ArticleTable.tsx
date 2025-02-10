'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash, FileText } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useRouter } from 'next/navigation';

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
    'Draft': 'bg-gray-100 text-gray-800',
    'Terkirim': 'bg-green-100 text-green-800',
    'Gagal': 'bg-red-100 text-red-800'
  }[status];

  return (
    <Badge className={styles} variant="outline">
      {status}
    </Badge>
  );
};

export default function ArticleTable() {
const router = useRouter();
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[30px]">
              <input type="checkbox" className="rounded" />
            </TableHead>
            <TableHead>Artikel Id</TableHead>
            <TableHead>Tanggal Artikel</TableHead>
            <TableHead>Judul Artikel</TableHead>
            <TableHead>Isi Artikel</TableHead>
            <TableHead>Gambar Artikel</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>
                <input type="checkbox" className="rounded" />
              </TableCell>
              <TableCell className="font-medium">{article.id}</TableCell>
              <TableCell>{article.date}</TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell className="max-w-xs truncate">{article.content}</TableCell>
              <TableCell>{article.image}</TableCell>
              <TableCell>
                <StatusBadge status={article.status} />
              </TableCell>
              <TableCell>
              <div className="flex items-center gap-1.5">
                {article.status === 'Terkirim' ? (
                  // Ikon untuk feedback yang sudah selesai
                  <button
                    onClick={() => router.push(`/articles/${article.id}`)}  
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <FileText size={18} className="text-gray-600" />  
                  </button>
                ) : (
                  // Ikon untuk feedback yang bgagal dan draft
                  <>
                    <button
                      onClick={() => router.push(`/articles/${article.id}/edit`)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Pencil size={18} className="text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash size={18} className="text-gray-600" />
                    </button>
                  </>
                )}
              </div>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}