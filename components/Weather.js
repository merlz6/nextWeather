import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Weather extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className="container">

            <Card className="card">
            <CardTitle><h1>{this.props.info.name} Weather</h1><br/>
                <h2> {((this.props.currentWeather.main.temp * 9/5) - 459.67).toFixed(2)} Degrees </h2>
            </CardTitle>
            { (this.props.currentWeather.weather[0].main === 'Clouds')? <CardImg  src='/static/cloud.png' alt="Card image cap" />: ''
            }
            { (this.props.currentWeather.weather[0].main === 'Clear') ? <CardImg  src='/static/sunIcon.png' alt="Card image cap" />: ''
            }
            { (this.props.currentWeather.weather[0].main === 'Rain') ? <CardImg  src='/static/rain.png' alt="Card image cap" />: ''
            }
              <CardBody>

              <CardSubtitle>Country: {this.props.info.country}</CardSubtitle>
              <CardText>
              <p><strong>Feels Like:</strong> {((this.props.currentWeather.main.feels_like* 9/5) - 459.67).toFixed(2)}</p>



              <p><strong>Humidity:</strong> {this.props.currentWeather.main.humidity} %</p>
              <p><strong>Windspeed:</strong> {this.props.currentWeather.wind.speed}</p>
              <p><strong>Lattitude:</strong> {this.props.info.coord.lat}</p>
              <p><strong>Longitude:</strong> {this.props.info.coord.lon}</p>
              </CardText>
              </CardBody>
            </Card>
            <style jsx>{`
              h1 {
                  font-family: 'Open Sans';
                  color: red;

              },

              body {
                background-color: lightblue;
                text-align:center;

              },



          `}</style>


            </div>
        )
    }
}

export default Weather;
