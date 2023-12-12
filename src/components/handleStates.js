import { create } from 'zustand'

export const useViewSeasons = create((set) => ({
  isView: false,
  isViewEpisodes: false,
  viewSeason: { season: null },
  setIsView: (isView) => set({ isView }),
  setIsViewEpisodes: (isViewEpisodes) => set({ isViewEpisodes }),
  setViewSeason: (viewSeason) => set({ viewSeason })
}))

export const useBoxSearch = create(set => ({
  isBoxSearch: false,
  setBoxSearch: (isBoxSearch) => set({ isBoxSearch })
}))
