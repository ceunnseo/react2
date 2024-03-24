import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap';
/*
      <div>more</div>
      <Button variant="warning" onClick={()=>getCurrentLocation()}>current</Button>
      {cities.map((item) => (
        <Button variant="warning" key = {item} onClick={()=>setCity(item)}>{item}</Button>
      ))}
*/

const WeatherButton = ({cities, setCity, getCurrentLocation, selectedCity, setSelectedCity }) => {
  const cityWeather = (e) => {
    setSelectedCity(e.target.value);
    if (e.target.value === 'current') {
      getCurrentLocation()
    }
    else {
      setCity(e.target.value);
    }
  }
  return (
    <div className = "weather-button">
      {console.log("return문",selectedCity)}
      <select name = "cities" onChange={cityWeather} value = {selectedCity}>
        {cities.map((item) => (
          <option value = {item} key = {item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default WeatherButton
