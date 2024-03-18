import React from 'react'

const WeatherBox = (props) => {
  return (
    <div className = "container">
        <div id = "loc">{props.loc}</div>
        <div>{props.celsius}&deg;C</div>
        <div>{props.abs}</div>
    </div>
  )
}

export default WeatherBox
