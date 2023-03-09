import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'



function App() {

  const [dataApi, setDataApi] = useState({})
  

  useEffect( () => {

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      axios 
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=526b6fda65814eeb858217478b236fd7`)
      .then( resp => setDataApi(resp.data))
      .catch( error => console.error(error))
    });


  }, [])



 
  return (
    <div className={`App`}>
      

      
      <Weather 
      component = { dataApi }
      set = { setDataApi }
      />

      
     
    </div>
    
  )
}

export default App
