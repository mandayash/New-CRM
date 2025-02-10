'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Search, Bell, Menu } from 'lucide-react'

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
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex flex-col lg:flex-row lg:items-center h-auto min-h-[80px] px-4 md:px-8 py-4 gap-4">
        {/* Left Section: Page Title */}
        <h1 className="text-xl md:text-[24px] font-medium text-[#630022] flex-shrink-0">
          {getPageTitle(pathname)}
        </h1>

        {/* Right Section: Search & Profile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 lg:ml-auto w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 lg:flex-initial lg:min-w-[320px] lg:max-w-[400px]">
            <input
              type="text"
              placeholder="Search placeholder"
              className="w-full h-[46px] pl-12 pr-4 rounded-full bg-[#F5F5F5] border-none focus:outline-none focus:ring-2 focus:ring-[#630022]/20 text-sm"
            />
            <Search 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
              size={20} 
            />
          </div>

          {/* Notification & Profile Container */}
          <div className="flex items-center gap-6 flex-shrink-0">
            {/* Notification */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
              </button>
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"/>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <p className="font-medium text-right">Anandita</p>
                <p className="text-sm text-gray-500 text-right">Admin</p>
              </div>
              
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image
                  src="/images/profile-placeholder.png"
                  alt="Admin Profile"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header