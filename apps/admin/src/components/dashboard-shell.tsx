'use client'

import type React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'

interface DashboardShellProps {
  children: React.ReactNode
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center">
          <Link
            href={process.env.NEXT_PUBLIC_MAIN_URL || '/'}
            className="hover:text-primary ml-44 mr-4 flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Geri Dön</span>
          </Link>
          <MainNav className="hidden md:flex" />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </nav>
          </div>
        </div>
        {showMobileMenu && <MobileNav />}
      </header>
      <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
    </div>
  )
}
