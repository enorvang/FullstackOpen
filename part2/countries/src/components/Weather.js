import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [ weather, setWeather ] = useState([])
    const [ main, setMain ] = useState('')
    const [ wind, setWind ] = useState('')
    const api_key = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios
            .get("https://api.openweathermap.org/data/2.5/weather?q="+country.capital+"&appid="+api_key+"&units=metric")
            .then(response => {
                setWeather(response.data.weather[0])
                setMain(response.data.main)
                setWind(response.data.wind)
            })
    }, [country, api_key])
    
    
    
    
    let icon = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    
    
    return (
        <div>
            <h3>Current weather in {country.capital} </h3>
            <p>Temperature: {main.temp} &#176; Celsius</p>
            <p><img src={icon} alt="icon"/> {weather.description}</p>
            <p>Wind: {wind.speed} m/s</p>
        </div>
    )
}

export default Weather