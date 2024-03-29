import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../pages/LandingPage'
import ErrorPage from '../pages/ErrorPage'

export const Route = createFileRoute('/')({
    component: LandingPage,
    notFoundComponent: () => {
        return <ErrorPage />
    },
})
