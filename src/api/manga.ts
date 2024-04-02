import { ChapterDetails } from '../models/Chapter'
import { Comic } from '../models/Manga'
import { baseUrl } from './categories'

export async function getMangaBySlug(slug: string): Promise<Comic> {
    const res = await fetch(`${baseUrl}comic/${slug}`)
    return await res.json()
}

export async function getChapter(hid: string): Promise<ChapterDetails> {
    const res = await fetch(`${baseUrl}chapter/${hid}`)
    return await res.json()
}

export async function getChapters(
    hid: string,
    page: number = 1
): Promise<ChapterDetails> {
    const res = await fetch(`${baseUrl}comic/${hid}/chapters?page=${page}`)
    return await res.json()
}
