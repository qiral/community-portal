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
import { Switch } from '@/components/ui/switch'

export const metadata: Metadata = {
  title: 'Yeni Feed Postu',
  description: 'Yeni bir feed postu oluşturun',
}

export default function YeniFeedPostuPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Yeni Feed Postu" text="Yeni bir feed postu oluşturun.">
        <Link href="/admin/dashboard/feed-postu">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Button>
        </Link>
      </DashboardHeader>
      <Card>
        <CardHeader>
          <CardTitle>Post Bilgileri</CardTitle>
          <CardDescription>Feed postu detaylarını girin.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Başlık</Label>
            <Input id="title" placeholder="Post başlığını girin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">İçerik</Label>
            <Textarea id="content" placeholder="Post içeriğini girin" className="min-h-[200px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Görsel</Label>
            <Input id="image" type="file" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="pinned" />
            <Label htmlFor="pinned">Sabitlenmiş Post</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="featured" />
            <Label htmlFor="featured">Öne Çıkan Post</Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Etiketler</Label>
            <Input id="tags" placeholder="Etiketleri virgülle ayırarak girin" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-2">
            <Button>Yayınla</Button>
            <Button variant="outline">Taslak Olarak Kaydet</Button>
          </div>
        </CardFooter>
      </Card>
    </DashboardShell>
  )
}
