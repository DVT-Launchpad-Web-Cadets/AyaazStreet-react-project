import { createFileRoute } from '@tanstack/react-router'
import ErrorPage from '../pages/ErrorPage'

export const Route = createFileRoute('/manga/$manga')({
    notFoundComponent: ErrorPage,
    //May need code for future reference
    // loader: redirect({
    //     to: '/title/$manga',
    //     throw: true,
    //     params: { manga: '$manga' },
    // }) as any,              // Going to come back and fix implicit any
})

//May need code for future reference
// export const Route = createFileRoute('/manga/$manga')({
//     component: RedirectToMangaTitlePage,
// })

// function RedirectToMangaTitlePage() {
//     const mangaTitle = Route.useParams()
//     return redirect({
//         to: '/title/$manga',
//         throw: true,
//         params: { manga: String(mangaTitle) },
//     })
// }
