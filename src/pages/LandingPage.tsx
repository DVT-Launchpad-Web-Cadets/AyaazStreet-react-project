import { useQuery } from '@tanstack/react-query'
import { getGenres, getTop, getTrending, getUpdates } from '../api/categories'
import TrendingManga from '../components/TrendingManga'
import NewManga from '../components/NewManga'
import TopTenManga from '../components/TopTenManga'

function LandingPage() {
    const { data: genres } = useQuery({
        queryKey: [`getGenres`],
        queryFn: () => getGenres(),
    })

    const { data: trending } = useQuery({
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
        console.log({ trending })
        trendingItemNumber = Math.round(
            0 - 0.5 + Math.random() * (trending?.length - 1 - 0 + 1)
        )
    }

    if (genres && trending && top && updates) {
        return (
            <div className=" bg-zinc-800 h-auto text-slate-50">
                <TrendingManga
                    trending={trending[trendingItemNumber]}
                    genres={genres}
                />
                <NewManga updates={updates} />
                <TopTenManga top={top} />
            </div>
        )
    }

    return (
        <>
            <div id="top-manga">
                <h2 className="py-4 text-xl px-8">Top 10 Manga Today</h2>
                <div className="carousel h-fit w-full px-8 space-x-2 mb-8">
                    <a className="">
                        <img
                            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            alt="Burger"
                        />
                    </a>
                    <a className="">
                        <img
                            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            alt="Burger"
                        />
                    </a>
                    <a className="">
                        <img
                            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                            alt="Burger"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default LandingPage
