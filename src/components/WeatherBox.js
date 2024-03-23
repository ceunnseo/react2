import React from 'react'

const WeatherBox = ({weather}) => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let day = today.getDay();
  if (day === 0) { day = 'Sun'}
  else if (day === 1) {day = 'Mon'}
  else if (day === 2) {day = 'Tue'}
  else if (day === 3) {day = 'Wen'}
  else if (day === 4) {day = 'Tru'}
  else if (day === 5) {day = 'Fri'}
  else if (day === 6) {day = 'Sat'}
  return (
    <div className = "weather-box">
      <div>Today {month}/{date} {day}</div>
      <div>
        <img id = "weatherIcon" src = {`https://openweathermap.org/img/wn/${weather && weather.weather[0].icon}.png`}/>
      </div>
      <div id = "temp_and_desc">
        <div id = "temp_box">
          <div id = "temp">{weather && Math.floor(weather?.main.temp)+'°C'}</div>
          <div id = "temp_max_min">{weather && Math.floor(weather?.main.temp_max)+'°C'}  {weather && Math.floor(weather?.main.temp_min)+'°C'}</div>
        </div>
        <div id = "desc">
          <div id = "loc">{weather?.name||'정보를 불러올 수 없습니다.'}</div>
          <div>{weather && weather?.weather[0].description}</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherBox
