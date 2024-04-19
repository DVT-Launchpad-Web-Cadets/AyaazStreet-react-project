import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { getChapters } from '../api/manga'
import { Comic } from '../models/Manga'
import ChapterListItem from './ChapterListItem'

function ChapterList({ manga, page = 1 }: { manga: Comic; page?: number }) {
    const [currentPage, setCurrentPage] = useState(page)

    const { data: chapters } = useQuery({
        queryKey: ['getChapters', manga?.comic?.hid, currentPage],
        queryFn: () => getChapters(manga?.comic?.hid ?? '', currentPage),
        
    })

    if (!chapters?.chapters) {
        return (
            <>
                <h2 className="text-xl font-bold my-4">Chapters</h2>
                <div className="flex flex-col items-center justify-center">
                    <div className="m-4">Chapters Not Found. Return Home</div>
                    <Link to="/" className="text-blue-600 underline">
                        Home
                    </Link>
                </div>
            </>
        )
    }
    return (
        <>
            <h2 className="text-xl font-bold mt-4">Chapters</h2>
            <div className="flex flex-col">
                {chapters.chapters.map((chapter) =>
                    !chapter?.hid ? null : (
                        <ChapterListItem hid={chapter.hid} key={chapter.hid} />
                    )
                )}
            </div>
            <div className="flex justify-center my-4">
                <div className="join">
                    {currentPage !== 1 && (
                        <button
                            onClick={() =>
                                setCurrentPage(currentPage - 1)
                            }
                            className="join-item btn"
                        >
                            «
                        </button>
                    )}
                    <button className="join-item btn btn-disabled">
                        Page {currentPage}
                    </button>
                    {currentPage * 10 < chapters.total! && (
                        <button
                            
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="join-item btn"
                        >
                            »
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}
export default ChapterList
