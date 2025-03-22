'use client'

import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
  const [accounts, setAccounts] = React.useState<
    { name: string; logoId: keyof typeof icons; type: string; id: string }[]
  >([])
  const { selectedClub, setSelectedClub } = useSelectedClub()
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

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
              logoId: selectedClub?.id
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
  }, [setSelectedClub, selectedClub])

  const handleAccountClick = (account: {
    id: string
    name: string
    type: string
    logoId: keyof typeof icons
  }) => {
    setSelectedClub(account)
  }
  const getLogoComponent = (logoId: keyof typeof icons) => icons[logoId]

  if (!isClient) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 rounded-lg bg-gray-100 p-2 transition hover:bg-gray-200">
          {selectedClub && (
            <>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gray-300">
                {selectedClub.logoId &&
                  React.createElement(getLogoComponent(selectedClub.logoId), {
                    className: 'size-4',
                  })}
              </div>
              <div className="text-sm leading-tight">
                <span className="block font-semibold">{selectedClub.name}</span>
                <span className="block text-xs text-gray-500">{selectedClub.type}</span>
              </div>
            </>
          )}
          <ChevronsUpDown className="ml-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-lg" align="start" side="bottom" sideOffset={4}>
        <DropdownMenuLabel className="text-muted-foreground text-xs">Accounts</DropdownMenuLabel>
        {accounts.map((account, index) => (
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
            <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
