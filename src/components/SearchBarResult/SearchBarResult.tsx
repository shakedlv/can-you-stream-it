import { SearchBarResult } from '../../utils/types'
import './style.css'

interface SearchBarResultTypes {
    result:SearchBarResult,
}

function SearchBarResultItem({result} : SearchBarResultTypes) {
    return (
        <div className='searchItem'>
            <img src={result.image_url} alt={result.name + " Icon"} />
            <span>{result.name} | {result.tmdb_type}  | {result.year} </span>
        </div>
    )
}

export default SearchBarResultItem