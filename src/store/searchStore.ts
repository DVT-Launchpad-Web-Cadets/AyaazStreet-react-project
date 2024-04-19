import { create } from 'zustand'

export const useSearchStore = create((set) => ({
    searchQuery: '',
    setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
}))
