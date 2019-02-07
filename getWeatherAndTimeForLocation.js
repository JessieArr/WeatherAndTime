const restClient = require('node-rest-client').Client
const client = new restClient()
const getTimezoneForWeatherResult = require("./getTimezoneForWeatherResult")

function getWeatherAndTimeForLocation(location) {
  const result = client.get("https://api.openweathermap.org/data/2.5/weather?zip=" + location.postalCode + ",us&appid=375aef3b44a5e04fa5322737dfa0140b", (data, response) => {
    if(response.statusCode != 200){
      console.log("Error looking up weather data:")
      console.log(response)
    }else{
      getTimezoneForWeatherResult(location, data)
    }
  })
  return result
}

module.exports = getWeatherAndTimeForLocation
