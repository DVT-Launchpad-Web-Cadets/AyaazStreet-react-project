import { Comic } from '../models/Manga'
import { Link } from '@tanstack/react-router'

function NewManga({ updates }: { updates: Comic[] }) {
    return (
        <div id="new-manga" className="ml-8 h-80 my-4">
            <h2 className="py-4 text-xl h-1/5">New Manga Chapters</h2>
            <div className="carousel w-full px-8 space-x-2 mb-4 h-4/5">
                {updates
                    .filter((manga) => (manga.content_rating = 'safe'))
                    .map((manga) => (
                        <div
                            className="carousel-item carousel-center w-44"
                            key={manga?.md_comics?.slug}
                        >
                            <Link
                                to="/title/$manga"
                                params={{
                                    manga: manga?.md_comics?.slug ?? "",
                                }}
                            >
                                <img
                                    className="object-cover object-top w-full h-full"
                                    src={`https://meo3.comick.pictures/${manga?.md_comics?.md_covers?.[0].b2key}`}
                                    alt={manga?.md_comics?.title}
                                />
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
export default NewManga
