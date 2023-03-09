import { useState } from "react";
import axios from "axios";


useState

const Weather = ({ component, set }) => {

    const [temperature, setTemperature] = useState(true)
    const [dark, setDark] = useState(false)
    const icon = component.weather?.[0]?.icon

        
    const [city, setCity] = useState("")

    const searchByCity = () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=526b6fda65814eeb858217478b236fd7`)
        .then(resp => set(resp.data))
        .catch(error => console.error(error))
    }


    return (
        
        <div className={`Weather ${dark ? 'Weather1'  : 'Weather'}`}>

            <h1 className="Title">Weather App</h1>

            <div className="Container">        
                <div className={`Data ${dark ? 'Data1'  : 'Data'}`}>

                    <div className={`Icon ${dark ? 'Icon1'  : 'Icon'}`}>
                    <h1><span>{ String( temperature ? Math.round(component.main?.temp - 273.15) : Math.round( ((component.main?.temp * (9/5)) - 459.67 )  ))  }</span></h1>
                    </div>
                    <div className={`Pressure ${dark ? 'Pressure1'  : 'Pressure'}`}>
                    <h3>Pressure: <span>{component.main?.pressure}</span></h3>
                    <h3>Humidity: <span>{component.main?.humidity}</span></h3>
                    </div>
                    <div className={`Place ${dark ? 'Place1'  : 'Place'}`}>
                    <h2>{component.name}, {component.sys?.country}</h2>
                    <h3>{component.weather?.[0].description.toUpperCase()}</h3>
                    </div>
                </div>
            

                <div className="Image">

                   <img src={`${icon}.svg`} alt="" /> 
                </div>

            </div>

            <div className={`Button ${dark ? 'Button1'  : 'Button'}`}>
            {
              temperature ?  <button onClick={ () => setTemperature(!temperature)}>Change to °F</button> : <button onClick={ () => setTemperature(!temperature)}>Change to °C</button>
            }
            </div>

            
            <label className='switch'>
                <input type="checkbox" onChange={() => setDark(!dark)} />
                <span className={`slider round ${dark ? 'slider1 round1'  : 'slider round'}`}></span>
            </label>

            <div className="Input">
            <input type="text"
            placeholder="Look for a city!"
            value={city}
            onChange={ (e) => setCity(e.target.value)}
            className={`Input ${dark ? 'Input1'  : 'Input'}`}/>
            
            </div>

            <div>
                <button className={`Search ${dark ? 'Search1'  : 'Search'}`} onClick={ searchByCity }> Search </button>
            </div>

            
            
        </div>
    );
};

export default Weather;