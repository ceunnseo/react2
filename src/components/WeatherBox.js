import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className = "weather-box">
        <div id = "loc">{weather?.name}</div>
        <div>{weather?.main.temp}&deg;C</div>
        <div>{weather?.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox
