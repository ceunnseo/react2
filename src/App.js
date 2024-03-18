import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
const API_KEY = `073de8edeeb6cfc808889bd776923a93`
/*
1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
*/
function App() {
  const [temp, setTemp] = useState(null);
  const [location, setLocation] = useState(null);
  const [abstract, setAbstract] = useState(null);
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
    console.log(data);
    setTemp(data.main.temp);
    setLocation(data.name);
    setAbstract(data.weather[0].main);
  }
  useEffect(()=> {
    getCurrentLocation()
  }, []) //componentDidMount -> 렌더하자마자 바로 실행된다.
  return (
    <div>
      <WeatherBox celsius = {temp} loc = {location} abs = {abstract} />
    </div>
  );
}

export default App;
