import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import DashboardShell from '@/components/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard-header'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const metadata: Metadata = {
  title: 'Galeri Yükle',
  description: 'Galeriye yeni içerik yükleyin',
}

export default function GaleriYuklePage() {
  return (
    <DashboardShell>
      <div className="container mx-auto max-w-4xl space-y-6 py-6">
        <DashboardHeader
          heading="Galeriye Yükle"
          text="Galeriye yeni fotoğraf veya video yükleyin."
        >
          <Link href="/dashboard/gallery">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </Button>
          </Link>
        </DashboardHeader>
        <Card>
          <CardHeader>
            <CardTitle>Medya Yükle</CardTitle>
            <CardDescription>
              Galeriye eklemek istediğiniz medya dosyalarını yükleyin.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Başlık</Label>
              <Input id="title" placeholder="Medya başlığını girin" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Açıklama</Label>
              <Textarea
                id="description"
                placeholder="Medya açıklamasını girin"
                className="min-h-[80px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="album">Albüm</Label>
              <Select>
                <SelectTrigger id="album">
                  <SelectValue placeholder="Albüm seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="etkinlikler">Etkinlikler</SelectItem>
                  <SelectItem value="geziler">Geziler</SelectItem>
                  <SelectItem value="toplantilar">Toplantılar</SelectItem>
                  <SelectItem value="diger">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="files">Dosyalar</Label>
              <Input id="files" type="file" multiple />
              <p className="text-muted-foreground mt-1 text-sm">
                Birden fazla dosya seçebilirsiniz. Desteklenen formatlar: JPG, PNG, GIF, MP4.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tags">Etiketler</Label>
              <Input id="tags" placeholder="Etiketleri virgülle ayırarak girin" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Yükle</Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardShell>
  )
}
