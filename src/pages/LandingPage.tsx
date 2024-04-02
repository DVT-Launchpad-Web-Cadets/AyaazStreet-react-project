import { useQuery } from '@tanstack/react-query'
import { getGenres, getTop, getTrending, getUpdates } from '../api/categories'
import NewManga from '../components/NewManga'
import TopTenManga from '../components/TopTenManga'
import TrendingManga from '../components/TrendingManga'

function LandingPage() {
    const { data: genres } = useQuery({
        queryKey: [`getGenres`],
        queryFn: () => getGenres(),
    })

    let { data: trending } = useQuery({
        queryKey: [`getTrending`],
        queryFn: () => getTrending(),
    })

    const { data: top } = useQuery({
        queryKey: [`getTop`],
        queryFn: () => getTop(),
    })

    const { data: updates } = useQuery({
        queryKey: [`getUpdates`],
        queryFn: () => getUpdates(),
    })

    let trendingItemNumber = 0

    if (trending) {
        trending = trending.filter(
            (manga) => manga.md_comics?.content_rating === 'safe'
        );
        trendingItemNumber = Math.round(
            0 - 0.5 + Math.random() * (trending?.length - 1 - 0 + 1)
        )
    }

    if (genres && trending && top && updates) {
        return (
            <div>
                <TrendingManga
                    trending={trending[trendingItemNumber]}
                    genres={genres}
                />
                <NewManga updates={updates} />
                <TopTenManga top={top} />
            </div>
        )
    }

    return <></>
}

export default LandingPage
