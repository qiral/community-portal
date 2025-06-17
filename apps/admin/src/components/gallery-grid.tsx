'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, MoreHorizontal, Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const galleryItems = [
  {
    id: '1',
    title: 'Teknoloji Zirvesi',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Etkinlikler',
    date: '2023-11-15',
  },
  {
    id: '2',
    title: 'Yazılım Atölyesi',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Etkinlikler',
    date: '2023-11-20',
  },
  {
    id: '3',
    title: 'Kariyer Günleri',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Etkinlikler',
    date: '2023-12-05',
  },
  {
    id: '4',
    title: 'Yapay Zeka Semineri',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Etkinlikler',
    date: '2023-10-25',
  },
  {
    id: '5',
    title: 'Tanışma Etkinliği',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Geziler',
    date: '2023-09-30',
  },
  {
    id: '6',
    title: 'Yönetim Kurulu Toplantısı',
    type: 'image',
    url: '/placeholder.svg?height=300&width=400',
    album: 'Toplantılar',
    date: '2023-10-10',
  },
]

export function GalleryGrid() {
  const [data] = useState(galleryItems)

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="all">Tümü</TabsTrigger>
        <TabsTrigger value="Etkinlikler">Etkinlikler</TabsTrigger>
        <TabsTrigger value="Geziler">Geziler</TabsTrigger>
        <TabsTrigger value="Toplantılar">Toplantılar</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>
      </TabsContent>
      {['Etkinlikler', 'Geziler', 'Toplantılar'].map((album) => (
        <TabsContent key={album} value={album} className="mt-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data
              .filter((item) => item.album === album)
              .map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function GalleryItem({ item }: { item: (typeof galleryItems)[0] }) {
  return (
    <div className="bg-background group relative overflow-hidden rounded-lg border">
      <div className="relative aspect-square">
        <Image
          src={item.url || '/placeholder.svg'}
          alt={item.title}
          fill
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium">{item.title}</h3>
        <p className="text-muted-foreground text-sm">{item.album}</p>
      </div>
      <div className="absolute right-2 top-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 h-8 w-8 backdrop-blur-sm"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Menüyü aç</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />
              Düzenle
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Download className="mr-2 h-4 w-4" />
              İndir
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Sil
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
