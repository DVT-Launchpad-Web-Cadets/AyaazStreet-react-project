import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { getChapters, getMangaBySlug } from '../api/manga'
import ChapterList from '../components/ChapterList'
import { Route } from '../routes/title.$manga.lazy'

function TitlePage() {
    const { manga } = Route.useParams()

    const { data: mangaDetails } = useQuery({
        queryKey: [`getMangaBySlug`, manga],
        queryFn: () => getMangaBySlug(manga),
    })

    console.log(mangaDetails)

    const [showMoreDesc, setShowMoreDesc] = useState(false)

    if (
        !(
            mangaDetails?.authors?.[0]?.name ||
            mangaDetails?.comic?.follow_count ||
            mangaDetails?.comic?.last_chapter ||
            mangaDetails?.comic?.title ||
            mangaDetails?.comic?.hid ||
            mangaDetails?.comic?.md_comic_md_genres?.[0]?.md_genres?.name ||
            mangaDetails?.comic?.md_covers?.[0]?.b2key ||
            mangaDetails?.comic?.desc ||
            mangaDetails?.comic?.user_follow_count
        )
    ) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="m-4">Manga Not Found. Return Home</div>
                <Link to="/" className="text-blue-600 underline">
                    Home
                </Link>
            </div>
        )
    }
    return (
        <>
            <header
                id="cover"
                className="card rounded-none w-full h-96 image-full"
            >
                <figure>
                    <img
                        className="object-cover object-top w-full"
                        src={`https://meo3.comick.pictures/${mangaDetails?.comic?.md_covers?.[0].b2key}`}
                        alt={mangaDetails?.comic?.title}
                    />
                </figure>
                <div className="card-body justify-start w-9/12 text-gradient p-0">
                    <Link to="/">
                        <button className="btn btn-circle m-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
            <main className="m-4">
                <h1 className="text-xl">
                    {mangaDetails?.comic?.title}
                    {mangaDetails?.comic?.year === new Date().getFullYear() && (
                        <span className="badge badge-md ml-2">NEW</span>
                    )}
                </h1>
                <p className="text-sm flex items-center">
                    {mangaDetails?.comic?.year}
                    <img
                        className="h-8 mx-2"
                        src="https://flagsapi.com/JP/flat/64.png"
                    ></img>
                    {mangaDetails?.comic?.chapter_count} chapter
                    {mangaDetails?.comic?.chapter_count > 1 && 's'}
                </p>
                <button className="btn btn-primary my-4 w-full">
                    Read Now
                </button>
                <p className="text-base">
                    {showMoreDesc
                        ? mangaDetails?.comic?.desc
                        : `${mangaDetails?.comic?.desc?.substring(0, 100)}...`}
                    <button
                        className="ml-2 font-bold"
                        onClick={() => setShowMoreDesc(!showMoreDesc)}
                    >
                        {showMoreDesc ? 'less' : 'more'}
                    </button>
                </p>

                <h2 className="text-xl font-bold my-4">Chapters</h2>
                <ChapterList manga={mangaDetails} />
            </main>
        </>
    )
}

export default TitlePage
