const fs = require("fs")
const getWeatherAndTimeForLocation = require("./getWeatherAndTimeForLocation")

const locationFileData = fs.readFileSync("default-locations.json")
const parsedLocations = JSON.parse(locationFileData)
parsedLocations.forEach(function(location){
  getWeatherAndTimeForLocation(location)
})
