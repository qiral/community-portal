'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart, FileText, Image, Info, LayoutDashboard } from 'lucide-react'
import { cn } from '@/lib/utils'

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Kulüp Bilgileri',
      href: '/dashboard/club-info',
      icon: Info,
    },
    {
      name: 'Etkinlikler',
      href: '/dashboard/events',
      icon: BarChart,
    },
    {
      name: 'Galeri',
      href: '/dashboard/gallery',
      icon: Image,
    },
    {
      name: 'Feed Postu',
      href: '/dashboard/feed',
      icon: FileText,
    },
  ]

  return (
    <div className="animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden">
      <div className="bg-popover text-popover-foreground relative z-20 grid gap-6 rounded-md p-4 shadow-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex w-full items-center gap-2 rounded-md p-2 text-sm font-medium hover:underline',
                  {
                    'text-primary font-semibold': isActive,
                    'text-muted-foreground': !isActive,
                  }
                )}
              >
                <Icon className="h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
