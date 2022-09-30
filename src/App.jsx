import React, {useState} from 'react';
import './index.css' 
import CopyRight from "./CopyRight"
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=63b69eb03ea54a142f08dc3758b29752`
 

 const searchLocation =(event)=>{
  if(event.key==="Enter"){
    axios.get(url).then(response=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation("");
   
  }}
 return (
    <div className='app'>
    <div className='search'>
      <input 
        value={location}
        onKeyPress={searchLocation}
        onChange={event=> setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
      />
    </div>
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temp'>
        {data.main?<h1>{data.main.temp.toFixed()}°C</h1>: null}          
        </div>
        <div className='description'>
          {data.weather?<p>{data.weather[0].main}</p> :null}
        </div>
      </div>
     {data.name? <div className='button'>
        <div className='feels'>
        {data.main?<p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
          <p className='para'>Perfect time</p>
        </div>
        <div className='humidity'>
        {data.main?<p className='bold'>{data.main.humidity}%</p>: null}
          <p className='para'>Humidity</p>
        </div>
        <div className='wind'>
        {data.wind?<p className='bold'>{data.wind.speed} Mph</p>:null}
          <p className='para'>Wind Speed</p>
        </div>
      </div> : null}
    </div>
    <CopyRight />
    </div>
  );
}

export default App;
