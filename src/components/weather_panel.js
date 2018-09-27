import React, { Component } from 'react';
import One_day_weather from './one_day_weather';
import { seven_day_weather } from '../data/temp_data';
import uniqid from 'uniqid';
import axios from 'axios';

const API_KEY = `a03d1bca85def2aa608a5297380cfa45`
const SERVER_NAME = `api.openweathermap.org`

export default class Weather_panel extends Component {
  
  constructor() {
    super();

    this.state = {
      city: '',
      fullDayData: []
    }

    this.getLocation();
  }

  getLocation () {
    navigator.geolocation.getCurrentPosition(async ({coords: {latitude: lat, longitude: lon}}) => {
      var { data } = await axios.get(`
        https://${SERVER_NAME}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      var {city: {name: city}, list: fullDayData} = data;
      this.setState({city, fullDayData})
    });
  }

  render() {
    var weeklyWeather = this.state.fullDayData.slice(0,5).map((threeHourData) => 
      <li key={uniqid()} style={{height: '200px'}} className="col-sm-2 card mx-1 bg-success container">
        <One_day_weather data={threeHourData}></One_day_weather>
      </li>
    );
    
    //style sucks here. Need to fix later
    //learn bootstrap then come back!!!
    return (
      <div className="container-fluid">
        <div className="text-center container text-uppercase display-2 border mb-4 bg-warning">
          {this.state.city}
        </div>

        <ul style={{width: '1700px'}} className="row mt-5 m-auto container">
          {weeklyWeather}
        </ul>
      </div>
    );
  }
}

