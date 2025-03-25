'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BarChart, FileText, Image, Info, LayoutDashboard } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AccountSwitcher } from '@/components/admin-page/acc-switch'

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: LayoutDashboard,
    },
    {
      name: 'Kulüp Bilgileri',
      href: '/admin/dashboard/kulup-bilgileri',
      icon: Info,
    },
    {
      name: 'Etkinlikler',
      href: '/admin/dashboard/etkinlikler',
      icon: BarChart,
    },
    {
      name: 'Galeri',
      href: '/admin/dashboard/galeri',
      icon: Image,
    },
    {
      name: 'Feed Postu',
      href: '/admin/dashboard/feed-postu',
      icon: FileText,
    },
  ]

  return (
    <nav className={cn('flex w-full items-center justify-between', className)}>
      <div className="flex items-center gap-4 lg:gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors',
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
      </div>
      <AccountSwitcher />
    </nav>
  )
}
