import { create } from 'zustand'
import type { Store } from '@/types/store'

export const useStore = create<Store>((set) => ({
  isViewSeasons: false,
  isViewEpisodes: false,
  setIsViewSeasons: (isViewSeasons) => set({ isViewSeasons }),
  setIsViewEpisodes: (isViewEpisodes) => set({ isViewEpisodes }),
}))
