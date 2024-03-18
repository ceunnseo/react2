import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
const API_KEY = `073de8edeeb6cfc808889bd776923a93`
/*
1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
*/
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['paris', 'new york']
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    })
  }
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
  }
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("data!", data);
    setWeather(data);
  }
  useEffect(()=> {
    if (city === "") {
      getCurrentLocation();
    }
    else {
      getWeatherByCity();
    }
  }, [city]) //componentDidMount -> 렌더하자마자 바로 실행된다.

  return (
    <div>
      <div className = "container">
        <WeatherBox weather={weather}/>
        <WeatherButton cities = {cities} setCity = {setCity}/>
      </div>
    </div>
  );
}

export default App;
