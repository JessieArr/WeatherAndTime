const restClient = require('node-rest-client').Client;
const client = new restClient();

function getWeatherForZip() {
  const result = client.get("https://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=375aef3b44a5e04fa5322737dfa0140b", (data, response) => {
    return data
  })
  return result
}

module.exports = getWeatherForZip