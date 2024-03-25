import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/manga/$manga')({
    loader: redirect({
        to: '/title/$manga',
        throw: true,
        params: { manga: '$manga' },
    }) as any,              // Going to come back and fix implicit any
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
