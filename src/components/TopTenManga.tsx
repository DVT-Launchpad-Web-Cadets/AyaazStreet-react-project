import { TopComics } from '../models/TopManga'

function TopTenManga({ top }: { top: TopComics }) {
    const topTen = top?.recentRank
        .filter((manga) => (manga.content_rating = 'safe'))
        .splice(0, 10)
    return (
        <div id="new-manga">
            <h2 className="py-4 text-xl px-8">Top 10 Today</h2>
            <div className="carousel h-fit w-full px-8 space-x-2 mb-4">
                {topTen.map((manga) => (
                    <div
                        className="carousel-item carousel-center w-44"
                        key={manga?.md_comics?.slug}
                    >
                        <a>
                            <img
                                className="object-cover object-top w-full h-full"
                                src={`https://meo3.comick.pictures/${manga?.md_covers?.[0].b2key}`}
                                alt={manga?.md_comics?.title}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TopTenManga
