import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { getGenres } from '../api/categories'
import SearchBar from './SearchBar'

function Navbar({
    search = false,
    setSearchResult,
}: {
    search?: boolean
    setSearchResult?: React.Dispatch<React.SetStateAction<string | undefined>>
}) {
    const [showMenuBar, setShowMenuBar] = useState(false)

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShowMenuBar(true)
        } else {
            setShowMenuBar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])

    const { data: genres } = useQuery({
        queryKey: [`getGenres`],
        queryFn: () => getGenres(),
    })

    return (
        <div
            className={`navbar z-50 fixed ${showMenuBar ? 'bg-slate-950' : 'bg-gradient-to-b from-slate-950/50'} transition-all ease-in duration-200`}
        >
            <div className="navbar-start">
                <Link
                    to="/"
                    className="btn btn-ghost text-xl text-neutral-50 pr-0"
                >
                    MangaVerse
                </Link>
                <div className="flex-none">
                    <ul className="menu menu-horizontal w-5">
                        <li>
                            <details className="w-fit">
                                <summary>Browse</summary>
                                <ul className="p-2 -left-4 bg-slate-950 bg-opacity-85 !mt-0 overflow-y-scroll h-44">
                                    {genres?.map(
                                        (genre) =>
                                            genre.group === 'Genre' && (
                                                <li key={genre.slug}>
                                                    <a>{genre.name}</a>
                                                </li>
                                            )
                                    )}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                {search ? (
                    <SearchBar setSearchResult={setSearchResult!} />
                ) : (
                    <Link to="/search">
                        <button
                            id="button-search"
                            title="Search"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
