import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import DashboardShell from '@/components/admin-page/dashboard-shell'
import { DashboardHeader } from '@/components/admin-page/dashboard-header'
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
  title: 'Yeni Etkinlik',
  description: 'Yeni bir etkinlik oluşturun',
}

export default function YeniEtkinlikPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Yeni Etkinlik" text="Yeni bir etkinlik oluşturun.">
        <Link href="/admin/dashboard/etkinlikler">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Button>
        </Link>
      </DashboardHeader>
      <Card>
        <CardHeader>
          <CardTitle>Etkinlik Bilgileri</CardTitle>
          <CardDescription>Etkinlik detaylarını girin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Etkinlik Başlığı</Label>
            <Input id="title" placeholder="Etkinlik başlığını girin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Etkinlik Açıklaması</Label>
            <Textarea
              id="description"
              placeholder="Etkinlik açıklamasını girin"
              className="min-h-[120px]"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="date">Tarih</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Saat</Label>
              <Input id="time" type="time" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Konum</Label>
            <Input id="location" placeholder="Etkinlik konumunu girin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="capacity">Kapasite</Label>
            <Input id="capacity" type="number" placeholder="Etkinlik kapasitesini girin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Etkinlik Türü</Label>
            <Select>
              <SelectTrigger id="type">
                <SelectValue placeholder="Etkinlik türünü seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="seminar">Seminer</SelectItem>
                <SelectItem value="conference">Konferans</SelectItem>
                <SelectItem value="social">Sosyal Etkinlik</SelectItem>
                <SelectItem value="other">Diğer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Etkinlik Görseli</Label>
            <Input id="image" type="file" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Etkinliği Oluştur</Button>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}
