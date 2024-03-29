import { createLazyFileRoute } from '@tanstack/react-router'
import MangaPage from '../pages/MangaPage'
import ErrorPage from '../pages/ErrorPage'

export const Route = createLazyFileRoute('/manga/$manga/$chapter')({
    component: MangaPage,
    notFoundComponent: () => {
        return <ErrorPage />
    },
})
