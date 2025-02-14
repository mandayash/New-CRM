'use client'


import Link from 'next/link'
import React, { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { ChevronLeft,FileText, ChevronRight, Eye } from 'lucide-react'

// Interface untuk data user
interface User {
  id: string
  profileImage: string
  name: string
  email: string
  phone: string
  totalFeedback: number
  totalPoints: number
  level: 'Silver Level' | 'Gold Level' | 'Platinum Level'
}

// Data dummy untuk testing
const users: User[] = [
  {
    id: 'US-1245',
    profileImage: '/profile-placeholder.png',
    name: 'Anandita Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1023,
    level: 'Gold Level'
  },
  {
    id: 'US-1245',
    profileImage: '/profile-placeholder.png',
    name: 'Koala Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1123,
    level: 'Silver Level'
  },
  {
    id: 'US-1247',
    profileImage: '/profile-placeholder.png',
    name: 'Jerapah Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1123,
    level: 'Platinum Level'
  },
  
]

// Komponen badge untuk level
const LevelBadge = ({ level }: { level: User['level'] }) => {
  const badgeStyles = {
    'Silver Level': {
      background: "linear-gradient(198deg, #ADADAD 20.34%, #D2D2D2 29.06%, #BBB 50.52%, #A0A0A0 58.25%, #959595 86.63%)",
      text: "#303030"
    },
    'Gold Level': {
      background: "linear-gradient(179deg, #FFD23D 35.57%, #EFD787 42.04%, #E1B831 57.97%, #EFD787 63.71%, rgba(242, 186, 0, 0.47) 84.77%)",
      text: "#303030"
    },
    'Platinum Level': {
      background: "linear-gradient(244deg, #B09FFF 37.63%, #8C7BDB 41.94%, #BEB0FF 52.54%, #8C7BDB 56.36%, #CBC0FF 70.38%)",
      text: "#303030"
    }
  }[level]

  return (
    <span 
      className="px-3 py-1 rounded-full text-xs font-medium"
      style={{ 
        background: badgeStyles.background,
        color: badgeStyles.text
      }}
    >
      {level}
    </span>
  )
}

const UsersTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const totalUsers = 472322
  const currentPage = 1
  const totalPages = Math.ceil(totalUsers / rowsPerPage)

  return (
    <div className="space-y-4 overflow-hidden">
      {/* Table Container */}
      <div className="rounded-lg border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[100px] text-center py-4">User Id</TableHead>
              <TableHead className="text-center">Profile</TableHead>
              <TableHead className="text-center">Nama Pengguna</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Nomor Telepon</TableHead>
              <TableHead className="text-center">Total Feedback</TableHead>
              <TableHead className="text-center">Total Poin</TableHead>
              <TableHead className="text-center">Level Poin</TableHead>
              <TableHead className="text-center w-[130px]">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-center">{user.id}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <Image
                      src={user.profileImage}
                      alt={user.name}
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                  </div>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-center font-medium">{user.totalFeedback}</TableCell>
                <TableCell className="text-center font-medium">{user.totalPoints}</TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center">
                    <LevelBadge level={user.level} />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Link 
                    href={`/users/${user.id}/history`}
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-primary text-sm px-3 py-1.5 border rounded-lg hover:border-primary transition-colors"
                  >
                    <Eye size={16} />
                    Riwayat
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination & View Options */}
      {/* Pagination */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500">
                  Show
                </span>
                <select className="bg-[#EAEAEA] px-2 py-1.5 rounded">
                  <option>12</option>
                  <option>24</option>
                  <option>36</option>
                </select>
                <span className="text-gray-500">
                  out of 472,322
                </span>
              </div>
      
              <div className="flex items-center gap-2">
                <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
                  <ChevronLeft size={16} className="text-[#080808]" />
                </button>
                
                {[1, 2, 3, '...', 15].map((page, i) => (
                  <button
                    key={i}
                    className={`w-[30px] h-[30px] flex items-center justify-center rounded-lg text-xs
                      ${page === 1 
                        ? 'bg-[#CF0000] text-white' 
                        : 'bg-[#EAEAEA] text-[#080808]'
                      }`}
                  >
                    {page}
                  </button>
                ))}
      
                <button className="p-1.5 bg-[#EAEAEA] rounded-lg">
                  <ChevronRight size={16} className="text-[#080808]" />
                </button>
              </div>
            </div>
          </div>
  )
}

export default UsersTable