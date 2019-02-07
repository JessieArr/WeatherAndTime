const restClient = require('node-rest-client').Client;
const client = new restClient();

function getTimezoneForWeatherResult(location, weatherResult){
  const latitude = weatherResult.coord.lat
  const longitude = weatherResult.coord.lon
  const result = client.get("http://api.timezonedb.com/v2.1/get-time-zone?key=TRTU0X774GEB&by=position&lat=" + latitude + "&lng=" + longitude, (data, response) => {
    console.log(location.locationName + " current time and weather:")
    if(response.statusCode != 200){
      console.log("Error looking up timezone data:")
      console.log(response);
    }else{
      console.log("Current time: " + data.result.formatted)
      console.log(weatherResult.weather[0].description)  
    }
  })
  return result;
}

module.exports = getTimezoneForWeatherResult