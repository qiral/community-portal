import { create } from 'zustand'
import { icons } from '@/components/admin-page/acc-switch'

interface ClubState {
  selectedClub: { id: string; name: string; type: string; logoId: keyof typeof icons } | null
  setSelectedClub: (club: {
    id: string
    name: string
    type: string
    logoId: keyof typeof icons
  }) => void
}

export const useSelectedClub = create<ClubState>((set) => {
  let initialSelectedClub: {
    id: string
    name: string
    type: string
    logoId: keyof typeof icons
  } | null = null

  if (typeof window !== 'undefined') {
    const storedClub = localStorage.getItem('selectedClub')
    if (storedClub) {
      initialSelectedClub = JSON.parse(storedClub)
    }
  }

  return {
    selectedClub: initialSelectedClub,
    setSelectedClub: (club: {
      id: string
      name: string
      type: string
      logoId: keyof typeof icons
    }) => {
      set((state) => ({ ...state, selectedClub: club }))

      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedClub', JSON.stringify(club))
      }
    },
  }
})
