import { FaSearch } from "react-icons/fa";
import './style.css'
import { FormEvent, useEffect, useState } from "react";
import api from '../../utils/api';
import { SearchBarResult } from "../../utils/types";
import SearchBarResultItem from "../SearchBarResult/SearchBarResult";

function SearchBar() {
    const [searchResultOpen, setSearchResultOpen] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<SearchBarResult[]>([])

    const handleSearchValueChange = async (e: FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length <= 2) {
            setSearchResults([])
            setSearchResultOpen(false);
            return;
        };


        const response = await api.get("/autocomplete-search", {
            params: {
                search_value: e.currentTarget.value,
                search_type: 2,
            }
        })
        setSearchResults(response.data['results'] as SearchBarResult[])
    }
    useEffect(() => {
        setSearchResultOpen(searchResults.length > 0)
    }, [searchResults])



    return (
        <>
            <div className={searchResultOpen ? "searchOpen" : "search"}>
                <input type="text" id="searchBar" onChange={handleSearchValueChange} />
                <span><FaSearch /></span>
            </div>
            {
                searchResults.length > 0 ? <div className="searchResult">
                    {searchResults.map((result) => <SearchBarResultItem result={result} />)}
                </div> : ''
            }
        </>
    )
}

export default SearchBar