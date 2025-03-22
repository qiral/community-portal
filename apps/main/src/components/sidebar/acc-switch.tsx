'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'
import { getAdminClubs } from '@/lib/club/clubuser'
import { useRouter } from 'next/navigation'
import { useSelectedClub } from '@/lib/useSelectedClub'
const icons = {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
}

export function AccountSwitcher() {
  const { isMobile } = useSidebar()
  const [accounts, setAccounts] = React.useState<
    { name: string; logoId: keyof typeof icons; type: string; id: string }[]
  >([])
  const { selectedClub, setSelectedClub } = useSelectedClub()
  const router = useRouter()

  React.useEffect(() => {
    const storedClub = localStorage.getItem('selectedClub')
    if (storedClub) {
      setSelectedClub(JSON.parse(storedClub))
    }
  }, [setSelectedClub])

  React.useEffect(() => {
    async function fetchAccounts() {
      try {
        const response = await getAdminClubs()
        let accountsList: { name: string; logoId: keyof typeof icons; type: string; id: string }[] =
          []
        if (response.success) {
          const adminAccounts = response.data.map(
            (club: { name: string; role: string; id: string }) => ({
              name: club.name,
              logoId:
                club.id === selectedClub?.id
                  ? selectedClub.logoId
                  : (Object.keys(icons)[
                      Math.floor(Math.random() * Object.keys(icons).length)
                    ] as keyof typeof icons),
              type: club.role,
              id: club.id,
            })
          )
          accountsList = accountsList.concat(adminAccounts)
        }
        setAccounts(accountsList)
        if (!selectedClub && accountsList.length > 0) {
          setSelectedClub(accountsList[0])
        }
      } catch (error) {
        console.error('Error fetching accounts:', error)
      }
    }
    fetchAccounts()
  }, [selectedClub, setSelectedClub])

  const handleAccountClick = (account: {
    id: string
    name: string
    type: string
    logoId: keyof typeof icons
  }) => {
    if (account.id !== 'default-account') {
      setSelectedClub(account)
      localStorage.setItem('selectedClub', JSON.stringify(account))
      router.push(`/admin`)
    }
  }

  const getLogoComponent = (logoId: keyof typeof icons) => icons[logoId]

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gray-800">
                  <AudioWaveform className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-semibold">Admin Hesapları</div>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? 'bottom' : 'right'}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Accounts
            </DropdownMenuLabel>
            {accounts.filter((account) => account.id !== 'default-account').length === 0 ? (
              <DropdownMenuItem className="text-muted-foreground">
                Admin hesabınız yok
              </DropdownMenuItem>
            ) : (
              accounts.map((account, index) => (
                <DropdownMenuItem
                  key={account.id}
                  onClick={() => handleAccountClick(account)}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    {account.logoId &&
                      React.createElement(getLogoComponent(account.logoId), {
                        className: 'size-4 shrink-0',
                      })}
                  </div>
                  {account.name}
                </DropdownMenuItem>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
