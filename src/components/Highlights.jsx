import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass} from '@fortawesome/free-solid-svg-icons'

const Highlights = ({weather}) =>{
    //console.log(weather.wind);
    const getCardinalDirection = angle => {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8];
    }
    return(
        <div className="highlights">
            <div className="head">Today's Highlights</div>
            <div className="highlights-cards">
                <div className="card" >
                    <div className="card-head">Wind status</div>
                    <div className="card-main"><span className='card-number'>{weather.wind.speed}</span>mph</div>
                    <div className="wind">
                        <div className="wind-compass"><FontAwesomeIcon icon = {faCompass} /></div> 
                        <div className="wind-direction">{getCardinalDirection(weather.wind.deg)}</div>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-head">Humidity</div>
                    <div className="card-main"><span className='card-number'>{weather.main.humidity}</span>%</div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${weather.main.humidity}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    
                </div>
                <div className="card" >
                    <div className="card-head">Visibilty</div>
                    <div className="card-main"><span className='card-number' style={{paddingRight: '0.2em'}}>{Number(weather.visibility / 1609).toFixed(1)}</span>miles</div>
                </div>
                <div className="card" >
                    <div className="card-head">Air pressure</div>
                    <div className="card-main"><span className='card-number' style={{paddingRight: '0.2em'}}>{weather.main.pressure}</span>mb</div>
                </div>
            </div>
        </div>
    )
}
export default Highlights