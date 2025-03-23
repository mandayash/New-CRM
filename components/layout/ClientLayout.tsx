// components/layout/ClientLayout.tsx
'use client';

import Sidebar from "@/components/layout/Sidebar";
import Navbar from '@/components/layout/Header'
import { SidebarProvider } from "@/context/SideBarContext";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if the current path is login
  const isLoginPage = pathname === '/login';
  
  // Jika halaman login, render tanpa sidebar dan navbar
  if (isLoginPage) {
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }
  
  // Jika bukan halaman login, render dengan sidebar dan navbar
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="ml-0 sm:ml-[238px]"> 
        <Navbar />
        <div className="p-4 sm:p-8 pt-0 sm:pt-0">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}