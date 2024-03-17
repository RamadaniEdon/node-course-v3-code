const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = "https://api.weatherapi.com/v1/current.json?key=dfaf27037a144e36960163640241603&q="+ latitude + "," + longitude;

  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const {condition, temp_c, feelslike_c} = body.current;

      callback(undefined, condition.text + ". It is currently " + temp_c + " degrees out. It feels like " + feelslike_c + " degrees out.");
    }
  });
}

module.exports = forecast;