'use client'

import * as React from 'react'
import { Bot, Command, Settings2, SquareTerminal } from 'lucide-react'
import { NavMain } from '@/components/sidebar/nav-main'
import { AccountSwitcher } from '@/components/sidebar/acc-switch'
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'

const data = {
  navMain: [
    {
      title: 'Kulüpler',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Kulüp Oluştur',
          url: '/createclub',
        },
        {
          title: 'Kayıtlı Olunan Kulüpler',
          url: '#',
        },
        {
          title: 'Kulüp Duyuruları',
          url: '#',
        },
        {
          title: 'Kulüp Tercihleri',
          url: '#',
        },
      ],
    },
    {
      title: 'Sosyal',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Mesajlar',
          url: '#',
        },
        {
          title: 'Arkadaşlar',
          url: '#',
        },
        {
          title: 'Durum',
          url: '#',
        },
      ],
    },
    {
      title: 'Etkinlikler',
      url: '#',
      icon: Command,
      items: [
        {
          title: 'Kayıt Olunan Etkinlikler',
          url: '#',
        },
        {
          title: 'Etkinlik Takvimi',
          url: '#',
        },
      ],
    },
    {
      title: 'Ayarlar',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Hesap Ayarları',
          url: '#',
        },
        {
          title: 'Rol Ayarları',
          url: '#',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AccountSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
