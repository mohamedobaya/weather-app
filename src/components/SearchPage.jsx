import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const SearchPage = ({searchTerm, handleSearch, cities}) =>{ 
    //console.log(cities);
    const searchResults = cities.filter(city =>{
      
        const cityName = city.toString().toLowerCase() ;
        const subName = searchTerm.toString().toLowerCase() ;
          
        if(cityName.startsWith(subName))
          return city;
        else
          return ''
    })
    const top5 = searchResults.filter((r, index) => index < 5 ).sort()
    //console.log(top5);
    return(
        <div className='search'>
            <div className="search-close">
            <Link to='/' className="btn btn-search" style={{ color: 'inherit',textDecoration: 'inherit'}}><FontAwesomeIcon icon={faTimes}/></Link>
                
            </div>
            <form className='search-form'>
                <div className='search-form-input'>
                    <FontAwesomeIcon icon={faSearch} style={{position: 'absolute'}}/>
                    <input  type="text" placeholder='search city' value={searchTerm} onChange={handleSearch}/>
                </div>
                
                {/* <button className="search-form-btn">Search</button> */}
            </form>
            <div className="search-locations">
                {
                    top5.map((city, index) => 
                      <div key={index} className='location'>
                        {city}
                      </div>  
                )
                }
            </div>
        </div>
    )
}
export default SearchPage