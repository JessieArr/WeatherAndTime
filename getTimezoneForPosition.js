const restClient = require('node-rest-client').Client;
const client = new restClient();

function getTimezoneForPosition(latitude, longitude){
  const result = client.get("http://api.timezonedb.com/v2.1/get-time-zone?key=TRTU0X774GEB&by=position&lat=30.419938&lng=-87.208748", (data, response) => {
    return data
  })
  return result;
}

module.exports = getTimezoneForPosition