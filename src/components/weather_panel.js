import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getWeather } from '../action_creaters/getWeather';
import { One_day_weather } from './one_day_weather';

import uniqid from 'uniqid'

class Weather_panel extends Component {
  
  componentDidMount() {
    this.props.getWeather();
  }

  componentDidUpdate(prevProps) {
    if (this.props.weatherData.length > 0) {

    }
  }

  render() {

    var weeklyWeather = (this.props.weatherData.city) ? this.props.weatherData.fullDayWeather.slice(0,6).map((data) => 
      <li key={uniqid()} style={{height: '200px'}} className="col-sm-2 card mx-1 bg-success container">
        <One_day_weather data={data}></One_day_weather>
      </li>
    ) : 'Retrieving Weather Data'
    
    //style sucks here. Need to fix later
    //learn bootstrap then come back!!!
    
    return (
      <div className="container-fluid">
        <div className="text-center container text-uppercase display-2 border mb-4 bg-warning">
          {this.props.weatherData.city}
        </div>

        <ul style={{width: '1700px'}} className="row mt-5 m-auto container">
          {weeklyWeather}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return { getWeather: bindActionCreators(getWeather, dispatch)}
}

function mapStateToProps(state) {
  return { weatherData: state.weatherData }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather_panel)
