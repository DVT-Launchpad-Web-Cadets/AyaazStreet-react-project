import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../pages/LandingPage'

export const Route = createFileRoute('/')({
    component: LandingPage,
    notFoundComponent: () => {
        return <p>This page doesn't exist!</p>
    },
})
