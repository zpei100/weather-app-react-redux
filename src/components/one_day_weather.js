import React, { Component } from 'react';

export default class One_day_weather extends Component {

  constructor(props) {
   
    super(props);
   
    var {main, weather, wind, rain } = props.data;
    
    console.log('mmm', main.temp, main.pressure, main.humidity, 'weather',  weather[0].description, 'wind:', wind.speed, rain['3h'])


    this.state = {
      temp: parseInt(main.temp) - 273,
      pressure: main.pressure,
      humidity: main.humidity,
      description: weather[0].description,
      wind: wind.speed,
      rain: rain['3h'],
    }
  }
  render() {

    return (
      //no objects
      <ul className="list-group text-center">
        <li className="list-group-item">
          temperature: {this.state.temp}
        </li>
        <li className="list-group-item">
          pressure: {this.state.pressure}
        </li>
        <li className="list-group-item">
          humidity: {this.state.humidity}
        </li>
        <li className="list-group-item">
          description: {this.state.description}
        </li>
        <li className="list-group-item">
          wind: {this.state.wind}
        </li>
        <li className="list-group-item">
          rain: {this.state.rain}
        </li>
      </ul>
    )

    // return (
    //   <div className="mb-3 container">
    //     <ol className="my-3 list-group">
    //       <li className="list-group-item text-center">
    //         {this.props.data.low}
    //       </li>
    //       <li className="list-group-item text-center">
    //         {this.props.data.high}
    //       </li>
    //       <li className="list-group-item text-center">
    //         {this.props.data.weather}
    //       </li>
    //     </ol>
    //   </div>
    // );
  }
}
