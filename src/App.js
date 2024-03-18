import './App.css';
import { useEffect } from 'react';
const API_KEY = `073de8edeeb6cfc808889bd776923a93`
/*
1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
*/
function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      const url = new URL(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
      const response = await fetch(url)
      const data = await response.json();
      console.log(response, data);
      console.log(data.main.temp); //현재 위치의 섭씨 온도
    })
  }
  useEffect(()=> {
    getCurrentLocation()
  }, []) //componentDidMount -> 렌더하자마자 바로 실행된다.
  return (
    <div>
      hi
    </div>
  );
}

export default App;
