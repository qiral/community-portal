'use client'

import { useState } from 'react'
import { CalendarDays, MoreHorizontal, Pencil, Pin, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'

const posts = [
  {
    id: '1',
    title: 'Teknoloji Zirvesi Duyurusu',
    date: '2023-11-10',
    status: 'published',
    pinned: true,
    featured: true,
    likes: 45,
    comments: 12,
  },
  {
    id: '2',
    title: 'Yazılım Atölyesi Kayıtları Başladı',
    date: '2023-11-08',
    status: 'published',
    pinned: false,
    featured: true,
    likes: 32,
    comments: 8,
  },
  {
    id: '3',
    title: 'Kariyer Günleri Etkinliği',
    date: '2023-11-05',
    status: 'published',
    pinned: false,
    featured: false,
    likes: 28,
    comments: 5,
  },
  {
    id: '4',
    title: 'Yapay Zeka Semineri Değerlendirmesi',
    date: '2023-10-28',
    status: 'published',
    pinned: false,
    featured: false,
    likes: 36,
    comments: 14,
  },
  {
    id: '5',
    title: 'Yeni Dönem Planları',
    date: '2023-10-15',
    status: 'draft',
    pinned: false,
    featured: false,
    likes: 0,
    comments: 0,
  },
]

export function FeedPostsTable() {
  const [data, setData] = useState(posts)

  const togglePin = (id: string) => {
    setData(data.map((post) => (post.id === id ? { ...post, pinned: !post.pinned } : post)))
  }

  const toggleFeatured = (id: string) => {
    setData(data.map((post) => (post.id === id ? { ...post, featured: !post.featured } : post)))
  }

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Başlık</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Sabitlenmiş</TableHead>
            <TableHead>Öne Çıkan</TableHead>
            <TableHead>Etkileşim</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <CalendarDays className="text-muted-foreground mr-2 h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={post.status === 'published' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {post.status === 'published' ? 'Yayında' : 'Taslak'}
                </Badge>
              </TableCell>
              <TableCell>
                <Switch
                  checked={post.pinned}
                  onCheckedChange={() => togglePin(post.id)}
                  disabled={post.status === 'draft'}
                />
              </TableCell>
              <TableCell>
                <Switch
                  checked={post.featured}
                  onCheckedChange={() => toggleFeatured(post.id)}
                  disabled={post.status === 'draft'}
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{post.likes} beğeni</span>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-sm">{post.comments} yorum</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Menüyü aç</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Düzenle
                    </DropdownMenuItem>
                    {post.status === 'published' && (
                      <DropdownMenuItem>
                        <Pin className="mr-2 h-4 w-4" />
                        {post.pinned ? 'Sabitlemeyi Kaldır' : 'Sabitle'}
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Sil
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
