// components/articles/Editor.tsx
'use client';

import { useState } from 'react';

export default function Editor() {
  const [content, setContent] = useState('');

  return (
    <div className="border rounded-lg">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-2 border-b">
        <select className="px-3 py-1 rounded border">
          <option>Paragraph</option>
          <option>Heading 1</option>
          <option>Heading 2</option>
        </select>
        <button className="p-2 hover:bg-gray-100 rounded">B</button>
        <button className="p-2 hover:bg-gray-100 rounded">I</button>
        <button className="p-2 hover:bg-gray-100 rounded">Link</button>
        <div className="w-[1px] h-6 bg-gray-200 mx-2" />
        <button className="p-2 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 8h16v2H4z"/>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 8h16v2H4zM4 14h16v2H4z"/>
          </svg>
        </button>
      </div>

      {/* Editor Area */}
      <textarea
        className="w-full p-4 min-h-[200px] focus:outline-none"
        placeholder="Masukan Isi Artikel"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}