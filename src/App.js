import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";
import cityData from "./cities_list.json"
const API_KEY = `073de8edeeb6cfc808889bd776923a93`
function App() {
  const cities = ['current']
  cityData.forEach(function(item) {
    cities.push(item['name']);
  });
  console.log(cities);
  const [selectedCity, setSelectedCity] = useState('current');
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    })
  }
  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json();
      if (data.cod === 200) {
        //console.log("성공")
        console.log(data);
        setWeather(data);
        setLoading(false);
      }
      else {
        //console.log("실패");
        throw new Error(data.message)
      } 
    }
    catch (err) {
      setWeather(null); //null 넘겨줌
      setLoading(false);
    }
    
    
  }
  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();
      if (data.cod === 200) {
        //console.log("성공")
        setWeather(data);
        setLoading(false);
      }
      else {
        //console.log("실패");
        throw new Error(data.message)
      } 
    }
    catch (err) {
      setWeather(null);
      setLoading(false);
    }
  }
  useEffect(()=> {
    if (city === "") {
      setLoading(true);
      getCurrentLocation();
    }
    else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]) //componentDidMount -> 렌더하자마자 바로 실행된다.

  return (
    <div>
      {loading?<ClipLoader
        color="#f88c6b"
        loading={loading}
        size={50}
      /> : <div className = "container">
      <WeatherBox weather={weather}/>
      <WeatherButton cities = {cities} setCity = {setCity} getCurrentLocation={getCurrentLocation} selectedCity = {selectedCity} setSelectedCity={setSelectedCity}/>
    </div>}
    </div>
  );
}

export default App;
