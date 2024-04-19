/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const TitleLazyImport = createFileRoute('/title')()
const SearchLazyImport = createFileRoute('/search')()
const MangaLazyImport = createFileRoute('/manga')()
const TitleMangaLazyImport = createFileRoute('/title/$manga')()
const MangaMangaLazyImport = createFileRoute('/manga/$manga')()
const MangaMangaChapterLazyImport = createFileRoute('/manga/$manga/$chapter')()

// Create/Update Routes

const TitleLazyRoute = TitleLazyImport.update({
  path: '/title',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/title.lazy').then((d) => d.Route))

const SearchLazyRoute = SearchLazyImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/search.lazy').then((d) => d.Route))

const MangaLazyRoute = MangaLazyImport.update({
  path: '/manga',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/manga.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TitleMangaLazyRoute = TitleMangaLazyImport.update({
  path: '/$manga',
  getParentRoute: () => TitleLazyRoute,
} as any).lazy(() => import('./routes/title.$manga.lazy').then((d) => d.Route))

const MangaMangaLazyRoute = MangaMangaLazyImport.update({
  path: '/$manga',
  getParentRoute: () => MangaLazyRoute,
} as any).lazy(() => import('./routes/manga.$manga.lazy').then((d) => d.Route))

const MangaMangaChapterLazyRoute = MangaMangaChapterLazyImport.update({
  path: '/$chapter',
  getParentRoute: () => MangaMangaLazyRoute,
} as any).lazy(() =>
  import('./routes/manga.$manga.$chapter.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/manga': {
      preLoaderRoute: typeof MangaLazyImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchLazyImport
      parentRoute: typeof rootRoute
    }
    '/title': {
      preLoaderRoute: typeof TitleLazyImport
      parentRoute: typeof rootRoute
    }
    '/manga/$manga': {
      preLoaderRoute: typeof MangaMangaLazyImport
      parentRoute: typeof MangaLazyImport
    }
    '/title/$manga': {
      preLoaderRoute: typeof TitleMangaLazyImport
      parentRoute: typeof TitleLazyImport
    }
    '/manga/$manga/$chapter': {
      preLoaderRoute: typeof MangaMangaChapterLazyImport
      parentRoute: typeof MangaMangaLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  MangaLazyRoute.addChildren([
    MangaMangaLazyRoute.addChildren([MangaMangaChapterLazyRoute]),
  ]),
  SearchLazyRoute,
  TitleLazyRoute.addChildren([TitleMangaLazyRoute]),
])

/* prettier-ignore-end */
