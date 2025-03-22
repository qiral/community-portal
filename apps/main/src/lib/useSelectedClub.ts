import { create, SetState } from 'zustand'
import { icons } from '@/components/admin-page/acc-switch'

interface ClubState {
  selectedClub: { id: string; name: string; type: string; logoId: keyof typeof icons } | null
  setSelectedClub: (club: { id: string; name: string; type: string }) => void
}

export const useSelectedClub = create<ClubState>((set: SetState<ClubState>) => {
  let initialSelectedClub: { id: string; name: string; type: string } | null = null

  if (typeof window !== 'undefined') {
    const storedClub = localStorage.getItem('selectedClub')
    initialSelectedClub = storedClub ? JSON.parse(storedClub) : null
  }

  return {
    selectedClub: initialSelectedClub,
    setSelectedClub: (club: { id: string; name: string; type: string }) => {
      set({ selectedClub: club })

      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedClub', JSON.stringify(club))
      }
    },
  }
})
