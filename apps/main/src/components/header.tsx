'use client'

import Link from 'next/link'
import { Button } from '@community-portal/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect, useState } from 'react'
import { createClient } from '@community-portal/lib/supabase/client'
import { signOut } from '@/components/auth/auth-handler'

export function Header() {
  const supabase = createClient()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  //after will be changed to user name
  useEffect(() => {
    const getUserEmail = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUserEmail(user?.email || '')
    }
    getUserEmail()
  }, [supabase])

  useEffect(() => {
    const checkUserSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
    }
    checkUserSession()
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkUserSession()
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const handleSignOut = async () => {
    try {
      await signOut()
      setIsLoggedIn(false)
      window.location.reload()
    } catch (error) {
      console.error('Çıkış yaparken bir hata oluştu:', error)
    }
  }

  return (
    <header className="flex w-full border-b px-0 py-4">
      <div className="container flex h-8 w-full items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">com_portal</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/clubs">Kulüpler</Link>
            <Link href="/events">Etkinlikler</Link>
            <Link href="/gallery">Galeri</Link>
            <Link href="/feed">Feed</Link>
          </nav>
        </div>
        {!isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button className="outline">Giriş Yap</Button>
            </Link>
            <Link href="/register">
              <Button className="outline">Kaydol</Button>
            </Link>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{userEmail}</DropdownMenuLabel>
              <DropdownMenuItem>Hesabım</DropdownMenuItem>
              <DropdownMenuItem>Ayarlar</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>Çıkış yap</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  )
}
