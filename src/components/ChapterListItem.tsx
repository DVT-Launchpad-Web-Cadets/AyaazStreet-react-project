import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { formatDistance } from 'date-fns'
import { getChapter } from '../api/manga'

function ChapterListItem({ hid }: { hid: string }) {
    const { data: chapterDetails } = useQuery({
        queryKey: [`getChapter`, hid],
        queryFn: () => getChapter(hid),
    })

    if (!chapterDetails?.chapter || !chapterDetails?.chapter.chap) {
        return <></>
    }
    return (
        <Link
            to="/manga/$manga/$chapter"
            params={{
                manga: chapterDetails.chapter.md_comics?.slug,
                chapter: chapterDetails.chapter.chap,
            }}
        >
            <div className="flex my-4 w-full items-center justify-between">
                <div className="flex items-center">
                    <div className="shrink-0">
                        <img
                            className="object-cover object-top h-32 w-40 sm:w-60 sm:h-36 rounded"
                            src={
                                chapterDetails.chapter.md_images?.[0].b2key
                                    ? `https://meo3.comick.pictures/${chapterDetails.chapter.md_images?.[0].b2key}`
                                    : '/not-found-image.png'
                            }
                            alt={
                                chapterDetails.chapter.chap
                                    ? chapterDetails.chapter.chap
                                    : 'Not Found'
                            }
                        />
                    </div>
                    <div className="flex flex-col justify-center ml-4">
                        <p className="text-lg">
                            {chapterDetails.chapter.chap}.{' '}
                            {chapterDetails.chapter.title === '' ||
                            chapterDetails.chapter.title === null
                                ? chapterDetails.chapter.md_comics?.title
                                : chapterDetails.chapter.title}
                        </p>
                        <p className="text-sm text-gray-400">
                            {chapterDetails.chapter.created_at &&
                                `${formatDistance(
                                    chapterDetails.chapter.created_at.slice(
                                        0,
                                        10
                                    ),
                                    new Date(),
                                    {
                                        addSuffix: true,
                                    }
                                )}${chapterDetails.chapter.md_images?.length && ' • '}`}
                            {chapterDetails.chapter.md_images?.length &&
                                `${chapterDetails.chapter.md_images.length} pages`}
                        </p>
                    </div>
                </div>
                <div className="mr-4">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="30px"
                        width="30px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                </div>
            </div>
        </Link>
    )
}
export default ChapterListItem
