import { Link } from '@tanstack/react-router'
import { Comic } from '../models/Manga'

function NewManga({ updates }: { updates: Comic[] }) {
    return (
        <div id="new-manga" className="ml-8 h-80 my-4">
            <h2 className="py-4 text-xl h-1/5">New Manga Chapters</h2>
            <div className="carousel w-full px-8 space-x-2 mb-4 h-4/5">
                {updates.filter((manga) => manga?.md_comics?.content_rating === 'safe').map((manga) => {
                    return (
                        <div
                            className="carousel-item carousel-center w-44"
                            key={manga?.md_comics?.slug}
                        >
                            <Link
                                to="/title/$manga"
                                params={{
                                    manga: manga?.md_comics?.slug ?? '',
                                }}
                                aria-label={`${manga?.md_comics?.title}`}
                            >
                                <img
                                    className="object-cover object-top w-full h-full"
                                    src={
                                        manga?.md_comics?.md_covers?.[0]?.b2key
                                            ? `https://meo3.comick.pictures/${manga.md_comics.md_covers?.[0].b2key}`
                                            : '/not-found-image.png'
                                    }
                                    alt={manga?.md_comics?.title}
                                />
                            </Link>
                        </div>
                    )})}
            </div>
        </div>
    )
}
export default NewManga
