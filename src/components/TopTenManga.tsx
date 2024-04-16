import { TopComics } from '../models/TopManga'
import { Link } from '@tanstack/react-router'

function TopTenManga({ top }: { top: TopComics }) {
    const topTen = top?.recentRank
        .filter((manga) => (manga.content_rating = 'safe'))
        .splice(0, 10)
    return (
        <div id="top-manga" className="ml-8 h-80 my-4">
            <h2 className="py-4 text-xl h-1/5">Top 10 Today</h2>
            <div className="carousel w-full px-8 space-x-2 mb-4 h-4/5">
                {topTen.map((manga) => (
                    <div
                        className="carousel-item carousel-center w-44"
                        key={`${manga?.slug}`}
                    >
                        <Link
                                to="/title/$manga"
                                params={{
                                    manga: manga?.slug ?? "",
                                }}
                            >
                            <img
                                className="object-cover object-top w-full h-full"
                                src={`https://meo3.comick.pictures/${manga?.md_covers?.[0].b2key}`}
                                alt={manga?.md_comics?.title}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TopTenManga
