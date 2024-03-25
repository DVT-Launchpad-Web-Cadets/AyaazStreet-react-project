import { createLazyFileRoute } from '@tanstack/react-router'
import MangaPage from '../pages/MangaPage'

export const Route = createLazyFileRoute('/manga/$manga/$chapter')({
    component: MangaPage,
    notFoundComponent: () => {
        return <p>This manga not found</p>
    },
})
