import { create, SetState } from 'zustand'

interface ClubState {
  selectedClub: { id: string; name: string; type: string } | null
  setSelectedClub: (club: { id: string; name: string; type: string }) => void
}

export const useSelectedClub = create<ClubState>((set: SetState<ClubState>) => {
  // Initially, the selected club should be set as null
  let initialSelectedClub: { id: string; name: string; type: string } | null = null

  // Ensure this runs only in the browser (since localStorage is not available on the server)
  if (typeof window !== 'undefined') {
    const storedClub = localStorage.getItem('selectedClub')
    initialSelectedClub = storedClub ? JSON.parse(storedClub) : null
  }

  return {
    selectedClub: initialSelectedClub,
    setSelectedClub: (club: { id: string; name: string; type: string }) => {
      // Save the selected club to Zustand and localStorage
      set({ selectedClub: club })

      // Store the selected club in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedClub', JSON.stringify(club))
      }
    },
  }
})
