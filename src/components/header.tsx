import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b px-8">
      <div className="px-4n container flex h-16 min-w-[100%] items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">com_portal</span>
          </Link>
          <nav className="flex gap-4">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/kulüpler">Kulüpler</Link>
            <Link href="/etkinlikler">Etkinlikler</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/feed">Feed</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            {' '}
            <Button variant="outline">Giriş Yap</Button>{' '}
          </Link>
          <Link href="/register">
            {' '}
            <Button variant="outline">Kaydol</Button>{' '}
          </Link>
        </div>
      </div>
    </header>
  )
}
