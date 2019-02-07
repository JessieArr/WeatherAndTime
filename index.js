const fs = require("fs")
const getWeatherAndTimeForLocation = require("./getWeatherAndTimeForLocation")

const locationFileData = fs.readFileSync("default-locations.json")
const parsedLocations = JSON.parse(locationFileData)
let apiCallCount = 0;
parsedLocations.forEach(function(location){
  const apiRateLimitInMs = 1000;
  setTimeout(function(){
    getWeatherAndTimeForLocation(location)
  }, apiRateLimitInMs * apiCallCount)
  apiCallCount++
})
