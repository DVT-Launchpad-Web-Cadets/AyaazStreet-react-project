import Navbar from "../components/Navbar";
import SearchResultsList from "../components/SearchResultsList";

function SearchPage() {
    return (
        <>
            <Navbar showSearchOnNav={true} />
            <SearchResultsList />
        </>
    )
}
export default SearchPage
