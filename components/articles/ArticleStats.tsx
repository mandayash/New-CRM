'use client';

import { Card, CardContent } from "@/components/ui/card";
import { FileText } from 'lucide-react';

export default function ArticleStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-semibold">76</p>
              <p className="text-sm text-gray-500">Total Artikel</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-green-600">71</p>
            <p className="text-sm text-gray-500">Terkirim</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-red-600">2</p>
            <p className="text-sm text-gray-500">Gagal</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-gray-600">3</p>
            <p className="text-sm text-gray-500">Draft</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}