import { Link } from '@tanstack/react-router'
import { Genre } from '../models/Genre'
import { Comic } from '../models/Manga'

function TrendingManga({
    trending,
    genres,
}: {
    trending: Comic
    genres: Genre[]
}) {
    const trendingGenre = trending?.md_comics?.genres?.splice(0, 5)
    return (
        <div
            key={trending?.md_comics?.slug}
            id="trending-manga"
            className="card rounded-none w-full h-96 image-full"
        >
            <figure>
                <img
                    className="object-cover object-top  w-full"
                    src={`https://meo3.comick.pictures/${trending?.md_comics?.md_covers?.[0].b2key}`}
                    alt={trending?.md_comics?.title}
                />
            </figure>
            <div className="card-body justify-center w-9/12 text-gradient p-0">
                <h2 className="card-title pl-8">
                    {trending?.md_comics?.title}
                </h2>
                <p className="grow-0 pl-8 flex flex-wrap">
                    {trendingGenre?.map((genre) =>
                        genres?.map(
                            (g) =>
                                g.id === genre && (
                                    <span
                                        key={g.slug}
                                        className="bg-slate-950 px-4 py-2 mx-1 my-0.5 rounded-full text-xs"
                                    >
                                        {g.name}
                                    </span>
                                )
                        )
                    )}
                </p>
                <div className="card-actions justify-start pl-8">
                    {trending?.md_comics?.slug && (
                            <Link
                                to="/manga/$manga/$chapter"
                                params={{
                                    manga: trending.md_comics.slug,
                                    chapter: '1',
                                }}
                                className="min-w-full md:min-w-fit"
                            >
                                <button className="btn my-4 btn-primary">
                                    Read Now
                                </button>
                            </Link>
                        )}
                    {trending?.md_comics?.slug && (
                            <Link
                                to="/title/$manga"
                                params={{
                                    manga: trending.md_comics.slug,
                                }}
                                className="min-w-full md:min-w-fit"
                            >
                                <button className="btn my-4 btn-secondary">
                                    More Info
                                </button>
                            </Link>
                        )}
                </div>
            </div>
        </div>
    )
}
export default TrendingManga
