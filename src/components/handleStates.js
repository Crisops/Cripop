import { create } from 'zustand'

export const useViewSeasons = create((set) => ({
  isView: false,
  setIsView: (isView) => set({ isView })
}))
