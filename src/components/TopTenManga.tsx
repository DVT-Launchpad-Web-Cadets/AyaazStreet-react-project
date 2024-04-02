import { TopComics } from '../models/TopManga'

function TopTenManga({ top }: { top: TopComics }) {
    return (
        <div id="new-manga">
            <h2 className="py-4 text-xl px-8">Top 10 Today</h2>
            <div className="carousel h-fit w-full px-8 space-x-2 mb-4">
                {top?.recentRank?.map((manga) => (
                    <a key={manga.slug}>
                        <img
                            src={`https://meo3.comick.pictures/${manga?.md_comics?.md_covers?.[0].b2key}`}
                            alt={manga?.md_comics?.title}
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
export default TopTenManga
