import React, { Component } from 'react';
class Weather extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
            <h1>HEY this is the weather page</h1>
            <p>{Object.keys(this.props.nyWeather).map((key, index) => {
                                  return(
                                      <option value={this.props.nyWeather[key]}>{key}</option>
                                  )
                              })} </p>
            </div>
        )
    }
}

export default Weather;
