import React, { Component } from 'react';
import One_day_weather from './one_day_weather';
import { seven_day_weather } from '../data/temp_data';
import uniqid from 'uniqid';

export default class Weather_panel extends Component {
  
  render() {
    var weeklyWeather = seven_day_weather.map((weather) => <li className="col-sm-2 card m-auto"><One_day_weather key={uniqid()} data={weather}></One_day_weather></li>);
    console.log('weekly weather', weeklyWeather)

    return (
      <div style={{width: '1200px'}} className="m-auto mt-5"><ul className="row m-auto mt-5">{weeklyWeather}</ul></div>
    );
  }
}

