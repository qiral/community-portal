import Link from 'next/link'
import { Button } from '@community/ui'
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
import { supabase } from '@/lib/supabaseClient'
import { signOut } from '@/components/auth/Auth'

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsLoggedIn(!!session)
    }
    checkUserSession()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      checkUserSession()
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      setIsLoggedIn(false)
    } catch (error) {
      console.error('Çıkış yaparken bir hata oluştu:', error)
    }
  }

  return (
    <header className="border-b px-8">
      <div className="px-4n container flex h-16 min-w-[100%] items-center justify-between">
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
              <Button variant="outline">Giriş Yap</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline">Kaydol</Button>
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
              <DropdownMenuLabel>İsim Soyisim</DropdownMenuLabel>
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
