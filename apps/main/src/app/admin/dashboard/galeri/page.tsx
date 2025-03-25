import type { Metadata } from 'next'
import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import DashboardShell from '@/components/admin-page/dashboard-shell'
import { DashboardHeader } from '@/components/admin-page/dashboard-header'
import { Button } from '@/components/ui/button'
import { GalleryGrid } from '@/components/admin-page/gallery-grid'

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Kulüp galerisini yönetin',
}

export default function GaleriPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Galeri(Placeholder)"
        text="Kulüp fotoğraf ve video galerisini yönetin."
      >
        <div className="flex space-x-2">
          <Link href="/admin/dashboard/galeri/yukle">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Yeni Yükle
            </Button>
          </Link>
          <Button variant="outline">Albüm Oluştur</Button>
        </div>
      </DashboardHeader>
      <GalleryGrid />
    </DashboardShell>
  )
}
