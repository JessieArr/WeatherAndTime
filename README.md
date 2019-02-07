# WeatherAndTime

This project fetches the current weather and time for a collection of locations.

## Input

Input is read from the default-locations.json file - for any additional locations, simply add them to this file and remove any that you no longer wish to see.

## APIs

This project uses the openweathermap.org and timezonedb.com APIs to look up current weather and timezone information respectively. These APIs impose some rate limiting on free accounts, so API calls are spaced out by 1 second to observe their limitations. These rate limits could be alleviated by using a paid API key.

## Error Handling

Current error handling is very basic - if an error is returned from an API, the error will be logged to the console and further processing for the current location is abandoned. This could be improved in the future with better logging, retries, or parsing the error response for expected error conditions.