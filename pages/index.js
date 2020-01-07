import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Weather from '../components/Weather';

const Index = (props) => (

  <div>
    <h1>{props.info.name} Weather</h1>

    <p>Country: {props.info.country}</p>
    <p>Lattitude: {props.info.coord.lat}</p>
    <p>Longitude: {props.info.coord.lon}</p>
    <p>Temp: {props.currentWeather.main.temp}</p>
    <p>Feels Like: {props.currentWeather.main.feels_like}</p>
    <p>Humidity: {props.currentWeather.main.humidity} %</p>
    <p>Description: {props.currentWeather.weather[0].description}</p>
    <p>Windspeed: {props.currentWeather.wind.speed}</p>

  </div>

)

Index.getInitialProps = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=11596,us&APPID={AddAPIKEY}');
    const weather = await response.json()
    const info = await weather.city
    const currentWeather = await weather.list[0]
    console.log(info)
    console.log(currentWeather)
    return {
        info: info,
        currentWeather: currentWeather
    }

}

export default Index;
