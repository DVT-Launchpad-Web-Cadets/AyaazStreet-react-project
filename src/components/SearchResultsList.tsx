import { useQuery } from '@tanstack/react-query'
import { getSearch } from '../api/categories'
import SearchResultsItem from './SearchResultsItem'
import { useSearchStore } from '../store/searchStore'

function SearchResultsList() {
    const searchQuery = useSearchStore((state) => state.searchQuery)
    const { data: searchedManga } = useQuery({
        queryKey: [`getSearch`, searchQuery],
        queryFn: () => getSearch(searchQuery),
    })
    searchedManga?.filter(
        (manga) => manga?.md_comics?.content_rating === 'safe'
    )
    if (searchedManga?.length === 0) {
        return (
            <main className="w-screen h-screen flex justify-center items-center">
                <h1>No mangas found...</h1>
            </main>
        )
    }
    return (
        <main className="p-8 pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-4">
            {searchedManga?.map((manga) => (
                <SearchResultsItem manga={manga} key={manga?.slug} />
            ))}
        </main>
    )
}
export default SearchResultsList
