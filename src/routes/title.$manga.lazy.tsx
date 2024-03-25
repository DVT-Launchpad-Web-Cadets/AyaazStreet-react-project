import { createFileRoute } from '@tanstack/react-router'
import TitlePage from '../pages/TitlePage'

export const Route = createFileRoute('/title/$manga')({
    component: TitlePage,
})
