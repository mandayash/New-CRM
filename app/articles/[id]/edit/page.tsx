// Untuk view status "Draft atau Gagal"
// app/articles/[id]/edit/page.tsx
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Data dummy untuk testing
const dummyArticle = {
  id: 'AR-1245',
  date: '2028-02-27 04:28:48',
  title: 'Sed ut perspiciatis unde omnis iste',
  content: 'Lorem ipsum dolor sit amet, ipsum das consectetur adipiscing elit sed...',
  image: 'DSC21012.JPG',
  status: 'Draft'
};

export default function EditArticlePage() {
  const params = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State untuk form
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch dan set data artikel saat komponen dimount
  useEffect(() => {
    // seharusnya untuk fetch API
    setTitle(dummyArticle.title);
    setContent(dummyArticle.content);
    
    if (dummyArticle.image) {
      setImagePreview(`/images/${dummyArticle.image}`); 
    }
  }, [params.id]);

  // Handle file upload
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    const supportedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    
    if (file && supportedFormats.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setErrorMessage('Format file tidak didukung. Harap upload file dengan format .jpg, .jpeg, atau .png');
      setShowError(true);
    }
  };

  // Handle form submission
  const handleSubmit = (action: 'save' | 'send') => {
    // Validasi form
    if (!title.trim() || !content.trim() || !imagePreview) {
      setErrorMessage('Semua field harus diisi');
      setShowError(true);
      return;
    }

    // Logic untuk save atau send
    console.log(`Article ${action}d:`, {
      id: params.id,
      title,
      content,
      image: imagePreview
    });

    // Redirect ke halaman artikel
    router.push('/articles');
  };

  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-medium">
          <span className="text-[#CF0000]">Kelola Artikel</span> | 
          <span className="text-black"> Edit Artikel</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h2 className="text-red-600 font-medium">Edit Artikel</h2>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <label className="block text-sm">
                      Gambar <span className="text-red-500">*</span>
                    </label>
                    <div 
                      className="border-2 border-dashed rounded-lg p-8 cursor-pointer"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      {imagePreview ? (
                        <div className="relative w-full aspect-video">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <div className="p-3 bg-red-50 rounded-lg">
                            <ImageIcon className="w-6 h-6 text-red-600" />
                          </div>
                          <div className="text-center">
                            <p>Seret dan lepas</p>
                            <p className="text-sm text-blue-600">atau Pilih File</p>
                            <p className="text-sm text-gray-500">(.jpg, .pdf, .png)</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title Input */}
                  <div className="space-y-2">
                    <label className="block text-sm">
                      Judul Artikel <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Masukan Judul Artikel"
                      className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  {/* Content Editor */}
                  <div className="space-y-2">
                    <label className="block text-sm">
                      Isi Artikel <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Masukan Isi Artikel"
                      className="w-full p-4 min-h-[200px] rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3">
                    <button 
                      onClick={() => handleSubmit('save')}
                      className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                    >
                      Simpan
                    </button>
                    <button 
                      onClick={() => handleSubmit('send')}
                      className="px-6 py-2 rounded-lg bg-[#CF0000] text-white hover:bg-red-700"
                    >
                      Kirim Artikel
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-1 lg:sticky lg:top-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h2 className="flex items-center gap-2">
                    <span className="p-1 rounded-full bg-gray-100">
                      <ImageIcon className="w-4 h-4" />
                    </span>
                    Preview
                  </h2>
                  
                  {imagePreview ? (
                    <div className="aspect-video rounded-lg overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-lg bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">Preview will appear here</p>
                    </div>
                  )}

                  <div className="space-y-2 max-h-[400px] overflow-y-auto px-2">
                    <h3 className="font-medium line-clamp-2">
                      {title || 'Judul artikel akan muncul di sini'}
                    </h3>
                    <div className="prose prose-sm max-w-none">
                      <p className="text-gray-600">
                        {content || 'Isi artikel akan muncul di sini...'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Error Dialog */}
      <Dialog open={showError} onOpenChange={setShowError}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              Format Tidak Didukung
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-600">{errorMessage}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setShowError(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Tutup
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}