import './assets/sass/App.scss';
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import NextDays from './components/NextDays';
import Highlights from './components/Highlights';
import axios from 'axios';
import { useState, useEffect } from 'react';
const api = {
  key: '5eb0c5826dbe7c194e34a955467cffd7',
  base: `https://api.openweathermap.org/data/2.5/`
}


const App = () => {
  const [ weather, setWeather ] = useState({
    main : {
      temp : 0,
      humidity: '',
      pressure: ''
    },
    dt: Date.now(),
    name : '',
    weather: [{
      id: '',
      description: '',
      icon: ''
    }],
    wind: {
      deg: '',
      speed: ''
    },
    visibility: ''
  })
  const [ coords, setCoords ] = useState([0, 0])
 
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoords([position.coords.latitude, position.coords.longitude])
    })
  }
  
  
  
  //---useEffect funcs---
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoords([position.coords.latitude, position.coords.longitude])
    })
  },[])
  useEffect(()=> {
    axios
    .get(`${api.base}weather?lat=${coords[0]}&lon=${coords[1]}&appid=${api.key}`)
    .then(res => {
      console.log(res.data);
      setWeather(res.data)
    })
    
  },[coords])
  
  
  return (
    <>
      <Switch>
        {/* <Route exact path="/"> */}
          <HomePage weather={weather} getLocation={getLocation}/>
        {/* </Route> */}

        {/* <Route path="/search">
          <SearchPage searchTerm={searchTerm}
                      handleSearch={handleSearch}
                      cities={cities}/>
        </Route> */}
      </Switch>
      {/* <NextDays/> */}
      <Highlights weather={weather}/>
      <div className="footer">
        created by 
        <a className='my-profile' href="https://www.linkedin.com/in/mohamed-obaya/">Mohamed Obaya</a>
         - 
         <a href="https://devchallenges.io/">devChallenges.io</a>
         - 
         <a href="https://openweathermap.org/">openweathermap</a>
      </div>
    </>
  )
}

export default App;
