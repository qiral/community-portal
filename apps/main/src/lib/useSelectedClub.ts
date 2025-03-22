import { create, SetState } from 'zustand'

interface ClubState {
  selectedClub: { id: string; name: string; type: string } | null
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
