'use client';

import ArticleStats from '@/components/articles/ArticleStats';
import ArticleTable from '@/components/articles/ArticleTable';
import { Plus, Filter, Table, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ArticlesPage() {
  return (
    <div className="space-y-6">
      
      {/* Stats Section */}
      <ArticleStats />

      {/* Actions Section */}
      <div className="flex items-center gap-4">
      <Link
            href="/articles/create"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#CF0000] text-white rounded-lg hover:bg-red-700"
            >
            <Plus className="w-4 h-4" />
            Tambah Artikel
    </Link>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <Button variant="default" className="bg-[#CF0000] hover:bg-red-700">Semua</Button>
          <Button variant="outline">Terkirim</Button>
          <Button variant="outline">Draft</Button>
          <Button variant="outline">Gagal</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search placeholder"
              className="w-full min-w-[280px] lg:w-[320px] h-[46px] pl-10 pr-4 rounded-lg bg-gray-100"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={20} />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Table size={20} />
            Tampilkan Tabel
          </Button>
        </div>
      </div>

      {/* Table */}
      <ArticleTable />
    </div>
  );
}