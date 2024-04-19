import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchResultsList from "../components/SearchResultsList";

function SearchPage() {
    const [searchResult, setSearchResult] = useState<string | undefined>()
    return (
        <>
            <Navbar search={true} setSearchResult={setSearchResult}/>
            <SearchResultsList searchResult={searchResult} />
        </>
    )
}
export default SearchPage
