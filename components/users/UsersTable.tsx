'use client'

import React from 'react'
import Link from 'next/link'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import { ChevronLeft,FileText, ChevronRight } from 'lucide-react'

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
    profileImage: '/path-to-image.jpg',
    name: 'Anandita Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1023,
    level: 'Gold Level'
  },
  {
    id: 'US-1245',
    profileImage: '/path-to-image.jpg',
    name: 'Koala Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1123,
    level: 'Gold Level'
  },
  {
    id: 'US-1247',
    profileImage: '/path-to-image.jpg',
    name: 'Jerapah Nabila Ramadhani',
    email: 'anandita0211@gmail.com',
    phone: '081234567891',
    totalFeedback: 23,
    totalPoints: 1123,
    level: 'Gold Level'
  },
  
]

// Komponen badge untuk level
const LevelBadge = ({ level }: { level: User['level'] }) => {
  const badgeStyles = {
    'Silver Level': 'bg-gray-200 text-gray-700',
    'Gold Level': 'bg-yellow-100 text-yellow-700',
    'Platinum Level': 'bg-purple-100 text-purple-700'
  }[level]

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${badgeStyles}`}>
      {level}
    </span>
  )
}

const UsersTable = () => {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[100px]">User Id</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Nama Pengguna</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Nomor Telepon</TableHead>
              <TableHead className="text-center">Total Feedback</TableHead>
              <TableHead className="text-center">Total Poin</TableHead>
              <TableHead>Level Poin</TableHead>
              <TableHead className="text-right">Riwayat Feedback & Poin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>
                  <Image
                    src={user.profileImage}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className="text-center">{user.totalFeedback}</TableCell>
                <TableCell className="text-center">{user.totalPoints}</TableCell>
                <TableCell>
                  <LevelBadge level={user.level} />
                </TableCell>
                <TableCell className="text-right">
                <Link 
                    href={`/users/${user.id}/history`}
                    className="flex items-center justify-end gap-2 text-gray-500 hover:text-gray-700 text-sm px-4 py-2 border rounded-lg"
                >
                    <FileText size={16} />
                    Lihat Riwayat
                </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-2">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">12</span> out of <span className="font-medium">472,322</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-lg border hover:bg-gray-50">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="px-3 py-1 rounded-lg bg-[#CF0000] text-white">1</button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-50">3</button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded-lg hover:bg-gray-50">15</button>
          <button className="p-2 rounded-lg border hover:bg-gray-50">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersTable