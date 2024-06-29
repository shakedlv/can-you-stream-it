import { useContext } from 'react';
import './style.css'
import { TitleInfoContext } from '../../context/TitleInfoContext';
function TitleInfo() {
    const { title, sources } = useContext(TitleInfoContext);

    return (
        <div>
            {title?.name}
            {sources.map((source) => { return <p>{source.name}</p>})}
        </div>
    )
}

export default TitleInfo