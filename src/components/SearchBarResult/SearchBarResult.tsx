import { useContext } from 'react';
import { SearchBarResult } from '../../utils/types'
import './style.css'
import { TitleInfoContext } from '../../context/TitleInfoContext';

interface SearchBarResultTypes {
    result: SearchBarResult,
    closeResultSearch: ()=>void,
}

function SearchBarResultItem({ result,closeResultSearch }: SearchBarResultTypes) {
    const { fetchStreamsByTitle, setTitle } = useContext(TitleInfoContext);
    
    return (
        <div className='searchItem' onClick={() => {
            closeResultSearch();
            fetchStreamsByTitle(result);
            setTitle(result);
        }}>
            <img src={result.image_url} alt={result.name + " Icon"} />
            <span>{result.name} | {result.tmdb_type}  | {result.year} </span>
        </div>
    )
}

export default SearchBarResultItem