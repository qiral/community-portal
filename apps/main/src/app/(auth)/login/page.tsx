import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { LoginForm } from '../../../components/auth/login-form'

export const metadata: Metadata = {
  title: 'Giriş Yap - Community Portal',
  description: 'Community Portal giriş sayfası',
}

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      {/* Form Section */}
      <div className="flex w-1/3 items-center justify-center bg-slate-100 px-4">
        <div className="flex w-full flex-col items-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Hoş Geldiniz</h1>
            <p className="text-muted-foreground text-sm">
              Giriş yapmak için email adresinizi ve şifrenizi girin
            </p>
          </div>
          <div className="w-2/3 rounded-lg bg-white p-6 shadow-md">
            <LoginForm />
          </div>
          <p className="text-muted-foreground text-center text-sm">
            <Link href="/register" className="hover:text-brand underline underline-offset-4">
              Hesabınız yok mu? Kaydol
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-2/3">
        <Image
          src="/login.jpg"
          alt="Community"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
