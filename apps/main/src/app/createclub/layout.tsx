import type React from 'react'
import { Inter } from 'next/font/google'
import ToastProvider from '@/components/createclub/toast-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Club Management',
    default: 'Club Management',
  },
  description: 'Create and manage clubs for your organization',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastProvider />
      </body>
    </html>
  )
}
