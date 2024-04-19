import { Genre } from '../models/Genre'
import { Comic } from '../models/Manga'
import { TopComics } from '../models/TopManga'

export const baseUrl = 'https://api.comick.fun/'

export async function getTop(): Promise<TopComics> {
    const res = await fetch(
        `${baseUrl}top?type=trending&comic_types=manga&accept_mature_content=false`
    )
    return await res.json()
}

export async function getUpdates(): Promise<Comic[]> {
    const res = await fetch(
        `${baseUrl}chapter/?page=1&order=new&type=manga&accept_erotic_content=false`
    )
    return await res.json()
}

export async function getTrending(): Promise<Comic[]> {
    const res = await fetch(
        `${baseUrl}chapter/?page=1&order=hot&type=manga&accept_erotic_content=false`
    )
    return await res.json()
}

export async function getGenres(): Promise<Genre[]> {
    const res = await fetch(`${baseUrl}genre/`)
    return await res.json()
}

export async function getSearch(query: string): Promise<Comic[]> {
    const res = await fetch(
        `${baseUrl}v1.0/search/?type=comic&showall=true&q=${encodeURIComponent(query)}&t=true`
    )
    return await res.json()
}
