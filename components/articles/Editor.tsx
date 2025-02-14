'use client';

import { useState } from 'react';
import { 
  Bold, 
  Italic, 
  Link, 
  List, 
  ListOrdered,
  ChevronDown 
} from 'lucide-react';

export default function Editor() {
  const [content, setContent] = useState('');

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 border-b overflow-x-auto">
        {/* Paragraph Dropdown */}
        <div className="flex-shrink-0">
          <button className="flex items-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm border rounded hover:bg-gray-100 transition-colors min-w-[100px] sm:min-w-[120px]">
            <span className="truncate">Paragraph</span>
            <ChevronDown className="w-4 h-4 flex-shrink-0" />
          </button>
        </div>

        <div className="w-[1px] h-5 sm:h-6 bg-gray-200 mx-1" />

        {/* Formatting Buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors">
            <Bold className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors">
            <Italic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors">
            <Link className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        <div className="w-[1px] h-5 sm:h-6 bg-gray-200 mx-1" />

        {/* List Buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors">
            <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded transition-colors">
            <ListOrdered className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="w-full p-2 sm:p-4">
        <textarea
          className="w-full min-h-[200px] sm:min-h-[300px] p-2 focus:outline-none text-sm sm:text-base resize-y"
          placeholder="Masukan Isi Artikel"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    </div>
  );
}