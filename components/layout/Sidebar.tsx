'use client'
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, MessageSquare, Users, FileText } from 'lucide-react'
import { usePathname } from 'next/navigation'


const Sidebar = () => {
    const pathname = usePathname()
    const menuItems = [
        {
            title: 'Dashboard',
            icon: <LayoutDashboard  className="w-5 h-5"/>,
            path: '/'
        },
        {
            title: 'Data Feedback',
            icon: <MessageSquare className="w-5 h-5"/>,
            path: '/feedback'
        },
        {
            title: 'Data Pengguna',
            icon: <Users className="w-5 h-5"/>,
            path: '/users'
        },
        {
            title: 'Kelola Artikel',
            icon: <FileText className="w-5 h-5"/>,
            path: '/articles'
        }

    ]

    return (
        <aside className="
        w-[238px]
        min-h-screen
        bg-primary
        fixed top-0 left-0
        ">
            {/* Logo */}
            <div className="px-7 py-6">
                <Image
                src="/images/LOGO LRT SUMSEL.png"
                width={170}
                height={65}
                alt="Logo"
                className="object-contain"
                priority/>
            </div>

            {/* Menu */}
            <nav className="mt-8 px-4">
                {menuItems.map((item) => (
                    <Link
                        key={item.title}
                        href={item.path}
                        className={`
                            flex items-center h-[52px] px-7
                            rounded-3xl mx-2 my-1
                            group  
                            ${pathname === item.path 
                                ? 'bg-white text-primary' 
                                : 'text-white hover:bg-white hover:text-primary'
                            }
                            transition-all duration-200
                        `}
                    >
                        <div className={`
                            flex items-center
                            ${pathname === item.path 
                                ? '[&_svg]:text-primary' 
                                : '[&_svg]:text-white group-hover:[&_svg]:text-primary'
                            }
                        `}>
                            {item.icon}
                            <span className="ml-3 font-sf-pro-display font-medium">
                                {item.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar