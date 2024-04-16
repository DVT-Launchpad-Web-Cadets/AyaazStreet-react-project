import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { formatDistance } from 'date-fns'
import { getChapter } from '../api/manga'

function ChapterListItem(hid: string, _key: string) {
    const { data: chapterDetails } = useQuery({
        queryKey: [`getChapter`, hid],
        queryFn: () => getChapter(hid.hid),
    })

    console.log(chapterDetails)
    console.log(chapterDetails?.chapter?.created_at?.slice(0, 10))

    if (!chapterDetails?.chapter) {
        return (
            <div className="flex flex-col items-center justify-center">
                <div className="m-4">Chapter Not Found. Return Home</div>
                <Link to="/" className="text-blue-600 underline">
                    Home
                </Link>
            </div>
        )
    }
    return (
        <div className="flex my-4 w-full items-center justify-between">
            <div className="flex">
                <div>
                    <img
                        className="object-cover object-top h-32 w-60 rounded"
                        src={`https://meo3.comick.pictures/${chapterDetails?.chapter?.md_images?.[0].b2key}`}
                        alt={chapterDetails?.chapter?.chap}
                    />
                </div>
                <div className="flex flex-col justify-center ml-4">
                    <p className="text-lg">
                        {chapterDetails?.chapter?.chap}.{' '}
                        {chapterDetails?.chapter?.title === '' ||
                        chapterDetails?.chapter?.title === null
                            ? chapterDetails?.chapter?.md_comics?.title
                            : chapterDetails?.chapter?.title}
                    </p>
                    <p className="text-sm text-gray-500">
                        {formatDistance(
                            chapterDetails?.chapter?.created_at?.slice(0, 10),
                            new Date(),
                            {
                                addSuffix: true,
                            }
                        )}{' '}
                        • {chapterDetails?.chapter?.md_images?.length} pages
                    </p>
                </div>
            </div>
            <div className="mr-4">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="2rem"
                    width="2rem"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
            </div>
        </div>
    )
}
export default ChapterListItem
