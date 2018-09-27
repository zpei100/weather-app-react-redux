import { GET_WEATHER } from '../action_creaters/getWeather';

export default function(state = [], action) {
  switch (action.type) {
    case GET_WEATHER: {
      var {city: {name: city}, list} = action.payload.data;
      console.log('inside reducer', city, list  )
      return {city, fullDayWeather: list}
    }
  }
  return state;
}

