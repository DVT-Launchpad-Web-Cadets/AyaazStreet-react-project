import { createLazyFileRoute } from '@tanstack/react-router'
import ErrorPage from '../pages/ErrorPage'

export const Route = createLazyFileRoute('/title')({
    notFoundComponent: ErrorPage,
})
