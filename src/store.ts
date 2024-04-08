import { create } from 'zustand'
import { Issue } from './@types/issues'

type Store = {
    issues: Issue[]
    setData: (data: Issue[], name: string) => void
    search: string
    setSearch: (search: string) => void
}

const initialState: Store = {
    issues: [],
    setData: () => {},
    search: '',
    setSearch: () => {},
}

export const useStore = create<Store>((set) => ({
    ...initialState,
    setData: (data, name) => {
        set({ issues: data })
        if (!name) return
        window.sessionStorage.setItem(name, JSON.stringify(data)) // Save data to session storage
    },
    setSearch: (search) => set({ search }),
}))
