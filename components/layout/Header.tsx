'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Search, Bell } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()
  
  const getPageTitle = (path: string) => {
    switch(path) {
      case '/': return 'Dashboard'
      case '/feedback': return 'Data Feedback'
      case '/users': return 'Data Pengguna'
      case '/articles': return 'Kelola Artikel'
      default: return 'Dashboard'
    }
  }

  return (
    <header className="flex items-center justify-between h-auto min-h-[80px] px-4 md:px-8 gap-4">
      {/* Page Title */}
        <h1 className="text-xl md:text-[24px] font-medium text-primary">
          {getPageTitle(pathname)}
        </h1>
      

      {/* Search Bar & Profile Container */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search placeholder"
            className="w-[320px] h-[46px] pl-12 pr-4 rounded-full bg-[#F5F5F5] border-none focus:outline-none text-sm"
          />
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
            size={20} 
          />
        </div>

        {/* Notification */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"/>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium text-right">Anandita</p>
            <p className="text-sm text-gray-500 text-right">Admin</p>
          </div>
          
          <Image
            src="/images/profile-placeholder.png"
            alt="Admin Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  )
}

export default Header