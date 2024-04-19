import { create } from 'zustand'
import { SearchState } from '../models/Store'

export const useSearchStore = create<SearchState>()((set) => ({
    searchQuery: '',
    setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
}))
