const request = require('request');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');


if(!process.argv[2]) {
  return console.log('Please provide a location');
} 
if(process.argv[3]) {
  return console.log('Please provide only one location');
}



geocode(process.argv[2], (error, {latitude, longitude, location} = {}) => {
  if(error) {
    return console.log(error);
  }

  forecast(latitude, longitude, (error, forecastData) => {
    if(error) {
      return console.log(error);
    }

    console.log(location);
    console.log(forecastData)
  });
});