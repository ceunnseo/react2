import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className = "weather-box">
      <div id = "loc">{weather?.name||'정보를 불러올 수 없습니다.'}</div>
      <div>{weather && weather?.main.temp+'°C'}</div>
      <div>{weather && weather?.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox
