const fs = require("fs")
const weatherApi = require("./getWeatherForZip")
const getTimezoneForPosition = require("./getTimezoneForPosition")

const locationFileData = fs.readFileSync("default-locations.json")
const parsedLocations = JSON.parse(locationFileData)
parsedLocations.forEach(function(location){
  console.log(location)
  let weather = weatherApi(location.postalCode)
  console.log(weather)
  let timezoneInfo = getTimezoneForPosition(30.419938, -87.208748)
  console.log(timezoneInfo)
})
