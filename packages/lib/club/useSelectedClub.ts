import { create } from 'zustand'
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

export const icons = {
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
