import { useContext } from "react";
import { StreamDataContext } from "../../context/sourcesContext";
import StreamingService from "../StreamingService/StreamingService";
import './style.css'

function StreamingServiceCarousel() {
    const { streams, isLoading, error, fetchStreams } = useContext(StreamDataContext);
    
    if (isLoading) return <span>Loading . . .</span>
    if (error) return <span>{error}</span>
    return (
        <div className="carousel">
            {streams?.map((stream) => {
                return <StreamingService source={stream} />
            })}
        </div>
    )
}

export default StreamingServiceCarousel