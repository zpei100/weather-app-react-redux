import React, { Component } from 'react';

class One_day_weather extends Component {
  render() {
    var data = this.props.data;
    return (
      <ul className="list-group text-center">
        <li className="list-group-item">
          temperature: {data.temp - 273}
        </li>
        <li className="list-group-item">
          pressure: {data.main.pressure}
        </li>
        <li className="list-group-item">
          humidity: {data.main.humidity}
        </li>
        <li className="list-group-item">
          description: {data.weather[0].description}
        </li>
        <li className="list-group-item">
          wind: {data.wind.speed}
        </li>
        <li className="list-group-item">
          rain: {data.rain['3h']}
        </li>
      </ul>
    )
  }
}

export { One_day_weather }