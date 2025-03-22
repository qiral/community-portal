'use client'

import { useState } from 'react'
import { CalendarDays, MoreHorizontal, Pencil, Trash2, Users } from 'lucide-react'
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

const events = [
  {
    id: '1',
    title: 'Teknoloji Zirvesi',
    date: '2023-11-15',
    time: '13:00',
    location: 'Ana Konferans Salonu',
    status: 'upcoming',
    type: 'conference',
    capacity: 200,
    registered: 150,
  },
  {
    id: '2',
    title: 'Yazılım Atölyesi',
    date: '2023-11-20',
    time: '15:30',
    location: 'Bilgisayar Laboratuvarı',
    status: 'upcoming',
    type: 'workshop',
    capacity: 30,
    registered: 25,
  },
  {
    id: '3',
    title: 'Kariyer Günleri',
    date: '2023-12-05',
    time: '10:00',
    location: 'Merkez Kampüs',
    status: 'upcoming',
    type: 'seminar',
    capacity: 150,
    registered: 80,
  },
  {
    id: '4',
    title: 'Yapay Zeka Semineri',
    date: '2023-10-25',
    time: '14:00',
    location: 'B Blok Amfi',
    status: 'completed',
    type: 'seminar',
    capacity: 100,
    registered: 95,
  },
  {
    id: '5',
    title: 'Tanışma Etkinliği',
    date: '2023-09-30',
    time: '18:00',
    location: 'Kampüs Bahçesi',
    status: 'completed',
    type: 'social',
    capacity: 50,
    registered: 45,
  },
]

export function EventsTable() {
  const [data, setData] = useState(events)

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Etkinlik</TableHead>
            <TableHead>Tarih & Saat</TableHead>
            <TableHead>Konum</TableHead>
            <TableHead>Tür</TableHead>
            <TableHead>Katılım</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead className="text-right">İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <CalendarDays className="text-muted-foreground mr-2 h-4 w-4" />
                  <span>
                    {new Date(event.date).toLocaleDateString('tr-TR')} {event.time}
                  </span>
                </div>
              </TableCell>
              <TableCell>{event.location}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize">
                  {event.type === 'conference' && 'Konferans'}
                  {event.type === 'workshop' && 'Atölye'}
                  {event.type === 'seminar' && 'Seminer'}
                  {event.type === 'social' && 'Sosyal'}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Users className="text-muted-foreground mr-2 h-4 w-4" />
                  <span>
                    {event.registered}/{event.capacity}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {event.status === 'upcoming' ? 'Yaklaşan' : 'Tamamlandı'}
                </Badge>
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
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      Katılımcılar
                    </DropdownMenuItem>
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
