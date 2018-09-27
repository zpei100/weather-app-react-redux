import axios from 'axios';

const GET_WEATHER = 'GET_WEATHER';
const API_KEY = `a03d1bca85def2aa608a5297380cfa45`;
const SERVER_NAME = `api.openweathermap.org`;

var getWeather = function() {
  return async function(dispatch) {
    var payload = await new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude: lat, longitude: lon } }) => {
          resolve(await axios.get(
            `https://${SERVER_NAME}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          ))    
        }
      );
    });

    dispatch({
      type: GET_WEATHER,
      payload
    });
  };
}

export { GET_WEATHER, getWeather}