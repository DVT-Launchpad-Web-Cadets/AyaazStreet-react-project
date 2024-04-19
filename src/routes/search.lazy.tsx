import { createFileRoute } from '@tanstack/react-router'
import ErrorPage from '../pages/ErrorPage'
import SearchPage from '../pages/SearchPage'

export const Route = createFileRoute('/search')({
    component: SearchPage,
    notFoundComponent: () => {
        return <ErrorPage />
    },
})
