import React, { Component } from 'react';
import One_day_weather from './one_day_weather';
import { seven_day_weather } from '../data/temp_data';
import uniqid from 'uniqid';
import axios from 'axios';

const API_KEY = `a03d1bca85def2aa608a5297380cfa45`
const SERVER_NAME = `api.openweathermap.org`
const QUERY = {
  sixteen: `forecast/daily`,
  daily: `forecst`,
  current: `weather`
}
//template: 
//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a03d1bca85def2aa608a5297380cfa45


export default class Weather_panel extends Component {
  
  constructor() {
    super();

    this.state = {
      city: ''
    }

    this.getLocation();

  }

  getLocation () {
    navigator.geolocation.getCurrentPosition(async ({coords: {latitude: lat, longitude: lon}}) => {
      var { data } = await axios.get(`https://${SERVER_NAME}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);

      var {city: {name: city}, list: fullDayData} = data;
      this.setState({city})
    });
  }


  render() {
    var weeklyWeather = seven_day_weather.map((weather) => 
      <li key={uniqid()} style={{height: '200px'}} className="col-sm-2 card mx-1 bg-success">
        <One_day_weather data={weather}></One_day_weather>
      </li>
    );
    
    //style sucks here. Need to fix later
    return (
      <div className="container-fluid">
        <div className="text-center container text-uppercase display-2 border mb-4 bg-warning">
          {this.state.city}
        </div>

        <ul style={{width: '1700px'}} className="row mt-5 m-auto">
          {weeklyWeather}
        </ul>
      </div>
    );
  }
}

