import { StreamSource } from "../../utils/types"
import './style.css'

interface StreamingServiceTypes {
    source: StreamSource,
}
function StreamingService({ source }: StreamingServiceTypes) {
    return (
        <div className="card">
            <div className="content">
                <img src={source.logo_100px}
                    alt={source.name + " Logo"} />
                <div className="contentBx">
                    <h3>{source.name}</h3>
                    <span className="info">Regions</span>
                    <div className="regions">{source.regions.slice(0, 3).map((reg) => <span className="badge">{reg}</span>)}</div>
                    <span className="info">{source.regions.length > 3 ? "Available in more regions" : ''}</span>
                </div>
            </div>
        </div>

    )
}

export default StreamingService