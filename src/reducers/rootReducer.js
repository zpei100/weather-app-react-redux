import { combineReducers } from 'redux';
import reducer_DForecast from './reducer_DForecast'

export default combineReducers({
  weatherData: reducer_DForecast,
})

