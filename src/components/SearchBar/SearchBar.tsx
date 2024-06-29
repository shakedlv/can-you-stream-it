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


    const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setSearchResultOpen(false);
        }
    };

    useEffect(() => {
        setSearchResultOpen(searchResults.length > 0)
    }, [searchResults])

    useEffect(() => {
        document.addEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <div className={searchResultOpen ? "searchOpen" : "search"}>
                <input type="text" id="searchBar" onChange={handleSearchValueChange} />
                <span><FaSearch /></span>
            </div>
            {
                searchResultOpen ? <div className="searchResult">
                    {searchResults.map((result) => <SearchBarResultItem result={result} closeResultSearch={() => {
                        setSearchResultOpen(false);
                    }} />)}
                </div> : ''
            }
        </>
    )
}

export default SearchBar