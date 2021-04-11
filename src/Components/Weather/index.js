import React,{useState,useEffect} from 'react'
import "./weather.css"
import Time  from "react-time";
function Weather() {
    
    const [weather,setweather]=useState({})
   

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=4823d442e6bcf0fa118cb82adb277364")
        .then(res=>res.json())
        .then(data=>setweather(data))
      },[]);
      console.log(weather)
      console.log(weather.name)
      let time = new Date()
      
     

      
   
    return (
        <div className="weatherContainer center">
            <div className="weatherContent ">
                <h1>{weather.name}</h1>
                <div className="temperature">
                   <h3>Min</h3>
                    <h3>Max</h3> 

                </div>
                <h3>icon</h3>
                <Time  value={time} format="DD/MM/YYYY" />
            </div>
        </div>
    )
}

export default Weather
