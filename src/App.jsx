import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loader from './assets/Loader'



function App() {

  const [dataApi, setDataApi] = useState({})
  const [loader, setLoader] = useState(true)
  

  useEffect( () => {
    setLoader(true)

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      axios 
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=526b6fda65814eeb858217478b236fd7`)
      .then( resp => {setDataApi(resp.data) , setLoader(false)})
      .catch( error => console.error(error))
    
    setLoader(false)

    });


  }, [])


  const [dark1, setDark1] = useState(false)

 
  return (
    <div className={`App ${dark1 ? 'App1'  : 'App'}`}>


      {
        loader && <Loader/>
      }

      
      <Weather 
      component = { dataApi }
      set = { setDataApi }
      dark = {dark1}

      />

      
     
    </div>
    
  )
}

export default App
