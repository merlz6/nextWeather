import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Weather from '../components/Weather';

const Index = (props) => (

  <div className="outer">

      <Weather info={props.info} currentWeather={props.currentWeather}/>

  </div>

)

Index.getInitialProps = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?zip=11596,us&APPID=' + process.env.apiKey);
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
