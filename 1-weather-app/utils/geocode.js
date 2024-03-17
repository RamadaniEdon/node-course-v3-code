const request = require('request');

const geocode = (address, callback) => {
  const url = "https://api.geoapify.com/v1/geocode/search?text=" + address + "&format=json&apiKey=2c0fd0b74d644b63be154c7c6012402b";
  
  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.error || body.results.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {

      const {lat:latitude, lon:longitude, formatted:location} = body.results[0];

      callback(undefined, {
        latitude,
        longitude,
        location
      });
    }
  });

}

module.exports = geocode;