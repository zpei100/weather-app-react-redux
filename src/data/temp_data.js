var create_weather = function(low, high, weather) {
  return {
    low, high, weather
  }
}

var weather_conditions = ['sunny', 'rainy', 'cloudy', 'thunder storm']

var random_weather = function() { 
  return weather_conditions[Math.floor(Math.random() * weather_conditions.length)]
}

var seven_day_weather = [
  create_weather(60, 70, random_weather()),
  create_weather(50, 80, random_weather()),
  create_weather(65, 75, random_weather()),
  create_weather(70, 73, random_weather()),
  create_weather(50, 89, random_weather()),
  create_weather(40, 90, random_weather())
]

module.exports = { seven_day_weather };