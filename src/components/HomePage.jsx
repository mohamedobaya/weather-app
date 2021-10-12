import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const HomePage = ({ weather, getLocation }) =>{ 
    const weekDay = num => {
        switch(num){
            case 0 : return 'Sun'; break;
            case 1 : return 'Mon'; break;
            case 2 : return 'Tue'; break;
            case 3 : return 'Wed'; break;
            case 4 : return 'Thu'; break;
            case 5 : return 'Fri'; break;
            case 6 : return 'Sat'; break;
            default: return ''
        }
    }
    const month = num => {
        switch(num){
            case 0 : return 'Jan'; break;
            case 1 : return 'Feb'; break;
            case 2 : return 'Mar'; break;
            case 3 : return 'Apr'; break;
            case 4 : return 'May'; break;
            case 5 : return 'Jun'; break;
            case 6 : return 'Jul'; break;
            case 7 : return 'Aug'; break;
            case 8 : return 'Sep'; break;
            case 9 : return 'Oct'; break;
            case 10 : return 'Nov'; break;
            case 11 : return 'Dec'; break;
            default: return ''
        }
    }
    
    const degree = Number((weather.main.temp - 273.15).toFixed(1)) || 0
    const date = new Date(Date.now())
    //console.log(date.getDay());
    const dateTxt = `${weekDay(date.getDay())}, ${date.getDate()} ${month(date.getMonth())}` || ''
    return(
        <section className='home'>
            {/* <div className="home-btns">
                <Link to='/search' className="btn btn-search" style={{textDecoration: 'inherit'}}>Search for cities</Link>
                <button className="btn btn-location" onClick={getLocation}><FontAwesomeIcon icon={faMapMarkerAlt} /></button>
            </div> */}
            <div className="home-details">
                <div className="home-weather-icon">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather icon" />
                </div>
                <div className="home-weather-degree">
                    {degree} <span className='unit'>&deg;C</span>
                </div>
                <div className="home-weather-status">
                    {weather.weather[0].description}
                </div>
                <div className="home-weather-calendar">
                    Today <span className='calendar-space'>.</span> {dateTxt}
                </div>
                <div className="home-weather-location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {weather.name}
                </div>
            </div>

        </section>
    )
}
export default HomePage