import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { getMangaBySlug } from '../api/manga'
import ChapterList from '../components/ChapterList'
import { Route } from '../routes/title.$manga.lazy'

function TitlePage() {
    const { manga } = Route.useParams()

    const { data: mangaDetails } = useQuery({
        queryKey: [`getMangaBySlug`, manga],
        queryFn: () => getMangaBySlug(manga),
    })

    const [showMoreDesc, setShowMoreDesc] = useState(false)

    if (
        !(
            mangaDetails?.comic &&
            mangaDetails?.comic?.slug &&
            mangaDetails?.comic?.hid &&
            mangaDetails?.comic?.md_covers?.[0]?.b2key
        )
    ) {
        return (
            <main className="flex justify-center items-center w-screen h-screen">
                <div className="m-4">Manga Not Found. Return Home</div>
                <Link to="/" className="text-blue-600 underline">
                    Home
                </Link>
            </main>
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
                        src={
                            mangaDetails?.comic?.md_covers?.[0]?.b2key
                                ? `https://meo3.comick.pictures/${mangaDetails.comic.md_covers?.[0].b2key}`
                                : '/not-found-image.png'
                        }
                        alt={mangaDetails?.comic?.title}
                    />
                </figure>
                <div className="card-body justify-start w-9/12 text-gradient p-0">
                    <Link to="/" aria-label="Home">
                        <button
                            id="button-back"
                            title="Back"
                            className="btn btn-circle m-4"
                        >
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
                    {mangaDetails?.comic?.country ? (
                        <img
                            className="h-8 mx-2"
                            src={`https://flagsapi.com/${mangaDetails?.comic?.country?.toUpperCase()}/flat/64.png`}
                            alt={mangaDetails?.comic?.country}
                        />
                    ) : (
                        ''
                    )}
                    {mangaDetails?.comic?.chapter_count
                        ? `${mangaDetails.comic.chapter_count} chapter${mangaDetails.comic.chapter_count > 1 ? 's' : ''}`
                        : ''}
                </p>
                <Link
                    to="/manga/$manga/$chapter"
                    params={{
                        manga: mangaDetails?.comic?.slug,
                        chapter: '1',
                    }}
                >
                    <button className="btn btn-primary my-4 w-full">
                        Read Now
                    </button>
                </Link>
                <p className="text-base">
                    {showMoreDesc
                        ? mangaDetails?.comic?.desc
                        : `${mangaDetails?.comic?.desc?.substring(0, Math.round(innerWidth / 4))}...`}
                    <button
                        className="ml-2 font-bold"
                        onClick={() => setShowMoreDesc(!showMoreDesc)}
                    >
                        {showMoreDesc ? 'less' : 'more'}
                    </button>
                </p>

                <ChapterList manga={mangaDetails} />
            </main>
        </>
    )
}

export default TitlePage
